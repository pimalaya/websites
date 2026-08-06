---
cairn: tasks
change: init
---

# Tasks

- [x] Root workspace: package.json (workspaces shared + sites/*), base tsconfig, flake.nix + shell.nix, .gitignore
- [x] shared/: theme + global styles, Nav and Footer (parameterized), Button, Icon, Logo (optional tag), Container, prerender script
- [x] sites/pimgate: index.html metadata, one-pager sections, pricing placeholders, JSON-LD prerender, Pimalaya favicon and social card assets
- [x] Docs: README (sites table, layout, migration intent), CHANGELOG, CONTRIBUTING, SECURITY, AGENTS.md and CLAUDE.md, license pair copied from the website repository
- [x] Publish workflow for GitHub Pages at pimgate.pimalaya.org
- [x] Verify: npm install + npm run build:pimgate in the nix shell, nix build, prerendered output free of module scripts
