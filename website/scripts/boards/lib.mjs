// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Building blocks for generated NeoBoard templates (net.nordeck.whiteboard@v2).
// House style: one 1920x1080 template frame with a Blue Grey title bar, plus a method frame
// whose text is also the Markdown body of index.<lang>.md.

// NeoBoard colour palette (useColorPalette.ts). Only these exact lowercase values are
// recognised by the colour picker.
const FAMILIES = {
  Red: ['#fcd0cc', '#f9a19a', '#f67268', '#f44336', '#be342a', '#88251e', '#521612'],
  Pink: ['#f9c6d8', '#f48eb1', '#ee568a', '#e91e63', '#b5174d', '#821037', '#4f0a21'],
  Purple: ['#e6c9eb', '#cd93d7', '#b45dc3', '#9c27b0', '#791e89', '#571562', '#350d3b'],
  Violet: ['#d9cded', '#b39cdb', '#8d6bc9', '#673ab7', '#502d8e', '#392066', '#23133e'],
  Blue: ['#cfd3ec', '#9fa8da', '#6f7cc7', '#3f51b5', '#313f8d', '#232d65', '#151b3d'],
  'Light Blue': ['#c7e4fc', '#90caf9', '#58b0f6', '#2196f3', '#1975bd', '#125488', '#0b3252'],
  Cyan: ['#c0e9fc', '#81d4f9', '#42bef6', '#03a9f4', '#0283be', '#015e88', '#013952'],
  Teal: ['#bfeef4', '#7fdde9', '#3fccde', '#00bcd4', '#0092a5', '#006976', '#003f48'],
  'Green-Teal': ['#bfe4e1', '#7fcac3', '#3fb0a5', '#009688', '#00756a', '#00544c', '#00322e'],
  Green: ['#d2ebd3', '#a5d7a7', '#78c37b', '#4caf50', '#3b883e', '#2a622c', '#193b1b'],
  'Light Green': ['#e2f0d1', '#c5e1a4', '#a8d277', '#8bc34a', '#6c9839', '#4d6d29', '#2f4219'],
  'Yellow-Green': ['#f2f6cd', '#e6ed9c', '#d9e46a', '#cddc39', '#9fab2c', '#727b1f', '#454a13'],
  Yellow: ['#ffface', '#fff59d', '#fff06c', '#ffeb3b', '#c6b72e', '#8e8321', '#564f14'],
  Amber: ['#ffefc1', '#ffe083', '#ffd045', '#ffc107', '#c69605', '#8e6c03', '#564102'],
  Orange: ['#ffe5bf', '#ffcb7f', '#ffb13f', '#ff9800', '#c67600', '#8e5500', '#563300'],
  'Deep Orange': ['#ffd5c7', '#ffab90', '#ff8159', '#ff5722', '#c6431a', '#8e3013', '#561d0b'],
  Brown: ['#ddd4d1', '#bcaaa3', '#9a7f75', '#795548', '#5e4238', '#432f28', '#291c18'],
  Grey: ['#e6e6e6', '#cecece', '#b6b6b6', '#9e9e9e', '#7b7b7b', '#585858', '#353535'],
  'Blue Grey': ['#d7dee2', '#afbec5', '#879da8', '#607d8b', '#4a616c', '#35464d', '#202a2f'],
};
const PALETTE = new Set([...Object.values(FAMILIES).flat(), '#ffffff', '#000000', 'transparent']);

export const WHITE = '#ffffff';
export const BLACK = '#000000';
/** Palette colour, level 1 (lightest) .. 7 (darkest). */
export const C = (family, level) => FAMILIES[family][level - 1];
/** Level-4 colours that need white text for contrast. */
export const DARK_L4 = new Set(['Red', 'Purple', 'Violet', 'Blue', 'Light Blue', 'Green-Teal', 'Green', 'Pink', 'Blue Grey', 'Deep Orange', 'Brown']);
export const textOn = (family) => (DARK_L4.has(family) ? WHITE : BLACK);

