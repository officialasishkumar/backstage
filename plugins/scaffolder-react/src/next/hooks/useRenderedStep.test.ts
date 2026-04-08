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
import { renderHook, act, waitFor } from '@testing-library/react';
import { JsonObject } from '@backstage/types';
import {
  useRenderedStep,
  extractDefaultsFromSchema,
  schemaHasTemplateExpressions,
  stripTemplateDefaults,
} from './useRenderedStep';
import { ScaffolderApi } from '@backstage/plugin-scaffolder-common';

describe('schemaHasTemplateExpressions', () => {
  it('returns true when schema contains ${{ expressions', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string', default: '${{ parameters.repoUrl }}' },
      },
    };
    expect(schemaHasTemplateExpressions(schema)).toBe(true);
  });

  it('returns false when schema has no expressions', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string', default: 'plain value' },
      },
    };
    expect(schemaHasTemplateExpressions(schema)).toBe(false);
  });

  it('detects expressions in nested properties', () => {
    const schema: JsonObject = {
      properties: {
        config: {
          type: 'object',
          properties: {
            url: { type: 'string', default: '${{ parameters.host }}/api' },
          },
        },
      },
    };
    expect(schemaHasTemplateExpressions(schema)).toBe(true);
  });
});

describe('extractDefaultsFromSchema', () => {
  it('extracts default values from top-level properties', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string', default: 'my-app' },
        count: { type: 'number', default: 5 },
        description: { type: 'string' },
      },
    };

    expect(extractDefaultsFromSchema(schema)).toEqual({
      name: 'my-app',
      count: 5,
    });
  });

  it('returns empty object when no properties have defaults', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string' },
      },
    };

    expect(extractDefaultsFromSchema(schema)).toEqual({});
  });

  it('returns empty object when schema has no properties', () => {
    const schema: JsonObject = { type: 'object' };
    expect(extractDefaultsFromSchema(schema)).toEqual({});
  });
});

describe('stripTemplateDefaults', () => {
  it('removes defaults containing template expressions', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string', default: '${{ parameters.componentName }}' },
        description: { type: 'string', default: 'A static default' },
        count: { type: 'number' },
      },
    };

    const result = stripTemplateDefaults(schema);

    expect(result.properties).toEqual({
      name: { type: 'string' },
      description: { type: 'string', default: 'A static default' },
      count: { type: 'number' },
    });
  });

  it('returns schema unchanged when no template defaults exist', () => {
    const schema: JsonObject = {
      properties: {
        name: { type: 'string', default: 'plain' },
      },
    };

    expect(stripTemplateDefaults(schema)).toEqual(schema);
  });

  it('returns schema unchanged when no properties exist', () => {
    const schema: JsonObject = { type: 'object' };
    expect(stripTemplateDefaults(schema)).toEqual(schema);
  });
});

describe('useRenderedStep', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const mockScaffolderApi = {
    renderStep: jest.fn(),
  } as unknown as jest.Mocked<ScaffolderApi>;

  it('returns undefined when templateRef is not provided', () => {
    const { result } = renderHook(() =>
      useRenderedStep({
        stepIndex: 0,
        formData: {},
        rawSchema: {
          properties: {
            name: { type: 'string', default: '${{ parameters.foo }}' },
          },
        },
      }),
    );

    expect(result.current.renderedSchema).toBeUndefined();
    expect(result.current.renderedDefaults).toEqual({});
  });

  it('returns undefined when schema has no template expressions', () => {
    const { result } = renderHook(() =>
      useRenderedStep({
        scaffolderApi: mockScaffolderApi,
        templateRef: 'template:default/my-template',
        stepIndex: 0,
        formData: {},
        rawSchema: {
          properties: { name: { type: 'string', default: 'plain' } },
        },
      }),
    );

    expect(result.current.renderedSchema).toBeUndefined();
    expect(mockScaffolderApi.renderStep).not.toHaveBeenCalled();
  });

  it('calls renderStep after debounce when schema has expressions', async () => {
    const renderedSchema = {
      properties: { name: { type: 'string', default: 'resolved-value' } },
    };

    (mockScaffolderApi.renderStep as jest.Mock).mockResolvedValueOnce({
      title: 'Step',
      schema: renderedSchema,
    });

    const { result } = renderHook(() =>
      useRenderedStep({
        scaffolderApi: mockScaffolderApi,
        templateRef: 'template:default/my-template',
        stepIndex: 0,
        formData: { foo: 'bar' },
        rawSchema: {
          properties: {
            name: { type: 'string', default: '${{ parameters.foo }}' },
          },
        },
      }),
    );

    expect(mockScaffolderApi.renderStep).not.toHaveBeenCalled();

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(result.current.renderedSchema).toEqual(renderedSchema);
      expect(result.current.renderedDefaults).toEqual({
        name: 'resolved-value',
      });
    });

    expect(mockScaffolderApi.renderStep).toHaveBeenCalledWith({
      templateRef: 'template:default/my-template',
      stepIndex: 0,
      formData: { foo: 'bar' },
    });
  });

  it('falls back silently when renderStep throws', async () => {
    (mockScaffolderApi.renderStep as jest.Mock).mockRejectedValueOnce(
      new Error('Network error'),
    );

    const { result } = renderHook(() =>
      useRenderedStep({
        scaffolderApi: mockScaffolderApi,
        templateRef: 'template:default/my-template',
        stepIndex: 0,
        formData: { foo: 'bar' },
        rawSchema: {
          properties: {
            name: { type: 'string', default: '${{ parameters.foo }}' },
          },
        },
      }),
    );

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.renderedSchema).toBeUndefined();
    expect(result.current.renderedDefaults).toEqual({});
  });
});
