/* =========================================================
   OtreDev — script principal
   (los textos de la página están en i18n.js)
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURACIÓN — tus datos de contacto.
   Todos los enlaces de la página se actualizan solos.
   Si dejas un campo vacío, ese enlace se oculta.
   --------------------------------------------------------- */
const CONFIG = {
  whatsapp: "16892434927", // solo números, con código de país
  linkedin: "https://www.linkedin.com/in/heberto-urribarri-2223601a8/",
  github: "https://github.com/otredev",
  defaultLang: "en", // idioma predeterminado: "en" o "es"
}

/* ---------------------------------------------------------
   2. PROYECTOS — agrega, quita o edita proyectos aquí.
   kind:      "client" (para un cliente) | "personal"
   category:  "client" | "app" | "other"   (filtros del portafolio)
   image:     captura en img/projects/ o URL (opcional)
   layout:    miniatura dibujada con CSS si no hay imagen:
              "chart" | "site" | "sudoku" | "number" | "shortener" | "board" | "game" | "links"
   featured:  true → aparece en la página de inicio
   url / repo: enlace en vivo / código (opcionales)
   Los textos van en { en: "...", es: "..." }
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: "otrelink",
    title: "Otrelink",
    kind: "personal",
    category: "app",
    image: "img/projects/otrelink.jpg",
    layout: "links",
    colors: ["#9333ea", "#ec4899"],
    featured: true,
    type: { en: "SaaS · Full‑stack", es: "SaaS · Full‑stack" },
    summary: {
      en: "Modular, self‑hosted Linktree alternative: a live‑preview editor, 14 block types, 12 themes and built‑in analytics.",
      es: "Alternativa a Linktree modular y autoalojada: editor con vista previa en vivo, 14 tipos de bloque, 12 temas y analíticas.",
    },
    challenge: {
      en: "Creators and businesses need one page for everything they share, with full control over the design and real insight into what people click — without being locked into a closed platform.",
      es: "Creadores y negocios necesitan una sola página para todo lo que comparten, con control total del diseño y datos reales de lo que la gente toca, sin quedar atados a una plataforma cerrada.",
    },
    solution: {
      en: "A monorepo with a shared rendering core, so the editor preview is exactly what visitors see. Next.js powers the API and an installable PWA dashboard (drag‑and‑drop blocks, scheduling, undo/redo, multiple pages); the public page is lightweight vanilla JS. Includes 7 wallpaper types, 8 button styles, 21 fonts, 39 social networks, SEO, QR codes, JSON import/export and analytics with clicks, CTR, referrers and devices. Every block, theme or font is a plug‑in module.",
      es: "Un monorepo con un núcleo de renderizado compartido, así lo que ves en el editor es exactamente lo que ven los visitantes. Next.js impulsa la API y un dashboard instalable como PWA (bloques que se arrastran, programación, deshacer/rehacer, varias páginas); la página pública es JavaScript vanilla ligero. Incluye 7 tipos de fondo, 8 estilos de botón, 21 fuentes, 39 redes sociales, SEO, códigos QR, importar/exportar en JSON y analíticas con clics, CTR, referrers y dispositivos. Cada bloque, tema o fuente es un módulo que se agrega o quita.",
    },
    technologies: ["Next.js", "React", "Vanilla JS", "Vite", "MongoDB", "Tailwind CSS", "PWA", "Render"],
    url: "https://otrelink.onrender.com",
    repo: "https://github.com/otredev/otrelink",
  },
  {
    id: "atomic-url",
    title: "Atomic URL",
    kind: "personal",
    category: "app",
    layout: "shortener",
    colors: ["#8b7bff", "#22d3ee"],
    featured: false,
    type: { en: "Web app · Link shortener", es: "App web · Acortador de enlaces" },
    summary: {
      en: "Serverless link shortener: short URLs with zero backend and zero cost.",
      es: "Acortador de enlaces sin servidor: URLs cortas sin backend y sin costo.",
    },
    challenge: {
      en: "Share short links without paying for a server or depending on a third‑party service.",
      es: "Compartir enlaces cortos sin pagar un servidor ni depender de un servicio de terceros.",
    },
    solution: {
      en: "Short keys are stored in Firebase Realtime Database; a tiny page hosted on GitHub Pages resolves them and redirects instantly.",
      es: "Las claves cortas se guardan en Firebase Realtime Database; una página mínima en GitHub Pages las resuelve y redirige al instante.",
    },
    technologies: ["JavaScript", "Firebase", "GitHub Pages"],
    url: "https://atomic-url.github.io/x/",
    repo: "https://github.com/atomic-url/x",
  },
  {
    id: "blackboard",
    title: "Blackboard",
    kind: "personal",
    category: "other",
    image: "https://images.steamusercontent.com/ugc/17038353526919109330/874125497B4A873FBF799E2BF39AE19CFD6F376F/",
    layout: "board",
    colors: ["#34d399", "#fbbf24"],
    featured: false,
    type: { en: "Wallpaper Engine · Steam", es: "Wallpaper Engine · Steam" },
    summary: {
      en: "Interactive blackboard wallpaper for Wallpaper Engine, published on Steam.",
      es: "Fondo de pantalla interactivo tipo pizarra para Wallpaper Engine, publicado en Steam.",
    },
    challenge: {
      en: "Turn the desktop into a useful, living space instead of a static image.",
      es: "Convertir el escritorio en un espacio útil y vivo en lugar de una imagen estática.",
    },
    solution: {
      en: "A web‑based wallpaper to write, draw in color and add images right on the desktop, with tools to select and delete elements. Published on the Steam Workshop.",
      es: "Un fondo web para escribir, dibujar a color y agregar imágenes directamente en el escritorio, con herramientas para seleccionar y borrar elementos. Publicado en Steam Workshop.",
    },
    technologies: ["HTML5 Canvas", "JavaScript", "Wallpaper Engine"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3552720352",
  },
  {
    id: "rose",
    title: "Rose Multi Services Group",
    kind: "client",
    category: "client",
    image: "img/projects/rose.jpg",
    layout: "site",
    colors: ["#1e73be", "#7cc242"],
    featured: true,
    type: { en: "WordPress · Cleaning services", es: "WordPress · Servicios de limpieza" },
    summary: {
      en: "Bilingual WordPress site for a residential and commercial cleaning company in Orlando, FL.",
      es: "Sitio bilingüe en WordPress para una empresa de limpieza residencial y comercial en Orlando, FL.",
    },
    challenge: {
      en: "A growing Orlando cleaning company needed a professional online presence to reach both English‑ and Spanish‑speaking customers, show its full range of services and turn visitors into quote requests.",
      es: "Una empresa de limpieza en crecimiento en Orlando necesitaba una presencia en línea profesional para llegar a clientes de habla inglesa e hispana, mostrar todos sus servicios y convertir visitas en solicitudes de cotización.",
    },
    solution: {
      en: "A bilingual (EN/ES) WordPress site built with Elementor and a customized child theme: hero slider, a page for each service (residential, commercial, windows, carpets, move‑in/move‑out, after renovation…), a 3‑step “how it works” flow, a filterable project gallery and quote forms with Contact Form 7. Deployed and hosted on Hostinger with the client's own domain.",
      es: "Un sitio bilingüe (EN/ES) en WordPress hecho con Elementor y un tema hijo personalizado: slider de portada, una página por servicio (residencial, comercial, ventanas, alfombras, mudanzas, post‑remodelación…), sección “cómo funciona” en 3 pasos, galería de proyectos con filtros y formularios de cotización con Contact Form 7. Desplegado y alojado en Hostinger con el dominio propio del cliente.",
    },
    technologies: ["WordPress", "Elementor", "Child theme", "Contact Form 7", "Hostinger"],
    url: "https://rosemultiservicesgroup.com/",
  },
  {
    id: "forex-chart",
    title: "Forex Chart",
    kind: "personal",
    category: "app",
    layout: "chart",
    colors: ["#34d399", "#22d3ee"],
    featured: true,
    type: { en: "Web app · Trading", es: "App web · Trading" },
    summary: {
      en: "Real‑time forex charting platform with indicators and automatic pattern detection.",
      es: "Plataforma de gráficos de forex en tiempo real con indicadores y detección automática de patrones.",
    },
    challenge: {
      en: "I wanted a trading chart built around my own analysis: live prices, my favorite indicators, and chart patterns spotted automatically instead of by eye.",
      es: "Quería un gráfico de trading hecho a la medida de mi análisis: precios en vivo, mis indicadores favoritos y patrones detectados automáticamente en lugar de a ojo.",
    },
    solution: {
      en: "A charting app with a live Socket.IO price feed, multiple timeframes, indicators (SMA, EMA, MACD, RSI, VWAP, volume), drawing tools, a news calendar and detection of candlestick and chart patterns such as head & shoulders, double tops and triangles.",
      es: "Una app de gráficos con precios en vivo vía Socket.IO, múltiples temporalidades, indicadores (SMA, EMA, MACD, RSI, VWAP, volumen), herramientas de dibujo, calendario de noticias y detección de patrones de velas y chartistas como hombro‑cabeza‑hombro, dobles techos y triángulos.",
    },
    technologies: ["React 19", "TypeScript", "Vite", "Lightweight Charts", "Socket.IO"],
  },
  {
    id: "dakeisa",
    title: "Dakeisa",
    kind: "client",
    category: "client",
    image: "img/projects/dakeisa.jpg",
    layout: "site",
    colors: ["#d4af37", "#8b7bff"],
    featured: true,
    type: { en: "Landing page · Music", es: "Landing page · Música" },
    summary: {
      en: "Landing page for a professional live‑music singer.",
      es: "Landing page para una cantante profesional de música en vivo.",
    },
    challenge: {
      en: "Dakeisa needed a place to showcase her music and get booked for weddings, corporate events, restaurants and private celebrations.",
      es: "Dakeisa necesitaba un lugar para mostrar su música y recibir contrataciones para bodas, eventos corporativos, restaurantes y celebraciones privadas.",
    },
    solution: {
      en: "An elegant landing page with demos by event type, services, a photo gallery and direct booking through WhatsApp.",
      es: "Una landing elegante con demos por tipo de evento, servicios, galería de fotos y contratación directa por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    url: "https://dakeisa.github.io/",
    repo: "https://github.com/otredev/Dakeisa",
  },
  {
    id: "vymg",
    title: "VYMG",
    kind: "client",
    category: "client",
    image: "img/projects/vymg.jpg",
    layout: "site",
    colors: ["#22d3ee", "#f472b6"],
    featured: false,
    type: { en: "Website · Events", es: "Sitio web · Eventos" },
    summary: {
      en: "Website for a kids' party and event rentals business.",
      es: "Sitio web para un negocio de fiestas y alquiler para eventos infantiles.",
    },
    challenge: {
      en: "A family business renting inflatables, trampolines, a 360° photo booth, LED robots and more across Zulia needed to show its catalog and receive bookings online.",
      es: "Un negocio familiar que alquila inflables, trampolines, plataforma de fotos 360°, robots LED y más en todo el Zulia necesitaba mostrar su catálogo y recibir reservas en línea.",
    },
    solution: {
      en: "A vibrant landing page with a video hero, service catalog, gallery, testimonials and one‑tap booking through WhatsApp.",
      es: "Una landing vibrante con video de portada, catálogo de servicios, galería, testimonios y reservas con un toque por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    url: "https://vymg.github.io/",
    repo: "https://github.com/otredev/Vymg",
  },
  {
    id: "dozen",
    title: "D Ozen",
    kind: "client",
    category: "client",
    image: "img/projects/dozen.jpg",
    layout: "site",
    colors: ["#22c55e", "#8b7bff"],
    featured: true,
    type: { en: "Website · Finance", es: "Sitio web · Finanzas" },
    summary: {
      en: "Bilingual website for a credit‑repair and financial intelligence firm.",
      es: "Sitio bilingüe para una firma de reparación de crédito e inteligencia financiera.",
    },
    challenge: {
      en: "D Ozen combines AI‑assisted analysis, legal strategy and direct access to capital, and needed a site that builds trust and turns visitors into consultations.",
      es: "D Ozen combina análisis asistido por IA, estrategia jurídica y acceso directo a capital, y necesitaba un sitio que generara confianza y convirtiera visitas en consultas.",
    },
    solution: {
      en: "A premium bilingual (EN/ES) site with animated credit‑score gauges, the founders' story, results, services, process and dedicated consultation pages for each advisor.",
      es: "Un sitio premium bilingüe (ES/EN) con indicadores de puntaje de crédito animados, la historia de los fundadores, resultados, servicios, proceso y páginas de consulta para cada asesor.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Actions"],
    url: "https://0trebeh.github.io/DOZEN/",
    repo: "https://github.com/otredev/DOZEN",
  },
  {
    id: "uniquenumber",
    title: "UniqueNumber",
    kind: "personal",
    category: "app",
    layout: "sudoku",
    colors: ["#fbbf24", "#8b7bff"],
    featured: true,
    type: { en: "Web app · Publishing", es: "App web · Publicación" },
    summary: {
      en: "Puzzle Book Studio: a web editor to create, lay out and export sudoku books ready for Amazon KDP.",
      es: "Puzzle Book Studio: editor web para crear, maquetar y exportar libros de sudoku listos para Amazon KDP.",
    },
    challenge: {
      en: "Publishing a puzzle book means generating hundreds of valid puzzles, grading their difficulty, designing every page and meeting Amazon KDP's strict print specs — work usually spread across several tools.",
      es: "Publicar un libro de puzzles implica generar cientos de sudokus válidos, calificar su dificultad, diseñar cada página y cumplir las estrictas especificaciones de impresión de Amazon KDP, un trabajo que suele repartirse entre varias herramientas.",
    },
    solution: {
      en: "An all‑in‑one studio: a visual page editor, bulk generation of 4×4, 9×9 and 16×16 sudokus in a Web Worker with real difficulty grading (X‑Wing, Swordfish…), automatic solution pages, covers with ISBN barcode, a mascot and story system, a KDP preflight with auto‑fixes, and export to print‑ready PDF and EPUB 3.",
      es: "Un estudio todo en uno: editor visual de páginas, generación masiva de sudokus 4×4, 9×9 y 16×16 en un Web Worker con calificación real de dificultad (X‑Wing, Swordfish…), páginas de soluciones automáticas, portadas con código de barras ISBN, sistema de mascotas e historia, preflight de KDP con correcciones automáticas y exportación a PDF listo para imprenta y EPUB 3.",
    },
    technologies: ["React 19", "TypeScript", "Konva", "pdf-lib", "Zustand", "IndexedDB", "Web Workers", "Playwright"],
  },
  {
    id: "aguitaviva",
    title: "Aguita Viva",
    kind: "client",
    category: "client",
    layout: "site",
    colors: ["#38bdf8", "#22d3ee"],
    featured: false,
    type: { en: "Website · Demo", es: "Sitio web · Demo" },
    summary: {
      en: "Demo website for a local water business.",
      es: "Sitio demo para un negocio local de agua.",
    },
    challenge: {
      en: "A local business needed an online presence to show its products and make ordering easy.",
      es: "Un negocio local necesitaba presencia en línea para mostrar sus productos y facilitar los pedidos.",
    },
    solution: {
      en: "A clean, mobile‑first demo site with products, service areas and direct contact through WhatsApp.",
      es: "Un sitio demo limpio y pensado para móvil con productos, zonas de servicio y contacto directo por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "foodtruck",
    title: "Food Truck",
    kind: "client",
    category: "client",
    image: "img/projects/foodtruck.jpg",
    layout: "site",
    colors: ["#facc15", "#fb923c"],
    featured: false,
    type: { en: "Website · Demo", es: "Sitio web · Demo" },
    summary: {
      en: "Demo site for a Venezuelan food truck: links, landing page and digital menu.",
      es: "Sitio demo para un food truck venezolano: enlaces, landing y menú digital.",
    },
    challenge: {
      en: "Food trucks move around: customers need to know where they are, when they're open and what's on the menu.",
      es: "Los food trucks se mueven: los clientes necesitan saber dónde están, cuándo abren y qué hay en el menú.",
    },
    solution: {
      en: "A link‑in‑bio page (Uber Eats, DoorDash, reviews), a landing page with locations, hours, gallery and FAQ, and a digital menu.",
      es: "Una página de enlaces (Uber Eats, DoorDash, reseñas), una landing con ubicaciones, horarios, galería y FAQ, y un menú digital.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/otredev/FoodTruck_Demo",
  },
  {
    id: "jump",
    title: "Jump",
    kind: "personal",
    category: "other",
    layout: "game",
    colors: ["#8b7bff", "#34d399"],
    featured: false,
    type: { en: "Video game · Godot", es: "Videojuego · Godot" },
    summary: {
      en: "Infinite vertical platformer made with Godot 4, inspired by Doodle Jump.",
      es: "Juego de plataformas vertical infinito hecho con Godot 4, inspirado en Doodle Jump.",
    },
    challenge: {
      en: "Build a Doodle Jump‑style game from scratch and extend it with combat mechanics.",
      es: "Crear desde cero un juego al estilo Doodle Jump y ampliarlo con mecánicas de combate.",
    },
    solution: {
      en: "Auto‑bounce, screen wrap, infinite procedural platforms (moving, fragile and spring), progressive difficulty and a saved high score — with all graphics drawn in code. Combat is the next phase.",
      es: "Rebote automático, paso de un lado a otro de la pantalla, plataformas infinitas (móviles, frágiles y con muelle), dificultad progresiva y récord guardado, con todos los gráficos dibujados por código. El combate es la siguiente fase.",
    },
    technologies: ["Godot 4", "GDScript"],
    repo: "https://github.com/otredev/Jump",
  },
]

/* ---------------------------------------------------------
   3. Idioma
   --------------------------------------------------------- */
