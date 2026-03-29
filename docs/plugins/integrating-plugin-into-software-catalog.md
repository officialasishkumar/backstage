---
id: integrating-plugin-into-software-catalog
title: Integrate into the Software Catalog
description: How to integrate a plugin into software catalog
---

::::info
This documentation is written for the new frontend system, which is the default
in new Backstage apps. If your Backstage app still uses the old frontend system,
read the [old frontend system version of this guide](./integrating-plugin-into-software-catalog--old.md)
instead.
::::

The Software Catalog in Backstage provides entity pages that can be extended
with content from plugins. In the new frontend system, plugins contribute to
entity pages through extensions created with blueprints from
`@backstage/plugin-catalog-react/alpha`.

## Steps

1. [Create a plugin](#create-a-plugin)
2. [Reading entities from within your plugin](#reading-entities-from-within-your-plugin)
3. [Add entity content or cards via extensions](#add-entity-content-or-cards-via-extensions)
4. [Configuring where extensions appear](#configuring-where-extensions-appear)

### Create a plugin

Follow the [same process](create-a-plugin.md) as for any plugin. You should
have a separate package in a folder that represents your plugin.

```
$ yarn new
# Select `frontend-plugin`
> ? Enter an ID for the plugin [required] my-plugin
> ? Enter the owner(s) of the plugin. If specified, this will be added to CODEOWNERS for the plugin path. [optional]

Creating the plugin...
```

### Reading entities from within your plugin

You can access the currently selected entity using
[`useEntity`](https://backstage.io/api/stable/functions/_backstage_plugin-catalog-react.index.useEntity.html)
from `@backstage/plugin-catalog-react`:

```tsx
import { useEntity } from '@backstage/plugin-catalog-react';

export const MyPluginEntityContent = () => {
  const entity = useEntity();
  // Do something with the entity data...
};
```

The entity context is provided by the catalog entity page, into which your
plugin's extensions are embedded.

### Add entity content or cards via extensions

In the new frontend system, you don't manually wire your component into an
`EntityPage.tsx` file. Instead, you create extensions using blueprints that the
catalog plugin automatically discovers and renders.

#### Entity content (tab pages)

Use `EntityContentBlueprint` to create a new tab on entity pages:

```tsx title="src/plugin.ts"
import { createFrontendPlugin } from '@backstage/frontend-plugin-api';
import { EntityContentBlueprint } from '@backstage/plugin-catalog-react/alpha';

const myPluginEntityContent = EntityContentBlueprint.make({
  params: {
    path: 'my-plugin',
    title: 'My Plugin',
    loader: () =>
      import('./components/MyPluginEntityContent').then(m => (
        <m.MyPluginEntityContent />
      )),
  },
});

export const myPlugin = createFrontendPlugin({
  pluginId: 'my-plugin',
  extensions: [myPluginEntityContent],
});
```

The `path` determines the URL segment under the entity page, and the `title` is
shown as the tab label.

#### Entity cards (overview cards)

Use `EntityCardBlueprint` to create a card that can appear on entity overview
pages:

```tsx title="src/plugin.ts"
import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';

const myPluginEntityCard = EntityCardBlueprint.make({
  params: {
    loader: () =>
      import('./components/MyPluginCard').then(m => <m.MyPluginCard />),
  },
});
```

Add the card extension to your plugin's `extensions` array alongside any other
extensions.

### Configuring where extensions appear

By default, entity content and cards are available on all entity pages. App
integrators can control where extensions appear and their ordering through
`app-config.yaml`.

For example, to enable a content tab only for components:

```yaml title="app-config.yaml"
app:
  extensions:
    - entity-content:my-plugin:
        config:
          filter: kind:component
```

Entity content also supports an optional `group` parameter to associate the tab
with a tab group on the entity page:

```tsx
const myPluginEntityContent = EntityContentBlueprint.make({
  params: {
    path: 'my-plugin',
    title: 'My Plugin',
    group: 'quality',
    loader: () =>
      import('./components/MyPluginEntityContent').then(m => (
        <m.MyPluginEntityContent />
      )),
  },
});
```

For a full list of available blueprints and configuration options, see
[Common Extension Blueprints](../frontend-system/building-plugins/03-common-extension-blueprints.md).
