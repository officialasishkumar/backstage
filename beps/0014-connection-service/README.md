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
  - [Catalog Entity Annotations](#catalog-entity-annotations)
  - [Frontend Discovery](#frontend-discovery)
  - [Override Capability](#override-capability)
  - [Custom Connection Types](#custom-connection-types)
- [Design Details](#design-details)
  - [ConnectionsService Interface](#connectionsservice-interface)
  - [Connection Interface](#connection-interface)
  - [ConnectionResult](#connectionresult)
  - [URL Matching and Indexing](#url-matching-and-indexing)
  - [Configuration Schema](#configuration-schema)
  - [Entity Annotation Resolution](#entity-annotation-resolution)
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

**Ecosystem fragmentation.** The current integrations system only covers a handful of SCM and storage providers. The vast majority of plugins in the Backstage ecosystem that connect to external services — Jira, PagerDuty, Datadog, SonarQube, Jenkins, Sentry, and many others — each define their own connection configuration in their plugin-specific config schema. A Jira plugin has `jira.host` and `jira.token`, a PagerDuty plugin has `pagerduty.apiUrl` and `pagerduty.eventsBaseUrl`, and so on. There is no shared connection registry that these plugins can draw from, no way for an adopter to see all configured external connections in one place, and no opportunity for connection reuse across plugins that talk to the same service.

**No catalog integration.** Annotations like `github.com/project-slug` and `jenkins.io/job-full-name` already link catalog entities to external resources, but there is no formal association between these annotations and the connection configuration. Each plugin handles annotation resolution independently, and there is no common pattern for mapping an entity's annotations to the right connection.

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
- Document the relationship between existing catalog entity annotations (e.g. `github.com/project-slug`) and connection types, leveraging their shared host-based namespace.

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

**Plugin scoping.** Each connection entry can optionally specify which plugins it is available to using the `plugins` field. When omitted, the connection is available to all plugins. When specified, the connection is only visible to the listed plugin IDs:

```yaml
connections:
  # Only the catalog plugin sees this connection (e.g. a read-only token)
  - type: github
    host: github.com
    token: ${GITHUB_CATALOG_TOKEN}
    plugins: [catalog]

  # All other plugins use this connection for github.com
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
    apps:
      - appId: 12345
        privateKey: ${GH_APP_KEY}
        clientId: ${GH_APP_CLIENT_ID}
        clientSecret: ${GH_APP_CLIENT_SECRET}
```

When a plugin queries for a connection, the service first considers connections scoped to that plugin, then falls back to connections without a scope. This allows adopters to give different plugins different credentials or permission levels for the same host without any code changes — for example, giving the catalog a read-only token while the scaffolder uses a GitHub App with write access.

**Config merging.** Arrays in Backstage's config system are replaced wholesale when merging across config sources — they do not merge element-by-element. This means that if `connections` is defined in multiple config files, the last source wins. In practice this is acceptable because different environments (local dev, staging, production) typically define entirely different sets of connections. For the case where base config and secrets need to be split, the recommended approach is to use environment variable substitution within a single config file, or to use the `$include` directive.

### Connection Service

A new core service provides access to connections:

```typescript
export const connectionsServiceRef = createServiceRef<ConnectionsService>({
  id: 'core.connections',
  defaultFactory: async service =>
    createServiceFactory({
      service,
      deps: {
        config: coreServices.rootConfig,
        plugin: coreServices.pluginMetadata,
      },
      factory({ config, plugin }) {
        return ConnectionsRegistry.fromConfig(config, {
          pluginId: plugin.getId(),
        });
      },
    }),
});
```

The service depends on `coreServices.pluginMetadata` so that each plugin receives a view of connections filtered to those available to it. Connections with a `plugins` scope that does not include the requesting plugin are excluded. Connections without a `plugins` scope are always included.

Added to `coreServices`:

```typescript
export const coreServices = {
  // ... existing services
  connections: connectionsServiceRef,
};
```

#### Connection Declarations

Before a plugin or module can access connections at runtime, it must declare which connection types it consumes. This is done by calling `env.registerConnections` during the `register` phase:

```typescript
export default createBackendModule({
  pluginId: 'catalog',
  moduleId: 'github-provider',
  register(env) {
    env.registerConnections(['github']);

    env.registerInit({
      deps: { connections: coreServices.connections },
      async init({ connections }) {
        const result = connections.find({
          type: 'github',
          url: 'https://github.com/my-org/my-repo',
        });

        if (result.connection) {
          const { host, apiBaseUrl, token, apps } = result.connection;
        }
      },
    });
  },
});
```

The framework enforces declarations at two levels:

- **Startup validation.** If a module depends on `coreServices.connections` but did not call `env.registerConnections`, the framework throws at startup before any init code runs.
- **Runtime validation.** If a module calls `find` or `findAll` with a type that was not declared, the service throws immediately.

Each module declares its own connection requirements independently. The plugin's total set of declared types is the union of all its modules' declarations. This means a catalog plugin with a GitHub provider module and a GitLab provider module each declare only the types they need:

```typescript
// catalog-backend-module-github
register(env) {
  env.registerConnections(['github']);
  // ...
}

// catalog-backend-module-gitlab
register(env) {
  env.registerConnections(['gitlab']);
  // ...
}
```

**Offline discoverability.** The `register` function is synchronous and side-effect-free — it runs before any async init logic. Tooling can load a module and execute `register` with a recording mock to extract declared connection types without running the plugin's actual implementation. Build tooling can also extract the declarations statically from source.

### Querying Connections

The connection service exposes two methods. Both take a single options object with a required `type` field, which is validated against the module's declared types.

**`find` — best match:**

Returns the single best-matching connection for the given criteria, or `undefined` if none matches:

```typescript
const result = connections.find({
  type: 'github',
  url: 'https://github.com/my-org/my-repo',
});
// result.connection is GithubConnection | undefined
```

Type-specific query parameters can refine the match beyond a URL. The set of extra parameters is defined per connection type:

```typescript
const result = connections.find({
  type: 'github',
  host: 'github.com',
  owner: 'my-org',
});
```

**`findAll` — all connections of a type:**

Returns all connections of the given type:

```typescript
const all = connections.findAll({ type: 'github' });
// GithubConnection[]
```

**Always-optional results:**

The `find` method never throws for a missing connection. It returns a `ConnectionResult` with `connection` set to `undefined`:

```typescript
const result = connections.find({
  type: 'github',
  url: 'https://unknown-host.example.com/path',
});

if (!result.connection) {
  logger.info('No GitHub connection configured, skipping sync');
  return;
}
```

### Defining Connection Types

Each connection type is defined using `createConnectionType`, which captures the full definition: config validation, parsing, URL matching, and annotation resolution. The definition uses a Zod schema as the single source of truth for the input shape, from which a JSON Schema is derived automatically for config validation and IDE support.

```typescript
import { createConnectionType } from '@backstage/backend-plugin-api';
import { z } from 'zod';

export const githubConnectionType = createConnectionType({
  type: 'github',

  configSchema: z.object({
    host: z.string(),
    apiBaseUrl: z.string().optional(),
    rawBaseUrl: z.string().optional(),
    token: z.string().optional(),
    apps: z
      .array(
        z.object({
          appId: z.union([z.number(), z.string()]),
          privateKey: z.string(),
          clientId: z.string(),
          clientSecret: z.string(),
          webhookSecret: z.string().optional(),
          allowedOwners: z.array(z.string()).optional(),
        }),
      )
      .optional(),
  }),

  create(input) {
    const isPublicGithub = input.host === 'github.com';
    return {
      type: 'github' as const,
      host: input.host,
      apiBaseUrl:
        input.apiBaseUrl ??
        (isPublicGithub
          ? 'https://api.github.com'
          : `https://${input.host}/api/v3`),
      rawBaseUrl:
        input.rawBaseUrl ??
        (isPublicGithub
          ? 'https://raw.githubusercontent.com'
          : `https://${input.host}/raw`),
      token: input.token,
      apps: input.apps,
    };
  },

  matchUrl(connection, url) {
    const owner = url.pathname.split('/')[1];
    if (!owner) {
      return 0;
    }
    for (const app of connection.apps ?? []) {
      if (app.allowedOwners?.includes(owner)) {
        return 100;
      }
    }
    return 0;
  },
});
```

The `createConnectionType` function produces a `ConnectionType` object that the registry uses internally. Consumers of the connection service never interact with this object — they work with the output type returned by `create`.

**What each piece does:**

- **`type`** — the discriminator string used in config and queries.
- **`configSchema`** — a Zod schema that validates the raw config entry (minus the `type` and `plugins` fields, which are handled by the framework). The inferred TypeScript type is the input type. A JSON Schema is derived automatically for config validation.
- **`create(input)`** — takes the validated input and returns the output connection object. This is where defaults are applied, URLs are derived, and the shape is transformed into what consumers receive.
- **`matchUrl(connection, url)`** — scores a connection against a URL for `find()` ranking. Returns a number: `0` for host-only match, higher for more specific matches, `-1` to explicitly reject. Called only among connections that already match by host.

### Connection Type Versioning

Because the config schema is a Zod schema, versioning is handled naturally through schema unions. When a connection type needs to support a new config format, the schema is extended with `z.union`:

```typescript
export const githubConnectionType = createConnectionType({
  type: 'github',

  configSchema: z.union([
    z.object({
      host: z.string(),
      token: z.string().optional(),
      apiBaseUrl: z.string().optional(),
      apps: z.array(/* ... */).optional(),
    }),
    z.object({
      host: z.string(),
      auth: z.object({
        method: z.literal('fine-grained-pat'),
        token: z.string(),
        repositories: z.array(z.string()),
      }),
    }),
  ]),

  create(input) {
    if ('auth' in input) {
      // New format
    }
    // Old format
  },
});
```

Both config shapes are valid. The JSON Schema derived from the union documents both formats. The `create` function handles both, allowing incremental migration.

### Catalog Entity Annotations

Existing Backstage entity annotations already follow a convention where the prefix is the provider's domain (e.g. `github.com/`, `gitlab.com/`, `sentry.io/`) and the suffix identifies the kind of resource. This means annotations like `github.com/project-slug` naturally share a namespace with connections — the host in the annotation matches the host in the connection configuration.

#### Annotation Conventions

Each connection type documents which annotations it recognizes and how their values map to resources that can be resolved through the connection service. The annotation prefix matches the connection's host, and the suffix identifies the kind of resource:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: my-service
  annotations:
    github.com/project-slug: my-org/my-repo
    github.com/team-slug: my-org/maintainers
    jenkins.io/job-full-name: folder-name/my-service
    sentry.io/project-slug: my-org/my-service
    sonarqube.org/project-key: my-service
```

These annotations already exist today. The connection service does not introduce new annotation keys or any runtime annotation handling — the relationship between annotations and connections is purely a documentation pattern.

#### Documented Annotation Associations

The documentation for each connection type lists which annotation suffixes are conventionally associated with it:

| Connection type | Annotation                  | Value format               |
| --------------- | --------------------------- | -------------------------- |
| `github`        | `github.com/project-slug`   | `<owner>/<repo>`           |
| `github`        | `github.com/team-slug`      | `<org>/<team>`             |
| `github`        | `github.com/user-login`     | `<username>`               |
| `gitlab`        | `gitlab.com/project-slug`   | `<group>/<project>`        |
| `gitlab`        | `gitlab.com/project-id`     | `<numeric-id>`             |
| `jenkins`       | `jenkins.io/job-full-name`  | `[instance:]<folder-path>` |
| `sentry`        | `sentry.io/project-slug`    | `[org/]<project>`          |
| `sonarqube`     | `sonarqube.org/project-key` | `<project-key>`            |

For self-hosted instances, the annotation prefix uses the instance's host (e.g. `ghe.example.com/project-slug` for a GitHub Enterprise instance) — the same host configured in the connection entry.

#### Plugin Usage Pattern

A plugin that operates on an entity reads the provider-specific annotation and uses the connection service to find the right connection. The annotation value identifies the resource, while the connection provides authentication and API endpoints:

```typescript
function getGithubRepo(
  entity: Entity,
  connections: ConnectionsService,
): { connection: GithubConnection; slug: string } | undefined {
  const slug = entity.metadata.annotations?.['github.com/project-slug'];
  if (!slug) {
    return undefined;
  }
  const result = connections.find({
    type: 'github',
    url: `https://github.com/${slug}`,
  });
  if (!result.connection) {
    return undefined;
  }
  return { connection: result.connection, slug };
}
```

#### Self-Hosted Instances and Annotation Prefixes

A key benefit of tying annotations to connection hosts is that self-hosted instances use their own host as the annotation prefix. An entity on GitHub Enterprise uses `ghe.example.com/project-slug` rather than `github.com/project-slug`, which naturally routes to the correct connection:

```yaml
annotations:
  ghe.example.com/project-slug: internal-org/internal-repo
```

This resolves to the connection configured with `host: ghe.example.com` without any special mapping logic.

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

Plugin scoping via the `plugins` field covers the common case of giving different plugins different connections. For more advanced customization, the entire connection service can be overridden at the app level:

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
      const registry = ConnectionsRegistry.fromConfig(config, {
        pluginId: plugin.getId(),
      });
      // Add dynamic connections, enforce additional policies, etc.
      return registry;
    },
  }),
);
```

### Custom Connection Types

Adopters can define and register custom connection types using the same `createConnectionType` API:

```typescript
const artifactoryConnectionType = createConnectionType({
  type: 'artifactory',

  configSchema: z.object({
    host: z.string(),
    token: z.string().optional(),
    repository: z.string().optional(),
  }),

  create(input) {
    return {
      type: 'artifactory' as const,
      host: input.host,
      apiBaseUrl: `https://${input.host}/artifactory/api`,
      token: input.token,
      repository: input.repository,
    };
  },
});
```

Custom types are registered through the connection service factory override:

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
      return ConnectionsRegistry.fromConfig(config, {
        pluginId: plugin.getId(),
        extraTypes: [artifactoryConnectionType],
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
  find<T extends string>(options: {
    type: T;
    url?: string | URL;
    [key: string]: unknown;
  }): ConnectionResult<T>;

  findAll<T extends string>(options: { type: T }): ConnectionOfType<T>[];
}
```

