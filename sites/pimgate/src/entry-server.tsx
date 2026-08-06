import { renderToString } from 'react-dom/server'

import App from './App'

/*
 * Build-time entry (see prerender.js). The site is a one-pager: a single page
 * at `/`.
 */

export interface Page {
  /* '' for the root page, otherwise the path; the page lands at /<slug>/. */
  slug: string
  title: string
  description: string
  appHtml: string
}

export function renderPages(): { pages: Page[] } {
  const home: Page = {
    slug: '',
    title: 'Pimgate | Keep IMAP and SMTP working with Microsoft 365 and Gmail',
    description:
      'Pimgate is the open-source mail gateway that keeps IMAP and SMTP clients and devices working against Microsoft 365 and Gmail, served from an offline-first local replica in an open format.',
    appHtml: renderToString(<App />),
  }

  return { pages: [home] }
}
