import { apps, libraries, repoUrl } from '../lib/products'
import { offers, pains, signIn } from '../lib/offers'
import { Button, Icon } from '@pimalaya/shared'
import { StatusBadge } from './ui/StatusBadge'
import { Subscribe } from './Subscribe'
import './HomePage.css'

/*
 * The front door, for both audiences. The hero offers two doors: the tools,
 * and the business page. Then the open-source side (Himalaya first, since it
 * is how most people arrive, the catalogue of installable tools, the library
 * story for Rust developers), the business band (the pain, the two offers),
 * the community band, the follow-along box, and the funding gratitude. The
 * grid only shows products flagged `home` in src/lib/products.ts, apps and
 * libraries alike (a library ships a command too when it carries a CLI
 * feature); the full truthful map lives at /ecosystem/.
 */
export function HomePage() {
  const domains = ['Email', 'Contacts', 'Calendar', 'Time', 'Plumbing']
  const grid = [...apps, ...libraries].filter((product) => product.home)

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Personal Information Management · Est. 2022</span>
          <h1 className="hero__title">Open-source PIM tools, written in Rust</h1>
          <p className="hero__lead">
            Free tools and Rust libraries for email, contacts and calendars,
            built from the standards up and kept working against the servers
            people actually use.
          </p>
          <div className="hero__cta">
            <Button href="#tools" size="lg">
              Explore the tools <Icon name="arrowRight" size={18} />
            </Button>
            <Button href="/business/" variant="secondary" size="lg">
              Pimalaya for business
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

      <section className="apps" id="tools">
        <div className="container">
          <span className="eyebrow">The tools</span>
          <h2 className="apps__title">Installable today</h2>
          <p className="apps__lead">
            Every tool is free software, dual-licensed MIT or Apache-2.0. The
            full map, including what is brewing and what has been retired,
            lives on the <a href="/ecosystem/">ecosystem page</a>.
          </p>
          <p className="apps__lead">
            On Gmail or Microsoft 365? A{' '}
            <a href="/sign-in/">one-step sign-in</a> is planned, so you no
            longer need to register your own app.
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

      <section className="business" id="business">
        <div className="container">
          <span className="eyebrow">For business</span>
          <h2 className="business__title">
            Free software, kept working against real servers
          </h2>
          <p className="business__lead">
            The code is the cheap part. Keeping it working is what costs, and
            it costs every year:
          </p>
          <ul className="business__pains">
            {pains.map((pain) => (
              <li key={pain.title}>
                <strong>{pain.title}</strong> {pain.text}
              </li>
            ))}
          </ul>
          <ul className="business__offers">
            {offers.map((offer) => (
              <li key={offer.id}>
                <a className="business-card" href={`/business/#${offer.id}`}>
                  <span className="business-card__name">{offer.audience}</span>
                  <span className="business-card__note">
                    <strong>{offer.who}</strong> {offer.summary}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a className="business-card" href="/sign-in/">
                <span className="business-card__name">
                  {signIn.audience}{' '}
                  <span className="status status--young">planned</span>
                </span>
                <span className="business-card__note">
                  <strong>{signIn.who}</strong> {signIn.summary}
                </span>
              </a>
            </li>
          </ul>
          <div className="business__cta">
            <Button href="/business/" size="lg">
              Pimalaya for business <Icon name="arrowRight" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="community">
        <div className="container">
          <span className="eyebrow">Community</span>
          <h2 className="community__title">Talk, contribute, build on it</h2>
          <p className="community__lead">
            Questions and development talk in the{' '}
            <a
              href="https://matrix.to/#/#pimalaya:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matrix room
            </a>
            , news on the{' '}
            <a href="https://blog.pimalaya.org" target="_blank" rel="noopener noreferrer">
              blog
            </a>{' '}
            and{' '}
            <a
              href="https://fosstodon.org/@pimalaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mastodon
            </a>
            . Bug reports, documentation, packaging and code are all
            contributions, and the CLIs and libraries are made to be built on.
          </p>
          <div className="community__cta">
            <Button href="/community/" variant="secondary" size="md">
              Join the community <Icon name="arrowRight" size={16} />
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
          <div className="gratitude__cta">
            <Button href="/sponsor/" size="md">
              <Icon name="heart" size={18} /> Sponsor Pimalaya
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
