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

import { QueryEntitiesResponse } from '@backstage/catalog-client';
import { Entity } from '@backstage/catalog-model';
import { useApi } from '@backstage/core-plugin-api';
import {
  createVersionedContext,
  createVersionedValueMap,
  useVersionedContext,
} from '@backstage/version-bridge';
import { compact, isEqual } from 'lodash';
import qs from 'qs';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { catalogApiRef } from '../api';
import {
  EntityErrorFilter,
  EntityKindFilter,
  EntityLifecycleFilter,
  EntityNamespaceFilter,
  EntityOrderFilter,
  EntityOrphanFilter,
  EntityOwnerFilter,
  EntityTagFilter,
  EntityTextFilter,
  EntityTypeFilter,
  EntityUserFilter,
  UserListFilter,
} from '../filters';
import { EntityFilter, EntityListPagination } from '../types';
import {
  reduceBackendCatalogFilters,
  reduceCatalogFilters,
  reduceEntityFilters,
} from '../utils/filters';

/** @public */
export type DefaultEntityFilters = {
  kind?: EntityKindFilter;
  type?: EntityTypeFilter;
  user?: UserListFilter | EntityUserFilter;
  owners?: EntityOwnerFilter;
  lifecycles?: EntityLifecycleFilter;
  tags?: EntityTagFilter;
  text?: EntityTextFilter;
  orphan?: EntityOrphanFilter;
  error?: EntityErrorFilter;
  namespace?: EntityNamespaceFilter;
  order?: EntityOrderFilter;
};

/** @public */
export type PaginationMode = 'cursor' | 'offset' | 'none';

/** @public */
export type EntityListContextProps<
  EntityFilters extends DefaultEntityFilters = DefaultEntityFilters,
> = {
  /**
   * The currently registered filters, adhering to the shape of DefaultEntityFilters or an extension
   * of that default (to add custom filter types).
   */
  filters: EntityFilters;

  /**
   * The resolved list of catalog entities, after all filters are applied.
   */
  entities: Entity[];

  /**
   * The resolved list of catalog entities, after _only catalog-backend_ filters are applied.
   */
  backendEntities: Entity[];

  /**
   * Update one or more of the registered filters. Optional filters can be set to `undefined` to
   * reset the filter.
   */
  updateFilters: (
    filters:
      | Partial<EntityFilters>
      | ((prevFilters: EntityFilters) => Partial<EntityFilters>),
  ) => void;

  /**
   * Filter values from query parameters.
   */
  queryParameters: Partial<Record<keyof EntityFilters, string | string[]>>;

  loading: boolean;
  error?: Error;

  pageInfo?: {
    next?: () => void;
    prev?: () => void;
  };
  totalItems?: number;
  limit: number;
  offset?: number;
  setLimit: (limit: number) => void;
  setOffset?: (offset: number) => void;
  paginationMode: PaginationMode;
};

// This context has support for multiple concurrent versions of this package.
// It is currently used in parallel with the old context in order to provide
// a smooth transition, but will eventually be the only context we use.
export const NewEntityListContext = createVersionedContext<{
  1: EntityListContextProps<any>;
}>('entity-list-context');

/**
 * Creates new context for entity listing and filtering.
 */
export const OldEntityListContext = createContext<
  EntityListContextProps<any> | undefined
>(undefined);

type OutputState<EntityFilters extends DefaultEntityFilters> = {
  appliedFilters: EntityFilters;
  entities: Entity[];
  backendEntities: Entity[];
  pageInfo?: QueryEntitiesResponse['pageInfo'];
  totalItems?: number;
  loading: boolean;
  error?: Error;
};

// Tracks backend fetch results so that frontend-only filter changes can
// reuse the previous response instead of hitting the API again.
type BackendCache = {
  backendFilter: any;
  cursor?: string;
  backendEntities: Entity[];
  pageInfo?: QueryEntitiesResponse['pageInfo'];
  totalItems?: number;
  limit?: number;
  offset?: number;
};

/**
 * @public
 */
export type EntityListProviderProps = PropsWithChildren<{
  pagination?: EntityListPagination;
}>;

/**
 * Provides entities and filters for a catalog listing.
 * @public
 */
