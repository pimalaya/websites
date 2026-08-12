/*
 * The product catalogue, the single data source for the home page grid and
 * the ecosystem page. Statuses are maintained by hand and kept honest: the
 * home page only shows what a user can install today (`home: true`), the
 * ecosystem page shows everything, including what is brewing and what has
 * been retired.
 *
 * Third-party projects live in their own `community` catalogue at the bottom
 * of this file: they are not ours to grade, so they carry no status.
 */

export type Status =
  | 'stable'
  | 'beta'
  | 'early'
  | 'in development'
  | 'retiring'
  | 'frozen'
  | 'deprecated'

export interface Product {
  name: string
  /* Repository slug under github.com/pimalaya. */
  repo: string
  domain: string
  kind: string
  status: Status
  description: string
  /* Shown in the home page grid (installable today only). */
  home?: boolean
  /*
   * Hand-curated popularity rank (rough GitHub star magnitude), used only
   * to order rows inside a status on the ecosystem page, never displayed.
   */
  popularity?: number
}

const statusOrder: Status[] = [
  'stable',
  'beta',
  'early',
  'in development',
  'retiring',
  'frozen',
  'deprecated',
]

/* Ecosystem table order: status first (stable on top), popularity inside. */
export function byStatusThenPopularity(a: Product, b: Product): number {
  const status = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  if (status !== 0) return status
  return (b.popularity ?? 0) - (a.popularity ?? 0)
}

/* End-user tools, flagship excluded (Himalaya has its own section). */
export const apps: Product[] = [
  {
    name: 'neverest',
    repo: 'neverest',
    domain: 'Email',
    kind: 'CLI',
    status: 'beta',
    description: 'Synchronize and back up emails between two backends.',
    home: true,
    popularity: 450,
  },
  {
    name: 'himalaya-vim',
    repo: 'himalaya-vim',
    domain: 'Email',
    kind: 'Vim plugin',
    status: 'stable',
    description: 'Manage emails from Vim, on top of the Himalaya CLI.',
    home: true,
    popularity: 160,
  },
  {
    name: 'himalaya-tui',
    repo: 'himalaya-tui',
    domain: 'Email',
    kind: 'TUI',
    status: 'in development',
    description: 'A full-screen terminal UI for reading and writing emails.',
    popularity: 15,
  },
  {
    name: 'mirador',
    repo: 'mirador',
    domain: 'Email',
    kind: 'CLI',
    status: 'retiring',
    description:
      'Watch mailboxes for changes; its watch features fold into the next generation of tools.',
    popularity: 190,
  },
  {
    name: 'm2m',
    repo: 'm2m',
    domain: 'Email',
    kind: 'CLI',
    status: 'in development',
    description: 'Convert mail stores between Maildir, Maildir++ and m2dir.',
    popularity: 5,
  },
  {
    name: 'cardamum',
    repo: 'cardamum',
    domain: 'Contacts',
    kind: 'CLI',
    status: 'early',
    description:
      'Manage contacts over CardDAV, Google, Microsoft and JMAP address books.',
    home: true,
    popularity: 40,
  },
  {
    name: 'tcard',
    repo: 'tcard',
    domain: 'Contacts',
    kind: 'CLI',
    status: 'in development',
    description: 'Edit vCards as friendly TOML.',
    popularity: 10,
  },
  {
    name: 'calendula',
    repo: 'calendula',
    domain: 'Calendar',
    kind: 'CLI',
    status: 'in development',
    description: 'Manage calendars over CalDAV.',
    popularity: 10,
  },
  {
    name: 'tcal',
    repo: 'tcal',
    domain: 'Calendar',
    kind: 'CLI',
    status: 'in development',
    description: 'Edit iCalendar events as friendly TOML.',
    popularity: 5,
  },
  {
    name: 'comodoro',
    repo: 'comodoro',
    domain: 'Time',
    kind: 'CLI',
    status: 'stable',
    description: 'Manage Pomodoro-style timers from the command line.',
    home: true,
    popularity: 250,
  },
  {
    name: 'ortie',
    repo: 'ortie',
    domain: 'Plumbing',
    kind: 'CLI',
    status: 'stable',
    description:
      'Manage OAuth 2.0 tokens for your accounts, with a provider wizard.',
    home: true,
    popularity: 60,
  },
  {
    name: 'sirup',
    repo: 'sirup',
    domain: 'Plumbing',
    kind: 'CLI',
    status: 'early',
    description:
      'Spawn pre-authenticated IMAP and SMTP sessions, exposed over Unix sockets.',
    home: true,
    popularity: 15,
  },
  {
    name: 'io-pim-discovery',
    repo: 'io-pim-discovery',
    domain: 'Plumbing',
    kind: 'CLI + library',
    status: 'early',
    description:
      'Discover a provider’s IMAP, SMTP, CardDAV and CalDAV services from an email address.',
    home: true,
    popularity: 10,
  },
  {
    name: 'cardamum-android',
    repo: 'cardamum-android',
    domain: 'Contacts',
    kind: 'Android app',
    status: 'in development',
    description: 'Cardamum for Android: contacts sync in your pocket.',
    popularity: 12,
  },
]

