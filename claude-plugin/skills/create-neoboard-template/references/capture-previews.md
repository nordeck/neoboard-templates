# Capturing preview images on demo.neoboard.io

Previews show the real NeoBoard rendering of the template frame: imported into a board, shown in presentation mode, NeoBoard UI hidden, cropped to the frame, then normalized to 1920×1080. These steps were worked out and tested on demo.neoboard.io (October 2026); NeoBoard's UI may change, so if a selector no longer matches, look at the page and adapt instead of guessing.

## Requirements

- A connected browser (Claude in Chrome / Claude Code with Chrome integration) and access to the local board files.
- The person is logged in to demo.neoboard.io in that browser. Never log in on their behalf. If changes stop saving ("Änderungen nicht gespeichert", token refresh with status 400), the session expired: stop and ask them to log in again.
- One JavaScript call may run at most ~45 s. Split long steps (create board / wait / set up) into separate calls.

Do a test run with the first board, check the screenshot with the person, then do the rest.

## Per board

1. **Create a board.** Open the dashboard and wait ~8 s (fast successive creations fail on the server side). Click the button whose text is „Neues Board erstellen“ (by text, not coordinates – the dashboard re-sorts). Wait for the new board in a separate call.
2. **Rename it.** Check that the title reads „Unbenannt“ – this check has prevented overwriting an existing board. Click the element with `aria-label="Zum Umbenennen anklicken"`, set the value via the native `value` setter plus an `input` event, confirm „Umbenennen“. Name pattern: `Vorlage · <Titel> (DE|EN)`.
3. **Import the local file.** Boards are small (≈10 KB), so pass the file as base64 inside the page script – no server, no CORS:
   ```js
   // b64: base64 of the local .nwb (`base64 -i <file>`), name: its file name
   const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
   const input = [...document.querySelectorAll('input[type=file]')].find((i) => i.accept.includes('.nwb'));
   const dt = new DataTransfer();
   dt.items.add(new File([bytes], name, { type: 'application/octet-stream' }));
   input.files = dt.files;
   input.dispatchEvent(new Event('change', { bubbles: true }));
   ```
   Confirm „Importieren“ in the dialog „Inhalt importieren“. Check the expected number of frames arrived.
   (Alternative once the branch is pushed: `fetch` the file from `https://raw.githubusercontent.com/nordeck/neoboard-templates/<branch>/content/templates/<slug>/<file>` – CORS is allowed there.)
4. **Presentation view.** Click `aria-label="Präsentation starten"`. Presentation starts at the frame nearest the viewport centre, so click „Vorheriger Rahmen“ until it is disabled – the first frame is the template frame.
5. **Hide the UI.** For each `[role=toolbar]` and its surrounding `.MuiStack-root`: `el.style.setProperty('visibility', 'hidden', 'important')`. Injected `<style>` elements are blocked by the content security policy. Move the mouse to an empty spot of the header so no tooltip shows.
6. **Screenshot.** Crop to `[data-testid="element-frame-<frameId>"]`, inset 3 px (purple presentation border). Save the file locally, e.g. `/tmp/neoboard-previews/<slug>.<lang>.png`.
7. **Check the image**: only the template frame, no toolbar, cursor, tooltip or method frame, texts complete. If NeoBoard wraps or cuts text badly, fix the definition (not the board), regenerate and re-import.
8. At the end, look at the dashboard for leftover empty „Unbenannt“ boards (failed creations can appear late) and report them; delete nothing without asking.

## Image quality

On a 1440×870 display the frame crop is about 1370×900 px and gets upscaled ~1.3× during normalization. A bigger browser window or display gives sharper previews.

## Normalize and wire up

```bash
cd website
npm run normalize-preview -- /tmp/neoboard-previews/<slug>.de.png ../content/templates/<slug>/preview.de.png
# optional card crop for dense boards:
npm run normalize-preview -- <shot> ../content/templates/<slug>/preview.de.png --tile ../content/templates/<slug>/preview-tile.de.png --crop x,y,w,h
```

Then switch the `index.<lang>.md` files from draft to published (see frontmatter reference) and run `npm run build`.

## Prompt skeleton for a session with a browser

When this session has no browser, give the person a prompt like this (fill in the table):

```
Run this in Claude Code with the Chrome integration. Work in <worktree path> (branch <branch>, PR #<n> in nordeck/neoboard-templates); do not touch other clones.

Boards:
| # | Local file | Board name | Target preview | Must be visible |
| 1 | content/templates/<slug>/<slug>.de.nwb | Vorlage · <Titel> (DE) | content/templates/<slug>/preview.de.png | <key texts/areas> |
| 2 | … .en.nwb | Vorlage · <Title> (EN) | … preview.en.png | … |

For each board follow the steps "Per board" from the create-neoboard-template skill (references/capture-previews.md): create, rename, import the local file via base64, presentation view on the first frame, hide toolbars, crop to the frame, check. Test run with board 1 first.

Then: npm run normalize-preview for each screenshot, turn the commented preview blocks into real ones, remove draft: true and the draft reason, npm run build must pass, git status shows only the PNGs and index.*.md. Commit, push to the PR branch, update the PR, report. Do not merge.
```
