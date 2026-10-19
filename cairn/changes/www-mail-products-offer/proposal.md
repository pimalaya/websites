---
cairn: change
id: www-mail-products-offer
status: landed
created: 2026-10-19
---

# Business page: an offer for products that handle mail, integrator tiers, checked deadlines

## Why

The business page shows Microsoft's deadlines but no offer for the companies they hit: CRMs, helpdesks, ERPs and internal tools that read or send their customers' mail through Exchange Web Services or basic SMTP AUTH. The integrator offer only speaks to products built on the Pimalaya stack, a group that barely exists yet. The buyers with a deadline and a budget have no door.

The integrator offer sells an open-ended commitment (your bugs first, a supported version line with backports) for one flat €5,000 per year. Backporting across a fast-moving stack is the expensive part and one active customer can consume the fee.

The deadlines were copied from the retired pimgate page. Checked on 2026-10-19 against Microsoft's message center (MC1227454 for EWS, MC786329 for SMTP AUTH): EWS is blocked by default since 1 October 2026 and shut down for good on 1 April 2027; basic auth for SMTP AUTH goes default-off at the end of December 2026, final removal date to be announced in the second half of 2027. The page's "basic auth is gone from hosted IMAP and SMTP" is wrong: SMTP AUTH was excluded from the 2022 retirement.

## What

- A third offer, for products that read or send mail: migration off EWS and basic auth to OAuth over IMAP and SMTP on the Pimalaya libraries, providers tested in CI, running on the customer's servers (no per-account fee, no third party), kept working every year, and their OAuth app verification prepared with them (the app and its audit stay theirs). From €8,000 setup, then €4,000 per year. Provider yearly price raised to €6,000 so the three prices follow the yearly workload. Note: mail only, Microsoft Graph not covered.
- Integrator offer: priority work comes from a bank of days agreed each year; the supported version line becomes a higher tier, from €12,000 per year.
- Deadlines corrected: basic auth gone from IMAP, POP and ActiveSync since 2022; EWS blocked by default from 1 October 2026; SMTP AUTH basic auth off by default at the end of December 2026; EWS shut down on 1 April 2027.
- "Two ways to partner" becomes "Three ways to partner".
