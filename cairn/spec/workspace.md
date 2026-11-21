---
cairn: spec
capability: workspace
status: current
---

# Workspace

The repository is the monorepo of the Pimalaya web properties: an npm workspace with a shared layer (shared/, published in-workspace as `@pimalaya/shared`) and one package per site under sites/. It exists so every Pimalaya website shares one theme, one component chrome, one license pair and one nix shell, instead of each repository carrying a diverging copy. Three properties live here: sites/www (pimalaya.org), sites/blog (blog.pimalaya.org) and sites/pkg (the install page of pkg.pimalaya.org).

### Requirement: Workspace layout
The root package.json SHALL declare the npm workspaces `shared` and `sites/*`. Each site SHALL be a self-contained Vite package (own package.json with dev, build and preview scripts, index.html, src/, public/, prerender.js) consuming `@pimalaya/shared`. The root SHALL expose per-site aliases (`dev:<site>`, `build:<site>`, `preview:<site>`).

### Requirement: Shared layer
shared/ SHALL carry only what more than one site needs or will need at migration: the design tokens (styles/theme.css) and global styles, the self-hosted fonts, the parameterized site chrome (Nav with optional sub-labels and marked external links, Footer), the ui primitives (Button, Icon, Logo with optional property tag, Container), and the reusable prerender script exported as `@pimalaya/shared/prerender`. Site-specific copy, head metadata, JSON-LD and assets SHALL stay in the site. The theme SHALL remain structurally identical to the one shipped by pimalaya.org and the blog (logo gradient #f193b6 → #e267a3 → #bf1e83: rosy paper, plum ink, magenta accent) so all properties read as one family.

### Requirement: Accessible theme
Every text pair of the theme SHALL reach a contrast of 4.5:1 or more, in the light palette and in the prefers-color-scheme dark palette. Interactive targets SHALL be at least 44px high. The display face SHALL be Source Serif 4, self-hosted under shared/src/fonts with its OFL 1.1 license, the system serif stack kept as fallback; no site SHALL load fonts from a third party.

### Requirement: JavaScript-free pages
Every shipped page of every site SHALL be prerendered to static HTML at build time via the shared prerender machinery, with the SPA module script and modulepreloads stripped, plus sitemap.xml and robots.txt per site. A page carrying a date (blog articles) SHALL get an `article` og:type and feed the sitemap's lastmod (the undated index inheriting the newest page date); sites without dated pages SHALL emit no lastmod at all. Client entries SHALL only serve the dev server. Builds SHALL stay byte-reproducible: no clock reads, dates come from the pages only.

### Requirement: One toolchain
One flake.nix and one shell.nix at the root SHALL provide the node toolchain for the whole workspace (no per-site shells). The flake SHALL expose one buildNpmPackage per site as a packages attrset (`www`, `blog`, `pkg`), each building that site's static bundle reproducibly off the single root lockfile; packages.default SHALL be the www bundle.

### Requirement: Migrated sites
The website (pimalaya.org, sites/www) and blog (blog.pimalaya.org, sites/blog) live in the workspace, consuming shared/ instead of their own copies of the theme, chrome, ui primitives and prerender machinery. The migration was a re-homing, not a redesign; the sites have since been redesigned here (www-design-refresh), and their copy, head metadata and JSON-LD SHALL change only through their own specs. Their standalone repositories were renamed pimalaya/_www and pimalaya/_blog and hold only their Publish workflow.

### Requirement: Deployment
GitHub Pages serves one site per repository, so no domain is served from this repository's Pages. Each site SHALL be deployed by the repository that owns its domain, building this repository's master: pimalaya.org by the Publish workflow of pimalaya/_www (`npm run build:www`), blog.pimalaya.org by the Publish workflow of pimalaya/_blog (`npm run build:blog`), both started by hand, and pkg.pimalaya.org by the Hub workflow of pimalaya/packages (`npm run build:pkg`), whose site also carries the package repositories and which rebuilds the page on every run.
