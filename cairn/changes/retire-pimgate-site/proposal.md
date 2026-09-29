---
cairn: change
id: retire-pimgate-site
status: landed
created: 2026-09-29
---

# Retire the pimgate site

## Why

Pimgate is no longer a product: it was re-architected into a credential-less connector serving the sync engine, and its commercial framing (selling operation of the gateway) was abandoned. The one-pager at pimgate.pimalaya.org still sells that operation, which now contradicts the business story on pimalaya.org/business/ (www-two-audiences). Two business pages telling two stories is worse than one.

## What

Remove sites/pimgate from the workspace: the directory, its root scripts, its lockfile entry and its flake package. packages.default becomes the www bundle. The protocol deadline section is not lost: www-two-audiences reuses it on the business page.

Taking the live site down (Pages, DNS) is the maintainer's move, outside this repository.
