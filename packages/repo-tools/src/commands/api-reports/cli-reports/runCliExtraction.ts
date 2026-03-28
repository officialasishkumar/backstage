/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  basename,
  resolve as resolvePath,
  relative as relativePath,
} from 'node:path';
import fs from 'fs-extra';
import { Command } from 'commander';
import {
  OpaqueCliModule,
  OpaqueCommandTreeNode,
  OpaqueCommandLeafNode,
  isCommandNodeHidden,
} from '@internal/cli';
import type { CliModule, CliCommand } from '@backstage/cli-node';
import type { CommandNode } from '@internal/cli';
import { CliHelpPage, CliModel } from './types';
import { targetPaths } from '@backstage/cli-common';
import { generateCliReport } from './generateCliReport';
import { logApiReportInstructions } from '../common';

function parseHelpPage(helpPageContent: string) {
  let usage: string | undefined;

  // Commander format: "Usage: backstage-cli ..."
  const commanderUsage = helpPageContent.match(/^\s*Usage: (.*)$/im);
  if (commanderUsage) {
    usage = commanderUsage[1];
  }

  const lines = helpPageContent.split(/\r?\n/);

  let options = new Array<string>();
  let commands = new Array<string>();
  let commandArguments = new Array<string>();

  while (lines.length > 0) {
    while (lines.length > 0 && !lines[0].endsWith(':')) {
      lines.shift();
    }
    if (lines.length > 0) {
      // Start of a new section, e.g. "Options:" or "FLAGS:"
      const sectionName = lines.shift()?.toLocaleLowerCase('en-US');
      // Take lines until we hit the next section or the end
      const sectionEndIndex = lines.findIndex(
        line => line && !line.match(/^\s/),
      );
      const sectionLines = lines.slice(0, sectionEndIndex);
      lines.splice(0, sectionLines.length);

      // Trim away documentation
      const sectionItems = sectionLines
        .map(line => line.match(/^\s{1,8}(.*?)\s\s+/)?.[1])
        .filter(Boolean) as string[];

      if (sectionName === 'options:' || sectionName === 'flags:') {
        options = sectionItems;
      } else if (sectionName === 'commands:') {
        commands = sectionItems;
      } else if (sectionName === 'arguments:') {
        commandArguments = sectionItems;
      } else if (sectionName === 'usage:') {
        // cleye format: usage line is inside the USAGE: section
        const usageLine = sectionLines.find(l => l.trim().length > 0)?.trim();
        if (usageLine) {
          usage = usageLine;
        }
      } else {
        throw new Error(`Unknown CLI section: ${sectionName}`);
      }
    }
  }

  options.sort();
  commands.sort();
  commandArguments.sort();

  return {
    usage,
    options,
    commands,
    commandArguments,
  };
}

/**
 * Extracts the flat list of CliCommands from a CliModule.
 */
async function getModuleCommands(
  cliModule: CliModule,
): Promise<ReadonlyArray<CliCommand>> {
  if (!OpaqueCliModule.isType(cliModule)) {
    throw new Error('Expected a valid CliModule created with createCliModule');
  }
  return OpaqueCliModule.toInternal(cliModule).commands;
}

/**
 * Loads the CLI module(s) from a package directory. The main `cli` package
 * (role: 'cli') aggregates all modules via cli-defaults, while individual
 * cli-module packages export a single CliModule.
 */
async function loadCommandsFromPackage(
  fullDir: string,
  pkgJson: { name: string; backstage?: { role?: string } },
): Promise<ReadonlyArray<CliCommand>> {
  if (pkgJson.backstage?.role === 'cli') {
    // The main CLI host package discovers and loads modules at runtime.
    // We resolve cli-defaults from its dependencies to get the full set
    // of commands without executing the CLI entry point.
    const defaultsPath = require.resolve('@backstage/cli-defaults', {
      paths: [fullDir],
    });
    const discovered = require(defaultsPath);
    const modules: CliModule[] = discovered.default ?? discovered;
    const allCommands: CliCommand[] = [];
    for (const m of modules) {
      allCommands.push(...(await getModuleCommands(m)));
    }
    return allCommands;
  }

  // Single cli-module package
  const srcIndex = resolvePath(fullDir, 'src/index');
  const mod = require(srcIndex);
  const cliModule: CliModule = mod.default ?? mod;
  return getModuleCommands(cliModule);
}

/**
 * Builds a Commander program from a flat list of CliCommands, replicating the
 * same structure that runCliModule / CliInitializer would produce at runtime.
 */
