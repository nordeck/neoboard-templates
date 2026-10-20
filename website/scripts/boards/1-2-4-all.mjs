// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Method: "1-2-4-All" from Liberating Structures (Lipmanowicz/McCandless, CC BY-SA 4.0),
// described in our own words with attribution.
import { Board, C, renderMethod, textOn } from './lib.mjs';

export const slug = '1-2-4-all';
export const langs = ['de', 'en'];

const COLUMNS = [
  { de: ['1 · Allein · 1 Min.', 'Still nachdenken, eigene Ideen notieren.'], en: ['1 · Alone · 1 min', 'Reflect in silence, note your own ideas.'], family: 'Light Blue' },
  { de: ['2 · Zu zweit · 2 Min.', 'Ideen austauschen und weiterentwickeln.'], en: ['2 · Pairs · 2 min', 'Share ideas and build on them.'], family: 'Green-Teal' },
  { de: ['4 · Zu viert · 4 Min.', 'Gemeinsamkeiten und Unterschiede finden.'], en: ['4 · Foursomes · 4 min', 'Find what is similar and what differs.'], family: 'Light Green' },
  { de: ['Alle · 5 Min.', 'Jede Gruppe teilt ihre wichtigste Idee.'], en: ['All · 5 min', 'Each group shares its most important idea.'], family: 'Orange' },
];

