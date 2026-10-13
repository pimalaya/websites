---
cairn: change
id: www-state-2026-10
status: landed
created: 2026-10-13
---

# Bring www to the state of Pimalaya as of 2026-10-13

## Why

The catalogue was last grounded on 2026-09-29. Since then the 2026-10-02 release wave made sync, contacts and calendars multi-domain and multi-backend, two libraries were published without joining the catalogue, the Android app entered closed alpha, and the paid one-step sign-in plan was abandoned on 2026-10-06 (OAuth is free, with client IDs shipped on device).

## What

Catalogue rows, grounded against GitHub and crates.io on 2026-10-13:

- neverest: domain Email to Email + Contacts + Calendar; syncs mail, contacts and calendars through a local pimdir store (0.3.0).
- calendula: CalDAV, Google Calendar, vdir and pimdir backends (0.2.0).
- cardamum: vdir joins CardDAV, JMAP, Google and Microsoft (0.3.0).
- himalaya: mbox, m2dir and ManageSieve join the listed backends (2.2.1).
- io-msgraph: calendars join mail and contacts; domain Email + Contacts + Calendar.
- io-pim-discovery: JMAP joins the discovered services.
- io-pimdir: kind Library + CLI (the `pimdir` operator binary behind the `cli` feature).
- New libraries: io-mbox (0.1.0), io-vdir (0.2.0).
- pimalaya-android: closed alpha copy (already applied); its experiments panel links the closed-alpha blog post.

Copy depending on the maintainer's decisions: the roadmap section, the sign-in page and the home note pointing at it, and whether the pimdir specification gets a row (it does; limier stays out).
