// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Generates the .nwb boards of script-built templates (definitions in scripts/boards/<slug>.mjs).
// Output is deterministic: running it again produces identical files.
//
// Usage:
//   node scripts/generate-boards.mjs              # all generated templates, boards only
//   node scripts/generate-boards.mjs triz         # one template
//   node scripts/generate-boards.mjs triz --md    # also write index.<lang>.md (only if it does not exist yet)
//   node scripts/generate-boards.mjs --check      # fail if a committed board differs from the generator
//
// index.<lang>.md is never overwritten: after creation it is edited by hand (preview, draft, texts).
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { indexMarkdown } from './boards/lib.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES = path.resolve(root, '../../content/templates');
const DEFINITIONS = path.join(root, 'boards');

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { md: { type: 'boolean', default: false }, check: { type: 'boolean', default: false } },
});

const available = (await readdir(DEFINITIONS)).filter((f) => f.endsWith('.mjs') && f !== 'lib.mjs').map((f) => f.slice(0, -4));
const selected = positionals.length ? positionals : available;
const unknown = selected.filter((s) => !available.includes(s));
if (unknown.length) {
  console.error(`[generate-boards] no definition for: ${unknown.join(', ')} (available: ${available.join(', ')})`);
  process.exit(1);
}

let differences = 0;
for (const name of selected) {
  const def = await import(path.join(DEFINITIONS, `${name}.mjs`));
  const dir = path.join(TEMPLATES, def.slug);
  await mkdir(dir, { recursive: true });
  for (const lang of def.langs) {
    const { board, method, meta } = def.build(lang);
    const file = path.join(dir, `${def.slug}.${lang}.nwb`);
    const json = JSON.stringify(board.toJSON());
    if (values.check) {
      const current = existsSync(file) ? await readFile(file, 'utf8') : null;
      if (current !== json) {
        console.error(`[generate-boards] ${def.slug}.${lang}.nwb differs from its generator`);
        differences++;
      }
      continue;
    }
    await writeFile(file, json);
    console.log(`[generate-boards] ${def.slug}.${lang}.nwb (${board.toJSON().whiteboard.slides[0].elements.length} elements)`);
    const md = path.join(dir, `index.${lang}.md`);
    if (values.md && !existsSync(md)) {
      await writeFile(md, indexMarkdown(def.slug, lang, meta, method));
      console.log(`[generate-boards] ${def.slug}/index.${lang}.md created`);
    }
  }
}
if (differences) process.exit(1);
if (values.check) console.log('[generate-boards] all generated boards are up to date');
