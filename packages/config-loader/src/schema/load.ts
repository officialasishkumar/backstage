/*
 * Copyright 2020 The Backstage Authors
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

import { AppConfig } from '@backstage/config';
import { JsonObject } from '@backstage/types';
import { compileConfigSchemas } from './compile';
import { collectConfigSchemas } from './collect';
import { filterByVisibility, filterErrorsByVisibility } from './filtering';
import {
  ValidationError,
  ConfigSchema,
  ConfigSchemaPackageEntry,
  ConfigSchemaSerializeOptions,
  CONFIG_VISIBILITIES,
} from './types';
import { JSONSchema7 as JSONSchema } from 'json-schema';
import traverse from 'json-schema-traverse';
import { normalizeAjvPath } from './utils';

/**
 * Options that control the loading of configuration schema files in the backend.
 *
 * @public
 */
export type LoadConfigSchemaOptions =
  | (
      | {
          dependencies: string[];
          packagePaths?: string[];
        }
      | {
          serialized: JsonObject;
        }
    ) & {
      noUndeclaredProperties?: boolean;
    };

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

function errorsToError(errors: ValidationError[]): Error {
  const messages = errors.map(({ instancePath, message, params }) => {
    const paramStr = Object.entries(params)
      .map(([name, value]) => `${name}=${value}`)
      .join(' ');
    return `Config ${message || ''} { ${paramStr} } at ${normalizeAjvPath(
      instancePath,
    )}`;
  });
  const error = new Error(`Config validation failed, ${messages.join('; ')}`);
  (error as any).messages = messages;
  return error;
}

/**
 * Loads config schema for a Backstage instance.
 *
 * @public
 */
export async function loadConfigSchema(
  options: LoadConfigSchemaOptions,
): Promise<ConfigSchema> {
  let schemas: ConfigSchemaPackageEntry[];

  if ('dependencies' in options) {
    schemas = await collectConfigSchemas(
      options.dependencies,
      options.packagePaths ?? [],
    );
  } else {
    const { serialized } = options;
    if (serialized?.backstageConfigSchemaVersion !== 1) {
      throw new Error(
        'Serialized configuration schema is invalid or has an invalid version number',
      );
    }
    schemas = serialized.schemas as ConfigSchemaPackageEntry[];
  }

  const validate = compileConfigSchemas(schemas, {
    noUndeclaredProperties: options.noUndeclaredProperties,
  });

  return {
    process(
      configs: AppConfig[],
      {
        visibility,
        valueTransform,
        withFilteredKeys,
        withDeprecatedKeys,
        ignoreSchemaErrors,
      } = {},
    ): AppConfig[] {
      const result = validate(configs);

      if (!ignoreSchemaErrors) {
        const visibleErrors = filterErrorsByVisibility(
          result.errors,
          visibility,
          result.visibilityByDataPath,
          result.visibilityBySchemaPath,
        );
        if (visibleErrors.length > 0) {
          throw errorsToError(visibleErrors);
        }
      }

      let processedConfigs = configs;

      if (visibility) {
        processedConfigs = processedConfigs.map(({ data, context }) => ({
          context,
          ...filterByVisibility(
            data,
            visibility,
            result.visibilityByDataPath,
            result.deepVisibilityByDataPath,
            result.deprecationByDataPath,
            valueTransform,
            withFilteredKeys,
            withDeprecatedKeys,
          ),
        }));
      } else if (valueTransform) {
        processedConfigs = processedConfigs.map(({ data, context }) => ({
          context,
          ...filterByVisibility(
            data,
            Array.from(CONFIG_VISIBILITIES),
            result.visibilityByDataPath,
            result.deepVisibilityByDataPath,
            result.deprecationByDataPath,
            valueTransform,
            withFilteredKeys,
            withDeprecatedKeys,
          ),
        }));
      }

      return processedConfigs;
    },
    serialize(serializeOptions?: ConfigSchemaSerializeOptions): JsonObject {
      const dialect =
        serializeOptions?.schema ?? 'https://backstage.io/schema/config-v1';

      if (dialect === 'http://json-schema.org/draft-07/schema#') {
        return {
          backstageConfigSchemaVersion: 1,
          schemas: schemas.map(entry => ({
            ...entry,
            value: toStrictJsonSchema(entry.value as JSONSchema) as JsonObject,
          })),
        };
      }

      return {
        schemas,
        backstageConfigSchemaVersion: 1,
      };
    },
  };
}
