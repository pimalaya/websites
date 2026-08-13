import type { IconName } from '@pimalaya/shared'

/*
 * The funding catalogue behind /sponsor/: the routes money can take, and the
 * figures the page states as facts.
 *
 * The tier ladder deliberately does not live here. It lives on GitHub
 * Sponsors, which owns the amounts, the billing and the sponsor list, and
 * duplicating it on the site only creates a second copy to keep in step.
 * The page links to it instead.
 */

/*
 * Bare quantities, without their unit: the sentences around them supply the
 * noun, so writing "15+ apps" here reads as "15+ apps apps" once interpolated.
 */
export const REPO_COUNT = '75+'
export const APP_COUNT = '15+'
export const LIB_COUNT = '30+'
export const DOMAIN_COUNT = '4'

export interface Platform {
  name: string
  url: string
  /* Brand mark, or undefined for a provider with no usable glyph. */
  icon?: IconName
  /* What this route is good for, so the list is a choice and not a wall. */
  note: string
}

/*
 * Ordered by what is actually most useful to the project rather than by
 * popularity: recurring before one-time, because only recurring money can be
 * planned around.
 *
 * NOTE: these handles are personal because the Pimalaya organisation is not a
 * legal entity, and GitHub Sponsors only grants an organisation its own page
 * against proof of incorporation or a fiscal host. Ko-fi, Buy Me a Coffee and
 * Liberapay are renameable and flip to a Pimalaya-owned handle once those
 * accounts are renamed; the GitHub and PayPal handles cannot.
 */
export const platforms: Platform[] = [
  {
    name: 'GitHub Sponsors',
    url: 'https://github.com/sponsors/soywod',
    icon: 'heart',
    note: 'The full tier ladder, monthly or one-time. Companies are billed by GitHub and get their own receipt, so the paperwork needs nothing from the project.',
  },
  {
    name: 'Liberapay',
    url: 'https://liberapay.com/pimalaya',
    icon: 'liberapay',
    note: 'Recurring, run by a French non-profit, and the only option here that takes no cut of its own.',
  },
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/pimalaya',
    icon: 'kofi',
    note: 'Monthly or one-time, and no account is needed to give once.',
  },
  {
    name: 'Buy Me a Coffee',
    url: 'https://www.buymeacoffee.com/pimalaya',
    icon: 'buyMeACoffee',
    note: 'One-time, in the smallest amounts of anything listed here.',
  },
  {
    name: 'PayPal',
    url: 'https://www.paypal.com/paypalme/soywod',
    icon: 'paypal',
    note: 'Direct and one-time, with no platform in between.',
  },
  {
    name: 'thanks.dev',
    url: 'https://thanks.dev/u/gh/soywod',
    note: 'For companies that would rather fund their whole dependency tree at once and let it work out who gets what.',
  },
]

export interface Funder {
  name: string
  url: string
  /* Path under public/, drawn as an image: these are wordmarks, not glyphs. */
  logo: string
}

/* The grants, credited with their own marks rather than described at length. */
export const funders: Funder[] = [
  { name: 'NLnet Foundation', url: 'https://nlnet.nl/', logo: '/nlnet.svg' },
  { name: 'NGI Zero Core', url: 'https://www.ngi.eu/', logo: '/ngi0-core.svg' },
]
