import type { ReactNode } from 'react'

import { Container } from './ui/Container'
import { Icon } from './ui/Icon'
import { Logo } from './ui/Logo'
import './Footer.css'

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  /* Italic one-liner under the wordmark. */
  tagline: string
  /* Optional small tag beside the wordmark ("blog", "pimgate"...). */
  logoTag?: string
  columns: FooterColumn[]
  /* Left side of the bottom line; defaults to the org copyright. */
  copyright?: string
  /* Right side of the bottom line. */
  bottomNote: ReactNode
}

export function Footer({
  tagline,
  logoTag,
  columns,
  copyright = '© 2022–2026 Clément DOUIN (soywod)',
  bottomNote,
}: FooterProps) {
  return (
    <footer className="footer on-dark">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Logo onDark tag={logoTag} />
            <p className="footer__tagline">{tagline}</p>
            <a
              className="footer__social"
              href="https://github.com/pimalaya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pimalaya on GitHub"
            >
              <Icon name="github" size={20} />
            </a>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h3 className="footer__col-title">{col.title}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>{copyright}</p>
          <p>{bottomNote}</p>
        </div>
      </Container>
    </footer>
  )
}
