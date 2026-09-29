import { renderToString } from 'react-dom/server'

import App from './App'

/* Catalogue data, re-exported for prerender.js (ecosystem page JSON-LD). */
export { apps, libraries, retired, repoUrl } from './lib/products'

/*
 * Build-time entry (see prerender.js). Renders every page to static markup,
 * each landing at `/<slug>/` (the home page at `/`).
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
      'Free tools and Rust libraries for email, contacts and calendars, built from the standards up and kept working against the servers people actually use.',
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
    title: 'Pimalaya | Sponsor free software funded by donations',
    description:
      'Pimalaya is free software, funded entirely by grants and donations: what the money pays for, what the grants already cover, and every way to give.',
    appHtml: renderToString(<App url="/sponsor/" />),
  }

  const community: Page = {
    slug: 'community',
    title: 'Pimalaya | Chat, news, contributing and integrating',
    description:
      'Where the Pimalaya community talks, follows the project, contributes and builds on the tools and libraries.',
    appHtml: renderToString(<App url="/community/" />),
  }

  const signIn: Page = {
    slug: 'sign-in',
    title: 'Pimalaya | One-step Gmail and Microsoft 365 sign-in',
    description:
      'A planned subscription to sign in to Gmail and Microsoft 365 from the Pimalaya tools in one step, without registering your own app.',
    appHtml: renderToString(<App url="/sign-in/" />),
  }

  const business: Page = {
    slug: 'business',
    title: 'Pimalaya for business | Providers and integrators',
    description:
      'The software stays free. Partnerships pay for your service or integration tested on every change, your bugs first, and a maintained version line.',
    appHtml: renderToString(<App url="/business/" />),
  }

  return { pages: [home, ecosystem, community, signIn, sponsor, business] }
}
