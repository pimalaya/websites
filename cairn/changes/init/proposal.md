---
cairn: change
id: init
status: landed
created: 2026-08-07
---

# Bootstrap the websites monorepo with the Pimgate one-pager

## Why
Every Pimalaya web property so far (website, blog) is its own repository carrying a full copy of the same stack and theme, and each new site would fork it again. The maintainer approved one workspace gathering all Pimalaya websites, sharing components, license and one nix shell. The compelling first tenant is the Pimgate landing page: Microsoft's EWS retirement (from 2026-10-01) and the SMTP AUTH basic default-off (end of December 2026) create a dated market for operating the open-source gateway, and pimgate.pimalaya.org has to exist before those dates matter.

## What
A new repository, an npm workspace with two kinds of packages: shared/ (`@pimalaya/shared`: the theme tokens, global styles, parameterized Nav and Footer, ui primitives, and the prerender machinery, extracted from the website and blog sources) and sites/pimgate (the one-pager: hero, deadline section, how it works, open source, two offers with placeholder prices in src/lib/pricing.ts, trust section). One flake.nix and shell.nix provide node for the whole workspace; the flake's packages.default builds the Pimgate bundle reproducibly. The website and blog repositories are not migrated now; the workspace is shaped so they move in later.
