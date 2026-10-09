---
cairn: delta
change: www-dedicated-test-accounts
---

## ADDED Requirements

### Requirement: Sponsorship pays for dedicated test accounts
The sponsoring page SHALL state, among what sponsorship funds, the dedicated accounts at Microsoft and Google on which every release is tested against the real services without touching anyone's data, without figures. It SHALL NOT be published before those accounts exist and the live tests run on them.

## MODIFIED Requirements

### Requirement: Business page
The business page SHALL open on cards for the two offers and the planned sign-in, then be pain-first: why pay for free software (provider quirks, OAuth verification and its yearly audit, protocol deadlines, maintenance over creation), what the project brings (libraries tested against the providers people use, on accounts kept for testing alone), the two offers (email providers, integrators) each with a one-line definition of who it is for, the buyer's problem, the benefits and a starting yearly price (optionally followed by a note such as large providers being on quote), what a partnership does not buy (ranking, exclusivity, gated features, endorsement beyond the integration point, round-the-clock support), the current partners listed honestly including when there are none, and a contact. Offers, prices, pains and partners SHALL come from src/lib/offers.ts, where prices stay placeholders until decided; the site SHALL NOT be published with placeholder prices.

## REMOVED Requirements
