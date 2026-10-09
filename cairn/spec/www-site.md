---
cairn: spec
capability: www-site
status: current
---

# Www site

The Pimalaya website at sites/www, served at pimalaya.org: the organisation's front door, for two audiences. The open-source side (developers and solo users) discovers the apps and libraries and finds out how to talk, contribute and integrate; the business side (email providers and integrators) finds the pain, the value and the price. The directory is named `www` because it is the conventional host label for the apex domain and it avoids colliding with the retiring standalone repository.

### Requirement: Six pages
The site SHALL ship exactly six prerendered JavaScript-free pages: the home page at `/`, the ecosystem map at `/ecosystem/`, the community page at `/community/`, the sign-in page at `/sign-in/`, the sponsoring page at `/sponsor/` and the business page at `/business/`, plus sitemap.xml and robots.txt. It SHALL reuse the shared chrome parameterized with the website's links: nav (Pimalaya wordmark without a tag, one-line links to the tools anchor of the home page, the ecosystem page, the business page, the community page and the blog marked as external, a sponsor heart button to the sponsoring page, a GitHub glyph to the organisation) and the dark footer (Open source, Business, Follow and Contact columns, the "Open-source PIM tools, written in Rust" tagline).

### Requirement: Two audiences on the home page
The home page SHALL present both sides: a hero with two calls to action (install Himalaya, browse the tools) beside the Himalaya terminal, over a facts strip; the tools as a list grouped by domain, with links to the ecosystem page and the sign-in page; the developers side (the libraries) beside the business side (the offers read from src/lib/offers.ts and a call to action to `/business/`); one band for the community (linking to `/community/`) and the newsletter; then the gratitude. The home page SHALL make no third-party request.

### Requirement: Products catalogue
The home page and the ecosystem map SHALL be driven by the catalogues in src/lib/products.ts (apps, libraries, retired crates, each with a status rendered by the site-local StatusBadge, plus the community projects). The ecosystem page SHALL present its sections in the order roadmap, libraries, apps, community, frozen and retired, experiments: the libraries come first because every app is a thin frontend over them. Rows inside each table SHALL be sorted by name. Statuses SHALL follow the releases: `in development` means no release yet, `early` a first release, `beta` a release in real use, `stable` a mature one. The home page grid SHALL draw from both the apps and the libraries catalogues, filtered on the `home` flag: a library carrying a command-line interface behind a cargo feature is installable today and belongs in the grid, while its row stays in the libraries table on the ecosystem page. Only the organisation's own catalogues (apps, libraries, retired) SHALL feed the ecosystem page's JSON-LD ItemList at prerender time.

### Requirement: Community catalogue
src/lib/products.ts SHALL carry a second catalogue of third-party projects built on the Pimalaya tools, each with a full URL, an author and a kind, and no hand-curated status: the site does not grade other people's work. The ecosystem page SHALL render it in its own table (Name, Author, Kind, What it does) under a "From the community" section that states plainly that none of them are maintained by the organisation and invites additions by pull request. A community entry MAY carry a partner flag, rendered as a badge linking to the business page; listing SHALL never require a partnership. The community catalogue SHALL NOT feed the JSON-LD ItemList, which describes the organisation's own repositories.

### Requirement: Business page
The business page SHALL open on its headline beside rows for the two offers and the planned sign-in, then be pain-first: why pay for free software (provider quirks, OAuth verification and its yearly audit, protocol deadlines, maintenance over creation), what the project brings (libraries tested against the providers people use, on accounts kept for testing alone), the two offers (email providers, integrators) each with a one-line definition of who it is for, the buyer's problem, the benefits and a starting yearly price (optionally followed by a note such as large providers being on quote), what a partnership does not buy (ranking, exclusivity, gated features, endorsement beyond the integration point, round-the-clock support), the current partners listed honestly including when there are none, and a contact. Offers, prices, pains and partners SHALL come from src/lib/offers.ts, where prices stay placeholders until decided; the site SHALL NOT be published with placeholder prices.

### Requirement: Sponsorship pays for dedicated test accounts
The sponsoring page SHALL state, among what sponsorship funds, the dedicated accounts at Microsoft and Google on which every release is tested against the real services without touching anyone's data, without figures. It SHALL NOT be published before those accounts exist and the live tests run on them.

### Requirement: Sign-in page
The sign-in page SHALL announce the one-step Gmail and Microsoft 365 sign-in subscription for individual users as planned, with its price, a call to commit, and the statement that bringing your own client ID stays free. It SHALL NOT present the service as available until it is built.

### Requirement: Community page
The community page SHALL gather chat (Matrix), news (blog, RSS, Mastodon, the newsletter), how to contribute (the organisation's contributing guide, guidelines and AI policy) and how to integrate (the integration and architecture guides, the libraries and apps, the community catalogue).

### Requirement: Site-local pieces
StatusBadge, Subscribe (exporting SubscribeForm for reuse in other bands) and the page components (HomePage, EcosystemPage, SponsorPage, BusinessPage, SignInPage, CommunityPage) SHALL stay in the site, the inner pages sharing the page vocabulary of Page.css (header, facts strip, sections, panels, row lists, points, timeline, roadmap steps, price) and keeping only their own layout in a page stylesheet; the theme, chrome, Button, Icon, Logo, Container and prerender machinery SHALL come from `@pimalaya/shared`.

### Requirement: Head and structured data
The pages SHALL carry the title, meta description, keywords, canonical https://pimalaya.org/, Open Graph tags with the social card, and JSON-LD injected at prerender time and selected by page slug: the home page the organisation graph (Organization with funders + WebSite + Himalaya as the flagship SoftwareApplication); the ecosystem page a CollectionPage with the organisation's own catalogue as an ItemList plus a breadcrumb; the sponsoring, community, sign-in and business pages a WebPage plus a breadcrumb. The offers SHALL stay out of the graph while their prices are placeholders.
