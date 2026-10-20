# Handoff: NeoBoard template gallery (neoboard-templates website)

## Overview
Gallery and detail pages for NeoBoard whiteboard templates, as specified in `neoboard-templates-konzept.md` (concept v2, Teil G/H). Target: `website/` in `nordeck/neoboard-templates` (Astro 7, Phase 1 on GitHub Pages), later a subpage of neoboard.io (`/de/vorlagen/`, `/en/templates/`). This package is the "Übergabe an Claude Code" from Teil G: tokens, component list with props, and reference screens.

## About the design files
The files in this bundle are **design references created in HTML/React** — prototypes showing intended look and behaviour, not production code. Recreate them as **Astro components** in `website/src/features/templates/` following the concept's rules (static output, Content Collections, no client framework needed except small islands for filter/search). Do not ship the React/Babel prototype.

Open `ui_kits/templates/index.html` in a browser (serve the folder, e.g. `npx serve .`) to click through. The Tweaks panel (toolbar toggle) switches light/dark and jumps to every state.

## Fidelity
**High-fidelity.** Colours, type, spacing, radii and states are final and derived 1:1 from the neoboard.io stylesheet (`nordeck/neoboard.io` → `src/styles/global.css`). Recreate pixel-perfectly.

**Default theme: dark.** Set `<html data-theme="dark">` by default; light remains available (all values below list both). Previews always stay light with a subtle border. Open point for Phase 2: align with how neoboard.io handles themes (neoboard.io is currently light-only).

## Screens / views
All pages: existing neoboard.io subpage header (logo 30px + DE/EN pill switch; in dark: `--surface-card` background, white logo) and footer (`--dark`, links 62% white). Content width `max-width:1240px; padding:0 32px`. One column below 960px.

### 1. Gallery — `/de/vorlagen/`, `/en/templates/`
- **Intro band**: background `#321b20`, padding `64px 0 56px`. Kicker (Roboto Mono 12px, `letter-spacing:.1em`, uppercase, `#f2895a`) "VORLAGEN"/"TEMPLATES"; H1 Titillium Web 700 44px / 1.1, `-0.022em`, white, margin `14px 0`; lead Roboto 18px `rgba(255,255,255,.72)`, max-width 36em: "Vorlage herunterladen und in NeoBoard importieren." / "Download a template and import it into NeoBoard."
- **Featured** (only when no filter/search): kicker "EMPFOHLEN"/"FEATURED", 3 cards, grid `repeat(auto-fill,minmax(min(100%,300px),1fr))`, gap 24, section padding-top 56.
- **Toolbar** (flex wrap, gap 16): SearchField (flex 1, min 220px) + Tabs "Neu | A–Z" / "Newest | A–Z" (sort by `published` desc, or title `localeCompare`).
- **CategoryChips** below: "Alle" + 9 categories with icon and count. Wraps on desktop; ≤760px single scrolling row (`overflow-x:auto`, bleeds to viewport edge).
- **Count**: mono 12px uppercase muted, margin `28px 0 16px`: "16 VORLAGEN".
- **Grid**: `repeat(auto-fill,minmax(min(100%,290px),1fr))`, gap 24.
- **Empty state**: `--surface-soft` box, 1px `--border-subtle`, radius 14, padding `56px 24px`, centred: SearchX icon 36px, H3 21px "Keine Vorlagen gefunden", text "Passen Sie die Suche an oder wählen Sie eine andere Kategorie.", primary button "Filter zurücksetzen".
- **Submit CTA band**: margin-top 96, `--surface-soft`, border-top `--border-subtle`, padding 48: H2 28px "Eigene Vorlage teilen?" + muted "Reichen Sie Ihr Board ein, damit andere es nutzen können." + primary button "Vorlage einreichen".

### 2. Detail — `/de/vorlagen/<slug>/`
- Breadcrumb: mono 12px uppercase muted, padding-top 28: "VORLAGEN / AGIL" (links, hover orange).
- Head grid ≥961px: `minmax(0,1.3fr) minmax(0,1fr)`, gap 56; stacked below (gap 32).
  - Left: preview tray (`--surface-tray`, radius 16, padding 12) with TemplatePreview. If >1 frame: thumbnails grid 4 columns, gap 10, each a small preview with 2px border radius 12; active border `#e95d11`; hover `--border-strong`. Label "Rahmen 2 von 4".
  - Right (grid gap 22): category kicker link with icon; H1 40px/1.1 `-0.022em` (32px ≤960); description 18px muted; fallback Notice (if language fallback) "Diese Vorlage gibt es nur auf Englisch."; DownloadPanel; MetaList (Dauer, Gruppengröße, Rahmen, Autor:innen, Lizenz `AGPL-3.0-or-later`, Veröffentlicht `21. Dezember 2024`).
