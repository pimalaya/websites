---
cairn: tasks
change: migrate-sites
---

# Tasks

- [x] sites/www: copy src, index.html, prerender.js, public and assets from the website repository; consume `@pimalaya/shared` for theme, chrome, ui primitives and prerender; keep HomePage, EcosystemPage, Subscribe, StatusBadge and lib/products.ts site-local
- [x] sites/blog: copy src, index.html, prerender.js, public, assets, posts and scripts/newsletter.js from the blog repository; consume `@pimalaya/shared`; keep IndexPage, PostPage, Subscribe, lib/posts.ts and lib/feed.ts site-local
- [x] shared/: fold the blog-only prerender behaviours in additively (article og:type and sitemap lastmod, both driven by page.date, no-ops for undated sites)
- [x] Root plumbing: dev/build/preview aliases for www and blog plus a newsletter alias; flake packages attrset {pimgate, www, blog} with pimgate as default; refresh npmDepsHash after the lockfile changes
- [x] Workflow: build all three sites, keep deploying pimgate to this repository's Pages, add disabled cross-repo deploy stubs for www and blog
- [x] Docs: README sites table with www and blog rows, migration wording (done, cutover pending), Deployment cutover options, blog newsletter usage; CHANGELOG entry
- [x] Verify: build all three sites in the nix shell, nix build, compare prerendered output against the standalone repositories' dist
