# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Migrated the two existing sites into the workspace: sites/www (pimalaya.org, from the standalone website repository) and sites/blog (blog.pimalaya.org, from the standalone blog repository, including the posts, the RSS feed and the manual Buttondown newsletter script).

  Both sites now consume `@pimalaya/shared` for the theme, the chrome, the ui primitives and the prerender machinery instead of their own copies; their pages, copy, head metadata, JSON-LD and rendered output are unchanged. The shared prerender gained the blog's date-driven behaviours (article og:type, sitemap lastmod), both no-ops for undated sites. The root gained dev/build/preview aliases for www and blog plus a newsletter alias; the flake now exposes a packages attrset (`www`, `blog`, `pimgate`, with pimgate remaining the default); the publish workflow builds all three sites and carries disabled cross-repo deploy stubs for www and blog until the maintainer picks a deployment cutover path (documented in the README).
- Bootstrapped the Pimalaya websites monorepo: an npm workspace gathering the Pimalaya web properties, sharing one theme, one license pair and one nix shell.

  The shared layer lives in shared/ (`@pimalaya/shared`): the letterpress design tokens and global styles, the parameterized site chrome (Nav, Footer), the ui primitives (Button, Icon, Logo, Container), and the reusable prerender script, all extracted from the website and blog repositories. Those two sites are not migrated yet; the workspace is shaped so they move in later as sites of their own.
- Added the first site, the Pimgate one-pager at sites/pimgate, served at pimgate.pimalaya.org.

  One prerendered JavaScript-free page selling operation around the open-source gateway: hero, the provider deadlines (EWS retirement, SMTP AUTH default-off, basic auth already gone), how the gateway works (local pimdir replica, credential-less IMAP and SMTP frontends, durable sending), the open-source section, two offers (self-operated and operated on your infra, prices placeholdered in src/lib/pricing.ts), and the security posture. Deployed to GitHub Pages by the publish workflow.