- Method section (padding-top 80; ≥961px grid `0.8fr 1.2fr`, gap 64, left column sticky top 32): kicker "METHODE", H2 40px "Methodenbeschreibung" (or "Auf einen Blick" when no body). Right: H3 21px "Auf einen Blick" + features `ul` (16px, `--text-secondary`, gap 9, orange `::marker`), then Markdown body: border-top 1px `--border-default`, padding-top 28, line-height 1.75; h2 21px in `--text-accent`; lists with orange markers.
- Import band: `#321b20`, margin-top 96, padding 80: kicker "IMPORT", H2 "In drei Schritten zum Board", ImportSteps (3 columns, 1 ≤760px).
- Related: padding-top 80, kicker "MEHR AUS AGIL", H2 "Verwandte Vorlagen", up to 3 cards of the same category.
- Submit CTA band (as gallery).

### 3. Category — `/de/vorlagen/kategorie/<id>/`
Gallery without chips and featured. Intro band shows back link (mono, orange-light, ArrowLeft) "Alle Vorlagen", 56px icon tile (1px `rgba(255,255,255,.28)`, radius 12, icon 26px orange-light), kicker "KATEGORIE", H1 category label, lead = category description. Empty: "In dieser Kategorie gibt es noch keine Vorlagen." + button "Alle Vorlagen".

### 4. Submit — `/de/vorlagen/einreichen/`
Dark page hero (as neoboard.io PageHero, 56px padding, `clamp(28px,3.5vw,38px)`) "Vorlage einreichen". Narrow column max 820px, padding `56px 32px 96px`: lead 18px; ImportSteps with 3 submit steps; legal Notice "Eingereichte Vorlagen werden unter der Lizenz AGPL-3.0-or-later veröffentlicht."; actions: primary "Auf GitHub einreichen" (→ repo) + link with Mail icon "Per E-Mail senden" (`mailto:info@nordeck.net`). All copy in `ui_kits/templates/i18n.js`.

### 5. 404
Centred, padding-top 120: kicker "FEHLER 404", H1 48px "Seite nicht gefunden", 18px muted "Diese Vorlage gibt es nicht oder nicht mehr.", primary "Zur Vorlagen-Übersicht".

## Components (props = frontmatter fields, Teil B.3)
Source in `components/templates/*.jsx`, contracts in `*.d.ts`, usage in `*.prompt.md`. CSS in `components/components.css` (section "Template gallery").

| Component | Props | Notes |
|---|---|---|
| TemplateCard | title, description, categoryLabel, categoryIcon, preview{src,alt} (tile > master), duration{min,max}, groupSize{min,max}, langNote, href | `--surface-card`, 1px `--border-default`, radius 14; preview padded 10px; body padding `16px 20px 20px`, gap 8; category mono 12px `--text-kicker`; title Titillium 700 19px/1.25; description 15.5px muted, 2-line clamp; meta 13px muted with Clock/Users 15px icons. Hover: border `#e95d11`, title `--text-accent`. Focus: 3px orange outline, offset 3. |
| TemplatePreview | src, alt, icon, label | 16:9, **always `#fff`**, 1px `--preview-border`, radius 10, `object-fit:contain`. Placeholder: category icon (stroke 1.6) + mono 11px label "Vorschau folgt". |
| CategoryChips | categories[{id,label,icon,count}], value, onChange, allLabel, total | Pill: padding `8px 14px`, 1px `--border-strong`, Titillium 600 15px, `--text-secondary`; count mono 12px 75%. Hover: border+text orange. Active: `--chip-active-bg`/`--chip-active-text`. Use `aria-pressed`. |
| SearchField | value, onChange, placeholder | Input padding `15px 16px 15px 46px` (same height as Tabs tray), 1px `--border-input`, radius 8, 15px, bg `--surface-input`; icon 18px at left 16. Focus 2px orange outline offset 1. |
| DownloadPanel | files[{label,name,href}], links[{label,url,type}], locale, selectThreshold=5 | `--surface-soft`, 1px `--border-subtle`, radius 14, padding 26, gap 16. 1 file → primary button with Download icon + mono note "retro-4-step.de.nwb · NeoBoard-Datei". 2–4 → rows (border-top/bottom `--border-default`, padding 14 0; label Titillium 17 bold + mono filename; right "Herunterladen" bold `--link`, hover orange). ≥5 → select (padding `14px 40px 14px 14px`, orange chevron) labelled "Jahr wählen" + button. 0 files → note "Diese Vorlage wird mit einem Generator erstellt." + primary button to generator (ExternalLink). Further generator links: bold `--link` with ExternalLink 16; source/docs: 14px muted with FileText. |
| MetaList | items[{label,value}] | `dl` 2 columns, gap `18px 24px`; dt mono 11.5px `.08em` uppercase muted; dd Titillium 600 17px. Skips empty values. |
| ImportSteps | steps[{title,description}] | neoboard.io dark card grid: 2px gaps showing `rgba(255,255,255,.12)`, radius 12, cells `#321b20` padding 28; number mono 12px `#f2895a` "01"; H3 20px; text 15.5px 68% white. |
| Icon | name, size, strokeWidth | Lucide (PascalCase names). **Substitution** — neoboard.io has no icon set. Self-host (e.g. `lucide-static` SVGs inlined at build); no CDN at runtime. |

