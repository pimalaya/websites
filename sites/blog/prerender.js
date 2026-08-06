// Build-time pre-render for blog.pimalaya.org. The shared machinery (template
// retargeting, module-script stripping, article og:type, sitemap with lastmod,
// robots) lives in @pimalaya/shared/prerender; this file loads the server
// bundle, writes the RSS feed, and injects the pages' JSON-LD structured data
// plus the article publish date.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { prerender } from '@pimalaya/shared/prerender'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')
const siteUrl = 'https://blog.pimalaya.org'

const { renderPages, buildFeed } = await import(
  pathToFileURL(resolve(dist, 'server/entry-server.js')).href
)

// --- RSS feed (see src/lib/feed.ts, shared with the dev server). ---
writeFileSync(resolve(dist, 'feed.xml'), buildFeed())
console.log('✓ generated dist/feed.xml')

prerender({
  dist,
  siteUrl,
  pages: renderPages().pages,
  pageHead,
})

/*
 * Per-page head bits: JSON-LD structured data on every page (a Blog object on
 * the index, a BlogPosting per article) plus the article publish date. The
 * rest of the head (title, description, canonical, Open Graph, article
 * og:type) is retargeted from the template by the shared prerender.
 */
function pageHead(page, canonical) {
  const publisher = {
    '@type': 'Organization',
    name: 'Pimalaya',
    url: 'https://pimalaya.org',
    logo: `${siteUrl}/favicon.svg`,
  }
  const data = page.date
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: page.headline,
        description: page.description,
        datePublished: page.date,
        url: canonical,
        mainEntityOfPage: canonical,
        image: `${siteUrl}/og.png`,
        author: publisher,
        publisher,
        isPartOf: { '@type': 'Blog', name: 'Pimalaya blog', url: `${siteUrl}/` },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Pimalaya blog',
        description: page.description,
        url: canonical,
        image: `${siteUrl}/og.png`,
        publisher,
      }

  // "</script>" inside a JSON string would end the block early; escape "<".
  const jsonLd = JSON.stringify(data).replace(/</g, '\\u003c')

  const head = []
  if (page.date) {
    head.push(`<meta property="article:published_time" content="${page.date}" />`)
  }
  head.push(`<script type="application/ld+json">${jsonLd}</script>`)
  return head.join('\n    ')
}
