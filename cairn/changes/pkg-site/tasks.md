---
cairn: tasks
change: pkg-site
---

# Tasks

- [x] sites/pkg: package.json, vite.config.ts, index.html, prerender.js, src/ (App with the placeholders, App.css, entry-server, main), favicon
- [x] Root scripts `dev:pkg`, `build:pkg`, `preview:pkg`; flake `packages.pkg`; npmDepsHash refreshed (it was already stale at HEAD), www, blog and pkg built with `nix build`
- [x] pimalaya/packages: linux-build takes the built page, fills the placeholders across the file, adds the page hash to the manifest; the Hub workflow checks out and builds this repository; built locally with a throwaway key, checked in light, dark and phone widths
- [x] README and workspace spec: deployment through pimalaya/_www, pimalaya/_blog and the packages hub
- [x] Fold into spec/pkg-site.md and spec/workspace.md, log entry
