---
'@backstage/backend-test-utils': minor
---

Added a new `EMBEDDED_POSTGRES` test database type that uses the `embedded-postgres` package to run a real Postgres instance without Docker. To use it, install `embedded-postgres` as a dependency in your project. The new database type is automatically included when the package is available, and gracefully skipped otherwise.
