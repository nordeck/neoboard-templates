// Copyright 2026 Nordeck IT + Consulting GmbH
// SPDX-License-Identifier: AGPL-3.0-or-later

// Halloween-themed retrospective: keep doing (good pumpkin), stop doing (rotten pumpkin),
// ideas that should take off (broom) and actions brewed in the cauldron.
import { Board, C, renderMethod, textOn } from './lib.mjs';

export const slug = 'halloween-retro';
export const langs = ['de', 'en'];

// Top row: three areas, each with a decoration emoji and a card stack (emoji on the sticky notes).
const AREAS = [
  {
    de: ['🎃 Guter Kürbis', 'Was war süß? Was behalten wir bei?'],
    en: ['🎃 Good pumpkin', 'What was sweet? What do we keep doing?'],
    family: 'Orange',
    decor: ['🎃'],
    card: ['🍫', C('Brown', 2)],
  },
  {
    de: ['🎃 Fauler Kürbis', 'Was ist faul? Womit hören wir auf?'],
    en: ['🎃 Rotten pumpkin', 'What is rotten? What do we stop doing?'],
    family: 'Brown',
    decor: ['🎃', '🪰'],
    card: ['🍅', C('Red', 2)],
  },
  {
    de: ['🧹 Hexenbesen', 'Welche Ideen sollen abheben?'],
    en: ['🧹 Witch’s broom', 'Which ideas should take off?'],
    family: 'Violet',
    decor: ['🧹'],
    card: ['💡', C('Violet', 2)],
  },
];

/** Transparent box with an emoji; without textSize NeoBoard scales the emoji to the box. */
function emoji(b, x, y, size, char) {
  b.rect(x, y, size, size, 'transparent', char);
}

