---
'@backstage/plugin-catalog-backend': patch
---

Added covering database indices on the `search` table for improved entity filter query performance. The new `(entity_id, key, value)` and `(key, value, entity_id)` indices enable index-only scans, eliminating heap fetches during filter queries on large catalogs.
