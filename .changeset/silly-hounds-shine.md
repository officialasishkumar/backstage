---
'@backstage/frontend-plugin-api': patch
---

Added `titleRouteRef` option to `createFrontendPlugin`. When set, page headers render the plugin title as a link to this route. Falls back to the `root` route if not provided.
