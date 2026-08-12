---
cairn: delta
change: www-community-apps
---

# Delta

## ADDED Requirements

- www-site: Community catalogue. src/lib/products.ts SHALL carry a second catalogue of third-party projects built on Pimalaya tools, each with a full URL, an author and a kind, and no hand-curated status. The ecosystem page SHALL render it in its own table (Name, Author, Kind, What it does) under a "From the community" section, and the prerender JSON-LD ItemList SHALL NOT include it: the ItemList describes the organisation's own repositories.

## MODIFIED Requirements

- www-site: Products catalogue. The home page and the ecosystem map SHALL be driven by the catalogues in src/lib/products.ts (apps, libraries, retired crates, each with a status rendered by the site-local StatusBadge, plus the community projects). The ecosystem page SHALL present its sections in the order roadmap, libraries, apps, community, frozen and retired, experiments: the libraries come first because every app is a thin frontend over them. Only the organisation's own catalogues (apps, libraries, retired) SHALL feed the ecosystem page's JSON-LD ItemList at prerender time.

## REMOVED Requirements

None.
