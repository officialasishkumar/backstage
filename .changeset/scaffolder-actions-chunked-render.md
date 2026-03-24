---
'@backstage/plugin-scaffolder': patch
---

The actions page now defers rendering of each action's content until it approaches the viewport, avoiding a UI hang when navigating to the page with many actions.
