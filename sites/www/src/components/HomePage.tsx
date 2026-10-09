import { apps, libraries, repoUrl } from '../lib/products'
import { offers } from '../lib/offers'
import { Button, Icon } from '@pimalaya/shared'
import type { IconName } from '@pimalaya/shared'
import { StatusBadge } from './ui/StatusBadge'
import { SubscribeForm } from './Subscribe'
import './HomePage.css'

/*
 * The front door, for both audiences, in five bands. The hero puts the
 * flagship next to the promise: Himalaya is how most people arrive, so its
 * terminal is the first thing seen, with a strip of facts underneath. Then
 * the catalogue of installable tools as a list grouped by domain, the two
 * audiences side by side (the Rust libraries, the business offers), the
 * community and the newsletter together, and the funding gratitude as a
 * closing strip. The list only shows products flagged `home` in
 * src/lib/products.ts, apps and libraries alike (a library ships a command
 * too when it carries a CLI feature); the full truthful map lives at
 * /ecosystem/, and the pain behind the offers at /business/.
 */

const domains = ['Email', 'Contacts', 'Calendar', 'Time', 'Plumbing']

const crates = [
  'io-imap',
  'io-smtp',
  'io-jmap',
  'io-webdav',
  'io-oauth',
  'io-http',
  'io-maildir',
  'mml',
  'vcard',
]

interface Channel {
  name: string
  note: string
  href: string
  icon: IconName
}

const channels: Channel[] = [
  {
    name: 'Matrix',
    note: 'questions, dev talk',
    href: 'https://matrix.to/#/#pimalaya:matrix.org',
    icon: 'chat',
  },
  {
    name: 'Mastodon',
    note: '@pimalaya',
    href: 'https://fosstodon.org/@pimalaya',
    icon: 'mastodon',
  },
  { name: 'Blog', note: 'where news lives', href: 'https://blog.pimalaya.org', icon: 'article' },
  {
    name: 'RSS feed',
    note: 'in your reader',
    href: 'https://blog.pimalaya.org/feed.xml',
    icon: 'rss',
  },
]