function buildCommanderProgram(
  programName: string,
  commands: ReadonlyArray<CliCommand>,
): Command {
  // Build the command graph (tree nodes + leaf nodes)
  const graph: CommandNode[] = [];

  for (const command of commands) {
    const { path } = command;
    let current = graph;

    for (let i = 0; i < path.length - 1; i++) {
      const name = path[i];
      let next = current.find(
        n =>
          OpaqueCommandTreeNode.isType(n) &&
          OpaqueCommandTreeNode.toInternal(n).name === name,
      );
      if (!next) {
        next = OpaqueCommandTreeNode.createInstance('v1', {
          name,
          children: [],
        });
        current.push(next);
      }
      current = OpaqueCommandTreeNode.toInternal(next).children;
    }

    current.push(
      OpaqueCommandLeafNode.createInstance('v1', {
        name: path[path.length - 1],
        command,
      }),
    );
  }

  // Register onto a Commander program
  const program = new Command();
  program.name(programName).allowUnknownOption(true).allowExcessArguments(true);

  const queue = graph.map(node => ({ node, argParser: program }));
  while (queue.length) {
    const { node, argParser } = queue.shift()!;
    if (OpaqueCommandTreeNode.isType(node)) {
      const internal = OpaqueCommandTreeNode.toInternal(node);
      const treeParser = argParser
        .command(`${internal.name} [command]`, {
          hidden: isCommandNodeHidden(node),
        })
        .description(internal.name);
      queue.push(
        ...internal.children.map(child => ({
          node: child,
          argParser: treeParser,
        })),
      );
    } else {
      const internal = OpaqueCommandLeafNode.toInternal(node);
      argParser
        .command(internal.name, {
          hidden:
            !!internal.command.deprecated || !!internal.command.experimental,
        })
        .description(internal.command.description)
        .helpOption(false)
        .allowUnknownOption(true)
        .allowExcessArguments(true);
    }
  }

  return program;
}

/**
 * Walks a Commander program tree and extracts help pages by calling
 * helpInformation() on each command, then parsing the output.
 */
function extractHelpPages(program: Command): CliHelpPage[] {
  const helpPages = new Array<CliHelpPage>();

  function walk(cmd: Command, path: string[]) {
    const helpText = cmd.helpInformation();
    const parsed = parseHelpPage(helpText);
    helpPages.push({ path, ...parsed });

    for (const sub of cmd.commands) {
      if (sub.name() !== 'help') {
        walk(sub, [...path, sub.name()]);
      }
    }
  }

  walk(program, []);

  helpPages.sort((a, b) => a.path.join(' ').localeCompare(b.path.join(' ')));
  return helpPages;
}

interface CliExtractionOptions {
  packageDirs: string[];
  isLocalBuild: boolean;
}

export async function runCliExtraction({
  packageDirs,
  isLocalBuild,
}: CliExtractionOptions) {
  for (const packageDir of packageDirs) {
    console.log(`## Processing ${packageDir}`);
    const fullDir = targetPaths.resolveRoot(packageDir);
    const pkgJson = await fs.readJson(resolvePath(fullDir, 'package.json'));

    if (!pkgJson.bin) {
      if (pkgJson.backstage?.role === 'cli') {
        throw new Error(
          `CLI package ${pkgJson.name} is missing a "bin" field in its package.json`,
        );
      }
      continue;
    }

    const commands = await loadCommandsFromPackage(fullDir, pkgJson);

    const binEntries: Array<[string, string]> =
      typeof pkgJson.bin === 'string'
        ? [[basename(pkgJson.bin), pkgJson.bin]]
        : Object.entries(pkgJson.bin);

    const models = new Array<CliModel>();
    for (const [name] of binEntries) {
      const program = buildCommanderProgram(name, commands);
      const helpPages = extractHelpPages(program);
      models.push({ name, helpPages });
    }

    for (const model of models) {
      const report = generateCliReport({ packageName: pkgJson.name, model });

      const reportPath = resolvePath(
        fullDir,
        `cli-report.${models.length === 1 ? '' : `${model.name}.`}md`,
      );
      const existingReport = await fs
        .readFile(reportPath, 'utf8')
        .catch(error => {
          if (error.code === 'ENOENT') {
            return undefined;
          }
          throw error;
        });

      if (existingReport !== report) {
        if (isLocalBuild) {
          console.warn(`CLI report changed for ${packageDir}`);
          await fs.writeFile(reportPath, report);
        } else {
          logApiReportInstructions();

          if (existingReport) {
            console.log('');
            console.log(
              `The conflicting file is ${relativePath(
                targetPaths.rootDir,
                reportPath,
              )}, expecting the following content:`,
            );
            console.log('');

            console.log(report);

            logApiReportInstructions();
          }
          throw new Error(`CLI report changed for ${packageDir}, `);
        }
      }
    }
  }
}
