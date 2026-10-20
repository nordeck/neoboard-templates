const NBK = window.NeoBoardDesignSystem_65bada;
// Hash routes mirror the real URLs: /de/vorlagen/, /de/vorlagen/<slug>/, /de/vorlagen/kategorie/<id>/, /de/vorlagen/einreichen/
const SEG = { de: { cat: "kategorie", submit: "einreichen" }, en: { cat: "category", submit: "submit" } };
function routePath(lang, page, arg) {
  const b = "#/" + lang + "/" + window.NB_I18N[lang].base + "/";
  if (page === "detail") return b + arg + "/";
  if (page === "category") return b + SEG[lang].cat + "/" + arg + "/";
  if (page === "submit") return b + SEG[lang].submit + "/";
  if (page === "404") return "#/" + lang + "/404/";
  return b;
}
function parseRoute(hash) {
  const p = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const lang = p[0] === "en" ? "en" : "de";
  if (!p.length) return { lang: "de", page: "gallery" };
  if (p[1] !== window.NB_I18N[lang].base) return { lang, page: "404" };
  if (!p[2]) return { lang, page: "gallery" };
  if (p[2] === SEG[lang].cat) return window.nbCategory(p[3]) ? { lang, page: "category", arg: p[3] } : { lang, page: "404" };
  if (p[2] === SEG[lang].submit) return { lang, page: "submit" };
  return window.NB_TEMPLATES.some((t) => t.slug === p[2]) ? { lang, page: "detail", arg: p[2] } : { lang, page: "404" };
}
function Card({ item, lang, t, go }) {
  const c = window.nbCategory(item.category);
  const href = routePath(lang, "detail", item.slug);
  return <NBK.TemplateCard title={item.title} description={item.description} categoryLabel={c.label[lang]} categoryIcon={c.icon}
    previewLabel={t.previewPending} preview={{ alt: item.previewAlt }} duration={item.duration} groupSize={item.groupSize}
    durationUnit={t.min} groupUnit={t.people} langNote={item.isFallback ? t.onlyIn[item.lang] : null} href={href} onClick={go(href)} />;
}
function Prose({ md }) {
  const inline = (s) => s.split(/(\*\*[^*]+\*\*)/).map((x, i) => x.startsWith("**") ? <strong key={i}>{x.slice(2, -2)}</strong> : x);
  const out = []; let list = null;
  md.split("\n").forEach((raw, i) => {
    const l = raw.trim();
    const ol = l.match(/^\d+\.\s+(.*)/), ul = l.match(/^[-*]\s+(.*)/);
    if (ol || ul) { const type = ol ? "ol" : "ul"; if (!list || list.type !== type) { list = { type, items: [] }; out.push(list); } list.items.push((ol || ul)[1]); return; }
    list = null;
    if (!l) return;
    if (l.startsWith("### ")) out.push(<h3 key={i}>{inline(l.slice(4))}</h3>);
    else if (l.startsWith("## ")) out.push(<h2 key={i}>{inline(l.slice(3))}</h2>);
    else out.push(<p key={i}>{inline(l)}</p>);
  });
  return <div className="tg-prose">{out.map((b, i) => b.type === "ol" || b.type === "ul" ? React.createElement(b.type, { key: "l" + i }, b.items.map((x, j) => <li key={j}>{inline(x)}</li>)) : b)}</div>;
}
Object.assign(window, { routePath, parseRoute, Card, Prose });