export function build(lang) {
  const de = lang === 'de';
  const b = new Board(`${slug}.${lang}`);
  b.templateFrame(de ? '1-2-4-Alle' : '1-2-4-All');
  b.rect(40, 160, 1840, 80, C('Amber', 1), de ? 'Leitfrage: …' : 'Question: …', { textSize: 34, textBold: true, textAlignment: 'left' });
  b.line(40, 262, 1880, 262, C('Blue Grey', 4), { arrow: true });

  const cw = 445;
  const gap = 20;
  const top = 285;
  const areaY = top + 165;
  const areaH = 1050 - areaY;
  COLUMNS.forEach((col, i) => {
    const [heading, text] = col[lang];
    const x = 40 + i * (cw + gap);
    const fill = C(col.family, 1);
    const ink = C(col.family, 6);
    b.rect(x, top, cw, 80, C(col.family, 4), heading, { textSize: 30, textBold: true, textColor: textOn(col.family) });
    b.label(x, top + 85, cw, 70, text, 22, { align: 'center', color: C('Grey', 7) });
    if (i === 0) {
      const bw = Math.floor((cw - 10) / 2);
      const bh = Math.floor((areaH - 30) / 4);
      for (let k = 0; k < 8; k++) {
        b.rect(x + (k % 2) * (bw + 10), areaY + Math.floor(k / 2) * (bh + 10), bw, bh, fill, `Person ${k + 1}`, { textSize: 20, textColor: ink });
      }
    } else if (i === 1) {
      const bh = Math.floor((areaH - 30) / 4);
      for (let k = 0; k < 4; k++) {
        const name = `${de ? 'Paar' : 'Pair'} ${String.fromCharCode(65 + k)}`;
        b.rect(x, areaY + k * (bh + 10), cw, bh, fill, name, { textSize: 22, textColor: ink });
      }
    } else if (i === 2) {
      const bh = Math.floor((areaH - 10) / 2);
      for (let k = 0; k < 2; k++) {
        const name = `${de ? 'Gruppe' : 'Group'} ${String.fromCharCode(65 + k)}`;
        b.rect(x, areaY + k * (bh + 10), cw, bh, fill, name, { textSize: 24, textColor: ink });
      }
    } else {
      b.rect(x, areaY, cw, areaH, fill, de ? 'Ergebnisse der ganzen Gruppe' : 'Results of the whole group', { textSize: 26, textColor: ink });
    }
  });

  const method = de
    ? {
        title: '1-2-4-Alle: Der Ablauf in 4 Schritten',
        purposeLabel: 'Wofür',
        purpose: 'Alle Stimmen einbeziehen und in kurzer Zeit von vielen Einzelideen zu wenigen starken Ideen kommen.',
        steps: [
          ['1. Allein (1 Min.)', [['Aktion', 'Stellen Sie die Leitfrage. Jede Person denkt still nach und notiert Ideen in ihrem Feld.']]],
          ['2. Zu zweit (2 Min.)', [['Aktion', 'Paare tauschen ihre Ideen aus und entwickeln sie im Paar-Feld weiter.']]],
          ['3. Zu viert (4 Min.)', [['Aktion', 'Zwei Paare bilden eine Vierergruppe. Was ist ähnlich, was unterscheidet sich? Wählen Sie die stärkste Idee.']]],
          ['4. Alle (5 Min.)', [
            ['Aktion', 'Jede Gruppe stellt ihre wichtigste Idee vor und legt sie ins Ergebnisfeld.'],
            ['Regel', 'Nur neue Ideen nennen, Doppeltes überspringen.'],
          ]],
        ],
        roleTitle: 'Ihre Rolle als Moderation',
        role: [
          ['Taktgeber', 'Halten Sie die kurzen Zeiten konsequent ein.'],
          ['Gruppengröße', 'Bei mehr als acht Personen den Rahmen duplizieren.'],
        ],
        source: 'Nach „1-2-4-All“ von Henri Lipmanowicz und Keith McCandless, Liberating Structures (liberatingstructures.com, CC BY-SA 4.0). Eigene Beschreibung.',
      }
    : {
        title: '1-2-4-All: How it works in 4 steps',
        purposeLabel: 'Purpose',
        purpose: 'Include every voice and get from many individual ideas to a few strong ones in a short time.',
        steps: [
          ['1. Alone (1 min)', [['Action', 'Ask the question. Everyone reflects in silence and notes ideas in their own box.']]],
          ['2. Pairs (2 min)', [['Action', 'Pairs share their ideas and develop them further in their pair box.']]],
          ['3. Foursomes (4 min)', [['Action', 'Two pairs form a foursome. What is similar, what differs? Choose the strongest idea.']]],
          ['4. All (5 min)', [
            ['Action', 'Each group presents its most important idea and places it in the results area.'],
            ['Rule', 'Only share new ideas, skip duplicates.'],
          ]],
        ],
        roleTitle: 'Your role as facilitator',
        role: [
          ['Pacemaker', 'Stick to the short time boxes.'],
          ['Group size', 'With more than eight people, duplicate the frame.'],
        ],
        source: 'Based on "1-2-4-All" by Henri Lipmanowicz and Keith McCandless, Liberating Structures (liberatingstructures.com, CC BY-SA 4.0). Own description.',
      };
  b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));

  const meta = {
    title: de ? '1-2-4-Alle' : '1-2-4-All',
    description: de
      ? 'Von der stillen Einzelarbeit über Paare und Vierergruppen zur ganzen Gruppe, mit eigenen Arbeitsbereichen je Stufe.'
      : 'From silent individual work via pairs and foursomes to the whole group, with work areas for each stage.',
    category: 'workshop',
    tags: ['liberating-structures', 'ideation', 'participation'],
    features: de
      ? ['Vier Stufen mit Zeitangabe', 'Arbeitsbereiche für acht Personen, vier Paare und zwei Gruppen', 'Ergebnisfeld für die ganze Gruppe']
      : ['Four stages with time boxes', 'Work areas for eight people, four pairs and two groups', 'Results area for the whole group'],
    duration: [12, 20],
    groupSize: [4, 16],
    published: '2026-10-20',
    alt: de
      ? 'Board mit Leitfrage und vier Spalten Allein, Zu zweit, Zu viert und Alle mit jeweils eigenen Arbeitsbereichen'
      : 'Board with a question and four columns alone, pairs, foursomes and all, each with its own work areas',
    link: { label: 'Liberating Structures: 1-2-4-All', url: 'https://www.liberatingstructures.com/1-1-2-4-all/' },
  };
  return { board: b, method, meta };
}
