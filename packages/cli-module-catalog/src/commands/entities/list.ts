/*
 * Copyright 2026 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { cli } from 'cleye';
import { CliAuth, type CliCommandContext } from '@backstage/cli-node';
import { CatalogClient } from '@backstage/catalog-client';
import {
  type FilterPredicate,
  parseFilterPredicate,
} from '@backstage/filter-predicates';

export default async ({ args, info }: CliCommandContext) => {
  const argv = cli(
    {
      help: info,
      booleanFlagNegation: true,
      flags: {
        authInstanceName: {
          type: String,
          description: 'Name of the auth instance to use',
        },
        fields: {
          type: [String],
          description:
            'Comma separated list of fields to include in the output',
        },
        filter: {
          type: [String],
          description:
            'Filter the entities to include in the output, on the format key=value',
        },
        query: {
          type: String,
          description: 'A JSON filter predicate to use for querying entities',
        },
        limit: {
          type: Number,
          description: 'Limit the number of entities to include in the output',
        },
      },
    },
    undefined,
    args,
  );

  const auth = await CliAuth.create({
    instanceName: argv.flags.authInstanceName,
  });

  const fields = (argv.flags.fields ?? [])
    .flatMap(f => f.split(','))
    .map(f => f.trim())
    .filter(Boolean);

  const query = parseQueryFlags(argv.flags.filter, argv.flags.query);

  const limit = argv.flags.limit;

  const catalog = new CatalogClient({
    discoveryApi: {
      getBaseUrl: async () =>
        // 'https://software-catalog.spotify.net/api/catalog',
        'http://localhost:7007/api/catalog',
    },
  });

  const token = await auth.getAccessToken();
  const entities = await catalog.queryEntities(
    { fields, limit, query },
    { token },
  );

  console.log(JSON.stringify(entities.items, null, 2));
};

function parseQueryFlags(
  filter: string[] | undefined,
  query: string | undefined,
): FilterPredicate | undefined {
  const filterEntries = (filter ?? [])
    .flatMap(f => f.split(','))
    .map(f => f.trim())
    .filter(Boolean);

  const filterPredicate: FilterPredicate | undefined = filterEntries.length
    ? (() => {
        const result: Record<string, string> = {};
        for (const entry of filterEntries) {
          const [key, value] = entry.split('=');
          result[key] = value;
        }
        return result as FilterPredicate;
      })()
    : undefined;

  const queryPredicate: FilterPredicate | undefined = query
    ? parseFilterPredicate(JSON.parse(query))
    : undefined;

  if (filterPredicate && queryPredicate) {
    return { $all: [filterPredicate, queryPredicate] } as FilterPredicate;
  }

  return filterPredicate ?? queryPredicate;
}
