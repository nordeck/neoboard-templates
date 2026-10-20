// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All content lives outside the Astro project in ../content (strict content/code separation).
const CONTENT_ROOT = '../content';

export const LOCALES = ['en', 'de'] as const;
export const DEFAULT_LICENSE = 'AGPL-3.0-or-later';

const range = z
  .object({ min: z.number().int().positive(), max: z.number().int().positive() })
  .refine((r) => r.min <= r.max, { error: 'min must be <= max' });

const categories = defineCollection({
  loader: file(`${CONTENT_ROOT}/categories.yaml`),
  schema: z.object({
    label: z.object({ en: z.string(), de: z.string() }),
    description: z.object({ en: z.string(), de: z.string() }).optional(),
    // Lucide icon name in PascalCase, e.g. "RefreshCw"
    icon: z.string().optional(),
    order: z.number().int().default(100),
  }),
});

const templates = defineCollection({
  loader: glob({
    base: `${CONTENT_ROOT}/templates`,
    pattern: '*/index.*.md',
    // "retro-4-step/index.de.md" -> "retro-4-step/de"
    generateId: ({ entry }) => entry.replace(/\/index\.([a-z]{2})\.md$/, '/$1'),
  }),
  schema: ({ image }) =>
    z
      .object({
        schemaVersion: z.literal(1),
        lang: z.enum(LOCALES),
        title: z.string().min(3).max(80),
        description: z.string().min(20).max(200),
        category: reference('categories'),
        tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).default([]),
        features: z.array(z.string().max(120)).min(1).max(8),
        // Master 1920x1080 PNG; optional hand-cropped tile 1280x720 PNG (see preview spec)
        preview: z.object({ src: image(), alt: z.string().min(5), tile: image().optional() }).optional(),
        gallery: z
          .array(z.object({ src: image(), alt: z.string().min(5), caption: z.string().optional() }))
          .default([]),
        // Only net.nordeck.whiteboard@v2 (infinite canvas) boards are offered; the validator checks the files.
        files: z.array(z.object({ src: z.string().regex(/^\.\/[a-z0-9.-]+\.nwb$/), label: z.string() })).default([]),
        links: z
          .array(z.object({ label: z.string(), url: z.url(), type: z.enum(['generator', 'source', 'docs', 'video']) }))
          .default([]),
        duration: range.optional(), // minutes
        groupSize: range.optional(), // participants
        authors: z.array(z.object({ name: z.string(), url: z.url().optional() })).min(1),
        license: z.string().default(DEFAULT_LICENSE), // SPDX identifier
        published: z.coerce.date(),
        updated: z.coerce.date().optional(),
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
      })
      .refine((d) => d.files.length > 0 || d.links.some((l) => l.type === 'generator'), {
        error: 'A template needs at least one .nwb file or a generator link',
      })
      .refine((d) => d.draft || d.preview, { error: 'preview is required unless draft: true' }),
});

export const collections = { categories, templates };
