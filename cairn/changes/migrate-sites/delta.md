---
cairn: delta
change: migrate-sites
---

# Delta

## ADDED Requirements

- `www-site`: the pimalaya.org site at sites/www (home page and ecosystem map over the products catalogue, shared chrome parameterized with the website's links, site-local StatusBadge and Subscribe, head metadata and JSON-LD unchanged from the standalone repository).
- `blog-site`: the blog.pimalaya.org site at sites/blog (markdown posts pipeline, RSS feed, JavaScript-free article pages, shared chrome with the `blog` logo tag, manual Buttondown newsletter script, head metadata and JSON-LD unchanged from the standalone repository).

## MODIFIED Requirements

- `workspace`: the sites are www, blog and pimgate (migration intent fulfilled; the standalone website and blog repositories retire at cutover, archiving is the maintainer's move); the shared prerender additionally emits article og:type and sitemap lastmod driven by page dates, as no-ops for undated sites; the flake exposes a packages attrset {pimgate, www, blog} with pimgate remaining packages.default; the publish workflow builds all three sites but still deploys only pimgate to this repository's Pages, with disabled cross-repo deploy stubs for www and blog until the maintainer picks a cutover path (cross-repo push to the existing Pages repositories, or DNS to another host).

## REMOVED Requirements

None.
