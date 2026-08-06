// Build-time pre-render, shared by every site in the workspace: render each
// page to static HTML, strip the SPA module script so the shipped pages run
// from HTML + CSS alone, and emit sitemap.xml + robots.txt. Extracted from
// pimalaya.org's prerender.js; each site keeps a thin prerender.js that loads
// its server bundle and passes its pages plus a per-page head hook (JSON-LD).
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

/*
 * pages: [{ slug, title, description, appHtml, date? }], slug '' for the root
 * page. pageHead(page, canonical): string injected at <!--app-head-->
 * (JSON-LD...). A page carrying a date (YYYY-MM-DD, blog articles) is treated
 * as an article: its og:type flips to "article" and the date feeds the
 * sitemap; sites without dated pages are unaffected.
 */
export function prerender({ dist, siteUrl, pages, pageHead = () => '' }) {
  // The built client index.html is the shared template (it links the hashed
  // stylesheet). Read it once before we overwrite it with the rendered root.
  const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

  // --- Pages: static, no SPA runtime. ---
  // Every page reuses the template's <link> stylesheet but drops the module
  // script and any modulepreload: the sites ship zero JavaScript. Retarget the
  // per-page <title>, description, and canonical URL.
  for (const page of pages) {
    const canonical = page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`
    let html = template
      .replace('<!--app-head-->', pageHead(page, canonical))
      .replace('<!--app-html-->', page.appHtml)
      .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
      .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
      .replace(
        /<meta\s+name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${escapeHtml(page.description)}" />`,
      )
      .replace(
        `href="${siteUrl}/" />`,
        `href="${canonical}" />`,
      )
      .replace(
        /<meta property="og:title"[\s\S]*?\/>/,
        `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
      )
      .replace(
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
      )
      .replace(
        `<meta property="og:url" content="${siteUrl}/" />`,
        `<meta property="og:url" content="${canonical}" />`,
      )

    // Dated pages are articles, not the website itself.
    if (page.date) {
      html = html.replace(
        '<meta property="og:type" content="website" />',
        '<meta property="og:type" content="article" />',
      )
    }

    const dir = page.slug ? resolve(dist, page.slug) : dist
    mkdirSync(dir, { recursive: true })
    writeFileSync(resolve(dir, 'index.html'), html)
    console.log(`✓ pre-rendered dist/${page.slug ? page.slug + '/' : ''}index.html`)
  }

  // --- Sitemap + robots. ---
  // Dates come from the pages only (never from the build clock), so the build
  // stays byte-reproducible. On the blog every article carries its publish
  // date and the index inherits the newest one (it moves whenever a post
  // lands); on sites without dated pages no lastmod is emitted at all.
  const newestDate = pages.map((page) => page.date).filter(Boolean).sort().at(-1)
  const urls = pages
    .map((page) => {
      const loc = page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`
      const lastmod = page.date ?? newestDate
      return `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
    })
    .join('\n')
  writeFileSync(
    resolve(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  )
  writeFileSync(
    resolve(dist, 'robots.txt'),
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
  )
  console.log('✓ generated dist/sitemap.xml + dist/robots.txt')

  // The server bundle is a build artefact only; keep it out of the deployed
  // site.
  rmSync(resolve(dist, 'server'), { recursive: true, force: true })
}

export function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
