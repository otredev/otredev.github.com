#!/usr/bin/env node
/* =========================================================
   OtreDev — prerender para SEO, AEO y GEO
   Uso:  node tools/prerender.js

   A partir de index.html y portfolio.html (fuente en inglés):
   - escribe en el HTML los textos de i18n.js, los proyectos y los enlaces
     de contacto, para que buscadores y asistentes de IA lean la página
     completa sin ejecutar JavaScript;
   - genera es/index.html y es/portfolio.html con los textos en español;
   - agrega canonical, hreflang, Open Graph y datos estructurados (JSON-LD);
   - genera robots.txt, sitemap.xml y llms.txt.

   Vuelve a correrlo cada vez que cambies textos, proyectos o el HTML.
   Edita solo los archivos de la raíz: la carpeta es/ se sobrescribe.
   ========================================================= */
const fs = require("fs")
const path = require("path")
const vm = require("vm")

const SITE = "https://otredev.pages.dev" // dominio público, sin "/" al final
const ROOT = path.join(__dirname, "..")
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8")
const write = (f, s) => {
  fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true })
  fs.writeFileSync(path.join(ROOT, f), s)
}

/* ---------- cargar textos, proyectos y tarjetas del sitio ---------- */
const ctx = vm.createContext({
  window: {},
  document: { documentElement: { lang: "en", dataset: {} }, addEventListener() {} },
  console,
})
vm.runInContext(read("i18n.js"), ctx)
vm.runInContext(read("script.js"), ctx)
const run = (code) => vm.runInContext(code, ctx)
const I18N = run("I18N")
const PROJECTS = run("PROJECTS")
const CONFIG = run("CONFIG")

const LANGS = {
  en: { dir: "", base: "", locale: "en_US", name: "English" },
  es: { dir: "es/", base: "../", locale: "es_ES", name: "Español" },
}
const PAGES = {
  "index.html": { slug: "", title: "meta.title", desc: "meta.desc" },
  "portfolio.html": { slug: "portfolio", title: "meta.pfTitle", desc: "meta.pfDesc" },
}
const url = (l, page) => `${SITE}/${LANGS[l].dir}${PAGES[page].slug}`
const abs = (src) => (/^https?:/.test(src) ? src : `${SITE}/${src}`)

