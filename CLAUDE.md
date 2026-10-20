# CLAUDE.md – neoboard-templates

Template gallery for NeoBoard (`.nwb` whiteboard templates). Astro 7, static output.
Target: subpage of neoboard.io (`/de/vorlagen/`, `/en/templates/`) built inside the neoboard.io Astro project.
Fallback: `https://nordeck.github.io/neoboard-templates/` built from this repo.

## Hard rules
- `content/` holds published content only (Markdown, YAML, PNG, `.nwb`). Never add code there.
- `staging/` holds boards in preparation (with metadata grid). Never published, never treated as content.
- `website/` holds code only. Never add template content there.
- The only bridges between content and code are `website/src/content.config.ts` and `website/scripts/*.mjs`.
- Boards: only `net.nordeck.whiteboard@v2`, exactly one slide, at least one frame. Never hand-edit `.nwb`; generate with a script and validate.
- Schema changes must update `content.config.ts`, `scripts/validate-content.mjs` and the docs together, and bump `schemaVersion`.
- Previews: master 1920×1080 PNG, optional tile 1280×720 PNG, light mode, no NeoBoard UI. Derived sizes are generated at build time, never committed.
- License: AGPL-3.0-or-later. New source files start with:
  `// Copyright <year> Nordeck IT + Consulting GmbH` and `// SPDX-License-Identifier: AGPL-3.0-or-later`.
- Code comments, commit messages and docs in English. German UI strings use correct umlauts (ä, ö, ü, ß).
- All internal links use `import.meta.env.BASE_URL`.
- No third-party runtime requests (fonts, scripts, analytics) without approval.
- Use design tokens from `website/src/styles/tokens.css`; no hard-coded colours.

## Website structure
- Gallery code is encapsulated in `website/src/features/templates/` (components, views, lib, styles, scripts) so it can move to neoboard.io in Phase 2; `src/pages/` only holds thin route files.
- Dark theme is the default (`THEME` in `features/templates/config.ts`); previews always stay light.
- Icons: Lucide, inlined at build time from `lucide-static`; category icons are Lucide names in `content/categories.yaml`.
- Script-built templates: one definition per template in `website/scripts/boards/<slug>.mjs` (shared helpers and palette in `lib.mjs`). Change the definition and regenerate; never edit those `.nwb` files directly. Output is deterministic.
- Design reference: `docs/design/design_handoff_templates_gallery/` (not shipped).

## Commands (run in `website/`)
- `npm run dev` – sync boards and start the dev server
- `npm run validate` – content checks only (includes `generate-boards --check`)
- `npm run build` – validate, sync boards, build to `dist/`
- `npm run preview` – serve `dist/`
- `npm run generate:boards [-- <slug>] [-- <slug> --md]` – regenerate script-built boards from `scripts/boards/<slug>.mjs`; `--md` also creates a missing `index.<lang>.md`
- `npm run normalize-preview -- <input> <output.png> [--tile <tile.png>] [--crop x,y,w,h]` – fit a screenshot to a preview master

## Definition of done
- `npm run build` passes (includes content validation).
- Pages render in en and de; the fallback notice appears for missing translations.
- Drafts (`draft: true`) are hidden in production builds.
- Keyboard navigation works; every image has `alt` text from frontmatter.
