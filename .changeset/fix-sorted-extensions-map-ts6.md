---
'@backstage/frontend-plugin-api': patch
---

Replaced the type-level sort in `MakeSortedExtensionsMap` with a direct mapped type to avoid excessive type instantiation depth in TypeScript 6 for plugins with many extensions.
