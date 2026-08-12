# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Moved io-pim-discovery from the apps to the libraries in the www catalogue: it is a library whose command-line interface is an off-by-default cargo feature, not a CLI that happens to expose a library. It keeps its place on the home page grid, which now draws from both catalogues instead of the apps alone.
- Renamed cardamum-android to pimalaya-android and rescoped it to the whole of personal information management (pimalaya/android: mail, contacts and calendars over one store and one account list), stating that contacts are the mature domain while mail and calendar are read-only for now. The matching experiment paragraph now carries the one-app-for-three-domains point it validates.
- Reordered the www ecosystem page so the libraries come before the apps, stating the architecture the right way round: every app is a thin frontend over the crates. The section order is now roadmap, libraries, apps, community, frozen and retired, experiments.
- Closed the "Installable today" section of the www home page with a primary call to action to the ecosystem page; until now the section ended on the last app card with no way out.

### Added

- Added pimalaya-linux to the www catalogue (pimalaya/linux): the native GTK4 and libAdwaita desktop app for mail and contacts, which until now appeared on the ecosystem page only as an unnamed "GTK4 + libadwaita" mention in the experiments prose, with no repository to follow.
- Added a "From the community" section to the www ecosystem page, crediting eight third-party front-ends and integrations built on the Pimalaya tools and crates: himalaya-emacs, mailbrus, the two himalaya.nvim plugins, himalaya-wrap, the Raycast extension, dfzf and the OpenClaw skill.

  They live in their own `community` catalogue in sites/www/src/lib/products.ts, with a full URL and an author instead of a repository slug under the organisation, and no hand-curated status. Their table swaps the Domain and Status columns for a single Author column, and the section lead states that none of them are maintained by the organisation. The prerender JSON-LD ItemList is unchanged: it still describes only the organisation's own repositories.
- Migrated the two existing sites into the workspace: sites/www (pimalaya.org, from the standalone website repository) and sites/blog (blog.pimalaya.org, from the standalone blog repository, including the posts, the RSS feed and the manual Buttondown newsletter script).

  Both sites now consume `@pimalaya/shared` for the theme, the chrome, the ui primitives and the prerender machinery instead of their own copies; their pages, copy, head metadata, JSON-LD and rendered output are unchanged. The shared prerender gained the blog's date-driven behaviours (article og:type, sitemap lastmod), both no-ops for undated sites. The root gained dev/build/preview aliases for www and blog plus a newsletter alias; the flake now exposes a packages attrset (`www`, `blog`, `pimgate`, with pimgate remaining the default); the publish workflow builds all three sites and carries disabled cross-repo deploy stubs for www and blog until the maintainer picks a deployment cutover path (documented in the README).
- Bootstrapped the Pimalaya websites monorepo: an npm workspace gathering the Pimalaya web properties, sharing one theme, one license pair and one nix shell.

  The shared layer lives in shared/ (`@pimalaya/shared`): the letterpress design tokens and global styles, the parameterized site chrome (Nav, Footer), the ui primitives (Button, Icon, Logo, Container), and the reusable prerender script, all extracted from the website and blog repositories. Those two sites are not migrated yet; the workspace is shaped so they move in later as sites of their own.
- Added the first site, the Pimgate one-pager at sites/pimgate, served at pimgate.pimalaya.org.

  One prerendered JavaScript-free page selling operation around the open-source gateway: hero, the provider deadlines (EWS retirement, SMTP AUTH default-off, basic auth already gone), how the gateway works (local pimdir replica, credential-less IMAP and SMTP frontends, durable sending), the open-source section, two offers (self-operated and operated on your infra, prices placeholdered in src/lib/pricing.ts), and the security posture. Deployed to GitHub Pages by the publish workflow.
