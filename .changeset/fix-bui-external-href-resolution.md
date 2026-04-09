---
'@backstage/ui': patch
---

Fixed external `href` handling in BUI link components. External URLs now bypass route-relative resolution so components like `ButtonLink` continue to navigate outside the Backstage app while relative internal links still resolve against the current route.
