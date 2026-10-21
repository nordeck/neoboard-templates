# Writing a board definition

A definition is an ES module in `website/scripts/boards/<slug>.mjs`. `website/scripts/generate-boards.mjs` imports it, calls `build(lang)` for every language and writes `content/templates/<slug>/<slug>.<lang>.nwb` (and, with `--md`, a missing `index.<lang>.md`).

## Contents

1. Module contract
2. `lib.mjs` API
3. House style and layout grid
4. Colours
5. Text
6. Method description
7. Metadata (`meta`)
8. Complete example
9. More than one template frame

## 1. Module contract

```js
// Copyright <year> Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later
// (If the method comes from elsewhere: one line naming source and licence, "described in our own words".)
import { Board, C, renderMethod, textOn } from './lib.mjs';

export const slug = 'my-template';        // folder name in content/templates/
export const langs = ['de', 'en'];        // languages to generate

export function build(lang) {
  const b = new Board(`${slug}.${lang}`); // seed => deterministic element IDs
  // … template frame, method frame …
  return { board: b, method, meta };
}
```

`build` returns the board, the structured method description and the metadata used for `index.<lang>.md`. Keep all language-specific strings next to each other (`de ? '…' : '…'` or `{ de: …, en: … }` objects) so translations stay in sync.

## 2. `lib.mjs` API

All coordinates passed to drawing methods are **relative to the current frame** (top-left = 0,0). Integers only are needed; the helpers round.

| Call | Draws |
|---|---|
| `b.templateFrame(title)` | Starts the 1920×1080 template frame at its fixed canvas position and draws the Blue Grey title bar (y 0–140) with `title` in white 80 px bold. Call first. |
| `b.methodFrame(heading, text)` | Starts the method frame (1800×1260, right of the template frame) with heading bar and the plain-text method. Call last. |
| `b.rect(x, y, w, h, fill, text?, options?)` | Rectangle. `options`: `textSize`, `textBold`, `textItalic`, `textAlignment` (`left`/`center`/`right`), `textColor`, `borderRadius`, `stickyNote`. |
| `b.label(x, y, w, h, text, size, { bold, align, color })` | Transparent text box. |
| `b.sticky(x, y, w, h, fill, text?)` | Sticky note. Two slightly offset stickies form a "stack to copy from". |
| `b.shape(kind, x, y, w, h, fill, text?, options?)` | Other kinds: `circle` (w = h), `ellipse`, `triangle`. |
| `b.line(x1, y1, x2, y2, color, { arrow })` | Straight free line (not connected to shapes), optional arrowhead at the end. Ends go on shape borders – see "Lines and arrows between shapes". |
| `b.frame({ x, y, width, height })` | Starts another frame at absolute canvas coordinates (see section 9). |
| `C(family, level)` | Palette colour, level 1 (lightest) … 7 (darkest). |
| `textOn(family)` | White or black text colour readable on `C(family, 4)`. |
| `renderMethod(method, { markdown })` | Renders the method object as board text or Markdown. |

`toJSON()` (called by the generator) refuses off-palette colours, `strokeWidth`, duplicate IDs and elements outside the 19200×10800 canvas – an error there means the definition must change, not the check.

## 3. House style and layout grid

Template frame, 1920 × 1080, coordinates relative to the frame:

```
y    0–140   title bar (templateFrame)
y  160–250   optional prompt/goal box, e.g. C('Amber', 1) with "Unser Ziel: …" (34–36 px bold, left)
y  260–1050  working area
x   40–1880  usable width (40 px margin left and right)
```

- Column layouts: `width = (1840 - (n - 1) * gap) / n`; gap 20–44 px (44 when arrows sit between columns).
- Column header: 80 px high, `C(family, 4)` with `textOn(family)`, 30–34 px bold. Below it an optional question/instruction label (22–24 px, about 90 px high), then the work area in `C(family, 1)` with `borderRadius: 12`.
- Give people something to copy: sticky stacks (`C(family, 2)`, 140–150 px) or rows of dots (`shape('circle', …, 50, 50, C('Deep Orange', 4))`).
- Leave real empty space for content – the board is used, not just looked at.

### Lines and arrows between shapes

- **Line ends sit on the border of a shape, never at its centre.** An arrow between two
  column headers runs from the right edge of one (`x + cw + 6`) to the left edge of the
  next (`x + cw + gap - 6`), at the header's vertical middle – as in `triz.mjs`.
- `b.line` writes a *free* line: when people move a shape, the line stays where it is.
  That is fine for decoration and for arrows between fixed areas.
- If an arrow must stay attached when shapes are moved, it needs a real connection:
  `connectedElementStart`/`connectedElementEnd` on the line, the line id in
  `connectedPaths` of both shapes, and both ends on NeoBoard's anchor points (edge
  midpoints). NeoBoard never recalculates the ends itself – a connection written from
  centre to centre starts inside the shape forever. `lib.mjs` has no helper for this
  yet; add one to `lib.mjs` in its own pull request, following "Connected Arrows" in
  the `neoboard` skill.
