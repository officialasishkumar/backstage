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
  - [Configuration Format](#configuration-format)
  - [Backend Core Service](#backend-core-service)
  - [URL-Based Lookup](#url-based-lookup)
  - [Credential Resolution](#credential-resolution)
  - [Integration Type Versioning](#integration-type-versioning)
  - [Frontend Discovery](#frontend-discovery)
  - [Override Capability](#override-capability)
  - [Custom Integration Types](#custom-integration-types)
- [Design Details](#design-details)
  - [IntegrationsService Interface](#integrationsservice-interface)
  - [Integration Interface](#integration-interface)
  - [IntegrationCredentials](#integrationcredentials)
  - [URL Matching and Indexing](#url-matching-and-indexing)
  - [GitHub App Credential Resolution](#github-app-credential-resolution)
  - [Configuration Schema](#configuration-schema)
  - [Backward Compatibility](#backward-compatibility)
  - [Frontend Integration Plugin](#frontend-integration-plugin)
- [Release Plan](#release-plan)
- [Dependencies](#dependencies)
- [Alternatives](#alternatives)

## Summary

This BEP proposes a centralized integrations system for Backstage that goes well beyond the current SCM-focused `ScmIntegrations` design. The new system introduces a backend core service (`coreServices.integrations`) for typed, centralized access to all configured integrations, with first-class support for heterogeneous authentication methods, URL-based resource routing, and evolution of integration definitions over time.

Integrations are configured in a grouped, named structure under the `integrations` key in `app-config.yaml` that is designed to merge cleanly across multiple configuration sources. Each integration type defines its own credential resolution strategy — for example, a GitHub integration can manage multiple GitHub Apps scoped to different organizations and automatically select the right credentials based on a resource URL. The service provides performant URL-based lookup that goes beyond simple host matching, enabling fine-grained routing of requests to the correct integration and credentials.

The system is designed to evolve: individual integration types can introduce new configuration formats over time without breaking existing setups, and adopters can register custom internal integration types at the app level.

## Motivation

The current integrations system in Backstage has served the project well, but several pain points have emerged as the ecosystem has grown.

**Scattered initialization.** Every backend plugin that needs integration information independently calls `ScmIntegrations.fromConfig(config)`. There is no shared instance, which means the same configuration is parsed repeatedly across the backend, and there is no central point where integrations can be augmented, filtered, or monitored.

**No override capability.** Adopters cannot customize how integrations are provided to different plugins. For example, there is no way to restrict which GitHub organizations a particular plugin can access, or to inject additional credentials per plugin without forking the plugin itself.

**Primitive lookup.** The current `byHost` lookup is insufficient for real-world scenarios. When multiple GitHub Apps are configured for different organizations on the same host, or when different credentials should be used for different paths on the same GitLab instance, host-based matching cannot express the routing. Plugins end up re-implementing credential selection logic.

**Complex credential management is not abstracted.** GitHub App authentication is particularly complex — an adopter may have different apps installed for different organizations, each with different permissions, and the system needs to select the right app installation based on the target repository. Today this logic lives in `DefaultGithubCredentialsProvider` and is not part of the integrations abstraction. Other providers have their own credential complexities (Azure managed identity, AWS role assumption) that are similarly not unified.

**No path for evolution.** When an external service makes breaking changes to its API or authentication, or when Backstage wants to introduce a fundamentally better configuration format for an integration type, there is no mechanism to roll out a new format alongside the old one. Every change must be backward-compatible within the same config shape.

**Poor config merging.** The current array-based configuration (`integrations.github: [{...}, {...}]`) does not merge across configuration sources — Backstage's config system replaces arrays wholesale. This forces adopters to define all integrations of a type in a single config file, preventing clean separation of concerns (e.g. base config in the repo, secrets in a separate source, environment-specific overrides in another).

**Misleading naming.** The `ScmIntegrations` class includes non-SCM integrations such as AWS S3, Google GCS, and Azure Blob Storage. The scope of the system has outgrown the "SCM" label.

### Goals

- Introduce a backend core service (`coreServices.integrations`) that provides typed, centralized access to all configured integrations.
- Design a configuration format that merges cleanly across multiple config sources by using named entries grouped by type.
- Provide performant URL-based lookup that goes beyond host matching, enabling fine-grained routing to the correct integration based on a full resource URL.
- Abstract credential resolution so that each integration type handles its own authentication complexity (GitHub Apps, OAuth, managed identities, etc.) behind a uniform async interface.
- Allow integration type definitions to evolve over time — supporting new config formats alongside old ones within the same type.
- Allow adopters to override the integrations service to filter, augment, or scope integrations per plugin.
- Provide a backend API endpoint that frontends can query to discover configured integration metadata without exposing secrets.
- Maintain a global registry of built-in integration types in the Backstage project, with each integration documented on backstage.io.
- Allow adopters to register custom internal integration types at the app level.

### Non-Goals

- This BEP does not propose changes to the URL reader service, though the URL reader will be updated to consume integrations through the new service.
- This BEP does not cover dynamic credential rotation or external secrets management — those are orthogonal concerns that can build on top of this system.
- This BEP does not aim to make the integrations system arbitrarily extensible through a plugin mechanism — custom types are limited to app-level registration.
- This BEP does not prescribe the internal implementation of any specific integration type's credential logic.

## Proposal

### Configuration Format

Integrations are configured under the `integrations` key in `app-config.yaml`, grouped by type and keyed by a user-chosen name:

```yaml
integrations:
  github:
    public:
      host: github.com
      apiBaseUrl: https://api.github.com
      rawBaseUrl: https://raw.githubusercontent.com
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
      token: ${GITHUB_TOKEN}
    enterprise:
      host: ghe.example.com
      apiBaseUrl: https://ghe.example.com/api/v3
      token: ${GHE_TOKEN}
  gitlab:
    main:
      host: gitlab.com
      token: ${GITLAB_TOKEN}
    self-hosted:
      host: gitlab.example.com
      token: ${SELF_HOSTED_TOKEN}
  azure:
    devops:
      host: dev.azure.com
      credentials:
        - personalAccessToken: ${AZURE_TOKEN}
```

This structure has several important properties:

**Deep merging across config sources.** Because every level is an object keyed by name, Backstage's config system merges entries deeply. A base config can define hosts and API URLs, while a secrets source provides only tokens:

```yaml
# app-config.yaml (checked into repo)
integrations:
  github:
    public:
      host: github.com
      apiBaseUrl: https://api.github.com

# app-config.local.yaml (developer secrets, not checked in)
integrations:
  github:
    public:
      token: ${GITHUB_TOKEN}

# app-config.production.yaml (production environment)
integrations:
  github:
    public:
      apps:
        - appId: 12345
          privateKey: ${GH_APP_KEY}
          clientId: ${GH_APP_CLIENT_ID}
          clientSecret: ${GH_APP_CLIENT_SECRET}
```

**Grouping by type.** All integrations of the same type are visually grouped together, making configuration easier to read and navigate. The type is inferred from the parent key rather than requiring a `type` discriminator on each entry.

**Named entries.** The user-chosen name (e.g. `public`, `enterprise`, `main`) serves as a stable identifier for each integration. This makes it possible to reference specific integrations from other configuration, logs, or API responses.

### Backend Core Service

A new core service is introduced for accessing integrations:

```typescript
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

The service is added to `coreServices`:

```typescript
export const coreServices = {
  // ... existing services
  integrations: integrationsServiceRef,
};
```

Plugins consume it through standard dependency injection:

```typescript
export const myPlugin = createBackendPlugin({
  pluginId: 'my-plugin',
  register(env) {
    env.registerInit({
      deps: {
        integrations: coreServices.integrations,
      },
      async init({ integrations }) {
        const allGithub = integrations.list({ type: 'github' });
        const forUrl = integrations.byUrl('https://github.com/my-org/my-repo');
        // ...
      },
    });
  },
});
```

### URL-Based Lookup

The current system matches integrations by host only. The new system supports matching by full resource URL, enabling scenarios where multiple integrations serve the same host but different subsets of resources.

The `byUrl` method returns the most specific integration for a given resource URL. Internally this is implemented as a two-phase lookup:

1. **Host index.** A map from hostname to the set of integrations registered for that host. This provides O(1) first-pass filtering.
2. **Specificity scoring.** Each candidate integration is asked to score its match against the full URL. The integration with the highest specificity wins.

For example, given these GitHub integrations:

```yaml
integrations:
  github:
    org-app:
      host: github.com
      apps:
        - appId: 123
          allowedOwners: [my-org]
    fallback:
      host: github.com
      token: ${GITHUB_TOKEN}
```

A lookup for `https://github.com/my-org/my-repo` would match `org-app` (specificity based on owner match), while `https://github.com/other-org/something` would fall back to `fallback` (lower specificity, matches any path on the host).

The specificity scoring is defined per integration type. GitHub integrations derive specificity from app installation owner matching. GitLab integrations could use group-level path matching. Integration types that only support host-level matching assign a flat base score.

### Credential Resolution

Each integration provides an async method for obtaining credentials appropriate for a given request context:

```typescript
const integration = integrations.byUrl(
  'https://github.com/my-org/my-repo/blob/main/README.md',
);

const credentials = await integration.getCredentials({
  url: 'https://github.com/my-org/my-repo',
});
// credentials.token, credentials.headers, etc.
```

The `getCredentials` method is URL-aware because different URLs within the same integration may require different credentials. For GitHub, this is where the app installation selection happens: given a URL containing `my-org`, the integration selects the GitHub App that has `my-org` in its `allowedOwners`, obtains an installation token for that app, and returns it.

This design keeps credential complexity encapsulated within each integration type. Consuming plugins do not need to understand GitHub App installation flows, Azure managed identity token exchanges, or AWS role assumption — they call `getCredentials` and receive a uniform result.

When an integration has multiple possible credential sources (e.g. both a token and apps configured), the integration type defines the precedence. For GitHub, apps take precedence over tokens for matching organizations, with the token serving as a fallback.

### Integration Type Versioning

Integration type definitions can evolve over time. Each type's factory function inspects the configuration of each entry and determines how to instantiate it. This enables two forms of evolution:

**Additive changes.** New optional fields can be added to an existing configuration format without affecting existing configs. This is the common case and requires no special handling.

**Breaking changes.** When a fundamentally new configuration format is needed (e.g. if an external service overhauls its authentication model), a new format can be introduced alongside the old one. The type factory detects the format version from the fields present and creates the appropriate integration instance:

```yaml
integrations:
  github:
    legacy:
      host: github.com
      token: ${GITHUB_TOKEN}
    modern:
      host: github.com
      # Hypothetical future format with different auth model
      auth:
        method: fine-grained-pat
        token: ${GITHUB_FG_PAT}
        repositories:
          - my-org/repo-a
          - my-org/repo-b
```

Both entries are valid `github` integrations, but with different config shapes. The GitHub integration factory handles both, creating the correct `Integration` instance for each. This allows adopters to migrate incrementally — they can run old and new formats side by side.

An explicit `version` field can be added to disambiguate when auto-detection is insufficient, but in most cases the config shape itself is enough.

### Frontend Discovery

A backend API endpoint exposes non-secret integration metadata:

```
GET /api/integrations
```

```json
{
  "integrations": [
    { "type": "github", "id": "public", "host": "github.com" },
    { "type": "github", "id": "enterprise", "host": "ghe.example.com" },
    { "type": "gitlab", "id": "main", "host": "gitlab.com" },
    { "type": "azure", "id": "devops", "host": "dev.azure.com" }
  ]
}
```

Frontend code queries this endpoint instead of reading config directly. Secret fields are never included. A corresponding frontend API (`integrationsApiRef`) replaces the current `scmIntegrationsApiRef` from `@backstage/integration-react`.

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
      return all.scoped(integration =>
        isAllowedForPlugin(integration, plugin.getId()),
      );
    },
  }),
);
```

### Custom Integration Types

Adopters can register custom integration types at the app level through the service override mechanism:

```typescript
const backend = createBackend();

backend.add(
  createServiceFactory({
    service: coreServices.integrations,
    deps: { config: coreServices.rootConfig },
    factory({ config }) {
      const registry = IntegrationsRegistry.fromConfig(config, {
        extraTypes: [
          {
            type: 'artifactory',
            factory: (id, entryConfig) =>
              new ArtifactoryIntegration(id, entryConfig),
          },
        ],
      });
      return registry;
    },
  }),
);
```

This is intentionally limited to the app level — libraries and plugins cannot register new types, keeping the integration surface predictable. The custom type can then be configured just like any built-in type:

```yaml
integrations:
  artifactory:
    internal:
      host: artifactory.example.com
      token: ${ARTIFACTORY_TOKEN}
```

## Design Details

### `IntegrationsService` Interface

```typescript
interface IntegrationsService {
  list(options?: { type?: string }): Integration[];

  byUrl(url: string | URL): Integration | undefined;

  resolveUrl(options: {
    url: string;
    base: string;
    lineNumber?: number;
  }): string;

  resolveEditUrl(url: string): string;
}
```

The `list` method returns all integrations, optionally filtered by type. The `byUrl` method returns the single best-matching integration for a resource URL, using the host index and specificity scoring described above. It returns `undefined` if no integration matches.

### `Integration` Interface

```typescript
interface Integration {
  readonly type: string;
  readonly id: string;
  readonly title: string;
  readonly host: string;

  getCredentials(options?: {
    url?: string | URL;
  }): Promise<IntegrationCredentials>;

  resolveUrl(options: {
    url: string;
    base: string;
    lineNumber?: number;
  }): string;

  resolveEditUrl(url: string): string;
}
```

The `id` is the user-chosen name from configuration (e.g. `"public"`, `"enterprise"`). The `type` is the integration type key (e.g. `"github"`, `"gitlab"`).

Each built-in integration type provides a more specific subtype (e.g. `GithubIntegration`) with additional type-specific accessors such as `apiBaseUrl`, `rawBaseUrl`, or methods for listing installed apps.

### `IntegrationCredentials`

```typescript
interface IntegrationCredentials {
  type: string;
  token?: string;
  headers?: Record<string, string>;
}
```

The `type` field indicates the credential type (e.g. `"token"`, `"app-installation"`, `"basic"`, `"bearer"`, `"anonymous"`). The `token` and `headers` fields provide the actual credentials in the most commonly needed forms. Integration types can extend this with more specific credential types when needed.

The `getCredentials` method is async because credentials may need to be fetched or refreshed (e.g. GitHub App installation tokens expire and must be periodically renewed).

### URL Matching and Indexing

The `IntegrationsRegistry` maintains a `Map<string, Integration[]>` indexed by hostname. When `byUrl` is called:

```
1. Parse the URL and extract the hostname
2. Look up all integrations for that host (O(1))
3. If no candidates, return undefined
4. If one candidate, return it
5. If multiple candidates, ask each to score the URL
6. Return the candidate with the highest score
```

Each integration type implements a `matchScore(url: URL): number` method (internal, not part of the public `Integration` interface). The scoring contract is:

- `0` — matches only by host (fallback)
- `1-99` — partial path match (e.g. group-level GitLab matching)
- `100+` — exact resource match (e.g. GitHub App for a specific owner)
- `-1` — explicitly does not match this URL despite sharing the host

For the common case of a single integration per host, no scoring is needed and the lookup is a simple map access.

### GitHub App Credential Resolution

GitHub integration demonstrates the credential resolution design at its most complex:

```yaml
integrations:
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

1. Extract the owner from the URL path (`org-a`)
2. Find the app whose `allowedOwners` includes `org-a` (app 111)
3. Use the app's private key to obtain an installation access token for `org-a`
4. Return `{ type: 'app-installation', token: '<installation-token>', headers: { authorization: 'token <installation-token>' } }`

If no app matches the owner, fall back to the configured `token`. If neither is available, return anonymous credentials.

The `matchScore` for this integration against `https://github.com/org-a/my-repo` would return `100` (owner-level match via app), while against `https://github.com/random-org/something` it would return `0` (host-only match via fallback token).

### Configuration Schema

The new configuration schema uses the grouped, named structure:

```typescript
export interface Config {
  integrations?: {
    github?: { [name: string]: GithubIntegrationConfig };
    gitlab?: { [name: string]: GitlabIntegrationConfig };
    azure?: { [name: string]: AzureIntegrationConfig };
    bitbucketCloud?: { [name: string]: BitbucketCloudIntegrationConfig };
    bitbucketServer?: { [name: string]: BitbucketServerIntegrationConfig };
    gerrit?: { [name: string]: GerritIntegrationConfig };
    gitea?: { [name: string]: GiteaIntegrationConfig };
    harness?: { [name: string]: HarnessIntegrationConfig };
    awsS3?: { [name: string]: AwsS3IntegrationConfig };
    awsCodeCommit?: { [name: string]: AwsCodeCommitIntegrationConfig };
    azureBlobStorage?: {
      [name: string]: AzureBlobStorageIntegrationConfig;
    };
    googleGcs?: { [name: string]: GoogleGcsIntegrationConfig };
  };
}
```

Each config type is specific to its integration. Note that unlike the old format, all types use the same structure: an object of named entries. There are no more inconsistencies like `googleGcs` being a single object while everything else is an array.

```typescript
interface GithubIntegrationConfig {
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
    allowedOwners?: string[];
    publicAccess?: boolean;
  }>;
}

interface AzureIntegrationConfig {
  host: string;
  credentials?: Array<{
    organizations?: string[];
    personalAccessToken?: string;
    clientId?: string;
    clientSecret?: string;
    tenantId?: string;
    managedIdentityClientId?: string;
  }>;
  commitSigningKey?: string;
}
```

### Backward Compatibility

The old configuration format is still supported during a deprecation period. The `IntegrationsRegistry.fromConfig` method detects the format and reads both:

```yaml
# Old format (deprecated, still supported)
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}

# New format (preferred)
integrations:
  github:
    public:
      host: github.com
      token: ${GITHUB_TOKEN}
```

Detection is straightforward: if the value under a type key (e.g. `integrations.github`) is an array, the old format is used and each array entry is assigned a generated name. If it is an object, the new format is used. When the old format is detected, a deprecation warning is logged at startup.

The existing `ScmIntegrations` and `ScmIntegrationRegistry` types are preserved as deprecated wrappers that delegate to the new `IntegrationsService`. Plugins that haven't migrated continue to work.

### Frontend Integration Plugin

A lightweight backend plugin (`@backstage/plugin-integrations-backend`) exposes integration metadata to the frontend:

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
              id: i.id,
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

## Release Plan

The rollout is split into phases to minimize disruption:

**Phase 1: New service and registry (non-breaking).** Introduce `IntegrationsRegistry`, `IntegrationsService`, `Integration`, and `coreServices.integrations` with full backward compatibility for the old config format. `ScmIntegrations` is updated to delegate to `IntegrationsRegistry` internally so that existing plugins continue to work without changes.

**Phase 2: Plugin migration.** Core plugins (`catalog`, `scaffolder`, `techdocs`, etc.) are migrated to use `coreServices.integrations`. The URL reader service is updated to consume the integrations service. `@backstage/integration-react` is updated to use the new frontend API.

**Phase 3: Deprecation.** `ScmIntegrations`, `ScmIntegrationRegistry`, and the old array-based config format are formally deprecated with a target removal timeline. Deprecation warnings guide adopters to the new format and APIs.

**Phase 4: Removal.** The deprecated APIs and old config format support are removed in a future major version bump of the affected packages.

## Dependencies

None.

## Alternatives

### Flat List with `type` Discriminator

All integrations in a single flat array with a `type` field:

```yaml
integrations:
  - type: github
    host: github.com
    token: ${GITHUB_TOKEN}
  - type: gitlab
    host: gitlab.com
    token: ${GITLAB_TOKEN}
```

This is simpler to parse but suffers from the same config merging problem as the current array-based format — arrays are replaced wholesale when merging from multiple config sources, making it impossible to split integration config across files. It also loses the visual grouping by type.

### Keep `ScmIntegrations` and Add a Service Wrapper

Rather than replacing the integration registry, we could wrap `ScmIntegrations` in a service without changing the config format or type system:

```typescript
export const integrationsServiceRef = createServiceRef<ScmIntegrations>({
  id: 'core.integrations',
  // ...
});
```

This is simpler to implement but misses the opportunity to fix config merging, improve URL-based lookup, abstract credential resolution, and support type evolution. It also preserves the tight coupling between plugins and the `@backstage/integration` package.

### Per-Provider Service Refs

Instead of a single integrations service, one service per integration type:

```typescript
coreServices.githubIntegrations;
coreServices.gitlabIntegrations;
// etc.
```

This provides better type safety per provider but leads to a proliferation of service refs, makes generic cross-type code harder to write, and complicates the override story since adopters would need to override each provider separately.

### Extensible Plugin-Based Registry

Making the registry fully extensible through backend modules:

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

While more flexible, this makes it harder to maintain a predictable set of integration types and increases the risk of conflicts or inconsistencies. The common schema becomes harder to enforce, and documentation cannot be centralized. App-level registration provides sufficient flexibility without these downsides.
