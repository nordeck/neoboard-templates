---
layout: post
type: advent-calendar-door
title: "Door 3: TypeScript types with Zod"
date: 2024-12-03 00:00:00 +0200
lastmod: 2024-12-04 15:20:00 +0200
lang: en
categories: tech
tags: [NeoBoard Advent Calendar]
---

With today's code, you can perform a basic validation of generated and loaded NeoBoards. It uses the library Zod which can parse `unknown` values in TypeScript.

Watch out that this type is slightly incomplete and, additionally, may become outdated when new versions of NeoBoard get released. It's still a good starting point and able to parse most current NeoBoards.

```ts
import z from 'zod';

export const zPoint = z.object({
  x: z.number(),
  y: z.number(),
});

export const zWhiteboard = z.object({
  version: z.literal('net.nordeck.whiteboard@v1'),
  whiteboard: z.object({
    files: z.array(z.object({
      mxc: z.string(),
      data: z.string(),
    })).optional(),
    slides: z.array(z.object({
      elements: z.array(z.discriminatedUnion('type', [
        z.object({
          type: z.literal('shape'),
          kind: z.enum(['rectangle', 'circle', 'ellipse', 'triangle']),
          position: zPoint,
          width: z.number(),
          height: z.number(),
          fillColor: z.string(),
          strokeColor: z.string().optional(),
          strokeWidth: z.number().min(0).optional(),
          borderRadius: z.number().optional(),
          text: z.string(),
          textAlignment: z.enum(['left', 'center', 'right']).optional(),
          textColor: z.string().optional(),
          textBold: z.boolean().optional(),
          textItalic: z.boolean().optional(),
        }),
        z.object({
          type: z.literal('path'),
          kind: z.enum(['line', 'polyline']),
          position: zPoint,
          points: z.array(zPoint),
          strokeColor: z.string(),
          endMarker: z.enum(['arrow-head-line']).optional(),
        }),
        z.object({
          type: z.literal('image'),
          mxc: z.string(),
          fileName: z.string(),
          mimeType: z.enum(['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml']).optional(),
          position: zPoint,
          width: z.number().min(0),
          height: z.number().min(0),
        }),
      ])),
    })),
  }),
});
```

And this is how to use it in NodeJS, Bun and Deno:

```ts
import fs from 'node:fs';

// Beware, these may throw errors
const whiteboard = JSON.parse(fs.readFileSync('my-template.nwb', 'utf8'));
const safeWhiteboard = zWhiteboard.parse(whiteboard);

console.log(safeWhiteboard);
```
