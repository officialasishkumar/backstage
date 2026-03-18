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
import { targetPaths } from '@backstage/cli-common';
import type { CliCommandContext } from '@backstage/cli-node';
import { resolveOxlintBin, resolveOxlintConfig } from '../../lib/oxlint';

export default async ({ args, info }: CliCommandContext) => {
  const {
    flags: { fix },
    _: directories,
  } = cli(
    {
      help: { ...info, usage: `${info.usage} [directories...]` },
      booleanFlagNegation: true,
      parameters: ['[directories...]'],
      flags: {
        fix: {
          type: Boolean,
          description: 'Attempt to automatically fix violations',
        },
      },
    },
    undefined,
    args,
  );

  const oxlintArgs: string[] = [];

  const configPath = resolveOxlintConfig();
  if (configPath) {
    oxlintArgs.push('-c', configPath);
  }

  if (fix) {
    oxlintArgs.push('--fix');
  }

  oxlintArgs.push(...(directories.length ? directories : ['.']));

  const result = spawnSync(resolveOxlintBin(), oxlintArgs, {
    cwd: targetPaths.dir,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};
