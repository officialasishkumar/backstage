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

import { resolve, dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { targetPaths } from '@backstage/cli-common';

export function resolveOxlintBin(): string {
  // require.resolve('oxlint') gives us .../dist/index.js, so we go up
  // two levels to the package root and find the bin from there.
  const mainPath = require.resolve('oxlint');
  const pkgDir = resolve(dirname(mainPath), '..');
  const binPath = join(pkgDir, 'bin', 'oxlint');

  if (!existsSync(binPath)) {
    throw new Error(
      `Could not find oxlint binary at ${binPath}. Make sure oxlint is installed.`,
    );
  }

  return binPath;
}

/** Resolves the oxlint config path, looking for .mts then .ts at the repo root. */
export function resolveOxlintConfig(): string | undefined {
  const rootDir = targetPaths.rootDir;
  for (const name of ['oxlint.config.mts', 'oxlint.config.ts']) {
    const configPath = join(rootDir, name);
    if (existsSync(configPath)) {
      return configPath;
    }
  }
  return undefined;
}
