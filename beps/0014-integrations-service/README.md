---
title: Integrations Service
status: implementable
authors:
  - '@Rugvip'
owners:
  - '@backstage/maintainers'
project-areas:
  - framework
creation-date: 2026-03-30
---

# BEP: Integrations Service

- [Summary](#summary)
- [Motivation](#motivation)
  - [Goals](#goals)
  - [Non-Goals](#non-goals)
- [Proposal](#proposal)
- [Design Details](#design-details)
- [Release Plan](#release-plan)
- [Dependencies](#dependencies)
- [Alternatives](#alternatives)

## Summary

This BEP proposes a centralized integrations configuration system for Backstage, replacing the current pattern where each backend plugin independently reads integration configuration from `app-config.yaml` via `ScmIntegrations.fromConfig(config)`. The new system introduces a global integrations registry maintained by the Backstage project, a backend core service (`coreServices.integrations`) that provides typed access to configured integrations, and a backend API for frontend discovery of available integration metadata. All supported integrations are defined through a common schema with a discriminator field, forming a single discriminated union type. The registry is not arbitrarily extensible — all built-in integration types are maintained centrally — but adopters can register custom internal integrations at the app level.

## Motivation

The current integrations system in Backstage has served the project well, but several pain points have emerged as the ecosystem has grown:

**Scattered initialization.** Every backend plugin that needs integration information independently calls `ScmIntegrations.fromConfig(config)`. There is no shared instance, which means the same configuration is parsed repeatedly across the backend, and there is no central point where integrations can be augmented, filtered, or monitored.

**No override capability.** Adopters cannot customize how integrations are provided to different plugins. For example, there is no way to restrict which GitHub organizations a particular plugin can access, or to inject additional credentials per plugin without forking the plugin itself.

**Misleading naming and heterogeneous shapes.** The `ScmIntegrations` class includes non-SCM integrations such as AWS S3, Google GCS, and Azure Blob Storage. The configuration shapes are inconsistent — most integration types use arrays of host entries, while `googleGcs` uses a single object. Some integrations like `awsCodeCommit` are implemented in code but missing from the config schema.

**No frontend discovery mechanism.** Frontend code that needs to know which integrations are configured (for example, to show appropriate icons or filter entity source locations) must use `@backstage/integration-react`, which reads configuration directly from the app config. There is no backend-provided API that exposes integration metadata in a controlled way.

**Tight coupling to the integration package.** Plugins depend directly on `@backstage/integration` to read configuration, creating a tight coupling. Changes to config shapes, new integration types, or breaking changes in the integration package ripple across many plugins simultaneously.

### Goals

- Introduce a backend core service (`coreServices.integrations`) that provides typed, centralized access to all configured integrations.
- Define a common schema for all integrations using a discriminated union with a `type` field, eliminating the current heterogeneous config shapes.
- Allow adopters to override the integrations service to filter, augment, or scope integrations per plugin.
- Provide a backend API endpoint that frontends can query to discover configured integration metadata (types, hosts) without exposing secrets.
- Maintain a global registry of all supported integration types in the Backstage project, with each integration documented on backstage.io.
- Allow adopters to register custom internal integration types at the app level without requiring upstream changes.

### Non-Goals

- This BEP does not aim to change the internal implementation of individual integration types (e.g. how GitHub App authentication works, or how GitLab retries are configured).
- This BEP does not propose changes to the URL reader service, though the URL reader will be updated to consume integrations through the new service.
- This BEP does not cover credential rotation, secrets management, or dynamic credential providers — those are orthogonal concerns that can build on top of this system.
- This BEP does not aim to make the integrations system arbitrarily extensible through a plugin mechanism — custom types are limited to app-level registration.

## Proposal

### Common Integration Schema

All integrations are configured under a new top-level `integrations` key in `app-config.yaml`, replacing the current provider-keyed structure. Each integration entry uses a discriminated union with a `type` field:

```yaml
integrations:
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
  - type: github
    host: github.example.com
    apps:
      - appId: 12345
        privateKey: ${GH_APP_PRIVATE_KEY}
        clientId: ${GH_APP_CLIENT_ID}
        clientSecret: ${GH_APP_CLIENT_SECRET}
  - type: gitlab
    host: gitlab.com
    token: ${GITLAB_TOKEN}
  - type: azure
    host: dev.azure.com
    credentials:
      - personalAccessToken: ${AZURE_TOKEN}
```

This flat list structure replaces the current nested-by-provider layout. Each entry is self-describing through its `type` field. Common fields like `host` appear across most integration types, while type-specific fields (e.g. `apps` for GitHub, `gitilesBaseUrl` for Gerrit) are only valid for their respective types.

### Backend Core Service

A new core service is introduced:

```typescript
import { createServiceRef } from '@backstage/backend-plugin-api';

export const integrationsServiceRef = createServiceRef<IntegrationsService>({
  id: 'core.integrations',
  defaultFactory: async service =>
    createServiceFactory({
      service,
      deps: { config: coreServices.rootConfig },
      factory({ config }) {
        return IntegrationsRegistry.fromConfig(config);
      },
    }),
});
```

The service is added to `coreServices` so that all backend plugins can depend on it:

```typescript
export const coreServices = {
  // ... existing services
  integrations: integrationsServiceRef,
};
```

Plugins consume it through standard dependency injection instead of manually parsing config:

```typescript
export const myPlugin = createBackendPlugin({
  pluginId: 'my-plugin',
  register(env) {
    env.registerInit({
      deps: {
        integrations: coreServices.integrations,
      },
      async init({ integrations }) {
        const github = integrations.list({ type: 'github' });
        const byHost = integrations.byHost('github.com');
        // ...
      },
    });
  },
});
```

### Override Capability

Because the integrations service uses the standard `createServiceRef` pattern, adopters can override it at the app level:

```typescript
const backend = createBackend();

backend.add(
  createServiceFactory({
    service: coreServices.integrations,
    deps: {
      config: coreServices.rootConfig,
      plugin: coreServices.pluginMetadata,
    },
    factory({ config, plugin }) {
      const all = IntegrationsRegistry.fromConfig(config);
      // Scope integrations based on which plugin is requesting them
      return all.filter(integration =>
        isAllowedForPlugin(integration, plugin.getId()),
      );
    },
  }),
);
```

### Frontend Discovery API

A new backend API endpoint is provided that exposes non-secret integration metadata:

```
GET /api/integrations
```

This returns a list of configured integrations with their type, host, and any frontend-visible metadata. Secret fields (tokens, keys, credentials) are never included.

```json
{
  "integrations": [
    { "type": "github", "host": "github.com" },
    { "type": "github", "host": "github.example.com" },
    { "type": "gitlab", "host": "gitlab.com" },
    { "type": "azure", "host": "dev.azure.com" }
  ]
}
```

Frontend code can query this endpoint instead of reading config directly, providing a controlled surface for what integration metadata is exposed to the browser.

### Global Registry

All integration types supported by Backstage are defined in a central registry maintained in the `@backstage/integration` package. The registry defines:

- The discriminator values (e.g. `'github'`, `'gitlab'`, `'azure'`)
- The configuration schema for each type
- Default factories for creating integration instances from config

The set of built-in types is not extensible through a plugin mechanism. Adding a new integration type requires a change to the Backstage project itself, which ensures that every integration is reviewed, documented, and tested.

However, adopters can register custom integration types at the app level through the service override mechanism. This enables internal integrations that are specific to an organization without requiring upstream changes.

## Design Details

### `IntegrationsService` Interface

```typescript
interface IntegrationsService {
  list(options?: { type?: string }): Integration[];
  byUrl(url: string | URL): Integration | undefined;
  byHost(host: string): Integration | undefined;
  resolveUrl(options: {
    url: string;
    base: string;
    lineNumber?: number;
  }): string;
  resolveEditUrl(url: string): string;
}
```

The `Integration` type is a discriminated union:

```typescript
type Integration = {
  type: string;
  title: string;
  host: string;
  config: JsonValue;
  resolveUrl(options: {
    url: string;
    base: string;
    lineNumber?: number;
  }): string;
  resolveEditUrl(url: string): string;
};
```

Each built-in integration type provides a more specific typed variant (e.g. `GithubIntegration`, `GitlabIntegration`) that extends this base with type-specific accessors like `apiBaseUrl` or credential helpers.

### `IntegrationsRegistry`

The `IntegrationsRegistry` is the default implementation of `IntegrationsService`:

```typescript
class IntegrationsRegistry implements IntegrationsService {
  static fromConfig(config: Config): IntegrationsRegistry;

  list(options?: { type?: string }): Integration[];
  byUrl(url: string | URL): Integration | undefined;
  byHost(host: string): Integration | undefined;
  resolveUrl(options: {
    url: string;
    base: string;
    lineNumber?: number;
  }): string;
  resolveEditUrl(url: string): string;
}
```

### Configuration Schema

The new configuration schema uses a flat list with a `type` discriminator:

```typescript
export interface Config {
  integrations?: Array<
    | GithubIntegrationConfig
    | GitlabIntegrationConfig
    | AzureIntegrationConfig
    | BitbucketCloudIntegrationConfig
    | BitbucketServerIntegrationConfig
    | GerritIntegrationConfig
    | GiteaIntegrationConfig
    | HarnessIntegrationConfig
    | AwsS3IntegrationConfig
    | AwsCodeCommitIntegrationConfig
    | AzureBlobStorageIntegrationConfig
    | GoogleGcsIntegrationConfig
  >;
}
```

Each config type includes the `type` discriminator:

```typescript
interface GithubIntegrationConfig {
  type: 'github';
  host: string;
  token?: string;
  apiBaseUrl?: string;
  rawBaseUrl?: string;
  apps?: Array<{
    appId: number | string;
    privateKey: string;
    webhookSecret?: string;
    clientId: string;
    clientSecret: string;
    allowedInstallationOwners?: string[];
    publicAccess?: boolean;
  }>;
}

interface GitlabIntegrationConfig {
  type: 'gitlab';
  host: string;
  token?: string;
  apiBaseUrl?: string;
  baseUrl?: string;
  commitSigningKey?: string;
  retry?: {
    maxRetries?: number;
    retryStatusCodes?: number[];
    maxApiRequestsPerMinute?: number;
  };
}
```

### Backward Compatibility

The old nested configuration format will continue to be supported during a deprecation period. The `IntegrationsRegistry.fromConfig` method will read both formats, preferring the new flat list when present. When only the old format is found, a deprecation warning is logged at startup.

```yaml
# Old format (deprecated, still supported)
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}

# New format (preferred)
integrations:
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
```

The detection is straightforward: if `integrations` is an array, the new format is used; if it is an object, the old format is used.

### Frontend Integration Plugin

A new lightweight backend plugin (`@backstage/plugin-integrations-backend`) exposes the `/api/integrations` endpoint. It depends on `coreServices.integrations` and returns only frontend-safe fields:

```typescript
export const integrationsPlugin = createBackendPlugin({
  pluginId: 'integrations',
  register(env) {
    env.registerInit({
      deps: {
        integrations: coreServices.integrations,
        http: coreServices.httpRouter,
      },
      async init({ integrations, http }) {
        const router = Router();
        router.get('/integrations', (_, res) => {
          res.json({
            integrations: integrations.list().map(i => ({
              type: i.type,
              title: i.title,
              host: i.host,
            })),
          });
        });
        http.use(router);
      },
    });
  },
});
```

A corresponding frontend API (`integrationsApiRef`) replaces the current `scmIntegrationsApiRef` from `@backstage/integration-react`, fetching data from the backend instead of reading config directly.

### Existing `@backstage/integration` Package

The existing `@backstage/integration` package will be refactored:

- `ScmIntegrations` and `ScmIntegrationRegistry` will be deprecated in favor of `IntegrationsRegistry` and `IntegrationsService`.
- Individual integration classes (`GithubIntegration`, `GitLabIntegration`, etc.) will be updated to implement the new `Integration` interface while retaining their type-specific accessors.
- The `config.d.ts` schema will be updated to reflect the new flat-list format while retaining support for the old format.

### Custom Integration Types

Adopters can define custom integration types by overriding the integrations service:

```typescript
const backend = createBackend();

backend.add(
  createServiceFactory({
    service: coreServices.integrations,
    deps: { config: coreServices.rootConfig },
    factory({ config }) {
      const registry = IntegrationsRegistry.fromConfig(config);
      registry.registerType({
        type: 'internal-artifactory',
        factory: configs => configs.map(c => new ArtifactoryIntegration(c)),
      });
      return registry;
    },
  }),
);
```

This is intentionally limited to the app level — libraries and plugins cannot register new types, keeping the integration surface predictable.

## Release Plan

The rollout is split into phases to minimize disruption:

**Phase 1: New service and registry (non-breaking).** Introduce `IntegrationsRegistry`, `IntegrationsService`, and `coreServices.integrations` with full backward compatibility for the old config format. The `ScmIntegrations` class is updated to delegate to `IntegrationsRegistry` internally. Plugins can start migrating to the new service but are not required to.

**Phase 2: Plugin migration.** Core plugins (`catalog`, `scaffolder`, `techdocs`, etc.) are migrated to use `coreServices.integrations` instead of `ScmIntegrations.fromConfig`. The URL reader service is updated to consume the integrations service. `@backstage/integration-react` is updated to use the new frontend API.

**Phase 3: Deprecation.** `ScmIntegrations`, `ScmIntegrationRegistry`, and the old config format are formally deprecated with a target removal timeline. Deprecation warnings guide adopters to the new format and APIs.

**Phase 4: Removal.** The deprecated APIs and old config format support are removed in a future major version bump of the affected packages.

## Dependencies

None.

## Alternatives

### Keep `ScmIntegrations` and Add a Service Wrapper

Rather than replacing the integration registry, we could simply wrap `ScmIntegrations` in a service without changing the config format or type system:

```typescript
export const integrationsServiceRef = createServiceRef<ScmIntegrations>({
  id: 'core.integrations',
  // ...
});
```

This is simpler but misses the opportunity to fix the heterogeneous config shapes, the misleading naming, and the lack of a `type` discriminator. It also preserves the tight coupling between plugins and the `@backstage/integration` package, since the service would expose the same `ScmIntegrations` type.

### Per-Provider Service Refs

Instead of a single integrations service, we could have one service per integration type:

```typescript
coreServices.githubIntegrations;
coreServices.gitlabIntegrations;
// etc.
```

This provides better type safety per provider but leads to a proliferation of service refs and makes it harder to write generic code that works across integration types. It also makes the override story more complex, as adopters would need to override each provider separately.

### Extensible Plugin-Based Registry

We could make the integrations registry fully extensible through backend modules, allowing any plugin to register new integration types:

```typescript
export const artifactoryModule = createBackendModule({
  pluginId: 'integrations',
  moduleId: 'artifactory',
  register(env) {
    env.registerInit({
      deps: { registry: integrationsExtensionPoint },
      async init({ registry }) {
        registry.registerType('artifactory', ArtifactoryIntegration.factory);
      },
    });
  },
});
```

While more flexible, this makes it harder to maintain a predictable set of integration types and increases the risk of conflicts or inconsistencies. The common schema becomes harder to enforce, and documentation cannot be centralized. The proposed approach of app-level overrides provides sufficient flexibility for custom integrations without these downsides.
