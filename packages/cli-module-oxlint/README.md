# @backstage/cli-module-oxlint

CLI module that provides oxlint commands for the Backstage CLI. This module
runs the custom `@backstage/eslint-plugin` rules using
[oxlint](https://oxc.rs/docs/guide/usage/linter.html)'s JS plugin system,
providing significantly faster linting for Backstage-specific import rules.

## Commands

| Command          | Description                      |
| :--------------- | :------------------------------- |
| `package oxlint` | Run oxlint on a package          |
| `repo oxlint`    | Run oxlint across the repository |

## Rules

This module runs the following rules from `@backstage/eslint-plugin` via
oxlint's JS plugin support:

- `@backstage/no-forbidden-package-imports`
- `@backstage/no-relative-monorepo-imports`
- `@backstage/no-undeclared-imports`
- `@backstage/no-mixed-plugin-imports`
- `@backstage/no-ui-css-imports-in-non-frontend`

## Documentation

- [Backstage Readme](https://github.com/backstage/backstage/blob/master/README.md)
- [Backstage Documentation](https://backstage.io/docs)
