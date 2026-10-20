#!/usr/bin/env node
// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Composes the screenshots of several template frames into one 1920x1080 preview: a grid on
// white (2 → side by side, 3–4 → 2x2, 5–6 → 3x2, 7–9 → 3x3), in the given order, an incomplete
// last row centred. Run normalize-preview on the result afterwards (strips metadata).
//
// Usage: node compose_frames.mjs <website-dir> <out.png> <frame1.png> <frame2.png> [...]
import { createRequire } from 'node:module';
import path from 'node:path';

const [websiteDir, out, ...inputs] = process.argv.slice(2);
if (!websiteDir || !out || inputs.length < 2 || inputs.length > 9) {
  console.error('Usage: compose_frames.mjs <website-dir> <out.png> <frame1.png> … (2–9 frames)');
  process.exit(1);
}
// sharp is a dependency of the website, so resolve it from there.
const sharp = createRequire(path.join(path.resolve(websiteDir), 'package.json'))('sharp');

const W = 1920;
const H = 1080;
const GAP = 24;
const cols = inputs.length === 2 ? 2 : inputs.length <= 4 ? 2 : 3;
const rows = Math.ceil(inputs.length / cols);
// 16:9 tiles that fit both the width and the height of the canvas.
const tileW = Math.floor(Math.min((W - (cols + 1) * GAP) / cols, ((H - (rows + 1) * GAP) / rows) * (16 / 9)));
const tileH = Math.round((tileW * 9) / 16);
const top = Math.round((H - rows * tileH - (rows - 1) * GAP) / 2);

const tiles = await Promise.all(
  inputs.map((f) => sharp(f).resize(tileW, tileH, { fit: 'cover', kernel: 'lanczos3' }).png().toBuffer()),
);
const composite = tiles.map((input, i) => {
  const row = Math.floor(i / cols);
  const inRow = Math.min(cols, inputs.length - row * cols);
  const left = Math.round((W - inRow * tileW - (inRow - 1) * GAP) / 2);
  return { input, left: left + (i % cols) * (tileW + GAP), top: top + row * (tileH + GAP) };
});
await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
  .composite(composite)
  .png({ compressionLevel: 9 })
  .toFile(out);
console.log(`[compose_frames] ${inputs.length} frames as ${cols}x${rows} grid, tiles ${tileW}x${tileH} -> ${out}`);
