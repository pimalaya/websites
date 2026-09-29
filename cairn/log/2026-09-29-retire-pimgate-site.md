---
cairn: log
change: retire-pimgate-site
landed: 2026-09-29
---

# Retire the pimgate site

sites/pimgate is gone from the workspace, with its root scripts, its lockfile entries and its flake package. packages.default is now the www bundle, and the flake's npmDepsHash was updated for the lockfile without the pimgate workspace. Its protocol deadline section lives on in the business page of pimalaya.org.

The README and CONTRIBUTING no longer mention the one-pager; the README's deployment paragraph also stopped referring to the publish workflow, which had already been removed, and now states that nothing deploys from this repository until the cutover. The changelog's unreleased entry for the one-pager was dropped, since it never shipped in a release.

Taking pimgate.pimalaya.org down (Pages, DNS) is left to the maintainer.

Capabilities moved: **workspace** (two properties, flake packages, deployment); **pimgate-site** removed.
