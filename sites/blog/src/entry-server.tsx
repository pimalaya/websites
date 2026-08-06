import { renderToString } from 'react-dom/server'

import App from './App'
import { posts } from './lib/posts'
import type { Post } from './lib/posts'

export { buildFeed } from './lib/feed'

/*
 * Build-time entry (see prerender.js). Renders every page to static markup
 * (the index at `/` plus one page per post at `/<slug>/`), and hands the post
 * data over for the RSS feed and the sitemap.
 */

export interface Page {
  /* '' for the index, otherwise the post slug; the page lands at /<slug>/. */
  slug: string
  /* <title> text; on posts this carries the "| Pimalaya blog" suffix. */
  title: string
  /* Bare post title for structured data; unset on the index. */
  headline?: string
  description: string
  /* YYYY-MM-DD publish date; unset on the index. */
  date?: string
  appHtml: string
}

export function renderPages(): { pages: Page[]; posts: Post[] } {
  const index: Page = {
    slug: '',
    title: 'Pimalaya blog | The project journal',
    description:
      'News from Pimalaya, an ambitious project that aims to improve open-source tools related to personal information management.',
    appHtml: renderToString(<App url="/" />),
  }

  const articles: Page[] = posts.map((post) => ({
    slug: post.slug,
    title: `${post.title} | Pimalaya blog`,
    headline: post.title,
    description: post.description,
    date: post.date,
    appHtml: renderToString(<App url={`/${post.slug}/`} />),
  }))

  return { pages: [index, ...articles], posts }
}
