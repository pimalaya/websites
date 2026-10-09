---
cairn: log
change: www-design-refresh
landed: 2026-10-09
---

# Refresh the design: contrast, dark mode, webfont, every page

Applied a patch proposed by Claude Design. The shared theme darkened the faint ink (#7d6272) and the green (#2f6a45), gained on-accent, wash, tint, nav, logo plate and target tokens, and a prefers-color-scheme dark palette, every text pair at 4.5:1 or more. Source Serif 4 (OFL 1.1, Latin subset, normal and italic) is self-hosted as the display face. Buttons tint from the palette and reach 44/48px; nav sub-labels became optional and external links carry an icon; footer columns fit their count; the Icon set gained chat and article. The blog inherits all of it.

On pimalaya.org the nav became Tools, Ecosystem, Business, Community, Blog. The home page sets the hero beside the Himalaya terminal over a facts strip, lists the tools grouped by domain, puts developers and business side by side, merges community and newsletter into one band and closes on gratitude. The hero's business button moved into the business side. The shields.io badge, the only third-party request, is gone; the subscribe form is extracted as SubscribeForm.

A second Claude Design patch rebuilt the inner pages and the blog. Page.css became the page vocabulary every inner page draws on: header with an optional aside and anchors, facts strip, sections, panels (raised, dark, accent), row lists, points, timeline, roadmap steps and price; the business and community pages gained their own stylesheets for what is left. The ecosystem page puts facts and anchors in its header, the roadmap as a four-step track, tables in raised boxes with counts. The business page sets the offers and the planned sign-in as rows beside its headline, the offers as two priced panels, the limits as points and a dark closing panel; its "what we bring" panel keeps the "accounts kept for testing alone" wording, the one conflict with www-dedicated-test-accounts. The sign-in page puts price and call to commit beside the problem. Community shows the four ways in as panels of link rows; sponsor features GitHub Sponsors beside the headline, the other routes as icon rows and the figures as a facts strip. Both Subscribe bands split copy left and form right.

The blog nav became Website, Matrix, Mastodon. The index features the newest post as "Start here" beside the masthead, the others as dated rows with reading time (readingMinutes() in src/lib/posts.ts); posts show date and reading time and end on older and newer links. The shared nav tightened on phones so the blog's tagged wordmark, heart and Subscribe fit at 360px, and the Icon set gained code.

Capabilities moved: **workspace** (Shared layer, Accessible theme, Migrated sites), **www-site** (Six pages, Two audiences on the home page, Business page, Site-local pieces), **blog-site** (Pages).
