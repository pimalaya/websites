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
  /*
   * Shown in the home page grid (installable today only). A library can
   * carry it too when it also ships a command anyone can install, which is
   * why the grid draws from both catalogues.
   */
  home?: boolean
}

/* Ecosystem table order: by name, so a row is found at a glance. */
export function byName(a: Product, b: Product): number {
  return a.name.localeCompare(b.name)
}

/*
 * End-user tools. Statuses follow the releases: `in development` means no
 * release yet, `early` a first release, `beta` a release in real use,
 * `stable` a mature one.
 */
export const apps: Product[] = [
  {
    name: 'calendula',
    repo: 'calendula',
    domain: 'Calendar',
    kind: 'CLI',
    status: 'early',
    description: 'Manage calendars over CalDAV.',
    home: true,
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
  },
  {
    name: 'carillon',
    repo: 'carillon',
    domain: 'Plumbing',
    kind: 'CLI',
    status: 'early',
    description:
      'Watch mail, contact and calendar collections for changes. Formerly mirador.',
  },
  {
    name: 'comodoro',
    repo: 'comodoro',
    domain: 'Time',
    kind: 'CLI',
    status: 'stable',
    description: 'Manage Pomodoro-style timers from the command line.',
    home: true,
  },
  {
    name: 'himalaya',
    repo: 'himalaya',
    domain: 'Email',
    kind: 'CLI',
    status: 'stable',
    description:
      'Manage emails from the command line, over IMAP, SMTP, JMAP, Maildir, Gmail and Microsoft.',
    home: true,
  },
  {
    name: 'himalaya-tui',
    repo: 'himalaya-tui',
    domain: 'Email',
    kind: 'TUI',
    status: 'in development',
    description: 'A full-screen terminal UI for reading and writing emails.',
  },
  {
    name: 'himalaya-vim',
    repo: 'himalaya-vim',
    domain: 'Email',
    kind: 'Vim plugin',
    status: 'stable',
    description: 'Manage emails from Vim, on top of the Himalaya CLI.',
    home: true,
  },
  {
    name: 'm2m',
    repo: 'm2m',
    domain: 'Email',
    kind: 'CLI',
    status: 'in development',
    description: 'Convert mail stores between Maildir, Maildir++ and m2dir.',
  },
  {
    name: 'neverest',
    repo: 'neverest',
    domain: 'Email',
    kind: 'CLI',
    status: 'beta',
    description: 'Synchronize and back up emails between two backends.',
    home: true,
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
  },
  {
    name: 'pimalaya-android',
    repo: 'android',
    domain: 'Email + Contacts + Calendar',
    kind: 'Android app',
    status: 'in development',
    description:
      'Mail, contacts and calendars in one Android app, over one local store and one account list. Contacts are the mature domain; mail and calendar are read-only for now.',
  },
  {
    name: 'pimalaya-linux',
    repo: 'linux',
    domain: 'Email + Contacts',
    kind: 'Desktop app',
    status: 'in development',
    description:
      'A native GTK4 and libAdwaita desktop app for mail and contacts, sharing its configuration file with the command-line tools.',
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
  },
  {
    name: 'tcal',
    repo: 'tcal',
    domain: 'Calendar',
    kind: 'CLI',
    status: 'early',
    description: 'Edit iCalendar events as friendly TOML.',
    home: true,
  },
  {
    name: 'tcard',
    repo: 'tcard',
    domain: 'Contacts',
    kind: 'CLI',
    status: 'early',
    description: 'Edit vCards as friendly TOML.',
    home: true,
  },
]