const LANG_KEY = "otredev-lang"
let lang = CONFIG.defaultLang

function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY)
    if (saved && I18N[saved]) return saved
  } catch (e) {}
  return CONFIG.defaultLang
}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key
}

function tx(obj) {
  return typeof obj === "string" ? obj : obj[lang] || obj.en
}

function applyLang(next) {
  lang = I18N[next] ? next : "en"
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch (e) {}
  document.documentElement.lang = lang

  $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)))
  $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)))
  $$("[data-i18n-placeholder]").forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)))
  $$("[data-i18n-content]").forEach((el) => (el.content = t(el.dataset.i18nContent)))
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)))

  $$(".lang__btn").forEach((b) => {
    const on = b.dataset.lang === lang
    b.classList.toggle("is-active", on)
    b.setAttribute("aria-pressed", on)
  })
  const toggle = $("#navToggle")
  if (toggle) toggle.setAttribute("aria-label", t($("#nav").classList.contains("is-open") ? "nav.close" : "nav.open"))

  renderProjects()
  const modal = $("#projectModal")
  if (modal && !modal.hidden && modal.dataset.id) fillModal(modal.dataset.id)
  if (typeof ask !== "undefined" && ask.open) renderAsk(false)
}

/* ---------------------------------------------------------
   4. Utilidades
   --------------------------------------------------------- */
