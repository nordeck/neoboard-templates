// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Board, C, renderMethod, textOn } from './lib.mjs';

export const slug = 'brainstorming-clusters';
export const langs = ['de', 'en'];

const FAMILIES = ['Yellow', 'Light Green', 'Light Blue', 'Pink', 'Orange', 'Violet'];

export function build(lang) {
  const de = lang === 'de';
  const b = new Board(`${slug}.${lang}`);
  b.templateFrame(de ? 'Brainstorming: Ideen-Cluster' : 'Brainstorming: Idea Clusters');
  b.rect(40, 160, 1840, 90, C('Amber', 1), de ? 'Unsere Frage: …' : 'Our question: …', { textSize: 36, textBold: true, textAlignment: 'left' });
  const w = 600;
  const h = 370;
  FAMILIES.forEach((family, i) => {
    const x = 40 + (i % 3) * (w + 20);
    const y = 270 + Math.floor(i / 3) * (h + 30);
    const letter = String.fromCharCode(65 + i);
    b.rect(x, y, w, h, C(family, 1), '', { borderRadius: 12 });
    b.rect(x, y, w, 60, C(family, 4), de ? `Cluster ${letter}: Thema …` : `Cluster ${letter}: topic …`, {
      textSize: 26,
      textBold: true,
      textAlignment: 'left',
      borderRadius: 12,
      textColor: textOn(family),
    });
    // Pre-coloured sticky notes to copy
    for (let k = 0; k < 2; k++) b.sticky(x + w - 170 - k * 12, y + h - 170 - k * 12, 140, 140, C(family, 2));
  });

  const method = de
    ? {
        title: 'Ideen-Cluster: Der Ablauf in 4 Schritten',
        purposeLabel: 'Wofür',
        purpose: 'Viele Ideen zu einer Frage sammeln und gleich nach Themen ordnen.',
        steps: [
          ['1. Frage festlegen (2 Min.)', [['Aktion', 'Schreiben Sie die Leitfrage in das gelbe Feld oben.']]],
          ['2. Still sammeln (5–10 Min.)', [
            ['Aktion', 'Jede Person schreibt Ideen auf Haftnotizen, eine Idee pro Notiz. Kopieren Sie dazu die Stapel in den Feldern.'],
            ['Regel', 'Menge vor Qualität. Noch nicht bewerten.'],
          ]],
          ['3. Clustern (10–15 Min.)', [
            ['Aktion', 'Ordnen Sie ähnliche Ideen einem Feld zu und geben Sie jedem Cluster eine Überschrift.'],
            ['Tipp', 'Die Farben helfen, Herkunft oder Art der Idee zu erkennen, etwa eine Farbe pro Team.'],
          ]],
          ['4. Gewichten (5 Min.)', [['Aktion', 'Jede Person vergibt drei Punkte an die vielversprechendsten Ideen oder Cluster.']]],
        ],
        roleTitle: 'Ihre Rolle als Moderation',
        role: [
          ['Zeitwächter', 'Halten Sie die Phasen strikt getrennt.'],
          ['Strukturgeber', 'Benennen Sie Cluster gemeinsam mit der Gruppe, nicht für sie.'],
        ],
      }
    : {
        title: 'Idea clusters: How it works in 4 steps',
        purposeLabel: 'Purpose',
        purpose: 'Collect many ideas on one question and sort them by theme right away.',
        steps: [
          ['1. Set the question (2 min)', [['Action', 'Write the guiding question into the yellow box at the top.']]],
          ['2. Collect in silence (5–10 min)', [
            ['Action', 'Everyone writes ideas on sticky notes, one idea per note. Copy the stacks in the clusters.'],
            ['Rule', 'Quantity before quality. No judging yet.'],
          ]],
          ['3. Cluster (10–15 min)', [
            ['Action', 'Move similar ideas into one cluster and give each cluster a heading.'],
            ['Tip', 'Colours help to show where an idea comes from or what kind it is, e.g. one colour per team.'],
          ]],
          ['4. Prioritise (5 min)', [['Action', 'Everyone gives three dots to the most promising ideas or clusters.']]],
        ],
        roleTitle: 'Your role as facilitator',
        role: [
          ['Timekeeper', 'Keep the phases strictly apart.'],
          ['Structurer', 'Name the clusters together with the group, not for it.'],
        ],
      };
  b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));

  const meta = {
    title: de ? 'Brainstorming: Ideen-Cluster' : 'Brainstorming: Idea Clusters',
    description: de
      ? 'Freifläche mit sechs farbigen Clustern und vorbereiteten Haftnotizen: Ideen sammeln, ordnen und gewichten.'
      : 'Open space with six coloured clusters and prepared sticky notes: collect, sort and prioritise ideas.',
    category: 'brainstorming',
    tags: ['brainstorming', 'clustering', 'ideation'],
    features: de
      ? ['Sechs farbige Cluster mit Überschrift', 'Haftnotizen je Farbe zum Kopieren', 'Feld für die Leitfrage']
      : ['Six coloured clusters with headings', 'Sticky notes per colour to copy', 'Box for the guiding question'],
    duration: [30, 60],
    groupSize: [3, 15],
    published: '2026-10-20',
    alt: de
      ? 'Brainstorming-Board mit Leitfrage und sechs farbigen Cluster-Feldern mit Haftnotizen'
      : 'Brainstorming board with a guiding question and six coloured cluster areas with sticky notes',
  };
  return { board: b, method, meta };
}
