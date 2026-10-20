import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";
import { Kicker } from "../core/Kicker.jsx";
const T = {
  de: { kicker: "DOWNLOAD", one: "Vorlage herunterladen", get: "Herunterladen", choose: "Auswahl", gen: "Diese Vorlage wird mit einem Generator erstellt.", file: "NeoBoard-Datei" },
  en: { kicker: "DOWNLOAD", one: "Download template", get: "Download", choose: "Choose", gen: "This template is created with a generator.", file: "NeoBoard file" },
};
export function DownloadPanel({ files = [], links = [], locale = "en", selectThreshold = 5, selectLabel }) {
  const t = T[locale] || T.en;
  const [pick, setPick] = React.useState(0);
  const gens = links.filter((l) => l.type === "generator");
  const others = links.filter((l) => l.type !== "generator");
  return (
    <div className="nb-download">
      <Kicker>{t.kicker}</Kicker>
      {files.length === 1 && (<React.Fragment>
        <Button href={files[0].href || "#"} download={files[0].name}><Icon name="Download" size={18} />{t.one}</Button>
        <p className="file-note">{files[0].name} · {t.file}</p>
      </React.Fragment>)}
      {files.length > 1 && files.length < selectThreshold && (
        <div className="rows">
          {files.map((f) => (
            <a key={f.name} className="row" href={f.href || "#"} download={f.name}>
              <span><b>{f.label}</b><code>{f.name}</code></span>
              <span className="act"><Icon name="Download" size={16} />{t.get}</span>
            </a>
          ))}
        </div>
      )}
      {files.length >= selectThreshold && (<React.Fragment>
        <div className="pick">
          <div><label htmlFor="nb-dl-pick">{selectLabel || t.choose}</label>
            <select id="nb-dl-pick" value={pick} onChange={(e) => setPick(+e.target.value)}>{files.map((f, i) => <option key={f.name} value={i}>{f.label}</option>)}</select></div>
          <Button href={files[pick].href || "#"} download={files[pick].name}><Icon name="Download" size={18} />{t.get}</Button>
        </div>
        <p className="file-note">{files[pick].name} · {t.file}</p>
      </React.Fragment>)}
      {files.length === 0 && gens.length > 0 && (<React.Fragment>
        <p className="note">{t.gen}</p>
        <Button href={gens[0].url} target="_blank" rel="noopener noreferrer"><Icon name="ExternalLink" size={18} />{gens[0].label}</Button>
      </React.Fragment>)}
      {(files.length > 0 ? gens.length : gens.length > 1 || others.length) > 0 && (
        <div className="links">
          {(files.length > 0 ? gens : gens.slice(1)).map((l) => <a key={l.url + l.label} href={l.url} target="_blank" rel="noopener noreferrer"><Icon name="ExternalLink" size={16} />{l.label}</a>)}
          {others.map((l) => <a key={l.url + l.label} className="minor" href={l.url} target="_blank" rel="noopener noreferrer"><Icon name={l.type === "video" ? "PlayCircle" : "FileText"} size={15} />{l.label}</a>)}
        </div>
      )}
    </div>
  );
}
