/* @ds-bundle: {"format":4,"namespace":"NeoBoardDesignSystem_65bada","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"CardGrid","sourcePath":"components/content/CardGrid.jsx"},{"name":"Lightbox","sourcePath":"components/content/Lightbox.jsx"},{"name":"PillarList","sourcePath":"components/content/PillarList.jsx"},{"name":"ScreenshotFrame","sourcePath":"components/content/ScreenshotFrame.jsx"},{"name":"SectionIntro","sourcePath":"components/content/SectionIntro.jsx"},{"name":"VideoPoster","sourcePath":"components/content/VideoPoster.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CopyButton","sourcePath":"components/core/CopyButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"LangSwitch","sourcePath":"components/core/LangSwitch.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Notice","sourcePath":"components/forms/Notice.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"PageHero","sourcePath":"components/layout/PageHero.jsx"},{"name":"RunsOn","sourcePath":"components/layout/RunsOn.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"AnchorNav","sourcePath":"components/navigation/AnchorNav.jsx"},{"name":"SliderControls","sourcePath":"components/navigation/SliderControls.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CategoryChips","sourcePath":"components/templates/CategoryChips.jsx"},{"name":"DownloadPanel","sourcePath":"components/templates/DownloadPanel.jsx"},{"name":"ImportSteps","sourcePath":"components/templates/ImportSteps.jsx"},{"name":"MetaList","sourcePath":"components/templates/MetaList.jsx"},{"name":"SearchField","sourcePath":"components/templates/SearchField.jsx"},{"name":"TemplateCard","sourcePath":"components/templates/TemplateCard.jsx"},{"name":"TemplatePreview","sourcePath":"components/templates/TemplatePreview.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"c0083a349eff","components/content/CardGrid.jsx":"e6d1617e1088","components/content/Lightbox.jsx":"27786515570c","components/content/PillarList.jsx":"fa3e2b998e3f","components/content/ScreenshotFrame.jsx":"608199ca7e9f","components/content/SectionIntro.jsx":"32610f56cd57","components/content/VideoPoster.jsx":"439a598e3cae","components/core/Button.jsx":"7216adc5381b","components/core/CopyButton.jsx":"2a41957caf49","components/core/Icon.jsx":"976382efd0c2","components/core/Kicker.jsx":"b57c19fce136","components/core/LangSwitch.jsx":"110011a0da98","components/core/Pill.jsx":"7ad13b30265b","components/forms/ContactForm.jsx":"3306f33479fb","components/forms/Notice.jsx":"a02d860d4f90","components/forms/TextField.jsx":"87b5e911f7d9","components/layout/PageHero.jsx":"427761690721","components/layout/RunsOn.jsx":"272f8b8ed3ee","components/layout/SiteFooter.jsx":"cfc694c0f2db","components/layout/SiteHeader.jsx":"d3515eae15f8","components/navigation/AnchorNav.jsx":"a0094294a3bc","components/navigation/SliderControls.jsx":"96470c6646c4","components/navigation/Tabs.jsx":"a64ecfb2e9e2","components/templates/CategoryChips.jsx":"fdca70d62679","components/templates/DownloadPanel.jsx":"4df6c681831a","components/templates/ImportSteps.jsx":"28636a60f826","components/templates/MetaList.jsx":"7c1d60170b84","components/templates/SearchField.jsx":"b7484c549af3","components/templates/TemplateCard.jsx":"4bb4f59cb4dd","components/templates/TemplatePreview.jsx":"c9ecbbc73022","ui_kits/templates/Detail.jsx":"91cc681da6b8","ui_kits/templates/Gallery.jsx":"ddf39600f498","ui_kits/templates/OtherPages.jsx":"6c1fb48df9b2","ui_kits/templates/Shared.jsx":"c161d2a6d873","ui_kits/templates/data.js":"b2b9f58e1b76","ui_kits/templates/i18n.js":"503dcf217110","ui_kits/templates/tweaks-panel.jsx":"d259e3a86f73","ui_kits/website/Hero.jsx":"2b10253b176e","ui_kits/website/HomeSections.jsx":"755e93db5a50","ui_kits/website/SubPages.jsx":"120a73891e37","ui_kits/website/content.js":"69259478984d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeoBoardDesignSystem_65bada = window.NeoBoardDesignSystem_65bada || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  groups = [],
  defaultOpen = 0
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-acc"
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "nb-acc-group"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, g.title), /*#__PURE__*/React.createElement("span", {
    className: "m"
  }, open === i ? "\u2212" : "+")), open === i && /*#__PURE__*/React.createElement("ul", null, g.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, it))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/CardGrid.jsx
