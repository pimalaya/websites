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
    title: 'Pimgate | The PIM gateway: mail, contacts and calendars over standard protocols',
    description:
      'Pimgate is the open-source PIM gateway: mail, contacts and calendars served from offline-first local replicas in one open format, over the standard protocols your clients and devices already speak. IMAP and SMTP today, CardDAV and CalDAV on the roadmap.',
    appHtml: renderToString(<App />),
  }

  return { pages: [home] }
}
