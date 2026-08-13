---
cairn: delta
change: www-sponsor-page
---

# Delta

## ADDED Requirements

- www-site: Sponsoring page. The site SHALL carry a sponsoring page at `/sponsor/`, driven by the catalogue in src/lib/sponsors.ts. The page SHALL state the funding model rather than the maintainer's situation: it SHALL say that Pimalaya is free software funded entirely by grants and donations, SHALL distinguish grant funding (a named piece of work, for a fixed period) from sponsorship (everything that is not a deliverable) so that being grant-funded does not read as being already covered, SHALL credit the grants with their wordmarks, and SHALL SHALL present every funding route in the page header as a three-column grid of cards, each carrying that provider's brand mark, in place of a single call to action. The page SHALL NOT restate the sponsorship tiers: GitHub Sponsors owns the amounts and the billing, and the page links to it rather than keeping a second copy in step. The platform handles and the page's factual figures SHALL live as named constants in the catalogue so the page is edited in one file. No other page SHALL list payment platforms: the home page's funding acknowledgement SHALL close on a single call to action to `/sponsor/`, so the routes exist in one place and every ask goes through the page that explains what the money is for.

- shared: Funding marks and sponsor button. The shared Icon set SHALL carry the funding brand marks (heart, liberapay, kofi, buyMeACoffee, paypal) as single-path monochrome glyphs inheriting currentColor, and Nav SHALL accept an optional sponsorHref rendering a heart button in the nav actions, which drops its label but keeps the heart on narrow screens. Sites without a funding page SHALL omit the prop and render no button.

## MODIFIED Requirements

- www-site: Two pages becomes Three pages. The site SHALL ship exactly three prerendered JavaScript-free pages, the home page at `/`, the ecosystem map at `/ecosystem/` and the sponsoring page at `/sponsor/`, plus sitemap.xml and robots.txt. It SHALL reuse the shared chrome parameterized with the website's links: nav (Pimalaya wordmark without a tag, links to the ecosystem page, the blog, Matrix and Mastodon, a sponsor heart button to the sponsoring page, a GitHub glyph to the organisation, a Subscribe call to action to Buttondown) and the dark footer (Follow, Project and Community columns, the "Open-source PIM tools, written in Rust" tagline). The footer SHALL NOT carry the grant funding note: a line claiming years of institutional backing on every page contradicts the sponsoring page's ask, and the grants are credited on that page instead. The shared Footer's bottomNote SHALL therefore be optional, and its bottom line SHALL render the copyright alone when it is omitted.

- www-site: Head and structured data. The pages SHALL carry the title, meta description, keywords, canonical https://pimalaya.org/, Open Graph tags with the social card, and JSON-LD injected at prerender time. The prerender SHALL select the graph by page slug rather than by the slug being non-empty: the home page carries the organisation graph (Organization with funders + WebSite + Himalaya as the flagship SoftwareApplication), the ecosystem page a CollectionPage with the organisation's own catalogue as an ItemList plus a breadcrumb, and the sponsoring page a WebPage plus a breadcrumb.

## REMOVED Requirements

None.