export function HomePage() {
  const grid = [...apps, ...libraries].filter((product) => product.home)

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Personal Information Management · Est. 2022</span>
            <h1 className="hero__title">Open-source PIM tools, written in Rust</h1>
            <p className="hero__lead">
              Free tools and Rust libraries for email, contacts and calendars,
              built from the standards up and kept working against the servers
              people actually use.
            </p>
            <div className="hero__cta">
              <Button
                href="https://github.com/pimalaya/himalaya#installation"
                size="lg"
                external
              >
                Install Himalaya
              </Button>
              <Button href="#tools" variant="secondary" size="lg">
                Browse all tools <Icon name="arrowRight" size={18} />
              </Button>
            </div>
          </div>

          <figure className="hero__figure">
            <div className="term">
              <div className="term__bar">
                <span>himalaya · stable</span>
                <span className="term__protocols">IMAP · SMTP · JMAP · Maildir</span>
              </div>
              <pre className="term__body" aria-label="Himalaya sample session">
                <code>
                  <span className="term__prompt">$</span> himalaya envelope list
                  {'\n'}
                  {'\n'}
                  <span className="term__head">
                    {'ID   FLAGS  SUBJECT                    FROM'}
                  </span>
                  {'\n'}
                  {'214  ✓      Re: sans-I/O in practice   Ada\n'}
                  {'213         Weekly sync notes          Grace\n'}
                  {'212  ★      NLnet grant follow-up      NLnet'}
                </code>
              </pre>
            </div>
            <figcaption className="hero__caption">
              <strong>Himalaya</strong>, the flagship: manage your emails from
              the command line. Scriptable, fast, and at home in a terminal.{' '}
              <a
                href="https://github.com/pimalaya/himalaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="container">
          <ul className="facts">
            <li>
              <span className="facts__value">{grid.length} tools</span>
              <span className="facts__note">installable today</span>
            </li>
            <li>
              <span className="facts__value">MIT or Apache-2.0</span>
              <span className="facts__note">free software, dual-licensed</span>
            </li>
            <li>
              <span className="facts__value">Sans-I/O</span>
              <span className="facts__note">Rust libraries underneath</span>
            </li>
            <li>
              <span className="facts__value">NLnet · NGI</span>
              <span className="facts__note">public funding, for years</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="apps" id="tools">
        <div className="container">
          <div className="apps__head">
            <div>
              <span className="eyebrow">The tools</span>
              <h2 className="apps__title">Installable today</h2>
            </div>
            <a className="apps__more" href="/ecosystem/">
              Full ecosystem, including what is brewing{' '}
              <Icon name="arrowRight" size={16} />
            </a>
          </div>

          <div className="apps__list">
            {domains.map((domain) => (
              <div key={domain} className="apps__group">
                <h3 className="apps__domain">{domain}</h3>
                <ul className="apps__rows">
                  {grid
                    .filter((app) => app.domain === domain)
                    .map((app) => (
                      <li key={app.name}>
                        <a
                          className="app-row"
                          href={repoUrl(app)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="app-row__name">{app.name}</span>
                          <span className="app-row__description">{app.description}</span>
                          <span className="app-row__meta">
                            {app.kind} <StatusBadge status={app.status} />
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="apps__note">
            Every tool is free software, dual-licensed MIT or Apache-2.0. On
            Gmail or Microsoft 365? A <a href="/sign-in/">one-step sign-in</a>{' '}
            is planned, so you no longer need to register your own app.
          </p>
        </div>
      </section>

      <section className="sides">
        <div className="container sides__inner">
          <div className="side side--dark on-dark">
            <span className="eyebrow">For Rust developers</span>
            <h2 className="side__title">I/O-free libraries underneath</h2>
            <p className="side__lead">
              Every app is a thin frontend over reusable crates. Protocol logic
              lives in sans-I/O coroutine libraries: no sockets opened, no TLS
              imposed, no async runtime chosen for you. You drive them with
              your own I/O: std or no_std, sync or async, desktop or Android.
            </p>
            <ul className="side__crates">
              {crates.map((crate) => (
                <li key={crate}>
                  <a
                    href={`https://github.com/pimalaya/${crate}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {crate}
                  </a>
                </li>
              ))}
            </ul>
            <div className="side__foot">
              <a
                className="side__link"
                href="https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Pimalaya works <Icon name="externalLink" size={15} />
              </a>
            </div>
          </div>

          <div className="side" id="business">
            <span className="eyebrow">For business</span>
            <h2 className="side__title">Free software, kept working against real servers</h2>
            <p className="side__lead">
              The code is the cheap part. Keeping it working is what costs, and
              it costs every year.
            </p>
            <ul className="side__offers">
              {offers.map((offer) => (
                <li key={offer.id}>
                  <a className="offer-row" href={`/business/#${offer.id}`}>
                    <span className="offer-row__name">{offer.audience}</span>
                    <span className="offer-row__note">{offer.summary}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="side__foot">
              <Button href="/business/" size="md">
                Pimalaya for business <Icon name="arrowRight" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="talk" id="subscribe">
        <div className="container talk__inner">
          <div>
            <span className="eyebrow">Community</span>
            <h2 className="talk__title">Talk, contribute, build on it</h2>
            <p className="talk__lead">
              Bug reports, documentation, packaging and code are all
              contributions, and the CLIs and libraries are made to be built
              on. <a href="/community/">Join the community</a>.
            </p>
            <ul className="talk__channels">
              {channels.map((channel) => (
                <li key={channel.name}>
                  <a
                    className="channel"
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={channel.icon} size={20} />
                    <span className="channel__text">
                      <span className="channel__name">{channel.name}</span>
                      <span className="channel__note">{channel.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="talk__news on-dark">
            <h3 className="talk__news-title">New posts by email</h3>
            <p className="talk__news-lead">
              News lives on the blog; the newsletter brings it to you. No
              tracking, unsubscribe anytime.
            </p>
            <SubscribeForm id="home-email" />
            <p className="subscribe__powered-by">
              <a
                href="https://buttondown.com/refer/pimalaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Buttondown
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="gratitude">
        <div className="container gratitude__inner">
          <div className="gratitude__copy">
            <span className="eyebrow">With gratitude</span>
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
          </div>
          <div className="gratitude__logos">
            <a href="https://nlnet.nl/" target="_blank" rel="noopener noreferrer">
              <img src="/nlnet.svg" alt="NLnet foundation" height={48} loading="lazy" />
            </a>
            <a href="https://nlnet.nl/core/" target="_blank" rel="noopener noreferrer">
              <img src="/ngi0-core.svg" alt="NGI Zero Core" height={48} loading="lazy" />
            </a>
          </div>
          <Button href="/sponsor/" variant="secondary" size="md">
            <Icon name="heart" size={16} /> Sponsor Pimalaya
          </Button>
        </div>
      </section>
    </>
  )
}
