# Step 4 - Technical SEO Baseline (Single-Page CV)

Este paso define el SEO técnico mínimo para una web profesional de una sola página.

## Objetivo

- Mejorar descubrimiento en buscadores.
- Mantener metadatos consistentes para compartir en redes.
- Asegurar indexación correcta de la URL principal.

## Configuración aplicada

### 1) Metadatos base en `index.html`

Archivo:

- `src/index.html`

Elementos configurados:

- `<title>`: `Luis Yauri | Software Developer`
- `<meta name="description">`
- Open Graph:
  - `og:type`
  - `og:title`
  - `og:description`
  - `og:url`
- Twitter card:
  - `twitter:card`
- Canonical:
  - `<link rel="canonical" href="https://luisyauri.dev/" />`

### 2) Structured data (JSON-LD)

Archivo:

- `src/index.html`

Schema agregado:

- `Person` con:
  - `name`
  - `url`
  - `jobTitle`
  - `sameAs`

### 3) Robots y Sitemap

Archivos:

- `public/robots.txt`
- `public/sitemap.xml`

Contenido esperado para sitio de una hoja:

- `robots.txt` permite crawling general (`Allow: /`)
- `robots.txt` referencia el sitemap
- `sitemap.xml` incluye solo la URL raíz (`https://luisyauri.dev/`)

## Checklist de validación

1. Verificar que el título y description sean correctos en la página publicada.
2. Validar Open Graph al compartir la URL.
3. Confirmar que `robots.txt` responde en `/robots.txt`.
4. Confirmar que `sitemap.xml` responde en `/sitemap.xml`.
5. Revisar Search Console para indexación de la home.

## Nota de evolución

Si en el futuro agregas secciones/rutas indexables, actualizar:

- `sitemap.xml`
- metadatos por ruta (title/description)
- structured data según el tipo de contenido.