function $(sel, ctx = document) {
  return ctx.querySelector(sel)
}
function $$(sel, ctx = document) {
  return [...ctx.querySelectorAll(sel)]
}

const ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
const EXT = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'

/* Miniaturas generadas con CSS (se usan si no hay imagen o si falla) */
function mockup(p) {
  const style = `--c1:${p.colors[0]};--c2:${p.colors[1]}`
  const bar = '<div class="mock__bar"><i></i><i></i><i></i></div>'
  const candles = [
    [30, 55, 1], [40, 60, 0], [35, 50, 1], [45, 70, 1], [55, 72, 0], [50, 65, 1], [60, 80, 1],
    [58, 70, 0], [62, 78, 1], [70, 88, 1], [66, 80, 0], [74, 92, 1],
  ]
    .map(([lo, hi, up]) => `<i class="${up ? "up" : "dn"}" style="--lo:${lo}%;--hi:${hi}%"></i>`)
    .join("")
  const layouts = {
    chart: `${bar}<div class="mock__chart"><div class="m-candles">${candles}</div><div class="m-ma"></div><div class="m-axis"><i></i><i></i><i></i><i></i></div></div>`,
    site: `${bar}<div class="mock__site"><div class="m-nav"><i></i><i></i><i></i></div><div class="m-hero"><div><b></b><em></em><em class="short"></em><span class="m-btn"></span></div><i class="m-img"></i></div></div>`,
    sudoku: `<div class="mock__book"><div class="m-page"><b></b><div class="m-grid">${[..."530070000600195000098000060800060003400803001700020006060000280000419005000080079"].map((d) => `<i>${d === "0" ? "" : d}</i>`).join("")}</div><em></em></div><div class="m-page m-page--r"><span class="m-sudi"></span><div class="m-bubble"></div><div class="m-mini">${"<i></i>".repeat(4)}</div></div></div>`,
    number: `${bar}<div class="mock__number"><strong>#48213</strong><span class="m-btn"></span><div class="m-chips"><i></i><i></i><i></i><i></i></div></div>`,
    shortener: `${bar}<div class="mock__short"><div class="m-input"><em></em><span class="m-btn"></span></div><div class="m-result"><span>atomic-url.github.io/x/?search=</span><b>otre</b></div></div>`,
    board: `<div class="mock__board"><svg viewBox="0 0 200 110" aria-hidden="true"><path d="M20 30c20-14 40 14 60 0s40-14 60 0" /><path d="M24 70h60M24 82h40" /><circle cx="150" cy="72" r="18"/><path d="M120 40l12 12 22-24"/></svg><div class="m-tools"><i></i><i></i><i></i><i></i></div></div>`,
    game: `<div class="mock__game"><i class="p" style="--x:18%;--y:82%"></i><i class="p mv" style="--x:55%;--y:64%"></i><i class="p" style="--x:30%;--y:46%"></i><i class="p br" style="--x:62%;--y:28%"></i><i class="p" style="--x:22%;--y:12%"></i><span class="hero-dot"></span><b>1280</b></div>`,
    links: `<div class="mock__links"><div class="m-phone"><i class="m-avatar"></i><b></b><span></span><span></span><span></span><span></span></div></div>`,
  }
  return `<div class="mock" style="${style}" aria-hidden="true">${layouts[p.layout] || layouts.site}</div>`
}

