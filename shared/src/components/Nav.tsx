import type { ReactNode } from 'react'

import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Nav.css'

export interface NavLink {
  label: string
  /* Diminished destination shown under the label. */
  sub: string
  href: string
  external?: boolean
}

interface NavProps {
  /* aria-label of the brand link, e.g. "Pimalaya home". */
  brandLabel: string
  /* Optional small tag beside the wordmark ("blog", "pimgate"...). */
  logoTag?: string
  links: NavLink[]
  /* Primary call to action, right-aligned beside the GitHub glyph. */
  cta: ReactNode
  /* GitHub destination of the icon link; defaults to the org. */
  githubHref?: string
}

/* Sticky top navigation. Middle links collapse away on small screens. */
export function Nav({
  brandLabel,
  logoTag,
  links,
  cta,
  githubHref = 'https://github.com/pimalaya',
}: NavProps) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__brand" aria-label={brandLabel}>
          <Logo tag={logoTag} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <span className="nav__link-label">{link.label}</span>
              <span className="nav__link-sub">{link.sub}</span>
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="nav__icon-link"
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pimalaya on GitHub"
          >
            <Icon name="github" size={20} />
          </a>
          {cta}
        </div>
      </div>
    </header>
  )
}
