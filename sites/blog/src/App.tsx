import { Button, Footer, Icon, Nav } from '@pimalaya/shared'
import type { FooterColumn, NavLink } from '@pimalaya/shared'

import { IndexPage } from './components/IndexPage'
import { PostPage } from './components/PostPage'
import { posts } from './lib/posts'

/*
 * Every page is prerendered at build time (see prerender.js), so this is not a
 * router; it just picks the page for one URL: `/` is the post index, and
 * `/<slug>/` is the matching article. The same switch serves the dev server,
 * where Vite falls back to index.html for every path. The chrome comes from
 * @pimalaya/shared, parameterized with this site's links and copy.
 */

const navLinks: NavLink[] = [
  { label: 'Website', sub: 'pimalaya.org', href: 'https://pimalaya.org', external: true },
  {
    label: 'Chat',
    sub: 'Matrix',
    href: 'https://matrix.to/#/#pimalaya:matrix.org',
    external: true,
  },
  {
    label: 'News',
    sub: 'Mastodon',
    href: 'https://fosstodon.org/@pimalaya',
    external: true,
  },
]

/* Grouped footer links. */
const footerColumns: FooterColumn[] = [
  {
    title: 'Follow',
    links: [
      { label: 'RSS feed', href: '/feed.xml' },
      { label: 'Newsletter', href: '/#subscribe' },
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya', external: true },
    ],
  },
  {
    title: 'Pimalaya',
    links: [
      { label: 'Website', href: 'https://pimalaya.org', external: true },
      { label: 'GitHub', href: 'https://github.com/pimalaya', external: true },
      {
        label: 'How Pimalaya works',
        href: 'https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md',
        external: true,
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Matrix',
        href: 'https://matrix.to/#/#pimalaya:matrix.org',
        external: true,
      },
      { label: 'Contact', href: 'mailto:pimalaya.org@posteo.net' },
    ],
  },
]

export default function App({ url }: { url: string }) {
  const slug = url.replace(/^\/+|\/+$/g, '')
  const post = posts.find((p) => p.slug === slug)

  return (
    <>
      <Nav
        brandLabel="Pimalaya blog home"
        logoTag="blog"
        links={navLinks}
        sponsorHref="https://pimalaya.org/sponsor/"
        cta={
          <Button href="https://buttondown.com/pimalaya" size="md" external>
            <Icon name="mail" size={16} /> Subscribe
          </Button>
        }
      />
      <main>{post ? <PostPage post={post} /> : <IndexPage />}</main>
      <Footer
        tagline="The logbook of the Pimalaya project"
        logoTag="blog"
        columns={footerColumns}
        copyright="© 2026 Clément DOUIN (soywod)"
        bottomNote={
          <>
            Part of{' '}
            <a href="https://pimalaya.org" target="_blank" rel="noopener noreferrer">
              Pimalaya
            </a>,{' '}
            open-source PIM tools in Rust.
          </>
        }
      />
    </>
  )
}
