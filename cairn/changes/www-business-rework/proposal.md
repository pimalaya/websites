---
cairn: change
id: www-business-rework
status: landed
created: 2026-10-18
---

# Business page: apps for providers, honest OAuth, AI stance

## Why

The provider offer sells what a provider gets once and for free: a quirk found, a preset added. Nothing in it recurs, so nothing justifies a yearly fee. What recurs for a provider is its users' clients: on Android a Posteo or mailbox.org user assembles a mail app, DAVx5 and a calendar app, and every one of them needs store updates, platform updates and fixes against the provider's servers, year after year. Pimalaya ships those apps (Android first) and can publish and maintain them for a provider, under its name.

The integrator offer promises "OAuth verification, done once". A company owns its OAuth apps (client id, consent screen, verification, the yearly Gmail audit): Pimalaya cannot and should not do it for them. The value Pimalaya brings is that sign-in keeps working in the code (each provider's flows, scopes, token refresh, maintained in the stack as the providers change), plus the experience of going through Google and Microsoft verification.

Pimalaya ships no AI, and the open-source world and providers do not want it to. Products built on the stack do (Red Arrow's client among them), and they need to know the tools are made to be driven by agents. The site says neither today.

## What

- Provider offer, reworded, not dropped: the CI, quirks and preset benefits stay; it gains apps under the provider's name, published on the stores and kept up to date (the white label stays implicit, not a headline). Price: from €10,000 setup, then €5,000 per year for maintenance and distribution. A note states honestly that Android comes first and other platforms follow as they ship; large providers stay on quote.
- The price block learns an optional setup fee, so a panel can read "€10,000 setup, then €5,000 per year".
- Integrator offer: "OAuth verification, done once" becomes "sign-in that keeps working": every provider's OAuth flows maintained in the stack, and guidance for verifying the company's own apps. The pain "OAuth is a compliance project" stays, it is the company's pain.
- A fourth pain, aimed at providers: an app nobody maintains dies (store rules, platform updates, protocol changes come back every year).
- Header lead carries the promise: the ecosystem keeps moving, we keep you working.
- AI stance, stated once on the business page (in what we bring) and once on the community page (under integrate): Pimalaya ships no AI; its tools are made to be driven by yours (JSON output, JSON schemas, documentation). MCP is named only as planned until it exists.
- Spec: the business page requirement follows.

## Open points

- MCP: no MCP server exists in the stack today; confirm the wording "planned" or drop the mention.
- The prices above replace PROVIDER_PRICE; the 2026-09-29 research behind €3,000 no longer applies to the provider offer.
