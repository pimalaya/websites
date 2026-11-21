import { renderToString } from 'react-dom/server'

import App from './App'

/*
 * Build-time entry (see prerender.js): the one page, at `/`.
 */

export interface Page {
  slug: string
  title: string
  description: string
  appHtml: string
}

export function renderPages(): Page[] {
  return [
    {
      slug: '',
      title: 'Pimalaya packages | APT, DNF and Homebrew',
      description:
        'Signed APT and DNF repositories and a Homebrew tap for the Pimalaya command-line tools.',
      appHtml: renderToString(<App />),
    },
  ]
}
