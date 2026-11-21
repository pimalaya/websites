---
cairn: delta
change: pkg-site
---

# Delta

## ADDED Requirements

### Requirement: Packages install page
See spec/pkg-site.md: sites/pkg, the install page of pkg.pimalaya.org, on the shared chrome, with the `@NAME@` placeholders the packages hub fills.

## MODIFIED Requirements

### Requirement: Workspace layout
The root SHALL expose per-site aliases for www, blog and pkg; the three properties live in sites/.

### Requirement: One toolchain
The flake SHALL expose `www`, `blog` and `pkg` packages.

### Requirement: Migrated sites
The standalone website and blog repositories were renamed pimalaya/_www and pimalaya/_blog and now hold only the Publish workflow building this repository.

### Requirement: Deployment
pimalaya.org and blog.pimalaya.org SHALL be deployed by the Publish workflows of pimalaya/_www and pimalaya/_blog, which build this repository's master; pkg.pimalaya.org by the Hub workflow of pimalaya/packages, which builds sites/pkg on every run.