const escText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const escAttr = (s) => escText(s).replace(/"/g, "&quot;")
const strip = (s) => String(s).replace(/<[^>]+>/g, "")
const between = (html, name, inner) =>
  html.replace(new RegExp(`<!--${name}-->[\\s\\S]*?<!--/${name}-->`, "g"), `<!--${name}-->${inner}<!--/${name}-->`)

/* ---------- datos estructurados ---------- */
function faqOrder(html) {
  return [...html.matchAll(/data-i18n="faq\.(\d+)\.q"/g)].map((m) => m[1])
}

function graphFor(l, page, html) {
  const T = (k) => strip(I18N[l][k] ?? I18N.en[k] ?? "")
  const tx = (o) => (typeof o === "string" ? o : o[l] || o.en)
  const home = url(l, "index.html")
  const org = `${SITE}/#organization`
  const person = `${SITE}/#founder`
  const website = `${SITE}/#website`
  const phone = `+${CONFIG.whatsapp.replace(/^(\d)(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3-$4")}`

  const graph = [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": org,
      name: "OtreDev",
      url: `${SITE}/`,
      logo: `${SITE}/img/brand/apple-touch-icon.png`,
      image: `${SITE}/og-image.png`,
      description: T("meta.desc"),
      slogan: T("hero.title"),
      telephone: phone,
      address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Latin America" },
      ],
      knowsLanguage: ["en", "es"],
      founder: { "@id": person },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: phone,
        url: `https://wa.me/${CONFIG.whatsapp}`,
        availableLanguage: ["English", "Spanish"],
      },
      sameAs: [CONFIG.github].filter(Boolean),
      knowsAbout: ["Web development", "Web applications", "Mobile apps", "Business process automation", "ETL", "AI agents", "WordPress", "Odoo"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: T("svc.title"),
        itemListElement: [1, 2, 3].map((n) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: T(`prod.${n}.t`),
            description: T(`prod.${n}.p`),
            provider: { "@id": org },
            areaServed: ["United States", "Latin America"],
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": person,
      name: "Heberto Urribarri",
      jobTitle: T("founder.role"),
      description: T("founder.p1"),
      image: `${SITE}/img/foto.jpg`,
      worksFor: { "@id": org },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Rafael Urdaneta" },
      address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
      knowsLanguage: ["en", "es"],
      knowsAbout: ["Full-stack development", "Automation", "ETL", "AI agents", "SQL Server", "Odoo ERP", "Scrum"],
      sameAs: [CONFIG.linkedin, "https://github.com/0trebeh"].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": website,
      url: `${SITE}/`,
      name: "OtreDev",
      inLanguage: ["en", "es"],
      publisher: { "@id": org },
    },
  ]

  if (page === "index.html") {
    graph.push({
      "@type": "WebPage",
      "@id": `${home}#webpage`,
      url: home,
      name: T("meta.title"),
      description: T("meta.desc"),
      inLanguage: l,
      isPartOf: { "@id": website },
      about: { "@id": org },
      primaryImageOfPage: `${SITE}/og-image.png`,
    })
    graph.push({
      "@type": "FAQPage",
      "@id": `${home}#faq`,
      inLanguage: l,
      mainEntity: faqOrder(html).map((n) => ({
        "@type": "Question",
        name: T(`faq.${n}.q`),
        acceptedAnswer: { "@type": "Answer", text: T(`faq.${n}.a`) },
      })),
    })
  } else {
    const pf = url(l, page)
    graph.push({
      "@type": "CollectionPage",
      "@id": `${pf}#webpage`,
      url: pf,
      name: T("meta.pfTitle"),
      description: T("meta.pfDesc"),
      inLanguage: l,
      isPartOf: { "@id": website },
      about: { "@id": org },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": p.category === "app" ? "SoftwareApplication" : "CreativeWork",
            "@id": `${pf}#${p.id}`,
            name: p.title,
            url: p.url || `${pf}#${p.id}`,
            ...(p.category === "app" ? { applicationCategory: "WebApplication", operatingSystem: "Web" } : {}),
            genre: tx(p.type),
            abstract: tx(p.summary),
            description: `${tx(p.challenge)} ${tx(p.solution)}`,
            keywords: p.technologies.join(", "),
            ...(p.image ? { image: abs(p.image) } : {}),
            ...(p.repo ? { sameAs: p.repo } : {}),
            creator: { "@id": org },
            inLanguage: l,
          },
        })),
      },
    })
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "OtreDev", item: home },
        { "@type": "ListItem", position: 2, name: l === "es" ? "Portafolio" : "Portfolio", item: pf },
      ],
    })
  }
  return { "@context": "https://schema.org", "@graph": graph }
}

/* ---------- <head>: canonical, hreflang, Open Graph ---------- */
function headFor(l, page, html) {
  const T = (k) => strip(I18N[l][k] ?? I18N.en[k] ?? "")
  const other = l === "en" ? "es" : "en"
  const lines = [
    `<link rel="canonical" href="${url(l, page)}">`,
    `<link rel="alternate" hreflang="en" href="${url("en", page)}">`,
    `<link rel="alternate" hreflang="es" href="${url("es", page)}">`,
    `<link rel="alternate" hreflang="x-default" href="${url("en", page)}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="Heberto Urribarri">`,
    `<meta property="og:site_name" content="OtreDev">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url(l, page)}">`,
    `<meta property="og:title" content="${escAttr(T(PAGES[page].title))}">`,
    `<meta property="og:description" content="${escAttr(T(PAGES[page].desc))}">`,
    `<meta property="og:image" content="${SITE}/og-image.png">`,
    `<meta property="og:image:alt" content="OtreDev">`,
    `<meta property="og:locale" content="${LANGS[l].locale}">`,
    `<meta property="og:locale:alternate" content="${LANGS[other].locale}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escAttr(T(PAGES[page].title))}">`,
    `<meta name="twitter:description" content="${escAttr(T(PAGES[page].desc))}">`,
    `<meta name="twitter:image" content="${SITE}/og-image.png">`,
    `<script type="application/ld+json">${JSON.stringify(graphFor(l, page, html)).replace(/</g, "\\u003c")}</script>`,
  ]
  return "\n  " + lines.join("\n  ") + "\n  "
}