function thumb(p) {
  const img = p.image
    ? `<img src="${p.image}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`
    : ""
  return `${mockup(p)}${img}`
}

function projectCard(p) {
  return `
    <article class="project reveal" data-category="${p.category}">
      <button class="project__open" data-project="${p.id}" aria-label="${p.title}">
        <div class="project__thumb">
          ${thumb(p)}
          <span class="project__badge project__badge--${p.kind}">${t("proj." + p.kind)}</span>
        </div>
        <div class="project__body">
          <span class="project__type">${tx(p.type)}</span>
          <h3>${p.title}</h3>
          <p>${tx(p.summary)}</p>
          <span class="project__more">${t("proj.more")} ${ARROW}</span>
        </div>
      </button>
    </article>`
}

/* Tarjeta tipo "paper" (solo texto) para la página de inicio */
function paperCard(p) {
  return `
    <article class="paper reveal">
      <button class="paper__open" data-project="${p.id}" aria-label="${p.title}">
        <span class="paper__meta">
          <span class="paper__kind paper__kind--${p.kind}">${t("proj." + p.kind)}</span>
          <span>${tx(p.type)}</span>
        </span>
        <h3>${p.title}</h3>
        <p>${tx(p.summary)}</p>
        <span class="paper__more">${t("proj.more")} ${ARROW}</span>
      </button>
    </article>`
}

/* Tarjeta de la galería circular (inicio) */
function galleryCard(p) {
  return `
    <div class="cg__card">
      <button type="button" data-project="${p.id}" aria-label="${p.title}">
        <div class="cg__media">${thumb(p)}</div>
        <div class="cg__info">
          <span class="cg__kind cg__kind--${p.kind}">${t("proj." + p.kind)} · ${tx(p.type)}</span>
          <h3>${p.title}</h3>
          <p>${tx(p.summary)}</p>
        </div>
      </button>
    </div>`
}

/* ---------------------------------------------------------
   5. Render de proyectos y filtros
   --------------------------------------------------------- */
let currentFilter = "all"

function renderProjects() {
  const featured = $("#featuredProjects")
  if (featured) {
    // Primero los destacados, luego el resto: así la galería abre con lo mejor
    const ordered = [...PROJECTS.filter((p) => p.featured), ...PROJECTS.filter((p) => !p.featured)]
    featured.innerHTML = ordered.map(galleryCard).join("")
    layoutGallery()
  }
  const grid = $("#projectsGrid")
  if (grid) {
    grid.innerHTML = PROJECTS.map(projectCard).join("")
    applyFilter()
    observeReveal(grid)
  }
  $$("[data-count]").forEach((el) => {
    const c = el.dataset.count
    el.textContent = c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length
  })
}

function applyFilter() {
  $$("#projectsGrid .project").forEach((card) => {
    card.hidden = !(currentFilter === "all" || card.dataset.category === currentFilter)
  })
}

function setupFilters() {
  const buttons = $$(".filter")
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter
      buttons.forEach((b) => {
        b.classList.toggle("is-active", b === btn)
        b.setAttribute("aria-pressed", b === btn)
      })
      applyFilter()
    })
  })
}

/* ---------------------------------------------------------
   6. Modal de proyecto (en inicio lleva al portafolio)
   --------------------------------------------------------- */
let lastFocus = null

function fillModal(id) {
  const p = PROJECTS.find((x) => x.id === id)
  if (!p) return
  $("#modalBody").innerHTML = `
    <div class="modal__thumb">${thumb(p)}</div>
    <div class="modal__content">
      <span class="project__type">${tx(p.type)} · ${t("proj." + p.kind)}</span>
      <h2 id="modalTitle">${p.title}</h2>
      <div class="modal__cols">
        <div><h4>${t("modal.challenge")}</h4><p>${tx(p.challenge)}</p></div>
        <div><h4>${t("modal.solution")}</h4><p>${tx(p.solution)}</p></div>
      </div>
      <h4>${t("modal.tech")}</h4>
      <div class="tags">${p.technologies.map((x) => `<span>${x}</span>`).join("")}</div>
      <div class="modal__actions">
        ${p.url ? `<a href="${p.url}" class="btn btn--ghost" target="_blank" rel="noopener">${t("modal.live")} ${EXT}</a>` : ""}
        ${p.repo ? `<a href="${p.repo}" class="btn btn--ghost" target="_blank" rel="noopener">${t("modal.code")} ${EXT}</a>` : ""}
        <button type="button" class="btn btn--primary" data-ask>${t("modal.want")} ${ARROW}</button>
      </div>
    </div>`
}

function openProject(id) {
  const modal = $("#projectModal")
  if (!PROJECTS.some((p) => p.id === id)) return
  if (!modal) {
    window.location.href = `portfolio.html#${id}`
    return
  }
  lastFocus = document.activeElement
  modal.dataset.id = id
  fillModal(id)
  modal.hidden = false
  requestAnimationFrame(() => modal.classList.add("is-open"))
  document.body.style.overflow = "hidden"
  $(".modal__close", modal).focus()
}

function closeProject() {
  const modal = $("#projectModal")
  if (!modal || modal.hidden) return
  modal.classList.remove("is-open")
  document.body.style.overflow = ""
  setTimeout(() => (modal.hidden = true), 250)
  if (lastFocus) lastFocus.focus()
}

function setupModal() {
  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-project]")
    if (open) openProject(open.dataset.project)
    if (e.target.closest("[data-close]")) closeProject()
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProject()
  })
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash && $("#projectModal")) openProject(hash)
}

/* ---------------------------------------------------------
   7. Contacto: enlaces y formulario → WhatsApp
   --------------------------------------------------------- */
function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
}

