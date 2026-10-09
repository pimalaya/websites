---
cairn: delta
change: www-design-refresh
---

# Delta

## ADDED Requirements

- workspace: Accessible theme. Every text pair of the theme SHALL reach a contrast of 4.5:1 or more, in a light palette and a prefers-color-scheme dark palette. Interactive targets SHALL be at least 44px high. The display face SHALL be Source Serif 4, self-hosted under shared/src/fonts with its OFL 1.1 license, the system serif stack kept as fallback; no site SHALL load fonts from a third party.

## MODIFIED Requirements

- workspace: Shared layer. The theme stays structurally identical across properties (same logo gradient, rosy paper, plum ink, magenta accent), now with a dark counterpart. Nav links carry an optional sub-label, and external links are marked.

- www-site: Six pages. The nav SHALL link to the tools anchor of the home page, the ecosystem page, the business page, the community page and the blog (marked external), one line each, with the sponsor heart button and the GitHub glyph.

- www-site: Two audiences on the home page. The home page SHALL present a hero (install Himalaya, browse the tools) beside the Himalaya terminal with a facts strip, the tools as a list grouped by domain with a link to the ecosystem page and the sign-in page, the developers side (libraries) beside the business side (offers read from src/lib/offers.ts, call to action to `/business/`), one band for the community and the newsletter, then the gratitude. It SHALL make no third-party request.

- www-site: Site-local pieces. Subscribe SHALL export SubscribeForm for reuse in other bands. The inner pages SHALL share the page vocabulary of Page.css and keep only their own layout in a page stylesheet.

- www-site: Business page. The page SHALL open on its headline beside rows for the two offers and the planned sign-in, instead of cards.

- blog-site: Pages. The nav links SHALL fit one line each and be marked external. The index SHALL feature the newest post as "Start here" and list the others as dated rows; every post SHALL show its date and reading time and end on links to the older and newer posts.

- workspace: Migrated sites. The identical-output rule held for the migration only; the sites have since been redesigned.

## REMOVED Requirements

None.
