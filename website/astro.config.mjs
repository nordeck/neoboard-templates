// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// @ts-check
import { defineConfig } from 'astro/config';

// Defaults build the standalone gallery for GitHub Pages (Phase 1).
// neoboard.io builds it embedded under its own domain with
//   GALLERY_SITE=https://neoboard.io GALLERY_BASE=/ GALLERY_THEME=light
// (see README, "Embedding in neoboard.io").
const site = process.env.GALLERY_SITE || 'https://nordeck.github.io';
const base = process.env.GALLERY_BASE || '/neoboard-templates';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Optimized images are cached here between builds. Kept outside node_modules
  // because `npm ci` deletes that folder; CI restores it with actions/cache.
  cacheDir: './.cache/astro',
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