try { (() => {
function CardGrid({
  items = [],
  tone = "light",
  columns
}) {
  const cols = columns ?? (tone === "dark" ? 1 : 2);
  const H = tone === "dark" ? "h3" : "h4";
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-cards " + (tone === "dark" ? "nb-cards-dark" : "nb-cards-light"),
    style: {
      gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))"
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(H, null, c.title), /*#__PURE__*/React.createElement("p", null, c.description))));
}
Object.assign(__ds_scope, { CardGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CardGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Lightbox.jsx
try { (() => {
function Lightbox({
  open,
  onClose,
  src,
  alt = "",
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-lightbox",
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nb-lightbox-inner"
  }, children, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-lightbox-close",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/content/PillarList.jsx
try { (() => {
function PillarList({
  items = [],
  value = 0,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-pillar-list"
  }, items.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "nb-pillar" + (i === value ? " active" : ""),
    onClick: () => onChange && onChange(i)
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.description))));
}
Object.assign(__ds_scope, { PillarList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PillarList.jsx", error: String((e && e.message) || e) }); }

// components/content/ScreenshotFrame.jsx
try { (() => {
function ScreenshotFrame({
  src,
  alt = "NeoBoard board example",
  onZoom
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-shot-frame",
    "aria-label": "Enlarge image",
    onClick: onZoom
  }, /*#__PURE__*/React.createElement("img", {
    key: src,
    src: src,
    alt: alt
  }), /*#__PURE__*/React.createElement("span", {
    className: "zoom-hint",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
  }))));
}
Object.assign(__ds_scope, { ScreenshotFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ScreenshotFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/VideoPoster.jsx
try { (() => {
function VideoPoster({
  image,
  label,
  embedUrl,
  playLabel = "Play video"
}) {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-video"
  }, playing && embedUrl ? /*#__PURE__*/React.createElement("iframe", {
    src: embedUrl,
    title: label,
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "poster",
    "aria-label": playLabel,
    onClick: () => setPlaying(true)
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "play"
  }, /*#__PURE__*/React.createElement("span", {
    className: "circle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tri"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label)));
}
Object.assign(__ds_scope, { VideoPoster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VideoPoster.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(" ");
function Button({
  variant = "primary",
  href,
  children,
  className,
  ...rest
}) {
  const cls = cx("nb-btn", variant === "ghost" ? "nb-btn-ghost" : "nb-btn-primary", className);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CopyButton.jsx
try { (() => {
function CopyButton({
  text = "",
  label = "Copy message",
  copiedLabel = "Copied ✓",
  copied: copiedProp,
  onCopy
}) {
  const [copied, setCopied] = React.useState(false);
  const isCopied = copiedProp ?? copied;
  const click = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
    setCopied(true);
    onCopy && onCopy();
    setTimeout(() => setCopied(false), 2000);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-copy-btn" + (isCopied ? " copied" : ""),
    onClick: click
  }, isCopied ? copiedLabel : label);
}
Object.assign(__ds_scope, { CopyButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CopyButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const L = window.lucide;
    const node = L && L.icons && L.icons[name];
    if (!node || !L.createElement) return;
    const svg = L.createElement(node);
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("aria-hidden", "true");
    el.appendChild(svg);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "nb-icon" + (className ? " " + className : ""),
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function Kicker({
  children,
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "nb-kicker" + (onDark ? " on-dark" : "")
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionIntro.jsx
try { (() => {
function SectionIntro({
  kicker,
  title,
  sub,
  onDark = false,
  narrow = false,
  noMargin = false,
  titleSize
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: narrow ? "" : "nb-section-intro",
    style: {
      maxWidth: narrow ? "40rem" : undefined,
      marginBottom: noMargin || narrow ? 0 : undefined
    }
  }, kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    onDark: onDark
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    className: "nb-title",
    style: {
      fontSize: titleSize,
      marginBottom: noMargin ? 0 : undefined
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "nb-section-sub",
    style: onDark ? {
      color: "rgba(255,255,255,0.72)",
      fontSize: 17
    } : null
  }, sub));
}
Object.assign(__ds_scope, { SectionIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionIntro.jsx", error: String((e && e.message) || e) }); }

// components/core/LangSwitch.jsx
try { (() => {
function LangSwitch({
  value = "en",
  onChange,
  tone = "light",
  options = ["de", "en"]
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nb-lang " + (tone === "dark" ? "nb-lang-dark" : "nb-lang-light"),
    "aria-label": "Language selection"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    className: o === value ? "active" : "",
    onClick: () => onChange && onChange(o)
  }, o.toUpperCase())));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  children,
  dot = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-pill"
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Notice.jsx
try { (() => {
function Notice({
  variant = "fallback",
  children,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-notice " + (variant === "legal" ? "nb-notice-legal" : "nb-notice-fallback"),
    role: "status"
  }, children, actions && /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, actions));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  required,
  multiline,
  rows = 4,
  id,
  ...rest
}) {
  const fid = id || "f-" + String(label || "").toLowerCase().replace(/\W+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label, required ? " *" : ""), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    required: required
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    required: required
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
const T = {
  en: {
    name: "Name",
    organisation: "Organisation",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    ph: "e.g. preferred date, number of users, use case",
    required: "required field",
    demo: "Request demo",
    contact: "Create email",
    privacy: "For information on how we process your data, see our",
    privacyLink: "privacy policy",
    sent: "Your email program should now open with your message. If not: your message, including recipient and subject, is already in your clipboard. Paste it into your webmail and send it to",
    copy: "Copy message",
    copied: "Copied ✓"
  },
  de: {
    name: "Name",
    organisation: "Organisation",
    email: "E-Mail",
    phone: "Telefon",
    subject: "Betreff",
    message: "Nachricht",
    ph: "z. B. Wunschtermin, Anzahl der Nutzer, Einsatzbereich",
    required: "Pflichtfeld",
    demo: "Demo anfragen",
    contact: "E-Mail erstellen",
    privacy: "Hinweise zur Verarbeitung Ihrer Angaben finden Sie in unserer",
    privacyLink: "Datenschutzerklärung",
    sent: "Ihr E-Mail-Programm sollte sich jetzt mit Ihrer Nachricht öffnen. Falls nicht: Ihre Nachricht ist bereits mit Empfänger und Betreff in der Zwischenablage. Fügen Sie sie in Ihr Webmail ein und senden Sie sie an",
    copy: "Nachricht kopieren",
    copied: "Kopiert ✓"
  }
};
function ContactForm({
  variant = "demo",
  locale = "en",
  email = "info@nordeck.net",
  privacyHref = "#",
  onPrivacyClick,
  onSubmit
}) {
  const t = T[locale] || T.en;
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit();
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "nb-contact-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-name-" + variant,
    label: t.name,
    required: true,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-email-" + variant,
    label: t.email,
    type: "email",
    required: true,
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-org-" + variant,
    label: t.organisation,
    autoComplete: "organization"
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-tel-" + variant,
    label: t.phone,
    type: "tel",
    autoComplete: "tel"
  })), variant === "contact" && /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-subj-" + variant,
    label: t.subject,
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    id: "cf-msg-" + variant,
    label: t.message,
    multiline: true,
    rows: 4,
    placeholder: variant === "demo" ? t.ph : ""
  }), /*#__PURE__*/React.createElement("p", {
    className: "form-note"
  }, "* = ", t.required, " \xB7 ", t.privacy, " ", /*#__PURE__*/React.createElement("a", {
    href: privacyHref,
    onClick: onPrivacyClick
  }, t.privacyLink), "."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, variant === "demo" ? t.demo : t.contact), sent && /*#__PURE__*/React.createElement(__ds_scope.Notice, {
    actions: /*#__PURE__*/React.createElement(__ds_scope.CopyButton, {
      text: email,
      label: t.copy,
      copiedLabel: t.copied
    })
  }, /*#__PURE__*/React.createElement("p", null, t.sent, " ", /*#__PURE__*/React.createElement("strong", null, email), ".")));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHero.jsx
try { (() => {
function PageHero({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h1", null, title)));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/RunsOn.jsx
try { (() => {
function RunsOn({
  label = "RUNS ON",
  items = []
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "nb-runs-on"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap nb-runs-on-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, label), items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it
  }, it))));
}
Object.assign(__ds_scope, { RunsOn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/RunsOn.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logoSrc,
  links = [{
    label: "Legal notice",
    href: "#"
  }, {
    label: "Contact",
    href: "#"
  }, {
    label: "Privacy policy",
    href: "#"
  }, {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nordeckitconsulting"
  }],
  developedBy = "Developed by",
  company = "Nordeck IT + Consulting GmbH",
  companyUrl = "https://nordeck.net"
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "nb-site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NeoBoard"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "#fff"
    }
  }, "neoboard"), /*#__PURE__*/React.createElement("span", null, developedBy, " ", /*#__PURE__*/React.createElement("a", {
    href: companyUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, company))), /*#__PURE__*/React.createElement("nav", {
    className: "footer-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href
  }, l.label)))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function SiteHeader({
  logoSrc,
  homeHref = "#",
  lang = "en",
  onLangChange
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nb-site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: homeHref,
    "aria-label": "NeoBoard \u2013 Home"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NeoBoard"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--dark)"
    }
  }, "neoboard")), /*#__PURE__*/React.createElement(__ds_scope.LangSwitch, {
    value: lang,
    onChange: onLangChange,
    tone: "light"
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnchorNav.jsx
try { (() => {
function AnchorNav({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nb-anchor-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    href: it.href,
    onClick: it.onClick
  }, it.label))));
}
Object.assign(__ds_scope, { AnchorNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnchorNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SliderControls.jsx
try { (() => {
const Chevron = ({
  d
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "20",
  height: "20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));
function SliderControls({
  count = 6,
  index = 0,
  onChange
}) {
  const go = i => onChange && onChange((i + count) % count);
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-slider-controls"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-slider-nav-btn",
    "aria-label": "Previous slide",
    onClick: () => go(index - 1)
  }, /*#__PURE__*/React.createElement(Chevron, {
    d: "M15 5l-7 7 7 7"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nb-dots"
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": "Slide " + (i + 1),
    className: i === index ? "active" : "",
    onClick: () => go(i)
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-slider-nav-btn",
    "aria-label": "Next slide",
    onClick: () => go(index + 1)
  }, /*#__PURE__*/React.createElement(Chevron, {
    d: "M9 5l7 7-7 7"
  })));
}
Object.assign(__ds_scope, { SliderControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SliderControls.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value = 0,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-tabs",
    role: "tablist"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "tab",
    "aria-selected": i === value,
    className: i === value ? "active" : "",
    onClick: () => onChange && onChange(i)
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/templates/CategoryChips.jsx
try { (() => {
function CategoryChips({
  categories = [],
  value = null,
  onChange,
  allLabel = "All",
  showCounts = true,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-chips",
    role: "group"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nb-chip" + (value == null ? " active" : ""),
    "aria-pressed": value == null,
    onClick: () => onChange && onChange(null)
  }, allLabel, showCounts && total != null && /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, total)), categories.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    className: "nb-chip" + (value === c.id ? " active" : ""),
    "aria-pressed": value === c.id,
    onClick: () => onChange && onChange(c.id)
  }, c.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 16
  }), c.label, showCounts && c.count != null && /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, c.count))));
}
Object.assign(__ds_scope, { CategoryChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/CategoryChips.jsx", error: String((e && e.message) || e) }); }

// components/templates/DownloadPanel.jsx
try { (() => {
const T = {
  de: {
    kicker: "DOWNLOAD",
    one: "Vorlage herunterladen",
    get: "Herunterladen",
    choose: "Auswahl",
    gen: "Diese Vorlage wird mit einem Generator erstellt.",
    file: "NeoBoard-Datei"
  },
  en: {
    kicker: "DOWNLOAD",
    one: "Download template",
    get: "Download",
    choose: "Choose",
    gen: "This template is created with a generator.",
    file: "NeoBoard file"
  }
};
function DownloadPanel({
  files = [],
  links = [],
  locale = "en",
  selectThreshold = 5,
  selectLabel
}) {
  const t = T[locale] || T.en;
  const [pick, setPick] = React.useState(0);
  const gens = links.filter(l => l.type === "generator");
  const others = links.filter(l => l.type !== "generator");
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-download"
  }, /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, t.kicker), files.length === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: files[0].href || "#",
    download: files[0].name
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Download",
    size: 18
  }), t.one), /*#__PURE__*/React.createElement("p", {
    className: "file-note"
  }, files[0].name, " \xB7 ", t.file)), files.length > 1 && files.length < selectThreshold && /*#__PURE__*/React.createElement("div", {
    className: "rows"
  }, files.map(f => /*#__PURE__*/React.createElement("a", {
    key: f.name,
    className: "row",
    href: f.href || "#",
    download: f.name
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, f.label), /*#__PURE__*/React.createElement("code", null, f.name)), /*#__PURE__*/React.createElement("span", {
    className: "act"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Download",
    size: 16
  }), t.get)))), files.length >= selectThreshold && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "pick"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nb-dl-pick"
  }, selectLabel || t.choose), /*#__PURE__*/React.createElement("select", {
    id: "nb-dl-pick",
    value: pick,
    onChange: e => setPick(+e.target.value)
  }, files.map((f, i) => /*#__PURE__*/React.createElement("option", {
    key: f.name,
    value: i
  }, f.label)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: files[pick].href || "#",
    download: files[pick].name
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Download",
    size: 18
  }), t.get)), /*#__PURE__*/React.createElement("p", {
    className: "file-note"
  }, files[pick].name, " \xB7 ", t.file)), files.length === 0 && gens.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, t.gen), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: gens[0].url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ExternalLink",
    size: 18
  }), gens[0].label)), (files.length > 0 ? gens.length : gens.length > 1 || others.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, (files.length > 0 ? gens : gens.slice(1)).map(l => /*#__PURE__*/React.createElement("a", {
    key: l.url + l.label,
    href: l.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ExternalLink",
    size: 16
  }), l.label)), others.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.url + l.label,
    className: "minor",
    href: l.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.type === "video" ? "PlayCircle" : "FileText",
    size: 15
  }), l.label))));
}
Object.assign(__ds_scope, { DownloadPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/DownloadPanel.jsx", error: String((e && e.message) || e) }); }

// components/templates/ImportSteps.jsx
try { (() => {
function ImportSteps({
  steps = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-cards nb-cards-dark nb-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.description))));
}
Object.assign(__ds_scope, { ImportSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/ImportSteps.jsx", error: String((e && e.message) || e) }); }

// components/templates/MetaList.jsx
try { (() => {
function MetaList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "nb-meta"
  }, items.filter(i => i && i.value).map(i => /*#__PURE__*/React.createElement("div", {
    key: i.label
  }, /*#__PURE__*/React.createElement("dt", null, i.label), /*#__PURE__*/React.createElement("dd", null, i.value))));
}
Object.assign(__ds_scope, { MetaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/MetaList.jsx", error: String((e && e.message) || e) }); }

// components/templates/SearchField.jsx
try { (() => {
function SearchField({
  value,
  onChange,
  placeholder = "Search",
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    placeholder: placeholder,
    "aria-label": label || placeholder,
    onChange: e => onChange && onChange(e.target.value)
  }));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/templates/TemplatePreview.jsx
try { (() => {
function TemplatePreview({
  src,
  alt = "",
  icon = "LayoutTemplate",
  label = "Preview pending",
  iconSize = 36
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nb-tpreview"
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ph",
    role: "img",
    "aria-label": alt || label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", null, label)));
}
Object.assign(__ds_scope, { TemplatePreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/TemplatePreview.jsx", error: String((e && e.message) || e) }); }

// components/templates/TemplateCard.jsx
try { (() => {
const range = (r, unit) => r ? (r.min === r.max ? r.min : r.min + "–" + r.max) + " " + unit : null;
function TemplateCard({
  title,
  description,
  categoryLabel,
  categoryIcon,
  preview,
  previewLabel,
  duration,
  groupSize,
  durationUnit = "min",
  groupUnit = "people",
  langNote,
  href,
  onClick
}) {
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    className: "nb-tcard",
    href: href,
    onClick: onClick,
    type: href ? undefined : "button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pv"
  }, /*#__PURE__*/React.createElement(__ds_scope.TemplatePreview, {
    src: preview && preview.src,
    alt: preview && preview.alt,
    icon: categoryIcon,
    label: previewLabel,
    iconSize: 30
  })), /*#__PURE__*/React.createElement("div", {
    className: "bd"
  }, categoryLabel && /*#__PURE__*/React.createElement("span", {
    className: "cat"
  }, categoryIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: categoryIcon,
    size: 14
  }), categoryLabel), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, description), (duration || groupSize || langNote) && /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, duration && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Clock",
    size: 15
  }), range(duration, durationUnit)), groupSize && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Users",
    size: 15
  }), range(groupSize, groupUnit)), langNote && /*#__PURE__*/React.createElement("span", {
    className: "nb-lang-note"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Languages",
    size: 13
  }), langNote))));
}
Object.assign(__ds_scope, { TemplateCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/templates/TemplateCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Detail.jsx
try { (() => {
function DetailPage({
  lang,
  t,
  slug,
  go
}) {
  const {
    TemplatePreview,
    DownloadPanel,
    MetaList,
    ImportSteps,
    Kicker,
    Notice,
    Icon
  } = window.NeoBoardDesignSystem_65bada;
  const all = window.nbTemplates(lang);
  const x = all.find(i => i.slug === slug);
  const c = window.nbCategory(x.category);
  const [frame, setFrame] = React.useState(0);
  React.useEffect(() => setFrame(0), [slug]);
  const gal = routePath(lang, "gallery"),
    catHref = routePath(lang, "category", c.id);
  const related = all.filter(i => i.category === x.category && i.slug !== x.slug).slice(0, 3);
  const meta = [{
    label: t.duration,
    value: window.nbRange(x.duration, t.min)
  }, {
    label: t.groupSize,
    value: window.nbRange(x.groupSize, t.people)
  }, {
    label: t.frames,
    value: x.frames > 1 ? String(x.frames) : null
  }, {
    label: t.authors,
    value: x.authors.map(a => a.name).join(", ")
  }, {
    label: t.license,
    value: "AGPL-3.0-or-later"
  }, {
    label: t.published,
    value: window.nbDate(x.published, lang)
  }];
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tg-crumbs",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: gal,
    onClick: go(gal)
  }, t.kicker), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: catHref,
    onClick: go(catHref)
  }, c.label[lang])), /*#__PURE__*/React.createElement("div", {
    className: "tg-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tg-stage"
  }, /*#__PURE__*/React.createElement(TemplatePreview, {
    alt: x.previewAlt,
    icon: c.icon,
    label: x.frames > 1 ? t.previewPending + " · " + t.frame(frame + 1, x.frames) : t.previewPending,
    iconSize: 48
  })), x.frames > 1 && /*#__PURE__*/React.createElement("div", {
    className: "tg-thumbs"
  }, Array.from({
    length: x.frames
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: i === frame ? "active" : "",
    "aria-label": t.frame(i + 1, x.frames),
    "aria-pressed": i === frame,
    onClick: () => setFrame(i)
  }, /*#__PURE__*/React.createElement(TemplatePreview, {
    icon: c.icon,
    label: String(i + 1),
    iconSize: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "tg-info"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: catHref,
    onClick: go(catHref),
    className: "nb-kicker",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 14
  }), c.label[lang]), /*#__PURE__*/React.createElement("h1", null, x.title)), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, x.description), x.isFallback && /*#__PURE__*/React.createElement(Notice, {
    variant: "legal"
  }, t.onlyInLong[x.lang]), /*#__PURE__*/React.createElement(DownloadPanel, {
    locale: lang,
    files: x.files,
    links: x.links,
    selectLabel: t.selectLabel
  }), /*#__PURE__*/React.createElement(MetaList, {
    items: meta
  }))), /*#__PURE__*/React.createElement("section", {
    className: "tg-method"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side"
  }, /*#__PURE__*/React.createElement(Kicker, null, t.methodKicker), /*#__PURE__*/React.createElement("h2", {
    className: "nb-title"
  }, x.body ? t.method : t.glance)), /*#__PURE__*/React.createElement("div", {
    className: "tg-glance"
  }, x.body && /*#__PURE__*/React.createElement("h3", null, t.glance), /*#__PURE__*/React.createElement("ul", null, x.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))), x.body && /*#__PURE__*/React.createElement(Prose, {
    md: x.body
  })))), /*#__PURE__*/React.createElement("section", {
    className: "tg-import"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Kicker, {
    onDark: true
  }, t.importKicker), /*#__PURE__*/React.createElement("h2", {
    className: "nb-title"
  }, t.importTitle), /*#__PURE__*/React.createElement(ImportSteps, {
    steps: t.steps
  }))), related.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "wrap tg-related"
  }, /*#__PURE__*/React.createElement(Kicker, null, t.relatedKicker(c.label[lang])), /*#__PURE__*/React.createElement("h2", {
    className: "nb-title"
  }, t.related), /*#__PURE__*/React.createElement("div", {
    className: "tg-grid"
  }, related.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.slug,
    item: r,
    lang: lang,
    t: t,
    go: go
  })))), /*#__PURE__*/React.createElement(SubmitCta, {
    lang: lang,
    t: t,
    go: go
  }));
}
window.DetailPage = DetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Gallery.jsx
try { (() => {
function GalleryPage({
  lang,
  t,
  go,
  filter,
  setFilter,
  lockedCat
}) {
  const {
    CategoryChips,
    SearchField,
    Tabs,
    Button,
    Kicker,
    Icon
  } = window.NeoBoardDesignSystem_65bada;
  const all = window.nbTemplates(lang);
  const cat = lockedCat || filter.cat;
  const q = filter.q.trim().toLowerCase();
  const catLabel = id => window.nbCategory(id).label[lang];
  let items = all.filter(x => (!cat || x.category === cat) && (!q || (x.title + " " + x.description + " " + catLabel(x.category)).toLowerCase().includes(q)));
  if (filter.sort === 1) items = [...items].sort((a, b) => a.title.localeCompare(b.title, lang));
  const counts = window.NB_CATEGORIES.map(c => ({
    id: c.id,
    label: c.label[lang],
    icon: c.icon,
    count: all.filter(x => x.category === c.id).length
  }));
  const showFeatured = !lockedCat && !cat && !q;
  const lc = lockedCat && window.nbCategory(lockedCat);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": lockedCat ? "Category" : "Gallery"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tg-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, lc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "back",
    href: routePath(lang, "gallery"),
    onClick: go(routePath(lang, "gallery"))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowLeft",
    size: 14
  }), t.back), /*#__PURE__*/React.createElement("div", {
    className: "cat-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cat-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: lc.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    onDark: true
  }, t.catKicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0"
    }
  }, lc.label[lang]))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18
    }
  }, lc.desc[lang])) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Kicker, {
    onDark: true
  }, t.kicker), /*#__PURE__*/React.createElement("h1", null, t.title), /*#__PURE__*/React.createElement("p", null, t.lead)))), showFeatured && /*#__PURE__*/React.createElement("section", {
    className: "wrap tg-section"
  }, /*#__PURE__*/React.createElement(Kicker, null, t.featured), /*#__PURE__*/React.createElement("div", {
    className: "tg-featured"
  }, all.filter(x => x.featured).slice(0, 3).map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.slug,
    item: x,
    lang: lang,
    t: t,
    go: go
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap tg-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg-toolbar"
  }, /*#__PURE__*/React.createElement(SearchField, {
    value: filter.q,
    onChange: v => setFilter({
      ...filter,
      q: v
    }),
    placeholder: t.search
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [t.sortNew, t.sortAz],
    value: filter.sort,
    onChange: v => setFilter({
      ...filter,
      sort: v
    })
  })), !lockedCat && /*#__PURE__*/React.createElement(CategoryChips, {
    categories: counts,
    value: filter.cat,
    onChange: v => setFilter({
      ...filter,
      cat: v
    }),
    allLabel: t.all,
    total: all.length
  }), /*#__PURE__*/React.createElement("span", {
    className: "tg-count",
    "aria-live": "polite"
  }, t.count(items.length)), items.length ? /*#__PURE__*/React.createElement("div", {
    className: "tg-grid"
  }, items.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.slug,
    item: x,
    lang: lang,
    t: t,
    go: go
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "tg-empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "SearchX",
    size: 36,
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("h3", null, t.emptyTitle), /*#__PURE__*/React.createElement("p", null, lockedCat && !q ? t.catEmpty : t.emptyBody), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setFilter({
      q: "",
      cat: null,
      sort: filter.sort
    }),
    href: lockedCat && !q ? routePath(lang, "gallery") : undefined
  }, lockedCat && !q ? t.back : t.reset))), /*#__PURE__*/React.createElement(SubmitCta, {
    lang: lang,
    t: t,
    go: go
  }));
}
function SubmitCta({
  lang,
  t,
  go
}) {
  const {
    Button
  } = window.NeoBoardDesignSystem_65bada;
  const href = routePath(lang, "submit");
  return /*#__PURE__*/React.createElement("section", {
    className: "tg-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, t.submitCtaTitle), /*#__PURE__*/React.createElement("p", null, t.submitCtaLead)), /*#__PURE__*/React.createElement(Button, {
    href: href,
    onClick: go(href)
  }, t.submitCta)));
}
Object.assign(window, {
  GalleryPage,
  SubmitCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/OtherPages.jsx
try { (() => {
function SubmitPage({
  lang,
  t
}) {
  const {
    ImportSteps,
    Notice,
    Button,
    Icon
  } = window.NeoBoardDesignSystem_65bada;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Submit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h1", null, t.submitTitle))), /*#__PURE__*/React.createElement("div", {
    className: "tg-narrow"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, t.submitIntro), /*#__PURE__*/React.createElement(ImportSteps, {
    steps: t.submitSteps
  }), /*#__PURE__*/React.createElement(Notice, {
    variant: "legal"
  }, t.submitLicense), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "https://github.com/nordeck/neoboard-templates",
    target: "_blank",
    rel: "noopener noreferrer"
  }, t.submitGithub), /*#__PURE__*/React.createElement("a", {
    className: "mail",
    href: "mailto:info@nordeck.net"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Mail",
    size: 18
  }), t.submitMail))));
}
function NotFoundPage({
  lang,
  t,
  go
}) {
  const {
    Kicker,
    Button
  } = window.NeoBoardDesignSystem_65bada;
  const href = routePath(lang, "gallery");
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "404",
    className: "tg-404"
  }, /*#__PURE__*/React.createElement(Kicker, null, t.nfKicker), /*#__PURE__*/React.createElement("h1", null, t.nfTitle), /*#__PURE__*/React.createElement("p", null, t.nfBody), /*#__PURE__*/React.createElement(Button, {
    href: href,
    onClick: go(href)
  }, t.nfCta));
}
Object.assign(window, {
  SubmitPage,
  NotFoundPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/OtherPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Shared.jsx
try { (() => {
const NBK = window.NeoBoardDesignSystem_65bada;
// Hash routes mirror the real URLs: /de/vorlagen/, /de/vorlagen/<slug>/, /de/vorlagen/kategorie/<id>/, /de/vorlagen/einreichen/
const SEG = {
  de: {
    cat: "kategorie",
    submit: "einreichen"
  },
  en: {
    cat: "category",
    submit: "submit"
  }
};
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
  if (!p.length) return {
    lang: "de",
    page: "gallery"
  };
  if (p[1] !== window.NB_I18N[lang].base) return {
    lang,
    page: "404"
  };
  if (!p[2]) return {
    lang,
    page: "gallery"
  };
  if (p[2] === SEG[lang].cat) return window.nbCategory(p[3]) ? {
    lang,
    page: "category",
    arg: p[3]
  } : {
    lang,
    page: "404"
  };
  if (p[2] === SEG[lang].submit) return {
    lang,
    page: "submit"
  };
  return window.NB_TEMPLATES.some(t => t.slug === p[2]) ? {
    lang,
    page: "detail",
    arg: p[2]
  } : {
    lang,
    page: "404"
  };
}
function Card({
  item,
  lang,
  t,
  go
}) {
  const c = window.nbCategory(item.category);
  const href = routePath(lang, "detail", item.slug);
  return /*#__PURE__*/React.createElement(NBK.TemplateCard, {
    title: item.title,
    description: item.description,
    categoryLabel: c.label[lang],
    categoryIcon: c.icon,
    previewLabel: t.previewPending,
    preview: {
      alt: item.previewAlt
    },
    duration: item.duration,
    groupSize: item.groupSize,
    durationUnit: t.min,
    groupUnit: t.people,
    langNote: item.isFallback ? t.onlyIn[item.lang] : null,
    href: href,
    onClick: go(href)
  });
}
function Prose({
  md
}) {
  const inline = s => s.split(/(\*\*[^*]+\*\*)/).map((x, i) => x.startsWith("**") ? /*#__PURE__*/React.createElement("strong", {
    key: i
  }, x.slice(2, -2)) : x);
  const out = [];
  let list = null;
  md.split("\n").forEach((raw, i) => {
    const l = raw.trim();
    const ol = l.match(/^\d+\.\s+(.*)/),
      ul = l.match(/^[-*]\s+(.*)/);
    if (ol || ul) {
      const type = ol ? "ol" : "ul";
      if (!list || list.type !== type) {
        list = {
          type,
          items: []
        };
        out.push(list);
      }
      list.items.push((ol || ul)[1]);
      return;
    }
    list = null;
    if (!l) return;
    if (l.startsWith("### ")) out.push(/*#__PURE__*/React.createElement("h3", {
      key: i
    }, inline(l.slice(4))));else if (l.startsWith("## ")) out.push(/*#__PURE__*/React.createElement("h2", {
      key: i
    }, inline(l.slice(3))));else out.push(/*#__PURE__*/React.createElement("p", {
      key: i
    }, inline(l)));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tg-prose"
  }, out.map((b, i) => b.type === "ol" || b.type === "ul" ? React.createElement(b.type, {
    key: "l" + i
  }, b.items.map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, inline(x)))) : b));
}
Object.assign(window, {
  routePath,
  parseRoute,
  Card,
  Prose
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/data.js
try { (() => {
// Sample data for the template gallery, modelled on neoboard-templates-konzept.md (Teil B, D.2, F.2).
// Slugs, categories, file layout and the retro-4-step entry come from the concept; other descriptions,
// features, durations and group sizes are illustrative placeholders until the real index.<lang>.md files exist.
window.NB_CATEGORIES = [{
  id: "agile",
  icon: "RefreshCw",
  label: {
    de: "Agil",
    en: "Agile"
  },
  desc: {
    de: "Retrospektiven, Check-ins und Formate für agile Teams.",
    en: "Retrospectives, check-ins and formats for agile teams."
  }
}, {
  id: "brainstorming",
  icon: "Lightbulb",
  label: {
    de: "Brainstorming",
    en: "Brainstorming"
  },
  desc: {
    de: "Ideen sammeln, ordnen und weiterentwickeln.",
    en: "Collect, structure and develop ideas."
  }
}, {
  id: "workshop",
  icon: "Presentation",
  label: {
    de: "Workshop",
    en: "Workshop"
  },
  desc: {
    de: "Abläufe für Workshops und Besprechungen.",
    en: "Flows for workshops and meetings."
  }
}, {
  id: "planning",
  icon: "CalendarDays",
  label: {
    de: "Planung",
    en: "Planning"
  },
  desc: {
    de: "Kalender, Zeitachsen und Prioritäten.",
    en: "Calendars, timelines and priorities."
  }
}, {
  id: "strategy",
  icon: "Target",
  label: {
    de: "Strategie",
    en: "Strategy"
  },
  desc: {
    de: "Geschäftsmodelle und strategische Analysen.",
    en: "Business models and strategic analysis."
  }
}, {
  id: "team-building",
  icon: "HeartHandshake",
  label: {
    de: "Teambuilding",
    en: "Team building"
  },
  desc: {
    de: "Übungen, mit denen sich Teams besser kennenlernen.",
    en: "Exercises that help teams get to know each other."
  }
}, {
  id: "games",
  icon: "Puzzle",
  label: {
    de: "Spiele",
    en: "Games"
  },
  desc: {
    de: "Spiele für Pausen, Auflockerung und Training.",
    en: "Games for breaks, warm-ups and practice."
  }
}, {
  id: "backgrounds",
  icon: "Image",
  label: {
    de: "Hintergründe",
    en: "Backgrounds"
  },
  desc: {
    de: "Gestaltete Hintergründe für eigene Boards.",
    en: "Designed backgrounds for your own boards."
  }
}, {
  id: "getting-started",
  icon: "Rocket",
  label: {
    de: "Erste Schritte",
    en: "Getting started"
  },
  desc: {
    de: "Einstieg in NeoBoard.",
    en: "First steps with NeoBoard."
  }
}];
const yearFiles = Array.from({
  length: 15
}, (_, i) => ({
  label: {
    de: "Kalender " + (2026 + i),
    en: "Calendar " + (2026 + i)
  },
  name: "year-calendar-" + (2026 + i) + ".de.nwb"
}));
const CP = [{
    name: "Christian Paul"
  }],
  ND = [{
    name: "Nordeck IT + Consulting GmbH"
  }];
window.NB_TEMPLATES = [{
  slug: "retro-4-step",
  category: "agile",
  langs: ["de", "en"],
  featured: true,
  published: "2024-12-21",
  authors: CP,
  frames: 4,
  duration: {
    min: 45,
    max: 90
  },
  groupSize: {
    min: 3,
    max: 12
  },
  title: {
    de: "4-Schritte-Retrospektive",
    en: "4-step retrospective"
  },
  description: {
    de: "Eine schlanke Retrospektive mit vier Rahmen, die euer Team von der Wertschätzung bis zu konkreten Maßnahmen führt.",
    en: "A lean retrospective with four frames that takes your team from appreciation to concrete actions."
  },
  features: {
    de: ["Vier Rahmen, einer pro Retro-Schritt", "Schlichtes Layout ohne Ablenkung", "Für Teams jeder Größe geeignet"],
    en: ["Four frames, one per retro step", "Plain layout without distractions", "Works for teams of any size"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "retro-4-step.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "retro-4-step.en.nwb"
    }]
  },
  links: [{
    type: "source",
    url: "https://chrpaul.de/posts/2024-12-21-neoboard/",
    label: {
      de: "Ursprünglicher Blogbeitrag",
      en: "Original blog post"
    }
  }],
  preview: {
    alt: {
      de: "Rahmen mit der Überschrift Lob für andere",
      en: "Frame titled Praise for others"
    }
  },
  body: {
    de: "Es muss nicht immer verziert sein, wenn der Fokus auf der Arbeit liegt.\n\n1. Lob für andere\n2. Was gut lief\n3. Was besser laufen sollte\n4. Maßnahmen für den nächsten Sprint",
    en: "It doesn't always need decoration when the focus is on the work.\n\n1. Praise for others\n2. What went well\n3. What could be better\n4. Actions for the next sprint"
  }
}, {
  slug: "lean-coffee",
  category: "workshop",
  langs: ["de", "en"],
  featured: true,
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 30,
    max: 60
  },
  groupSize: {
    min: 4,
    max: 15
  },
  title: {
    de: "Lean Coffee",
    en: "Lean Coffee"
  },
  description: {
    de: "Eine Besprechung ohne feste Agenda: Themen sammeln, gemeinsam priorisieren und in Zeitboxen besprechen.",
    en: "A meeting without a fixed agenda: collect topics, prioritise them together and discuss them in time boxes."
  },
  features: {
    de: ["Spalten für Themen, in Arbeit und erledigt", "Punkte zum Abstimmen", "Zeitbox-Hinweis auf dem Board"],
    en: ["Columns for topics, in progress and done", "Dots for voting", "Time-box reminder on the board"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "lean-coffee.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "lean-coffee.en.nwb"
    }]
  },
  body: {
    de: "## Ablauf\n\n1. Alle schreiben Themen auf Haftnotizen.\n2. Jede Person vergibt Punkte für die Themen, die sie besprechen möchte.\n3. Das Thema mit den meisten Punkten wandert in „In Arbeit“.\n4. Nach jeder Zeitbox entscheidet die Gruppe: weiter oder nächstes Thema.\n\n**Tipp:** Zeitboxen von 5 bis 8 Minuten haben sich bewährt.",
    en: "## How it works\n\n1. Everyone writes topics on sticky notes.\n2. Each person places dots on the topics they want to discuss.\n3. The topic with the most dots moves to \"In progress\".\n4. After each time box the group decides: continue or next topic.\n\n**Tip:** time boxes of 5 to 8 minutes work well."
  }
}, {
  slug: "mindmap",
  category: "brainstorming",
  langs: ["de"],
  featured: true,
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 20,
    max: 60
  },
  groupSize: {
    min: 1,
    max: 20
  },
  title: {
    de: "Mindmap"
  },
  description: {
    de: "Ein zentrales Thema mit Ästen für Ideen – leer, vorstrukturiert oder als ausgefülltes Beispiel."
  },
  features: {
    de: ["Drei Varianten: leer, strukturiert, Beispiel", "Magnetische Verbindungen", "Farbpalette für Ebenen"]
  },
  files: {
    de: [{
      label: "Leer",
      name: "mindmap.de.nwb"
    }, {
      label: "Strukturiert",
      name: "mindmap-strukturiert.de.nwb"
    }, {
      label: "Beispiel",
      name: "mindmap-beispiel.de.nwb"
    }]
  }
}, {
  slug: "year-calendar",
  category: "planning",
  langs: ["de", "en"],
  published: "2025-01-10",
  authors: CP,
  frames: 1,
  title: {
    de: "Jahreskalender",
    en: "Year calendar"
  },
  description: {
    de: "Alle zwölf Monate auf einem Rahmen – für Ferien, Termine und die Jahresplanung im Team.",
    en: "All twelve months on one frame – for holidays, dates and annual planning in your team."
  },
  features: {
    de: ["Kalender 2026 bis 2040", "Ein Rahmen pro Jahr", "Generator für weitere Jahre und Sprachen"],
    en: ["Calendars 2026 to 2040", "One frame per year", "Generator for other years and languages"]
  },
  files: {
    de: yearFiles,
    en: yearFiles
  },
  links: [{
    type: "generator",
    url: "https://chrpaul.de/",
    label: {
      de: "Kalender-Generator",
      en: "Calendar generator"
    }
  }]
}, {
  slug: "team-sudoku",
  category: "games",
  langs: ["de", "en"],
  published: "2024-12-15",
  authors: CP,
  duration: {
    min: 15,
    max: 30
  },
  groupSize: {
    min: 2,
    max: 8
  },
  title: {
    de: "Team-Sudoku",
    en: "Team sudoku"
  },
  description: {
    de: "Ein Sudoku, das das Team gemeinsam auf dem Board löst. Der Generator erstellt jedes Mal ein neues Rätsel.",
    en: "A sudoku the team solves together on the board. The generator creates a new puzzle every time."
  },
  features: {
    de: ["Neues Rätsel bei jedem Aufruf", "Drei Schwierigkeitsstufen"],
    en: ["New puzzle every time", "Three difficulty levels"]
  },
  files: {
    de: [],
    en: []
  },
  links: [{
    type: "generator",
    url: "https://chrpaul.de/",
    label: {
      de: "Sudoku-Generator öffnen",
      en: "Open sudoku generator"
    }
  }, {
    type: "source",
    url: "https://chrpaul.de/",
    label: {
      de: "Ursprünglicher Blogbeitrag",
      en: "Original blog post"
    }
  }]
}, {
  slug: "memorise-the-scene",
  category: "games",
  langs: ["de", "en"],
  published: "2024-12-10",
  authors: CP,
  frames: 3,
  duration: {
    min: 10,
    max: 20
  },
  groupSize: {
    min: 2,
    max: 20
  },
  title: {
    de: "Präg dir die Szene ein",
    en: "Memorise the scene"
  },
  description: {
    de: "Eine Szene ansehen, verdecken, nachbauen: ein Gedächtnisspiel in drei Leveln, auch in weihnachtlicher Fassung.",
    en: "Look at a scene, cover it, rebuild it: a memory game in three levels, also in a Christmas edition."
  },
  features: {
    de: ["Drei Level pro Datei", "Normale und weihnachtliche Fassung"],
    en: ["Three levels per file", "Regular and Christmas edition"]
  },
  files: {
    de: [{
      label: "Normal",
      name: "memorise-the-scene.de.nwb"
    }, {
      label: "Weihnachtlich",
      name: "memorise-the-scene-christmas.de.nwb"
    }],
    en: [{
      label: "Regular",
      name: "memorise-the-scene.en.nwb"
    }, {
      label: "Christmas",
      name: "memorise-the-scene-christmas.en.nwb"
    }]
  }
}, {
  slug: "business-model-canvas",
  category: "strategy",
  langs: ["en"],
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 60,
    max: 120
  },
  groupSize: {
    min: 2,
    max: 8
  },
  title: {
    en: "Business Model Canvas"
  },
  description: {
    en: "The nine building blocks of a business model on one frame, from customer segments to cost structure."
  },
  features: {
    en: ["All nine canvas blocks", "Guiding questions per block", "Room for sticky notes"]
  },
  files: {
    en: [{
      label: "Template",
      name: "business-model-canvas.en.nwb"
    }]
  }
}, {
  slug: "retro-continue-stop-invent-act",
  category: "agile",
  langs: ["de", "en"],
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 45,
    max: 75
  },
  groupSize: {
    min: 3,
    max: 10
  },
  title: {
    de: "Retrospektive: Beibehalten, Beenden, Erfinden, Umsetzen",
    en: "Retrospective: Continue, Stop, Invent, Act"
  },
  description: {
    de: "Vier Felder mit Leitfragen führen vom Rückblick zu konkreten Maßnahmen für den nächsten Sprint.",
    en: "Four fields with guiding questions lead from looking back to concrete actions for the next sprint."
  },
  features: {
    de: ["Leitfragen in jedem Feld", "Ausgefülltes Beispiel"],
    en: ["Guiding questions in each field"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "retro-continue-stop-invent-act.de.nwb"
    }, {
      label: "Beispiel",
      name: "retro-continue-stop-invent-act-beispiel.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "retro-continue-stop-invent-act.en.nwb"
    }]
  }
}, {
  slug: "kanban-board",
  category: "planning",
  langs: ["en"],
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  groupSize: {
    min: 1,
    max: 15
  },
  title: {
    en: "Kanban Board"
  },
  description: {
    en: "Three columns – to do, in progress, done – to make work visible and limit work in progress."
  },
  features: {
    en: ["Three columns", "Card style for tasks"]
  },
  files: {
    en: [{
      label: "Template",
      name: "kanban-board.en.nwb"
    }]
  }
}, {
  slug: "swot-analysis",
  category: "strategy",
  langs: ["en"],
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 30,
    max: 60
  },
  groupSize: {
    min: 2,
    max: 10
  },
  title: {
    en: "SWOT Analysis"
  },
  description: {
    en: "Strengths, weaknesses, opportunities and threats in four quadrants, labelled in English and German."
  },
  features: {
    en: ["Four quadrants", "Bilingual labels"]
  },
  files: {
    en: [{
      label: "Template",
      name: "swot-analysis.en.nwb"
    }]
  }
}, {
  slug: "priority-pyramid",
  category: "planning",
  langs: ["de"],
  published: "2026-10-20",
  authors: ND,
  frames: 1,
  duration: {
    min: 20,
    max: 45
  },
  groupSize: {
    min: 2,
    max: 12
  },
  title: {
    de: "Prioritäten-Pyramide: Sofort, nächstes Jahr, Träumchen"
  },
  description: {
    de: "Ideen nach Dringlichkeit in drei Ebenen sortieren – von „sofort“ bis „Träumchen“."
  },
  features: {
    de: ["Drei Ebenen", "Platz für Haftnotizen"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "priority-pyramid.de.nwb"
    }]
  }
}, {
  slug: "ocean-background",
  category: "backgrounds",
  langs: ["de", "en"],
  published: "2024-12-13",
  authors: CP,
  frames: 1,
  title: {
    de: "Ozean-Hintergrund",
    en: "Ocean background"
  },
  description: {
    de: "Ein Unterwasser-Hintergrund für eigene Boards, leer oder mit Meeresbewohnern ausgefüllt.",
    en: "An underwater background for your own boards, empty or filled with sea creatures."
  },
  features: {
    de: ["Leere und ausgefüllte Fassung"],
    en: ["Empty and filled version"]
  },
  files: {
    de: [{
      label: "Leer",
      name: "ocean-background-empty.de.nwb"
    }, {
      label: "Ausgefüllt",
      name: "ocean-background-filled.de.nwb"
    }],
    en: [{
      label: "Empty",
      name: "ocean-background-empty.en.nwb"
    }, {
      label: "Filled",
      name: "ocean-background-filled.en.nwb"
    }]
  }
}, {
  slug: "dream-island",
  category: "team-building",
  langs: ["de", "en"],
  published: "2024-12-17",
  authors: CP,
  frames: 1,
  duration: {
    min: 20,
    max: 40
  },
  groupSize: {
    min: 3,
    max: 15
  },
  title: {
    de: "Trauminsel",
    en: "Dream island"
  },
  description: {
    de: "Das Team gestaltet gemeinsam seine Trauminsel und erzählt dabei, was jeder und jedem wichtig ist.",
    en: "The team designs its dream island together and shares what matters to each person."
  },
  features: {
    de: ["Insel als Hintergrund", "Bildelemente zum Platzieren"],
    en: ["Island background", "Picture elements to place"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "dream-island.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "dream-island.en.nwb"
    }]
  }
}, {
  slug: "chess",
  category: "games",
  langs: ["de", "en"],
  published: "2024-12-09",
  authors: CP,
  frames: 1,
  groupSize: {
    min: 2,
    max: 2
  },
  title: {
    de: "Schach",
    en: "Chess"
  },
  description: {
    de: "Ein Schachbrett mit allen Figuren zum Verschieben – für eine Partie zwischendurch.",
    en: "A chessboard with all pieces to move around – for a quick game in between."
  },
  features: {
    de: ["Alle 32 Figuren (CC0)"],
    en: ["All 32 pieces (CC0)"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "chess.nwb"
    }],
    en: [{
      label: "Template",
      name: "chess.nwb"
    }]
  }
}, {
  slug: "pairs-game",
  category: "games",
  langs: ["de", "en"],
  published: "2024-12-01",
  authors: CP,
  frames: 1,
  duration: {
    min: 10,
    max: 20
  },
  groupSize: {
    min: 2,
    max: 10
  },
  title: {
    de: "Pairs-Spiel",
    en: "Pairs game"
  },
  description: {
    de: "Das bekannte Paare-Suchen als Board. Mit dem Generator entstehen eigene Kartensätze.",
    en: "The classic pairs game as a board. Create your own card sets with the generator."
  },
  features: {
    de: ["Fertiger Kartensatz", "Generator für eigene Motive"],
    en: ["Ready-made card set", "Generator for your own motifs"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "pairs-game.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "pairs-game.en.nwb"
    }]
  },
  links: [{
    type: "generator",
    url: "https://chrpaul.de/",
    label: {
      de: "Pairs-Generator",
      en: "Pairs generator"
    }
  }]
}, {
  slug: "winter-background",
  category: "backgrounds",
  langs: ["de", "en"],
  published: "2024-12-18",
  authors: CP,
  frames: 1,
  title: {
    de: "Winter-Hintergrund",
    en: "Winter background"
  },
  description: {
    de: "Eine verschneite Landschaft als Hintergrund für Boards in der kalten Jahreszeit.",
    en: "A snowy landscape as a background for boards in the cold season."
  },
  features: {
    de: ["Ein Rahmen, 1920 × 1080"],
    en: ["One frame, 1920 × 1080"]
  },
  files: {
    de: [{
      label: "Vorlage",
      name: "winter-background.de.nwb"
    }],
    en: [{
      label: "Template",
      name: "winter-background.en.nwb"
    }]
  }
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/data.js", error: String((e && e.message) || e) }); }

// ui_kits/templates/i18n.js
try { (() => {
window.NB_I18N = {
  de: {
    base: "vorlagen",
    kicker: "VORLAGEN",
    title: "NeoBoard-Vorlagen",
    lead: "Vorlage herunterladen und in NeoBoard importieren.",
    featured: "EMPFOHLEN",
    all: "Alle",
    search: "Vorlagen durchsuchen",
    sortNew: "Neu",
    sortAz: "A–Z",
    count: n => n === 1 ? "1 VORLAGE" : n + " VORLAGEN",
    emptyTitle: "Keine Vorlagen gefunden",
    emptyBody: "Passen Sie die Suche an oder wählen Sie eine andere Kategorie.",
    reset: "Filter zurücksetzen",
    min: "Min.",
    people: "Personen",
    onlyIn: {
      en: "Nur auf Englisch",
      de: "Nur auf Deutsch"
    },
    onlyInLong: {
      en: "Diese Vorlage gibt es nur auf Englisch.",
      de: "Diese Vorlage gibt es nur auf Deutsch."
    },
    previewPending: "Vorschau folgt",
    frame: (i, n) => "Rahmen " + i + " von " + n,
    frames: "Rahmen",
    duration: "Dauer",
    groupSize: "Gruppengröße",
    authors: "Autor:innen",
    license: "Lizenz",
    published: "Veröffentlicht",
    category: "Kategorie",
    glance: "Auf einen Blick",
    methodKicker: "METHODE",
    method: "Methodenbeschreibung",
    selectLabel: "Jahr wählen",
    importKicker: "IMPORT",
    importTitle: "In drei Schritten zum Board",
    steps: [{
      title: "Herunterladen",
      description: "Laden Sie die .nwb-Datei der Vorlage auf Ihren Rechner."
    }, {
      title: "Importieren",
      description: "Öffnen Sie ein Board in NeoBoard, wählen Sie „Importieren“ und bestätigen Sie den Dialog „Inhalt importieren“."
    }, {
      title: "Loslegen",
      description: "Passen Sie die Vorlage an und arbeiten Sie gemeinsam daran – in Echtzeit oder asynchron."
    }],
    relatedKicker: c => "MEHR AUS " + c.toUpperCase(),
    related: "Verwandte Vorlagen",
    back: "Alle Vorlagen",
    catKicker: "KATEGORIE",
    catEmpty: "In dieser Kategorie gibt es noch keine Vorlagen.",
    submitCtaTitle: "Eigene Vorlage teilen?",
    submitCtaLead: "Reichen Sie Ihr Board ein, damit andere es nutzen können.",
    submitCta: "Vorlage einreichen",
    submitTitle: "Vorlage einreichen",
    submitIntro: "Sie haben ein Board, das anderen helfen könnte? Reichen Sie es als Vorlage ein. Wir prüfen es und veröffentlichen es in der Galerie.",
    submitSteps: [{
      title: "Board vorbereiten",
      description: "Ein Rahmen pro Seite, möglichst 1920 × 1080, ohne persönliche Daten."
    }, {
      title: "Beschreibung ergänzen",
      description: "Titel, Kurzbeschreibung, Kategorie und eine Methodenbeschreibung, die erklärt, wie man mit der Vorlage arbeitet."
    }, {
      title: "Einreichen",
      description: "Als Pull Request auf GitHub oder per E-Mail mit der .nwb-Datei im Anhang."
    }],
    submitLicense: "Eingereichte Vorlagen werden unter der Lizenz AGPL-3.0-or-later veröffentlicht.",
    submitGithub: "Auf GitHub einreichen",
    submitMail: "Per E-Mail senden",
    nfKicker: "FEHLER 404",
    nfTitle: "Seite nicht gefunden",
    nfBody: "Diese Vorlage gibt es nicht oder nicht mehr.",
    nfCta: "Zur Vorlagen-Übersicht",
    footer: {
      developedBy: "Entwickelt von",
      legalNotice: "Impressum",
      contact: "Kontakt",
      privacy: "Datenschutzerklärung"
    }
  },
  en: {
    base: "templates",
    kicker: "TEMPLATES",
    title: "NeoBoard templates",
    lead: "Download a template and import it into NeoBoard.",
    featured: "FEATURED",
    all: "All",
    search: "Search templates",
    sortNew: "Newest",
    sortAz: "A–Z",
    count: n => n === 1 ? "1 TEMPLATE" : n + " TEMPLATES",
    emptyTitle: "No templates found",
    emptyBody: "Try a different search or choose another category.",
    reset: "Reset filters",
    min: "min",
    people: "people",
    onlyIn: {
      en: "English only",
      de: "German only"
    },
    onlyInLong: {
      en: "This template is only available in English.",
      de: "This template is only available in German."
    },
    previewPending: "Preview pending",
    frame: (i, n) => "Frame " + i + " of " + n,
    frames: "Frames",
    duration: "Duration",
    groupSize: "Group size",
    authors: "Authors",
    license: "Licence",
    published: "Published",
    category: "Category",
    glance: "At a glance",
    methodKicker: "METHOD",
    method: "Method description",
    selectLabel: "Choose year",
    importKicker: "IMPORT",
    importTitle: "Three steps to your board",
    steps: [{
      title: "Download",
      description: "Save the template's .nwb file to your computer."
    }, {
      title: "Import",
      description: "Open a board in NeoBoard, choose \"Import\" and confirm the \"Import content\" dialog."
    }, {
      title: "Get started",
      description: "Adapt the template and work on it together – in real time or asynchronously."
    }],
    relatedKicker: c => "MORE IN " + c.toUpperCase(),
    related: "Related templates",
    back: "All templates",
    catKicker: "CATEGORY",
    catEmpty: "There are no templates in this category yet.",
    submitCtaTitle: "Want to share your own template?",
    submitCtaLead: "Submit your board so others can use it.",
    submitCta: "Submit a template",
    submitTitle: "Submit a template",
    submitIntro: "Do you have a board that could help others? Submit it as a template. We review it and publish it in the gallery.",
    submitSteps: [{
      title: "Prepare the board",
      description: "One frame per page, ideally 1920 × 1080, without personal data."
    }, {
      title: "Add a description",
      description: "Title, short description, category and a method description that explains how to work with the template."
    }, {
      title: "Submit",
      description: "As a pull request on GitHub or by email with the .nwb file attached."
    }],
    submitLicense: "Submitted templates are published under the AGPL-3.0-or-later licence.",
    submitGithub: "Submit on GitHub",
    submitMail: "Send by email",
    nfKicker: "ERROR 404",
    nfTitle: "Page not found",
    nfBody: "This template does not exist or is no longer available.",
    nfCta: "Back to all templates",
    footer: {
      developedBy: "Developed by",
      legalNotice: "Legal notice",
      contact: "Contact",
      privacy: "Privacy policy"
    }
  }
};

// One entry per slug: requested language > English > any other (mirrors website/src/lib/templates.ts).
window.nbTemplates = lang => window.NB_TEMPLATES.map(t => {
  const l = t.langs.includes(lang) ? lang : t.langs.includes("en") ? "en" : t.langs[0];
  const pick = o => o && (o[l] ?? o[t.langs[0]]);
  return {
    slug: t.slug,
    category: t.category,
    lang: l,
    isFallback: l !== lang,
    featured: !!t.featured,
    published: t.published,
    title: pick(t.title),
    description: pick(t.description),
    features: pick(t.features) || [],
    body: pick(t.body),
    files: (pick(t.files) || []).map(f => ({
      name: f.name,
      label: typeof f.label === "string" ? f.label : f.label[l]
    })),
    links: (t.links || []).map(k => ({
      type: k.type,
      url: k.url,
      label: k.label[l] || k.label.en
    })),
    previewAlt: t.preview && t.preview.alt && t.preview.alt[l],
    frames: t.frames || 0,
    duration: t.duration,
    groupSize: t.groupSize,
    authors: t.authors
  };
}).sort((a, b) => b.published.localeCompare(a.published));
window.nbCategory = id => window.NB_CATEGORIES.find(c => c.id === id);
window.nbRange = (r, unit) => r ? (r.min === r.max ? r.min : r.min + "–" + r.max) + " " + unit : null;
window.nbDate = (iso, lang) => new Date(iso + "T12:00:00").toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/templates/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Pill,
  LangSwitch,
  SliderControls,
  Button,
  Lightbox
} = window.NeoBoardDesignSystem_65bada;
const A = "../../assets/";
function Hero({
  c,
  lang,
  setLang,
  onNav
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [zoom, setZoom] = React.useState(false);
  React.useEffect(() => {
    if (paused && !zoom) return;
    const t = setTimeout(() => setI((i + 1) % 6), 6000);
    return () => clearTimeout(t);
  }, [i, paused, zoom]);
  const img = A + "screenshots/slider_" + (i + 1) + "_" + lang + ".png";
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero-bg",
    src: A + "images/neoboard-hero-bg.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-tint"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-top"
  }, /*#__PURE__*/React.createElement(Pill, null, c.pill), /*#__PURE__*/React.createElement(LangSwitch, {
    tone: "dark",
    value: lang,
    onChange: setLang
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-top-part"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero-logo",
    src: A + "logos/neoboard-logo-white.png",
    alt: "NeoBoard"
  }), /*#__PURE__*/React.createElement("h1", null, c.titleLine1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, c.titleEmphasis)), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, c.subhead)), /*#__PURE__*/React.createElement("div", {
    className: "proofs"
  }, c.proofs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-col hero-slider",
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-top-part"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-slide-caption"
  }, c.slides[i]), /*#__PURE__*/React.createElement("div", {
    className: "slide-stage"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "slide-zoom",
    onClick: () => setZoom(true)
  }, /*#__PURE__*/React.createElement("img", {
    key: img,
    className: "shot",
    src: img,
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SliderControls, {
    count: 6,
    index: i,
    onChange: setI
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#demo",
    onClick: onNav("demo")
  }, c.ctaPrimary), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#product",
    onClick: onNav("product")
  }, c.ctaGhost)))))), /*#__PURE__*/React.createElement(Lightbox, {
    open: zoom,
    onClose: () => setZoom(false),
    src: img
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-slide-caption",
    style: {
      margin: "0 0 6px"
    }
  }, c.slides[i])));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
