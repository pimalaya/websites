import { Button, Icon } from '@pimalaya/shared'

import { CONTACT_EMAIL, mailto, offers, pains, partners } from '../lib/offers'
import type { Offer } from '../lib/offers'
import { LIB_COUNT } from '../lib/sponsors'
import './Page.css'
import './BusinessPage.css'

/*
 * The business side of Pimalaya: why a company pays for free software, what
 * it gets, what it never gets, and at what price. Pain first, because nobody
 * reads an offer before recognising their own problem in it. The header
 * names the three audiences beside the promise; the body states the problem
 * next to its deadlines, then the offers side by side with their prices, the
 * limits, and a contact. The page backs direct outreach rather than
 * replacing it, so it ends on a contact.
 */

/*
 * Checked on 2026-10-19 against Microsoft's message center: MC1227454 (EWS)
 * and MC786329 (SMTP AUTH, final removal date announced in the second half of
 * 2027). Re-check before publishing; they move on Microsoft's schedule.
 */
const deadlines = [
  {
    date: 'Since October 2022',
    title: 'Basic auth is gone from IMAP, POP and Exchange ActiveSync.',
  },
  {
    date: '1 October 2026',
    title: 'Exchange Web Services blocked by default; admins can still turn it back on.',
  },
  {
    date: 'End of December 2026',
    title: 'Basic auth for SMTP AUTH turned off by default on Microsoft 365.',
  },
  {
    date: '1 April 2027',
    title: 'Exchange Web Services shut down for good.',
  },
]

const limits = [
  {
    title: 'Ranking or exclusivity.',
    text: 'Everyone is listed, tested and fixed, paying or not.',
  },
  {
    title: 'Features.',
    text: 'Nothing is locked: the code is MIT or Apache-2.0 for everyone.',
  },
  {
    title: 'Endorsement.',
    text: 'We vouch for the integration point, never for your product.',
  },
  {
    title: '24/7 support.',
    text: 'Pimalaya is a small team; response targets are agreed per contract, in days.',
  },
]

function OfferPanel({ offer }: { offer: Offer }) {
  return (
    <li className="panel" id={offer.id}>
      <h3 className="panel__title">{offer.audience}</h3>
      <p className="biz__who">{offer.who}</p>
      <p className="panel__lead">{offer.problem}</p>
      <ul className="ticks">
        {offer.benefits.map((benefit) => (
          <li key={benefit.title}>
            <strong>{benefit.title}</strong> {benefit.text}
          </li>
        ))}
      </ul>
      <div className="panel__foot biz__foot">
        <div>
          <p className="price">
            <span className="price__unit">From</span>
            <span className="price__value">{offer.price}</span>
            <span className="price__unit">per year</span>
          </p>
          {offer.setup && (
            <p className="price__note">Plus a setup from {offer.setup}.</p>
          )}
          {offer.priceNote && <p className="price__note">{offer.priceNote}</p>}
        </div>
        <Button href={mailto(offer.subject)} size="md">
          Get in touch <Icon name="arrowRight" size={16} />
        </Button>
      </div>
    </li>
  )
}

export function BusinessPage() {
  return (
    <>
      <section className="page-head">
        <div className="container page-head__split">
          <div>
            <span className="eyebrow">Pimalaya for business</span>
            <h1 className="page-head__title">
              Mail, contacts and calendars that keep working
            </h1>
            <p className="page-head__lead">
              The ecosystem keeps moving, we keep you working. The code is
              free and stays free. What we sell is what does not come with it:
              your servers, apps and integrations tested on every change, your
              bugs first, maintained for you year after year.
            </p>
            <div className="page-head__cta">
              <Button href={mailto('Partnership')} size="lg">
                <Icon name="mail" size={18} /> Contact us
              </Button>
              <Button href="#offers" variant="secondary" size="lg">
                See the offers <Icon name="arrowRight" size={18} />
              </Button>
            </div>
          </div>

          <ul className="rows">
            {offers.map((offer) => (
              <li key={offer.id}>
                <a className="row" href={`#${offer.id}`}>
                  <span className="row__name">{offer.audience}</span>
                  <span className="row__note">
                    {offer.who} {offer.summary}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="problem">
        <div className="container split">
          <div>
            <span className="eyebrow">The problem</span>
            <h2 className="section__title">Why pay for free software</h2>
            <p className="section__lead">
              Writing a mail client got cheap. Keeping one working against
              real servers did not, and the bill comes back every year.
            </p>
            <ul className="ticks">
              {pains.map((pain) => (
                <li key={pain.title}>
                  <strong>{pain.title}</strong> {pain.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3 className="panel__title">On someone else's schedule</h3>
            <p className="panel__lead">What Microsoft already changed, and what comes next.</p>
            <ol className="timeline biz__timeline">
              {deadlines.map((deadline) => (
                <li key={deadline.title}>
                  <span className="timeline__date">{deadline.date}</span>
                  <span className="timeline__title">{deadline.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section biz__bring">
        <div className="container">
          <div className="panel panel--dark biz__bring-panel">
            <div>
              <span className="eyebrow">What we bring</span>
              <h2 className="section__title">The quirks are already found</h2>
              <p className="panel__lead">
                Since 2022, <strong>{LIB_COUNT} libraries</strong> written
                from the RFCs up (IMAP, SMTP, JMAP, CardDAV, CalDAV, OAuth,
                discovery) and tested against the providers people use, on
                accounts kept for testing alone. A partnership puts yours
                first, for less than the weeks an engineer would spend on them
                each year.
              </p>
              <p className="panel__lead">
                Pimalaya ships no AI. Its tools are made to be driven by other
                software, agents included: JSON output with its schemas, and
                documentation written for integrators.
              </p>
            </div>
            <p className="biz__figure">
              <span className="biz__figure-value">{LIB_COUNT}</span>
              <span>libraries, since 2022</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="offers">
        <div className="container">
          <span className="eyebrow">Partnerships</span>
          <h2 className="section__title">Three ways to partner</h2>
          <ul className="section__body biz__offers">
            {offers.map((offer) => (
              <OfferPanel key={offer.id} offer={offer} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">The limits</span>
          <h2 className="section__title">What a partnership does not buy</h2>
          <ul className="section__body points">
            {limits.map((limit) => (
              <li key={limit.title}>
                <span className="points__title">{limit.title}</span>
                {limit.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel--dark biz__close">
            <div>
              <span className="eyebrow">Partners</span>
              <h2 className="section__title">
                {partners.length === 0 ? 'Be the first' : 'Our partners'}
              </h2>
              {partners.length === 0 ? (
                <p className="panel__lead">
                  None yet: the first partners shape the programme. Listing in
                  the <a href="/ecosystem/#community">community catalogue</a>{' '}
                  stays free for anyone.
                </p>
              ) : (
                <ul className="biz__partners">
                  {partners.map((partner) => (
                    <li key={partner.url}>
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        <img src={partner.logo} alt={partner.name} height={32} loading="lazy" />
                      </a>
                      <p className="panel__lead">{partner.note}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <hr className="biz__rule" />
            <p className="panel__lead">
              Tell us what you run and what breaks:{' '}
              <a href={mailto('Partnership')}>{CONTACT_EMAIL}</a>.
            </p>
            <div>
              <Button href={mailto('Partnership')} size="lg">
                <Icon name="mail" size={18} /> Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
