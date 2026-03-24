---
id: plugin-ownership
sidebar_label: 007 - Plugin Ownership
title: Plugin Ownership
description: How to establish and manage plugin ownership across your organization
---

You're now well on your way to a healthy Backstage instance! It's been
launched to the whole company and you're loving the feedback developers are
giving you. Some developers have even started broaching writing their own
plugins.

## Inner source

Accepting internal contributions from other teams is a good sign that you are
on the road to a developer portal tailored for your developers. This is a well
paved path with many upsides, but a few downsides as well. As your Backstage
instance grows in size and age, those same developers may be difficult to find.
Your team may start to experience more and more struggle updating Backstage.

### Setting up for success

Before you open the floodgates to contributions, establish some guardrails.
A few things to think about:

1. **Contribution guidelines.** Document what a "good" plugin looks like.
   This includes coding standards, testing expectations, and documentation
   requirements. The [plugin golden path](../plugins/index.md) is a great
   starting point to share with prospective contributors.
1. **Review process.** Define who reviews plugin contributions and what
   criteria they use. A lightweight review process keeps quality high
   without creating a bottleneck.
1. **Templates.** Use the Scaffolder to create a plugin template that
   includes your organization's standards baked in. This reduces the back
   and forth during review and helps contributors get started faster.

### The ownership challenge

The hardest part of inner source is not getting contributions, it's
maintaining them. The developer who built a plugin during a hackathon may
have moved teams or left the company six months later. Without a plan for
this, you end up with plugins that break on upgrades and have no one to fix
them.

A few strategies that work well:

- **Team ownership over individual ownership.** Assign plugins to teams
  rather than individuals. Teams are more resilient to personnel changes.
- **Ownership rotation.** If a team can no longer maintain a plugin, have a
  process for transferring ownership. This should be lightweight but
  explicit. Nobody likes finding out they own something through a broken
  build.
- **Deprecation path.** Not every plugin needs to live forever. If a plugin
  is no longer maintained and no team wants to pick it up, deprecate it
  gracefully. Notify users, provide a timeline, and remove it cleanly.

### Encouraging contributions

Some developers will contribute without prompting. Most won't. A few ways
to encourage participation:

- **Hackathons.** Dedicate time for teams to build plugins that solve their
  own problems. This is how many of the best plugins get started.
- **A plugin wishlist.** Maintain a list of plugins that teams have
  requested but nobody has built yet. This gives motivated contributors a
  clear place to start.
- **Recognition.** Acknowledge contributors in your internal communications.
  A shout-out in the engineering newsletter goes a long way.

## Registering plugins in your catalog

As the number of plugins grows, it becomes important to track them like you
track everything else in Backstage: through the Software Catalog.

### Why catalog your plugins?

Registering your plugins as catalog entities gives you:

- **Visibility.** Teams can browse available plugins and understand what
  each one does before installing it.
- **Ownership tracking.** You can see at a glance which team owns which
  plugin, making it easier to route questions and bug reports.
- **Lifecycle management.** You can track the status of each plugin
  (experimental, production, deprecated) and surface that information to
  users.

### How to register a plugin

Each plugin in your monorepo (or separate repo) should have a
`catalog-info.yaml` file that describes it. At a minimum, this should include:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: plugin-my-feature
  description: A short description of what this plugin does.
  tags:
    - backstage-plugin
spec:
  type: backstage-plugin
  lifecycle: production
  owner: team-platform
```

If your plugin exposes an API (for example, a backend plugin with REST
endpoints), consider also registering an `API` entity that describes the
interface. This helps other developers understand how to integrate with your
plugin.

### Keeping it up to date

Plugin catalog entries have the same freshness challenges as any other
catalog entry. Automate where you can. If you're using a monorepo for
plugins, a catalog provider that discovers `catalog-info.yaml` files
automatically is worth the setup investment. The
[next section](./008-full-catalog.md) covers strategies for keeping your
entire catalog complete and current.