export function build(lang) {
  const de = lang === 'de';
  const b = new Board(`${slug}.${lang}`);
  b.templateFrame(de ? 'Halloween-Retro' : 'Halloween Retro');
  emoji(b, 1640, 20, 100, '🕸️');
  emoji(b, 1770, 20, 100, '🦇');
  b.rect(40, 160, 1840, 70, C('Amber', 1), de ? 'Wir blicken zurück auf: …' : 'Looking back on: …', {
    textSize: 30,
    textBold: true,
    textAlignment: 'left',
  });

  const cw = 584;
  const gap = 44;
  const top = 250;
  const areaTop = top + 160;
  const areaBottom = 790;
  AREAS.forEach((area, i) => {
    const [heading, question] = area[lang];
    const x = 40 + i * (cw + gap);
    b.rect(x, top, cw, 70, C(area.family, 4), heading, { textSize: 32, textBold: true, textColor: textOn(area.family) });
    b.label(x, top + 75, cw, 80, question, 24, { bold: true, align: 'center' });
    b.rect(x, areaTop, cw, areaBottom - areaTop, C(area.family, 1), '', { borderRadius: 12 });
    area.decor.forEach((char, k) => emoji(b, x + 20 + k * 120, areaBottom - 150 + k * 50, 130 - k * 50, char));
    const [card, fill] = area.card;
    for (let k = 1; k >= 0; k--) b.sticky(x + cw - 170 - k * 12, areaBottom - 170 - k * 12, 140, 140, fill, card);
  });

  // Bottom row: the cauldron collects concrete actions.
  const rowTop = 810;
  const rowBottom = 1050;
  b.rect(40, rowTop, 400, 70, C('Green', 4), de ? '🧪 Hexenkessel' : '🧪 Cauldron', { textSize: 32, textBold: true, textColor: textOn('Green') });
  b.label(40, rowTop + 80, 400, rowBottom - rowTop - 80, de ? 'Was brauen wir als Nächstes?\nWer? Bis wann?' : 'What do we brew next?\nWho? By when?', 24, {
    bold: true,
    align: 'center',
  });
  b.rect(460, rowTop, 1420, rowBottom - rowTop, C('Green', 1), '', { borderRadius: 12 });
  for (let k = 1; k >= 0; k--) b.sticky(1880 - 160 - k * 12, rowBottom - 150 - k * 12, 120, 120, C('Green', 2), '📜');

  const method = de
    ? {
        title: 'Halloween-Retro: Der Ablauf in 5 Schritten',
        purposeLabel: 'Wofür',
        purpose: 'Eine Retrospektive mit Gruselfaktor: Was war süß, was ist faul, welche Ideen sollen abheben, und was brauen wir als Nächstes?',
        steps: [
          ['1. Einstimmen (5 Min.)', [
            ['Aktion', 'Tragen Sie oben den Zeitraum ein. Kurze Runde: Als welche Halloween-Figur kommst du heute in die Retro?'],
            ['Regel', 'Offen, wertschätzend, ohne Schuldzuweisung.'],
          ]],
          ['2. Sammeln (10 Min., in Stille)', [
            ['Aktion', 'Jeder kopiert Karten von den Stapeln: Schokoriegel 🍫 in den guten Kürbis, faule Tomaten 🍅 in den faulen Kürbis, Ideen 💡 auf den Hexenbesen.'],
            ['Regel', 'Ein Gedanke pro Karte.'],
          ]],
          ['3. Vorstellen und clustern (15 Min.)', [
            ['Aktion', 'Reihum stellt jeder seine Karten kurz vor. Ähnliches wird zusammengeschoben.'],
          ]],
          ['4. Priorisieren (5 Min.)', [
            ['Aktion', 'Dot-Voting auf Tomaten und Ideen, z. B. 3 Punkte pro Person.'],
          ]],
          ['5. Brauen (15 Min.)', [
            ['Aktion', 'Für die Top-Themen kommen Rezeptkarten 📜 in den Hexenkessel: Was, wer, bis wann?'],
            ['Ziel', '1–3 Maßnahmen, die bis zur nächsten Retro wirklich umgesetzt sind.'],
          ]],
        ],
        roleTitle: 'Ihre Rolle als Moderation',
        role: [
          ['Spukmeister', 'Sorgen Sie für Spaß, ohne dass ernste Themen untergehen.'],
          ['Zeitwächter', 'Reservieren Sie genug Zeit für den Hexenkessel.'],
          ['Nachhalter', 'Starten Sie die nächste Retro mit einem Blick in den Kessel.'],
        ],
      }
    : {
        title: 'Halloween Retro: How it works in 5 steps',
        purposeLabel: 'Purpose',
        purpose: 'A spooky retrospective: what was sweet, what is rotten, which ideas should take off, and what do we brew next?',
        steps: [
          ['1. Set the stage (5 min)', [
            ['Action', 'Write the period at the top. Quick round: which Halloween character are you today?'],
            ['Rule', 'Open, respectful, no blame.'],
          ]],
          ['2. Collect (10 min, silent)', [
            ['Action', 'Everyone copies cards from the stacks: chocolate bars 🍫 into the good pumpkin, rotten tomatoes 🍅 into the rotten pumpkin, ideas 💡 onto the witch’s broom.'],
            ['Rule', 'One thought per card.'],
          ]],
          ['3. Present and cluster (15 min)', [
            ['Action', 'Each person briefly presents their cards. Group similar cards.'],
          ]],
          ['4. Prioritise (5 min)', [
            ['Action', 'Dot-vote the tomatoes and ideas, e.g. 3 dots each.'],
          ]],
          ['5. Brew (15 min)', [
            ['Action', 'For the top topics, put recipe cards 📜 into the cauldron: what, who, by when?'],
            ['Goal', '1–3 actions that are actually done before the next retro.'],
          ]],
        ],
        roleTitle: 'Your role as facilitator',
        role: [
          ['Spook master', 'Keep it fun without losing the serious topics.'],
          ['Timekeeper', 'Save enough time for the cauldron.'],
          ['Follow-up', 'Start the next retro by looking into the cauldron.'],
        ],
      };
  b.methodFrame(de ? 'Methodenbeschreibung' : 'Facilitation guide', renderMethod(method, { markdown: false }));

  const meta = {
    title: de ? 'Halloween-Retro' : 'Halloween Retro',
    description: de
      ? 'Retrospektive mit Gruselfaktor: Schokoriegel in den guten Kürbis, faule Tomaten in den faulen, Ideen auf den Hexenbesen und Maßnahmen in den Hexenkessel.'
      : 'A spooky retrospective: chocolate bars into the good pumpkin, rotten tomatoes into the rotten one, ideas onto the broom and actions into the cauldron.',
    category: 'agile',
    tags: ['retrospective', 'seasonal', 'fun'],
    features: de
      ? ['Beibehalten, aufhören, ausprobieren und umsetzen', 'Kartenstapel mit Halloween-Symbolen', 'Führt zu Maßnahmen mit Verantwortlichen']
      : ['Keep, stop, try and act', 'Card stacks with Halloween symbols', 'Leads to actions with owners'],
    duration: [45, 60],
    groupSize: [3, 12],
    published: '2026-10-20',
    alt: de
      ? 'Halloween-Retro-Board mit gutem Kürbis, faulem Kürbis, Hexenbesen und Hexenkessel'
      : 'Halloween retro board with a good pumpkin, a rotten pumpkin, a witch’s broom and a cauldron',
  };
  return { board: b, method, meta };
}
