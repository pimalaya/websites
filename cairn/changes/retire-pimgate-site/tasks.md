---
cairn: tasks
change: retire-pimgate-site
---

# Tasks

- [x] Remove sites/pimgate, its root scripts and its lockfile entry
- [x] Remove the pimgate flake package; packages.default becomes www
- [x] Update README.md and CONTRIBUTING.md
- [x] Verify: nix build and nix build .#www succeed
- [x] Remove spec/pimgate-site.md, update spec/workspace.md, write the log entry
- [ ] Maintainer: take pimgate.pimalaya.org down (Pages, DNS)
