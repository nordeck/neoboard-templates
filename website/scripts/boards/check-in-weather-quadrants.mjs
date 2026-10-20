// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

import { BLACK, Board, C, renderMethod } from './lib.mjs';

export const slug = 'check-in-weather-quadrants';
export const langs = ['de', 'en'];

const QUADRANTS = [
  { de: ['☀️ Sonne', 'Voller Energie, ich freue mich auf heute.'], en: ['☀️ Sunny', 'Full of energy, looking forward to today.'], family: 'Yellow', x: 40, y: 250 },
  { de: ['⛅ Wolken', 'Ganz okay, ein paar Gedanken sind noch woanders.'], en: ['⛅ Cloudy', 'Fine, some of my thoughts are still elsewhere.'], family: 'Light Blue', x: 980, y: 250 },
  { de: ['🌧️ Regen', 'Eher müde oder durchwachsen.'], en: ['🌧️ Rainy', 'Rather tired or mixed.'], family: 'Blue Grey', x: 40, y: 610 },
  { de: ['⛈️ Gewitter', 'Es brodelt, mich beschäftigt gerade etwas.'], en: ['⛈️ Stormy', 'Things are rumbling, something is on my mind.'], family: 'Violet', x: 980, y: 610 },
];

export function build(lang) {
  const de = lang === 'de';
  const b = new Board(`${slug}.${lang}`);
  b.templateFrame(de ? 'Check-in: Wetterlage' : 'Check-in: Weather Report');
  b.label(
    40, 160, 1840, 70,
    de ? 'Wie ist Ihre Wetterlage heute? Setzen Sie einen Punkt in das passende Feld.' : "What's your weather today? Place a dot in the matching quadrant.",
    32, { bold: true, align: 'center' },
  );
  for (const q of QUADRANTS) {
    const [title, text] = q[lang];
    b.rect(q.x, q.y, 900, 330, C(q.family, 1));
    b.label(q.x + 30, q.y + 20, 840, 70, title, 44, { bold: true });
    b.label(q.x + 30, q.y + 95, 840, 50, text, 24, { color: C('Grey', 7) });
  }
  // The cross
  b.line(960, 250, 960, 940, C('Blue Grey', 6));
  b.line(40, 595, 1880, 595, C('Blue Grey', 6));
  b.label(40, 965, 300, 80, de ? 'Punkte:' : 'Dots:', 28, { bold: true, color: BLACK });
  for (let i = 0; i < 14; i++) b.shape('circle', 260 + i * 80, 980, 50, 50, C('Deep Orange', 4));

  const method = de
    ? {
        title: 'Check-in Wetterlage: Der Ablauf in 3 Schritten',
        purposeLabel: 'Wofür',
        purpose: 'Ankommen und auf einen Blick sehen, mit welcher Stimmung die Gruppe startet.',
        steps: [
          ['1. Frage stellen (1 Min.)', [['Aktion', 'Lesen Sie die Frage vor und erklären Sie kurz die vier Wetterlagen.']]],
          ['2. Punkte setzen (1–2 Min.)', [
            ['Aktion', 'Jede Person zieht einen Punkt in das Feld, das ihre Lage am besten beschreibt.'],
            ['Regel', 'Ehrlich und spontan. Es gibt kein falsches Wetter.'],
          ]],
          ['3. Kurz würdigen (2–5 Min.)', [
            ['Aktion', 'Beschreiben Sie das Gesamtbild. Wer mag, sagt einen Satz zu seinem Wetter.'],
            ['Tipp', 'Viele Wolken oder Gewitter? Planen Sie Pausen ein oder fragen Sie nach, was helfen würde.'],
          ]],
        ],
        roleTitle: 'Ihre Rolle als Moderation',
        role: [
          ['Gastgeber', 'Gehen Sie mit gutem Beispiel voran und setzen Sie Ihren Punkt zuerst.'],
          ['Schutzraum', 'Niemand muss sein Wetter erklären.'],
        ],
      }
    : {
        title: 'Weather report check-in: How it works in 3 steps',
        purposeLabel: 'Purpose',
        purpose: 'Arrive and see at a glance what mood the group starts in.',
        steps: [
          ['1. Ask the question (1 min)', [['Action', 'Read the question aloud and briefly explain the four kinds of weather.']]],
          ['2. Place dots (1–2 min)', [
            ['Action', 'Everyone drags one dot into the quadrant that best describes how they are.'],
            ['Rule', 'Be honest and spontaneous. There is no wrong weather.'],
          ]],
          ['3. Acknowledge (2–5 min)', [
            ['Action', 'Describe the overall picture. Anyone who wants to says one sentence about their weather.'],
            ['Tip', 'Lots of clouds or storms? Plan breaks or ask what would help.'],
          ]],
        ],
        roleTitle: 'Your role as facilitator',
        role: [
          ['Host', 'Lead by example and place your dot first.'],
          ['Safe space', 'Nobody has to explain their weather.'],
        ],
      };
  b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));

  const meta = {
    title: de ? 'Check-in: Wetterlage' : 'Check-in: Weather Report',
    description: de
      ? 'Einstieg mit vier Wetterlagen von Sonne bis Gewitter: Jede Person setzt einen Punkt in ihr Feld.'
      : 'Check-in with four kinds of weather from sunny to stormy: everyone places a dot in their quadrant.',
    category: 'workshop',
    tags: ['check-in', 'warm-up', 'mood'],
    features: de
      ? ['Vier Felder von Sonne bis Gewitter', 'Vorbereitete Punkte zum Verschieben', 'In wenigen Minuten erledigt']
      : ['Four quadrants from sunny to stormy', 'Prepared dots to drag', 'Done in a few minutes'],
    duration: [5, 10],
    groupSize: [3, 30],
    published: '2026-10-20',
    alt: de
      ? 'Check-in-Board mit vier Feldern Sonne, Wolken, Regen und Gewitter und einer Reihe Punkte'
      : 'Check-in board with four quadrants sunny, cloudy, rainy and stormy and a row of dots',
  };
  return { board: b, method, meta };
}
