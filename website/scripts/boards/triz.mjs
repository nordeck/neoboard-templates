// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Method: "Making Space with TRIZ" from Liberating Structures (Lipmanowicz/McCandless, CC BY-SA 4.0),
// described in our own words with attribution.
import { Board, C, renderMethod, textOn } from './lib.mjs';

export const slug = 'triz';
export const langs = ['de', 'en'];

const COLUMNS = [
  { de: ['1 · Maximal scheitern', 'Was müssten wir tun, um unser Ziel garantiert zu verfehlen?'], en: ['1 · Fail completely', 'What would we have to do to be sure we miss our goal?'], family: 'Red' },
  { de: ['2 · Ehrlich prüfen', 'Was davon tun wir heute schon, bewusst oder unbewusst?'], en: ['2 · Check honestly', 'Which of these are we already doing, knowingly or not?'], family: 'Amber' },
  { de: ['3 · Stoppen', 'Wie hören wir damit auf? Was ist der erste Schritt?'], en: ['3 · Stop it', 'How do we stop doing it? What is the first step?'], family: 'Green' },
];

export function build(lang) {
  const de = lang === 'de';
  const b = new Board(`${slug}.${lang}`);
  b.templateFrame(de ? 'TRIZ: Vom Scheitern lernen' : 'TRIZ: Learn from Failure');
  b.rect(40, 160, 1840, 80, C('Amber', 1), de ? 'Unser Ziel: …' : 'Our goal: …', { textSize: 34, textBold: true, textAlignment: 'left' });

  const cw = 584;
  const gap = 44;
  const top = 260;
  COLUMNS.forEach((col, i) => {
    const [heading, question] = col[lang];
    const x = 40 + i * (cw + gap);
    b.rect(x, top, cw, 80, C(col.family, 4), heading, { textSize: 34, textBold: true, textColor: textOn(col.family) });
    b.label(x, top + 85, cw, 90, question, 24, { bold: true, align: 'center' });
    b.rect(x, top + 185, cw, 1050 - (top + 185), C(col.family, 1), '', { borderRadius: 12 });
    for (let k = 0; k < 2; k++) b.sticky(x + cw - 180 - k * 12, 1050 - 180 - k * 12, 150, 150, C(col.family, 2));
    if (i < COLUMNS.length - 1) b.line(x + cw + 6, top + 40, x + cw + gap - 6, top + 40, C('Blue Grey', 6), { arrow: true });
  });

  const method = de
    ? {
        title: 'TRIZ: Der Ablauf in 3 Schritten',
        purposeLabel: 'Wofür',
        purpose: 'Mit einem Augenzwinkern aufdecken, was den Erfolg heute schon bremst, und es gezielt beenden.',
        steps: [
          ['1. Maximal scheitern (10 Min.)', [
            ['Aktion', 'Tragen Sie das Ziel oben ein. Kleingruppen sammeln alles, was das Ziel garantiert scheitern ließe.'],
            ['Regel', 'Übertreiben ist erwünscht. Je absurder, desto besser.'],
          ]],
          ['2. Ehrlich prüfen (10 Min.)', [
            ['Aktion', 'Gehen Sie die Liste durch: Was davon passiert heute schon, auch nur ein bisschen? Diese Notizen wandern in Spalte 2.'],
            ['Tipp', 'Hier wird es ernst. Sorgen Sie für eine offene, wertschätzende Atmosphäre.'],
          ]],
          ['3. Stoppen (10 Min.)', [
            ['Aktion', 'Legen Sie für jede Notiz in Spalte 2 fest, wie Sie damit aufhören, und den ersten konkreten Schritt.'],
            ['Ziel', 'Wenige, klare Stopp-Vereinbarungen mit verantwortlicher Person.'],
          ]],
        ],
        roleTitle: 'Ihre Rolle als Moderation',
        role: [
          ['Spielleitung', 'Laden Sie in Schritt 1 ausdrücklich zum Übertreiben ein.'],
          ['Brückenbauer', 'Führen Sie behutsam vom Lachen zur ehrlichen Selbstprüfung.'],
        ],
        source: 'Nach „Making Space with TRIZ“ von Henri Lipmanowicz und Keith McCandless, Liberating Structures (liberatingstructures.com, CC BY-SA 4.0). Eigene Beschreibung.',
      }
    : {
        title: 'TRIZ: How it works in 3 steps',
        purposeLabel: 'Purpose',
        purpose: 'Uncover, with a wink, what is already holding success back today, and stop it deliberately.',
        steps: [
          ['1. Fail completely (10 min)', [
            ['Action', 'Write the goal at the top. Small groups collect everything that would make the goal fail for certain.'],
            ['Rule', 'Exaggeration is welcome. The more absurd, the better.'],
          ]],
          ['2. Check honestly (10 min)', [
            ['Action', 'Go through the list: which of these already happen today, even a little? Move those notes to column 2.'],
            ['Tip', 'This is where it gets serious. Keep the atmosphere open and respectful.'],
          ]],
          ['3. Stop it (10 min)', [
            ['Action', 'For each note in column 2, decide how to stop it and the first concrete step.'],
            ['Goal', 'A few clear agreements on what to stop, each with an owner.'],
          ]],
        ],
        roleTitle: 'Your role as facilitator',
        role: [
          ['Game master', 'Explicitly invite exaggeration in step 1.'],
          ['Bridge builder', 'Guide gently from laughter to honest self-reflection.'],
        ],
        source: 'Based on "Making Space with TRIZ" by Henri Lipmanowicz and Keith McCandless, Liberating Structures (liberatingstructures.com, CC BY-SA 4.0). Own description.',
      };
  b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));

  const meta = {
    title: de ? 'TRIZ: Vom Scheitern lernen' : 'TRIZ: Learn from Failure',
    description: de
      ? 'In drei Schritten zum Neustart: maximal scheitern, ehrlich prüfen, was davon schon passiert, und gezielt damit aufhören.'
      : 'Three steps to a fresh start: fail completely, check honestly what already happens, and stop it deliberately.',
    category: 'brainstorming',
    tags: ['liberating-structures', 'problem-solving', 'creativity'],
    features: de
      ? ['Drei Spalten mit Leitfragen', 'Feld für das gemeinsame Ziel', 'Haftnotizen je Spalte zum Kopieren']
      : ['Three columns with guiding questions', 'Box for the shared goal', 'Sticky notes per column to copy'],
    duration: [25, 40],
    groupSize: [3, 20],
    published: '2026-10-20',
    alt: de
      ? 'TRIZ-Board mit Zielfeld und drei Spalten Maximal scheitern, Ehrlich prüfen und Stoppen'
      : 'TRIZ board with a goal box and three columns fail completely, check honestly and stop it',
    link: { label: 'Liberating Structures: Making Space with TRIZ', url: 'https://www.liberatingstructures.com/6-making-space-with-triz/' },
  };
  return { board: b, method, meta };
}
