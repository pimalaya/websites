import { renderToString } from 'react-dom/server'

import App from './App'

/* Catalogue data, re-exported for prerender.js (ecosystem page JSON-LD). */
export { apps, libraries, retired, repoUrl } from './lib/products'

/*
 * Build-time entry (see prerender.js). Renders every page to static markup:
 * the home page at `/`, the ecosystem map at `/ecosystem/` and the funding
 * page at `/sponsor/`.
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

  const sponsor: Page = {
    slug: 'sponsor',
    title: 'Pimalaya | Sponsor a one-person ecosystem',
    description:
      'Pimalaya is maintained by one person. Sponsorship is what turns your use of the tools into time spent on them: the tiers, what each one funds, and every way to give.',
    appHtml: renderToString(<App url="/sponsor/" />),
  }

  return { pages: [home, ecosystem, sponsor] }
}
