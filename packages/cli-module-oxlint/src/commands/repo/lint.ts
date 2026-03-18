/*
 * Copyright 2026 The Backstage Authors
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

import { spawnSync } from 'node:child_process';
import { cli } from 'cleye';
import { relative as relativePath } from 'node:path';
import { PackageGraph } from '@backstage/cli-node';
import { targetPaths } from '@backstage/cli-common';
import type { CliCommandContext } from '@backstage/cli-node';
import { resolveOxlintBin, resolveOxlintConfig } from '../../lib/oxlint';

export default async ({ args, info }: CliCommandContext) => {
  const {
    flags: { fix, since },
  } = cli(
    {
      help: info,
      booleanFlagNegation: true,
      flags: {
        fix: {
          type: Boolean,
          description: 'Attempt to automatically fix violations',
        },
        since: {
          type: String,
          description:
            'Only lint packages that changed since the specified ref',
        },
      },
    },
    undefined,
    args,
  );

  if (!process.env.FORCE_COLOR) {
    process.env.FORCE_COLOR = '1';
  }

  const oxlintArgs: string[] = [];

  const configPath = resolveOxlintConfig();
  if (configPath) {
    oxlintArgs.push('-c', configPath);
  }

  if (fix) {
    oxlintArgs.push('--fix');
  }

  if (since) {
    let packages = await PackageGraph.listTargetPackages();
    const graph = PackageGraph.fromPackages(packages);
    packages = await graph.listChangedPackages({
      ref: since,
      analyzeLockfile: true,
    });

    for (const pkg of packages) {
      oxlintArgs.push(relativePath(targetPaths.rootDir, pkg.dir));
    }
  } else {
    oxlintArgs.push('.');
  }

  const result = spawnSync(resolveOxlintBin(), oxlintArgs, {
    cwd: targetPaths.rootDir,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};
