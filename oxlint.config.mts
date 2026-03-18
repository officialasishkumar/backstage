import { defineBackstageConfig } from '@backstage/cli-module-oxlint/config';

export default await defineBackstageConfig({
  jsPlugins: ['eslint-plugin-storybook'],
  ignorePatterns: [
    '**/templates/**',
    '**/sample-templates/**',
    '**/static/**',
    '**/config/**',
    '**/.eslintrc.*',
    '**/microsite/**',
    '**/docs-ui/**',
  ],
  overrides: [
    {
      files: ['**/*.stories.*', '**/*.story.*'],
      rules: {
        '@backstage/no-relative-monorepo-imports': 'off',
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'warn',
        'storybook/no-redundant-story-name': 'warn',
        'storybook/prefer-pascal-case': 'warn',
        'storybook/story-exports': 'error',
      },
    },
    {
      files: [
        'packages/frontend-defaults/**',
        'packages/frontend-dev-utils/**',
        'packages/frontend-test-utils/**',
      ],
      rules: {
        '@backstage/no-mixed-plugin-imports': [
          'warn',
          { excludedTargetPackages: ['@backstage/plugin-app'] },
        ],
      },
    },
    {
      files: [
        'plugins/techdocs-addons-test-utils/**',
        'plugins/api-docs/**',
        'plugins/catalog-backend-module-logs/**',
        'plugins/auth-backend-module-oidc-provider/**',
      ],
      rules: {
        '@backstage/no-mixed-plugin-imports': [
          'warn',
          {
            excludedTargetPackages: [
              '@backstage/plugin-techdocs',
              '@backstage/plugin-catalog',
              '@backstage/plugin-catalog-backend',
              '@backstage/plugin-auth-backend',
            ],
          },
        ],
      },
    },
    {
      files: ['plugins/techdocs-module-addons-contrib/**'],
      rules: {
        '@backstage/no-top-level-material-ui-4-imports': 'off',
      },
    },
  ],
});
