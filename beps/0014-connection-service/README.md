---
title: Connection Service
status: implementable
authors:
  - '@Rugvip'
owners:
  - '@backstage/maintainers'
project-areas:
  - framework
creation-date: 2026-03-30
---

# BEP: Connection Service

- [Summary](#summary)
- [Motivation](#motivation)
  - [Goals](#goals)
  - [Non-Goals](#non-goals)
- [Proposal](#proposal)
  - [Configuration Format](#configuration-format)
  - [Connection Service](#connection-service)
  - [Querying Connections](#querying-connections)
  - [Connection Type Versioning](#connection-type-versioning)
  - [Frontend Discovery](#frontend-discovery)
  - [Override Capability](#override-capability)
  - [Custom Connection Types](#custom-connection-types)
- [Design Details](#design-details)
  - [ConnectionsService Interface](#connectionsservice-interface)
  - [Connection Interface](#connection-interface)
  - [ConnectionResult](#connectionresult)
  - [URL Matching and Indexing](#url-matching-and-indexing)
  - [Configuration Schema](#configuration-schema)
  - [Credential APIs on Top of Connections](#credential-apis-on-top-of-connections)
  - [Backward Compatibility](#backward-compatibility)
- [Release Plan](#release-plan)
- [Dependencies](#dependencies)
- [Alternatives](#alternatives)

## Summary

This BEP proposes a **Connection Service** for Backstage — a centralized system for configuring and querying connections to external services. It replaces the current `integrations` configuration and `ScmIntegrations` API with a new `connections` configuration key and `coreServices.connections` backend service.

Connections provide static, typed data about configured external services: what they are, where they live (hosts, API endpoints, regions), and what authentication material is available (tokens, app credentials, service account keys). Connections are pure configuration data — they do not perform dynamic operations like token exchange or credential refresh. Dynamic credential resolution (e.g. GitHub App installation tokens, Azure OAuth flows) is left to type-specific APIs that can be built on top of connections separately.

The connection service supports querying by URL with specificity beyond host matching, querying by type with optional type-specific context, and always returns a standardized result — a missing connection is never an error. The service can be overridden at the app level, and adopters can register custom connection types.

## Motivation

The current integrations system in Backstage has served the project well, but several pain points have emerged as the ecosystem has grown.

**Scattered initialization.** Every backend plugin that needs connection information independently calls `ScmIntegrations.fromConfig(config)`. There is no shared instance, which means the same configuration is parsed repeatedly, and there is no central point where connections can be augmented, filtered, or monitored.

**No override capability.** Adopters cannot customize how connections are provided to different plugins. For example, there is no way to restrict which GitHub organizations a particular plugin can access, or to inject additional credentials per plugin without forking the plugin itself.

**Primitive lookup.** The current `byHost` lookup is insufficient for real-world scenarios. When multiple GitHub Apps are configured for different organizations on the same host, or when different credentials should be used for different paths on the same GitLab instance, host-based matching alone cannot express the routing.

**Tangled static and dynamic concerns.** The current `ScmIntegrations` class mixes static configuration access with dynamic operations. `DefaultGithubCredentialsProvider` handles installation token exchange separately from the integration object but must be instantiated from the same config. `DefaultAzureDevOpsCredentialsProvider` does the same for Azure OAuth/managed identity flows. `DefaultAwsCredentialsManager` reads from a separate `aws` config key entirely. There is no consistent pattern for where static config ends and dynamic credential resolution begins.

**No path for evolution.** When an external service makes breaking changes to its API or authentication, there is no mechanism to roll out a new connection format alongside the old one.

**Misleading naming and scope.** The `ScmIntegrations` class includes non-SCM connections such as AWS S3, Google GCS, and Azure Blob Storage.

### Goals

- Introduce a backend core service (`coreServices.connections`) that provides centralized access to static connection configuration.
- Focus connections on identification and authentication material — hosts, API endpoints, resource identifiers, regions, tokens, app credentials, keys — as static data.
- Provide a query API where connections can be looked up by URL (with specificity beyond host matching), by type, or with additional type-specific context.
- Ensure querying is always safe — a missing connection returns a result indicating absence, never an error.
- Allow connection type definitions to evolve over time.
- Allow adopters to override the connection service at the app level.
- Provide a backend API endpoint for frontend discovery of configured connection metadata.
- Allow adopters to register custom connection types at the app level.

### Non-Goals

- This BEP does not define type-specific credential APIs (e.g. GitHub App token exchange, Azure OAuth flows). Those are built on top of connections and are outside the scope of this proposal.
- This BEP does not cover content-level operations like URL resolution or edit URL generation — those are higher-level concerns that build on top of connections.
- This BEP does not propose changes to the URL reader service, though it will be updated to consume connections.
- This BEP does not cover dynamic credential rotation or external secrets management.

## Proposal

### Configuration Format

Connections are configured as a flat array under the `connections` key in `app-config.yaml`. Each entry has a `type` field that identifies the kind of external service:

```yaml
connections:
  - type: github
    host: github.com
    apiBaseUrl: https://api.github.com
    rawBaseUrl: https://raw.githubusercontent.com
    token: ${GITHUB_TOKEN}
    apps:
      - appId: 12345
        privateKey: ${GH_APP_PRIVATE_KEY}
        clientId: ${GH_APP_CLIENT_ID}
        clientSecret: ${GH_APP_CLIENT_SECRET}
        allowedOwners:
          - my-org
          - partner-org
      - appId: 67890
        privateKey: ${GH_APP_2_KEY}
        clientId: ${GH_APP_2_CLIENT_ID}
        clientSecret: ${GH_APP_2_CLIENT_SECRET}
        allowedOwners:
          - internal-org
  - type: github
    host: ghe.example.com
    apiBaseUrl: https://ghe.example.com/api/v3
    token: ${GHE_TOKEN}
  - type: gitlab
    host: gitlab.com
    token: ${GITLAB_TOKEN}
  - type: azure
    host: dev.azure.com
    credentials:
      - personalAccessToken: ${AZURE_TOKEN}
  - type: aws-s3
    endpoint: ${AWS_S3_ENDPOINT}
    accessKeyId: ${AWS_ACCESS_KEY_ID}
    secretAccessKey: ${AWS_SECRET_ACCESS_KEY}
```

This is the simplest possible structure: just a list. The `type` field is the discriminator.

**Config merging.** Arrays in Backstage's config system are replaced wholesale when merging across config sources — they do not merge element-by-element. This means that if `connections` is defined in multiple config files, the last source wins. In practice this is acceptable because different environments (local dev, staging, production) typically define entirely different sets of connections. For the case where base config and secrets need to be split, the recommended approach is to use environment variable substitution within a single config file, or to use the `$include` directive.

### Connection Service

A new core service provides access to connections:

```typescript
export const connectionsServiceRef = createServiceRef<ConnectionsService>({
  id: 'core.connections',
  defaultFactory: async service =>
    createServiceFactory({
      service,
      deps: { config: coreServices.rootConfig },
      factory({ config }) {
        return ConnectionsRegistry.fromConfig(config);
      },
    }),
});
```

Added to `coreServices`:

```typescript
export const coreServices = {
  // ... existing services
  connections: connectionsServiceRef,
};
```

Plugins consume it through dependency injection:

```typescript
export const myPlugin = createBackendPlugin({
  pluginId: 'my-plugin',
  register(env) {
    env.registerInit({
      deps: {
        connections: coreServices.connections,
      },
      async init({ connections }) {
        const result = connections.match({
          url: 'https://github.com/my-org/my-repo',
          type: 'github',
        });

        if (result.connection) {
          // result.connection is a GithubConnection — static config data
          const { host, apiBaseUrl, token, apps } = result.connection;
          // Use directly or pass to a credential API
        }
      },
    });
  },
});
```

### Querying Connections

The query API is designed around these principles: lookups are always safe, results are standardized, and callers can provide additional context to refine the match.

**By URL with expected type:**

```typescript
const result = connections.match({
  url: 'https://github.com/my-org/my-repo',
  type: 'github',
});
// result.connection is GithubConnection | undefined
```

Providing `type` narrows the return type and excludes connections of other types that might also match the host.

**By URL without type (best match):**

```typescript
const result = connections.match({
  url: 'https://github.com/my-org/my-repo',
});
// result.connection is Connection | undefined — best match across all types
```

**List all connections of a type:**

```typescript
const all = connections.list({ type: 'github' });
// GithubConnection[]
```

**With type-specific context:**

Some queries benefit from hints beyond a URL. The set of extra query parameters is defined per connection type:

```typescript
const result = connections.match({
  type: 'github',
  host: 'github.com',
  owner: 'my-org',
});
```

**Always-optional results:**

The `match` method never throws for a missing connection. It returns a `ConnectionResult`:

```typescript
const result = connections.match({
  url: 'https://unknown-host.example.com/path',
  type: 'github',
});

if (!result.connection) {
  logger.info('No GitHub connection configured, skipping sync');
  return;
}
```

### Connection Type Versioning

Connection types can evolve over time. Each type's factory inspects the configuration and determines how to instantiate it.

**Additive changes.** New optional fields can be added to an existing format without affecting existing configs.

**Breaking changes.** When a new configuration format is needed, it can be introduced alongside the old one. The factory detects the format from the fields present:

```yaml
connections:
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
  - type: github
    host: github.com
    # Hypothetical future format
    auth:
      method: fine-grained-pat
      token: ${GITHUB_FG_PAT}
      repositories: [my-org/repo-a, my-org/repo-b]
```

Both entries are valid `github` connections with different config shapes. The factory handles both, allowing incremental migration. An explicit `version` field can be added to disambiguate when auto-detection from config shape alone is insufficient.

### Frontend Discovery

A backend API endpoint exposes non-secret connection metadata:

```
GET /api/connections
```

```json
{
  "connections": [
    { "type": "github", "host": "github.com" },
    { "type": "github", "host": "ghe.example.com" },
    { "type": "gitlab", "host": "gitlab.com" }
  ]
}
```

### Override Capability

The connection service can be overridden at the app level:

```typescript
const backend = createBackend();

backend.add(
  createServiceFactory({
    service: coreServices.connections,
    deps: {
      config: coreServices.rootConfig,
      plugin: coreServices.pluginMetadata,
    },
    factory({ config, plugin }) {
      const all = ConnectionsRegistry.fromConfig(config);
      return all.scoped(connection =>
        isAllowedForPlugin(connection, plugin.getId()),
      );
    },
  }),
);
```

### Custom Connection Types

Adopters can register custom connection types at the app level:

```typescript
const backend = createBackend();

backend.add(
  createServiceFactory({
    service: coreServices.connections,
    deps: { config: coreServices.rootConfig },
    factory({ config }) {
      return ConnectionsRegistry.fromConfig(config, {
        extraTypes: [
          {
            type: 'artifactory',
            factory: entryConfig => new ArtifactoryConnection(entryConfig),
          },
        ],
      });
    },
  }),
);
```

Configured as:

```yaml
connections:
  - type: artifactory
    host: artifactory.example.com
    token: ${ARTIFACTORY_TOKEN}
```

## Design Details

### `ConnectionsService` Interface

```typescript
interface ConnectionsService {
  match<T extends string = string>(options: {
    url?: string | URL;
    type?: T;
    [key: string]: unknown;
  }): ConnectionResult<T>;

  list<T extends string = string>(options?: {
    type?: T;
  }): ConnectionOfType<T>[];
}
```

The `match` method returns the best matching connection. The `list` method returns all connections, optionally filtered by type.

### `Connection` Interface

```typescript
interface Connection {
  readonly type: string;
  readonly host: string;
}
```

The base interface is minimal — just type identification and host. Each built-in connection type extends this with its own typed properties that reflect the static config:

```typescript
interface GithubConnection extends Connection {
  readonly type: 'github';
  readonly host: string;
  readonly apiBaseUrl: string;
  readonly rawBaseUrl: string;
  readonly token?: string;
  readonly apps?: ReadonlyArray<{
    readonly appId: number | string;
    readonly privateKey: string;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly webhookSecret?: string;
    readonly allowedOwners?: readonly string[];
    readonly publicAccess?: boolean;
  }>;
}

interface AzureConnection extends Connection {
  readonly type: 'azure';
  readonly host: string;
  readonly credentials?: ReadonlyArray<{
    readonly organizations?: readonly string[];
    readonly personalAccessToken?: string;
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly tenantId?: string;
    readonly managedIdentityClientId?: string;
  }>;
}

interface AwsS3Connection extends Connection {
  readonly type: 'aws-s3';
  readonly host: string;
  readonly endpoint?: string;
  readonly accessKeyId?: string;
  readonly secretAccessKey?: string;
  readonly roleArn?: string;
  readonly externalId?: string;
  readonly region?: string;
}
```

All properties are `readonly`. Connections are immutable snapshots of configuration.

### `ConnectionResult`

```typescript
interface ConnectionResult<T extends string = string> {
  connection: ConnectionOfType<T> | undefined;
}
```

Simple presence/absence. The caller decides how to handle a missing connection.

`ConnectionOfType<T>` maps known type strings to their specific subtypes:

```typescript
type ConnectionOfType<T extends string> = T extends 'github'
  ? GithubConnection
  : T extends 'gitlab'
  ? GitlabConnection
  : T extends 'azure'
  ? AzureConnection
  : Connection;
```

### URL Matching and Indexing

The `ConnectionsRegistry` maintains a `Map<string, Connection[]>` indexed by hostname. When `match` is called with a URL:

1. Parse the URL and extract the hostname.
2. Look up all connections for that host — O(1).
3. If `type` is specified, filter to that type.
4. If one candidate remains, return it.
5. If multiple candidates remain, ask each to score the URL.
6. Return the candidate with the highest score.

Each connection type implements an internal `matchScore(url: URL): number` scoring method:

- `0` — matches only by host (fallback)
- `1-99` — partial path match (e.g. group-level GitLab matching)
- `100+` — specific resource match (e.g. GitHub connection whose `apps[].allowedOwners` includes the URL's owner segment)
- `-1` — does not match this URL despite sharing the host

For the common case of a single connection per host, no scoring is needed.

When `match` is called with type-specific parameters (e.g. `{ type: 'github', host: 'github.com', owner: 'my-org' }`) instead of a URL, the connection type handles the matching directly.

### Configuration Schema

```typescript
export interface Config {
  connections?: Array<
    | GithubConnectionConfig
    | GitlabConnectionConfig
    | AzureConnectionConfig
    | BitbucketCloudConnectionConfig
    | BitbucketServerConnectionConfig
    | GerritConnectionConfig
    | GiteaConnectionConfig
    | HarnessConnectionConfig
    | AwsS3ConnectionConfig
    | AwsCodeCommitConnectionConfig
    | AzureBlobStorageConnectionConfig
    | GoogleGcsConnectionConfig
  >;
}
```

Each config type includes the `type` discriminator:

```typescript
interface GithubConnectionConfig {
  /** @visibility frontend */
  type: 'github';
  /** @visibility frontend */
  host: string;
  /** @visibility secret */
  token?: string;
  /** @visibility frontend */
  apiBaseUrl?: string;
  /** @visibility frontend */
  rawBaseUrl?: string;
  apps?: Array<{
    appId: number | string;
    /** @visibility secret */
    privateKey: string;
    /** @visibility secret */
    webhookSecret?: string;
    clientId: string;
    /** @visibility secret */
    clientSecret: string;
    allowedOwners?: string[];
    publicAccess?: boolean;
  }>;
}
```

### Credential APIs on Top of Connections

Connections are intentionally limited to static configuration data. Dynamic credential resolution — token exchange, caching, refresh, SDK credential chains — is handled by separate type-specific APIs built on top of connections. This mirrors the existing pattern where `DefaultGithubCredentialsProvider`, `DefaultAzureDevOpsCredentialsProvider`, and `DefaultAwsCredentialsManager` already exist as distinct APIs separate from `ScmIntegrations`.

With the connection service in place, these credential APIs would read from `coreServices.connections` instead of `ScmIntegrations.fromConfig(config)`. They could be wired as independent service refs with default factories, making each one separately overridable. For example, a GitHub credentials service would read `GithubConnection` entries from `coreServices.connections`, handle the app installation token exchange for URLs matching `allowedOwners`, and cache tokens with appropriate expiry. An AWS credentials service would read static keys and role configurations from connections and provide SDK credential provider chains.

The design of these credential APIs is outside the scope of this BEP and will be addressed separately.

### Backward Compatibility

The old `integrations` configuration is still supported during a deprecation period. `ConnectionsRegistry.fromConfig` reads from `connections` when present, falling back to `integrations` when `connections` is absent.

```yaml
# Old format (deprecated, still supported)
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}

# New format
connections:
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
```

Since the two formats use different top-level keys, they never conflict. When `integrations` is detected without a corresponding `connections` key, a deprecation warning is logged at startup.

The existing `ScmIntegrations` and `ScmIntegrationRegistry` types are preserved as deprecated wrappers that delegate to `ConnectionsService`.

## Release Plan

The rollout is split into phases:

**Phase 1: Connection service (non-breaking).** Introduce `ConnectionsRegistry`, `ConnectionsService`, `Connection`, and `coreServices.connections` with full backward compatibility for the old config format. `ScmIntegrations` is updated to delegate to the new service internally.

**Phase 2: Plugin migration.** Core plugins are migrated to use `coreServices.connections`. The URL reader service and existing credential providers are updated to consume connections.

**Phase 3: Deprecation.** `ScmIntegrations`, `ScmIntegrationRegistry`, and the `integrations` config key are formally deprecated.

**Phase 4: Removal.** Deprecated APIs and old config format support are removed.

## Dependencies

None.

## Alternatives

### Single-Layer Design with `getCredentials` on `Connection`

Each connection object could include a `getCredentials()` method directly, combining static config and dynamic credential resolution in one interface:

```typescript
interface Connection {
  type: string;
  host: string;
  getCredentials(opts?: { url?: string }): Promise<ConnectionCredentials>;
}
```

Simpler API surface — one object to work with instead of two. But this mixes static data with stateful operations (caching, refresh timers, SDK initialization), makes the connection object harder to serialize and test, and provides no way to override credential resolution independently of connection config.

### Named Entries Instead of Array

Using an object with named keys instead of an array:

```yaml
connections:
  github:
    public:
      host: github.com
      token: ${GITHUB_TOKEN}
```

Better config merging across sources — objects merge deeply while arrays replace. But adds structural complexity, and in practice different environments define entirely different sets of connections, making the merging benefit less important than the simplicity of a flat list.

### Keep `ScmIntegrations` and Add Service Wrappers

Wrap existing types in services without changing config format. Simpler to implement but misses the opportunity to separate static config from dynamic auth, fix the naming, and support config evolution.

### Per-Provider Service Refs for Connections

One connection service per type (`coreServices.githubConnections`, etc.). Better type safety but leads to service ref proliferation and makes generic code harder to write. The single `coreServices.connections` with typed `match` and `list` methods provides sufficient type safety through the type parameter.
