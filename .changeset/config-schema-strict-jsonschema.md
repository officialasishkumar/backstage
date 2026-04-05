---
'@backstage/cli-module-config': patch
---

Added a `--strict` flag to `config:schema` that outputs a conformant JSON Schema Draft 7 document. This renames Backstage-specific keywords (`visibility`, `deepVisibility`, `deprecated`) to `x-`-prefixed extensions and sets the standard `$schema` URI, making the output compatible with JSON Schema tooling such as YAML language servers for editor autocompletion.
