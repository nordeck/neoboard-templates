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
| `website/` | Template gallery website (Astro), added separately |

Content and website code are strictly separated: authors only touch `content/` and `staging/`.

## Contributing a template

1. Create `content/templates/<your-slug>/` (kebab-case).
2. Add your board as `<your-slug>.<lang>.nwb` (format `@v2`, at least one frame).
3. Add `index.<lang>.md` following an existing template, plus a 1920×1080 PNG preview `preview.<lang>.png`.
4. Open a pull request. The CI validates schema, boards and preview sizes.

## License

[AGPL-3.0-or-later](LICENSE) for templates, content and code, unless stated otherwise.
Third-party assets: the chess pieces in `content/templates/chess/` are CC0 by Ajay Karat | Devil's Work.shop.
