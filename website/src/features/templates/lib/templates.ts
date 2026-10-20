// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES } from '../../../content.config';

export type Lang = (typeof LOCALES)[number];
export type Template = CollectionEntry<'templates'>;
export type Category = CollectionEntry<'categories'>;
export type TemplateItem = { slug: string; entry: Template; isFallback: boolean };

export { LOCALES };

const slugOf = (t: Template) => t.id.split('/')[0];

/** One entry per template slug: requested language > English > any other language. */
export async function getTemplates(lang: Lang): Promise<TemplateItem[]> {
  const all = await getCollection('templates', ({ data }) => import.meta.env.DEV || !data.draft);
  const rank = (t: Template) => (t.data.lang === lang ? 0 : t.data.lang === 'en' ? 1 : 2);
  const bySlug = new Map<string, Template>();
  for (const t of all) {
    const slug = slugOf(t);
    const current = bySlug.get(slug);
    if (!current || rank(t) < rank(current)) bySlug.set(slug, t);
  }
  return [...bySlug.entries()]
    .map(([slug, entry]) => ({ slug, entry, isFallback: entry.data.lang !== lang }))
    .sort((a, b) => b.entry.data.published.valueOf() - a.entry.data.published.valueOf());
}

/** Categories in display order. */
export async function getCategories(): Promise<Category[]> {
  return (await getCollection('categories')).sort((a, b) => a.data.order - b.data.order);
}

// Content lives in ../content relative to the Astro project (website/), see content.config.ts.
const TEMPLATES_DIR = path.resolve(process.cwd(), '../content/templates');

/** Number of frames in a board file (0 if the file cannot be read). */
export function countFrames(slug: string, src: string): number {
  try {
    const board = JSON.parse(readFileSync(path.join(TEMPLATES_DIR, slug, src.replace(/^\.\//, '')), 'utf8'));
    return (board.whiteboard?.slides?.[0]?.elements ?? []).filter((e: { type?: string }) => e.type === 'frame').length;
  } catch {
    return 0;
  }
}

/** File name of a board reference ("./x.de.nwb" -> "x.de.nwb"). */
export const fileName = (src: string) => src.replace(/^\.\//, '');