/* Libraries for Rust developers, curated (the org holds more). */
export const libraries: Product[] = [
  {
    name: 'io-imap',
    repo: 'io-imap',
    domain: 'Email',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free IMAP client.',
    popularity: 40,
  },
  {
    name: 'io-smtp',
    repo: 'io-smtp',
    domain: 'Email',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free SMTP client.',
    popularity: 25,
  },
  {
    name: 'io-jmap',
    repo: 'io-jmap',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free JMAP client.',
    popularity: 15,
  },
  {
    name: 'io-webdav',
    repo: 'io-webdav',
    domain: 'Contacts + Calendar',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free CardDAV and CalDAV clients over WebDAV.',
    popularity: 20,
  },
  {
    name: 'io-http',
    repo: 'io-http',
    domain: 'Transport',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free HTTP client core the other crates build on.',
    popularity: 20,
  },
  {
    name: 'io-oauth',
    repo: 'io-oauth',
    domain: 'Auth',
    kind: 'Library',
    status: 'stable',
    description:
      'I/O-free OAuth 2.0 flows: authorization code, device, dynamic registration.',
    popularity: 25,
  },
  {
    name: 'io-maildir',
    repo: 'io-maildir',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Maildir store.',
    popularity: 10,
  },
  {
    name: 'io-m2dir',
    repo: 'io-m2dir',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free m2dir store.',
    popularity: 5,
  },
  {
    name: 'io-gmail',
    repo: 'io-gmail',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Gmail REST API client.',
    popularity: 8,
  },
  {
    name: 'io-msgraph',
    repo: 'io-msgraph',
    domain: 'Email + Contacts',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Microsoft Graph client (mail and contacts).',
    popularity: 8,
  },
  {
    name: 'io-people',
    repo: 'io-people',
    domain: 'Contacts',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Google People API client.',
    popularity: 5,
  },
  {
    name: 'mml',
    repo: 'mml',
    domain: 'Email',
    kind: 'Library + CLI',
    status: 'stable',
    description:
      'Compose MIME messages as human-editable markup (MML), Emacs-style.',
    popularity: 90,
  },
  {
    name: 'vcard',
    repo: 'vcard',
    domain: 'Contacts',
    kind: 'Library',
    status: 'early',
    description: 'vCard parser with a byte-faithful round-trip.',
    popularity: 10,
  },
  {
    name: 'stream',
    repo: 'stream',
    domain: 'Transport',
    kind: 'Library',
    status: 'stable',
    description: 'Standard I/O connectors that drive the I/O-free crates.',
    popularity: 15,
  },
]

