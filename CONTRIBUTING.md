# Contributing guide

Thank you for investing your time in contributing to the Pimalaya websites.

Whether you are a human or an AI agent, read these in order before touching the code:

1. the [Pimalaya README](https://github.com/pimalaya) for what the project is and how its repositories stack;
2. the [Pimalaya CONTRIBUTING](https://github.com/pimalaya/.github/blob/master/CONTRIBUTING.md) guide, which chains to the shared architecture and guidelines;
3. the [cairn/](./cairn) folder, which follows the [Cairn](https://github.com/pimalaya/cairn) convention: spec/ is the current design of this workspace, changes/ holds in-flight proposals, and log/ the dated history. AGENTS.md at the root is the activation stanza.

Everything below documents only what differs from the Pimalaya standards.

## A static-site workspace, not a Rust crate

This repository is an npm workspace of Vite, React and TypeScript static sites, not a Rust crate: it publishes no rustdoc, ships no Cargo.toml or deny.toml, and the crate-oriented rules (lib.rs header, no-std, public-item naming) do not apply. There is no backend, no runtime configuration and no tests; each site builds to one static bundle in its own dist/, and the shipped pages are JavaScript-free: every page is prerendered at build time and the SPA module script is stripped.

## One workspace, shared layer first

The theme and everything reused across sites lives in shared/ (`@pimalaya/shared`): design tokens (src/styles/theme.css), global styles, the parameterized chrome (Nav, Footer), the ui primitives, and the prerender machinery. A site keeps only what is its own: head metadata, page components, copy, JSON-LD, assets. When adding to a site, check whether the piece belongs in shared/ instead; when changing shared/, remember every site consumes it. The website and blog repositories are planned migrations into sites/; do not fork their components here beyond what shared/ already extracted.

## Node toolchain

Development runs through npm at the workspace root: `npm install` once, then per site `npm run dev:<site>`, `npm run build:<site>` (type-check, client + SSR build, prerender) and `npm run preview:<site>`. The Nix flake provides a devshell with the pinned Node, and its packages.default builds the pimalaya.org static bundle reproducibly.

## Where to edit what

The sites are English-only, so copy and outward links live inline in the components that show them. For pimalaya.org: the pages in sites/www/src/components/ with co-located CSS, the product catalogue in sites/www/src/lib/products.ts, the funding routes in sites/www/src/lib/sponsors.ts, the business and sign-in offers with their prices in sites/www/src/lib/offers.ts (placeholders to fill before deploy), page titles in sites/www/src/entry-server.tsx, and the JSON-LD in sites/www/prerender.js. Styling is plain CSS with the tokens in shared/src/styles/theme.css, the same logo-derived letterpress palette as pimalaya.org and the blog. There is no CSS framework and no webfonts.
