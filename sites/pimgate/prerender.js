// Build-time pre-render for the Pimgate one-pager. The shared machinery
// (template retargeting, module-script stripping, sitemap + robots) lives in
// @pimalaya/shared/prerender; this file only loads the server bundle and
// injects the page's JSON-LD structured data.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { prerender } from '@pimalaya/shared/prerender'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')
const siteUrl = 'https://pimgate.pimalaya.org'

const { renderPages } = await import(
  pathToFileURL(resolve(dist, 'server/entry-server.js')).href
)

prerender({
  dist,
  siteUrl,
  pages: renderPages().pages,
  pageHead,
})

/*
 * Per-page head bits: JSON-LD structured data injected at prerender time. The
 * one-pager carries the organisation, the website, and Pimgate as a
 * SoftwareApplication. The rest of the head (title, description, canonical,
 * Open Graph) is retargeted from the template by the shared prerender.
 */
function pageHead(page, canonical) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://pimalaya.org/#organization',
        name: 'Pimalaya',
        url: 'https://pimalaya.org/',
        logo: `${siteUrl}/favicon.svg`,
        description:
          'Pimalaya is an ambitious project that aims to improve open-source tools related to personal information management.',
        foundingDate: '2022',
        email: 'pimalaya.org@posteo.net',
        founder: { '@type': 'Person', name: 'soywod' },
        sameAs: ['https://github.com/pimalaya', 'https://fosstodon.org/@pimalaya'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: canonical,
        name: 'Pimgate',
        inLanguage: 'en',
        publisher: { '@id': 'https://pimalaya.org/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Pimgate',
        description: page.description,
        url: canonical,
        applicationCategory: 'CommunicationApplication',
        operatingSystem: 'Cross-platform',
        programmingLanguage: 'Rust',
        codeRepository: 'https://github.com/pimalaya/pimgate',
        license: 'MIT OR Apache-2.0',
        author: { '@id': 'https://pimalaya.org/#organization' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      },
    ],
  }

  // "</script>" inside a JSON string would end the block early; escape "<".
  const jsonLd = JSON.stringify(data).replace(/</g, '\\u003c')

  return `<script type="application/ld+json">${jsonLd}</script>`
}
