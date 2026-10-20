function DetailPage({ lang, t, slug, go }) {
  const { TemplatePreview, DownloadPanel, MetaList, ImportSteps, Kicker, Notice, Icon } = window.NeoBoardDesignSystem_65bada;
  const all = window.nbTemplates(lang);
  const x = all.find((i) => i.slug === slug);
  const c = window.nbCategory(x.category);
  const [frame, setFrame] = React.useState(0);
  React.useEffect(() => setFrame(0), [slug]);
  const gal = routePath(lang, "gallery"), catHref = routePath(lang, "category", c.id);
  const related = all.filter((i) => i.category === x.category && i.slug !== x.slug).slice(0, 3);
  const meta = [
    { label: t.duration, value: window.nbRange(x.duration, t.min) },
    { label: t.groupSize, value: window.nbRange(x.groupSize, t.people) },
    { label: t.frames, value: x.frames > 1 ? String(x.frames) : null },
    { label: t.authors, value: x.authors.map((a) => a.name).join(", ") },
    { label: t.license, value: "AGPL-3.0-or-later" },
    { label: t.published, value: window.nbDate(x.published, lang) },
  ];
  return (
    <main data-screen-label="Detail">
      <div className="wrap">
        <nav className="tg-crumbs" aria-label="Breadcrumb"><a href={gal} onClick={go(gal)}>{t.kicker}</a><span>/</span><a href={catHref} onClick={go(catHref)}>{c.label[lang]}</a></nav>
        <div className="tg-head">
          <div>
            <div className="tg-stage"><TemplatePreview alt={x.previewAlt} icon={c.icon} label={x.frames > 1 ? t.previewPending + " · " + t.frame(frame + 1, x.frames) : t.previewPending} iconSize={48} /></div>
            {x.frames > 1 && (
              <div className="tg-thumbs">
                {Array.from({ length: x.frames }).map((_, i) => (
                  <button key={i} type="button" className={i === frame ? "active" : ""} aria-label={t.frame(i + 1, x.frames)} aria-pressed={i === frame} onClick={() => setFrame(i)}>
                    <TemplatePreview icon={c.icon} label={String(i + 1)} iconSize={16} />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="tg-info">
            <div>
              <a href={catHref} onClick={go(catHref)} className="nb-kicker" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Icon name={c.icon} size={14} />{c.label[lang]}</a>
              <h1>{x.title}</h1>
            </div>
            <p className="desc">{x.description}</p>
            {x.isFallback && <Notice variant="legal">{t.onlyInLong[x.lang]}</Notice>}
            <DownloadPanel locale={lang} files={x.files} links={x.links} selectLabel={t.selectLabel} />
            <MetaList items={meta} />
          </div>
        </div>
        <section className="tg-method">
          <div className="side"><Kicker>{t.methodKicker}</Kicker><h2 className="nb-title">{x.body ? t.method : t.glance}</h2></div>
          <div className="tg-glance">
            {x.body && <h3>{t.glance}</h3>}
            <ul>{x.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {x.body && <Prose md={x.body} />}
          </div>
        </section>
      </div>
      <section className="tg-import"><div className="wrap">
        <Kicker onDark>{t.importKicker}</Kicker><h2 className="nb-title">{t.importTitle}</h2>
        <ImportSteps steps={t.steps} />
      </div></section>
      {related.length > 0 && (
        <section className="wrap tg-related">
          <Kicker>{t.relatedKicker(c.label[lang])}</Kicker><h2 className="nb-title">{t.related}</h2>
          <div className="tg-grid">{related.map((r) => <Card key={r.slug} item={r} lang={lang} t={t} go={go} />)}</div>
        </section>
      )}
      <SubmitCta lang={lang} t={t} go={go} />
    </main>
  );
}
window.DetailPage = DetailPage;