/* ---------- escribir los textos de un idioma en el HTML ---------- */
function bake(html, l) {
  const dict = I18N[l]
  const get = (k) => dict[k] ?? I18N.en[k]
  const tagRe = (attr) => new RegExp(`(<(\\w+)\\b[^>]*?\\s${attr}="([^"]+)"[^>]*>)([\\s\\S]*?)(</\\2>)`, "g")

  html = html.replace(tagRe("data-i18n"), (m, open, tag, key, inner, close) =>
    get(key) == null ? m : open + escText(get(key)) + close,
  )
  html = html.replace(tagRe("data-i18n-html"), (m, open, tag, key, inner, close) =>
    get(key) == null ? m : open + get(key) + close,
  )
  const attrSwap = (src, attr, target) =>
    src.replace(new RegExp(`<[^>]*\\s${attr}="([^"]+)"[^>]*>`, "g"), (tag, key) => {
      if (get(key) == null) return tag
      const val = escAttr(strip(get(key)))
      return new RegExp(`\\s${target}="`).test(tag)
        ? tag.replace(new RegExp(`(\\s${target}=")[^"]*"`), `$1${val}"`)
        : tag.replace(/\s*\/?>$/, (end) => ` ${target}="${val}"${end}`)
    })
  html = attrSwap(html, "data-i18n-content", "content")
  html = attrSwap(html, "data-i18n-aria", "aria-label")
  html = attrSwap(html, "data-i18n-alt", "alt")
  html = attrSwap(html, "data-i18n-placeholder", "placeholder")

  // enlaces de contacto reales (antes los ponía solo el JavaScript)
  const hrefs = { whatsapp: `https://wa.me/${CONFIG.whatsapp}`, linkedin: CONFIG.linkedin, github: CONFIG.github }
  html = html.replace(/<a\b[^>]*\sdata-contact="(\w+)"[^>]*>/g, (tag, k) =>
    hrefs[k] ? tag.replace(/\shref="[^"]*"/, ` href="${hrefs[k]}"`) : tag,
  )

  // botones de idioma
  html = html.replace(/<button([^>]*class="lang__btn)( is-active)?("[^>]*data-lang="(\w+)" aria-pressed=")(true|false)(")/g,
    (m, a, act, b, code, pressed, c) => `<button${a}${code === l ? " is-active" : ""}${b}${code === l}${c}`,
  )
  return html
}

/* ---------- proyectos como HTML estático ---------- */
function projectsFor(l, page) {
  run(`lang = ${JSON.stringify(l)}; ASSET_BASE = ${JSON.stringify(LANGS[l].base)}`)
  if (page === "index.html")
    return run("[...PROJECTS.filter((p) => p.featured), ...PROJECTS.filter((p) => !p.featured)].map(galleryCard).join('')")
  return run("PROJECTS.map(projectCard).join('')")
}

function countsFor(html) {
  return html.replace(/(<em class="filter__n" data-count="(\w+)">)[^<]*(<\/em>)/g, (m, open, c, close) =>
    open + (c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length) + close,
  )
}

