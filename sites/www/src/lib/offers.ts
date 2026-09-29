/*
 * What Pimalaya sells around the free software, in one file: the prices, the
 * business offers behind /business/, the planned sign-in offer behind
 * /sign-in/, the pain both the home page and /business/ state, and the
 * current partners.
 *
 * The prices come from the 2026-09-29 research (comparables, day rates,
 * Google's audit cost), recorded in the monetization notes.
 */

export const PROVIDER_PRICE = '€3,000'
export const INTEGRATOR_PRICE = '€5,000'
export const SIGN_IN_PRICE = '€12'

export const CONTACT_EMAIL = 'pimalaya.org@posteo.net'

export function mailto(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export interface Point {
  title: string
  text: string
}

/*
 * Why a company would pay for free software: what doing it in-house costs.
 * The home page shows these as its business band, /business/ as its first
 * section.
 */
export const pains: Point[] = [
  {
    title: 'Every server has quirks.',
    text: 'Each one is a support ticket before it is a bug report.',
  },
  {
    title: 'OAuth is a compliance project.',
    text: 'Gmail needs a verified app and a yearly security audit; Microsoft 365 a verified publisher.',
  },
  {
    title: 'The protocols keep moving.',
    text: 'Basic auth is gone, Exchange Web Services is retiring: code breaks on someone else’s schedule.',
  },
]

export interface Offer {
  /* Anchor on the page, and the key the cards link to. */
  id: string
  audience: string
  /* Who the offer is for, defined in one line. */
  who: string
  /* One line for the cards on the home page and the page header. */
  summary: string
  /* The buyer's problem, stated from their side. */
  problem: string
  benefits: Point[]
  price: string
  /* A line under the price, for what the "from" price does not cover. */
  priceNote?: string
  /* Subject line of the contact email, so requests sort themselves. */
  subject: string
}

export const offers: Offer[] = [
  {
    id: 'providers',
    audience: 'For email providers',
    who: 'You host mail, contacts or calendars for your users.',
    summary:
      'Your servers in our test suite, your users set up with one address.',
    problem:
      'When a client mishandles your server, the report lands in your support queue.',
    benefits: [
      {
        title: 'Your servers in our CI,',
        text: 'whatever you run: IMAP, SMTP, JMAP, CardDAV, CalDAV.',
      },
      {
        title: 'Your quirks first,',
        text: 'fixed and documented publicly.',
      },
      {
        title: 'Setup with one address:',
        text: 'a first-class preset in the Himalaya wizard and the discovery rules.',
      },
      {
        title: 'A tested provider listing',
        text: 'here and in the documentation.',
      },
    ],
    price: PROVIDER_PRICE,
    priceNote: 'Large providers: on quote.',
    subject: 'Partnership: provider',
  },
  {
    id: 'integrators',
    audience: 'For integrators',
    who: 'You ship a product built on the Himalaya CLI or the Rust libraries.',
    summary:
      'Your workflows in our test suite, a version line that does not move under you.',
    problem:
      'Your risk is an upgrade that breaks you, or a provider bug your customers hit first.',
    benefits: [
      {
        title: 'Your workflows in our CI:',
        text: 'a release that breaks your commands, JSON output or library calls does not ship.',
      },
      {
        title: 'A supported version line,',
        text: 'with backported fixes until an agreed date.',
      },
      {
        title: 'Your bugs first,',
        text: 'ahead of the general queue.',
      },
      {
        title: 'OAuth verification, done once:',
        text: 'your own Google and Microsoft apps set up, verified and audit-ready.',
      },
      {
        title: 'A partner badge',
        text: 'in the community list.',
      },
    ],
    price: INTEGRATOR_PRICE,
    subject: 'Partnership: integrator',
  },
]


/*
 * The planned one-step sign-in for individual users. Announced with its price
 * and a call to commit, never as available: counting those commitments is how
 * it gets decided.
 */
export const signIn = {
  audience: 'For users',
  who: 'You use the Pimalaya tools with Gmail or Microsoft 365.',
  summary: 'Sign in with one click, without registering your own app.',
  problem:
    'Signing in to Gmail or Microsoft 365 from a free client means either registering your own app with Google or Microsoft, or using an app someone registered and keeps verified. Google charges for that verification every year, through a mandatory security audit, and the free tools cannot absorb that cost.',
  benefits: [
    {
      title: 'One step.',
      text: 'Himalaya and the Pimalaya apps sign in with Pimalaya’s verified apps: you approve access once, in your browser.',
    },
    {
      title: 'Your data stays between you and your provider.',
      text: 'A small Pimalaya server holds the apps’ secret and renews your access. It never sees your mail or contacts, and stores and logs nothing. Its code is public.',
    },
    {
      title: 'Still free the other way.',
      text: 'Registering your own app and bringing its client ID keeps working, for free, as it does today.',
    },
  ] as Point[],
  price: SIGN_IN_PRICE,
  subject: 'Sign-in: I would pay',
}

export interface Partner {
  name: string
  url: string
  /* Which offer they are a partner under, by id. */
  offer: string
}

/* Empty until the first contract is signed, and the pages say so. */
export const partners: Partner[] = []
