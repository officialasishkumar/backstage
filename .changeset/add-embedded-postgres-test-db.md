---
'@backstage/backend-test-utils': minor
---

Added a new `EMBEDDED_POSTGRES` test database type that uses the `embedded-postgres` package to run a real Postgres instance without Docker. To use it, install `embedded-postgres` as a dependency in the root of your project, matching whatever Postgres version you use in production. You also need to pass `--experimental-vm-modules` to Node.js when running tests, for example by setting `NODE_OPTIONS=--experimental-vm-modules`. The new database type is automatically included when the package is available, and gracefully skipped otherwise.
