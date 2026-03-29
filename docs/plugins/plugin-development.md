---
id: plugin-development
title: Plugin Development
description: Documentation on Plugin Development
---

::::info
This documentation is written for the new frontend system, which is the default
in new Backstage apps. If your Backstage app still uses the old frontend system,
read the [old frontend system version of this guide](./plugin-development--old.md)
instead.
::::

Backstage plugins provide features to a Backstage App.

Each plugin is treated as a self-contained web app and can include almost any
type of content. Plugins all use a common set of platform APIs and reusable UI
components. Plugins can fetch data from external sources using the regular
browser APIs or by depending on external modules to do the work.

## Developing guidelines

- Consider writing plugins in `TypeScript`.
- Plan the directory structure of your plugin so that it becomes easy to manage.
- Prefer using the [Backstage components](https://backstage.io/storybook),
  otherwise go with [Material UI](https://material-ui.com/).
- Check out the shared Backstage APIs before building a new one.

## Creating a new plugin

To create a frontend plugin, run `yarn new`, select `plugin`, and fill out the
prompts. This will create a new package at `plugins/<pluginId>`.

## The plugin instance

The starting point of a frontend plugin is the `createFrontendPlugin` function
from `@backstage/frontend-plugin-api`. It accepts a single options object and
returns a plugin instance that should be the default export of your package.

```tsx title="src/plugin.ts"
import { createFrontendPlugin } from '@backstage/frontend-plugin-api';

export const examplePlugin = createFrontendPlugin({
  pluginId: 'example',
  extensions: [],
});
```

```tsx title="src/index.ts"
export { examplePlugin as default } from './plugin';
```

Exporting the plugin as the default export allows it to be automatically
discovered and installed in a Backstage app without any code changes in the app
itself.

The plugin ID should be a lowercase dash-separated string, and the plugin
instance variable should be the camel case version of the ID with a `Plugin`
suffix. For more details, see
[naming patterns](../frontend-system/architecture/50-naming-patterns.md).

## Adding a page extension

To add functionality you provide the plugin with one or more
[extensions](../frontend-system/architecture/20-extensions.md). Let's add a page
to our plugin along with a navigation item.

Extensions are created using
[extension blueprints](../frontend-system/architecture/23-extension-blueprints.md).
For a page we use `PageBlueprint` from `@backstage/frontend-plugin-api`. We also
need a [route reference](../frontend-system/architecture/36-routes.md#creating-a-route-reference)
so that other parts of the app can link to our page.

```tsx title="src/routes.ts"
import { createRouteRef } from '@backstage/frontend-plugin-api';

export const rootRouteRef = createRouteRef();
```

```tsx title="src/plugin.ts"
import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';
import { rootRouteRef } from './routes';

const examplePage = PageBlueprint.make({
  params: {
    routeRef: rootRouteRef,
    path: '/example',
    loader: () =>
      import('./components/ExamplePage').then(m => <m.ExamplePage />),
  },
});

export const examplePlugin = createFrontendPlugin({
  pluginId: 'example',
  extensions: [examplePage],
  routes: {
    root: rootRouteRef,
  },
});
```

The page will automatically be available at `/example` and a navigation item
will appear in the sidebar using the plugin's `title` and `icon` properties.

The `ExamplePage` component referenced in the `loader` is a regular React
component where you implement the actual page content.

## Running a dev server

Each frontend plugin package has a `dev/` folder used as the entry point when
you run `yarn start`. The `@backstage/frontend-dev-utils` package provides a
`createDevApp` helper:

```tsx title="dev/index.ts"
import { createDevApp } from '@backstage/frontend-dev-utils';
import myPlugin from '../src';

createDevApp({ features: [myPlugin] });
```

This creates and renders a minimal Backstage app with only your plugin
installed. Run `yarn start` in the plugin directory to launch the dev server
with hot reloading.

## Routing

The new frontend system uses route references to provide a level of indirection
for navigation between plugins. A route reference is an opaque value that
represents a route target, which gets bound to a concrete path at runtime.

### Route references

Route references are created with `createRouteRef` from
`@backstage/frontend-plugin-api` and are typically placed in a dedicated
`src/routes.ts` file to avoid circular imports:

```tsx title="src/routes.ts"
import { createRouteRef } from '@backstage/frontend-plugin-api';

export const rootRouteRef = createRouteRef();
```

Use `useRouteRef` to create concrete URLs from a route reference:

```tsx
import { useRouteRef } from '@backstage/frontend-plugin-api';
import { rootRouteRef } from '../routes';

function MyComponent() {
  const getPath = useRouteRef(rootRouteRef);
  return <a href={getPath?.()}>Go to example</a>;
}
```

### External route references

To link to pages provided by other plugins without creating a direct dependency,
use external route references. These are bound to concrete routes by the app
integrator through configuration or code.

```tsx title="src/routes.ts"
import { createExternalRouteRef } from '@backstage/frontend-plugin-api';

export const createComponentRouteRef = createExternalRouteRef();
```

Provide the external route through your plugin so that app integrators can bind
it:

```tsx title="src/plugin.ts"
export const examplePlugin = createFrontendPlugin({
  pluginId: 'example',
  extensions: [examplePage],
  routes: {
    root: rootRouteRef,
  },
  externalRoutes: {
    createComponent: createComponentRouteRef,
  },
});
```

App integrators bind external routes in `app-config.yaml`:

```yaml title="app-config.yaml"
app:
  routes:
    bindings:
      example.createComponent: scaffolder.index
```

You can also provide a sensible default target to reduce configuration needed by
app integrators:

```tsx
export const createComponentRouteRef = createExternalRouteRef({
  defaultTarget: 'scaffolder.createComponent',
});
```

For a comprehensive guide to the routing system, see
[Routes](../frontend-system/architecture/36-routes.md).

## Naming patterns

The following naming patterns help clarify the intent and usage of plugin
exports:

| Description           | Pattern          | Examples                                             |
| --------------------- | ---------------- | ---------------------------------------------------- |
| Top-level Pages       | `*Page`          | `CatalogIndexPage`, `SettingsPage`, `LighthousePage` |
| Entity Tab Content    | `Entity*Content` | `EntityJenkinsContent`, `EntityKubernetesContent`    |
| Entity Overview Card  | `Entity*Card`    | `EntitySentryCard`, `EntityPagerDutyCard`            |
| Entity Conditional    | `is*Available`   | `isPagerDutyAvailable`, `isJenkinsAvailable`         |
| Plugin Instance       | `*Plugin`        | `jenkinsPlugin`, `catalogPlugin`                     |
| Utility API Reference | `*ApiRef`        | `configApiRef`, `catalogApiRef`                      |
