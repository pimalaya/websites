---
cairn: change
id: www-design-refresh
status: landed
created: 2026-10-09
---

# Refresh the design: contrast, dark mode, webfont, every page

## Why

Several text pairs fell under 4.5:1 (faint ink, green), there was no dark palette, the display face depended on whatever serif the system had, and the home page read as a stack of unrelated bands. The shields.io badge was the only third-party request of the site.

## What

Shared layer: darker faint ink and green, new tokens (on-accent, tints, nav background, logo plate, target size), a prefers-color-scheme dark palette with every text pair at 4.5:1 or more, self-hosted Source Serif 4 (OFL 1.1, Latin subset) as display face, 44/48px button heights, optional nav sub-labels with external links marked, footer columns fitting their count.

pimalaya.org: nav becomes Tools, Ecosystem, Business, Community, Blog on one line each. The home page puts the hero beside the Himalaya terminal with a facts strip, lists the tools grouped by domain, sets developers and business side by side, merges community and newsletter into one band and closes on gratitude. The shields.io badge goes. The subscribe form is extracted as SubscribeForm.

Inner pages: Page.css becomes a shared page vocabulary (header with aside and anchors, facts strip, sections, panels, row lists, points, timeline, roadmap steps, price) and every inner page (ecosystem, business, sign-in, community, sponsor) is rebuilt on it.

Blog: one-line nav, the newest post featured as "Start here" beside the masthead, dated rows with reading time, older and newer links at the end of a post, the same split subscribe band as pimalaya.org.

Proposed by Claude Design as two patches, applied as is except for one merge: the business page keeps "on accounts kept for testing alone" from www-dedicated-test-accounts.
