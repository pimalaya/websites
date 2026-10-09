---
cairn: log
change: www-design-refresh
landed: 2026-10-09
---

# Refresh the design: contrast, dark mode, webfont, home layout

Applied a patch proposed by Claude Design. The shared theme darkened the faint ink (#7d6272) and the green (#2f6a45), gained on-accent, wash, tint, nav, logo plate and target tokens, and a prefers-color-scheme dark palette, every text pair at 4.5:1 or more. Source Serif 4 (OFL 1.1, Latin subset, normal and italic) is self-hosted as the display face. Buttons tint from the palette and reach 44/48px; nav sub-labels became optional and external links carry an icon; footer columns fit their count; the Icon set gained chat and article. The blog inherits all of it.

On pimalaya.org the nav became Tools, Ecosystem, Business, Community, Blog. The home page sets the hero beside the Himalaya terminal over a facts strip, lists the tools grouped by domain, puts developers and business side by side, merges community and newsletter into one band and closes on gratitude. The hero's business button moved into the business side. The shields.io badge, the only third-party request, is gone; the subscribe form is extracted as SubscribeForm.

Capabilities moved: **workspace** (Shared layer, Accessible theme), **www-site** (Six pages, Two audiences on the home page, Site-local pieces).
