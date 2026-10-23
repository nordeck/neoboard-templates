// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Copies all .nwb files (and .zip extras) from ../content/templates/<slug>/ to public/boards/<slug>/
// so they are served under stable, human-readable download URLs.
// public/boards/ is generated and must be git-ignored.
import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(root, '../../content/templates');
const DEST = path.resolve(root, '../public/boards');

await rm(DEST, { recursive: true, force: true });
let count = 0;
for (const slug of await readdir(SRC)) {
  const dir = path.join(SRC, slug);
  let entries;
  try { entries = await readdir(dir); } catch { continue; }
  for (const f of entries.filter((f) => /\.(nwb|zip)$/.test(f))) {
    await mkdir(path.join(DEST, slug), { recursive: true });
    await cp(path.join(dir, f), path.join(DEST, slug, f));
    count++;
  }
}
console.log(`[sync-boards] copied ${count} .nwb/.zip files to public/boards/`);
