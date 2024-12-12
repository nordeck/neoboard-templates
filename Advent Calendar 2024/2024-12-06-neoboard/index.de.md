---
layout: post
type: advent-calendar-door
title: "Tür 6: NeoBoards mit TypeScript erstellen #1"
date: 2024-12-06 00:00:00 +0200
lang: de
categories: advent-calendar-door
tags: [NeoBoard Adventskalender]
---

Frohen Nikolaustag!

Heute wollen wir was leichtes Programmieren. Der folgende TypeScript-Code erstellt ein NeoBoard. Es kann mit Bun oder Deno ausgeführt werden.

```ts
const neoboard = {
    version: 'net.nordeck.whiteboard@v1',
    whiteboard: {
        slides: [
            {
                elements: [
                    {
                        position: { x: 0, y: 100 },
                        type: 'shape',
                        kind: 'rectangle',
                        fillColor: '#dddddd',
                        width: 1920,
                        height: 80,
                        text: "Überschrift",
                    },
                ],
            },
        ],
    }
};

// Wandle das NeoBoard in JSON um und gib es auf der Konsole aus
console.log(JSON.stringify(neoboard));
```

Das Skript genertiert eine Folie mit einem grauen Rechteck. Im Rechteck steht "Überschrift" und dessen Breite von 1920 Pixeln bedeutet, dass es die gesamte Breite der Folie einnimmt. Folien sind 1920 Pixel breit und 1080 Pixel hoch.

![](./example1.png)
