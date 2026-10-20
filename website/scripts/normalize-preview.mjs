// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Normalizes a captured frame screenshot to a preview master (spec: Teil C.3):
// fits it completely into 1920x1080 (contain, Lanczos), pads with white and writes a PNG without metadata.
// Optionally writes a 1280x720 tile from a crop of the input.
//
// Usage:
//   node scripts/normalize-preview.mjs <input> <output.png>
//   node scripts/normalize-preview.mjs <input> <output.png> --tile <tile.png> [--crop x,y,width,height]
//
// --crop is given in pixels of the input image; without it the tile is made from the whole input.
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const MASTER = { width: 1920, height: 1080 };
const TILE = { width: 1280, height: 720 };
const WHITE = '#ffffff';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { tile: { type: 'string' }, crop: { type: 'string' } },
});
const [input, output] = positionals;
if (!input || !output || !output.endsWith('.png')) {
  console.error('Usage: normalize-preview.mjs <input> <output.png> [--tile <tile.png>] [--crop x,y,width,height]');
  process.exit(1);
}

// flatten() removes transparency so the padding and any transparent areas are white.
const fit = (img, size) =>
  img
    .flatten({ background: WHITE })
    .resize(size.width, size.height, { fit: 'contain', kernel: 'lanczos3', background: WHITE })
    .png({ compressionLevel: 9 });

const meta = await sharp(input).metadata();
await fit(sharp(input), MASTER).toFile(output);
console.log(`[normalize-preview] ${input} (${meta.width}x${meta.height}) -> ${output} (${MASTER.width}x${MASTER.height})`);

if (values.tile) {
  let img = sharp(input);
  if (values.crop) {
    const [left, top, width, height] = values.crop.split(',').map(Number);
    if ([left, top, width, height].some((n) => !Number.isInteger(n) || n < 0)) {
      console.error('--crop expects four non-negative integers: x,y,width,height');
      process.exit(1);
    }
    img = img.extract({ left, top, width, height });
  }
  await fit(img, TILE).toFile(values.tile);
  console.log(`[normalize-preview] tile -> ${values.tile} (${TILE.width}x${TILE.height})`);
}
