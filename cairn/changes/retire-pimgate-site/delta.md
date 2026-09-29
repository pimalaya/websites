---
cairn: delta
change: retire-pimgate-site
---

# Delta

## ADDED Requirements

None.

## MODIFIED Requirements

- workspace: The repository carries two properties, sites/www (pimalaya.org) and sites/blog (blog.pimalaya.org). The flake SHALL expose `www` and `blog`, and packages.default SHALL be the www bundle. Deployment SHALL build both sites; the cutover choice stays the maintainer's open decision.

## REMOVED Requirements

- pimgate-site: the whole capability. The site at sites/pimgate and its spec are removed.
