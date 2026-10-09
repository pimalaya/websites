import type { ComponentType } from 'react'

import { Footer, Nav } from '@pimalaya/shared'
import type { FooterColumn, NavLink } from '@pimalaya/shared'

import { BusinessPage } from './components/BusinessPage'
import { CommunityPage } from './components/CommunityPage'
import { EcosystemPage } from './components/EcosystemPage'
import { HomePage } from './components/HomePage'
import { SignInPage } from './components/SignInPage'
import { SponsorPage } from './components/SponsorPage'

/*
 * Every page is prerendered at build time (see prerender.js), so this is not
 * a router; it just picks the page for one URL. The same switch serves the
 * dev server, where Vite falls back to index.html for every path. The chrome
 * comes from @pimalaya/shared, parameterized with this site's links and copy.
 *
 * The site speaks to two audiences: the open-source side (ecosystem,
 * community, sign-in, sponsor) and the business side (business). The home
 * page presents both.
 */

const pages: Record<string, ComponentType> = {
  ecosystem: EcosystemPage,
  community: CommunityPage,
  'sign-in': SignInPage,
  sponsor: SponsorPage,
  business: BusinessPage,
}

/* One line per link; the blog is the only one leaving the site, and the nav
   marks it so. */
const navLinks: NavLink[] = [
  { label: 'Tools', href: '/#tools' },
  { label: 'Ecosystem', href: '/ecosystem/' },
  { label: 'Business', href: '/business/' },
  { label: 'Community', href: '/community/' },
  { label: 'Blog', href: 'https://blog.pimalaya.org', external: true },
]

/* Grouped footer links, one column per side, then following and contact. */
const footerColumns: FooterColumn[] = [
  {
    title: 'Open source',
    links: [
      { label: 'Ecosystem', href: '/ecosystem/' },
      { label: 'Community', href: '/community/' },
      { label: 'Sponsor', href: '/sponsor/' },
      { label: 'GitHub', href: 'https://github.com/pimalaya', external: true },
      {
        label: 'How Pimalaya works',
        href: 'https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md',
        external: true,
      },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'For business', href: '/business/' },
      { label: 'Providers', href: '/business/#providers' },
      { label: 'Integrators', href: '/business/#integrators' },
      { label: 'Sign-in', href: '/sign-in/' },
    ],
  },
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
    title: 'Contact',
    links: [
      {
        label: 'Matrix',
        href: 'https://matrix.to/#/#pimalaya:matrix.org',
        external: true,
      },
      { label: 'Email', href: 'mailto:pimalaya.org@posteo.net' },
    ],
  },
]

export default function App({ url }: { url: string }) {
  const path = url.replace(/^\/+|\/+$/g, '')
  const Page = pages[path] ?? HomePage

  return (
    <>
      <Nav
        brandLabel="Pimalaya home"
        links={navLinks}
        sponsorHref="/sponsor/"
      />
      <main>
        <Page />
      </main>
      <Footer
        tagline="Open-source PIM tools, written in Rust"
        columns={footerColumns}
      />
    </>
  )
}
