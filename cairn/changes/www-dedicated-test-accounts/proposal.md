---
cairn: change
id: www-dedicated-test-accounts
status: landed
created: 2026-10-01
---

# Dedicated test accounts, as an argument

## Why

Testing Pimalaya end to end against Microsoft 365 and Google means accounts kept for testing alone: an app-only Microsoft 365 mailbox, a Google Workspace user or service account. They cost money, little of it, and that is exactly why the figure is not the point. What the accounts buy is the argument: every release is tested against the real services, end to end, without ever touching anyone's data. It belongs on the sponsoring page first, as something sponsorship pays for, and on the business page second, as weight behind "the quirks are already found".

## What

No figures, no provider price list: the argument only.

**Sponsoring page** (src/components/SponsorPage.tsx, "What you are funding"), a paragraph after the one on time:

> Sponsorship also pays for dedicated accounts at Microsoft and Google, so every release is tested against the real services, end to end, without ever touching anyone's data.

**Business page** (src/components/BusinessPage.tsx, "The quirks are already found"), the lead's first sentence gains a clause:

> Since 2022, {LIB_COUNT} libraries written from the RFCs up (IMAP, SMTP, JMAP, CardDAV, CalDAV, OAuth) and tested against the providers people use, on accounts kept for testing alone.

**Gate.** The claim is true only once the accounts exist and the live tests run on them (neverest and the io-* live suites). The copy SHALL NOT be published before that: this change is written ahead and implemented when the accounts are live.
