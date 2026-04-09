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

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  it('keeps external href values unchanged', () => {
    render(
      <MemoryRouter
        initialEntries={['/catalog/default/component/example']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route
            path="/catalog/:namespace/component/:name"
            element={
              <ButtonLink href="https://ui.backstage.io">
                External docs
              </ButtonLink>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'External docs' });
    expect(link.getAttribute('href')).toBe('https://ui.backstage.io');
  });

  it('still resolves relative internal href values against the current route', () => {
    render(
      <MemoryRouter
        initialEntries={['/catalog/default/component/example/details']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/catalog/:namespace/component/:name" element={<Outlet />}>
            <Route
              path="details"
              element={<ButtonLink href="../docs">Docs</ButtonLink>}
            />
            <Route path="docs" element={<div>Docs page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Docs' });
    expect(link.getAttribute('href')).toBe(
      '/catalog/default/component/example/docs',
    );
  });
});
