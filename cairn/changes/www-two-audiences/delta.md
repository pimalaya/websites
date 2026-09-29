---
cairn: delta
change: www-two-audiences
---

# Delta

## ADDED Requirements

- www-site: Business page. The site SHALL carry a business page at `/business/`, pain-first: why pay for free software (provider quirks, OAuth verification and its yearly audit, protocol deadlines, maintenance over creation), what the project brings, the two offers (email providers, integrators) each with the buyer's problem, the benefits and a starting yearly price, what a partnership does not buy (ranking, exclusivity, gated features, endorsement beyond the integration point, round-the-clock support), the current partners listed honestly including when there are none, and a contact. Offers, prices and partners SHALL come from src/lib/offers.ts.

- www-site: Sign-in page. The site SHALL carry a page at `/sign-in/` announcing the one-step Gmail and Microsoft sign-in subscription for individual users as planned, with its price, a call to commit, and the statement that bringing your own client ID stays free. It SHALL NOT present the service as available until it is built.

- www-site: Community page. The site SHALL carry a page at `/community/` gathering chat (Matrix), news (blog, RSS, Mastodon, newsletter), how to contribute and how to integrate (architecture, libraries, the CLI's JSON output, the community catalogue).

- www-site: Two audiences on the home page. The home page SHALL present both sides: a hero with two calls to action (the tools, and the business page), the open-source content (flagship, tools grid with a link to the sign-in page, libraries), a business band (the pain in three facts, the two offers read from src/lib/offers.ts, a call to action to `/business/`), a community band linking to `/community/`, the newsletter and the gratitude.

## MODIFIED Requirements

- www-site: Three pages becomes Six pages. The site SHALL ship exactly six prerendered JavaScript-free pages (`/`, `/ecosystem/`, `/sponsor/`, `/business/`, `/sign-in/`, `/community/`), plus sitemap.xml and robots.txt. The nav SHALL link to the ecosystem page, the business page, the blog and the community page, with the sponsor heart button, the GitHub glyph and the Subscribe call to action. The footer SHALL carry Open source, Business, Follow and Contact columns.

- www-site: Head and structured data. The business, sign-in and community pages SHALL each carry a WebPage plus a breadcrumb.

- www-site: Sponsoring page. The sponsoring page SHALL route companies to `/business/`. Its statement that Pimalaya is funded entirely by grants and donations SHALL be reworded when the first partnership is signed.

- www-site: Community catalogue. A community entry MAY carry a partner flag, rendered as a badge linking to the business page.

## REMOVED Requirements

None.
