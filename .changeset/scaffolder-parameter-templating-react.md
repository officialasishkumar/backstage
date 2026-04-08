---
'@backstage/plugin-scaffolder-react': minor
---

Added support for nunjucks template expressions in parameter schemas. The Stepper now resolves `${{ parameters.fieldName }}` expressions in schema properties like `default`, `enum`, `title`, and `description` by calling the scaffolder backend. Includes dirty field tracking so user-edited values are not overwritten by re-evaluated defaults.
