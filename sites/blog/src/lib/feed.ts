/*
 * RSS 2.0 feed for the blog, full article content included. Built from the
 * post data only (never from the build clock), so the output stays
 * byte-reproducible. Used by prerender.js (written to dist/feed.xml) and by
 * the dev-server middleware in vite.config.ts (served live at /feed.xml).
 */

import { posts } from './posts'

const siteUrl = 'https://blog.pimalaya.org'

export function buildFeed(): string {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/${post.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/${post.slug}/</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${cdata(post.html)}]]></content:encoded>
    </item>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Pimalaya blog</title>
    <link>${siteUrl}/</link>
    <description>News from Pimalaya, an ambitious project that aims to improve open-source tools related to personal information management.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts.length ? `<lastBuildDate>${rfc822(posts[0].date)}</lastBuildDate>` : ''}
${items}
  </channel>
</rss>
`
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/* A "]]>" inside the body would close the CDATA section early; split it. */
function cdata(html: string): string {
  return html.replace(/]]>/g, ']]]]><![CDATA[>')
}

/* "2026-08-02" -> "Sun, 02 Aug 2026 00:00:00 GMT" (RFC 822, as RSS wants). */
function rfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString()
}
