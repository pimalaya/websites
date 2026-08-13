// Build-time pre-render for pimalaya.org. The shared machinery (template
// retargeting, module-script stripping, sitemap + robots) lives in
// @pimalaya/shared/prerender; this file only loads the server bundle and
// injects the pages' JSON-LD structured data.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { prerender } from '@pimalaya/shared/prerender'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')
const siteUrl = 'https://pimalaya.org'

const { renderPages, apps, libraries, retired, repoUrl } = await import(
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
 * home page carries the organisation graph (Organization + WebSite + the
 * flagship SoftwareApplication); the ecosystem page a CollectionPage; the
 * sponsor page a plain WebPage. The rest of the head (title, description,
 * canonical, Open Graph) is retargeted from the template by the shared
 * prerender.
 *
 * The graph is selected by slug rather than by the slug being non-empty, so
 * a new page gets no structured data instead of silently inheriting another
 * page's.
 */
function pageHead(page, canonical) {
  const organization = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Pimalaya',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/favicon.svg`,
    description:
      'Pimalaya is an ambitious project that aims to improve open-source tools related to personal information management.',
    foundingDate: '2022',
    email: 'pimalaya.org@posteo.net',
    founder: { '@type': 'Person', name: 'soywod' },
    sameAs: ['https://github.com/pimalaya', 'https://fosstodon.org/@pimalaya'],
    funder: [
      { '@type': 'Organization', name: 'NLnet Foundation', url: 'https://nlnet.nl/' },
      { '@type': 'Organization', name: 'European Commission', url: 'https://www.ngi.eu/' },
    ],
  }

  // A two-step breadcrumb, Pimalaya then the page itself, shared by every
  // page below the root.
  const breadcrumb = (name) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Pimalaya', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name, item: canonical },
    ],
  })

  // The ecosystem page carries the whole catalogue as an ItemList (apps as
  // SoftwareApplication, libraries as SoftwareSourceCode) plus a breadcrumb.
  const products = [...apps, ...libraries, ...retired]

  const graphs = {
    ecosystem: [
      {
        '@type': 'CollectionPage',
        name: page.title,
        description: page.description,
        url: canonical,
        isPartOf: { '@id': `${siteUrl}/#website` },
        publisher: { '@id': `${siteUrl}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type':
                product.kind === 'Library' ? 'SoftwareSourceCode' : 'SoftwareApplication',
              name: product.name,
              description: product.description,
              url: repoUrl(product),
              codeRepository: repoUrl(product),
              programmingLanguage: 'Rust',
              license: 'MIT OR Apache-2.0',
            },
          })),
        },
      },
      breadcrumb('Ecosystem'),
    ],

    // Nothing on the sponsor page is a product or an offer: the tiers buy
    // recognition and a route to the maintainer, not software, which is free
    // either way. So it stays a plain WebPage.
    sponsor: [
      {
        '@type': 'WebPage',
        name: page.title,
        description: page.description,
        url: canonical,
        isPartOf: { '@id': `${siteUrl}/#website` },
        publisher: { '@id': `${siteUrl}/#organization` },
        about: { '@id': `${siteUrl}/#organization` },
      },
      breadcrumb('Sponsor'),
    ],

    '': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Pimalaya',
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Himalaya',
        description: 'CLI to manage emails.',
        url: 'https://github.com/pimalaya/himalaya',
        applicationCategory: 'CommunicationApplication',
        operatingSystem: 'Cross-platform',
        programmingLanguage: 'Rust',
        codeRepository: 'https://github.com/pimalaya/himalaya',
        license: 'MIT OR Apache-2.0',
        author: { '@id': `${siteUrl}/#organization` },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ],
  }

  const graph = graphs[page.slug]
  if (!graph) return ''

  const data = { '@context': 'https://schema.org', '@graph': graph }

  // "</script>" inside a JSON string would end the block early; escape "<".
  const jsonLd = JSON.stringify(data).replace(/</g, '\\u003c')

  return `<script type="application/ld+json">${jsonLd}</script>`
}
