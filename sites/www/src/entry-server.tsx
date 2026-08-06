import { renderToString } from 'react-dom/server'

import App from './App'

/* Catalogue data, re-exported for prerender.js (ecosystem page JSON-LD). */
export { apps, libraries, retired, repoUrl } from './lib/products'

/*
 * Build-time entry (see prerender.js). Renders both pages to static markup:
 * the home page at `/` and the ecosystem map at `/ecosystem/`.
 */

export interface Page {
  /* '' for the home page, otherwise the path; the page lands at /<slug>/. */
  slug: string
  title: string
  description: string
  appHtml: string
}

export function renderPages(): { pages: Page[] } {
  const home: Page = {
    slug: '',
    title: 'Pimalaya | Open-source PIM tools in Rust',
    description:
      'Pimalaya is an ambitious project that aims to improve open-source tools related to personal information management.',
    appHtml: renderToString(<App url="/" />),
  }

  const ecosystem: Page = {
    slug: 'ecosystem',
    title: 'Pimalaya | Apps, libraries and their status',
    description:
      'The honest map of the Pimalaya organisation: installable apps, the I/O-free Rust libraries underneath, and the frozen or retired crates.',
    appHtml: renderToString(<App url="/ecosystem/" />),
  }

  return { pages: [home, ecosystem] }
}
