---
cairn: log
change: migrate-sites
landed: 2026-08-07
---

# Migrate pimalaya.org and blog.pimalaya.org into the workspace

The two standalone sites moved in as sites/www (pimalaya.org: home page and ecosystem map over the products catalogue, site-local StatusBadge and Subscribe) and sites/blog (blog.pimalaya.org: markdown posts pipeline, RSS feed, per-post pages, site-local Subscribe, the manual Buttondown newsletter script). Both dropped their local copies of the theme, chrome, ui primitives and prerender machinery for `@pimalaya/shared`; the shared prerender absorbed the blog's two date-driven behaviours (article og:type, sitemap lastmod with the index inheriting the newest post date), both no-ops for undated sites. Rendered output was verified identical to the standalone repositories' dist, page by page, modulo hashed asset filenames; the only content difference found was the original website dist being stale against its own source (an ecosystem title reworded after its last local build), and one additive CSS artifact (the shared `.logo__tag` rules now ship in the www stylesheet, unused there).

The root gained dev/build/preview aliases for www and blog plus a newsletter alias; the flake now exposes a packages attrset ({pimgate, www, blog}, default still pimgate) with a refreshed npmDepsHash; the publish workflow builds all three sites and deploys pimgate to this repository's Pages as before, carrying disabled peaceiris/actions-gh-pages cross-repo deploy stubs for www and blog. The deployment cutover (cross-repo push to the standalone repositories' Pages, or DNS to another host) stays the maintainer's open decision, documented in the README; the standalone repositories are untouched and retire at cutover.

Capabilities born: **www-site**, **blog-site**. Capabilities moved: **workspace** (sites list, prerender date behaviours, flake attrset, all-site builds with disabled cross-repo deploys; Migration intent folded into Migrated sites).
