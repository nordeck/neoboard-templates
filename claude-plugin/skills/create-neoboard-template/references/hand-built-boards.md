# Taking over a hand-built board

For boards someone designed by hand in NeoBoard (stage 2b of the skill). Worked out with the Halloween retro in October 2026: four 1920×1080 frames side by side, four embedded background images, custom fonts. NeoBoard's UI may change; if a selector no longer matches, look at the page and adapt.

## 1. Look at the board

Open the link in the connected browser (the person must be logged in). Read the frames before doing anything else:

```js
[...document.querySelectorAll('[data-testid^="element-frame-"]')].map((e) => {
  const r = e.querySelector('rect');
  return [e.dataset.testid, r.getAttribute('x'), r.getAttribute('y'), r.getAttribute('width'), r.getAttribute('height')];
});
```

- **Frames**: template frames should be 1920×1080. Note their order. In presentation mode the frames of the Halloween board (side by side in one row) came left to right.
- **Texts**: read every text on every frame (presentation view, screenshot per frame). Typos and real names or dates have to be fixed in the board before export and capture.
- **Images and fonts**: images show up as `<image>` elements with `blob:` URLs; in the export they are embedded. Ask who made them; they must be CC0-compatible.

## 2. Fix texts in the board (only with the person's OK)

This changes their board, so ask first and change nothing else.

1. Go to the frame (presentation mode, „Nächster Rahmen“) – the editing toolbar stays available there.
2. Double-click the text element. `document.activeElement` is then a `contenteditable` DIV; check its `innerText`.
3. Move with the keyboard (`cmd+ArrowDown` to the end, `ArrowLeft` × n) and delete or type only what needs changing. Retyping the whole text loses line breaks and formatting.
4. `Escape` leaves editing. Reload the board and check the text again; only then re-capture.

## 3. Export

Settings (gear, `aria-label="Einstellungen"`) → menu item „Exportieren…“ → dialog „Inhalt exportieren“ → format „NeoBoard-Datei (.nwb)“ (default is PDF) → „Herunterladen“. The file lands in the browser's download folder as `<board title>.nwb`.

Downloading needs the person's OK. Copy the download into its own scratch folder before looking at it, and check:

```python
d = json.load(open(path, encoding='utf-8'))
assert d['version'] == 'net.nordeck.whiteboard@v2'
slides = d['whiteboard']['slides']; assert len(slides) == 1
els = slides[0]['elements']
frames = [e for e in els if e['type'] == 'frame']        # at least one
images = [e for e in els if e['type'] == 'image']        # each has an mxc URL …
files = d['whiteboard'].get('files', [])                 # … and its data embedded here
```

The Halloween export was 0.9 MB because of the four images. That is fine for the repository, but too big for the base64 import (see `capture-previews.md`, „Large boards“).

## 4. Template files

```
content/templates/<slug>/
  <slug>.<lang>.nwb      # the export, with the method frame added (step 5)
  index.<lang>.md        # written by hand from frontmatter.md (no generator, so no --md)
  preview.<lang>.png     # step 6
```

There is no definition in `website/scripts/boards/`, so `generate:boards --check` does not cover this board. `npm run validate` still checks format, frames and frontmatter.

## 5. Method frame

Write the method as JSON (the `method` object of `renderMethod()` in `lib.mjs`, see `board-definition.md` section 6):

```json
{
  "heading": "Facilitation guide",
  "method": {
    "title": "Halloween Retro: How it works in 4 phases",
    "purposeLabel": "Purpose",
    "purpose": "…",
    "steps": [["1. Stop doing (10 min)", [["Action", "…"], ["Rule", "…"]]], …],
    "roleTitle": "Your role as facilitator",
    "role": [["Guide", "…"], …]
  }
}
```

German boards use `"heading": "Methodenbeschreibung"`, `purposeLabel` „Wofür“, `roleTitle` „Ihre Rolle als Moderation“. Then:

```bash
node <skill-dir>/scripts/add_method_frame.mjs <repo-root> <export.nwb> <method.json> \
  content/templates/<slug>/<slug>.<lang>.nwb --md content/templates/<slug>/index.<lang>.md
```

- Adds a 1800×1260 frame 120 px right of the rightmost frame, top-aligned, with the Blue Grey heading bar and the method text (28 px), and rewrites the Markdown body below the frontmatter from the same method. Board text and Markdown therefore always match.
- Keeps all existing elements unchanged and refuses a board that already contains the heading.
- New element IDs are seeded from the output file name, so the same export and method give the same file.

Import the resulting file once into a fresh board (step 6 of `capture-previews.md`, „Layout check“) and look at the method frame: the text must fit; shorten it if it does not.

## 6. Previews

Capture as described in `capture-previews.md`. With several template frames, ask what the preview should show:

- **All phases in one image** (good when the phases are the point, as in the Halloween retro): capture every template frame, then
  ```bash
  node <skill-dir>/scripts/compose_frames.mjs website /tmp/neoboard-previews/<slug>.grid.png f1.png f2.png f3.png f4.png
  npm run normalize-preview -- /tmp/neoboard-previews/<slug>.grid.png ../content/templates/<slug>/preview.<lang>.png
  ```
- **First frame as preview, the others as gallery images** on the detail page: normalize each frame to its own 1920×1080 PNG and list them under `gallery` (see `frontmatter.md`).

Never include the method frame in a preview.
