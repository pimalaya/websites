---
cairn: spec
capability: workspace
status: current
---

# Workspace

The repository is the monorepo of the Pimalaya web properties: an npm workspace with a shared layer (shared/, published in-workspace as `@pimalaya/shared`) and one package per site under sites/. It exists so every Pimalaya website shares one theme, one component chrome, one license pair and one nix shell, instead of each repository carrying a diverging copy. Both properties live here: sites/www (pimalaya.org) and sites/blog (blog.pimalaya.org); the standalone website and blog repositories retire at their deployment cutover.

### Requirement: Workspace layout
The root package.json SHALL declare the npm workspaces `shared` and `sites/*`. Each site SHALL be a self-contained Vite package (own package.json with dev, build and preview scripts, index.html, src/, public/, prerender.js) consuming `@pimalaya/shared`. The root SHALL expose per-site aliases (`dev:<site>`, `build:<site>`, `preview:<site>`).

### Requirement: Shared layer
shared/ SHALL carry only what more than one site needs or will need at migration: the design tokens (styles/theme.css) and global styles, the parameterized site chrome (Nav, Footer), the ui primitives (Button, Icon, Logo with optional property tag, Container), and the reusable prerender script exported as `@pimalaya/shared/prerender`. Site-specific copy, head metadata, JSON-LD and assets SHALL stay in the site. The theme SHALL remain structurally identical to the one shipped by pimalaya.org and the blog (logo gradient #f193b6 → #e267a3 → #bf1e83: rosy paper, plum ink, magenta accent) so all properties read as one family.

### Requirement: JavaScript-free pages
Every shipped page of every site SHALL be prerendered to static HTML at build time via the shared prerender machinery, with the SPA module script and modulepreloads stripped, plus sitemap.xml and robots.txt per site. A page carrying a date (blog articles) SHALL get an `article` og:type and feed the sitemap's lastmod (the undated index inheriting the newest page date); sites without dated pages SHALL emit no lastmod at all. Client entries SHALL only serve the dev server. Builds SHALL stay byte-reproducible: no clock reads, dates come from the pages only.

### Requirement: One toolchain
One flake.nix and one shell.nix at the root SHALL provide the node toolchain for the whole workspace (no per-site shells). The flake SHALL expose one buildNpmPackage per site as a packages attrset (`www`, `blog`), each building that site's static bundle reproducibly off the single root lockfile; packages.default SHALL be the www bundle.

### Requirement: Migrated sites
The website (pimalaya.org, sites/www) and blog (blog.pimalaya.org, sites/blog) live in the workspace, consuming shared/ instead of their own copies of the theme, chrome, ui primitives and prerender machinery. The migration is a re-homing, not a redesign: their pages, copy, head metadata, JSON-LD and rendered output SHALL stay identical to the standalone repositories'. Their standalone repositories retire at their deployment cutover; archiving them is the maintainer's move.

### Requirement: Deployment
GitHub Pages serves one site per repository, so both domains cannot be served from this repository's Pages. Nothing is deployed from this repository until the cutover: both sites stay deployed from their standalone repositories. The cutover choice (push each dist/ to the standalone repository's Pages from this repository's CI, or move DNS to another host and archive the standalone repositories) is the maintainer's open decision, documented in the README, and SHALL NOT be pre-empted by this repository.