Both methods take a single options object with a required `type` field. The `find` method returns the best matching connection for the given type and optional query parameters. The `findAll` method returns all connections of the given type. Both validate the type against the module's declared connection types and throw if the type was not registered.

### `ConnectionType` Interface

The public type produced by `createConnectionType`:

```typescript
interface ConnectionType<TOutput extends Connection = Connection> {
  readonly type: string;
  readonly jsonSchema: JsonObject;
  parse(data: unknown): TOutput;
  matchUrl?(connection: TOutput, url: URL): number;
}
```

- **`type`** — the discriminator string.
- **`jsonSchema`** — automatically derived from the Zod `configSchema` by `createConnectionType`. Merged into the overall config schema for validation and IDE support. The Zod schema itself is not exposed.
- **`parse(data)`** — validates `data` against the internal Zod schema, then passes the result to the author's `create` function. Returns the output connection object. Throws on invalid input.
- **`matchUrl(connection, url)`** — optional. Scores a connection against a URL for `find()` ranking among same-host, same-type candidates.

The `createConnectionType` helper wires these together:

```typescript
function createConnectionType<TInput, TOutput extends Connection>(options: {
  type: string;
  configSchema: ZodType<TInput>;
  create: (input: TInput) => TOutput;
  matchUrl?: (connection: TOutput, url: URL) => number;
}): ConnectionType<TOutput>;
```

