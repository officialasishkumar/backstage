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

import { relative } from 'node:path';
import {
  defineConfig,
  type OxlintConfig,
  type DummyRule,
  type DummyRuleMap,
  type OxlintOverride,
} from 'oxlint';
import { getPackages } from '@manypkg/get-packages';

export { defineConfig } from 'oxlint';
export type { OxlintConfig, OxlintOverride, DummyRuleMap } from 'oxlint';

/**
 * Merges two rule maps. When both base and user define the same rule as
 * `[severity, options]` arrays, the options objects are shallow-merged so
 * the user can add fields without repeating the base options.
 */
function mergeRules(base: DummyRuleMap, user?: DummyRuleMap): DummyRuleMap {
  if (!user) {
    return base;
  }
  const merged = { ...base };
  for (const [key, userValue] of Object.entries(user)) {
    const baseValue: DummyRule | undefined = merged[key];
    if (
      Array.isArray(baseValue) &&
      Array.isArray(userValue) &&
      baseValue.length === 2 &&
      userValue.length === 2 &&
      typeof baseValue[1] === 'object' &&
      baseValue[1] !== null &&
      typeof userValue[1] === 'object' &&
      userValue[1] !== null
    ) {
      merged[key] = [userValue[0], { ...baseValue[1], ...userValue[1] }];
    } else {
      merged[key] = userValue;
    }
  }
  return merged;
}

const webRoles = new Set([
  'web-library',
  'frontend',
  'frontend-plugin',
  'frontend-plugin-module',
  'frontend-dynamic-container',
]);

const nodeRoles = new Set([
  'node-library',
  'backend',
  'backend-plugin',
  'backend-plugin-module',
  'backend-dynamic-container',
  'cli',
  'cli-module',
]);

/**
 * Options for {@link defineBackstageConfig}.
 *
 * Accepts all standard `OxlintConfig` fields, which are merged into the
 * generated Backstage base config. Array fields (`ignorePatterns`, `overrides`,
 * `plugins`, `jsPlugins`) are concatenated. Object fields (`rules`,
 * `categories`, `env`, `globals`, `settings`) are shallow-merged with user
 * values taking precedence. Backstage-specific options are documented below.
 *
 * @public
 */
export interface BackstageOxlintConfigOptions extends Partial<OxlintConfig> {
  /** Rules applied only to packages with a web/frontend backstage role. */
  webRules?: DummyRuleMap;
  /** Rules applied only to packages with a node/backend backstage role. */
  nodeRules?: DummyRuleMap;
}

/**
 * Creates an oxlint configuration for a Backstage monorepo. The configuration
 * is generated dynamically based on the `backstage.role` field in each
 * package's `package.json`, eliminating the need to hardcode package paths.
 *
 * Any standard oxlint config fields you pass are merged into the generated
 * base config:
 *
 * - `rules` — shallow-merged; your rules override the defaults
 * - `overrides` — appended after the generated role-based overrides
 * - `ignorePatterns` — appended to the base patterns
 * - `plugins`, `jsPlugins` — concatenated with defaults
 * - `categories`, `env`, `globals`, `settings` — shallow-merged
 *
 * @public
 */
export async function defineBackstageConfig(
  options: BackstageOxlintConfigOptions = {},
): Promise<OxlintConfig> {
  const {
    webRules: userWebRules,
    nodeRules: userNodeRules,
    rules: userRules,
    overrides: userOverrides,
    ignorePatterns: userIgnorePatterns,
    plugins: userPlugins,
    jsPlugins: userJsPlugins,
    categories: userCategories,
    env: userEnv,
    globals: userGlobals,
    settings: userSettings,
    ...passthrough
  } = options;

  const rootDir = process.cwd();
  const { packages } = await getPackages(rootDir);

  const webPaths: string[] = [];
  const nodePaths: string[] = [];

  for (const pkg of packages) {
    const role =
      ((pkg.packageJson as any).backstage?.role as string | undefined) ??
      'node-library';
    const relDir = `${relative(rootDir, pkg.dir)}/**`;

    if (webRoles.has(role)) {
      webPaths.push(relDir);
    } else if (nodeRoles.has(role)) {
      nodePaths.push(relDir);
    }
  }

  const generatedOverrides: OxlintOverride[] = [
    ...(userWebRules && webPaths.length > 0
      ? [{ files: webPaths, rules: userWebRules }]
      : []),
    ...(userNodeRules && nodePaths.length > 0
      ? [{ files: nodePaths, rules: userNodeRules }]
      : []),
  ];

  const baseRules: DummyRuleMap = {
    '@backstage/no-forbidden-package-imports': 'error',
    '@backstage/no-relative-monorepo-imports': 'error',
    '@backstage/no-undeclared-imports': 'error',
    '@backstage/no-mixed-plugin-imports': [
      'warn',
      {
        includedFiles: ['**/src/**'],
        excludedFiles: [
          '**/dev/**',
          '**/*.test.*',
          '**/*.spec.*',
          '**/*.stories.*',
          '**/__testUtils__/**',
          '**/__mocks__/**',
          '**/setupTests.*',
        ],
      },
    ],
    '@backstage/no-ui-css-imports-in-non-frontend': 'error',
    '@backstage/no-top-level-material-ui-4-imports': 'warn',
  };

  return defineConfig({
    ...passthrough,
    plugins: [...(userPlugins ?? [])],
    categories: {
      correctness: 'allow',
      suspicious: 'allow',
      pedantic: 'allow',
      perf: 'allow',
      style: 'allow',
      restriction: 'allow',
      nursery: 'allow',
      ...userCategories,
    },
    ...(userIgnorePatterns?.length
      ? { ignorePatterns: userIgnorePatterns }
      : {}),
    jsPlugins: ['@backstage/eslint-plugin', ...(userJsPlugins ?? [])],
    ...(userEnv ? { env: userEnv } : {}),
    ...(userGlobals ? { globals: userGlobals } : {}),
    ...(userSettings ? { settings: userSettings } : {}),
    rules: mergeRules(baseRules, userRules),
    overrides: [...generatedOverrides, ...(userOverrides ?? [])],
  });
}
