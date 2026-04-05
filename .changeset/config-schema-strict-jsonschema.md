---
'@backstage/cli-module-config': patch
---

Added a `--strict` flag to `config:schema` that outputs conformant JSON Schema Draft 7 documents, compatible with JSON Schema tooling such as YAML language servers for editor autocompletion. Can be combined with `--merge` to produce a single merged strict schema.