// Canvas is 19200x10800; frames sit at the same positions as the existing templates.
const CANVAS = { width: 19200, height: 10800 };
export const TEMPLATE_FRAME = { x: 8640, y: 4770, width: 1920, height: 1080 };
const METHOD_FRAME = { x: 10680, y: 4770, width: 1800, height: 1260 };

// Deterministic nanoid-style IDs (21 chars) so regenerating a board gives identical output.
function seededRandom(seed) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const ID_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export class Board {
  constructor(seed) {
    this.random = seededRandom(seed);
    this.frames = [];
    this.current = null;
  }

  uid() {
    let id = '';
    for (let i = 0; i < 21; i++) id += ID_CHARS[Math.floor(this.random() * ID_CHARS.length)];
    return id;
  }

  frame({ x, y, width, height }) {
    const f = { id: this.uid(), type: 'frame', position: { x, y }, width, height, attachedElements: [], children: [] };
    this.frames.push(f);
    this.current = f;
    return f;
  }

  add(el) {
    el.attachedFrame = this.current.id;
    this.current.attachedElements.push(el.id);
    this.current.children.push(el);
    return el.id;
  }

  /** Shape at x/y relative to the current frame. Options with undefined values are omitted. */
  shape(kind, x, y, width, height, fillColor, text = '', options = {}) {
    const { x: fx, y: fy } = this.current.position;
    const el = {
      id: this.uid(),
      type: 'shape',
      kind,
      fillColor,
      position: { x: Math.round(fx + x), y: Math.round(fy + y) },
      width: Math.round(width),
      height: Math.round(height),
      text,
      textFontFamily: 'Inter',
    };
    for (const [k, v] of Object.entries(options)) if (v !== undefined && v !== false) el[k] = v;
    return this.add(el);
  }

  rect(x, y, w, h, fill, text = '', options = {}) {
    return this.shape('rectangle', x, y, w, h, fill, text, options);
  }

  label(x, y, w, h, text, textSize, { bold = false, align = 'left', color = BLACK } = {}) {
    return this.rect(x, y, w, h, 'transparent', text, { textSize, textBold: bold, textAlignment: align, textColor: color });
  }

  sticky(x, y, w, h, fill, text = '') {
    return this.rect(x, y, w, h, fill, text, { stickyNote: true });
  }

  line(x1, y1, x2, y2, strokeColor, { arrow = false } = {}) {
    const { x: fx, y: fy } = this.current.position;
    const el = {
      id: this.uid(),
      type: 'path',
      kind: 'line',
      position: { x: Math.round(fx + x1), y: Math.round(fy + y1) },
      points: [{ x: 0, y: 0 }, { x: Math.round(x2 - x1), y: Math.round(y2 - y1) }],
      strokeColor,
    };
    if (arrow) el.endMarker = 'arrow-head-line';
    return this.add(el);
  }

  /** Template frame with the house-style title bar. */
  templateFrame(title) {
    this.frame(TEMPLATE_FRAME);
    this.rect(0, 0, 60, 140, C('Blue Grey', 4));
    this.rect(60, 0, TEMPLATE_FRAME.width - 60, 140, C('Blue Grey', 4), title, {
      textSize: 80,
      textBold: true,
      textAlignment: 'left',
      textColor: WHITE,
    });
  }

  /** Method frame: heading bar and the plain-text method description. */
  methodFrame(heading, text) {
    this.frame(METHOD_FRAME);
    this.rect(40, 0, 1720, 120, C('Blue Grey', 4), heading, { textSize: 56, textBold: true, textAlignment: 'left', textColor: WHITE });
    this.rect(60, 170, 1680, 1060, 'transparent', text, { textSize: 28, textAlignment: 'left', textColor: BLACK });
  }

  /** Validated board JSON (frame first, then its elements). */
  toJSON() {
    const elements = this.frames.flatMap(({ children, ...frame }) => [frame, ...children]);
    const ids = new Set();
    for (const e of elements) {
      for (const k of ['fillColor', 'strokeColor', 'textColor']) {
        if (k in e && !PALETTE.has(e[k])) throw new Error(`off-palette colour ${e[k]} on ${e.id}`);
      }
      if ('strokeWidth' in e) throw new Error(`strokeWidth is not allowed (${e.id})`);
      if (ids.has(e.id)) throw new Error(`duplicate id ${e.id}`);
      ids.add(e.id);
      const w = e.width ?? Math.max(...e.points.map((p) => p.x));
      const h = e.height ?? Math.max(...e.points.map((p) => p.y));
      if (e.position.x < 0 || e.position.y < 0 || e.position.x + w > CANVAS.width || e.position.y + h > CANVAS.height) {
        throw new Error(`element ${e.id} outside the canvas`);
      }
    }
    return { version: 'net.nordeck.whiteboard@v2', whiteboard: { slides: [{ elements }] } };
  }
}

