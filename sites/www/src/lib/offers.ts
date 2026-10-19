/*
 * What Pimalaya sells around the free software, in one file: the prices, the
 * business offers behind /business/, the pain both the home page and /business/ state, and the
 * current partners.
 *
 * The integrator price comes from the 2026-09-29 research (comparables, day
 * rates, Google's audit cost), recorded in the monetization notes. The
 * provider prices come from the 2026-10-18 rework: a setup fee for apps under
 * the provider's name, then a yearly fee for maintenance and distribution.
 * The mail products prices and the integrator version line tier come from
 * the 2026-10-19 rework: a migration off Microsoft's deprecated access, then a
 * yearly fee to keep it working; backports cost more than the base fee pays.
 */

export const PROVIDER_SETUP = '€10,000'
export const PROVIDER_PRICE = '€6,000'
export const MAIL_PRODUCTS_SETUP = '€8,000'
export const MAIL_PRODUCTS_PRICE = '€4,000'
export const INTEGRATOR_PRICE = '€5,000'
export const INTEGRATOR_LTS_PRICE = '€12,000'

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
  {
    title: 'An app nobody maintains dies.',
    text: 'Store rules, platform updates and protocol changes come back every year, long after the launch.',
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
  /* A one-time fee shown under the yearly price, when there is one. */
  setup?: string
  /* A line under the price, for what the "from" price does not cover. */
  priceNote?: string
  /* Subject line of the contact email, so requests sort themselves. */
  subject: string
}

export const offers: Offer[] = [
  {
    id: 'providers',
    audience: 'For mail providers',
    who: 'You host mail, contacts or calendars for your users.',
    summary:
      'Your servers in our test suite, your users set up with one address, in apps under your name.',
    problem:
      'Your users piece together a mail app, a contacts sync and a calendar to reach you, and each one breaks in its own way, in your support queue.',
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
        text: 'a first-class preset in our setup wizards and the discovery rules.',
      },
      {
        title: 'Apps under your name:',
        text: 'mail, contacts and calendars in one, published on the stores for your users.',
      },
      {
        title: 'Kept up to date,',
        text: 'through store rules, platform updates and changes on your servers, every year.',
      },
      {
        title: 'A tested provider listing',
        text: 'here and in the documentation.',
      },
    ],
    price: PROVIDER_PRICE,
    setup: PROVIDER_SETUP,
    priceNote: 'Android today, other platforms as they ship. Large providers: on quote.',
    subject: 'Partnership: provider',
  },
  {
    id: 'mail-products',
    audience: 'For products that handle mail',
    who: 'Your CRM, helpdesk, ERP or internal tool reads or sends your customers’ mail.',
    summary:
      'Off Exchange Web Services and basic auth before Microsoft’s deadlines, then kept working.',
    problem:
      'Microsoft is switching off the way your product reaches your customers’ mailboxes, and every other provider changes its rules on its own schedule.',
    benefits: [
      {
        title: 'Off EWS and basic auth:',
        text: 'your mail connection moved to OAuth over IMAP and SMTP, on the Pimalaya libraries.',
      },
      {
        title: 'Your customers’ providers in our CI,',
        text: 'Microsoft 365 and Gmail first, tested on every change.',
      },
      {
        title: 'On your servers:',
        text: 'no per-account fee, no third party between you and your customers’ mail.',
      },
      {
        title: 'Kept working,',
        text: 'as Microsoft, Google and the others change their rules, every year.',
      },
      {
        title: 'Your OAuth verification, prepared with you:',
        text: 'what Google and Microsoft ask for, gathered together; the app and its audit stay yours.',
      },
    ],
    price: MAIL_PRODUCTS_PRICE,
    setup: MAIL_PRODUCTS_SETUP,
    priceNote: 'Mail over IMAP and SMTP; Microsoft Graph is not covered yet.',
    subject: 'Partnership: mail product',
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
        title: 'Your bugs first,',
        text: 'ahead of the general queue, from a bank of days agreed each year.',
      },
      {
        title: 'A supported version line, as a higher tier:',
        text: 'backported fixes until an agreed date.',
      },
      {
        title: 'Audit-ready:',
        text: 'a bill of materials and the security policy of every supported release, for your own OAuth audits and the Cyber Resilience Act.',
      },
      {
        title: 'A partner badge',
        text: 'in the community list.',
      },
    ],
    price: INTEGRATOR_PRICE,
    priceNote: `With a supported version line: from ${INTEGRATOR_LTS_PRICE} per year.`,
    subject: 'Partnership: integrator',
  },
]

export interface Partner {
  name: string
  url: string
  /* Which offer they are a partner under, by id. */
  offer: string
  /* What is built together, one sentence. */
  note: string
  /* Their logo, served from public/. */
  logo: string
}

/* The signed partners, listed honestly: none means the pages say so. */
export const partners: Partner[] = [
  {
    name: 'Red Arrow',
    url: 'https://redarrow.fr',
    offer: 'integrators',
    logo: '/redarrow.svg',
    note: 'Builds with us an AI-powered desktop client for mail, contacts and calendars, on the Pimalaya stack.',
  },
]
