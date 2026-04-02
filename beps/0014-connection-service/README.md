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
  - [Credential Resolution](#credential-resolution)
  - [Connection Type Versioning](#connection-type-versioning)
  - [Frontend Discovery](#frontend-discovery)
  - [Override Capability](#override-capability)
  - [Custom Connection Types](#custom-connection-types)
- [Design Details](#design-details)
  - [ConnectionsService Interface](#connectionsservice-interface)
  - [Connection Interface](#connection-interface)
  - [ConnectionResult](#connectionresult)
  - [ConnectionCredentials](#connectioncredentials)
  - [URL Matching and Indexing](#url-matching-and-indexing)
  - [GitHub App Credential Resolution](#github-app-credential-resolution)
  - [Configuration Schema](#configuration-schema)
  - [Backward Compatibility](#backward-compatibility)
- [Release Plan](#release-plan)
- [Dependencies](#dependencies)
- [Alternatives](#alternatives)

## Summary

This BEP proposes a **Connection Service** for Backstage — a centralized system for identifying, authenticating, and authorizing access to external services. It replaces the current `integrations` configuration and the `ScmIntegrations` API with a new `connections` configuration and `coreServices.connections` backend service.

Connections are the answer to "how does Backstage talk to external system X?" — they encapsulate host identification, credential management, and authentication strategy for each configured external service. The system supports heterogeneous authentication methods (tokens, OAuth, GitHub Apps with per-org routing, managed identities, etc.) behind a uniform query interface.

Querying is always safe: asking for a connection that doesn't exist returns a result indicating absence rather than throwing an error. Queries can be made by URL, by type, or with additional type-specific context, and always return a standardized result. The connection service can be overridden at the app level, allowing adopters to customize, filter, or replace how connections are provided to plugins.

The configuration format is designed to support clean merging across multiple config sources, and the system leaves room for connection type definitions to evolve over time.

## Motivation

The current integrations system in Backstage has served the project well, but several pain points have emerged as the ecosystem has grown.

**Scattered initialization.** Every backend plugin that needs connection information independently calls `ScmIntegrations.fromConfig(config)`. There is no shared instance, which means the same configuration is parsed repeatedly, and there is no central point where connections can be augmented, filtered, or monitored.

**No override capability.** Adopters cannot customize how connections are provided to different plugins. For example, there is no way to restrict which GitHub organizations a particular plugin can access, or to inject additional credentials per plugin without forking the plugin itself.

**Primitive lookup.** The current `byHost` lookup is insufficient for real-world scenarios. When multiple GitHub Apps are configured for different organizations on the same host, or when different credentials should be used for different paths on the same GitLab instance, host-based matching cannot express the routing. Plugins end up re-implementing credential selection logic.

**Complex credential management is not abstracted.** GitHub App authentication is particularly complex — an adopter may have different apps installed for different organizations, each with different permissions, and the system needs to select the right app installation based on the target repository. Today this logic lives in `DefaultGithubCredentialsProvider` and is separate from the integrations abstraction. Other providers have their own credential complexities (Azure managed identity, AWS role assumption) that are similarly not unified.

**No path for evolution.** When an external service makes breaking changes to its API or authentication, or when Backstage wants to introduce a fundamentally better configuration format for a connection type, there is no mechanism to roll out a new format alongside the old one. Every change must be backward-compatible within the same config shape.

**Poor config merging.** The current array-based configuration (`integrations.github: [{...}, {...}]`) does not merge across configuration sources — Backstage's config system replaces arrays wholesale. This forces adopters to define all connections of a type in a single config file, preventing clean separation of concerns (e.g. base config in the repo, secrets in a separate source, environment-specific overrides in another).

**Misleading naming and scope.** The `ScmIntegrations` class includes non-SCM connections such as AWS S3, Google GCS, and Azure Blob Storage. The system has outgrown the "SCM" label and mixes connection concerns (authentication, host identification) with content concerns (URL resolution, edit URLs) that should be handled at a higher level.

### Goals

- Introduce a backend core service (`coreServices.connections`) that provides centralized access to all configured connections.
- Focus the connection abstraction on identification, authentication, and authorization of external services — not on content-level operations like URL resolution.
- Design a configuration format that merges cleanly across multiple config sources.
- Provide a query API where connections can be looked up by URL, by type, or with additional type-specific context, always returning a standardized result.
- Ensure querying is always safe — a missing connection returns a result indicating absence, never an error.
- Abstract credential resolution so that each connection type handles its own authentication complexity behind a uniform async interface.
- Allow connection type definitions to evolve over time — supporting new config formats alongside old ones.
- Allow adopters to override the connection service with a custom implementation at the app level.
- Provide a backend API endpoint for frontend discovery of configured connection metadata.
- Maintain a global registry of built-in connection types in the Backstage project, documented on backstage.io.
- Allow adopters to register custom internal connection types at the app level.

### Non-Goals

- This BEP does not cover content-level operations like URL resolution or edit URL generation — those are higher-level concerns that build on top of connections.
- This BEP does not propose changes to the URL reader service, though it will be updated to consume connections.
- This BEP does not cover dynamic credential rotation or external secrets management.
- This BEP does not aim to make the connection system arbitrarily extensible through a plugin mechanism — custom types are limited to app-level registration.
- This BEP does not prescribe the internal implementation of any specific connection type's credential logic.

## Proposal

### Configuration Format

The configuration format needs to support three key properties: clean merging across config sources, logical grouping of related connections, and the ability to define multiple connections of the same type. Below are three options under consideration.

#### Option A: Grouped by Type

Connections are nested under their type key, with user-chosen names as the second level:

```yaml
connections:
  github:
    public:
      host: github.com
      token: ${GITHUB_TOKEN}
      apps:
        - appId: 12345
          privateKey: ${GH_APP_KEY}
          clientId: ${GH_APP_CLIENT_ID}
          clientSecret: ${GH_APP_CLIENT_SECRET}
          allowedOwners: [my-org, partner-org]
    enterprise:
      host: ghe.example.com
      token: ${GHE_TOKEN}
  gitlab:
    main:
      host: gitlab.com
      token: ${GITLAB_TOKEN}
  azure:
    devops:
      host: dev.azure.com
      credentials:
        - personalAccessToken: ${AZURE_TOKEN}
```

**Merging example** — base config and secrets can be split across files:

```yaml
# app-config.yaml
connections:
  github:
    public:
      host: github.com
      apiBaseUrl: https://api.github.com

# app-config.local.yaml
connections:
  github:
    public:
      token: ${GITHUB_TOKEN}
```

These merge deeply into a single `connections.github.public` entry with both `host` and `token`.

**Pros:**

- Visual grouping by type — easy to scan all GitHub connections together.
- The type is implicit from the parent key, no redundant `type` field on each entry.
- Three levels of object keys (`connections` → type → name), all merge cleanly.

**Cons:**

- The set of valid type keys must be known to the config schema. Custom types added at the app level won't have schema validation unless the schema is extended.
- No cross-type grouping (e.g. you can't group "all production connections" together).

#### Option B: Flat Named Entries

All connections are direct children of `connections`, each with an explicit `type` field:

```yaml
connections:
  github-public:
    type: github
    host: github.com
    token: ${GITHUB_TOKEN}
    apps:
      - appId: 12345
        privateKey: ${GH_APP_KEY}
        clientId: ${GH_APP_CLIENT_ID}
        clientSecret: ${GH_APP_CLIENT_SECRET}
        allowedOwners: [my-org, partner-org]
  github-enterprise:
    type: github
    host: ghe.example.com
    token: ${GHE_TOKEN}
  gitlab-main:
    type: gitlab
    host: gitlab.com
    token: ${GITLAB_TOKEN}
  azure-devops:
    type: azure
    host: dev.azure.com
    credentials:
      - personalAccessToken: ${AZURE_TOKEN}
```

**Merging example:**

```yaml
# app-config.yaml
connections:
  github-public:
    type: github
    host: github.com

# app-config.local.yaml
connections:
  github-public:
    token: ${GITHUB_TOKEN}
```

**Pros:**

- Simpler structure — only two levels of keys.
- Custom types work naturally since `type` is an explicit field, not a schema-validated parent key.
- Connection names are globally unique and immediately visible.

**Cons:**

- Connections of the same type are not visually grouped — they're interleaved with other types.
- The `type` field is redundant on every entry and must stay consistent (can't be overridden by a different config source without care).

#### Option C: User-Defined Groups

Connections are organized into user-defined groups, with an explicit `type` field:

```yaml
connections:
  code-hosting:
    github-public:
      type: github
      host: github.com
      token: ${GITHUB_TOKEN}
    gitlab-main:
      type: gitlab
      host: gitlab.com
      token: ${GITLAB_TOKEN}
  storage:
    s3-main:
      type: aws-s3
      endpoint: ${AWS_S3_ENDPOINT}
      accessKeyId: ${AWS_ACCESS_KEY_ID}
      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}
  ci:
    jenkins-internal:
      type: jenkins
      host: jenkins.example.com
      token: ${JENKINS_TOKEN}
```

**Pros:**

- Adopters can organize connections however they see fit (by purpose, environment, team, etc.).
- Still merges cleanly — three levels of object keys.
- Groups can align with organizational boundaries or config source ownership.

**Cons:**

- Group names are arbitrary and not standardized — different adopters will use different groupings, making documentation and tooling harder.
- Querying must search across all groups, adding complexity.
- Connection names are only unique within their group, not globally.

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
          const credentials = await result.connection.getCredentials({
            url: 'https://github.com/my-org/my-repo',
          });
          // Use credentials...
        }
      },
    });
  },
});
```

### Querying Connections

The query API is designed around these principles: lookups are always safe (never throw for missing connections), results are standardized, and callers can provide additional context to refine the match.

**By URL with expected type:**

```typescript
const result = connections.match({
  url: 'https://github.com/my-org/my-repo',
  type: 'github',
});
// result.connection is GithubConnection | undefined
```

Providing a `type` narrows the return type and excludes connections of other types that might also match the host.

**By URL without type (best match):**

```typescript
const result = connections.match({
  url: 'https://github.com/my-org/my-repo',
});
// result.connection is Connection | undefined — the best match across all types
```

**List all connections of a type:**

```typescript
const githubConnections = connections.list({ type: 'github' });
// GithubConnection[]
```

**With additional context:**

Some queries benefit from type-specific hints that help select the right connection or credentials without requiring a full URL:

```typescript
const result = connections.match({
  type: 'github',
  host: 'github.com',
  owner: 'my-org',
});
```

The set of additional query parameters is defined per connection type. For types that don't support extra parameters, only `url` and `type` are available.

**Always-optional results:**

The `match` method never throws because a connection is missing. It returns a `ConnectionResult` that clearly indicates whether a connection was found:

```typescript
const result = connections.match({
  url: 'https://unknown-host.example.com/path',
  type: 'github',
});

if (!result.connection) {
  // No connection configured for this URL/type combination.
  // The caller decides whether this is an error or not.
  logger.info('No GitHub connection configured, skipping sync');
}
```

### Credential Resolution

Each connection provides an async method for obtaining credentials:

```typescript
const result = connections.match({
  url: 'https://github.com/my-org/my-repo',
  type: 'github',
});

if (result.connection) {
  const credentials = await result.connection.getCredentials({
    url: 'https://github.com/my-org/my-repo',
  });
  // credentials.token, credentials.headers, etc.
}
```

The `getCredentials` method is URL-aware because different URLs within the same connection may require different credentials. For GitHub, this is where app installation selection happens: given a URL containing `my-org`, the connection selects the app that has `my-org` in its `allowedOwners` and obtains an installation token.

The method is async because credentials may need to be fetched or refreshed (e.g. GitHub App installation tokens expire and must be periodically renewed, Azure managed identity tokens need to be obtained from the metadata service).

When a connection has multiple credential sources (e.g. both a token and apps configured), the connection type defines the precedence.

### Connection Type Versioning

Connection type definitions can evolve over time. Each type's factory function inspects the configuration of each entry and determines how to instantiate it. This enables two forms of evolution:

**Additive changes.** New optional fields can be added to an existing configuration format without affecting existing configs.

**Breaking changes.** When a fundamentally new configuration format is needed, a new format can be introduced alongside the old one. The type factory detects the format from the fields present and creates the appropriate connection instance. Using config format Option A as an example:

```yaml
connections:
  github:
    legacy:
      host: github.com
      token: ${GITHUB_TOKEN}
    modern:
      host: github.com
      auth:
        method: fine-grained-pat
        token: ${GITHUB_FG_PAT}
        repositories: [my-org/repo-a, my-org/repo-b]
```

Both entries are valid `github` connections with different config shapes. The factory handles both, allowing incremental migration. An explicit `version` field can be added to disambiguate when auto-detection is insufficient.

### Frontend Discovery

A backend API endpoint exposes non-secret connection metadata:

```
GET /api/connections
```

```json
{
  "connections": [
    { "type": "github", "id": "public", "host": "github.com" },
    { "type": "github", "id": "enterprise", "host": "ghe.example.com" },
    { "type": "gitlab", "id": "main", "host": "gitlab.com" }
  ]
}
```

Frontend code queries this endpoint instead of reading config directly. A corresponding frontend API replaces the current `scmIntegrationsApiRef` from `@backstage/integration-react`.

### Override Capability

The connection service can be overridden at the app level with a custom implementation:

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

This enables use cases like restricting which connections a particular plugin can see, injecting additional credentials, or replacing the entire connection resolution strategy.

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
            factory: (id, entryConfig) =>
              new ArtifactoryConnection(id, entryConfig),
          },
        ],
      });
    },
  }),
);
```

The custom type can then be configured like any built-in type. This is intentionally limited to the app level.

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

The `match` method returns a single `ConnectionResult` for the best matching connection. The `list` method returns all connections, optionally filtered by type. Both methods use the type parameter to narrow the return type when a known connection type is specified.

### `Connection` Interface

```typescript
interface Connection {
  readonly type: string;
  readonly id: string;
  readonly title: string;
  readonly host: string;

  getCredentials(options?: {
    url?: string | URL;
  }): Promise<ConnectionCredentials>;
}
```

The interface is focused on identification and authentication. Content-level operations like URL resolution and edit URL generation are not part of the connection abstraction — they belong to higher-level utilities that consume connections.

Each built-in connection type provides a more specific subtype (e.g. `GithubConnection`) with additional type-specific accessors such as `apiBaseUrl` or methods for listing installed apps.

### `ConnectionResult`

```typescript
interface ConnectionResult<T extends string = string> {
  connection: ConnectionOfType<T> | undefined;
}
```

The result is intentionally simple — it either contains a connection or doesn't. Callers check for the presence of `connection` and decide how to handle the absence themselves. This keeps the API minimal while ensuring that missing connections never cause unexpected exceptions.

The `ConnectionOfType<T>` type maps known type strings to their specific connection subtypes:

```typescript
type ConnectionOfType<T extends string> = T extends 'github'
  ? GithubConnection
  : T extends 'gitlab'
  ? GitlabConnection
  : T extends 'azure'
  ? AzureConnection
  : Connection;
```

### `ConnectionCredentials`

```typescript
interface ConnectionCredentials {
  type: string;
  token?: string;
  headers?: Record<string, string>;
}
```

The `type` field indicates the credential kind (e.g. `"token"`, `"app-installation"`, `"basic"`, `"bearer"`, `"anonymous"`). The `token` and `headers` fields provide credentials in the most commonly needed forms. Connection types can return more specific credential types when needed.

### URL Matching and Indexing

The `ConnectionsRegistry` maintains a `Map<string, Connection[]>` indexed by hostname. When `match` is called with a URL:

1. Parse the URL and extract the hostname.
2. Look up all connections for that host — O(1).
3. If a `type` is specified, filter to that type.
4. If one candidate remains, return it.
5. If multiple candidates remain, ask each to score the URL.
6. Return the candidate with the highest score.

Each connection type implements a `matchScore(url: URL): number` method (internal, not part of the public interface). The scoring contract:

- `0` — matches only by host (fallback)
- `1-99` — partial path match (e.g. group-level GitLab matching)
- `100+` — specific resource match (e.g. GitHub App for a specific owner)
- `-1` — explicitly does not match this URL despite sharing the host

For the common case of a single connection per host, no scoring is needed.

When `match` is called with type-specific query parameters (e.g. `{ type: 'github', host: 'github.com', owner: 'my-org' }`) instead of a URL, the connection type handles the matching directly.

### GitHub App Credential Resolution

GitHub connections demonstrate the credential resolution design at its most complex:

```yaml
connections:
  github:
    public:
      host: github.com
      token: ${GITHUB_TOKEN}
      apps:
        - appId: 111
          privateKey: ${KEY_1}
          clientId: ${CID_1}
          clientSecret: ${CS_1}
          allowedOwners: [org-a, org-b]
        - appId: 222
          privateKey: ${KEY_2}
          clientId: ${CID_2}
          clientSecret: ${CS_2}
          allowedOwners: [org-c]
```

When `getCredentials({ url: 'https://github.com/org-a/my-repo' })` is called:

1. Extract the owner from the URL path (`org-a`).
2. Find the app whose `allowedOwners` includes `org-a` (app 111).
3. Obtain an installation access token for that app's installation in `org-a`.
4. Return `{ type: 'app-installation', token: '<installation-token>', headers: { authorization: 'token <installation-token>' } }`.

If no app matches the owner, fall back to the configured `token`. If neither is available, return `{ type: 'anonymous' }`.

The `matchScore` for this connection against `https://github.com/org-a/my-repo` returns `100` (owner-level match via app), while against `https://github.com/random-org/something` it returns `0` (host-only match via fallback token).

### Configuration Schema

Using Option A as an example, the schema uses objects of named entries at every level:

```typescript
export interface Config {
  connections?: {
    github?: { [name: string]: GithubConnectionConfig };
    gitlab?: { [name: string]: GitlabConnectionConfig };
    azure?: { [name: string]: AzureConnectionConfig };
    bitbucketCloud?: { [name: string]: BitbucketCloudConnectionConfig };
    bitbucketServer?: { [name: string]: BitbucketServerConnectionConfig };
    gerrit?: { [name: string]: GerritConnectionConfig };
    gitea?: { [name: string]: GiteaConnectionConfig };
    harness?: { [name: string]: HarnessConnectionConfig };
    awsS3?: { [name: string]: AwsS3ConnectionConfig };
    awsCodeCommit?: { [name: string]: AwsCodeCommitConnectionConfig };
    azureBlobStorage?: {
      [name: string]: AzureBlobStorageConnectionConfig;
    };
    googleGcs?: { [name: string]: GoogleGcsConnectionConfig };
  };
}
```

Unlike the old format, all types use the same structural pattern — an object of named entries. The inconsistency where `googleGcs` was a single object while everything else was an array is gone.

### Backward Compatibility

The old `integrations` configuration format is still supported during a deprecation period. The `ConnectionsRegistry.fromConfig` method reads from both `connections` (new) and `integrations` (old), with `connections` taking precedence when both are present.

```yaml
# Old format (deprecated, still supported)
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}

# New format
connections:
  github:
    public:
      host: github.com
      token: ${GITHUB_TOKEN}
```

The existing `ScmIntegrations` and `ScmIntegrationRegistry` types are preserved as deprecated wrappers that delegate to `ConnectionsService`. Plugins that haven't migrated continue to work.

## Release Plan

The rollout is split into phases:

**Phase 1: New service and registry (non-breaking).** Introduce `ConnectionsRegistry`, `ConnectionsService`, `Connection`, and `coreServices.connections` with full backward compatibility for the old config format. `ScmIntegrations` is updated to delegate to the new service internally.

**Phase 2: Plugin migration.** Core plugins are migrated to use `coreServices.connections`. The URL reader service is updated to consume connections. `@backstage/integration-react` is updated to use the new frontend API.

**Phase 3: Deprecation.** `ScmIntegrations`, `ScmIntegrationRegistry`, and the old `integrations` config key are formally deprecated.

**Phase 4: Removal.** The deprecated APIs and old config format support are removed.

## Dependencies

None.

## Alternatives

### Keep `ScmIntegrations` and Add a Service Wrapper

Wrap `ScmIntegrations` in a service without changing the config format or type system. Simpler to implement but misses the opportunity to fix config merging, improve lookup, abstract credential resolution, and support type evolution.

### Per-Provider Service Refs

One service ref per connection type (`coreServices.githubConnections`, etc.). Better type safety per provider but leads to a proliferation of service refs, makes generic code harder to write, and complicates overrides.

### Extensible Plugin-Based Registry

Making the registry fully extensible through backend modules. More flexible but harder to maintain a predictable set of connection types, increases risk of conflicts, and makes centralized documentation harder. App-level registration provides sufficient flexibility.

### Flat List with `type` Discriminator

All connections in a single flat array. Suffers from the same config merging problem as the current format — arrays are replaced wholesale when merging across config sources.
