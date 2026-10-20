---
name: create-neoboard-template
description: Create a new NeoBoard whiteboard template (.nwb board, German/English metadata, method description, preview images) in the nordeck/neoboard-templates repository and publish it in the template gallery on neoboard.io (/de/vorlagen/, /en/templates/). Use this skill whenever someone wants to add, build, design or publish a NeoBoard template or "Vorlage" – a retro, check-in, workshop board, game, background, canvas or any method board – even if they only say "mach daraus eine Vorlage", "put this on the template page", "neue Vorlage für die Galerie", or name a method (e.g. Lean Coffee, TRIZ, Halloween retro) to turn into a board. Also use it to change an existing generated template, to re-capture its previews, or to take a draft template live.
---

# Create and publish a NeoBoard template

A template goes through five stages. Each ends in a state that can be reviewed, so the work can pause between them:

1. **Clarify** what the board is for and which facts the metadata needs.
2. **Generate** the board from a script definition and create the Markdown metadata → draft.
3. **Check** the layout (sketch, build, dev server) and open a pull request as a draft template.
4. **Capture previews** on demo.neoboard.io and publish (remove `draft`).
5. **Merge and verify** that it is live on neoboard.io.

Talk to the person in their language (usually German, with correct umlauts). Repository files, code comments and commit messages are English; German UI text in boards and Markdown keeps its umlauts.

## How the pieces fit together

