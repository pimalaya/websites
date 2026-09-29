import { Button, Icon } from '@pimalaya/shared'

import { CONTACT_EMAIL, mailto, offers, pains, partners, signIn } from '../lib/offers'
import type { Offer } from '../lib/offers'
import { LIB_COUNT } from '../lib/sponsors'
import './Page.css'

/*
 * The business side of Pimalaya: why a company pays for free software, what
 * it gets, what it never gets, and at what price. Pain first, because nobody
 * reads an offer before recognising their own problem in it. The body uses
 * the home page's full-width bands, one idea each, alternating light and
 * dark. The page backs direct outreach rather than replacing it, so it ends
 * on a contact.
 */

/*
 * Dates reused from the retired pimgate one-pager.
 *
 * NOTE: re-check them before publishing; they move on Microsoft's schedule.
 */
const deadlines = [
  {
    date: 'Already in effect',
    title: 'Basic auth is gone from hosted IMAP and SMTP.',
  },
  {
    date: '1 October 2026',
    title: 'Exchange Web Services retirement begins, through April 2027.',
  },
  {
    date: 'End of December 2026',
    title: 'SMTP AUTH goes default-off on Microsoft 365.',
  },
]

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <li className="offer-card" id={offer.id}>
      <h3 className="offer-card__name">{offer.audience}</h3>
      <p className="offer-card__who">{offer.who}</p>
      <p className="offer-card__problem">{offer.problem}</p>
      <ul className="page__list">
        {offer.benefits.map((benefit) => (
          <li key={benefit.title}>
            <strong>{benefit.title}</strong> {benefit.text}
          </li>
        ))}
      </ul>
      <div className="offer-card__foot">
        <p className="page__price">
          From <strong>{offer.price}</strong> per year.
          {offer.priceNote && <> {offer.priceNote}</>}
        </p>
        <a className="page__cta" href={mailto(offer.subject)}>
          Get in touch <Icon name="arrowRight" size={16} />
        </a>
      </div>
    </li>
  )
}

export function BusinessPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Pimalaya for business</span>
          <h1 className="page-head__title">
            Email, contacts and calendars
            <br />
            that keep working
          </h1>
          <p className="page-head__lead">
            The code is free and stays free. What we sell is what does not
            come with it: your service or integration tested on every change,
            your bugs first, a version line maintained for you.
          </p>
          <ul className="cards">
            {offers.map((offer) => (
              <li key={offer.id}>
                <a className="cards__item" href={`#${offer.id}`}>
                  <span className="cards__name">{offer.audience}</span>
                  <span className="cards__note">
                    <strong>{offer.who}</strong> {offer.summary}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a className="cards__item" href="/sign-in/">
                <span className="cards__name">
                  {signIn.audience} <span className="chip">planned</span>
                </span>
                <span className="cards__note">
                  <strong>{signIn.who}</strong> {signIn.summary}
                </span>
              </a>
            </li>
          </ul>
          <div className="page-head__cta">
            <Button href={mailto('Partnership')}>
              <Icon name="mail" size={18} /> Contact us
            </Button>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <span className="eyebrow">The problem</span>
          <h2 className="band__title">Why pay for free software</h2>
          <p className="band__lead">
            Writing a mail client got cheap. Keeping one working against real
            servers did not, and the bill comes back every year.
          </p>
          <ul className="page__list">
            {pains.map((pain) => (
              <li key={pain.title}>
                <strong>{pain.title}</strong> {pain.text}
              </li>
            ))}
          </ul>
          <ul className="cards">
            {deadlines.map((deadline) => (
              <li key={deadline.title}>
                <div className="cards__item">
                  <span className="page__date">{deadline.date}</span>
                  <span className="cards__name">{deadline.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <span className="eyebrow">What we bring</span>
          <h2 className="band__title">The quirks are already found</h2>
          <p className="band__lead">
            Since 2022, <strong>{LIB_COUNT} libraries</strong> written from
            the RFCs up (IMAP, SMTP, JMAP, CardDAV, CalDAV, OAuth) and tested
            against the providers people use. A partnership puts yours first,
            for less than the weeks an engineer would spend on them each year.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <span className="eyebrow">Partnerships</span>
          <h2 className="band__title">Two ways to partner</h2>
          <ul className="offers">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <span className="eyebrow">The limits</span>
          <h2 className="band__title">What a partnership does not buy</h2>
          <ul className="page__list">
            <li>
              <strong>Ranking or exclusivity.</strong> Everyone is listed,
              tested and fixed, paying or not.
            </li>
            <li>
              <strong>Features.</strong> Nothing is locked: the code is MIT or
              Apache-2.0 for everyone.
            </li>
            <li>
              <strong>Endorsement.</strong> We vouch for the integration
              point, never for your product.
            </li>
            <li>
              <strong>24/7 support.</strong> Pimalaya is a small team; response
              targets are agreed per contract, in days.
            </li>
          </ul>
        </div>
      </section>

      <section className="band band--dark">
        <div className="container">
          <span className="eyebrow">Partners</span>
          <h2 className="band__title">
            {partners.length === 0 ? 'Be the first' : 'Our partners'}
          </h2>
          {partners.length === 0 ? (
            <p className="band__lead">
              None yet: the first partners shape the programme. Listing in the{' '}
              <a href="/ecosystem/">community catalogue</a> stays free for
              anyone.
            </p>
          ) : (
            <ul className="page__list">
              {partners.map((partner) => (
                <li key={partner.url}>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="band__lead">
            Tell us what you run and what breaks:{' '}
            <a href={mailto('Partnership')}>{CONTACT_EMAIL}</a>.
          </p>
          <div className="band__cta">
            <Button href={mailto('Partnership')}>
              <Icon name="mail" size={18} /> Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