/* ---------- construir cada página ---------- */
function build(page, source, l) {
  const L = LANGS[l]
  const other = l === "en" ? "es" : "en"
  let html = bake(source, l)
  html = between(html, "projects", projectsFor(l, page))
  html = countsFor(html)
  html = between(html, "seo", headFor(l, page, source))

  const altPath = l === "en" ? `es/${page}` : `../${page}`
  html = between(
    html,
    "altlang",
    `<a href="${altPath}" hreflang="${other}" lang="${other}">${LANGS[other].name}</a>`,
  )
  html = html.replace(
    /<html\b[^>]*>/,
    `<html lang="${l}"${L.base ? ` data-base="${L.base}"` : ""} data-alt-${other}="${altPath}">`,
  )
  if (L.base) {
    // en es/ los archivos compartidos están un nivel arriba
    html = html.replace(/(\s(?:href|src)=")(?=(?:img\/|styles\.css|i18n\.js|script\.js|og-image))/g, `$1${L.base}`)
    html = html.replace(/<meta name="google-site-verification"[^>]*>\s*/, "")
  }
  return html
}

const today = new Date().toISOString().slice(0, 10)
for (const page of Object.keys(PAGES)) {
  const source = read(page)
  write(page, build(page, source, "en"))
  write(`es/${page}`, build(page, source, "es"))
}

/* ---------- robots.txt ---------- */
const aiBots = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot",
]
write(
  "robots.txt",
  `# OtreDev: buscadores y asistentes de IA son bienvenidos\nUser-agent: *\nAllow: /\n\n` +
    aiBots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n") +
    `\n\nSitemap: ${SITE}/sitemap.xml\n`,
)

/* ---------- sitemap.xml ---------- */
const sitemapUrls = Object.keys(PAGES)
  .flatMap((page) =>
    Object.keys(LANGS).map(
      (l) => `  <url>
    <loc>${url(l, page)}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${url("en", page)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${url("es", page)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en", page)}"/>
  </url>`,
    ),
  )
  .join("\n")
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls}\n</urlset>\n`,
)

/* ---------- llms.txt (resumen para asistentes de IA) ---------- */
{
  const T = (k) => strip(I18N.en[k] ?? "")
  const tx = (o) => (typeof o === "string" ? o : o.en)
  const faq = faqOrder(read("index.html"))
  const lines = [
    "# OtreDev",
    "",
    `> ${T("meta.desc")}`,
    "",
    `OtreDev is run by Heberto Urribarri, a computer engineer based in Orlando, Florida, with 6+ years building web, desktop and automation software for companies in the United States, Colombia and Venezuela. Clients work directly with him from the first call to launch. Work is done in English or Spanish, remotely across the US and Latin America.`,
    "",
    "## Pages",
    "",
    `- [Home (English)](${url("en", "index.html")}): services, recent work, process, founder, FAQ and contact`,
    `- [Portfolio (English)](${url("en", "portfolio.html")}): every project with its challenge, solution and stack`,
    `- [Inicio (Español)](${url("es", "index.html")})`,
    `- [Portafolio (Español)](${url("es", "portfolio.html")})`,
    "",
    "## Services",
    "",
    ...[1, 2, 3].map((n) => `- **${T(`prod.${n}.t`)}**: ${T(`prod.${n}.p`)}`),
    "",
    "## Process",
    "",
    ...[1, 2, 3, 4, 5, 6].map((n) => `${n}. **${T(`proc.${n}.t`)}**: ${T(`proc.${n}.p`)}`),
    "",
    "## Projects",
    "",
    ...PROJECTS.flatMap((p) => [
      `### ${p.title} (${tx(p.type)}, ${p.kind === "client" ? "client project" : "in-house project"})`,
      "",
      tx(p.summary),
      "",
      `- Challenge: ${tx(p.challenge)}`,
      `- Solution: ${tx(p.solution)}`,
      `- Stack: ${p.technologies.join(", ")}`,
      ...(p.url ? [`- Live: ${p.url}`] : []),
      ...(p.repo ? [`- Code: ${p.repo}`] : []),
      `- Details: ${url("en", "portfolio.html")}#${p.id}`,
      "",
    ]),
    "## FAQ",
    "",
    ...faq.flatMap((n) => [`### ${T(`faq.${n}.q`)}`, "", T(`faq.${n}.a`), ""]),
    "## Contact",
    "",
    `- WhatsApp: https://wa.me/${CONFIG.whatsapp} (+1 689 243 4927)`,
    `- LinkedIn: ${CONFIG.linkedin}`,
    `- GitHub: ${CONFIG.github}`,
    "",
  ]
  write("llms.txt", lines.join("\n"))
}

console.log("Listo: index.html, portfolio.html, es/, robots.txt, sitemap.xml y llms.txt")