/**
 * Method description, rendered as plain board text or as Markdown body.
 * method = { title, purposeLabel, purpose, steps: [[heading, [[label, text], …]], …], roleTitle, role: [[label, text], …], source? }
 */
export function renderMethod(m, { markdown }) {
  const out = [];
  if (markdown) {
    out.push(`## 🚀 ${m.title}`, '', `**🎯 ${m.purposeLabel}:** ${m.purpose}`, '');
    for (const [heading, items] of m.steps) out.push(`### ${heading}`, '', ...items.map(([l, t]) => `- **${l}:** ${t}`), '');
    out.push(`## 🛠️ ${m.roleTitle}`, '', ...m.role.map(([l, t]) => `- **${l}:** ${t}`));
    if (m.source) out.push('', `*${m.source}*`);
    return out.join('\n') + '\n';
  }
  out.push(`🚀 ${m.title}`, '', `🎯 ${m.purposeLabel}: ${m.purpose}`, '');
  for (const [heading, items] of m.steps) out.push(heading, ...items.map(([l, t]) => `${l}: ${t}`), '');
  out.push(`🛠️ ${m.roleTitle}`, ...m.role.map(([l, t]) => `${l}: ${t}`));
  if (m.source) out.push('', m.source);
  return out.join('\n');
}

const q = (s) => JSON.stringify(s);

/** index.<lang>.md for a new template (draft until a preview exists). */
export function indexMarkdown(slug, lang, meta, method) {
  const de = lang === 'de';
  const lines = [
    '---',
    'schemaVersion: 2',
    `lang: ${lang}`,
    `title: ${q(meta.title)}`,
    `description: ${q(meta.description)}`,
    `category: ${meta.category}`,
    `tags: [${meta.tags.join(', ')}]`,
    'features:',
    ...meta.features.map((f) => `  - ${q(f)}`),
    '# preview: pending screenshot',
    `#   src: ./preview.${lang}.png`,
    `#   alt: ${q(meta.alt)}`,
    'files:',
    `  - src: ./${slug}.${lang}.nwb`,
    `    label: ${q(de ? 'Vorlage' : 'Template')}`,
  ];
  if (meta.link) lines.push('links:', `  - label: ${q(meta.link.label)}`, `    url: ${meta.link.url}`, '    type: source');
  lines.push(
    `duration: { min: ${meta.duration[0]}, max: ${meta.duration[1]} }`,
    `groupSize: { min: ${meta.groupSize[0]}, max: ${meta.groupSize[1]} }`,
    'authors:',
    '  - name: "Nordeck IT + Consulting GmbH"',
    'license: CC0-1.0',
    `published: ${meta.published}`,
    'draft: true',
    '# draft reason: no preview yet',
    '---',
    '',
    renderMethod(method, { markdown: true }).trimEnd(),
    '',
  );
  return lines.join('\n');
}
