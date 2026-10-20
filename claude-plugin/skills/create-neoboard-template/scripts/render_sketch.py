#!/usr/bin/env python3
# Copyright 2026 Nordeck IT + Consulting GmbH
# SPDX-License-Identifier: AGPL-3.0-or-later
"""Rough SVG sketch of a NeoBoard .nwb file for layout checks.

Draws frames, shapes, lines and text. It does not wrap text or draw arrowheads
(NeoBoard does), so use it to judge overlaps, spacing, colours and empty areas.

Usage: render_sketch.py <board.nwb> <out.svg>
"""
import html
import json
import sys


def main(src, dst):
    with open(src, encoding="utf-8") as fh:
        els = json.load(fh)["whiteboard"]["slides"][0]["elements"]
    frames = [e for e in els if e["type"] == "frame"]
    if not frames:
        sys.exit("no frame found")
    x0 = min(f["position"]["x"] for f in frames) - 20
    y0 = min(f["position"]["y"] for f in frames) - 20
    x1 = max(f["position"]["x"] + f["width"] for f in frames) + 20
    y1 = max(f["position"]["y"] + f["height"] for f in frames) + 20
    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}" '
        f'width="{(x1 - x0) // 2}" height="{(y1 - y0) // 2}" '
        'style="background:#ddd;font-family:Inter,Arial,sans-serif">'
    ]
    for e in els:
        x, y = e["position"]["x"], e["position"]["y"]
        if e["type"] == "frame":
            out.append(f'<rect x="{x}" y="{y}" width="{e["width"]}" height="{e["height"]}" fill="#fff"/>')
        elif e["type"] == "path":
            pts = " ".join(f'{x + p["x"]},{y + p["y"]}' for p in e["points"])
            out.append(f'<polyline points="{pts}" stroke="{e["strokeColor"]}" stroke-width="4" fill="none"/>')
        elif e["type"] == "shape":
            w, h = e["width"], e["height"]
            fill = "none" if e["fillColor"] == "transparent" else e["fillColor"]
            if e["kind"] in ("circle", "ellipse"):
                out.append(f'<ellipse cx="{x + w / 2}" cy="{y + h / 2}" rx="{w / 2}" ry="{h / 2}" fill="{fill}"/>')
            elif e["kind"] == "triangle":
                out.append(f'<polygon points="{x + w / 2},{y} {x + w},{y + h} {x},{y + h}" fill="{fill}"/>')
            else:
                stroke = "#999" if e.get("stickyNote") else "none"
                out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{e.get("borderRadius", 0)}" fill="{fill}" stroke="{stroke}"/>')
            if e.get("text"):
                size = e.get("textSize", 24)
                anchor = {"left": "start", "right": "end"}.get(e.get("textAlignment", "center"), "middle")
                tx = x + 10 if anchor == "start" else (x + w - 10 if anchor == "end" else x + w / 2)
                lines = e["text"].split("\n")
                if anchor == "start" and len(lines) > 3:
                    ty = y + size
                else:
                    ty = y + h / 2 - (len(lines) - 1) * size * 0.6 + size * 0.35
                weight = "bold" if e.get("textBold") else "normal"
                for i, line in enumerate(lines):
                    out.append(
                        f'<text x="{tx}" y="{ty + i * size * 1.2}" font-size="{size}" text-anchor="{anchor}" '
                        f'fill="{e.get("textColor", "#000")}" font-weight="{weight}">{html.escape(line)}</text>'
                    )
        elif e["type"] == "image":
            out.append(f'<rect x="{x}" y="{y}" width="{e["width"]}" height="{e["height"]}" fill="#bbb"/>')
    out.append("</svg>")
    with open(dst, "w", encoding="utf-8") as fh:
        fh.write("\n".join(out))
    print(f"{dst}: {len(els)} elements, {len(frames)} frame(s)")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
