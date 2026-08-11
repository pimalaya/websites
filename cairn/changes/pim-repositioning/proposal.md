---
cairn: change
id: pim-repositioning
status: landed
created: 2026-08-07
---

# Reposition Pimgate as a PIM gateway and shrink the root README

## Why
The maintainer flagged the Pimgate one-pager as too tied to mail: it should not be advertised as a mail gateway but as a PIM gateway. The product truth backs this: pimgate serves pimdir stores, and pimdir is generic across personal-information kinds (mail messages, contacts, calendar events; the store is keyed by media type). Mail over IMAP and SMTP is what ships today; CardDAV and CalDAV frontends are the planned next wave. Separately, the root README grew too verbose during the migration and needed to shrink to roughly half its length.

## What
Rework the Pimgate site copy around the PIM gateway positioning without overclaiming: a PIM-gateway hero with an honest status line (mail available today, CardDAV and CalDAV on the roadmap), PIM-gateway title, meta description, keywords and Open Graph wording, the deadline section framed as the first wave (the mail deadlines are why the mail frontends shipped first), how-it-works cards worded in item-and-collection terms with concrete mail examples, "one open format for all your PIM data" as the exit-path line, and a sweep of mail-only phrasing in the offers and trust sections plus the footer tagline. Shrink the root README to the header, one description sentence, the sites table (with the `www` naming note as its caption), a minimal Installation and Usage (the build aliases plus the newsletter alias), a three-sentence Deployment section pointing at the workflow comments, and the mandatory byte-identical tail blocks.
