// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nordeck.github.io',
  base: '/neoboard-templates',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: {
    server: {
      // Content lives outside the Astro project root (../content).
      // Allow the dev server to read preview images from there.
      fs: { allow: ['..'] },
    },
  },
});
