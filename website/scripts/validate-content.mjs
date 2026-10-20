// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Checks what the Zod schema in content.config.ts cannot check:
// folder naming, referenced files, .nwb validity (v2 only), preview image sizes,
// repo-wide license, identical language-neutral fields across translations, orphaned files.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const root = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.resolve(root, '../../content');
const SRC = path.join(CONTENT, 'templates');
const CATEGORIES = Object.keys(parse(await readFile(path.join(CONTENT, 'categories.yaml'), 'utf8')));
// Keep in sync with LICENSES in src/content.config.ts.
const LICENSES = ['CC0-1.0', 'AGPL-3.0-or-later'];
const DEFAULT_LICENSE = 'CC0-1.0';
const SCHEMA_VERSION = 2;
const BOARD_VERSION = 'net.nordeck.whiteboard@v2';
const SIZES = { master: [1920, 1080], tile: [1280, 720] };
const NEUTRAL = ['category', 'tags', 'duration', 'groupSize', 'authors', 'license', 'published', 'draft'];
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const frontmatter = (text) => {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? parse(m[1]) : null;
};

// Reads width/height from the PNG IHDR chunk; masters and tiles must be PNG.
async function pngSize(file) {
  const buf = await readFile(file);
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

for (const slug of await readdir(SRC)) {
  if (slug.startsWith('.')) continue;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) err(slug, 'folder name must be kebab-case');
  const dir = path.join(SRC, slug);
  const files = await readdir(dir);
  const mds = files.filter((f) => /^index\.[a-z]{2}\.md$/.test(f));
  if (mds.length === 0) err(slug, 'no index.<lang>.md found');
  const referenced = new Set();
  const parsed = {};
  for (const md of mds) {
    const where = `${slug}/${md}`;
    const fm = frontmatter(await readFile(path.join(dir, md), 'utf8'));
    if (!fm) { err(where, 'no frontmatter'); continue; }
    parsed[md] = fm;
    const lang = md.split('.')[1];
    if (fm.lang !== lang) err(where, `lang "${fm.lang}" does not match file name "${lang}"`);
    // Astro only logs unknown references and still exits 0, so enforce it here.
    if (!CATEGORIES.includes(fm.category)) err(where, `unknown category "${fm.category}" (see content/categories.yaml)`);
    if (fm.schemaVersion !== SCHEMA_VERSION) err(where, `schemaVersion must be ${SCHEMA_VERSION}`);
    if (!LICENSES.includes(fm.license ?? DEFAULT_LICENSE)) err(where, `license must be one of ${LICENSES.join(', ')}`);
    if (!fm.preview && !fm.draft) err(where, 'preview is required unless draft: true');
    const images = [
      ...(fm.preview ? [[fm.preview.src, 'master'], ...(fm.preview.tile ? [[fm.preview.tile, 'tile']] : [])] : []),
      ...(fm.gallery ?? []).map((g) => [g.src, 'master']),
    ];
    for (const [ref, kind] of images) {
      const name = ref.replace(/^\.\//, '');
      referenced.add(name);
      if (!files.includes(name)) { err(where, `referenced file ${ref} not found`); continue; }
      const size = await pngSize(path.join(dir, name));
      const [w, h] = SIZES[kind];
      if (!size) err(where, `${name}: must be a PNG`);
      else if (size[0] !== w || size[1] !== h) err(where, `${name}: ${size.join('x')} px, expected ${w}x${h} (${kind})`);
    }
    for (const f of fm.files ?? []) {
      const name = f.src.replace(/^\.\//, '');
      referenced.add(name);
      if (!files.includes(name)) { err(where, `referenced file ${f.src} not found`); continue; }
      try {
        const board = JSON.parse(await readFile(path.join(dir, name), 'utf8'));
        if (board.version !== BOARD_VERSION) err(where, `${name}: version "${board.version}", only ${BOARD_VERSION} is allowed`);
        const els = board.whiteboard?.slides?.[0]?.elements;
        if (board.whiteboard?.slides?.length !== 1 || !Array.isArray(els)) err(where, `${name}: expected exactly one slide`);
        else if (!els.some((e) => e.type === 'frame')) err(where, `${name}: contains no frame`);
      } catch (e) {
        err(where, `${name}: invalid JSON (${e.message})`);
      }
    }
  }
  // Language-neutral fields must match the primary file (English if present).
  const primary = parsed['index.en.md'] ? 'index.en.md' : Object.keys(parsed)[0];
  for (const [md, fm] of Object.entries(parsed)) {
    if (md === primary) continue;
    for (const key of NEUTRAL) {
      if (JSON.stringify(fm[key]) !== JSON.stringify(parsed[primary][key])) err(`${slug}/${md}`, `"${key}" differs from ${primary}`);
    }
  }
  for (const f of files) {
    if (/\.(nwb|png|jpe?g|webp)$/.test(f) && !referenced.has(f)) err(slug, `orphaned file ${f}`);
  }
}

if (errors.length) {
  console.error(`[validate] ${errors.length} problem(s):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('[validate] content OK');
