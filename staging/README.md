# Staging: templates in preparation

Boards in this folder are **not published**. Each file holds three frames:

1. **Template** – the actual template frame.
2. **Method description** (blue-grey title) – facilitation guide. Stays in the template permanently and is also copied into the Markdown body.
3. **Metadata grid** (orange title) – only used while preparing the template. Columns: field, suggestion, entry. A ✓ in *entry* accepts the suggestion, any text overrides it, empty means open. Field keys in square brackets (e.g. `[category]`) map to the frontmatter schema.

File names follow `T<id>_<slug>[-<variant>].<lang>.nwb`. The ID (T01–T27) appears in the grid title and links board, file and the later `index.<lang>.md`.

## Promotion to `content/`

1. Fill in the grid in NeoBoard and export the board as `.nwb`.
2. Read the grid, write `content/templates/<slug>/index.<lang>.md`.
3. Remove the metadata frame and its elements from the board, save it as `content/templates/<slug>/<slug>[-<variant>].<lang>.nwb`.
4. Capture the preview (see preview spec), run `npm run validate`, delete the staging file.
