/*
 * Copyright 2025 The Backstage Authors
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

import { ExtensionDefinition } from './createExtension';
import { ResolveExtensionId } from './resolveExtensionDefinition';

// Previously this type performed a type-level quicksort of extensions to
// stabilize the order in API reports. That sort (union → array → quicksort →
// map) caused "excessively deep" errors in TypeScript 6 for plugins with many
// extensions. Since the sorting was purely cosmetic (see comment below), we now
// build the map directly from the union which is both simpler and avoids the
// depth issue.
//
// Original note: This was added to stabilize API reports. Before this was added
// the extensions listed in API reports would be reordered fairly arbitrarily on
// changes in unrelated packages, which made for a confusing contribution
// experience. If the ordering becomes a problem again consider a build-time
// sort in the API report tooling rather than a type-level sort.
/** @ignore */
export type MakeSortedExtensionsMap<
  UExtensions extends ExtensionDefinition,
  TId extends string,
> = {
  [K in keyof ExtensionsUnionToMap<UExtensions, TId>]: ExtensionsUnionToMap<
    UExtensions,
    TId
  >[K];
};

type ExtensionsUnionToMap<
  UExtensions extends ExtensionDefinition,
  TId extends string,
> = { [K in UExtensions as ResolveExtensionId<K, TId>]: K };
