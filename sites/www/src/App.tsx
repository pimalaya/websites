import { Button, Footer, Nav } from '@pimalaya/shared'
import type { FooterColumn, NavLink } from '@pimalaya/shared'

import { HomePage } from './components/HomePage'
import { EcosystemPage } from './components/EcosystemPage'

/*
 * Every page is prerendered at build time (see prerender.js), so this is not
 * a router; it just picks the page for one URL: `/` is the home page and
 * `/ecosystem/` the ecosystem map. The same switch serves the dev server,
 * where Vite falls back to index.html for every path. The chrome comes from
 * @pimalaya/shared, parameterized with this site's links and copy.
 */

const navLinks: NavLink[] = [
  { label: 'Ecosystem', sub: 'the full map', href: '/ecosystem/' },
  { label: 'Journal', sub: 'Blog', href: 'https://blog.pimalaya.org', external: true },
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
      { label: 'Blog', href: 'https://blog.pimalaya.org', external: true },
      { label: 'RSS feed', href: 'https://blog.pimalaya.org/feed.xml', external: true },
      { label: 'Newsletter', href: '/#subscribe' },
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya', external: true },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Ecosystem', href: '/ecosystem/' },
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
  const path = url.replace(/^\/+|\/+$/g, '')

  return (
    <>
      <Nav
        brandLabel="Pimalaya home"
        links={navLinks}
        cta={
          <Button href="https://buttondown.com/pimalaya" size="md" external>
            Subscribe
          </Button>
        }
      />
      <main>{path === 'ecosystem' ? <EcosystemPage /> : <HomePage />}</main>
      <Footer
        tagline="Open-source PIM tools, written in Rust"
        columns={footerColumns}
        bottomNote={
          <>
            Sustained for years by the{' '}
            <a href="https://nlnet.nl/" target="_blank" rel="noopener noreferrer">
              NLnet foundation
            </a>{' '}
            and the{' '}
            <a href="https://www.ngi.eu/" target="_blank" rel="noopener noreferrer">
              European Commission
            </a>.
          </>
        }
      />
    </>
  )
}
