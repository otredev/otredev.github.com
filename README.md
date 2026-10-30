# OtreDev — Sitio web

Sitio estático de OtreDev, estudio de desarrollo de software ágil con IA.

- `index.html` — página principal (servicios, proceso, proyectos, fundador, FAQ, contacto)
- `portfolio.html` — portafolio completo con filtros y detalle de cada proyecto
- `styles.css` — estilos
- `script.js` — datos editables (contacto y proyectos) y comportamiento
- `i18n.js` — todos los textos en inglés y español (inglés por defecto)
- `img/projects/` — capturas de los proyectos
- `es/` — versión en español (se genera, no la edites a mano)
- `robots.txt`, `sitemap.xml`, `llms.txt` — para buscadores y asistentes de IA (se generan)
- `tools/prerender.js` — genera todo lo anterior

## Personalizar

Todo lo editable está al inicio de `script.js`:

- `CONFIG` — WhatsApp, LinkedIn, GitHub e idioma predeterminado. Si un campo queda vacío, su enlace se oculta. El formulario de contacto abre WhatsApp con nombre, email, asunto y mensaje.
- `PROJECTS` — lista de proyectos. `featured: true` los muestra en la página de inicio.

## Después de cada cambio

Edita solo los archivos de la raíz (`index.html`, `portfolio.html`, `i18n.js`, `script.js`) y luego corre:

```bash
node tools/prerender.js
```

El script:

- escribe en el HTML los textos de `i18n.js`, los proyectos y los enlaces de contacto, para que Google y los asistentes de IA (ChatGPT, Claude, Perplexity) lean la página completa sin ejecutar JavaScript;
- genera `es/index.html` y `es/portfolio.html` con los textos en español;
- agrega canonical, hreflang, Open Graph y datos estructurados (JSON-LD: negocio, fundador, servicios, preguntas frecuentes y proyectos);
- regenera `robots.txt`, `sitemap.xml` y `llms.txt`.

Si cambias de dominio, actualiza `SITE` al inicio de `tools/prerender.js`.
