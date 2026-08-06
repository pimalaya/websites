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
The home page and the ecosystem map SHALL be driven by the single catalogue in src/lib/products.ts (apps, libraries, retired crates, each with a status rendered by the site-local StatusBadge). The catalogue also SHALL feed the ecosystem page's JSON-LD ItemList at prerender time.

### Requirement: Site-local pieces
StatusBadge, Subscribe and the page components (HomePage, EcosystemPage) SHALL stay in the site; the theme, chrome, Button, Icon, Logo, Container and prerender machinery SHALL come from `@pimalaya/shared`.

### Requirement: Head and structured data
The pages SHALL carry the title, meta description, keywords, canonical https://pimalaya.org/, Open Graph tags with the social card, and JSON-LD injected at prerender time (the home page the organisation graph: Organization with funders + WebSite + Himalaya as the flagship SoftwareApplication; the ecosystem page a CollectionPage with the full catalogue as an ItemList plus a breadcrumb), all unchanged from the standalone repository.