The Zod schema is consumed internally to derive the JSON Schema and to power `parse`, but it is not part of the public `ConnectionType` interface.

### `Connection` Interface

```typescript
interface Connection {
  readonly type: string;
  readonly host: string;
  readonly plugins?: readonly string[];
}
```

The base interface is minimal. The `plugins` field reflects the configured scope — when present, it lists the plugin IDs this connection is available to. When absent, the connection is available to all plugins. By the time a plugin receives a connection through the service, scoping has already been applied — a plugin only sees connections it is allowed to access.

Each connection type's output shape is defined by its `create` function. The built-in types produce objects like:

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

The `ConnectionsRegistry` maintains a `Map<string, Connection[]>` indexed by hostname. The connection set is already filtered by plugin scope at construction time — a plugin only sees connections that either have no `plugins` restriction or are explicitly scoped to it.

When `find` is called with a URL:

1. Parse the URL and extract the hostname.
2. Look up all connections for that host — O(1).
3. Filter to the requested type (always provided).
4. If one candidate remains, return it.
5. If multiple candidates remain, ask each to score the URL. Plugin-scoped connections are preferred over broadly available ones at the same specificity level.
6. Return the candidate with the highest score.

Each connection type's `matchUrl` function provides the scoring:

- `0` — matches only by host (fallback)
- `1-99` — partial path match (e.g. group-level GitLab matching)
- `100+` — specific resource match (e.g. GitHub connection whose `apps[].allowedOwners` includes the URL's owner segment)
- `-1` — does not match this URL despite sharing the host

For the common case of a single connection per host, no scoring is needed.

When `find` is called with type-specific parameters (e.g. `connections.find({ type: 'github', host: 'github.com', owner: 'my-org' })`) instead of a URL, the connection type handles the matching directly.

### Configuration Schema

The overall config schema for the `connections` key is assembled automatically from the registered connection types. Each type's `jsonSchema` (derived from its Zod `configSchema`) is combined into a discriminated union on the `type` field:

```typescript
export interface Config {
  connections?: Array<ConnectionConfigEntry>;
}
```

The `type` and `plugins` fields are added by the framework to every entry — connection type authors only define the type-specific fields in their `configSchema`. At runtime, `ConnectionsRegistry.fromConfig` reads each entry, dispatches to the matching `ConnectionType.parse` by `type`, and collects the results.

The `plugins` field is common to all connection config types. When present, the connection is only visible to the listed plugin IDs.

### Entity Annotation Resolution

The association between annotations and connection types is a documentation convention only — there is no runtime annotation handling in the connection service. The full annotation key follows the pattern `<host>/<suffix>` (e.g. `github.com/project-slug`), where the host matches the connection's host.

Plugins that need to resolve annotations to connections do so explicitly. A utility function can simplify the common pattern:

```typescript
function findEntityConnection<T extends string>(
  entity: Entity,
  connections: ConnectionsService,
  options: {
    type: T;
    annotation: string;
  },
): ConnectionResult<T> {
  const annotations = entity.metadata.annotations ?? {};

  for (const conn of connections.findAll({ type: options.type })) {
    const value = annotations[`${conn.host}/${options.annotation}`];
    if (value) {
      return { connection: conn };
    }
  }

  return { connection: undefined };
}

// Usage: find the github connection for this entity's project
const result = findEntityConnection(entity, connections, {
  type: 'github',
  annotation: 'project-slug',
});
```

This iterates over configured connections of the given type and checks whether the entity has a matching annotation for any of their hosts. This naturally handles self-hosted instances — an entity with `ghe.example.com/project-slug` matches the connection with `host: ghe.example.com`.

### Credential APIs on Top of Connections

Connections are intentionally limited to static configuration data. Dynamic credential resolution — token exchange, caching, refresh, SDK credential chains — is handled by separate type-specific APIs built on top of connections. This mirrors the existing pattern where `DefaultGithubCredentialsProvider`, `DefaultAzureDevOpsCredentialsProvider`, and `DefaultAwsCredentialsManager` already exist as distinct APIs separate from `ScmIntegrations`.

With the connection service in place, these credential APIs would read from `coreServices.connections` instead of `ScmIntegrations.fromConfig(config)`. They could be wired as independent service refs with default factories, making each one separately overridable. For example, a GitHub credentials service would call `connections.findAll({ type: 'github' })` to read all GitHub connection entries, handle the app installation token exchange for URLs matching `allowedOwners`, and cache tokens with appropriate expiry. An AWS credentials service would read static keys and role configurations via `connections.findAll({ type: 'aws-s3' })` and provide SDK credential provider chains.

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

One connection service per type (`coreServices.githubConnections`, etc.). Better type safety but leads to service ref proliferation and makes generic code harder to write. The single `coreServices.connections` with typed `find` and `findAll` methods provides sufficient type safety through the `type` option, while `registerConnections` provides the declaration guarantee.
