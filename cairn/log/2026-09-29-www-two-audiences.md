---
cairn: log
change: www-two-audiences
landed: 2026-09-29
---

# pimalaya.org for two audiences

pimalaya.org now speaks to both sides of the project. The home page hero opens on two doors, "Explore the tools" (to the tools grid, whose anchor moved from `#apps` to `#tools`) and "Pimalaya for business", replacing the GitHub button that the nav already carries; its lead now says what the project makes and for whom, and the head description and the organisation JSON-LD follow it. The open-source content (Himalaya, the tools grid, the libraries) is unchanged, except for one line under the tools lead pointing Gmail and Microsoft 365 users at the planned sign-in. Two bands follow the libraries: the business band (the three pains, the two offers as cards, a call to action) and the community band (one paragraph, a call to action), then the newsletter and the gratitude.

Three pages joined. /business/ is pain-first: why pay for free software (provider quirks, OAuth verification and its yearly Gmail audit, the protocol deadlines reused from the pimgate one-pager, maintenance over creation), what the project brings (counts from sponsors.ts), the provider and integrator offers (the integrator offer gained OAuth verification setup for the customer's own apps), what a partnership does not buy, the partners (none yet) and a contact. /sign-in/ announces the one-step sign-in as planned, with a price and a "tell us you would pay" email, and routes companies to the integrator offer. /community/ gathers chat, news, contributing (the organisation's CONTRIBUTING, GUIDELINES and AI_POLICY) and integrating (INTEGRATING and ARCHITECTURE, the ecosystem), followed by the newsletter.

Everything sold lives in src/lib/offers.ts: prices (placeholders, not to be published), pains, offers, the sign-in offer and the partners. The three text pages share Page.css. App.tsx picks pages from a slug map instead of a ternary chain. The nav became Ecosystem, Business, Blog, Community (Chat and News moved into /community/); the footer became Open source, Business, Follow, Contact. The prerender gained a `webPage()` helper for the plain WebPage-plus-breadcrumb graphs. The community catalogue gained an optional partner flag rendered as a badge, and the sponsor page routes companies to /business/.

This change superseded the unlanded www-partners-page draft (a /partners/ page with the sign-in offer mixed in), which was never published and was removed. The sponsoring page's own requirement stays with the still-active www-sponsor-page change.

Capabilities moved: **www-site** (Six pages, Two audiences on the home page, Business page, Sign-in page, Community page, Community catalogue, Site-local pieces, Head and structured data).
