---
cairn: spec
capability: www-site
status: current
---

# Www site

The Pimalaya website at sites/www, served at pimalaya.org: the organisation's front door, migrated unchanged from the standalone website repository. The directory is named `www` because it is the conventional host label for the apex domain and it avoids colliding with the retiring standalone repository.

### Requirement: Two pages
The site SHALL ship exactly two prerendered JavaScript-free pages, the home page at `/` and the ecosystem map at `/ecosystem/`, plus sitemap.xml and robots.txt. It SHALL reuse the shared chrome parameterized with the website's links: nav (Pimalaya wordmark without a tag, links to the ecosystem page, the blog, Matrix and Mastodon, a GitHub glyph to the organisation, a Subscribe call to action to Buttondown) and the dark footer (Follow, Project and Community columns, the "Open-source PIM tools, written in Rust" tagline, the NLnet and European Commission funding note).

### Requirement: Products catalogue
The home page and the ecosystem map SHALL be driven by the catalogues in src/lib/products.ts (apps, libraries, retired crates, each with a status rendered by the site-local StatusBadge, plus the community projects). The ecosystem page SHALL present its sections in the order roadmap, libraries, apps, community, frozen and retired, experiments: the libraries come first because every app is a thin frontend over them. The home page grid SHALL draw from both the apps and the libraries catalogues, filtered on the `home` flag: a library carrying a command-line interface behind a cargo feature is installable today and belongs in the grid, while its row stays in the libraries table on the ecosystem page. Only the organisation's own catalogues (apps, libraries, retired) SHALL feed the ecosystem page's JSON-LD ItemList at prerender time.

### Requirement: Community catalogue
src/lib/products.ts SHALL carry a second catalogue of third-party projects built on the Pimalaya tools, each with a full URL, an author and a kind, and no hand-curated status: the site does not grade other people's work. The ecosystem page SHALL render it in its own table (Name, Author, Kind, What it does) under a "From the community" section that states plainly that none of them are maintained by the organisation and invites additions by pull request. The community catalogue SHALL NOT feed the JSON-LD ItemList, which describes the organisation's own repositories.

### Requirement: Site-local pieces
StatusBadge, Subscribe and the page components (HomePage, EcosystemPage) SHALL stay in the site; the theme, chrome, Button, Icon, Logo, Container and prerender machinery SHALL come from `@pimalaya/shared`.

### Requirement: Head and structured data
The pages SHALL carry the title, meta description, keywords, canonical https://pimalaya.org/, Open Graph tags with the social card, and JSON-LD injected at prerender time (the home page the organisation graph: Organization with funders + WebSite + Himalaya as the flagship SoftwareApplication; the ecosystem page a CollectionPage with the full catalogue as an ItemList plus a breadcrumb), all unchanged from the standalone repository.