/* Libraries for Rust developers, curated (the org holds more). */
export const libraries: Product[] = [
  {
    name: 'ical-rs',
    repo: 'ical',
    domain: 'Calendar',
    kind: 'Library',
    status: 'early',
    description:
      'iCalendar parser, validator, editor, merger and builder, with a byte-faithful round-trip.',
  },
  {
    name: 'io-gcal',
    repo: 'io-gcal',
    domain: 'Calendar',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Google Calendar REST API client.',
  },
  {
    name: 'io-gmail',
    repo: 'io-gmail',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Gmail REST API client.',
  },
  {
    name: 'io-gpeople',
    repo: 'io-gpeople',
    domain: 'Contacts',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Google People REST API client. Formerly io-people.',
  },
  {
    name: 'io-http',
    repo: 'io-http',
    domain: 'Transport',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free HTTP client core the other crates build on.',
  },
  {
    name: 'io-imap',
    repo: 'io-imap',
    domain: 'Email',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free IMAP client.',
  },
  {
    name: 'io-jmap',
    repo: 'io-jmap',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free JMAP client.',
  },
  {
    name: 'io-m2dir',
    repo: 'io-m2dir',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free m2dir store.',
  },
  {
    name: 'io-maildir',
    repo: 'io-maildir',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Maildir store.',
  },
  {
    name: 'io-managesieve',
    repo: 'io-managesieve',
    domain: 'Email',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free ManageSieve client, to manage server-side mail filters.',
  },
  {
    name: 'io-msgraph',
    repo: 'io-msgraph',
    domain: 'Email + Contacts',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free Microsoft Graph client (mail and contacts).',
  },
  {
    name: 'io-oauth',
    repo: 'io-oauth',
    domain: 'Auth',
    kind: 'Library',
    status: 'stable',
    description:
      'I/O-free OAuth 2.0 flows: authorization code, device, dynamic registration.',
  },
  {
    name: 'io-pim-discovery',
    repo: 'io-pim-discovery',
    domain: 'Plumbing',
    kind: 'Library + CLI',
    status: 'early',
    description:
      'Discover a provider’s IMAP, SMTP, CardDAV and CalDAV services from an email address. The CLI ships as an off-by-default cargo feature.',
    home: true,
  },
  {
    name: 'io-pimdir',
    repo: 'io-pimdir',
    domain: 'Storage',
    kind: 'Library',
    status: 'early',
    description:
      'The pimdir store and its sync engine: one local store for mail, contacts and calendars.',
  },
  {
    name: 'io-proxy',
    repo: 'io-proxy',
    domain: 'Transport',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free SOCKS5 and HTTP CONNECT proxy tunnels.',
  },
  {
    name: 'io-sasl',
    repo: 'io-sasl',
    domain: 'Auth',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free SASL client mechanisms.',
  },
  {
    name: 'io-smtp',
    repo: 'io-smtp',
    domain: 'Email',
    kind: 'Library',
    status: 'stable',
    description: 'I/O-free SMTP client.',
  },
  {
    name: 'io-webdav',
    repo: 'io-webdav',
    domain: 'Contacts + Calendar',
    kind: 'Library',
    status: 'early',
    description: 'I/O-free CardDAV and CalDAV clients over WebDAV.',
  },
  {
    name: 'mml',
    repo: 'mml',
    domain: 'Email',
    kind: 'Library + CLI',
    status: 'stable',
    description:
      'Compose MIME messages as human-editable markup (MML), Emacs-style.',
  },
  {
    name: 'stream',
    repo: 'stream',
    domain: 'Transport',
    kind: 'Library',
    status: 'stable',
    description: 'Standard I/O connectors that drive the I/O-free crates.',
  },
  {
    name: 'vcard-rs',
    repo: 'vcard',
    domain: 'Contacts',
    kind: 'Library',
    status: 'early',
    description:
      'vCard parser, validator, editor, merger and builder, with a byte-faithful round-trip.',
  },
]

/* Kept for history: frozen aggregators and deprecated crates. */
export const retired: Product[] = [
  {
    name: 'io-addressbook',
    repo: 'io-addressbook',
    domain: 'Contacts',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend contacts aggregator; superseded by protocol-direct clients.',
  },
  {
    name: 'io-calendar',
    repo: 'io-calendar',
    domain: 'Calendar',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend calendar aggregator; superseded by protocol-direct clients.',
  },
  {
    name: 'io-email',
    repo: 'io-email',
    domain: 'Email',
    kind: 'Library',
    status: 'frozen',
    description:
      'Multi-backend email aggregator; superseded by protocol-direct clients.',
  },
  {
    name: 'io-fs',
    repo: 'io-fs',
    domain: 'Storage',
    kind: 'Library',
    status: 'deprecated',
    description: 'Shared filesystem coroutines; each store now defines its own.',
  },
  {
    name: 'io-keyring',
    repo: 'io-keyring',
    domain: 'System',
    kind: 'Library',
    status: 'deprecated',
    description:
      'Keyring coroutines; tools now document third-party keyring CLIs instead.',
  },
  {
    name: 'io-process',
    repo: 'io-process',
    domain: 'System',
    kind: 'Library',
    status: 'deprecated',
    description: 'Process-spawning coroutines.',
  },
  {
    name: 'io-replica',
    repo: 'io-replica',
    domain: 'Storage',
    kind: 'Library',
    status: 'deprecated',
    description: 'Sync engine, now folded into io-pimdir.',
  },
  {
    name: 'mimosa',
    repo: 'mimosa',
    domain: 'System',
    kind: 'CLI',
    status: 'deprecated',
    description: 'Secret-management CLI, retired with io-keyring.',
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
  /* Integrator partner (see src/lib/offers.ts), rendered as a badge. */
  partner?: boolean
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
    name: 'himalaya-nvim',
    url: 'https://github.com/xav-ie/himalaya-nvim',
    author: 'xav-ie',
    kind: 'Neovim plugin',
    description:
      'A heavily modified Lua fork of himalaya-vim, with threaded views, structured search, HTML rendering and flag management.',
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