Reused neoboard.io components: Button (primary orange `#e95d11`, 16px bold, padding `15px 28px`, radius 9; hover white bg + red text), Tabs (tray `--surface-tray` padding 5 radius 10; Titillium 700 15px, padding `11px 20px`, radius 7; active dark chip / cream in dark mode), Notice legal (`--surface-soft`, 4px orange left border, radius 8, padding `14px 18px`, 14px), Kicker, SiteHeader, SiteFooter.

## Interactions & behaviour
- Filter, search and sort are client-side over the build-time list (small island or vanilla script); count uses `aria-live="polite"`. Search matches title, description and category label, case-insensitive.
- Language fallback per slug: requested language > English > other (`lib/templates.ts` in the concept). Cards show the pill "Nur auf Englisch"/"Nur auf Deutsch"; detail shows the legal Notice.
- Frame thumbnails switch the main preview (gallery images from `gallery[]`). Clicking a preview may open the existing neoboard.io lightbox (backdrop `rgba(20,8,10,.95)`, fade .25s).
- Transitions: colour/border `0.2s ease` only; image change fade `nbfade` 0.4s. No motion beyond that; respect `prefers-reduced-motion`.
- Drafts hidden in production. Keyboard: all cards are links, chips/tabs are buttons, visible orange focus rings.

## Design tokens
Use `tokens.css` (flattened from the design system) as `website/src/styles/tokens.css`. Key values:

| Token | Light | Dark (`[data-theme="dark"]`) |
|---|---|---|
| `--surface-page` | `#ffffff` | `#231215` |
| `--surface-card` | `#ffffff` | `#321b20` |
| `--surface-soft` | `#fcf9f5` | `#3a2227` |
| `--surface-tray` | `#f6f4f2` | `#3a2227` |
| `--surface-input` | `#ffffff` | `#2a161a` |
| `--text-body` / `--text-heading` | `#321b20` | `#fcf9f5` |
| `--text-muted` | `#6b5f5c` | `rgba(252,249,245,.7)` |
| `--text-secondary` | `#4c3e41` | `rgba(252,249,245,.82)` |
| `--text-accent` / `--text-kicker` / `--link` | `#aa1922` | `#f2895a` |
| `--link-hover` | `#e95d11` | `#fcf9f5` |
| `--border-subtle` / `default` / `strong` / `input` | dark 8 / 12 / 20 / 25 % | white 8 / 12 / 22 / 25 % |
| `--preview-border` | `rgba(50,27,32,.1)` | `rgba(255,255,255,.18)` |
| `--chip-active-bg` / `-text` | `#321b20` / `#fff` | `#fcf9f5` / `#321b20` |

Brand constants: dark `#321b20`, red `#aa1922`, orange `#e95d11`, orange-light `#f2895a`, cream `#fcf9f5`, hero `#4a0a10`. Fonts: Titillium Web (400/600/700, 700 italic), Roboto (400/500/700), Roboto Mono (400) — self-hosted via `@fontsource`. Radii 7/8/9/10/12/14/16/999. Body line-height 1.55.

## Assets
- `assets/logos/neoboard-logo.png` (light header), `neoboard-logo-white.png` (dark header, footer), `favicon.svg` — from `nordeck/neoboard.io/public/`.
- Category icons (Lucide): agile RefreshCw, brainstorming Lightbulb, workshop Presentation, planning CalendarDays, strategy Target, team-building HeartHandshake, games Puzzle, backgrounds Image, getting-started Rocket. Store as `icon` in `content/categories.yaml`.
- Previews: none exist yet; the placeholder is the intended fallback only in dev (drafts).

## Files
- `ui_kits/templates/index.html` — prototype entry (Gallery.jsx, Detail.jsx, OtherPages.jsx, Shared.jsx)
- `ui_kits/templates/templates.css` — page layouts (exact grid/padding values)
- `ui_kits/templates/i18n.js` — all UI strings DE/EN
- `ui_kits/templates/data.js` — sample data (only slugs/categories/files and retro-4-step are real; other copy is placeholder — use the real `content/templates/*/index.*.md`)
- `components/templates/*` — component references with `.d.ts` prop contracts
- `components/components.css` — component CSS incl. dark overrides for reused components
- `tokens.css` — tokens for `website/src/styles/tokens.css`
