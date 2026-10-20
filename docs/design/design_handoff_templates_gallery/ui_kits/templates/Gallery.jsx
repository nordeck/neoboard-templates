function GalleryPage({ lang, t, go, filter, setFilter, lockedCat }) {
  const { CategoryChips, SearchField, Tabs, Button, Kicker, Icon } = window.NeoBoardDesignSystem_65bada;
  const all = window.nbTemplates(lang);
  const cat = lockedCat || filter.cat;
  const q = filter.q.trim().toLowerCase();
  const catLabel = (id) => window.nbCategory(id).label[lang];
  let items = all.filter((x) => (!cat || x.category === cat) && (!q || (x.title + " " + x.description + " " + catLabel(x.category)).toLowerCase().includes(q)));
  if (filter.sort === 1) items = [...items].sort((a, b) => a.title.localeCompare(b.title, lang));
  const counts = window.NB_CATEGORIES.map((c) => ({ id: c.id, label: c.label[lang], icon: c.icon, count: all.filter((x) => x.category === c.id).length }));
  const showFeatured = !lockedCat && !cat && !q;
  const lc = lockedCat && window.nbCategory(lockedCat);
  return (
    <main data-screen-label={lockedCat ? "Category" : "Gallery"}>
      <section className="tg-intro"><div className="wrap">
        {lc ? (<React.Fragment>
          <a className="back" href={routePath(lang, "gallery")} onClick={go(routePath(lang, "gallery"))}><Icon name="ArrowLeft" size={14} />{t.back}</a>
          <div className="cat-row"><span className="cat-ico"><Icon name={lc.icon} size={26} /></span><div><Kicker onDark>{t.catKicker}</Kicker><h1 style={{ margin: "6px 0 0" }}>{lc.label[lang]}</h1></div></div>
          <p style={{ marginTop: 18 }}>{lc.desc[lang]}</p>
        </React.Fragment>) : (<React.Fragment>
          <Kicker onDark>{t.kicker}</Kicker><h1>{t.title}</h1><p>{t.lead}</p>
        </React.Fragment>)}
      </div></section>
      {showFeatured && (
        <section className="wrap tg-section">
          <Kicker>{t.featured}</Kicker>
          <div className="tg-featured">{all.filter((x) => x.featured).slice(0, 3).map((x) => <Card key={x.slug} item={x} lang={lang} t={t} go={go} />)}</div>
        </section>
      )}
      <section className="wrap tg-section">
        <div className="tg-toolbar">
          <SearchField value={filter.q} onChange={(v) => setFilter({ ...filter, q: v })} placeholder={t.search} />
          <Tabs tabs={[t.sortNew, t.sortAz]} value={filter.sort} onChange={(v) => setFilter({ ...filter, sort: v })} />
        </div>
        {!lockedCat && <CategoryChips categories={counts} value={filter.cat} onChange={(v) => setFilter({ ...filter, cat: v })} allLabel={t.all} total={all.length} />}
        <span className="tg-count" aria-live="polite">{t.count(items.length)}</span>
        {items.length ? <div className="tg-grid">{items.map((x) => <Card key={x.slug} item={x} lang={lang} t={t} go={go} />)}</div> : (
          <div className="tg-empty">
            <Icon name="SearchX" size={36} strokeWidth={1.6} />
            <h3>{t.emptyTitle}</h3>
            <p>{lockedCat && !q ? t.catEmpty : t.emptyBody}</p>
            <Button onClick={() => setFilter({ q: "", cat: null, sort: filter.sort })} href={lockedCat && !q ? routePath(lang, "gallery") : undefined}>{lockedCat && !q ? t.back : t.reset}</Button>
          </div>
        )}
      </section>
      <SubmitCta lang={lang} t={t} go={go} />
    </main>
  );
}
function SubmitCta({ lang, t, go }) {
  const { Button } = window.NeoBoardDesignSystem_65bada;
  const href = routePath(lang, "submit");
  return (
    <section className="tg-cta"><div className="wrap">
      <div><h2>{t.submitCtaTitle}</h2><p>{t.submitCtaLead}</p></div>
      <Button href={href} onClick={go(href)}>{t.submitCta}</Button>
    </div></section>
  );
}
Object.assign(window, { GalleryPage, SubmitCta });
