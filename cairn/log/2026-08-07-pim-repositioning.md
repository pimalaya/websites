---
cairn: log
change: pim-repositioning
landed: 2026-08-07
---

# Reposition Pimgate as a PIM gateway and shrink the root README

The Pimgate one-pager now sells a PIM gateway, not a mail gateway: the hero leads with mail, contacts and calendars served from offline-first local replicas in one open format over standard protocols, with an honest status line directly under the lead (mail over IMAP and SMTP available today, CardDAV and CalDAV on the roadmap). The head metadata (title, description, keywords, Open Graph, social alt) and the footer tagline moved to the same wording, the deadline section is framed as the first wave (the mail deadlines are why the mail frontends shipped first), the how-it-works cards speak in item-and-collection terms while keeping concrete mail examples, the exit-path line became "one open format for all your PIM data", and the offers and trust sections lost their mail-only phrasing (data instead of mail transiting, credential-less frontends plural). Nothing is overclaimed: no DAV feature is presented as available.

The root README shrank from 135 to 86 lines: the layout tree, the migration narrative, the www-naming rationale (now a one-line caption under the sites table) and the long blog-post and newsletter how-tos went away in favour of the sites table, a minimal Installation and Usage (build aliases plus the newsletter alias, one line each) and a three-sentence Deployment section pointing at the workflow comments. The tail blocks (AI disclosure, License, Social, Contributing, Sponsoring) are untouched. The workspace spec needed no fold: it references the README only for the cutover documentation, which remains.

Capabilities moved: **pimgate-site** (intro, Section order, new Honest scope, Head and structured data).
