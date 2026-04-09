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

import os from 'node:os';
import { randomBytes } from 'node:crypto';
import { resolve as resolvePath } from 'node:path';
import fs from 'fs-extra';
import { getPortPromise } from 'portfinder';
import { ForwardedError } from '@backstage/errors';
import knexFactory, { Knex } from 'knex';
import { Engine, LARGER_POOL_CONFIG, TestDatabaseProperties } from './types';

const TEMP_DIR_PREFIX = 'backstage-test-db-';

export class EmbeddedPostgresEngine implements Engine {
  static async create(
    _properties: TestDatabaseProperties,
  ): Promise<EmbeddedPostgresEngine> {
    const { default: EmbeddedPostgres } = await import(
      'embedded-postgres'
    ).catch(error => {
      throw new ForwardedError(
        `Failed to load 'embedded-postgres' which is required for the ` +
          `EMBEDDED_POSTGRES test database. It must be installed as an ` +
          `explicit dependency in your project`,
        error,
      );
    });

    const host = 'localhost';
    const user = 'postgres';
    const password = 'password';
    const port = await getPortPromise();
    const tmpDir = await fs.mkdtemp(resolvePath(os.tmpdir(), TEMP_DIR_PREFIX));

    const pg = new EmbeddedPostgres({
      databaseDir: tmpDir,
      user,
      password,
      port,
      persistent: false,
      // Running as root requires a separate postgres user to be created
      ...(process.getuid?.() === 0 ? { createPostgresUser: true } : undefined),
      onError(messageOrError: unknown) {
        console.error(`[embedded-postgres]`, messageOrError);
      },
      onLog() {},
    });

    try {
      await pg.initialise();
      await pg.start();
    } catch (error) {
      await pg.stop().catch(() => {});
      await fs.remove(tmpDir).catch(() => {});
      throw error;
    }

    const connection: Knex.PgConnectionConfig = { host, user, password, port };

    return new EmbeddedPostgresEngine(connection, async () => {
      await pg.stop();
      await fs.remove(tmpDir);
    });
  }

  readonly #connection: Knex.PgConnectionConfig;
  readonly #knexInstances: Knex[];
  readonly #databaseNames: string[];
  readonly #stop: () => Promise<void>;

  constructor(connection: Knex.PgConnectionConfig, stop: () => Promise<void>) {
    this.#connection = connection;
    this.#knexInstances = [];
    this.#databaseNames = [];
    this.#stop = stop;
  }

  async createDatabaseInstance(): Promise<Knex> {
    const adminConnection = this.#connectAdmin();
    try {
      const databaseName = `db${randomBytes(16).toString('hex')}`;

      await adminConnection.raw('CREATE DATABASE ??', [databaseName]);
      this.#databaseNames.push(databaseName);

      const knexInstance = knexFactory({
        client: 'pg',
        connection: {
          ...this.#connection,
          database: databaseName,
        },
        ...LARGER_POOL_CONFIG,
      });
      this.#knexInstances.push(knexInstance);

      return knexInstance;
    } finally {
      await adminConnection.destroy();
    }
  }

  async shutdown(): Promise<void> {
    for (const instance of this.#knexInstances) {
      await instance.destroy();
    }

    const adminConnection = this.#connectAdmin();
    try {
      for (const databaseName of this.#databaseNames) {
        await adminConnection.raw('DROP DATABASE ??', [databaseName]);
      }
    } finally {
      await adminConnection.destroy();
    }

    await this.#stop();
  }

  #connectAdmin(): Knex {
    return knexFactory({
      client: 'pg',
      connection: {
        ...this.#connection,
        database: 'postgres',
      },
      pool: {
        acquireTimeoutMillis: 10000,
      },
    });
  }
}
