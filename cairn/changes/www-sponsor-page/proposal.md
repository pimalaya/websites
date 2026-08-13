---
cairn: change
id: www-sponsor-page
status: active
created: 2026-08-13
---

# A sponsoring page on pimalaya.org

## Why

Funding for Pimalaya currently happens entirely on other people's surfaces. The organisation's FUNDING.yml points at six platforms, every one of them registered to a personal handle, and GitHub renders them as a flat, unordered row of buttons with no room for a sentence. A visitor who wants to support the project therefore meets a payment provider before meeting the project, and meets a person's username before meeting Pimalaya.

That framing is wrong twice. It hides the fact that matters most, which is that the entire ecosystem runs on gift funding: grants and donations are the only money there is, nothing is sold, and the work continues exactly as long as they do. And it puts the organisation's funding story in a place the organisation does not control, so nothing explains what the money buys, what is already funded by grants, or why a company should care.

A GitHub Sponsors profile cannot be owned by the Pimalaya organisation without a legal entity or a fiscal host, and that decision has been deferred. The website is the one funding surface the organisation fully controls today, and it is enough: FUNDING.yml carries a `custom` entry, so a Pimalaya-branded page can become the first thing a prospective sponsor sees while the underlying accounts stay personal.

## What

Add a third prerendered page at `/sponsor/`, built from a tier catalogue in src/lib/sponsors.ts the same way the home and ecosystem pages are built from src/lib/products.ts.

The page states the position plainly: free software funded entirely by grants and donations, no paid tier, no gate, and time as the only real cost. It describes the funding model rather than the maintainer's situation, because a page that argues from one person's circumstances asks for rescue, while a page that states how the project is paid for asks the reader to take part in it. It separates grant funding from sponsorship, because NLnet and the European Commission fund specific named work while sponsorship funds everything around it, and conflating the two makes the project look better funded than it is: being grant-funded must not read as being already covered.

The tier ladder is deliberately not repeated here. GitHub Sponsors owns the amounts, the billing and the sponsor list, and a second copy on the site is a second thing to keep in step for no gain: a visitor who wants tiers is one click from the authoritative ones. The page carries what GitHub cannot, which is who maintains this, what the money buys, and every route it can take.

The grant credit is therefore short: two sentences drawing the line between what a grant pays for (a named piece of work, for a fixed period) and what sponsorship pays for (everything around it), then the NLnet and NGI Zero wordmarks, which are already in public/ and say more than a paragraph would.

Funding routes move into the page header as a three-column grid of cards, replacing the single "Sponsor on GitHub" button. A page whose entire purpose is the ask should not make a visitor who has already decided to give scroll past three sections of argument to find out where, and one button implied a single blessed route when there are six. Each card carries the provider's own brand mark so it is recognised before it is read, and the GitHub card keeps an accent border so the route with the tiers behind it retains the emphasis the button used to carry. The marks are the single-path monochrome glyphs from simple-icons, inlined into the shared Icon set like the existing GitHub glyph so they inherit currentColor and cost no extra request. thanks.dev publishes no usable glyph and falls back to a lettermark.

Discovery moves from a nav link to a sponsor button in the nav actions, carrying GitHub's own heart mark: a text link in a list of four reads as another page, while a heart button reads as an ask, and it is the shape people already recognise from GitHub. It becomes an optional prop on the shared Nav so the blog and pimgate are unaffected. The button keeps the heart and drops its label on narrow screens, where the middle links disappear entirely.

The platform handles and the page's figures live as named constants at the top of the catalogue so the page can be kept honest by editing one file. The handles stay personal for now and carry a note recording which ones flip to a Pimalaya-owned handle once those accounts are renamed.

The prerender JSON-LD gains a branch: the head currently chooses between the ecosystem graph and the home graph on `page.slug` being truthy, which would hand the sponsor page the ecosystem's CollectionPage and a wrong ItemList. The branch becomes explicit per slug, and the sponsor page carries a WebPage plus a breadcrumb.

Nav and footer gain a link, so the page is reachable from every other page rather than only from GitHub.
