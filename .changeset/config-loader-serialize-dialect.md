---
'@backstage/config-loader': patch
---

Added an optional `schema` dialect option to `ConfigSchema.serialize()`. When set to `'http://json-schema.org/draft-07/schema#'`, the serialized schemas are transformed to be conformant JSON Schema Draft 7 by renaming Backstage-specific keywords (`visibility`, `deepVisibility`, `deprecated`) to `x-`-prefixed extensions (`x-visibility`, `x-deepVisibility`, `x-deprecated`) and converting `deprecated` string values to the standard `deprecated: true` boolean.