/* Kept for history: frozen aggregators and deprecated crates. */
export const retired: Product[] = [
  {
    name: 'io-email',
    repo: 'io-email',
    domain: 'Email',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend email aggregator; superseded by protocol-direct clients.',
    popularity: 30,
  },
  {
    name: 'io-addressbook',
    repo: 'io-addressbook',
    domain: 'Contacts',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend contacts aggregator; superseded by protocol-direct clients.',
    popularity: 10,
  },
  {
    name: 'io-calendar',
    repo: 'io-calendar',
    domain: 'Calendar',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend calendar aggregator; superseded by protocol-direct clients.',
    popularity: 10,
  },
  {
    name: 'io-fs',
    repo: 'io-fs',
    domain: 'Storage',
    kind: 'Library',
    status: 'deprecated',
    description: 'Shared filesystem coroutines; each store now defines its own.',
    popularity: 15,
  },
  {
    name: 'io-process',
    repo: 'io-process',
    domain: 'System',
    kind: 'Library',
    status: 'deprecated',
    description: 'Process-spawning coroutines.',
    popularity: 20,
  },
  {
    name: 'io-keyring',
    repo: 'io-keyring',
    domain: 'System',
    kind: 'Library',
    status: 'deprecated',
    description:
      'Keyring coroutines; tools now document third-party keyring CLIs instead.',
    popularity: 20,
  },
  {
    name: 'mimosa',
    repo: 'mimosa',
    domain: 'System',
    kind: 'CLI',
    status: 'deprecated',
    description: 'Secret-management CLI, retired with io-keyring.',
    popularity: 10,
  },
]

export function repoUrl(product: Product): string {
  return `https://github.com/pimalaya/${product.repo}`
}

/* A third-party project built on top of the Pimalaya tools or crates. */
export interface CommunityProject {
  name: string
  /* Full URL: these live outside the organisation. */
  url: string
  /* The person or organisation maintaining it, as credit. */
  author: string
  kind: string
  description: string
}

/*
 * Front-ends and integrations built by other people. The list is curated by
 * hand from the Himalaya README and from what reaches the maintainers, so it
 * is certainly incomplete; the invitation to open a pull request sits next
 * to the table on the ecosystem page. Archived projects are left out.
 */
export const community: CommunityProject[] = [
  {
    name: 'himalaya-emacs',
    url: 'https://github.com/dantecatalfamo/himalaya-emacs',
    author: 'dantecatalfamo',
    kind: 'Emacs plugin',
    description:
      'Browse, read, write and organize emails from Emacs, on top of the Himalaya CLI. Published on MELPA.',
  },
  {
    name: 'mailbrus',
    url: 'https://github.com/antono/mailbrus',
    author: 'antono',
    kind: 'Desktop and web app',
    description:
      'A keyboard-driven, plain-text-first email client built on the io-email and io-maildir crates, shipped as a Tauri app and a progressive web app.',
  },
  {
    name: 'himalaya.nvim',
    url: 'https://github.com/knownasnaffy/himalaya.nvim',
    author: 'knownasnaffy',
    kind: 'Neovim plugin',
    description:
      'A native Neovim interface to the Himalaya CLI, written in Lua on top of nui.nvim.',
  },
  {
    name: 'himalaya.nvim',
    url: 'https://github.com/JostBrand/himalaya.nvim',
    author: 'JostBrand',
    kind: 'Neovim plugin',
    description:
      'A Neovim port of himalaya-vim, with folder pickers backed by fzf or Telescope.',
  },
  {
    name: 'himalaya-wrap',
    url: 'https://github.com/robertmeta/himalaya-wrap',
    author: 'robertmeta',
    kind: 'Emacs plugin',
    description:
      'An Emacs front-end to the Himalaya CLI designed for Emacspeak users, working straight against the remote server with no local maildir.',
  },
  {
    name: 'himalaya',
    url: 'https://www.raycast.com/jns/himalaya',
    author: 'jns',
    kind: 'Raycast extension',
    description:
      'Read and manage the emails of your default account from the Raycast launcher on macOS.',
  },
  {
    name: 'dfzf',
    url: 'https://github.com/parisni/dfzf',
    author: 'parisni',
    kind: 'Sway and i3 toolkit',
    description:
      'A fuzzy-finder desktop toolkit whose dfzf-mail viewer runs on the Himalaya CLI and mml.',
  },
  {
    name: 'himalaya SKILL',
    url: 'https://github.com/openclaw/openclaw/blob/main/skills/himalaya/SKILL.md',
    author: 'openclaw',
    kind: 'Agent skill',
    description:
      'Teaches the OpenClaw coding agent to manage emails through the Himalaya CLI.',
  },
]