function setupContactLinks() {
  const hrefs = {
    whatsapp: CONFIG.whatsapp ? waLink() : "",
    linkedin: CONFIG.linkedin,
    github: CONFIG.github,
  }
  $$("[data-contact]").forEach((a) => {
    const href = hrefs[a.dataset.contact]
    if (href) a.href = href
    else a.hidden = true
  })
}

/* ---------------------------------------------------------
   7b. Formulario de contacto (un solo modal)
   Nombre, email, qué necesita y mensaje en una sola pantalla.
   Al enviar abre WhatsApp con el mensaje listo.
   --------------------------------------------------------- */
const ASK_SERVICES = ["web", "app", "ai", "other"]
const ask = { open: false, done: false, data: { name: "", email: "", service: "", msg: "" }, errors: {}, lastFocus: null }

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c])
}

const CLOSE_ICON = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'

function buildAsk() {
  if ($("#ask")) return
  const el = document.createElement("div")
  el.className = "ask"
  el.id = "ask"
  el.hidden = true
  el.setAttribute("role", "dialog")
  el.setAttribute("aria-modal", "true")
  el.setAttribute("aria-labelledby", "askTitle")
  el.innerHTML = `<div class="ask__backdrop" data-ask-close></div><div class="ask__panel"></div>`
  document.body.appendChild(el)

  el.addEventListener("click", (e) => {
    if (e.target.closest("[data-ask-close]")) return closeAsk()
    const chip = e.target.closest("[data-choice]")
    if (chip) {
      ask.data.service = chip.dataset.choice
      delete ask.errors.service
      $$("[data-choice]", el).forEach((c) => {
        const on = c === chip
        c.classList.toggle("is-selected", on)
        c.setAttribute("aria-checked", on)
      })
      const err = $('[data-error="service"]', el)
      if (err) err.textContent = ""
    }
  })
  el.addEventListener("input", (e) => {
    const f = e.target.closest("[data-field]")
    if (!f) return
    ask.data[f.dataset.field] = f.value
    delete ask.errors[f.dataset.field]
    f.classList.remove("has-error")
    const err = $(`[data-error="${f.dataset.field}"]`, el)
    if (err) err.textContent = ""
  })
  el.addEventListener("submit", (e) => {
    e.preventDefault()
    sendAsk()
  })
  el.addEventListener("keydown", (e) => {
    if (e.key === "Escape") return closeAsk()
    // Ctrl/Cmd + Enter envía desde el mensaje
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && e.target.tagName === "TEXTAREA") {
      e.preventDefault()
      sendAsk()
    }
    // Mantener el foco dentro del modal
    if (e.key === "Tab") {
      const f = $$("button, input, textarea", el).filter((x) => x.offsetParent && !x.disabled)
      if (!f.length) return
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus() }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus() }
    }
  })
}

function renderAsk(focus) {
  const el = $("#ask")
  if (!el) return
  const panel = $(".ask__panel", el)
  const d = ask.data
  const err = (k) => (ask.errors[k] ? t(ask.errors[k]) : "")
  const close = `<button type="button" class="ask__close" data-ask-close aria-label="${t("ask.close")}">${CLOSE_ICON}</button>`

  if (ask.done) {
    panel.innerHTML = `
      ${close}
      <div class="ask__done">
        <span class="ask__ok" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
        <h2 class="ask__title" id="askTitle">${t("ask.done.q")}</h2>
        <p class="ask__sub">${t("ask.done.s")}</p>
        <button type="button" class="btn btn--primary" data-ask-close>${t("ask.finish")}</button>
      </div>`
    if (focus !== false) requestAnimationFrame(() => $(".ask__done .btn", el).focus())
    return
  }

  panel.innerHTML = `
    ${close}
    <form class="ask__form" novalidate>
      <header class="ask__head">
        <h2 class="ask__title" id="askTitle">${t("ask.title")}</h2>
        <p class="ask__sub">${t("ask.sub")}</p>
      </header>
      <div class="ask__row">
        <label class="ask__field">
          <span>${t("ask.f.name")}</span>
          <input class="ask__input${err("name") ? " has-error" : ""}" data-field="name" type="text" autocomplete="name" placeholder="${t("ask.name.ph")}" value="${escapeHtml(d.name)}">
          <em class="ask__error" data-error="name">${err("name")}</em>
        </label>
        <label class="ask__field">
          <span>${t("ask.f.email")}</span>
          <input class="ask__input${err("email") ? " has-error" : ""}" data-field="email" type="email" inputmode="email" autocomplete="email" placeholder="${t("ask.email.ph")}" value="${escapeHtml(d.email)}">
          <em class="ask__error" data-error="email">${err("email")}</em>
        </label>
      </div>
      <div class="ask__field">
        <span id="askNeed">${t("ask.f.service")}</span>
        <div class="ask__chips" role="radiogroup" aria-labelledby="askNeed">
          ${ASK_SERVICES.map(
            (s) => `<button type="button" class="ask__chip${d.service === s ? " is-selected" : ""}" data-choice="${s}" role="radio" aria-checked="${d.service === s}">${t("ask.opt." + s)}</button>`,
          ).join("")}
        </div>
        <em class="ask__error" data-error="service">${err("service")}</em>
      </div>
      <label class="ask__field">
        <span>${t("ask.f.msg")}</span>
        <textarea class="ask__input${err("msg") ? " has-error" : ""}" data-field="msg" rows="4" placeholder="${t("ask.msg.ph")}">${escapeHtml(d.msg)}</textarea>
        <em class="ask__error" data-error="msg">${err("msg")}</em>
      </label>
      <footer class="ask__foot">
        <span class="ask__hint">${t("ask.review.s")}</span>
        <button type="submit" class="btn btn--primary">${t("ask.send")} ${ARROW}</button>
      </footer>
    </form>`
  if (focus !== false) requestAnimationFrame(() => $(".ask__input", el).focus())
}

function sendAsk() {
  const d = ask.data
  const e = {}
  if (!d.name.trim()) e.name = "ask.err.required"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "ask.err.email"
  if (!d.service) e.service = "ask.err.choice"
  if (!d.msg.trim()) e.msg = "ask.err.required"
  ask.errors = e
  if (Object.keys(e).length) {
    renderAsk(false)
    const first = $("#ask .has-error") || $("#ask .ask__chip")
    if (first) first.focus()
    return
  }
  const text = [
    t("wa.hello"),
    "",
    `*${t("wa.name")}:* ${d.name.trim()}`,
    `*${t("wa.email")}:* ${d.email.trim()}`,
    `*${t("wa.subject")}:* ${t("ask.opt." + d.service)}`,
    "",
    `*${t("wa.msg")}:*`,
    d.msg.trim(),
  ].join("\n")
  window.open(waLink(text), "_blank", "noopener")
  ask.done = true
  renderAsk()
}

function openAsk(service) {
  buildAsk()
  closeProject()
  const el = $("#ask")
  ask.lastFocus = document.activeElement
  if (ask.done) {
    ask.done = false
    ask.data = { name: "", email: "", service: "", msg: "" }
  }
  ask.errors = {}
  if (service && ASK_SERVICES.includes(service)) ask.data.service = service
  ask.open = true
  el.hidden = false
  document.body.style.overflow = "hidden"
  renderAsk()
  requestAnimationFrame(() => el.classList.add("is-open"))
}

