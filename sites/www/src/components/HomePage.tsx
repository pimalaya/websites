import { apps, libraries, repoUrl } from '../lib/products'
import { Button, Icon } from '@pimalaya/shared'
import { StatusBadge } from './ui/StatusBadge'
import { Subscribe } from './Subscribe'
import './HomePage.css'

/*
 * The front door: what Pimalaya is, Himalaya first (it is how most people
 * arrive), then the catalogue of installable tools, the library story for
 * Rust developers, the follow-along box, and the funding gratitude. The
 * grid only shows products flagged `home` in src/lib/products.ts, apps and
 * libraries alike (a library ships a command too when it carries a CLI
 * feature); the full truthful map lives at /ecosystem/.
 */
export function HomePage() {
  const domains = ['Email', 'Contacts', 'Time', 'Plumbing']
  const grid = [...apps, ...libraries].filter((product) => product.home)

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Personal Information Management · Est. 2022</span>
          <h1 className="hero__title">Open-source PIM tools, written in Rust</h1>
          <p className="hero__lead">
            Pimalaya is an ambitious project that aims to improve open-source
            tools related to personal information management.
          </p>
          <div className="hero__cta">
            <Button href="#apps" size="lg">
              Browse the tools <Icon name="arrowRight" size={18} />
            </Button>
            <Button
              href="https://github.com/pimalaya"
              variant="secondary"
              size="lg"
              external
            >
              <Icon name="github" size={18} /> GitHub
            </Button>
          </div>
        </div>
      </section>

      <section className="flagship">
        <div className="container flagship__inner">
          <div className="flagship__copy">
            <span className="eyebrow">Flagship</span>
            <div className="flagship__head">
              <h2 className="flagship__title">Himalaya</h2>
              <img
                className="flagship__stars"
                src="https://img.shields.io/github/stars/pimalaya/himalaya?style=flat&logo=github&logoColor=white&labelColor=23121c&color=bf1e83"
                alt="Himalaya's GitHub star count"
                height={20}
                loading="lazy"
              />
            </div>
            <p className="flagship__lead">
              Manage your emails from the command line: list, read, compose,
              send, search and move messages, over IMAP or Maildir. Scriptable,
              fast, and at home in a terminal.
            </p>
            <div className="flagship__cta">
              <Button
                href="https://github.com/pimalaya/himalaya#installation"
                size="md"
                external
              >
                Install Himalaya
              </Button>
              <Button
                href="https://github.com/pimalaya/himalaya"
                variant="secondary"
                size="md"
                external
              >
                <Icon name="github" size={16} /> Repository
              </Button>
            </div>
          </div>
          <pre className="flagship__term" aria-label="Himalaya sample session">
            <code>
              <span className="flagship__prompt">$</span> himalaya envelope list
              {'\n'}
              {'\n'}
              {'ID   FLAGS  SUBJECT                    FROM             DATE\n'}
              {'214  ✓      Re: sans-I/O in practice   Ada              1 hour ago\n'}
              {'213         Weekly sync notes          Grace            yesterday\n'}
              {'212  ★      NLnet grant follow-up      NLnet            2 days ago'}
            </code>
          </pre>
        </div>
      </section>

      <section className="apps" id="apps">
        <div className="container">
          <span className="eyebrow">The tools</span>
          <h2 className="apps__title">Installable today</h2>
          <p className="apps__lead">
            Every tool is free software, dual-licensed MIT or Apache-2.0. The
            full map, including what is brewing and what has been retired,
            lives on the <a href="/ecosystem/">ecosystem page</a>.
          </p>

          {domains.map((domain) => (
            <div key={domain} className="apps__group">
              <h3 className="apps__domain">{domain}</h3>
              <ul className="apps__grid">
                {grid
                  .filter((app) => app.domain === domain)
                  .map((app) => (
                    <li key={app.name}>
                      <a className="app-card" href={repoUrl(app)} target="_blank" rel="noopener noreferrer">
                        <div className="app-card__head">
                          <h4 className="app-card__name">{app.name}</h4>
                          <StatusBadge status={app.status} />
                        </div>
                        <p className="app-card__description">{app.description}</p>
                        <span className="app-card__meta">
                          {app.kind} · GitHub <Icon name="arrowRight" size={14} />
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="apps__cta">
            <Button href="/ecosystem/" size="lg">
              Browse the full ecosystem <Icon name="arrowRight" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="devs on-dark">
        <div className="container">
          <span className="eyebrow devs__eyebrow">For Rust developers</span>
          <h2 className="devs__title">I/O-free libraries underneath</h2>
          <p className="devs__lead">
            Every app is a thin frontend over reusable crates. Protocol logic
            lives in sans-I/O coroutine libraries: no sockets opened, no TLS
            imposed, no async runtime chosen for you. You drive them with your
            own I/O: std or no_std, sync or async, desktop or Android.
          </p>
          <ul className="devs__crates">
            {['io-imap', 'io-smtp', 'io-jmap', 'io-webdav', 'io-oauth', 'io-http', 'io-maildir', 'mml', 'vcard'].map(
              (crate) => (
                <li key={crate}>
                  <a
                    href={`https://github.com/pimalaya/${crate}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {crate}
                  </a>
                </li>
              ),
            )}
          </ul>
          <div className="devs__links">
            <Button
              href="https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md"
              variant="secondary"
              size="md"
              external
            >
              How Pimalaya works
            </Button>
            <Button href="/ecosystem/" variant="secondary" size="md">
              Browse the ecosystem
            </Button>
          </div>
        </div>
      </section>

      <Subscribe />

      <section className="gratitude">
        <div className="container gratitude__inner">
          <span className="eyebrow">With gratitude</span>
          <h2 className="gratitude__title">
            Sustained by NLnet and the European Commission
          </h2>
          <p className="gratitude__lead">
            Pimalaya has been financially supported for years through the{' '}
            <a
              href="https://nlnet.nl/project/Pimalaya-PIM/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NGI programs
            </a>{' '}
            of the{' '}
            <a href="https://nlnet.nl/" target="_blank" rel="noopener noreferrer">
              NLnet foundation
            </a>{' '}
            and the{' '}
            <a href="https://www.ngi.eu/" target="_blank" rel="noopener noreferrer">
              European Commission
            </a>
            .
          </p>
          <div className="gratitude__logos">
            <a href="https://nlnet.nl/" target="_blank" rel="noopener noreferrer">
              <img src="/nlnet.svg" alt="NLnet foundation" height={64} loading="lazy" />
            </a>
            <a href="https://nlnet.nl/core/" target="_blank" rel="noopener noreferrer">
              <img src="/ngi0-core.svg" alt="NGI Zero Core" height={64} loading="lazy" />
            </a>
          </div>
          <p className="gratitude__lead">
            If you appreciate the project, you can support it too:
          </p>
          <ul className="gratitude__donate" aria-label="Donation links">
            <li>
              <a href="https://github.com/sponsors/soywod" target="_blank" rel="noopener noreferrer">
                GitHub Sponsors
              </a>
            </li>
            <li>
              <a href="https://ko-fi.com/soywod" target="_blank" rel="noopener noreferrer">
                Ko-fi
              </a>
            </li>
            <li>
              <a href="https://liberapay.com/soywod" target="_blank" rel="noopener noreferrer">
                Liberapay
              </a>
            </li>
            <li>
              <a href="https://www.paypal.com/paypalme/soywod" target="_blank" rel="noopener noreferrer">
                PayPal
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
