/*
 * Copyright 2021 The Backstage Authors
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
import { JSONSchema7 as JSONSchema } from 'json-schema';
import { stringify as stringifyYaml } from 'yaml';
import traverse from 'json-schema-traverse';
import { loadCliConfig } from '../lib/config';
import { JsonObject } from '@backstage/types';
import { mergeConfigSchemas } from '@backstage/config-loader';
import type { CliCommandContext } from '@backstage/cli-node';

/**
 * Transforms a JSON Schema to be strictly conformant with JSON Schema Draft 7
 * by renaming Backstage-specific keywords to x-prefixed extensions.
 */
function toStrictJsonSchema(schema: JSONSchema): JSONSchema {
  schema.$schema = 'http://json-schema.org/draft-07/schema#';
  traverse(schema, node => {
    if ('visibility' in node) {
      node['x-visibility'] = node.visibility;
      delete node.visibility;
    }
    if ('deepVisibility' in node) {
      node['x-deepVisibility'] = node.deepVisibility;
      delete node.deepVisibility;
    }
    if ('deprecated' in node) {
      if (typeof node.deprecated === 'string') {
        node['x-deprecated'] = node.deprecated;
      }
      node.deprecated = true;
    }
  });
  return schema;
}

export default async ({ args, info }: CliCommandContext) => {
  const {
    flags: { merge, format, package: pkg, strict },
  } = cli(
    {
      help: info,
      booleanFlagNegation: true,
      flags: {
        package: { type: String, description: 'Package to print schema for' },
        format: { type: String, description: 'Output format (yaml or json)' },
        merge: {
          type: Boolean,
          description: 'Merge all schemas into a single schema',
        },
        strict: {
          type: Boolean,
          description: 'Output a strict, conformant JSON Schema',
        },
      },
    },
    undefined,
    args,
  );

  const { schema } = await loadCliConfig({
    args: [],
    fromPackage: pkg,
    mockEnv: true,
  });

  let configSchema: JsonObject | JSONSchema;
  if (merge) {
    configSchema = mergeConfigSchemas(
      (schema.serialize().schemas as JsonObject[]).map(
        _ => _.value as JSONSchema,
      ),
    );
    configSchema.title = 'Application Configuration Schema';
    configSchema.description =
      'This is the schema describing the structure of the app-config.yaml configuration file.';

    if (strict) {
      toStrictJsonSchema(configSchema);
    }
  } else if (strict) {
    const serialized = schema.serialize() as JsonObject;
    const schemas = serialized.schemas as JsonObject[];
    configSchema = {
      ...serialized,
      schemas: schemas.map(entry => ({
        ...entry,
        value: toStrictJsonSchema(entry.value as JSONSchema) as JsonObject,
      })),
    };
  } else {
    configSchema = schema.serialize();
  }

  if (format === 'json') {
    process.stdout.write(`${JSON.stringify(configSchema, null, 2)}\n`);
  } else {
    process.stdout.write(`${stringifyYaml(configSchema)}\n`);
  }
};
