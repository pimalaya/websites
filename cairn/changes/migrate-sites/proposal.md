---
cairn: change
id: migrate-sites
status: landed
created: 2026-08-07
---

# Migrate pimalaya.org and blog.pimalaya.org into the workspace

## Why
The monorepo was shaped from day one so the standalone website (pimalaya.org) and blog (blog.pimalaya.org) repositories could move in as sites of their own; the shared layer was extracted from their sources for exactly this. The maintainer approved the migration: one workspace becomes the single home of all Pimalaya web properties, the standalone repositories retire at cutover. Until the sites live here, every shared-layer improvement forks three ways.

## What
Two new sites, re-homed not redesigned: sites/www (pimalaya.org: home page, ecosystem map, products catalogue) and sites/blog (blog.pimalaya.org: markdown posts, RSS feed, Buttondown newsletter script). Each keeps its own pages, copy, head metadata, JSON-LD and assets, and drops its local copies of the theme, chrome, ui primitives and prerender machinery in favour of `@pimalaya/shared`. The shared prerender grows two additive, date-driven behaviours the blog needs (article og:type, sitemap lastmod), both no-ops for undated sites. The root gains dev/build/preview aliases for www and blog, the flake grows a packages attrset (pimgate stays the default), and the publish workflow builds all three sites while still deploying only pimgate to this repository's Pages; cross-repo deploy stubs for www and blog stay disabled until the maintainer picks a cutover path. Rendered output of both migrated sites stays identical to the standalone repositories.
