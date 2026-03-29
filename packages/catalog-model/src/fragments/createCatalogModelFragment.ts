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

import {
  CatalogModelFragmentBuilder,
  createCatalogModelFragmentBuilder,
} from './createCatalogModelFragmentBuilder';
import { CatalogModelFragment } from './types';

/**
 * Creates a catalog model fragment using a builder pattern.
 *
 * @alpha
 * @remarks
 *
 * Plugins can create such catalog model fragments to declare various
 * contributions to the overall catalog model, and registering them with the
 * catalog which then forms a complete picture out of them.
 */
export function createCatalogModelFragment(
  /**
   * The name of the model fragment.
   *
   * @remarks
   *
   * This is a human-readable identifier that may be used in error reporting and
   * similar.
   */
  modelName: string,
  model: (model: CatalogModelFragmentBuilder) => void,
): CatalogModelFragment {
  const builder = createCatalogModelFragmentBuilder({ modelName });
  model(builder);
  return builder.build();
}
