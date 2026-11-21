---
cairn: change
id: pkg-site
status: landed
created: 2026-11-21
---

# The packages install page joins the family

## Why

pkg.pimalaya.org, the signed APT and DNF repositories and Homebrew tap of the Pimalaya CLIs, carried a hand-written install page with its own grey and blue styles, unlike pimalaya.org and blog.pimalaya.org (the maintainer, 2026-11-21: make it look like them, reusing the theme of this repository).

## What

- sites/pkg: a third site in the workspace, the one install page of pkg.pimalaya.org, on the shared theme, Nav (`packages` tag) and Footer, prerendered JavaScript-free like the others.
- The parts only known when the hub runs stay as `@NAME@` placeholders (`@CLIS@`, `@APT@`, `@DNF@`, `@BREW@`, `@FINGERPRINT@`), each a whole text node, filled by the hub of pimalaya/packages.
- Deployment: no `_pkg` repository. GitHub Pages serves one artifact per repository and pkg.pimalaya.org's artifact also holds the APT and DNF repositories, so the hub keeps deploying it: its daily run checks out this repository's master, runs `npm run build:pkg` and builds the site around sites/pkg/dist. The built page's hash sits in the hub's manifest, so a change here reaches pkg.pimalaya.org on the next hub run, or at once with a dispatched run.
- Fix the stale deployment notes: www and blog are deployed from this repository's sources by the Publish workflows of pimalaya/_www and pimalaya/_blog, not from the old standalone repositories.
