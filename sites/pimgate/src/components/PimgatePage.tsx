import { Button, Icon } from '@pimalaya/shared'

import { pricing } from '../lib/pricing'
import './PimgatePage.css'

/*
 * The whole one-pager, top to bottom: hero, the deadline (the compelling
 * event), how it works, the open-source section, the two offers, and the
 * trust bullets. Prices come from src/lib/pricing.ts, placeholders until the
 * maintainer fills real numbers.
 */

const components = [
  { name: 'pimgate', repo: 'pimgate' },
  { name: 'neverest', repo: 'neverest' },
  { name: 'ortie', repo: 'ortie' },
  { name: 'pimdir', repo: 'pimdir' },
  { name: 'io-imap', repo: 'io-imap' },
  { name: 'io-smtp', repo: 'io-smtp' },
  { name: 'io-oauth', repo: 'io-oauth' },
  { name: 'io-http', repo: 'io-http' },
]

const contact = 'pimalaya.org@posteo.net'

export function PimgatePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">PIM gateway · Free and open source</span>
          <h1 className="hero__title">
            One gateway for your mail, contacts and calendars
          </h1>
          <p className="hero__lead">
            Pimgate is the PIM gateway: mail, contacts and calendars served
            from offline-first local replicas in one open format, over the
            standard protocols your clients and devices already speak.
          </p>
          <p className="hero__status">
            Mail (IMAP and SMTP) is available today; contacts and calendars
            (CardDAV and CalDAV) are on the roadmap.
          </p>
          <div className="hero__cta">
            <Button href="#offers" size="lg">
              Get it operated <Icon name="arrowRight" size={18} />
            </Button>
            <Button
              href="https://github.com/pimalaya/pimgate"
              variant="secondary"
              size="lg"
              external
            >
              <Icon name="github" size={18} /> GitHub
            </Button>
          </div>
        </div>
      </section>

      <section className="deadline" id="deadline">
        <div className="container">
          <span className="eyebrow">The deadline</span>
          <h2 className="deadline__title">Each of these dates is a working setup breaking</h2>
          <p className="deadline__lead">
            Scanners, printers, ERP systems, monitoring, ticketing and legacy
            line-of-business software speak IMAP and SMTP with a username and a
            password. Most of them cannot be modified to do OAuth. The
            providers are removing what they depend on, on a schedule. These
            mail deadlines are the first wave, and the reason the mail
            frontends shipped first.
          </p>
          <ul className="deadline__grid">
            <li className="deadline-card">
              <span className="deadline-card__date">Already in effect</span>
              <h3 className="deadline-card__name">Basic auth is dead for hosted IMAP and SMTP</h3>
              <p className="deadline-card__description">
                Microsoft 365 and Gmail both reject plain password logins on
                IMAP and SMTP. Anything that cannot obtain and refresh OAuth
                tokens is already locked out.
              </p>
            </li>
            <li className="deadline-card">
              <span className="deadline-card__date">1 October 2026</span>
              <h3 className="deadline-card__name">Exchange Web Services retirement begins</h3>
              <p className="deadline-card__description">
                Microsoft starts retiring EWS for non-Microsoft applications,
                phased tenant by tenant through April 2027. Software built on
                EWS loses its mail access when its tenant's turn comes.
              </p>
            </li>
            <li className="deadline-card">
              <span className="deadline-card__date">End of December 2026</span>
              <h3 className="deadline-card__name">SMTP AUTH goes default-off</h3>
              <p className="deadline-card__description">
                SMTP AUTH with basic authentication becomes disabled by
                default for existing Microsoft 365 tenants. Devices that
                submit mail with a password stop sending.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="how" id="how">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h2 className="how__title">A replica in the middle, standards on your side</h2>
          <ul className="how__grid">
            <li className="how-card">
              <h3 className="how-card__name">A local replica</h3>
              <p className="how-card__description">
                neverest mirrors your collections into a pimdir store: an
                open, documented on-disk format, one store for every kind of
                personal information, offline-first. Today it mirrors
                mailboxes, bodies included; address books and calendars come
                next. The provider side speaks whatever the provider requires,
                OAuth included.
              </p>
            </li>
            <li className="how-card">
              <h3 className="how-card__name">Standard frontends</h3>
              <p className="how-card__description">
                pimgate serves that store on your network over the protocols
                your software already speaks: IMAP and SMTP today, CardDAV and
                CalDAV next. Existing clients and devices keep working
                unchanged, and no provider credential ever reaches the
                frontend.
              </p>
            </li>
            <li className="how-card">
              <h3 className="how-card__name">Durable sending</h3>
              <p className="how-card__description">
                Outgoing items land in a queue that survives restarts and
                outages. Mail sits visibly in an Outbox until the provider is
                reachable, then goes out.
              </p>
            </li>
          </ul>
          <p className="how__exit">
            One open format for all your PIM data: leave anytime, restore anywhere.
          </p>
        </div>
      </section>

      <section className="open on-dark" id="open-source">
        <div className="container">
          <span className="eyebrow open__eyebrow">Open source</span>
          <h2 className="open__title">MIT or Apache-2.0, end to end</h2>
          <p className="open__lead">
            Every component is free software, dual-licensed MIT or Apache-2.0:
            the gateway, the sync engine, the OAuth token keeper, the protocol
            libraries underneath, and the pimdir store specification. Builds
            are reproducible via Nix, and the flake also builds an OCI
            container image. Build it yourself and compare.
          </p>
          <ul className="open__crates">
            {components.map((component) => (
              <li key={component.name}>
                <a
                  href={`https://github.com/pimalaya/${component.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {component.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="open__links">
            <Button
              href="https://github.com/pimalaya/pimgate"
              variant="secondary"
              size="md"
              external
            >
              <Icon name="github" size={16} /> Pimgate repository
            </Button>
            <Button
              href="https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md"
              variant="secondary"
              size="md"
              external
            >
              How Pimalaya works
            </Button>
          </div>
        </div>
      </section>

      <section className="offers" id="offers">
        <div className="container">
          <span className="eyebrow">The offers</span>
          <h2 className="offers__title">Run it yourself, or have us run it on your infra</h2>
          <p className="offers__lead">
            There is no hosted tier: your data does not transit through our
            servers. The gateway runs where you decide, and what we sell is
            the operation around it.
          </p>
          <ul className="offers__grid">
            <li className="offer-card">
              <h3 className="offer-card__name">Self-operated</h3>
              <p className="offer-card__price">Free forever</p>
              <p className="offer-card__description">
                Install and run the gateway yourself. Full protocol features,
                nothing held back, community support on Matrix and GitHub.
              </p>
              <ul className="offer-card__points">
                <li>Every feature, no license key</li>
                <li>Community support</li>
                <li>
                  Optional support and updates subscription for companies:{' '}
                  <strong>{pricing.support}</strong>, on invoice, with security
                  advisories and a blessed update channel
                </li>
              </ul>
              <Button
                className="offer-card__cta"
                href={`mailto:${contact}?subject=Pimgate%20support%20subscription`}
                variant="secondary"
                size="md"
              >
                Contact
              </Button>
            </li>
            <li className="offer-card offer-card--accent">
              <h3 className="offer-card__name">Operated on your infra</h3>
              <p className="offer-card__price">{pricing.operated}</p>
              <p className="offer-card__description">
                We install, maintain and support a gateway on your VPS or your
                hardware. Your machine, your data, our operation.
              </p>
              <ul className="offer-card__points">
                <li>Standard configuration, installed and kept up to date</li>
                <li>Business-hours SLA</li>
                <li>GDPR data-processing agreement</li>
                <li>EU-based operator</li>
              </ul>
              <Button
                className="offer-card__cta"
                href={`mailto:${contact}?subject=Pimgate%20operated%20on%20our%20infra`}
                size="md"
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="trust" id="trust">
        <div className="container">
          <span className="eyebrow">Trust</span>
          <h2 className="trust__title">The security posture</h2>
          <ul className="trust__points">
            <li>
              <strong>Credential-less frontends.</strong> Clients authenticate
              to the gateway; the provider credential lives with the sync
              engine and never reaches the frontends your software talks to.
            </li>
            <li>
              <strong>Your tenant, your scopes.</strong> The OAuth app
              registration stays in your tenant, with the scopes you grant.
              Nothing is registered on our side.
            </li>
            <li>
              <strong>Offline-first.</strong> A provider outage degrades to
              serving the replicas, not to downtime. Reading keeps working;
              outgoing mail queues until the provider is back.
            </li>
            <li>
              <strong>Open end to end.</strong> Open code and one open on-disk
              format for all your PIM data. There is nothing to
              reverse-engineer on the way in and nothing to escape from on the
              way out.
            </li>
            <li>
              <strong>Security artifacts.</strong> A threat model and a
              hardening guide ship with the product, so your review starts
              from our homework instead of from zero.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