const NB = window.NeoBoardDesignSystem_65bada;
const IMG = "../../assets/";
function ProductSection({
  c,
  lang
}) {
  const {
    SectionIntro,
    PillarList,
    ScreenshotFrame,
    Lightbox
  } = NB;
  const [i, setI] = React.useState(0);
  const [zoom, setZoom] = React.useState(false);
  const src = IMG + "screenshots/slider_" + c.pillars[i].image + "_" + lang + ".png";
  return /*#__PURE__*/React.createElement("section", {
    className: "pad wrap",
    id: "product",
    "data-screen-label": "Product"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    kicker: c.kicker,
    title: c.heading,
    sub: c.subheading
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, /*#__PURE__*/React.createElement(PillarList, {
    items: c.pillars,
    value: i,
    onChange: setI
  }), /*#__PURE__*/React.createElement(ScreenshotFrame, {
    src: src,
    onZoom: () => setZoom(true)
  })), /*#__PURE__*/React.createElement(Lightbox, {
    open: zoom,
    onClose: () => setZoom(false),
    src: src
  }));
}
function SecuritySection({
  c,
  runsOn,
  onNav
}) {
  const {
    SectionIntro,
    Button,
    CardGrid,
    RunsOn,
    Kicker
  } = NB;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "security",
    id: "security",
    "data-screen-label": "Security"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap security-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    onDark: true
  }, c.kicker), /*#__PURE__*/React.createElement("h2", {
    className: "nb-title"
  }, c.heading), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, c.lead), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#demo",
    onClick: onNav("demo")
  }, c.ctaLabel)), /*#__PURE__*/React.createElement(CardGrid, {
    tone: "dark",
    items: c.cards
  }))), /*#__PURE__*/React.createElement(RunsOn, {
    label: runsOn.label,
    items: runsOn.items
  }));
}
function SectorsSection({
  c
}) {
  const {
    SectionIntro,
    Tabs,
    CardGrid
  } = NB;
  const [t, setT] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "pad wrap",
    id: "sectors",
    "data-screen-label": "Sectors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sector-head"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    narrow: true,
    noMargin: true,
    kicker: c.kicker,
    title: c.heading
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: c.tabs.map(x => x.label),
    value: t,
    onChange: setT
  })), /*#__PURE__*/React.createElement(CardGrid, {
    items: c.tabs[t].cases
  }));
}
function SpecsSection({
  c
}) {
  const {
    SectionIntro,
    Accordion
  } = NB;
  return /*#__PURE__*/React.createElement("section", {
    className: "pad wrap",
    id: "detail",
    "data-screen-label": "Specifications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "specs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "specs-side"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    noMargin: true,
    kicker: c.kicker,
    title: c.heading,
    titleSize: 40
  })), /*#__PURE__*/React.createElement(Accordion, {
    groups: c.groups
  })));
}
function ShowcaseSection({
  c
}) {
  const {
    SectionIntro,
    VideoPoster
  } = NB;
  return /*#__PURE__*/React.createElement("section", {
    className: "pad wrap",
    "data-screen-label": "Showcase"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showcase"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    noMargin: true,
    kicker: c.kicker,
    title: c.heading,
    sub: c.subheading,
    titleSize: 38
  }), /*#__PURE__*/React.createElement(VideoPoster, {
    image: IMG + "images/matrix-live-preview.jpg",
    label: c.videoLabel,
    playLabel: c.playLabel,
    embedUrl: "https://www.youtube-nocookie.com/embed/kGXBfqaYYe4?autoplay=1"
  })));
}
function DemoSection({
  c,
  lang,
  onPrivacy
}) {
  const {
    ContactForm
  } = NB;
  return /*#__PURE__*/React.createElement("section", {
    className: "demo",
    id: "demo",
    "data-screen-label": "Demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap demo-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, c.heading), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, c.lead), /*#__PURE__*/React.createElement("dl", {
    className: "demo-direct"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, c.email), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@nordeck.net"
  }, "info@nordeck.net"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, c.matrix), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
    href: "https://matrix.to/#/#nordeck:nordeck.io"
  }, "#nordeck:nordeck.io"))))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement(ContactForm, {
    variant: "demo",
    locale: lang,
    onPrivacyClick: onPrivacy
  }))));
}
Object.assign(window, {
  ProductSection,
  SecuritySection,
  SectorsSection,
  SpecsSection,
  ShowcaseSection,
  DemoSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SubPages.jsx
try { (() => {
const NBs = window.NeoBoardDesignSystem_65bada;
function ContactPage({
  lang
}) {
  const {
    PageHero,
    ContactForm
  } = NBs;
  const de = lang === "de";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    title: de ? "Kontakt" : "Get in touch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, de ? /*#__PURE__*/React.createElement("p", null, "Sie m\xF6chten mehr \xFCber unsere Leistungen erfahren oder haben Fragen zu unseren L\xF6sungen? F\xFCllen Sie einfach das Formular aus.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Are you interested in learning more about our services? Do you have any questions about our solutions? Would you like to have a non-binding conversation with our experts?"), /*#__PURE__*/React.createElement("p", null, "Simply fill in the form: it creates an email to us in your email program. We will respond to your enquiry as soon as possible.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 24
    }
  }, de ? "Sie erreichen uns auch per E-Mail: " : "You can also contact us via email: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@nordeck.net"
  }, "info@nordeck.net")), /*#__PURE__*/React.createElement(ContactForm, {
    variant: "contact",
    locale: lang
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("h3", null, "Nordeck IT + Consulting GmbH"), /*#__PURE__*/React.createElement("p", null, de ? "Standort Hamburg" : "Hamburg location"), /*#__PURE__*/React.createElement("p", null, "Eifflerstra\xDFe 43", /*#__PURE__*/React.createElement("br", null), "22769 Hamburg"), /*#__PURE__*/React.createElement("p", null, de ? "Standort Ahrensburg" : "Ahrensburg location"), /*#__PURE__*/React.createElement("p", null, "Bornkampsweg 22", /*#__PURE__*/React.createElement("br", null), "22926 Ahrensburg"), /*#__PURE__*/React.createElement("h3", null, de ? "Kontaktdaten" : "Contact details"), /*#__PURE__*/React.createElement("p", null, de ? "Telefon" : "Phone", ": ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+494060944578"
  }, "+49 40 60 94 45 78")), /*#__PURE__*/React.createElement("p", null, de ? "E-Mail" : "Email", ": ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@nordeck.net"
  }, "info@nordeck.net")), /*#__PURE__*/React.createElement("h3", null, "Matrix community"), /*#__PURE__*/React.createElement("p", null, "Are you a Matrix user? Then visit us at ", /*#__PURE__*/React.createElement("a", {
    href: "https://matrix.to/#/#nordeck:matrix.org"
  }, "#nordeck:matrix.org")))));
}
function LegalNoticePage() {
  const {
    PageHero
  } = NBs;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Legal Notice"
  }), /*#__PURE__*/React.createElement("div", {
    className: "legal-content"
  }, /*#__PURE__*/React.createElement("h2", null, "Company Information"), /*#__PURE__*/React.createElement("p", null, "Nordeck IT + Consulting GmbH operates from two locations:"), /*#__PURE__*/React.createElement("address", null, "Nordeck IT + Consulting GmbH", /*#__PURE__*/React.createElement("br", null), "Eifflerstra\xDFe 43", /*#__PURE__*/React.createElement("br", null), "D-22769 Hamburg"), /*#__PURE__*/React.createElement("address", null, "Nordeck IT + Consulting GmbH", /*#__PURE__*/React.createElement("br", null), "Bornkampsweg 22", /*#__PURE__*/React.createElement("br", null), "D-22926 Ahrensburg"), /*#__PURE__*/React.createElement("h2", null, "Managing Director & Registration"), /*#__PURE__*/React.createElement("p", null, "Responsible for the contents of this website within the meaning of \xA7 18 (2) MStV and managing director: Hans Thomas Nordeck"), /*#__PURE__*/React.createElement("p", null, "Court of registration and registration number: Hamburg, HRB 151624"), /*#__PURE__*/React.createElement("h2", null, "VAT ID & Contact"), /*#__PURE__*/React.createElement("p", null, "VAT ID: DE 322717613", /*#__PURE__*/React.createElement("br", null), "tel.: ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+494060944578"
  }, "+49 40 60 94 45 78"), /*#__PURE__*/React.createElement("br", null), "e-mail: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@nordeck.net"
  }, "info@nordeck.net")), /*#__PURE__*/React.createElement("h2", null, "Exclusion of Liability"), /*#__PURE__*/React.createElement("p", null, "The information on these web pages is constantly reviewed and updated. Despite all diligence, the data may have changed in the meantime. We cannot guarantee the timeliness, accuracy, or completeness of the information provided."), /*#__PURE__*/React.createElement("h2", null, "Image Sources"), /*#__PURE__*/React.createElement("p", null, "Own images (including photos by Silvia Fischer); iStockphoto; Pexels by Pixabay (blog)")));
}
Object.assign(window, {
  ContactPage,
  LegalNoticePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SubPages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
// Homepage copy, verbatim from nordeck/neoboard.io src/content/home/{en,de}.md
window.NB_CONTENT = {
  en: {
    hero: {
      pill: "OPEN SOURCE · BUILT ON MATRIX",
      titleLine1: "Collaboration",
      titleEmphasis: "reinvented",
      subhead: "The secure, self-sovereign whiteboard for full control over your data",
      proofs: ["End-to-end encrypted", "GDPR-compliant, EU standards", "Self-hosted or dedicated server", "Up to hundreds of users per room"],
      slides: ["Brainstorming and mind mapping", "Planning and process tracking", "Teaching and learning", "Collaboration independent of time and place", "Easy to use, lots of templates", "Collaboration or presentation mode – even for hundreds of users"],
      ctaPrimary: "Request a free demo",
      ctaGhost: "See how it works"
    },
    anchorNav: ["Product", "Security", "Sectors", "Specifications"],
    product: {
      kicker: "PRODUCT",
      heading: "Your teamwork: innovative and efficient",
      subheading: "Four things to encourage teamwork",
      pillars: [{
        title: "Simplify complexity",
        description: "Mind maps, mockups or diagrams help to visualise complex issues. Moderation functions enable the lead of team processes.",
        image: 1
      }, {
        title: "Ready-to-use templates for every need",
        description: "Whether you're conducting a workshop, managing a project, or planning a lesson, our templates help you get the job done faster.",
        image: 5
      }, {
        title: "Effortless collaboration – anytime",
        description: "Whether brainstorming, planning, or teaching: collaborate in real time or asynchronously, online or offline with auto sync.",
        image: 4
      }, {
        title: "Meet in large groups",
        description: "Scale to hundreds of users in one room: NeoBoard allows multiple users to edit and interact with the board simultaneously.",
        image: 6
      }]
    },
    security: {
      kicker: "SECURITY & SOVEREIGNTY",
      heading: "Your data: secure and sovereign",
      lead: "Open source, Matrix-based, operating in compliance with your security requirements",
      ctaLabel: "Talk to us about hosting",
      cards: [{
        title: "End-to-end encrypted for secure collaboration",
        description: "NeoBoard protects your information from unauthorized access with robust end-to-end encryption – GDPR-compliant and in accordance with EU standards."
      }, {
        title: "Digital sovereignty with Matrix and Element",
        description: "Open-source software based on the Matrix protocol. You decide where it runs: on premise or on a dedicated server."
      }, {
        title: "Expandable and customisable",
        description: "Integration in Element Web makes it possible to build a multifunctional environment (chat, video, calendar functions, file management, …)."
      }]
    },
    runsOn: {
      label: "RUNS ON",
      items: ["Matrix protocol", "Element Web", "Element Server Suite Pro", "MatrixRTC", "Matrix Authentication Service"]
    },
    sectors: {
      kicker: "SECTORS",
      heading: "Built for government, regulated institutions and education",
      tabs: [{
        label: "For public administration",
        cases: [{
          title: "Confidentiality guaranteed",
          description: "All information remains protected – from the initial draft to final approval, from the classroom to the committee."
        }, {
          title: "Seamless collaboration",
          description: "Facilitate real-time collaboration, regardless of location or department. Share ideas, collaborate on projects and optimise decision-making processes – securely and efficiently."
        }, {
          title: "User-friendly and versatile",
          description: "Thanks to intuitive operation and a wide range of functions, our whiteboard is the ideal tool for presentations, brainstorming and project management."
        }, {
          title: "Tailored to your needs",
          description: "Scalable and flexible, our whiteboard adapts to the specific requirements of your administration – for efficient and secure working."
        }]
      }, {
        label: "For schools",
        cases: [{
          title: "Teach like never before",
          description: "Bring learning content to life with presentations, interactive exercises and real-time collaboration."
        }, {
          title: "Promote individualised learning",
          description: "Adapt lessons to the needs of each student by catering to different learning styles and speeds."
        }, {
          title: "Facilitate collaboration",
          description: "Give students the opportunity to work together on tasks and present their ideas directly on the board."
        }, {
          title: "Learning paths",
          description: "Organize and document your learning paths in columns. Each learning step is a column and a frame in NeoBoard. You can share learning paths with others and work on them together."
        }]
      }]
    },
    specs: {
      kicker: "SPECIFICATIONS",
      heading: "In detail",
      groups: [{
        title: "Features",
        items: ["Visualise ideas together: brainstorm, draw mind maps, create mockups and diagrams", "Plan and structure projects", "Dashboard with preview tiles", "Infinite canvas workspace", "Predefined colour palette for consistently good results", "Multilingual support", "\"Fit-to-shape\" automatic text sizing", "Presentation mode", "Magnetic arrows and connectors", "Automatically repeats last colour and size selection", "Native integration with Element Web", "Powerful objects for text, notes, lines, shapes and drawing"]
      }, {
        title: "Safe and open – running on Matrix, integrated with Element",
        items: ["Fully compatible with Element Server Suite Pro (ESS Pro)", "Single shared server infrastructure for Element and NeoBoard", "Uses Matrix Authentication Service (MAS) – identical user identities across both applications", "Built on MatrixRTC for real-time collaboration", "Dual availability: usable both as an embedded widget and as a standalone application, with automatic board integration into Element rooms via the widget", "Extends Matrix beyond chat, enabling collaborative boards as a first-class capability"]
      }]
    },
    showcase: {
      kicker: "SHOWCASING",
      heading: "The NeoBoard, demonstrated in Matrix Live",
      subheading: "Matrix Live S11E15",
      videoLabel: "MATRIX LIVE S11E15",
      playLabel: "Play the Matrix Live episode (loads the video from YouTube)"
    },
    demo: {
      heading: "Ready for collaboration reinvented?",
      lead: "Request your free demo now and experience NeoBoard live.",
      email: "EMAIL",
      matrix: "MATRIX ROOM"
    },
    footer: {
      developedBy: "Developed by",
      legalNotice: "Legal notice",
      contact: "Contact",
      privacy: "Privacy policy"
    }
  },
  de: {
    hero: {
      pill: "OPEN SOURCE · BASIEREND AUF MATRIX",
      titleLine1: "Zusammenarbeit",
      titleEmphasis: "neu erfunden",
      subhead: "Das sichere, souveräne Whiteboard für die volle Kontrolle über Ihre Daten",
      proofs: ["Ende-zu-Ende verschlüsselt", "DSGVO-konform nach EU-Standards", "Selbst gehostet oder auf dediziertem Server", "Bis zu Hunderte Nutzer pro Raum"],
      slides: ["Brainstorming und Mindmapping", "Planen und Prozesse verfolgen", "Lehre und Lernen", "Zusammenarbeit unabhängig von Raum und Zeit", "Einfache Bedienung, viele Vorlagen", "Workshop- oder Präsentationsmodus – auch für Hunderte von Anwendern"],
      ctaPrimary: "Kostenlose Demo anfordern",
      ctaGhost: "So funktioniert's"
    },
    anchorNav: ["Produkt", "Sicherheit", "Branchen", "Spezifikationen"],
    product: {
      kicker: "PRODUKT",
      heading: "Ihr Teamwork: innovativ und effizient",
      subheading: "Vier Wege, Teamwork zu fördern",
      pillars: [{
        title: "Komplexität vereinfachen",
        description: "Mindmaps, Mockups oder Diagramme helfen, komplexe Sachverhalte zu visualisieren. Moderationsfunktionen ermöglichen die Steuerung von Teamprozessen.",
        image: 1
      }, {
        title: "Sofort startklare Vorlagen für jeden Bedarf",
        description: "Ob Workshop, Projektmanagement oder Unterrichtsplanung – unsere Vorlagen helfen Ihnen, Ihre Aufgaben schneller zu erledigen.",
        image: 5
      }, {
        title: "Mühelose Zusammenarbeit – jederzeit",
        description: "Ob Brainstorming, Planung oder Lehre: Arbeiten Sie in Echtzeit oder asynchron, online oder offline mit Auto-Sync zusammen.",
        image: 4
      }, {
        title: "Für große Gruppen geeignet",
        description: "Skalieren Sie auf Hunderte von Nutzern in einem Raum: NeoBoard ermöglicht es mehreren Nutzern, gleichzeitig am Board zu arbeiten und zu interagieren.",
        image: 6
      }]
    },
    security: {
      kicker: "SICHERHEIT & SOUVERÄNITÄT",
      heading: "Ihre Daten: sicher und souverän",
      lead: "Open Source, basierend auf Matrix, im Einklang mit Ihren Sicherheitsanforderungen",
      ctaLabel: "Sprechen Sie mit uns über Hosting",
      cards: [{
        title: "Ende-zu-Ende verschlüsselt für sichere Zusammenarbeit",
        description: "NeoBoard schützt Ihre Informationen vor unbefugtem Zugriff durch starke Ende-zu-Ende-Verschlüsselung – DSGVO-konform und nach EU-Standards."
      }, {
        title: "Digitale Souveränität mit Matrix und Element",
        description: "Open-Source-Software auf Basis des Matrix-Protokolls. Sie entscheiden, wo sie läuft: on premise oder auf einem dedizierten Server."
      }, {
        title: "Erweiterbar und anpassbar",
        description: "Eine Integration in Element Web ermöglicht den Aufbau einer multifunktionalen Umgebung (Chat, Video, Kalenderfunktionen, Dateiverwaltung, …)."
      }]
    },
    runsOn: {
      label: "LÄUFT AUF",
      items: ["Matrix-Protokoll", "Element Web", "Element Server Suite Pro", "MatrixRTC", "Matrix Authentication Service"]
    },
    sectors: {
      kicker: "BRANCHEN",
      heading: "Entwickelt für Verwaltung, regulierte Einrichtungen und Bildung",
      tabs: [{
        label: "Einsatz in der öffentlichen Verwaltung",
        cases: [{
          title: "Vertraulichkeit gewährleistet",
          description: "Alle Informationen bleiben geschützt – vom ersten Entwurf bis zur finalen Freigabe, vom Klassenzimmer bis zum Ausschuss."
        }, {
          title: "Nahtlose Zusammenarbeit",
          description: "Erleichtern Sie die Zusammenarbeit in Echtzeit, unabhängig von Standort oder Abteilung. Teilen Sie Ideen, arbeiten Sie gemeinsam an Projekten und optimieren Sie Entscheidungsprozesse – sicher und effizient."
        }, {
          title: "Benutzerfreundlich und vielseitig",
          description: "Intuitive Bedienung und vielfältige Funktionen machen unser Whiteboard zum idealen Tool für Präsentationen, Brainstorming und Projektmanagement."
        }, {
          title: "Angepasst an Ihre Bedürfnisse",
          description: "Skalierbar und flexibel, passt sich unser Whiteboard den spezifischen Anforderungen Ihrer Verwaltung an – für effizientes und sicheres Arbeiten."
        }]
      }, {
        label: "Einsatz in Schulen",
        cases: [{
          title: "Lehren wie nie zuvor",
          description: "Machen Sie Lerninhalte lebendig mit Präsentationen, interaktiven Übungen und Echtzeit-Zusammenarbeit."
        }, {
          title: "Individuelles Lernen fördern",
          description: "Passen Sie den Unterricht an die Bedürfnisse jedes Schülers an, indem Sie auf verschiedene Lernstile und -geschwindigkeiten eingehen."
        }, {
          title: "Zusammenarbeit erleichtern",
          description: "Geben Sie Schülern die Möglichkeit, gemeinsam an Aufgaben zu arbeiten und ihre Ideen direkt auf dem Board zu präsentieren."
        }, {
          title: "Lernpfade",
          description: "Organisieren und dokumentieren Sie Ihre Lernpfade in Spalten. Jeder Lernschritt ist eine Spalte und ein Frame im NeoBoard. Sie können die Lernpfade mit anderen teilen und gemeinsam daran arbeiten."
        }]
      }]
    },
    specs: {
      kicker: "SPEZIFIKATIONEN",
      heading: "Im Detail",
      groups: [{
        title: "Funktionen",
        items: ["Ideen gemeinsam visualisieren: brainstormen, Mindmaps zeichnen, Mockups und Diagramme erstellen", "Projekte planen und strukturieren", "Dashboard mit Vorschaukacheln", "Infinite-Canvas-Arbeitsfläche", "Vordefinierte Farbpalette für gleichbleibend gute Ergebnisse", "Unterstützung von Mehrsprachigkeit", "\"Fit-to-Shape\" automatische Textgrößenanpassung", "Präsentationsmodus", "Magnetische Pfeile und Verbindungselemente", "Automatische Wiederholung der letzten Farb- und Größenauswahl", "Native Integration mit Element Web", "Leistungsstarke Objekte für Text, Notizen, Linien, Formen und Zeichnungen"]
      }, {
        title: "Sicher und offen – läuft auf Matrix, integriert mit Element",
        items: ["Vollständig kompatibel mit Element Server Suite Pro (ESS Pro)", "Single shared server infrastructure für Element und NeoBoard", "Verwendet Matrix Authentication Service (MAS) – identische Benutzeridentitäten in beiden Anwendungen", "MatrixRTC-basiert für Zusammenarbeit in Echtzeit", "Verfügbar sowohl als eingebettetes Widget als auch als eigenständige Anwendung, mit automatischer Board-Integration in Element-Räume über das Widget", "Erweitert Matrix über den Chat hinaus und ermöglicht kollaborative Boards als First-Class-Funktion"]
      }]
    },
    showcase: {
      kicker: "SHOWCASE",
      heading: "Das NeoBoard, demonstriert in Matrix Live",
      subheading: "Matrix Live S11E15",
      videoLabel: "MATRIX LIVE S11E15",
      playLabel: "Matrix-Live-Folge abspielen (lädt das Video von YouTube)"
    },
    demo: {
      heading: "Bereit für Zusammenarbeit neu erfunden?",
      lead: "Fordern Sie jetzt Ihre kostenlose Demo an und erleben Sie NeoBoard live.",
      email: "E-MAIL",
      matrix: "MATRIX-RAUM"
    },
    footer: {
      developedBy: "Entwickelt von",
      legalNotice: "Impressum",
      contact: "Kontakt",
      privacy: "Datenschutzerklärung"
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CardGrid = __ds_scope.CardGrid;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.PillarList = __ds_scope.PillarList;

__ds_ns.ScreenshotFrame = __ds_scope.ScreenshotFrame;

__ds_ns.SectionIntro = __ds_scope.SectionIntro;

__ds_ns.VideoPoster = __ds_scope.VideoPoster;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CopyButton = __ds_scope.CopyButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.RunsOn = __ds_scope.RunsOn;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.AnchorNav = __ds_scope.AnchorNav;

__ds_ns.SliderControls = __ds_scope.SliderControls;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CategoryChips = __ds_scope.CategoryChips;

__ds_ns.DownloadPanel = __ds_scope.DownloadPanel;

__ds_ns.ImportSteps = __ds_scope.ImportSteps;

__ds_ns.MetaList = __ds_scope.MetaList;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.TemplateCard = __ds_scope.TemplateCard;

__ds_ns.TemplatePreview = __ds_scope.TemplatePreview;

})();
