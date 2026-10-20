# NeoBoard Templates

Ready-to-use templates for [NeoBoard](https://neoboard.io), the end-to-end encrypted collaborative whiteboard for Matrix ([source](https://github.com/nordeck/matrix-neoboard)).

## Using a template

1. Pick a template folder in [`content/templates/`](content/templates/) and download its `.nwb` file.
2. In NeoBoard, open a board with infinite canvas and use **Import** to load the file.

All templates use the `net.nordeck.whiteboard@v2` format (infinite canvas with frames).

## Repository layout

| Folder | Content |
|---|---|
| `content/templates/<slug>/` | Published templates: `index.<lang>.md` (metadata and description), `.nwb` boards, PNG previews |
| `content/categories.yaml` | Category registry with English and German labels |
| `staging/` | Templates in preparation, not published (see [staging/README.md](staging/README.md)) |
| `website/` | Template gallery website (Astro), published at <https://nordeck.github.io/neoboard-templates/> |
| `docs/design/` | Design handoff for the gallery (tokens, component references, prototype) |

Content and website code are strictly separated: authors only touch `content/` and `staging/`.

## Website

The gallery is a static Astro site in `website/`. Content is read from `../content` at build time; boards are copied to `/boards/<slug>/` for download, preview images are converted to AVIF/WebP in several sizes.

```bash
cd website
npm ci
npm run dev        # sync boards and start the dev server (drafts are visible)
npm run validate   # content checks only
npm run build      # validate, sync boards, build to dist/ (drafts are hidden)
npm run preview    # serve dist/
```

Normalize a captured frame to a 1920×1080 preview master (optional 1280×720 tile):

```bash
npm run normalize-preview -- screenshot.png ../content/templates/<slug>/preview.de.png
```

### Embedding in neoboard.io

neoboard.io builds this gallery as part of its own deployment and serves it at `/de/vorlagen/` and `/en/templates/`. Build settings come from environment variables:

| Variable | Default (GitHub Pages) | neoboard.io |
|---|---|---|
| `GALLERY_SITE` | `https://nordeck.github.io` | `https://neoboard.io` |
| `GALLERY_BASE` | `/neoboard-templates` | `/` |
| `GALLERY_THEME` | `dark` | `light` |

From `website/dist/`, the host copies only `de/vorlagen/`, `en/templates/`, `boards/`, `_astro/` and `templates-assets/`. The root `index.html`, `de/`/`en/` redirects and `404.html` are for the standalone site only.

Pull requests that touch `content/` or `website/` are built and validated by GitHub Actions; `main` is deployed to GitHub Pages.

## Contributing a template

1. Create `content/templates/<your-slug>/` (kebab-case).
2. Add your board as `<your-slug>.<lang>.nwb` (format `@v2`, at least one frame).
3. Add `index.<lang>.md` following an existing template, plus a 1920×1080 PNG preview `preview.<lang>.png`.
4. Open a pull request. The CI validates schema, boards and preview sizes.

## License

[AGPL-3.0-or-later](LICENSE) for templates, content and code, unless stated otherwise.
Third-party assets: the chess pieces in `content/templates/chess/` are CC0 by Ajay Karat | Devil's Work.shop.
