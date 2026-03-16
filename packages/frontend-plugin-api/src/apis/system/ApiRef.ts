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

import type { ApiRef } from './types';

/**
 * API reference configuration - holds an ID of the referenced API.
 *
 * @public
 */
export type ApiRefConfig = {
  id: string;
};

function validateApiRefId(id: string): void {
  const valid = id
    .split('.')
    .flatMap(part => part.split('-'))
    .every(part => part.match(/^[a-z][a-z0-9]*$/));
  if (!valid) {
    throw new Error(
      `API id must only contain period separated lowercase alphanum tokens with dashes, got '${id}'`,
    );
  }
}

function createApiRefInternal<T>(id: string): ApiRef<T> {
  validateApiRefId(id);
  return Object.create(
    { toString: () => `apiRef{${id}}` },
    {
      $$type: { value: '@backstage/ApiRef', enumerable: true },
      id: { value: id, enumerable: true },
      T: {
        get(): T {
          throw new Error(`tried to read ApiRef.T of apiRef{${id}}`);
        },
      },
    },
  );
}

/**
 * Creates a reference to an API.
 *
 * @remarks
 *
 * The recommended way to create an API reference is the chained form:
 *
 * ```ts
 * const myApiRef = createApiRef<MyApi>().with({ id: 'plugin.my-plugin.my-api' });
 * ```
 *
 * A shorthand form is also available for convenience:
 *
 * ```ts
 * const myApiRef = createApiRef<MyApi>({ id: 'plugin.my-plugin.my-api' });
 * ```
 *
 * The provided `id` is a stable identifier for the API implementation. The
 * frontend system infers the owning plugin for an API from the `id`. The
 * recommended pattern is `plugin.<plugin-id>.*` (for example,
 * `plugin.catalog.entity-presentation`). This ensures that other plugins can't
 * mistakenly override your API implementation.
 *
 * @param config - The descriptor of the API to reference.
 * @returns An API reference, or a builder with a `.with()` method if called without arguments.
 * @public
 */
export function createApiRef<T>(config: ApiRefConfig): ApiRef<T>;
/** @public */
export function createApiRef<T>(): {
  with(config: ApiRefConfig): ApiRef<T>;
};
export function createApiRef<T>(
  config?: ApiRefConfig,
): ApiRef<T> | { with(config: ApiRefConfig): ApiRef<T> } {
  if (config) {
    return createApiRefInternal<T>(config.id);
  }
  return {
    with(c: ApiRefConfig): ApiRef<T> {
      return createApiRefInternal<T>(c.id);
    },
  };
}
