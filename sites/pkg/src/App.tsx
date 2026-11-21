import { Footer, Nav } from '@pimalaya/shared'
import type { FooterColumn, NavLink } from '@pimalaya/shared'

import './App.css'

/*
 * The install page of pkg.pimalaya.org. The parts only known at publish time
 * stay as @NAME@ placeholders, filled by the hub of pimalaya/packages on each
 * run (scripts/linux-build there):
 *
 * - @CLIS@: one <li> per tool, a.pkg-tool__name, span.pkg-tool__version and
 *   span.pkg-tool__description
 * - @APT@, @DNF@, @BREW@: the setup commands, HTML-escaped text
 * - @FINGERPRINT@: the signing key fingerprint, in groups of four
 *
 * Each placeholder is a whole text node, so React never splits it.
 */

const navLinks: NavLink[] = [
  { label: 'Website', href: 'https://pimalaya.org', external: true },
  { label: 'Blog', href: 'https://blog.pimalaya.org', external: true },
]

const footerColumns: FooterColumn[] = [
  {
    title: 'Install',
    links: [
      { label: 'Debian, Ubuntu', href: '#apt' },
      { label: 'Fedora, RHEL', href: '#dnf' },
      { label: 'Homebrew', href: '#homebrew' },
      { label: 'Signing key', href: '#key' },
    ],
  },
  {
    title: 'Pimalaya',
    links: [
      { label: 'Website', href: 'https://pimalaya.org', external: true },
      { label: 'Blog', href: 'https://blog.pimalaya.org', external: true },
      { label: 'GitHub', href: 'https://github.com/pimalaya', external: true },
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

export default function App() {
  return (
    <>
      <Nav
        brandLabel="Pimalaya packages home"
        logoTag="packages"
        links={navLinks}
        githubHref="https://github.com/pimalaya/packages"
        sponsorHref="https://pimalaya.org/sponsor/"
      />
      <main>
        <section className="pkg-masthead">
          <div className="container pkg-narrow">
            <span className="eyebrow">Pimalaya packages</span>
            <h1 className="pkg-masthead__title">
              Install the Pimalaya command-line tools
            </h1>
            <p className="pkg-masthead__lead">
              Signed APT and DNF repositories and a Homebrew tap. Each package
              holds the static binary of a GitHub release, with its man pages
              and shell completions, so one repository serves every Debian,
              Ubuntu, Fedora and RHEL version.
            </p>
          </div>
        </section>

        <section className="pkg-section" id="tools">
          <div className="container pkg-narrow">
            <h2 className="pkg-section__title">Tools</h2>
            <ul className="pkg-tools">{'@CLIS@'}</ul>
          </div>
        </section>

        <section className="pkg-section" id="apt">
          <div className="container pkg-narrow">
            <span className="eyebrow">APT</span>
            <h2 className="pkg-section__title">Debian, Ubuntu</h2>
            <pre className="pkg-code">
              <code>{'@APT@'}</code>
            </pre>
            <p className="pkg-section__note">
              Then install a tool, for example <code>sudo apt install ortie</code>.
            </p>
          </div>
        </section>

        <section className="pkg-section" id="dnf">
          <div className="container pkg-narrow">
            <span className="eyebrow">DNF</span>
            <h2 className="pkg-section__title">
              Fedora, RHEL, Rocky Linux, AlmaLinux
            </h2>
            <pre className="pkg-code">
              <code>{'@DNF@'}</code>
            </pre>
            <p className="pkg-section__note">
              Then install a tool, for example <code>sudo dnf install ortie</code>.
            </p>
          </div>
        </section>

        <section className="pkg-section" id="homebrew">
          <div className="container pkg-narrow">
            <span className="eyebrow">Homebrew</span>
            <h2 className="pkg-section__title">macOS and Linux</h2>
            <pre className="pkg-code">
              <code>{'@BREW@'}</code>
            </pre>
          </div>
        </section>

        <section className="pkg-section" id="key">
          <div className="container pkg-narrow">
            <h2 className="pkg-section__title">Signing key</h2>
            <p className="pkg-section__note">
              Packages and indexes are signed with{' '}
              <a href="/pimalaya.asc">pimalaya.asc</a>, fingerprint:
            </p>
            <p className="pkg-fingerprint">
              <code>{'@FINGERPRINT@'}</code>
            </p>
          </div>
        </section>
      </main>
      <Footer
        tagline="Signed packages of the Pimalaya command-line tools"
        logoTag="packages"
        columns={footerColumns}
        copyright="© 2026 Clément DOUIN (soywod)"
        bottomNote={
          <>
            Built from the releases by{' '}
            <a
              href="https://github.com/pimalaya/packages"
              target="_blank"
              rel="noopener noreferrer"
            >
              pimalaya/packages
            </a>
            .
          </>
        }
      />
    </>
  )
}
