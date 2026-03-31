---
id: poking-around
sidebar_label: 002 - Poking around
title: 002 - Poking around
description: Exploring the default frontend plugin structure and components
---

Walk through the code that `yarn new --select frontend-plugin --option pluginId=todo --option owner=` generated.

## Plugin definition

Open `plugins/todo/src/plugin.tsx`. This is the entry point for the plugin:

```tsx
import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/todo',
    routeRef: rootRouteRef,
    loader: () => import('./components/TodoPage').then(m => <m.TodoPage />),
  },
});

export const todoPlugin = createFrontendPlugin({
  pluginId: 'todo',
  extensions: [page],
  routes: {
    root: rootRouteRef,
  },
});
```

- `createFrontendPlugin` registers the plugin with Backstage.
- `PageBlueprint.make` defines a page extension — a route in the app that
  lazy-loads the `TodoPage` component.
- `rootRouteRef` is a route reference that other plugins can use to link to
  your plugin's page.

## The TodoPage component

Open `plugins/todo/src/components/TodoPage/TodoPage.tsx`. This component
fetches data from the backend and renders it:

```tsx
const { value: todos, loading, error } = useTodos();
```

The `useTodos` hook uses two Backstage APIs:

- **`discoveryApiRef`** resolves the base URL of the backend plugin
  (for example, `http://localhost:7007/api/todo`).
- **`fetchApiRef`** wraps the browser `fetch` and automatically injects
  authentication credentials.

If the backend is not running, the page falls back to example data so that
the plugin still renders correctly out of the box.

## The TodoList component

Open `plugins/todo/src/components/TodoList/TodoList.tsx`. This is a
presentational component that receives a list of todos as props and renders
them in a `Table` from `@backstage/ui`.

The `TodoItem` type matches the shape returned by the backend plugin:

```ts
export type TodoItem = {
  title: string;
  id: string;
  createdBy: string;
  createdAt: string;
};
```

## Understanding the page structure

The scaffolded plugin uses components from `@backstage/ui` and
`@backstage/core-components` to give the page a consistent look and feel
across all Backstage plugins:

- `Header` renders the top bar with a title (from `@backstage/ui`).
- `Container` is the main content area below the header (from `@backstage/ui`).
- `Table` renders a data table with column configuration (from `@backstage/ui`).
- `Progress` shows a loading indicator (from `@backstage/core-components`).

Keeping your plugin visually consistent with the rest of Backstage is important
— users should feel at home regardless of which plugin they are interacting
with.
