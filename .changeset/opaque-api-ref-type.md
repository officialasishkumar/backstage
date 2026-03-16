---
'@backstage/frontend-plugin-api': minor
---

**BREAKING**: The `ApiRef` type is now an opaque type with a `$$type` discriminator field, matching the pattern used by `ExtensionDataRef`. The `createApiRef` function now also supports a chained creation form: `createApiRef<MyApi>().with({ id: 'my-api' })`. The previous shorthand form `createApiRef<MyApi>({ id: 'my-api' })` is still supported.
