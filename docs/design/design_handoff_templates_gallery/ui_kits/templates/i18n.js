window.NB_I18N = {
  de: {
    base: "vorlagen", kicker: "VORLAGEN", title: "NeoBoard-Vorlagen", lead: "Vorlage herunterladen und in NeoBoard importieren.",
    featured: "EMPFOHLEN", all: "Alle", search: "Vorlagen durchsuchen", sortNew: "Neu", sortAz: "A–Z", count: (n) => n === 1 ? "1 VORLAGE" : n + " VORLAGEN",
    emptyTitle: "Keine Vorlagen gefunden", emptyBody: "Passen Sie die Suche an oder wählen Sie eine andere Kategorie.", reset: "Filter zurücksetzen",
    min: "Min.", people: "Personen", onlyIn: { en: "Nur auf Englisch", de: "Nur auf Deutsch" }, onlyInLong: { en: "Diese Vorlage gibt es nur auf Englisch.", de: "Diese Vorlage gibt es nur auf Deutsch." },
    previewPending: "Vorschau folgt", frame: (i, n) => "Rahmen " + i + " von " + n, frames: "Rahmen",
    duration: "Dauer", groupSize: "Gruppengröße", authors: "Autor:innen", license: "Lizenz", published: "Veröffentlicht", category: "Kategorie",
    glance: "Auf einen Blick", methodKicker: "METHODE", method: "Methodenbeschreibung", selectLabel: "Jahr wählen",
    importKicker: "IMPORT", importTitle: "In drei Schritten zum Board",
    steps: [
      { title: "Herunterladen", description: "Laden Sie die .nwb-Datei der Vorlage auf Ihren Rechner." },
      { title: "Importieren", description: "Öffnen Sie ein Board in NeoBoard, wählen Sie „Importieren“ und bestätigen Sie den Dialog „Inhalt importieren“." },
      { title: "Loslegen", description: "Passen Sie die Vorlage an und arbeiten Sie gemeinsam daran – in Echtzeit oder asynchron." },
    ],
    relatedKicker: (c) => "MEHR AUS " + c.toUpperCase(), related: "Verwandte Vorlagen", back: "Alle Vorlagen",
    catKicker: "KATEGORIE", catEmpty: "In dieser Kategorie gibt es noch keine Vorlagen.",
    submitCtaTitle: "Eigene Vorlage teilen?", submitCtaLead: "Reichen Sie Ihr Board ein, damit andere es nutzen können.", submitCta: "Vorlage einreichen",
    submitTitle: "Vorlage einreichen", submitIntro: "Sie haben ein Board, das anderen helfen könnte? Reichen Sie es als Vorlage ein. Wir prüfen es und veröffentlichen es in der Galerie.",
    submitSteps: [
      { title: "Board vorbereiten", description: "Ein Rahmen pro Seite, möglichst 1920 × 1080, ohne persönliche Daten." },
      { title: "Beschreibung ergänzen", description: "Titel, Kurzbeschreibung, Kategorie und eine Methodenbeschreibung, die erklärt, wie man mit der Vorlage arbeitet." },
      { title: "Einreichen", description: "Als Pull Request auf GitHub oder per E-Mail mit der .nwb-Datei im Anhang." },
    ],
    submitLicense: "Eingereichte Vorlagen werden unter der Lizenz AGPL-3.0-or-later veröffentlicht.", submitGithub: "Auf GitHub einreichen", submitMail: "Per E-Mail senden",
    nfKicker: "FEHLER 404", nfTitle: "Seite nicht gefunden", nfBody: "Diese Vorlage gibt es nicht oder nicht mehr.", nfCta: "Zur Vorlagen-Übersicht",
    footer: { developedBy: "Entwickelt von", legalNotice: "Impressum", contact: "Kontakt", privacy: "Datenschutzerklärung" },
  },
  en: {
    base: "templates", kicker: "TEMPLATES", title: "NeoBoard templates", lead: "Download a template and import it into NeoBoard.",
    featured: "FEATURED", all: "All", search: "Search templates", sortNew: "Newest", sortAz: "A–Z", count: (n) => n === 1 ? "1 TEMPLATE" : n + " TEMPLATES",
    emptyTitle: "No templates found", emptyBody: "Try a different search or choose another category.", reset: "Reset filters",
    min: "min", people: "people", onlyIn: { en: "English only", de: "German only" }, onlyInLong: { en: "This template is only available in English.", de: "This template is only available in German." },
    previewPending: "Preview pending", frame: (i, n) => "Frame " + i + " of " + n, frames: "Frames",
    duration: "Duration", groupSize: "Group size", authors: "Authors", license: "Licence", published: "Published", category: "Category",
    glance: "At a glance", methodKicker: "METHOD", method: "Method description", selectLabel: "Choose year",
    importKicker: "IMPORT", importTitle: "Three steps to your board",
    steps: [
      { title: "Download", description: "Save the template's .nwb file to your computer." },
      { title: "Import", description: "Open a board in NeoBoard, choose \"Import\" and confirm the \"Import content\" dialog." },
      { title: "Get started", description: "Adapt the template and work on it together – in real time or asynchronously." },
    ],
    relatedKicker: (c) => "MORE IN " + c.toUpperCase(), related: "Related templates", back: "All templates",
    catKicker: "CATEGORY", catEmpty: "There are no templates in this category yet.",
    submitCtaTitle: "Want to share your own template?", submitCtaLead: "Submit your board so others can use it.", submitCta: "Submit a template",
    submitTitle: "Submit a template", submitIntro: "Do you have a board that could help others? Submit it as a template. We review it and publish it in the gallery.",
    submitSteps: [
      { title: "Prepare the board", description: "One frame per page, ideally 1920 × 1080, without personal data." },
      { title: "Add a description", description: "Title, short description, category and a method description that explains how to work with the template." },
      { title: "Submit", description: "As a pull request on GitHub or by email with the .nwb file attached." },
    ],
    submitLicense: "Submitted templates are published under the AGPL-3.0-or-later licence.", submitGithub: "Submit on GitHub", submitMail: "Send by email",
    nfKicker: "ERROR 404", nfTitle: "Page not found", nfBody: "This template does not exist or is no longer available.", nfCta: "Back to all templates",
    footer: { developedBy: "Developed by", legalNotice: "Legal notice", contact: "Contact", privacy: "Privacy policy" },
  },
};

