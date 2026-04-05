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

const mockLoadCliConfig = jest.fn();

jest.mock('../lib/config', () => ({
  loadCliConfig: (...args: any[]) => mockLoadCliConfig(...args),
}));

function makeSchema(options: {
  schemas: { value: object; packageName: string }[];
}) {
  return {
    schema: {
      serialize: () => ({
        backstageConfigSchemaVersion: 1,
        schemas: options.schemas.map(s => ({
          value: s.value,
          path: `node_modules/${s.packageName}`,
          packageName: s.packageName,
        })),
      }),
    },
  };
}

async function runSchemaCommand(args: string[]): Promise<string> {
  const chunks: string[] = [];
  const origWrite = process.stdout.write;
  process.stdout.write = ((chunk: any) => {
    chunks.push(String(chunk));
    return true;
  }) as any;

  try {
    const command = require('./schema').default;
    await command({
      args,
      info: { name: 'config:schema', usage: 'backstage-cli config:schema' },
    });
  } finally {
    process.stdout.write = origWrite;
  }
  return chunks.join('');
}

describe('config:schema', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should output merged schema with custom keywords when using --merge', async () => {
    mockLoadCliConfig.mockResolvedValue(
      makeSchema({
        schemas: [
          {
            packageName: 'a',
            value: {
              type: 'object',
              properties: {
                host: { type: 'string', visibility: 'frontend' },
                secret: { type: 'string', deepVisibility: 'secret' },
                old: { type: 'string', deprecated: 'use new instead' },
              },
            },
          },
        ],
      }),
    );

    const output = await runSchemaCommand(['--merge', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(schema.properties.host.visibility).toBe('frontend');
    expect(schema.properties.secret.deepVisibility).toBe('secret');
    expect(schema.properties.old.deprecated).toBe('use new instead');
    expect(schema.$schema).not.toBe('http://json-schema.org/draft-07/schema#');
  });

  it('should transform custom keywords to x- prefixed versions when using --strict', async () => {
    mockLoadCliConfig.mockResolvedValue(
      makeSchema({
        schemas: [
          {
            packageName: 'a',
            value: {
              type: 'object',
              properties: {
                host: { type: 'string', visibility: 'frontend' },
                secret: { type: 'string', deepVisibility: 'secret' },
                old: { type: 'string', deprecated: 'use new instead' },
              },
            },
          },
        ],
      }),
    );

    const output = await runSchemaCommand(['--strict', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');
    expect(schema.title).toBe('Application Configuration Schema');

    expect(schema.properties.host.visibility).toBeUndefined();
    expect(schema.properties.host['x-visibility']).toBe('frontend');

    expect(schema.properties.secret.deepVisibility).toBeUndefined();
    expect(schema.properties.secret['x-deepVisibility']).toBe('secret');

    expect(schema.properties.old.deprecated).toBe(true);
    expect(schema.properties.old['x-deprecated']).toBe('use new instead');
  });

  it('should handle nested schemas with --strict', async () => {
    mockLoadCliConfig.mockResolvedValue(
      makeSchema({
        schemas: [
          {
            packageName: 'a',
            value: {
              type: 'object',
              properties: {
                app: {
                  type: 'object',
                  properties: {
                    baseUrl: { type: 'string', visibility: 'frontend' },
                    nested: {
                      type: 'object',
                      deepVisibility: 'secret',
                      properties: {
                        key: { type: 'string', visibility: 'secret' },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      }),
    );

    const output = await runSchemaCommand(['--strict', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(schema.properties.app.properties.baseUrl['x-visibility']).toBe(
      'frontend',
    );
    expect(schema.properties.app.properties.baseUrl.visibility).toBeUndefined();

    expect(schema.properties.app.properties.nested['x-deepVisibility']).toBe(
      'secret',
    );
    expect(
      schema.properties.app.properties.nested.deepVisibility,
    ).toBeUndefined();

    expect(
      schema.properties.app.properties.nested.properties.key['x-visibility'],
    ).toBe('secret');
  });

  it('should merge multiple package schemas with --strict', async () => {
    mockLoadCliConfig.mockResolvedValue(
      makeSchema({
        schemas: [
          {
            packageName: 'a',
            value: {
              type: 'object',
              properties: {
                app: {
                  type: 'object',
                  properties: {
                    baseUrl: { type: 'string', visibility: 'frontend' },
                  },
                },
              },
            },
          },
          {
            packageName: 'b',
            value: {
              type: 'object',
              properties: {
                backend: {
                  type: 'object',
                  properties: {
                    port: { type: 'number' },
                  },
                },
              },
            },
          },
        ],
      }),
    );

    const output = await runSchemaCommand(['--strict', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(schema.properties.app.properties.baseUrl['x-visibility']).toBe(
      'frontend',
    );
    expect(schema.properties.backend.properties.port.type).toBe('number');
  });
});
