---
cairn: log
change: www-business-rework
date: 2026-10-18
---

# Business page rework

Landed in sites/www, not yet published.

- Provider offer reworded: apps under the provider's name, published on the stores and kept up to date, beside the CI, quirks and preset benefits. Price from €5,000 per year plus a setup from €10,000, with the note "Android today, other platforms as they ship".
- Integrator offer: "OAuth verification, done once" replaced by "Audit-ready" (bill of materials and security policy of every supported release). OAuth and discovery are presented as part of the libraries' correctness in "What we bring".
- Fourth pain: an app nobody maintains dies.
- Header lead carries "The ecosystem keeps moving, we keep you working."
- AI stance on the business page (what we bring) and the community page (integrate): Pimalaya ships no AI, its tools are made to be driven by other software. MCP left out until it exists.
- Offer gains an optional `setup` field in src/lib/offers.ts, rendered under the yearly price.

Capabilities moved: www-site (Business page modified, AI stance added).