function closeAsk() {
  const el = $("#ask")
  if (!el || el.hidden) return
  ask.open = false
  el.classList.remove("is-open")
  document.body.style.overflow = ""
  setTimeout(() => (el.hidden = true), 300)
  if (ask.lastFocus) ask.lastFocus.focus()
}

function setupAsk() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-ask]")
    if (!trigger) return
    e.preventDefault()
    const nav = $("#nav")
    if (nav) nav.classList.remove("is-open")
    openAsk(trigger.dataset.ask)
  })
  if (location.hash === "#contacto" && !$("#contacto")) openAsk()
}

/* ---------------------------------------------------------
   7c. Fondos generativos (hero y franja de declaración)
   Líneas finas que se desplazan muy despacio.
   --------------------------------------------------------- */
/* Sigue el puntero sobre el contenedor del canvas (coordenadas en px CSS del canvas).
   k va de 0 a 1: presencia del mouse, para que el efecto entre y salga suave. */
function pointerFor(cv) {
  const m = { x: 0, y: 0, tx: 0, ty: 0, k: 0, tk: 0 }
  const host = cv.parentElement || cv
  host.addEventListener("pointermove", (e) => {
    const r = cv.getBoundingClientRect()
    m.tx = e.clientX - r.left
    m.ty = e.clientY - r.top
    if (m.tk === 0) { m.x = m.tx; m.y = m.ty }
    m.tk = 1
  }, { passive: true })
  host.addEventListener("pointerleave", () => (m.tk = 0))
  m.step = () => {
    m.x += (m.tx - m.x) * 0.14
    m.y += (m.ty - m.y) * 0.14
    m.k += (m.tk - m.k) * 0.06
  }
  return m
}

/* ---------------------------------------------------------
   7c-1. Shaders WebGL con efecto prisma (sin librerías)
   - "rings": anillos concéntricos separados en RGB (hero y franja)
   - "wave":  onda con aberración cromática (cta-band)
   --------------------------------------------------------- */
const SHADERS = {
  rings: `precision highp float;
    uniform vec2 resolution; uniform float time; uniform vec3 bg; uniform float intensity; uniform float spread;
    void main() {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      float t = time * 0.05;
      float lineWidth = 0.002;
      vec3 color = vec3(0.0);
      for (int j = 0; j < 3; j++) {
        for (int i = 0; i < 5; i++) {
          color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * spread - length(uv) + mod(uv.x + uv.y, 0.2));
        }
      }
      gl_FragColor = vec4(bg + color * intensity, 1.0);
    }`,
  wave: `precision highp float;
    uniform vec2 resolution; uniform float time; uniform vec3 bg; uniform float intensity; uniform float glow;
    uniform vec2 mouse; uniform float mk;
    void main() {
      vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
      // cerca del mouse: la onda se curva hacia él y el prisma se abre
      float pull = mk * exp(-pow((p.x - mouse.x) * 1.3, 2.0));
      float d = length(p) * 0.05 + pull * 0.35;
      float rx = p.x * (1.0 + d);
      float gx = p.x;
      float bx = p.x * (1.0 - d);
      float yr = sin((rx + time) * 1.0) * 0.5;
      float yg = sin((gx + time) * 1.0) * 0.5;
      float yb = sin((bx + time) * 1.0) * 0.5;
      float r = glow * (1.0 + pull * 0.6) / abs(p.y + mix(yr, -mouse.y, pull));
      float g = glow * (1.0 + pull * 0.6) / abs(p.y + mix(yg, -mouse.y, pull));
      float b = glow * (1.0 + pull * 0.6) / abs(p.y + mix(yb, -mouse.y, pull));
      gl_FragColor = vec4(bg + vec3(r, g, b) * intensity, 1.0);
    }`,
}
// canvas → shader, color de fondo, intensidad y velocidad (segundos → time)
const SHADER_FOR = {
  cta: { src: "wave", bg: [0.047, 0.047, 0.051], intensity: 1.35, speed: 0.6, glow: 0.075 },
}

function startShader(cv) {
  const cfg = SHADER_FOR[cv.dataset.field]
  if (!cfg) return false
  let gl
  try { gl = cv.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false }) } catch (e) {}
  if (!gl) return false

  const compile = (type, src) => {
    const sh = gl.createShader(type)
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(sh)); return null }
    return sh
  }
  const vs = compile(gl.VERTEX_SHADER, "attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }")
  const fs = compile(gl.FRAGMENT_SHADER, SHADERS[cfg.src])
  if (!vs || !fs) return false
  const prog = gl.createProgram()
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false
  gl.useProgram(prog)

  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, "p")
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(prog, "resolution")
  const uTime = gl.getUniformLocation(prog, "time")
  gl.uniform3fv(gl.getUniformLocation(prog, "bg"), cfg.bg)
  gl.uniform1f(gl.getUniformLocation(prog, "intensity"), cfg.intensity)
  const uSpread = gl.getUniformLocation(prog, "spread")
  if (uSpread) gl.uniform1f(uSpread, cfg.spread || 5.0)
  const uGlow = gl.getUniformLocation(prog, "glow")
  if (uGlow) gl.uniform1f(uGlow, cfg.glow || 0.05)

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const t0 = performance.now() - Math.random() * 4000
  let raf = 0, visible = true

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const r = cv.getBoundingClientRect()
    cv.width = Math.max(1, Math.round(r.width * dpr))
    cv.height = Math.max(1, Math.round(r.height * dpr))
    gl.viewport(0, 0, cv.width, cv.height)
    gl.uniform2f(uRes, cv.width, cv.height)
  }
  const uMouse = gl.getUniformLocation(prog, "mouse")
  const uMk = gl.getUniformLocation(prog, "mk")
  // La onda de la cta-band (portafolio) no reacciona al mouse: activar con mouse: true en SHADER_FOR
  const ptr = cfg.mouse ? pointerFor(cv) : null
  if (uMk) gl.uniform1f(uMk, 0)
  const draw = (now) => {
    if (uMouse && ptr) {
      ptr.step()
      const W = cv.width, H = cv.height, dpr = W / Math.max(1, cv.clientWidth), mn = Math.min(W, H)
      gl.uniform2f(uMouse, (ptr.x * dpr * 2 - W) / mn, ((H - ptr.y * dpr) * 2 - H) / mn)
      gl.uniform1f(uMk, ptr.k)
    }
    gl.uniform1f(uTime, ((now - t0) / 1000) * cfg.speed)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
  }
  const loop = (now) => {
    draw(now)
    if (visible && !reduce) raf = requestAnimationFrame(loop)
  }

  resize()
  draw(performance.now())
  window.addEventListener("resize", () => { resize(); draw(performance.now()) })
  if (reduce) return true
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(loop)
    }).observe(cv)
  } else raf = requestAnimationFrame(loop)
  return true
}

/* Barra fina de progreso de lectura con el degradado prisma */
function setupProgress() {
  const bar = document.createElement("div")
  bar.className = "prism-progress"
  bar.setAttribute("aria-hidden", "true")
  document.body.appendChild(bar)
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
  }
  update()
  window.addEventListener("scroll", update, { passive: true })
  window.addEventListener("resize", update)
}

