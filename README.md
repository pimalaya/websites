# 🏔️ Pimalaya websites [![Matrix](https://img.shields.io/badge/chat-%23pimalaya-blue?style=flat&logo=matrix&logoColor=white)](https://matrix.to/#/#pimalaya:matrix.org) [![Mastodon](https://img.shields.io/badge/news-%40pimalaya-blue?style=flat&logo=mastodon&logoColor=white)](https://fosstodon.org/@pimalaya)

The Pimalaya web properties, one workspace sharing a theme, a license and a nix shell

This is the monorepo of the Pimalaya websites: an npm workspace where every web property is a package under sites/, all consuming the shared theme and components in [shared/](./shared) (the letterpress design tokens, the site chrome, the ui primitives and the prerender machinery extracted from pimalaya.org and blog.pimalaya.org). Every shipped page is prerendered to static HTML at build time with the SPA module script stripped, so the sites run from HTML and CSS alone. All three properties live here: the Pimalaya website (sites/www, pimalaya.org), the blog (sites/blog, blog.pimalaya.org), and the [Pimgate](https://github.com/pimalaya/pimgate) one-pager (sites/pimgate, pimgate.pimalaya.org). The migration of the standalone [website](https://github.com/pimalaya/website) and [blog](https://github.com/pimalaya/blog) repositories into this workspace is done; their deployment cutover is pending (see [Deployment](#deployment)), and those repositories retire once it happens.

## Table of contents

- [Sites](#sites)
- [Workspace layout](#workspace-layout)
- [Installation](#installation)
  - [Nix](#nix)
  - [Sources](#sources)
- [Usage](#usage)
  - [Writing a blog post](#writing-a-blog-post)
  - [Mailing the newsletter](#mailing-the-newsletter)
- [Deployment](#deployment)
- [AI disclosure](#ai-disclosure)
- [License](#license)
- [Social](#social)
- [Contributing](#contributing)
- [Sponsoring](#sponsoring)

## Sites

| Site                             | Domain               | Build                   | Deploy                                                                        |
|----------------------------------|----------------------|-------------------------|-------------------------------------------------------------------------------|
| [sites/www](./sites/www)         | pimalaya.org         | `npm run build:www`     | cutover pending: still deployed from [website](https://github.com/pimalaya/website) |
| [sites/blog](./sites/blog)       | blog.pimalaya.org    | `npm run build:blog`    | cutover pending: still deployed from [blog](https://github.com/pimalaya/blog) |
| [sites/pimgate](./sites/pimgate) | pimgate.pimalaya.org | `npm run build:pimgate` | this repository's GitHub Pages                                                |

The pimalaya.org site is named `www` (not `website`) so the directory names the property like the others do: `www` is the conventional host label for the apex domain, and it avoids colliding with the retiring standalone website repository.

## Workspace layout

The root package.json declares the npm workspaces `shared` and `sites/*`. [shared/](./shared) is `@pimalaya/shared`, the common layer every site consumes: the design tokens and global styles (src/styles), the site chrome (Nav and Footer, parameterized per site), the ui primitives (Button, Icon, Logo, Container), and the reusable prerender script (`@pimalaya/shared/prerender`) that turns a Vite client + SSR build into JavaScript-free static pages with sitemap.xml and robots.txt (plus article og:type and sitemap lastmod on sites with dated pages). Each site under [sites/](./sites) keeps what is its own: index.html and head metadata, page components and copy, a thin prerender.js injecting its JSON-LD, and its public/ assets. sites/www additionally owns the products catalogue (src/lib/products.ts) and the StatusBadge primitive; sites/blog owns the markdown posts pipeline (posts/, src/lib/posts.ts), the RSS feed (src/lib/feed.ts, also served live by the dev server) and the newsletter script (scripts/newsletter.js). One flake.nix and shell.nix at the root provide the node toolchain for the whole workspace.

## Installation

The sites are static bundles any host can serve; GitHub Pages serves them in production (see [Deployment](#deployment)). Build them only to develop them or host your own copies.

### Nix

With the [Flakes](https://nixos.wiki/wiki/Flakes) feature enabled, build a site's static bundle (`.#www`, `.#blog` or `.#pimgate`; the default package stays the Pimgate one-pager):

```sh
nix build github:pimalaya/websites#www
```

The result is a dist/ directory any static host can serve.

### Sources

```sh
git clone https://github.com/pimalaya/websites
cd websites
npm install
npm run build:www # or build:blog, build:pimgate
```

The bundle lands in sites/<site>/dist.

## Usage

Run `npm run dev:<site>` for a hot-reloading dev server, `npm run build:<site>` for the production bundle, and `npm run preview:<site>` to serve that bundle locally, where `<site>` is `www`, `blog` or `pimgate`. Copy and outward links live inline in each site's components (the sites are English-only), the shared design tokens in shared/src/styles/theme.css, the products catalogue in sites/www/src/lib/products.ts, and the Pimgate offer prices in sites/pimgate/src/lib/pricing.ts (placeholders until the real numbers are set). CONTRIBUTING.md and the [cairn](./cairn) folder cover where to edit what.

### Writing a blog post

Drop a markdown file in sites/blog/posts/, named after its URL slug (`posts/my-article.md` lands at `/my-article/`), with a small frontmatter block carrying `title`, `description` and `date` (YYYY-MM-DD). Add `draft: true` to keep a post out of the build. The build fails on a missing title, description, or date, so a half-filled post cannot ship. The dev server serves every post at its slug and /feed.xml live.

### Mailing the newsletter

The newsletter is manual, there is no CI step. To mail a post to the [newsletter](https://buttondown.com/pimalaya), run `npm run newsletter -- <slug>` and paste the output into a new Buttondown email (the composer is markdown-native): the subject is the post title, and the body is the post source with links absolutized and a canonical link appended.

## Deployment

GitHub Pages serves one site per repository, so three domains cannot all be served from this repository's Pages. The publish workflow builds all three sites on every push (www and blog act as CI checks), then deploys sites/pimgate's dist/ to this repository's Pages under the pimgate.pimalaya.org custom domain.

pimalaya.org and blog.pimalaya.org are still deployed by the standalone [website](https://github.com/pimalaya/website) and [blog](https://github.com/pimalaya/blog) repositories' own workflows: the cutover is the one open decision of the migration, and the maintainer picks between two options.

- **Cross-repo push (no DNS change)**: keep the two standalone repositories alive as Pages shells, switch their Pages source to a `gh-pages` branch, and enable the disabled `deploy-www` / `deploy-blog` jobs in [.github/workflows/publish.yml](./.github/workflows/publish.yml). They push each site's dist/ to its repository's Pages branch via peaceiris/actions-gh-pages with a per-repository deploy key (or a fine-grained PAT); the custom domains and DNS stay exactly where they are. The repositories can then be archived read-only except for the Pages branch... which GitHub does not allow (archived repositories freeze Pages deployments), so they stay unarchived shells.
- **Move DNS to another host**: point pimalaya.org and blog.pimalaya.org at a host that can serve several sites (any static host, or a second GitHub org/user Pages setup), deploy from this repository only, and archive the standalone repositories fully.

The step-by-step for the first option is commented in the workflow file next to the disabled jobs.

## AI disclosure

This project is developed with AI assistance. This section documents how, so users and downstream packagers can make informed decisions.

- **Tools**: Claude Code (Anthropic), invoked locally with a persistent project-scoped memory and a small set of repo-specific rules.
- **Used for**: Scaffolding, refactors, mechanical multi-file edits, boilerplate (component scaffolding, inline SVGs), copy polish, exploratory design conversations.
- **Not used for**: Pricing and offer terms (set by a human), git manipulation (commit, merge, rebase…), real-world tests.
- **Verification**: Every AI-assisted change is read, type-checked, and built before commit (`npm run build:www`, `build:blog`, `build:pimgate`).
- **Limitations**: AI models occasionally produce plausible but wrong copy or markup. The verification workflow catches most of this; it does not catch all of it. Bug reports are welcome and taken seriously.
- **Last reviewed**: 07/08/2026

## License

This project is licensed under either of:

- [MIT license](LICENSE-MIT)
- [Apache License, Version 2.0](LICENSE-APACHE)

at your option.

## Social

- Chat on [Matrix](https://matrix.to/#/#pimalaya:matrix.org)
- News on [Mastodon](https://fosstodon.org/@pimalaya) or [RSS](https://fosstodon.org/@pimalaya.rss)
- Mail at [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net)

## Contributing

Contributions are welcome: start with [CONTRIBUTING.md](./CONTRIBUTING.md), which opens with the Pimalaya-wide guides to read first.

## Sponsoring

[![nlnet](https://nlnet.nl/logo/banner-160x60.png)](https://nlnet.nl/)

Special thanks to the [NLnet foundation](https://nlnet.nl/) and the [European Commission](https://www.ngi.eu/) that have been financially supporting the project for years:

- 2022 → 2023: [NGI Assure](https://nlnet.nl/project/Himalaya/)
- 2023 → 2024: [NGI Zero Entrust](https://nlnet.nl/project/Pimalaya/)
- 2024 → 2026: [NGI Zero Core](https://nlnet.nl/project/Pimalaya-PIM/)
- *2027 in preparation…*

If you appreciate the project, feel free to donate using one of the following providers:

[![GitHub](https://img.shields.io/badge/-GitHub%20Sponsors-fafbfc?logo=GitHub%20Sponsors)](https://github.com/sponsors/soywod)
[![Ko-fi](https://img.shields.io/badge/-Ko--fi-ff5e5a?logo=Ko-fi&logoColor=ffffff)](https://ko-fi.com/soywod)
[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ffdd00?logo=Buy%20Me%20A%20Coffee&logoColor=000000)](https://www.buymeacoffee.com/soywod)
[![Liberapay](https://img.shields.io/badge/-Liberapay-f6c915?logo=Liberapay&logoColor=222222)](https://liberapay.com/soywod)
[![thanks.dev](https://img.shields.io/badge/-thanks.dev-000000?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQuMDk3IiBoZWlnaHQ9IjE3LjU5NyIgY2xhc3M9InctMzYgbWwtMiBsZzpteC0wIHByaW50Om14LTAgcHJpbnQ6aW52ZXJ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05Ljc4MyAxNy41OTdINy4zOThjLTEuMTY4IDAtMi4wOTItLjI5Ny0yLjc3My0uODktLjY4LS41OTMtMS4wMi0xLjQ2Mi0xLjAyLTIuNjA2di0xLjM0NmMwLTEuMDE4LS4yMjctMS43NS0uNjc4LTIuMTk1LS40NTItLjQ0Ni0xLjIzMi0uNjY5LTIuMzQtLjY2OUgwVjcuNzA1aC41ODdjMS4xMDggMCAxLjg4OC0uMjIyIDIuMzQtLjY2OC40NTEtLjQ0Ni42NzctMS4xNzcuNjc3LTIuMTk1VjMuNDk2YzAtMS4xNDQuMzQtMi4wMTMgMS4wMjEtMi42MDZDNS4zMDUuMjk3IDYuMjMgMCA3LjM5OCAwaDIuMzg1djEuOTg3aC0uOTg1Yy0uMzYxIDAtLjY4OC4wMjctLjk4LjA4MmExLjcxOSAxLjcxOSAwIDAgMC0uNzM2LjMwN2MtLjIwNS4xNTYtLjM1OC4zODQtLjQ2LjY4Mi0uMTAzLjI5OC0uMTU0LjY4Mi0uMTU0IDEuMTUxVjUuMjNjMCAuODY3LS4yNDkgMS41ODYtLjc0NSAyLjE1NS0uNDk3LjU2OS0xLjE1OCAxLjAwNC0xLjk4MyAxLjMwNXYuMjE3Yy44MjUuMyAxLjQ4Ni43MzYgMS45ODMgMS4zMDUuNDk2LjU3Ljc0NSAxLjI4Ny43NDUgMi4xNTR2MS4wMjFjMCAuNDcuMDUxLjg1NC4xNTMgMS4xNTIuMTAzLjI5OC4yNTYuNTI1LjQ2MS42ODIuMTkzLjE1Ny40MzcuMjYuNzMyLjMxMi4yOTUuMDUuNjIzLjA3Ni45ODQuMDc2aC45ODVabTE0LjMxNC03LjcwNmgtLjU4OGMtMS4xMDggMC0xLjg4OC4yMjMtMi4zNC42NjktLjQ1LjQ0NS0uNjc3IDEuMTc3LS42NzcgMi4xOTVWMTQuMWMwIDEuMTQ0LS4zNCAyLjAxMy0xLjAyIDIuNjA2LS42OC41OTMtMS42MDUuODktMi43NzQuODloLTIuMzg0di0xLjk4OGguOTg0Yy4zNjIgMCAuNjg4LS4wMjcuOTgtLjA4LjI5Mi0uMDU1LjUzOC0uMTU3LjczNy0uMzA4LjIwNC0uMTU3LjM1OC0uMzg0LjQ2LS42ODIuMTAzLS4yOTguMTU0LS42ODIuMTU0LTEuMTUydi0xLjAyYzAtLjg2OC4yNDgtMS41ODYuNzQ1LTIuMTU1LjQ5Ny0uNTcgMS4xNTgtMS4wMDQgMS45ODMtMS4zMDV2LS4yMTdjLS44MjUtLjMwMS0xLjQ4Ni0uNzM2LTEuOTgzLTEuMzA1LS40OTctLjU3LS43NDUtMS4yODgtLjc0NS0yLjE1NXYtMS4wMmMwLS40Ny0uMDUxLS44NTQtLjE1NC0xLjE1Mi0uMTAyLS4yOTgtLjI1Ni0uNTI2LS40Ni0uNjgyYTEuNzE5IDEuNzE5IDAgMCAwLS43MzctLjMwNyA1LjM5NSA1LjM5NSAwIDAgMC0uOTgtLjA4MmgtLjk4NFYwaDIuMzg0YzEuMTY5IDAgMi4wOTMuMjk3IDIuNzc0Ljg5LjY4LjU5MyAxLjAyIDEuNDYyIDEuMDIgMi42MDZ2MS4zNDZjMCAxLjAxOC4yMjYgMS43NS42NzggMi4xOTUuNDUxLjQ0NiAxLjIzMS42NjggMi4zNC42NjhoLjU4N3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)](https://thanks.dev/soywod)
[![PayPal](https://img.shields.io/badge/-PayPal-0079c1?logo=PayPal&logoColor=ffffff)](https://www.paypal.com/paypalme/soywod)
