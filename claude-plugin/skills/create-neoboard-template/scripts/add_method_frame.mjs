#!/usr/bin/env node
// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Adds a house-style method frame to a board that was built by hand in NeoBoard and exported
// as .nwb, and optionally writes the same method text as Markdown body of index.<lang>.md.
// Generated templates do not need this: their definition calls b.methodFrame() itself.
//
// The method frame (1800x1260, Blue Grey heading bar, plain-text method) is placed 120 px right
// of the rightmost frame, top-aligned with the topmost frame, so it is the last frame in
// presentation mode. All existing elements are kept unchanged; IDs of the new elements are
// deterministic (seeded from the output file name), so running it again on the same export
// gives the same file.
//
// Usage:
//   node add_method_frame.mjs <repo-root> <exported.nwb> <method.json> <out.nwb> [--md <index.md>]
//
// method.json: { "heading": "Facilitation guide", "method": { title, purposeLabel, purpose,
//   steps: [[heading, [[label, text], …]], …], roleTitle, role: [[label, text], …], source? } }
// (the method object of renderMethod() in website/scripts/boards/lib.mjs)
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const { values, positionals } = parseArgs({ allowPositionals: true, options: { md: { type: 'string' } } });
const [repo, exported, methodFile, out] = positionals;
if (!repo || !exported || !methodFile || !out) {
  console.error('Usage: add_method_frame.mjs <repo-root> <exported.nwb> <method.json> <out.nwb> [--md <index.md>]');
  process.exit(1);
}
const { Board, C, WHITE, BLACK, renderMethod } = await import(pathToFileURL(path.resolve(repo, 'website/scripts/boards/lib.mjs')));

const fail = (msg) => {
  console.error(`[add_method_frame] ${msg}`);
  process.exit(1);
};
const { heading, method } = JSON.parse(await readFile(methodFile, 'utf8'));
const board = JSON.parse(await readFile(exported, 'utf8'));
if (board.version !== 'net.nordeck.whiteboard@v2') fail(`unsupported board version ${board.version}`);
const slides = board.whiteboard?.slides ?? [];
if (slides.length !== 1) fail(`expected exactly one slide, found ${slides.length}`);
const elements = slides[0].elements;
const frames = elements.filter((e) => e.type === 'frame');
if (!frames.length) fail('board has no frame');
if (elements.some((e) => e.type === 'shape' && e.text === heading)) {
  fail(`board already contains "${heading}" – is the method frame there already?`);
}

const right = Math.max(...frames.map((f) => f.position.x + f.width));
const top = Math.min(...frames.map((f) => f.position.y));

// Same layout as Board.methodFrame(), but at a position that fits the hand-built frames.
const b = new Board(`${path.basename(out, '.nwb')}.method`);
b.frame({ x: right + 120, y: top, width: 1800, height: 1260 });
b.rect(40, 0, 1720, 120, C('Blue Grey', 4), heading, { textSize: 56, textBold: true, textAlignment: 'left', textColor: WHITE });
b.rect(60, 170, 1680, 1060, 'transparent', renderMethod(method, { markdown: false }), { textSize: 28, textAlignment: 'left', textColor: BLACK });
const added = b.toJSON().whiteboard.slides[0].elements; // validates palette and canvas bounds

const ids = new Set(elements.map((e) => e.id));
for (const e of added) if (ids.has(e.id)) fail(`id collision ${e.id}`);
elements.push(...added);
await writeFile(out, JSON.stringify(board));
console.log(`[add_method_frame] ${path.basename(out)}: method frame at x=${right + 120}, y=${top}; ${frames.length + 1} frames, ${elements.length} elements`);

if (values.md) {
  const md = await readFile(values.md, 'utf8');
  const end = md.indexOf('\n---\n', 4);
  if (!md.startsWith('---\n') || end < 0) fail(`${values.md} has no frontmatter`);
  await writeFile(values.md, md.slice(0, end + 5) + '\n' + renderMethod(method, { markdown: true }));
  console.log(`[add_method_frame] ${path.basename(values.md)}: Markdown body rewritten from the same method`);
}
