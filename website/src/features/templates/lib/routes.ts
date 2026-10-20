// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// URL scheme of the gallery. Phase 1: /neoboard-templates/<lang>/<base>/…; Phase 2 drops the base path.
import type { Lang } from './templates';

const SEGMENTS: Record<Lang, { base: string; category: string; submit: string }> = {
  de: { base: 'vorlagen', category: 'kategorie', submit: 'einreichen' },
  en: { base: 'templates', category: 'category', submit: 'submit' },
};

/** Site base path with exactly one trailing slash, e.g. "/neoboard-templates/". */
export const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export type Route =
  | { page: 'gallery' }
  | { page: 'detail'; slug: string }
  | { page: 'category'; id: string }
  | { page: 'submit' };

export function routeHref(lang: Lang, route: Route): string {
  const s = SEGMENTS[lang];
  const root = `${BASE}${lang}/${s.base}/`;
  switch (route.page) {
    case 'gallery':
      return root;
    case 'detail':
      return `${root}${route.slug}/`;
    case 'category':
      return `${root}${s.category}/${route.id}/`;
    case 'submit':
      return `${root}${s.submit}/`;
  }
}

/** Download URL of a board copied by scripts/sync-boards.mjs. */
export const boardHref = (slug: string, file: string) => `${BASE}boards/${slug}/${file}`;

/** Static assets in public/. */
export const assetHref = (file: string) => `${BASE}${file}`;

// neoboard.io pages linked from header and footer (Phase 1 runs on GitHub Pages).
const NEOBOARD_IO = 'https://neoboard.io';
export const external = {
  home: { de: `${NEOBOARD_IO}/de/`, en: `${NEOBOARD_IO}/en/` },
  legalNotice: { de: `${NEOBOARD_IO}/de/impressum/`, en: `${NEOBOARD_IO}/en/legal-notice/` },
  contact: { de: `${NEOBOARD_IO}/de/kontakt/`, en: `${NEOBOARD_IO}/en/contact/` },
  privacy: { de: `${NEOBOARD_IO}/de/datenschutz/`, en: `${NEOBOARD_IO}/en/privacy-policy/` },
  linkedin: 'https://www.linkedin.com/company/nordeckitconsulting',
  company: 'https://nordeck.net',
  repository: 'https://github.com/nordeck/neoboard-templates',
  mailAddress: 'info@nordeck.net',
  mail: 'mailto:info@nordeck.net',
} as const;
