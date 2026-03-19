---
'@backstage/plugin-catalog-react': patch
---

Simplified the internal state management of `EntityListProvider` by replacing `useAsyncFn`, `useDebounce`, and `useMountedState` with a single effect-based approach, reducing complexity without changing behavior.
