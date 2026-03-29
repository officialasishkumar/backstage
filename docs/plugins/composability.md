---
id: composability
title: Composability System
description: Documentation for the Backstage plugin composability system.
---

::::info
This documentation is written for the new frontend system, which is the default
in new Backstage apps. If your Backstage app still uses the old frontend system,
read the [old frontend system version of this guide](./composability--old.md)
instead.
::::

## Summary

This page describes the composability system that brings together content from a
multitude of plugins into one Backstage application.

The core principle of the composability system is that plugins should have clear
boundaries and connections. It should isolate crashes within a plugin, but allow
navigation between them. It should allow for plugins to be loaded only when
needed, and enable plugins to provide extension points for other plugins to build
upon.

## Concepts

The new frontend system is built on an extension-based architecture where
plugins contribute functionality through _extensions_. Extensions are assembled
into a tree that makes up the application, with each extension declaring its
inputs, outputs, and attachment point. This architecture replaces the old
patterns of component data, `createRoutableExtension`, and
`createComponentExtension`.

### Extensions

Extensions are the primary building blocks of the new frontend system. Every
piece of functionality that a plugin provides — pages, cards, API
implementations, navigation items — is modeled as an extension.

Extensions are created using
[extension blueprints](../frontend-system/architecture/23-extension-blueprints.md),
which are pre-defined templates for common extension types. For example,
`PageBlueprint` creates page extensions, `EntityCardBlueprint` creates entity
cards, and `ApiBlueprint` creates utility API extensions.

```tsx title="src/plugin.ts"
import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

const examplePage = PageBlueprint.make({
  params: {
    path: '/example',
    loader: () =>
      import('./components/ExamplePage').then(m => <m.ExamplePage />),
  },
});

export const examplePlugin = createFrontendPlugin({
  pluginId: 'example',
  extensions: [examplePage],
});
```

Extensions are not exported individually from the plugin package. Instead, they
are provided through the plugin instance, and the app discovers them
automatically when the plugin is installed.

For full details on creating extensions, see
[Extensions](../frontend-system/architecture/20-extensions.md).

### Extension Blueprints

Blueprints simplify creating extensions by providing a high-level API tailored
to a specific use case. Rather than working with the low-level `createExtension`
API directly, you use a blueprint's `make` method and pass in the parameters
relevant to that type of extension.

Common blueprints include:

| Blueprint                | Purpose                      | Package                                 |
| ------------------------ | ---------------------------- | --------------------------------------- |
| `PageBlueprint`          | Top-level pages              | `@backstage/frontend-plugin-api`        |
| `SubPageBlueprint`       | Tabbed content within a page | `@backstage/frontend-plugin-api`        |
| `ApiBlueprint`           | Utility API implementations  | `@backstage/frontend-plugin-api`        |
| `EntityContentBlueprint` | Entity page tabs             | `@backstage/plugin-catalog-react/alpha` |
| `EntityCardBlueprint`    | Entity overview cards        | `@backstage/plugin-catalog-react/alpha` |

For the full list, see
[Common Extension Blueprints](../frontend-system/building-plugins/03-common-extension-blueprints.md).

### Extension Tree

The app is organized as a tree of extensions. Each extension declares an
_attachment point_ — the parent extension and input it attaches to. This tree
structure determines how extensions are rendered and how data flows through the
application.

Extensions communicate with their parent through _inputs_ and _outputs_. A
parent extension declares what inputs it accepts, and child extensions provide
matching outputs. This makes the system fully declarative and allows the app to
validate the extension tree at startup.

### Configuration and Overrides

App integrators control which extensions are active, their ordering, and
configuration through `app-config.yaml`:

```yaml title="app-config.yaml"
app:
  extensions:
    - page:example:
        config:
          path: /my-custom-path
    - entity-content:my-plugin:
        config:
          filter: kind:component
```

Extensions can be enabled, disabled, reordered, or reconfigured without changing
any code. This is a key improvement over the old system where such changes
required modifying the app's source code.

### Routing System

The routing system uses `RouteRef`s to represent navigation targets. At runtime,
route references are bound to concrete paths, allowing plugins to link to each
other without direct dependencies.

There are three types of route references:

- **Route references** — regular routes created with `createRouteRef` and
  associated with page extensions.
- **Sub-route references** — routes relative to a parent route, created with
  `createSubRouteRef`.
- **External route references** — routes to pages in other plugins, created with
  `createExternalRouteRef` and bound by the app integrator.

External routes are bound through app configuration:

```yaml title="app-config.yaml"
app:
  routes:
    bindings:
      example.createComponent: scaffolder.index
```

Or through code in `createApp`:

```tsx title="packages/app/src/App.tsx"
import { createApp } from '@backstage/frontend-defaults';
import example from '@backstage/plugin-example';
import scaffolder from '@backstage/plugin-scaffolder';

const app = createApp({
  bindRoutes({ bind }) {
    bind(example.externalRoutes, {
      createComponent: scaffolder.routes.index,
    });
  },
});
```

External route references can also declare default targets to reduce
configuration burden:

```tsx
export const createComponentRouteRef = createExternalRouteRef({
  defaultTarget: 'scaffolder.createComponent',
});
```

For a comprehensive guide, see [Routes](../frontend-system/architecture/36-routes.md).

### Naming Patterns

The following naming patterns help clarify the intent of plugin exports:

| Description           | Pattern          | Examples                                             |
| --------------------- | ---------------- | ---------------------------------------------------- |
| Top-level Pages       | `*Page`          | `CatalogIndexPage`, `SettingsPage`, `LighthousePage` |
| Entity Tab Content    | `Entity*Content` | `EntityJenkinsContent`, `EntityKubernetesContent`    |
| Entity Overview Card  | `Entity*Card`    | `EntitySentryCard`, `EntityPagerDutyCard`            |
| Entity Conditional    | `is*Available`   | `isPagerDutyAvailable`, `isJenkinsAvailable`         |
| Plugin Instance       | `*Plugin`        | `jenkinsPlugin`, `catalogPlugin`                     |
| Utility API Reference | `*ApiRef`        | `configApiRef`, `catalogApiRef`                      |