// One entry per slug: requested language > English > any other (mirrors website/src/lib/templates.ts).
window.nbTemplates = (lang) => window.NB_TEMPLATES.map((t) => {
  const l = t.langs.includes(lang) ? lang : t.langs.includes("en") ? "en" : t.langs[0];
  const pick = (o) => o && (o[l] ?? o[t.langs[0]]);
  return {
    slug: t.slug, category: t.category, lang: l, isFallback: l !== lang, featured: !!t.featured, published: t.published,
    title: pick(t.title), description: pick(t.description), features: pick(t.features) || [], body: pick(t.body),
    files: (pick(t.files) || []).map((f) => ({ name: f.name, label: typeof f.label === "string" ? f.label : f.label[l] })),
    links: (t.links || []).map((k) => ({ type: k.type, url: k.url, label: k.label[l] || k.label.en })),
    previewAlt: t.preview && t.preview.alt && t.preview.alt[l], frames: t.frames || 0,
    duration: t.duration, groupSize: t.groupSize, authors: t.authors,
  };
}).sort((a, b) => b.published.localeCompare(a.published));

window.nbCategory = (id) => window.NB_CATEGORIES.find((c) => c.id === id);
window.nbRange = (r, unit) => r ? (r.min === r.max ? r.min : r.min + "–" + r.max) + " " + unit : null;
window.nbDate = (iso, lang) => new Date(iso + "T12:00:00").toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
