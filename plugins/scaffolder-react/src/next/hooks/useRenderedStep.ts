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
import { ScaffolderApi } from '@backstage/plugin-scaffolder-common';
import { JsonObject, JsonValue } from '@backstage/types';
import { useEffect, useRef, useState } from 'react';

const DEBOUNCE_MS = 300;

/**
 * Extracts default values from a JSON Schema's top-level properties.
 */
export function extractDefaultsFromSchema(
  schema: JsonObject,
): Record<string, JsonValue> {
  const defaults: Record<string, JsonValue> = {};
  const properties = schema.properties as
    | Record<string, JsonObject>
    | undefined;

  if (properties) {
    for (const [key, prop] of Object.entries(properties)) {
      if (prop && typeof prop === 'object' && 'default' in prop) {
        defaults[key] = prop.default as JsonValue;
      }
    }
  }
  return defaults;
}

/**
 * Returns true if the schema contains any `${{` template expressions.
 */
export function schemaHasTemplateExpressions(schema: JsonObject): boolean {
  return JSON.stringify(schema).includes('${{');
}

/**
 * Removes default values that contain template expressions from a schema
 * so RJSF doesn't populate literal `$\{{` strings as field values.
 */
export function stripTemplateDefaults(schema: JsonObject): JsonObject {
  const properties = schema.properties as
    | Record<string, JsonObject>
    | undefined;
  if (!properties) return schema;

  const stripped: Record<string, JsonObject> = {};
  for (const [key, prop] of Object.entries(properties)) {
    if (
      prop &&
      typeof prop === 'object' &&
      typeof prop.default === 'string' &&
      (prop.default as string).includes('${{')
    ) {
      const { default: _default, ...rest } = prop;
      stripped[key] = rest as JsonObject;
    } else {
      stripped[key] = prop;
    }
  }

  return { ...schema, properties: stripped };
}

/**
 * Hook that debounces calls to the scaffolder backend to render a step's
 * schema with nunjucks template expressions resolved against current form data.
 *
 * Returns undefined when rendering is not active or not yet complete.
 *
 * @alpha
 */
export function useRenderedStep(options: {
  scaffolderApi?: ScaffolderApi;
  templateRef?: string;
  stepIndex: number;
  formData: Record<string, JsonValue>;
  rawSchema?: JsonObject;
}): {
  renderedSchema: JsonObject | undefined;
  renderedDefaults: Record<string, JsonValue>;
} {
  const { scaffolderApi, templateRef, stepIndex, formData, rawSchema } =
    options;
  const [renderedSchema, setRenderedSchema] = useState<
    JsonObject | undefined
  >();
  const [renderedDefaults, setRenderedDefaults] = useState<
    Record<string, JsonValue>
  >({});

  const hasExpressions = rawSchema
    ? schemaHasTemplateExpressions(rawSchema)
    : false;
  const enabled =
    hasExpressions && !!templateRef && !!scaffolderApi?.renderStep;

  const formDataJson = JSON.stringify(formData);
  const abortRef = useRef<AbortController>();

  useEffect(() => {
    if (!enabled) {
      setRenderedSchema(undefined);
      setRenderedDefaults({});
      return undefined;
    }

    abortRef.current?.abort();
    const abortController = new AbortController();
    abortRef.current = abortController;

    const timeoutId = setTimeout(async () => {
      try {
        const result = await scaffolderApi!.renderStep({
          templateRef: templateRef!,
          stepIndex,
          formData: JSON.parse(formDataJson),
        });

        if (!abortController.signal.aborted) {
          const schema = result.schema as JsonObject;
          setRenderedSchema(schema);
          setRenderedDefaults(extractDefaultsFromSchema(schema));
        }
      } catch {
        // Fall back to raw schema silently on any error
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timeoutId);
      abortController.abort();
    };
    // formDataJson is used instead of formData for stable comparisons
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, scaffolderApi, templateRef, stepIndex, formDataJson]);

  return { renderedSchema, renderedDefaults };
}