function setupFields() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  $$("canvas[data-field]").forEach((cv) => {
    if (startShader(cv)) return // WebGL disponible: usar el shader
    if (cv.dataset.field === "cta") return
    const ctx = cv.getContext("2d")
    const kind = cv.dataset.field
    let w = 0, h = 0, dpr = 1, raf = 0, visible = true

    const resize = () => {
      const r = cv.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      w = r.width; h = r.height
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Ruido suave hecho con senos (sin dependencias)
    const n = (x, y, t) =>
      Math.sin(x * 1.7 + t * 0.6) * 0.5 +
      Math.sin(y * 2.3 - t * 0.4 + x * 0.8) * 0.3 +
      Math.sin((x + y) * 3.1 + t * 0.9) * 0.2

    // Prisma: cada línea se dibuja 3 veces (rojo, amarillo, azul) con mezcla aditiva.
    // Donde los canales coinciden se ve blanco; donde se separan, aparece el arcoíris.
    const PRISM = [
      { c: "254,202,87", o: -1 },
      { c: "47,143,224", o: 0 },
      { c: "255,107,107", o: 1 },
    ]

    // "boost": 0 cuando el canvas entra a la pantalla, 1 cuando está centrado.
    // El efecto se expande (más relieve, más dispersión y más brillo) al acercarse al centro.
    const boostOf = () => {
      const r = cv.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const center = r.top + r.height / 2
      const k = 1 - Math.min(1, Math.abs(center - vh / 2) / (vh * 0.75))
      return k * k * (3 - 2 * k) // suavizado
    }
    let boost = 0
    const ptr = pointerFor(cv)
    // Lente del mouse: separa las líneas alrededor del cursor y abre el prisma
    const lens = (x, y) => {
      if (ptr.k < 0.01) return { push: 0, f: 0 }
      const dx = x - ptr.x, dy = y - ptr.y
      const f = ptr.k * Math.exp(-(dx * dx) / 45000 - (dy * dy) / 16000)
      return { push: (dy / (Math.abs(dy) + 18)) * f * 46, f }
    }

    const drawHero = (t) => {
      // En pantallas estrechas el patrón se calcula sobre un ancho lógico de 900px
      // y se muestra su parte central, para que las ondas no se compriman.
      const uOf = (x) => (x - w / 2) / Math.max(w, 900) + 0.5
      ptr.step()
      boost += (boostOf() - boost) * 0.08
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = "lighter"
      const rows = Math.max(30, Math.round(h / 12))
      const step = 9
      const amp = 1 + boost * 1.6 // el relieve crece al centrarse
      const ridge = (u, v) => {
        const env = Math.pow(Math.sin(Math.PI * u), 1.8)
        const wave = 0.6 + n(u * 3, v * 2, t) + 0.35 * Math.sin(u * 9 - t * 2.2 + v * 4) * boost
        return { env, d: env * (30 + v * 80) * wave * amp }
      }
      const accentRow = Math.round(rows * 0.58)
      for (let r = 0; r < rows; r++) {
        const v = r / (rows - 1)
        const baseY = h * 0.1 + v * h * 0.82
        const near = Math.abs(r - accentRow)
        const accent = near === 0
        const halo = Math.max(0, 1 - near / 4) // las líneas vecinas también brillan
        const alpha = accent ? 0.95 : Math.min(0.85, (0.06 + v * 0.16) * (1 + boost * 0.9) + halo * 0.35 * boost)
        for (const ch of PRISM) {
          ctx.beginPath()
          for (let x = 0; x <= w; x += step) {
            const u = uOf(x)
            const { env, d } = ridge(u, v)
            // dispersión dramática: crece con la curvatura, late y se abre con el boost
            const y0 = baseY - d
            const L = lens(x, y0)
            const spread = ((accent ? 9 : 5 + halo * 6) * (0.2 + env) * (1 + 0.7 * Math.sin(t * 1.6 + u * 6 + v * 3)) * (0.6 + boost * 1.6)) + L.f * 14
            const y = y0 + L.push + ch.o * spread
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          }
          if (accent) {
            ctx.strokeStyle = `rgba(${ch.c},${0.08 + boost * 0.06})`
            ctx.lineWidth = 10 + boost * 8
            ctx.stroke()
            ctx.strokeStyle = `rgba(${ch.c},0.18)`
            ctx.lineWidth = 4
            ctx.stroke()
          }
          ctx.strokeStyle = `rgba(${ch.c},${alpha})`
          ctx.lineWidth = accent ? 2 : 1
          ctx.stroke()
        }
      }
      // Marcador puntual en blanco (sigue al mouse)
      ctx.globalCompositeOperation = "source-over"
      const mx = w * (0.5 + 0.22 * Math.sin(t * 0.25)) * (1 - ptr.k) + ptr.x * ptr.k // el marcador sigue al mouse
      const u = uOf(mx), v = accentRow / (rows - 1)
      const my = h * 0.1 + v * h * 0.82 - ridge(u, v).d
      ctx.fillStyle = "rgba(255,255,255,0.22)"
      ctx.fillRect(mx - 8, my - 8, 16, 16)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(mx - 3.5, my - 3.5, 7, 7)
      ctx.strokeStyle = "rgba(255,255,255,0.18)"
      ctx.beginPath(); ctx.moveTo(mx, my + 10); ctx.lineTo(mx, h - 44); ctx.stroke()
    }

    const drawContour = (t) => {
      ptr.step()
      boost += (boostOf() - boost) * 0.08
      ctx.globalCompositeOperation = "source-over"
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = "lighter"
      const cx = w / 2, cy = h / 2
      const rings = 26
      // los anillos se expanden hacia fuera al centrarse la sección
      const maxR = Math.hypot(w, h) * (0.42 + 0.22 * boost)
      for (let i = 1; i <= rings; i++) {
        const q = i / rings
        const base = q * maxR
        const accent = i === 9 || i === 15
        const alpha = accent ? 0.75 : Math.min(0.6, (0.05 + q * 0.1) * (1 + boost * 1.2))
        const wob = 0.13 + 0.12 * boost
        // los anillos exteriores se dispersan más, como la luz al salir de un prisma
        const disp = (0.01 + 0.05 * q) * (1 + 0.6 * Math.sin(t * 1.3 + i * 0.6)) * (0.6 + boost * 1.4)
        for (const ch of PRISM) {
          ctx.beginPath()
          for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.06) {
            const k = n(Math.cos(a) * 1.2, Math.sin(a) * 1.2 + i * 0.08, t * 0.7)
            const r = base * (1 + wob * k) * (1 + ch.o * disp)
            let x = cx + Math.cos(a) * r * 1.6
            let y = cy + Math.sin(a) * r * 0.75
            if (ptr.k > 0.01) {
              // el mouse empuja los anillos hacia fuera y separa los colores
              const dx = x - ptr.x, dy = y - ptr.y, dd = Math.hypot(dx, dy) + 1
              const f = ptr.k * Math.exp(-(dd * dd) / 90000)
              const push = f * (80 + ch.o * 26)
              x += (dx / dd) * push
              y += (dy / dd) * push
            }
            a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          }
          ctx.closePath()
          if (accent) {
            ctx.strokeStyle = `rgba(${ch.c},${0.07 + boost * 0.06})`
            ctx.lineWidth = 9 + boost * 8
            ctx.stroke()
          }
          ctx.strokeStyle = `rgba(${ch.c},${alpha})`
          ctx.lineWidth = accent ? 1.6 : 1
          ctx.stroke()
        }
      }
      ctx.globalCompositeOperation = "source-over"
    }

    const draw = kind === "contour" ? drawContour : drawHero
    const loop = (ms) => {
      draw(ms / 1000 * 0.35)
      if (!reduce && visible) raf = requestAnimationFrame(loop)
    }

    resize()
    draw(0)
    window.addEventListener("resize", () => { resize(); draw(performance.now() / 1000 * 0.35) })
    if (reduce) return
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) => {
        visible = en.isIntersecting
        cancelAnimationFrame(raf)
        if (visible) raf = requestAnimationFrame(loop)
      }).observe(cv)
    } else raf = requestAnimationFrame(loop)
  })
}

