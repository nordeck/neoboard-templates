# index.<lang>.md – frontmatter reference

One file per language in `content/templates/<slug>/`. The generator creates it with `--md`; afterwards it is edited by hand (preview block, draft flag, wording). For hand-built boards (no definition) write it by hand from the draft below; `scripts/add_method_frame.mjs --md` then fills in the body. Schema: `website/src/content.config.ts`; extra checks: `website/scripts/validate-content.mjs`.

## Draft (as generated)

```yaml
---
schemaVersion: 3
lang: de
title: "TRIZ: Vom Scheitern lernen"
description: "In drei Schritten zum Neustart: …"
category: brainstorming
tags: [liberating-structures, problem-solving, creativity]
features:
  - "Drei Spalten mit Leitfragen"
  - "Feld für das gemeinsame Ziel"
# preview: pending screenshot
#   src: ./preview.de.png
#   alt: "TRIZ-Board mit Zielfeld und drei Spalten …"
files:
  - src: ./triz.de.nwb
    label: "Vorlage"
links:
  - label: "Liberating Structures: Making Space with TRIZ"
    url: https://www.liberatingstructures.com/6-making-space-with-triz/
    type: source
duration: { min: 25, max: 40 }
groupSize: { min: 3, max: 20 }
authors:
  - name: "Nordeck IT + Consulting GmbH"
license: CC0-1.0
published: 2026-10-20
draft: true
# draft reason: no preview yet
---

## 🚀 TRIZ: Der Ablauf in 3 Schritten
…
```

## Published (after stage 4)

Replace the comment block and drop the draft lines:

```yaml
features:
  - "…"
preview:
  src: ./preview.de.png
  alt: "TRIZ-Board mit Zielfeld und drei Spalten …"
files:
  …
published: 2026-10-20
---
```

## Gallery images (optional)

Further frames or a filled-in example, shown as thumbnails on the detail page. Each image is a normalized 1920×1080 PNG next to `index.<lang>.md`:

```yaml
gallery:
  - src: ./phase-2.en.png
    alt: "Second phase: …"
    caption: "Phase 2"
```

## Field rules

| Field | Rule |
|---|---|
| `schemaVersion` | `3` (the validator rejects other values). |
| `lang` | Must match the file name. |
| `title` | 3–80 characters. |
| `description` | 20–200 characters; shown on the card (two lines) and as SEO description. |
| `category` | ID from `content/categories.yaml`. |
| `tags` | kebab-case. |
| `features` | 1–8 bullet points, max 120 characters each; shown under "Auf einen Blick". |
| `preview.src` | Master PNG, exactly 1920×1080. Required unless `draft: true`. Language-neutral boards: `preview.png`. |
| `preview.alt` | Required with `preview`, own text per language, describes what is on the board. |
| `preview.tile` | Optional 1280×720 crop for the card when the full frame is unreadable at card size (calendars, timelines). |
| `gallery[]` | Optional extra images `{ src, alt, caption? }`, 1920×1080, e.g. further frames or a filled-in example; shown as thumbnails on the detail page. |
| `files[]` | `{ src: ./<file>.nwb, label }`. 1 file → button, 2–4 → list, ≥5 → select box. |
| `extras[]` | Optional `{ src: ./<file>.zip, label }`, shown as extra download links below the board, e.g. the illustrations of a hand-drawn board for people who rebuild it in another whiteboard tool. ZIP only; put a short README (license, link to the template page) inside. |
| `links[]` | `{ label, url, type }`, type `generator`, `source`, `docs` or `video`. A template needs at least one file or a generator link. |
| `duration`, `groupSize` | `{ min, max }`, min ≤ max. |
| `authors` | `[{ name, url? }]`. |
| `license` | `CC0-1.0` (default, required for new templates). `AGPL-3.0-or-later` exists only for `year-calendar`, whose author has not agreed to CC0 yet. |
| `published` | `YYYY-MM-DD`; `updated` optional for later content changes. |
| `draft` | `true` hides the template in production. |
| `featured` | `true` shows it in "Empfohlen" (first three by date). Only when the person asks. Set it identically in **all** language files – the validator does not compare it across languages. |

Language-neutral fields (`category`, `tags`, `duration`, `groupSize`, `authors`, `license`, `published`, `draft`) must be identical in all language files.

YAML comments (`# preview: …`, `# draft reason: …`, `# note: …`) are ignored by schema and website and are a good place for open points.
