---
cairn: change
id: www-two-audiences
status: landed
created: 2026-09-29
---

# pimalaya.org for two audiences

## Why

Grants end and donations do not scale, so Pimalaya needs recurring income that depends on neither. Hosted services are ruled out by credential custody, open core by the fact that the natural enterprise features are already free, and relicensing by the social contract of MIT OR Apache-2.0. What remains, and what the project is uniquely placed to sell, is the promise that things keep working: correctness against real servers, and stability for those who build on the tools.

That makes Pimalaya two things at once. The open-source side (developers, solo users) needs to discover the apps and libraries and find out how to talk, contribute and integrate. The business side (email providers, integrators) needs the pain, the value and the price, so a company understands why it would pay for free software. The site today speaks only to the first, with the funding story on /sponsor/ as the only money page.

This change supersedes the unlanded www-partners-page draft, which added the business offers as a disconnected page with a consumer offer mixed in.

## What

Everything stays on pimalaya.org under paths: one brand, one chrome, one deploy. A subdomain only makes sense for a separately branded product, and the one that existed (pimgate) retires in retire-pimgate-site.

Site map:

- `/` presents both sides: the hero offers two doors ("Explore the tools", "Pimalaya for business"), then the open-source content (Himalaya, the tools grid, the libraries), then a business band (the pain in three facts, the two offers, a call to action), then a community band, the newsletter and the gratitude.
- `/business/` is pain-first: why pay for free software (provider quirks, OAuth verification and its yearly audit, protocol deadlines, maintenance over creation), what we bring, the two offers (providers, integrators), what a partnership does not buy, current partners, contact. The protocol deadlines reuse the pimgate page's section.
- `/sign-in/` announces the planned one-step Gmail and Microsoft sign-in for individual users: a small Pimalaya token server holds the secret of Pimalaya's verified apps, checks the account against a subscription, and never sees mail or contacts. Bringing your own client ID stays free. It is presented as planned with a price and a call to commit; it is built only if commitments cover at least the yearly Gmail audit and the server. It lives on the open-source side because its buyers are individual users, linked from the tools section (and later from Himalaya's OAuth docs and wizard).
- `/community/` gathers chat, news, how to contribute and how to integrate. Chat and News leave the nav for it.
- `/ecosystem/` and `/sponsor/` stay; the community catalogue gains an optional partner badge, and the sponsor page routes companies to `/business/`.

Nav: Ecosystem, Business, Blog, Community, plus the sponsor heart, the GitHub glyph and Subscribe. Footer: Open source, Business, Follow, Contact.

All prices live in src/lib/offers.ts as placeholders until decided; the page is not published with them.

The sponsor page states that Pimalaya is funded entirely by grants and donations. That stays true until the first contract is signed, and is reworded then.

## Open decisions (before publishing)

- Prices per offer (working assumption: integrators 8 to 20 kEUR/year; providers and sign-in to be defined).
- Who signs and invoices: the organisation is not a legal entity, so contracts need the maintainer's business entity.
- "Pimalaya is a small team": keep only if accurate.
- Re-check the protocol deadline dates.