export const EntityListProvider = <EntityFilters extends DefaultEntityFilters>(
  props: EntityListProviderProps,
) => {
  const catalogApi = useApi(catalogApiRef);
  const [requestedFilters, setRequestedFilters] = useState<EntityFilters>(
    {} as EntityFilters,
  );

  // We use react-router's useLocation hook so updates from external sources
  // trigger an update to the queryParameters. Updates from this component use
  // replaceState below and won't trigger a useLocation change; this would
  // instead come from an external source, such as a manual update of the URL
  // or two catalog sidebar links with different catalog filters.
  const location = useLocation();

  const paginationMode: PaginationMode = (() => {
    if (props.pagination === true) return 'cursor';
    if (typeof props.pagination === 'object')
      return props.pagination.mode ?? 'cursor';
    return 'none';
  })();

  const paginationLimit =
    typeof props.pagination === 'object' ? props.pagination.limit ?? 20 : 20;

  const {
    queryParameters,
    cursor: initialCursor,
    offset: initialOffset,
    limit: initialLimit,
  } = useMemo(() => {
    const parsed = qs.parse(location.search, {
      ignoreQueryPrefix: true,
      arrayLimit: 10000,
    });

    let limit = paginationLimit;
    if (typeof parsed.limit === 'string') {
      const queryLimit = Number.parseInt(parsed.limit, 10);
      if (!isNaN(queryLimit)) {
        limit = queryLimit;
      }
    }

    const offset =
      typeof parsed.offset === 'string' && paginationMode === 'offset'
        ? Number.parseInt(parsed.offset, 10)
        : undefined;

    return {
      queryParameters: (parsed.filters ?? {}) as Record<
        string,
        string | string[]
      >,
      cursor:
        typeof parsed.cursor === 'string' && paginationMode === 'cursor'
          ? parsed.cursor
          : undefined,
      offset:
        paginationMode === 'offset' && offset && !isNaN(offset)
          ? offset
          : undefined,
      limit,
    };
  }, [paginationMode, location.search, paginationLimit]);

  const [cursor, setCursor] = useState(initialCursor);
  const [offset, setOffset] = useState<number | undefined>(initialOffset);
  const [limit, setLimit] = useState(initialLimit);

  const [output, setOutput] = useState<OutputState<EntityFilters>>({
    appliedFilters: {} as EntityFilters,
    entities: [],
    backendEntities: [],
    loading: true,
  });

  const cacheRef = useRef<BackendCache>({
    backendFilter: undefined,
    backendEntities: [],
  });

  // Single debounced effect that handles all filter/pagination changes.
  // The 10ms debounce batches rapid filter updates (especially on page load
  // when several pickers call updateFilters in quick succession).
  useEffect(() => {
    let cancelled = false;

    const timeout = setTimeout(async () => {
      try {
        const kindValue =
          requestedFilters.kind?.value?.toLocaleLowerCase('en-US');
        const adjustedFilters =
          kindValue === 'user' || kindValue === 'group'
            ? { ...requestedFilters, owners: undefined }
            : requestedFilters;
        const compacted = compact(Object.values(adjustedFilters));
        const entityFilter = reduceEntityFilters(compacted);
        const cache = cacheRef.current;

        if (paginationMode !== 'none') {
          if (cursor && cursor !== cache.cursor) {
            // Cursor-based page navigation
            if (!cancelled) setOutput(prev => ({ ...prev, loading: true }));
            const response = await catalogApi.queryEntities({
              cursor,
              limit,
            });
            if (cancelled) return;
            cache.cursor = cursor;
            cache.backendEntities = response.items;
            cache.pageInfo = response.pageInfo;
            cache.totalItems = response.totalItems;
            cache.limit = limit;
            cache.offset = offset;
          } else if (!cursor) {
            // Filter or pagination params changed - fetch if backend filter
            // or pagination changed, otherwise reuse cached results.
            const backendFilter = reduceCatalogFilters(compacted);
            const needsFetch =
              !isEqual(cache.backendFilter, backendFilter) ||
              (paginationMode === 'offset' &&
                (cache.limit !== limit || cache.offset !== offset));

            if (needsFetch) {
              if (!cancelled) setOutput(prev => ({ ...prev, loading: true }));
              const response = await catalogApi.queryEntities({
                ...backendFilter,
                limit,
                offset,
              });
              if (cancelled) return;
              cache.backendFilter = backendFilter;
              cache.backendEntities = response.items;
              cache.pageInfo = response.pageInfo;
              cache.totalItems = response.totalItems;
              cache.limit = limit;
              cache.offset = offset;
            }
          }
        } else {
          // No pagination - use getEntities
          const backendFilter = reduceBackendCatalogFilters(compacted);
          const { orderFields } = reduceCatalogFilters(compacted);

          if (!isEqual(cache.backendFilter, backendFilter)) {
            if (!cancelled) setOutput(prev => ({ ...prev, loading: true }));
            const response = await catalogApi.getEntities({
              filter: backendFilter,
              order: orderFields,
            });
            if (cancelled) return;
            cache.backendFilter = backendFilter;
            cache.backendEntities = response.items;
          }
        }

        // Apply frontend filters to the (possibly cached) backend results
        const entities = cache.backendEntities.filter(entityFilter);

        if (!cancelled) {
          const newOutput: OutputState<EntityFilters> = {
            appliedFilters: requestedFilters,
            backendEntities: cache.backendEntities,
            entities,
            pageInfo: cache.pageInfo,
            totalItems:
              paginationMode === 'none' ? entities.length : cache.totalItems,
            loading: false,
          };
          setOutput(newOutput);
          syncUrl(newOutput.appliedFilters);
        }
      } catch (err) {
        if (!cancelled) {
          setOutput(prev => ({
            ...prev,
            loading: false,
            error: err as Error,
          }));
        }
      }
    }, 10);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };

    // Sync filter state to the URL via history.replaceState (avoids extra
    // react-router rerenders). We do this inline rather than in a separate
    // effect so that URL updates only happen after a successful fetch, and
    // never for the empty initial state.
    function syncUrl(appliedFilters: EntityFilters) {
      const queryParams = Object.keys(appliedFilters).reduce((params, key) => {
        const filter = appliedFilters[key as keyof EntityFilters] as
          | EntityFilter
          | undefined;
        if (filter?.toQueryValue) {
          params[key] = filter.toQueryValue();
        }
        return params;
      }, {} as Record<string, string | string[]>);

      const oldParams = qs.parse(location.search, {
        ignoreQueryPrefix: true,
        arrayLimit: 10000,
      });
      const newParams = qs.stringify(
        {
          ...oldParams,
          filters: queryParams,
          ...(paginationMode === 'none' ? {} : { cursor, limit, offset }),
        },
        { addQueryPrefix: true, arrayFormat: 'repeat' },
      );
      const newUrl = `${window.location.pathname}${newParams}`;
      window.history?.replaceState(null, document.title, newUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedFilters, cursor, limit, offset]);

  const updateFilters = useCallback(
    (
      update:
        | Partial<EntityFilter>
        | ((prevFilters: EntityFilters) => Partial<EntityFilters>),
    ) => {
      if (paginationMode === 'cursor') {
        setCursor(undefined);
      } else if (paginationMode === 'offset') {
        setOffset(0);
      }
      setRequestedFilters(prevFilters => {
        const newFilters =
          typeof update === 'function' ? update(prevFilters) : update;
        return { ...prevFilters, ...newFilters };
      });
    },
    [paginationMode],
  );

  const pageInfo = useMemo(() => {
    if (paginationMode !== 'cursor') {
      return undefined;
    }

    const prevCursor = output.pageInfo?.prevCursor;
    const nextCursor = output.pageInfo?.nextCursor;
    return {
      prev: prevCursor ? () => setCursor(prevCursor) : undefined,
      next: nextCursor ? () => setCursor(nextCursor) : undefined,
    };
  }, [paginationMode, output.pageInfo]);

  const value = useMemo(
    () => ({
      filters: output.appliedFilters,
      entities: output.entities,
      backendEntities: output.backendEntities,
      updateFilters,
      queryParameters,
      loading: output.loading,
      error: output.error,
      pageInfo,
      totalItems: output.totalItems,
      limit,
      offset,
      setLimit,
      setOffset,
      paginationMode,
    }),
    [
      output,
      updateFilters,
      queryParameters,
      pageInfo,
      limit,
      offset,
      paginationMode,
      setLimit,
      setOffset,
    ],
  );

  return (
    <OldEntityListContext.Provider value={value}>
      <NewEntityListContext.Provider
        value={createVersionedValueMap({ 1: value })}
      >
        {props.children}
      </NewEntityListContext.Provider>
    </OldEntityListContext.Provider>
  );
};

/**
 * Hook for interacting with the entity list context provided by the {@link EntityListProvider}.
 * @public
 */
export function useEntityList<
  EntityFilters extends DefaultEntityFilters = DefaultEntityFilters,
>(): EntityListContextProps<EntityFilters> {
  const versionedHolder = useVersionedContext<{
    1: EntityListContextProps<any>;
  }>('entity-list-context');
  const oldContext = useContext(OldEntityListContext);

  if (versionedHolder) {
    const value = versionedHolder.atVersion(1);
    if (!value) {
      throw new Error('EntityListContext v1 not available');
    }
    return value;
  }

  if (oldContext) {
    return oldContext;
  }

  throw new Error('useEntityList must be used within EntityListProvider');
}