/* ---------------------------------------------------------
   7d. Galería circular: tarjetas en un anillo 3D que gira
   con el scroll (sección fija) y con un giro lento automático.
   --------------------------------------------------------- */
const gallery = { radius: 0, step: 0, auto: 0, rot: 0, running: false }

function layoutGallery() {
  const ring = $("#featuredProjects")
  if (!ring || !ring.classList.contains("cg__ring")) return
  const cards = $$(".cg__card", ring)
  const n = cards.length || 1
  const cw = ring.offsetWidth || 300
  gallery.step = 360 / n
  gallery.radius = Math.round(Math.max(cw * 1.2, (n * (cw + 36)) / (2 * Math.PI)))
  cards.forEach((c, i) => {
    c.dataset.angle = i * gallery.step
    c.style.transform = `rotateY(${i * gallery.step}deg) translateZ(${gallery.radius}px)`
  })
  paintGallery()
}

function paintGallery() {
  const ring = $("#featuredProjects")
  if (!ring) return
  ring.style.transform = `translateZ(${-gallery.radius}px) rotateY(${gallery.rot}deg)`
  $$(".cg__card", ring).forEach((c) => {
    const a = ((+c.dataset.angle + gallery.rot) * Math.PI) / 180
    const facing = (Math.cos(a) + 1) / 2 // 1 = de frente, 0 = de espaldas
    c.style.opacity = (0.12 + 0.88 * Math.pow(facing, 1.6)).toFixed(3)
    c.style.pointerEvents = facing > 0.75 ? "auto" : "none"
    c.firstElementChild.tabIndex = facing > 0.75 ? 0 : -1
  })
}

function setupGallery() {
  const g = $("#workGallery")
  if (!g) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  let last = performance.now()
  let lastScroll = window.scrollY
  let idleSince = performance.now()
  let raf = 0

  const tick = (now) => {
    const dt = Math.min(now - last, 64)
    last = now
    const range = g.offsetHeight - window.innerHeight
    const top = g.getBoundingClientRect().top
    const progress = range > 0 ? Math.min(1, Math.max(0, -top / range)) : 0
    if (window.scrollY !== lastScroll) { lastScroll = window.scrollY; idleSince = now }
    // Giro automático suave cuando el usuario no está desplazándose
    const mobile = window.matchMedia("(max-width: 640px)").matches
    const idle = now - idleSince > 600
    // Escritorio: giro automático lento. Móvil: sin giro y, al soltar, encaja una tarjeta al centro.
    if (!reduce && idle && !mobile) gallery.auto += dt * 0.006
    let target = -progress * 360 - gallery.auto
    if (mobile && idle && gallery.step) target = Math.round(target / gallery.step) * gallery.step
    gallery.rot += (target - gallery.rot) * 0.12 // suavizado
    paintGallery()
    if (gallery.running) raf = requestAnimationFrame(tick)
  }

  const start = () => { if (gallery.running) return; gallery.running = true; last = performance.now(); raf = requestAnimationFrame(tick) }
  const stop = () => { gallery.running = false; cancelAnimationFrame(raf) }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop())).observe(g)
  } else start()
  window.addEventListener("resize", layoutGallery)
}

/* ---------------------------------------------------------
   8. Navegación y animaciones
   --------------------------------------------------------- */
function setupNav() {
  const nav = $("#nav")
  const toggle = $("#navToggle")
  const menu = $("#navMenu")

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open")
    toggle.setAttribute("aria-expanded", open)
    toggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"))
  })
  $$("a", menu).forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open")
      toggle.setAttribute("aria-expanded", "false")
    }),
  )

  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)))

  // Menú desplegable de servicios: hover en escritorio, clic en todos
  const dd = $("#servicesMenu")
  if (dd) {
    const btn = $("button", dd)
    const set = (open) => {
      dd.classList.toggle("is-open", open)
      btn.setAttribute("aria-expanded", open)
    }
    const hoverable = window.matchMedia("(hover: hover) and (min-width: 901px)")
    let timer
    dd.addEventListener("mouseenter", () => { if (hoverable.matches) { clearTimeout(timer); set(true) } })
    dd.addEventListener("mouseleave", () => { if (hoverable.matches) timer = setTimeout(() => set(false), 120) })
    btn.addEventListener("click", () => set(!dd.classList.contains("is-open")))
    $$("a", dd).forEach((a) => a.addEventListener("click", () => set(false)))
    document.addEventListener("click", (e) => { if (!dd.contains(e.target)) set(false) })
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false) })
  }

  // Resaltar sección activa: solo la que cruza el centro de la pantalla.
  // Si el centro cae en una zona sin enlace (hero, FAQ, contacto…), no se marca ninguno.
  const links = $$('.nav__link[href^="#"]')
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean)
  if (!sections.length) return
  let ticking = false
  const update = () => {
    ticking = false
    const mid = window.innerHeight / 2
    const current = sections.find((sec) => {
      const r = sec.getBoundingClientRect()
      return r.top <= mid && r.bottom > mid
    })
    links.forEach((l) => l.classList.toggle("is-active", !!current && l.getAttribute("href") === `#${current.id}`))
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  window.addEventListener("resize", update)
  update()
}

const revealIO =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible")
              revealIO.unobserve(en.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      )
    : null

function observeReveal(root = document) {
  $$(".reveal:not(.is-visible)", root).forEach((el, i) => {
    if (!revealIO) return el.classList.add("is-visible")
    el.style.transitionDelay = `${(i % 4) * 60}ms`
    revealIO.observe(el)
  })
}

/* ---------------------------------------------------------
   9. Inicio
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setupFilters()
  setupContactLinks()
  setupAsk()
  setupNav()
  applyLang(loadLang()) // también dibuja los proyectos
  setupModal()
  setupFields()
  setupGallery()
  setupProgress()
  observeReveal()
  const y = $("#year")
  if (y) y.textContent = new Date().getFullYear()
})
