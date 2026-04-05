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
  const serializeFn = jest.fn().mockImplementation(() => ({
    backstageConfigSchemaVersion: 1,
    schemas: options.schemas.map(s => ({
      value: s.value,
      path: `node_modules/${s.packageName}`,
      packageName: s.packageName,
    })),
  }));

  return {
    schema: { serialize: serializeFn },
    serializeFn,
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
    const { serializeFn } = makeSchema({
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
    });
    mockLoadCliConfig.mockResolvedValue({ schema: { serialize: serializeFn } });

    const output = await runSchemaCommand(['--merge', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(serializeFn).toHaveBeenCalledWith(undefined);
    expect(schema.properties.host.visibility).toBe('frontend');
    expect(schema.properties.secret.deepVisibility).toBe('secret');
    expect(schema.properties.old.deprecated).toBe('use new instead');
  });

  it('should pass draft-07 schema option to serialize when using --strict', async () => {
    const { serializeFn } = makeSchema({
      schemas: [
        {
          packageName: 'a',
          value: {
            type: 'object',
            properties: {
              host: { type: 'string', visibility: 'frontend' },
            },
          },
        },
      ],
    });
    mockLoadCliConfig.mockResolvedValue({ schema: { serialize: serializeFn } });

    await runSchemaCommand(['--strict', '--format', 'json']);

    expect(serializeFn).toHaveBeenCalledWith({
      schema: 'http://json-schema.org/draft-07/schema#',
    });
  });

  it('should pass draft-07 schema option to serialize when using --strict --merge', async () => {
    const { serializeFn } = makeSchema({
      schemas: [
        {
          packageName: 'a',
          value: {
            type: 'object',
            properties: {
              host: { type: 'string', visibility: 'frontend' },
            },
          },
        },
      ],
    });
    mockLoadCliConfig.mockResolvedValue({ schema: { serialize: serializeFn } });

    const output = await runSchemaCommand([
      '--strict',
      '--merge',
      '--format',
      'json',
    ]);
    const schema = JSON.parse(output);

    expect(serializeFn).toHaveBeenCalledWith({
      schema: 'http://json-schema.org/draft-07/schema#',
    });
    expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');
    expect(schema.title).toBe('Application Configuration Schema');
  });

  it('should merge multiple package schemas with --merge', async () => {
    const { serializeFn } = makeSchema({
      schemas: [
        {
          packageName: 'a',
          value: {
            type: 'object',
            properties: {
              app: {
                type: 'object',
                properties: {
                  baseUrl: { type: 'string' },
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
    });
    mockLoadCliConfig.mockResolvedValue({ schema: { serialize: serializeFn } });

    const output = await runSchemaCommand(['--merge', '--format', 'json']);
    const schema = JSON.parse(output);

    expect(schema.properties.app.properties.baseUrl.type).toBe('string');
    expect(schema.properties.backend.properties.port.type).toBe('number');
  });

  it('should output unmerged envelope when no flags are given', async () => {
    const { serializeFn } = makeSchema({
      schemas: [
        {
          packageName: 'a',
          value: {
            type: 'object',
            properties: { host: { type: 'string' } },
          },
        },
      ],
    });
    mockLoadCliConfig.mockResolvedValue({ schema: { serialize: serializeFn } });

    const output = await runSchemaCommand(['--format', 'json']);
    const result = JSON.parse(output);

    expect(serializeFn).toHaveBeenCalledWith(undefined);
    expect(result.backstageConfigSchemaVersion).toBe(1);
    expect(result.schemas).toHaveLength(1);
  });
});