- **Repository** `nordeck/neoboard-templates` (public). Content in `content/templates/<slug>/`, website code in `website/`. Its `CLAUDE.md` holds the hard rules; read it at the start of every session, it wins over this skill if they disagree.
- **Boards are generated, never hand-edited.** Each generated template has a definition `website/scripts/boards/<slug>.mjs` built on `lib.mjs` (palette, house style, validation, deterministic IDs). `npm run generate:boards -- <slug>` writes the `.nwb` files; `npm run validate` fails if a committed board differs from its definition. This is why layout fixes always go into the definition.
- **Gallery**: Astro site in `website/`, published twice from `main`: GitHub Pages (`nordeck.github.io/neoboard-templates`, on every merge) and neoboard.io (`/de/vorlagen/`, built into neoboard.io's hourly deploy). Templates with `draft: true` are only visible in the dev server.
- A template without a preview image must stay a draft (the schema enforces it).

## Stage 1 – Clarify

Ask only for what you cannot sensibly propose yourself. Propose defaults and let the person correct them:

| Field | Notes |
|---|---|
| Purpose and method | What happens on the board, in which steps? This becomes the method description (board frame + Markdown body). |
| Languages | Default German and English. One language is allowed; the other gallery shows it with a "only in German/English" notice. |
| Slug | kebab-case English, e.g. `halloween-retro`. Becomes URL and file names. Check it does not exist yet. |
| Title, description | Per language. Title 3–80 characters, description 20–200. |
| Category | One ID from `content/categories.yaml` (agile, brainstorming, workshop, planning, strategy, team-building, games, backgrounds, getting-started). |
| Duration, group size | Ranges in minutes / people, same in all languages. |
| Authors | Default "Nordeck IT + Consulting GmbH". `published`: today. Every author must agree to CC0 (see below). |
| Source and licence | If the method or texts come from elsewhere, see "Licensing" below before writing anything. |

### Licensing

Templates are published under **CC0 1.0** (public domain, `license: CC0-1.0`, the default): anyone may use, change and share them without conditions. The website code stays AGPL-3.0-or-later, which is why board definitions (code) carry an AGPL header while the generated boards and texts are CC0.

CC0 means giving up all rights, so it needs the consent of **everyone who contributed** to the board or its texts:

- Boards and texts by Nordeck or by people who agreed to CC0: fine.
- Someone else's board, graphics or text: only with their explicit consent to CC0; note it in the pull request. Without consent it does not go into the repository. (The only exception is `year-calendar`, which stays AGPL until its author agrees – do not add new AGPL templates.)
- Third-party methods (e.g. Liberating Structures, CC BY-SA): the method itself is free to use, their wording is not. Describe the method **in your own words**, never copy text or graphics, and add attribution in the method text ("Based on … by …. Own description.") plus a `links` entry of `type: source`. Check the source's current licence on its website rather than trusting a statement like "it's CC".
- Images inside a board must be CC0-compatible too (own work, or explicitly CC0/public domain).

Tell the person when a licence question needs a human decision. No real personal data on boards (names, dates, notes); fictional placeholders are fine.

## Stage 2 – Generate the board

Work in a **separate git worktree** from up-to-date `origin/main`, not in an existing clone: other sessions may be working in it with uncommitted files, and switching branches there drags their changes along.

```bash
cd <neoboard-templates clone>
git fetch origin
git worktree add -b template/<slug> ../neoboard-templates-<slug> origin/main
cd ../neoboard-templates-<slug>/website && npm ci
```

Then:

1. Write `website/scripts/boards/<slug>.mjs`. Read `references/board-definition.md` first: it explains the `lib.mjs` API, the house style (title bar, method frame, 1920×1080 template frame), layout and colour rules, and contains a complete annotated example. Copy the structure of the closest existing definition in `website/scripts/boards/`.
2. Generate boards and metadata (the `--md` flag only creates missing `index.<lang>.md` files; it never overwrites):
   ```bash
   npm run generate:boards -- <slug> --md
   ```
3. Review the generated `index.<lang>.md` against `references/frontmatter.md`. The new files are drafts with a commented `# preview: pending screenshot` block; leave that until stage 4.

Several frames per template are allowed when the method has distinct phases that people present one after another; one frame is better when the overview *is* the method (most retros and canvases).

## Stage 3 – Check and open a draft pull request

1. **Sketch**: render each board and look at it before anyone imports it:
   ```bash
   python3 <skill-dir>/scripts/render_sketch.py ../content/templates/<slug>/<slug>.de.nwb /tmp/<slug>.de.svg
   ```
   Open the SVG in a browser or convert it to PNG (headless Chrome `--screenshot`). The sketch does not wrap text or draw arrowheads – NeoBoard does – so judge overlaps, spacing, contrast and empty areas, not line breaks.
2. **Build**: `npm run build` must pass (content validation, `generate-boards --check`, schema). Fix problems in the definition, regenerate, rebuild.
3. **Dev server**: `npm run dev`, then share `http://localhost:4321/neoboard-templates/de/vorlagen/<slug>/` (drafts are visible there).
4. Commit (English message), push the branch, open a pull request against `main` that says the template is a draft until previews exist. Ask before pushing if the person has not already asked you to.

## Stage 4 – Capture previews and publish

Previews are what people see in the gallery, so they come from the real NeoBoard rendering: import the board on demo.neoboard.io, show the template frame in presentation mode with the UI hidden, screenshot it. Follow `references/capture-previews.md` – it has the tested selectors, the base64 import of the local file, timing limits and pitfalls.

This needs a connected browser (Claude in Chrome) and a person logged in to demo.neoboard.io; never log in yourself. If no browser is available in this session, write the person a prompt for a session that has one, based on the same reference file (it includes a prompt skeleton).

Then, in the worktree:

```bash
npm run normalize-preview -- <screenshot> ../content/templates/<slug>/preview.<lang>.png
```

In each `index.<lang>.md`: replace the commented preview block with a real one (same `src` and `alt`), remove `draft: true` and the `# draft reason` line. `npm run build` must pass; `git status` should show only the PNGs and Markdown files. Commit and push to the same pull request.

## Stage 5 – Merge and verify

Merging publishes, and nobody else reviews it – so merge only after the person has looked at the result (dev server or pull request) and said so. Wait for the checks first (`gh pr checks <n> --watch`), then `gh pr merge <n> --merge --delete-branch`.

After the merge:
- GitHub Pages deploys within ~3 minutes: `https://nordeck.github.io/neoboard-templates/de/vorlagen/<slug>/`
- neoboard.io deploys within a few minutes: the merge starts its deploy (workflow `Trigger neoboard.io deploy`, its summary links the run). If that run was skipped (no token) or failed, run `gh workflow run deploy.yml -R nordeck/neoboard.io`, then `gh run watch`; otherwise the hourly deploy picks it up.
- Verify with `curl -s -o /dev/null -w '%{http_code}' https://neoboard.io/de/vorlagen/<slug>/` (200), and the board download under `/boards/<slug>/<slug>.<lang>.nwb`.

Finally remove the worktree (`git worktree remove ../neoboard-templates-<slug>`) and tell the person the live links.

## Changing an existing template

Same stages, shorter: edit the definition, `npm run generate:boards -- <slug>`, check, and – because the board changed visibly – re-capture the previews (stage 4) in the same pull request, otherwise the gallery shows the old board. Never edit `.nwb` files of generated templates directly; the validation would reject them. Older templates without a definition (migrated boards) are changed with a small one-off script that edits the JSON by element ID, keeps every other element byte-identical and is checked by `npm run validate`.

## Things that went wrong before

- Working in a clone another session was using: its uncommitted previews ended up on the wrong branch. Use a worktree.
- `git add` of a whole folder picked up macOS duplicates like `file 2.ts`. Add files explicitly and look at `git status` before committing.
- Board previews that still showed fixed typos and personal notes went live because the board was fixed but the previews were not re-captured.
- White text on light palette colours (Light Green, Orange, Yellow level 4) is unreadable; use `textOn(family)`.
- Pull requests in neoboard.io and neoboard-templates can depend on each other; say which one has to be merged first.
