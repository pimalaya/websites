import { Button, Footer, Nav } from '@pimalaya/shared'
import type { FooterColumn, NavLink } from '@pimalaya/shared'

import { PimgatePage } from './components/PimgatePage'

/*
 * The site is a one-pager prerendered at build time (see prerender.js), so
 * there is no router: the chrome comes from @pimalaya/shared and the page is
 * PimgatePage.
 */

const navLinks: NavLink[] = [
  { label: 'Website', sub: 'pimalaya.org', href: 'https://pimalaya.org', external: true },
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

const footerColumns: FooterColumn[] = [
  {
    title: 'Pimalaya',
    links: [
      { label: 'Website', href: 'https://pimalaya.org', external: true },
      { label: 'Blog', href: 'https://blog.pimalaya.org', external: true },
      { label: 'GitHub', href: 'https://github.com/pimalaya', external: true },
    ],
  },
  {
    title: 'Source',
    links: [
      { label: 'Pimgate', href: 'https://github.com/pimalaya/pimgate', external: true },
      { label: 'The pimdir format', href: 'https://github.com/pimalaya/pimdir', external: true },
      { label: 'This website', href: 'https://github.com/pimalaya/websites', external: true },
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
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya', external: true },
      { label: 'Contact', href: 'mailto:pimalaya.org@posteo.net' },
    ],
  },
]

export default function App() {
  return (
    <>
      <Nav
        brandLabel="Pimgate home"
        logoTag="pimgate"
        links={navLinks}
        githubHref="https://github.com/pimalaya/pimgate"
        cta={
          <Button href="#offers" size="md">
            Get it operated
          </Button>
        }
      />
      <main>
        <PimgatePage />
      </main>
      <Footer
        tagline="The open-source PIM gateway"
        logoTag="pimgate"
        columns={footerColumns}
        bottomNote={
          <>
            Part of{' '}
            <a href="https://pimalaya.org" target="_blank" rel="noopener noreferrer">
              Pimalaya
            </a>
            , open-source PIM tools in Rust.
          </>
        }
      />
    </>
  )
}