- Integer division matters for reproducible output: use `Math.floor` when splitting widths.

## 4. Colours

Only the NeoBoard palette (19 families × 7 levels) is allowed, via `C()`. Families: Red, Pink, Purple, Violet, Blue, Light Blue, Cyan, Teal, Green-Teal, Green, Light Green, Yellow-Green, Yellow, Amber, Orange, Deep Orange, Brown, Grey, Blue Grey; plus `#ffffff`, `#000000`, `transparent`.

- Level 1 for areas, level 2 for sticky notes, level 4 for headers/accents, level 6–7 for dark text on light areas (e.g. `C('Grey', 7)` for secondary text).
- One family per column/cluster/phase so people can refer to "the green column".
- Header text: always `textOn(family)` – white on Light Green/Orange/Yellow/Amber is unreadable.

## 5. Text

- Omit `textSize` for content that users replace (NeoBoard auto-fits); set it for headings, labels and prompts so the layout is predictable.
- Typical sizes: title 80 (fixed), headers 30–34, prompts 24–28, small hints 20–22.
- Placeholders end with "…" ("Thema …", "Unser Ziel: …").
- German texts with correct umlauts and German quotation marks „…“.
- No real names, dates or notes; fictional placeholders only.

## 6. Method description

```js
const method = {
  title: 'TRIZ: Der Ablauf in 3 Schritten',
  purposeLabel: 'Wofür',                       // 'Purpose'
  purpose: 'Ein Satz, wofür die Methode da ist.',
  steps: [
    ['1. Schritt (10 Min.)', [['Aktion', '…'], ['Regel', '…']]],   // labels: Aktion/Action, Regel/Rule, Tipp/Tip, Ziel/Goal
    ['2. Schritt (5 Min.)', [['Aktion', '…']]],
  ],
  roleTitle: 'Ihre Rolle als Moderation',      // 'Your role as facilitator'
  role: [['Zeitwächter', '…'], ['Schutzraum', '…']],
  source: 'Nach „…“ von …, Quelle (Lizenz). Eigene Beschreibung.', // optional
};
b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));
```

The same object becomes the Markdown body of `index.<lang>.md` (headings, bold labels, source in italics). German texts address readers with "Sie"; keep steps short and actionable with time boxes.

## 7. Metadata (`meta`)

```js
const meta = {
  title: de ? 'TRIZ: Vom Scheitern lernen' : 'TRIZ: Learn from Failure',   // 3–80 chars
  description: de ? '…' : '…',                                           // 20–200 chars, card + SEO
  category: 'brainstorming',                                             // ID from content/categories.yaml
  tags: ['liberating-structures', 'problem-solving'],                    // kebab-case, same in all languages
  features: de ? ['…', '…', '…'] : ['…', '…', '…'],                      // 1–8, max 120 chars each
  duration: [25, 40],                                                    // minutes, same in all languages
  groupSize: [3, 20],                                                    // people, same in all languages
  published: '2026-10-20',                                               // today, YYYY-MM-DD
  alt: de ? 'TRIZ-Board mit …' : 'TRIZ board with …',                    // preview alt text per language
  link: { label: '…', url: 'https://…' },                                // optional source link
};
```

`category`, `tags`, `duration`, `groupSize`, `authors`, `license`, `published` and `draft` must be identical in all languages – the validator compares them.

## 8. Complete example

The repository contains working definitions; read the one closest to the new template before writing:

- `check-in-weather-quadrants.mjs` – 2×2 quadrants as a cross, row of dots
- `brainstorming-clusters.mjs` – grid of coloured areas with header and sticky stacks
- `1-2-4-all.mjs` – four columns with different work-area subdivisions
- `triz.mjs` – three columns with arrows between headers, goal box, attribution

## 9. More than one template frame

Use extra frames when a method has phases presented one after another. The first template frame is the one captured for the preview, so it should show what the template is about.

```js
b.templateFrame(de ? 'Phase 1: Sammeln' : 'Phase 1: Collect');
// … content of frame 1 …
b.frame({ x: 8640, y: 4770 + 1170, width: 1920, height: 1080 });   // below the first, 90 px gap
b.rect(0, 0, 60, 140, C('Blue Grey', 4));                            // repeat the title bar
b.rect(60, 0, 1860, 140, C('Blue Grey', 4), de ? 'Phase 2: Bewerten' : 'Phase 2: Evaluate',
  { textSize: 80, textBold: true, textAlignment: 'left', textColor: '#ffffff' });
// … content of frame 2 …
b.methodFrame(…);   // last; it stays right of the first frame
```

Stack additional frames downwards (`y + 1170` each). Up to eight fit on the canvas.
All frames stay on the **one slide** that `toJSON()` writes – never add a second
slide: NeoBoard refuses `@v2` files with more than one slide ("Must have a single
slide"), and the import dialog only says the file can't be loaded.
