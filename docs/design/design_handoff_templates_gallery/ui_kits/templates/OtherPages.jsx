function SubmitPage({ lang, t }) {
  const { ImportSteps, Notice, Button, Icon } = window.NeoBoardDesignSystem_65bada;
  return (
    <main data-screen-label="Submit">
      <div className="tg-page-hero"><div className="wrap"><h1>{t.submitTitle}</h1></div></div>
      <div className="tg-narrow">
        <p className="lead">{t.submitIntro}</p>
        <ImportSteps steps={t.submitSteps} />
        <Notice variant="legal">{t.submitLicense}</Notice>
        <div className="actions">
          <Button href="https://github.com/nordeck/neoboard-templates" target="_blank" rel="noopener noreferrer">{t.submitGithub}</Button>
          <a className="mail" href="mailto:info@nordeck.net"><Icon name="Mail" size={18} />{t.submitMail}</a>
        </div>
      </div>
    </main>
  );
}
function NotFoundPage({ lang, t, go }) {
  const { Kicker, Button } = window.NeoBoardDesignSystem_65bada;
  const href = routePath(lang, "gallery");
  return (
    <main data-screen-label="404" className="tg-404">
      <Kicker>{t.nfKicker}</Kicker><h1>{t.nfTitle}</h1><p>{t.nfBody}</p>
      <Button href={href} onClick={go(href)}>{t.nfCta}</Button>
    </main>
  );
}
Object.assign(window, { SubmitPage, NotFoundPage });
