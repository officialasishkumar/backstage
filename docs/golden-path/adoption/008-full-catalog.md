---
id: full-catalog
sidebar_label: 008 - A Full Catalog
title: Ensuring your catalog stays complete
description: Strategies for maintaining a complete and up-to-date software catalog
---

Along your Backstage journey (and any workflow migration journey), you will
hit a point where incremental adoption is no longer easy. The new developers
are no longer flowing into your tool like they once did. More and more
projects are not being listed in your catalog. Something has to change.

## Enforcing catalog files in CI

The most effective way to reach full catalog coverage is to make it part of
your existing development workflow. If adding a `catalog-info.yaml` file is
optional, it will be skipped. If it's enforced in CI, it becomes a natural
part of creating or maintaining a repository.

### Adding a CI check

A CI check that validates the presence and correctness of a
`catalog-info.yaml` file can be as straightforward as:

1. **Existence check.** Does the file exist in the repository root? If not,
   fail the build with a helpful message explaining what to add and why.
1. **Schema validation.** Does the file conform to the expected schema? You
   can use a YAML linter or a custom validation script to check for required
   fields like `metadata.name`, `spec.owner`, and `spec.type`.
1. **Ownership validation.** Does the `spec.owner` reference a valid team
   in your catalog? This catches typos and stale references before they make
   it into production.

:::tip

Start with a warning rather than a blocking check. Give teams a few weeks to
add their catalog files before turning the check into a hard failure. This
reduces friction and gives you time to help teams that need it.

:::

### Handling exceptions

Not every repository needs a catalog entry. Infrastructure repos, archived
projects, or experimental forks may not belong in your catalog. Provide a
clear mechanism for exceptions, such as an `ignore` file or a list
maintained by your platform team. The goal is full coverage of production
services, not 100% coverage of every repository in your organization.

### Bootstrapping existing repos

For organizations with hundreds or thousands of repositories, manually
adding catalog files is not practical. Consider:

- **Automated PRs.** Write a script that generates a `catalog-info.yaml`
  with reasonable defaults (repository name, inferred owner from CODEOWNERS)
  and opens a PR for each repo. Teams can review and merge at their own
  pace.
- **Catalog providers.** Use
  [catalog discovery providers](../../integrations/github/discovery.md) to
  automatically ingest repositories and generate entities without requiring
  a file in each repo. You can then encourage teams to add their own files
  for richer metadata over time.

## Leadership initiatives

At some point, bottom-up adoption runs out of steam. The teams that were
going to adopt voluntarily already have. To close the remaining gap, you
need top-down support.

### Making the case

Go back to the metrics you've been tracking since
[leadership buy-in](./002-leadership-buy-in.md). Show the concrete value
Backstage has delivered for teams that adopted it, and frame the remaining
gap as unrealized potential. For example:

- "Teams using Backstage onboard new engineers 30% faster. 40% of our
  services are not yet in the catalog."
- "We've reduced incident response time for cataloged services by
  identifying owners in seconds instead of minutes. The remaining services
  still require manual investigation."

Numbers like these make the case for a mandate far more compelling than a
general request for adoption.

### What a mandate looks like

A leadership mandate doesn't have to be heavy-handed. Effective approaches
include:

- **OKRs or team goals.** Include catalog registration as a deliverable in
  quarterly planning. This gives teams dedicated time to do the work rather
  than treating it as an unfunded side project.
- **Compliance deadlines.** Set a deadline for all production services to be
  registered. Pair this with office hours and support from your platform
  team so it doesn't feel like an unfunded mandate.
- **Leading by example.** When leadership's own teams are fully registered
  and actively using Backstage, the message carries more weight.

### Sustaining momentum

Full catalog coverage is not a one-time achievement. New services get
created, teams reorganize, and metadata goes stale. To keep your catalog
healthy over time:

- **Enforce at creation time.** If your CI checks are in place, new
  repositories start with catalog entries by default. This prevents
  backsliding.
- **Regular audits.** Run a periodic report that flags entities with
  missing owners, stale metadata, or orphaned entries. Share this with
  team leads so they can clean up proactively.
- **Freshness indicators.** Surface the last-updated timestamp for catalog
  entries in your Backstage UI. When teams can see that their metadata is
  six months old, they're more likely to update it.

:::note

Full catalog coverage is a journey, not a destination. The goal is not
perfection but a catalog that is useful and trusted. If developers believe
the catalog is accurate, they'll use it. If they don't trust it, no amount
of enforcement will make it valuable.

:::
