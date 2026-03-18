---
'@backstage/repo-tools': patch
---

Skipped `.mts` and `.cts` exports when generating API reports, since API Extractor does not support `.d.mts` or `.d.cts` declaration files.
