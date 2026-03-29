---
id: feature-flags
title: Feature Flags
description: Details the process of defining setting and reading a feature flag.
---

::::info
This documentation is written for the new frontend system, which is the default
in new Backstage apps. If your Backstage app still uses the old frontend system,
read the [old frontend system version of this guide](./feature-flags--old.md)
instead.
::::

Backstage offers the ability to define feature flags inside a plugin or during
application creation. This allows you to restrict parts of your plugin to those
individual users who have toggled the feature flag to on.

This page describes the process of defining, setting and reading a feature flag.
If you are looking for using feature flags specifically with software templates
please see
[Writing Templates](https://backstage.io/docs/features/software-templates/writing-templates#remove-sections-or-fields-based-on-feature-flags).

## Defining a Feature Flag

### In a plugin

Feature flags are declared via the `featureFlags` option in
`createFrontendPlugin`:

```ts title="src/plugin.ts"
import { createFrontendPlugin } from '@backstage/frontend-plugin-api';

export const examplePlugin = createFrontendPlugin({
  pluginId: 'example',
  featureFlags: [
    {
      name: 'show-example-feature',
      description: 'Enables the new beta dashboard view',
    },
  ],
  extensions: [
    // ...
  ],
});
```

Note that the `description` property is optional. If not provided, the default
"Registered in {pluginId} plugin" message is shown.

### In the application

Defining a feature flag in the application is done by adding feature flags in
the `featureFlags` array in the `createApp()` function call:

```ts title="packages/app/src/App.tsx"
import { createApp } from '@backstage/frontend-defaults';

const app = createApp({
  // ...
  featureFlags: [
    {
      name: 'tech-radar',
      description: 'Enables the tech radar plugin',
    },
  ],
  // ...
});
```

## Enabling Feature Flags

Feature flags are defaulted to off and can be updated by individual users in the
backstage interface. These are set by navigating to the page under **Settings** >
**Feature Flags**.

The user's selection is saved in the user's browser local storage. Once a
feature flag is toggled it may be required for a user to refresh the page to see
the change.

## Evaluating Feature Flag State

You can query a feature flag using the
[FeatureFlagsApi](https://backstage.io/api/stable/interfaces/_backstage_frontend-plugin-api.index.FeatureFlagsApi.html):

```tsx
import { useApi, featureFlagsApiRef } from '@backstage/frontend-plugin-api';

function MyComponent() {
  const featureFlagsApi = useApi(featureFlagsApiRef);

  if (featureFlagsApi.isActive('show-example-feature')) {
    return <NewFeatureComponent />;
  }
  return <PreviousFeatureComponent />;
}
```

## Conditionally Enabling Extensions

The new frontend system also allows you to conditionally enable entire
extensions based on feature flags, without needing to check the flag at runtime
in your component code:

```tsx
import { PageBlueprint } from '@backstage/frontend-plugin-api';

const experimentalPage = PageBlueprint.make({
  params: {
    path: '/experimental',
    loader: () =>
      import('./ExperimentalPage').then(m => <m.ExperimentalPage />),
  },
  if: { featureFlags: { $contains: 'experimental-features' } },
});
```

When using the `if` option, the extension is only installed if the specified
feature flag is active. This is evaluated when the app extension tree is
assembled, so changes to the flag require a page reload to take effect.

For more details, see
[Feature Flags](../frontend-system/building-plugins/09-feature-flags.md).
