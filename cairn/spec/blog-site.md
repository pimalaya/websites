---
cairn: spec
capability: blog-site
status: current
---

# Blog site

The Pimalaya blog at sites/blog, served at blog.pimalaya.org: the project journal, migrated unchanged from the standalone blog repository. The blog is the canonical news source; the RSS feed and the Buttondown newsletter are read-only views on it.

### Requirement: Posts pipeline
Articles SHALL be plain markdown files in posts/, named after their URL slug, with a flat frontmatter block carrying `title`, `description` and `date` (YYYY-MM-DD; `draft: true` keeps a post out of the build). The build SHALL fail on a missing or malformed frontmatter key. Posts SHALL render to HTML at build time with marked (GFM) and highlight.js (build-time syntax colours only), via src/lib/posts.ts.

### Requirement: Pages
The site SHALL ship the post index at `/` and one prerendered JavaScript-free page per post at `/<slug>/`, plus feed.xml, sitemap.xml (with per-article lastmod, the index inheriting the newest post date) and robots.txt. It SHALL reuse the shared chrome parameterized with the blog's links: nav (Pimalaya wordmark with the `blog` tag, links to pimalaya.org, Matrix and Mastodon, a GitHub glyph to the organisation, a Subscribe call to action to Buttondown) and the dark footer (Follow, Pimalaya and Community columns, the "The logbook of the Pimalaya project" tagline, the "Part of Pimalaya" note).

### Requirement: Feed
src/lib/feed.ts SHALL build the RSS 2.0 feed with full article content, from the post data only (never the build clock), shared by prerender (written to dist/feed.xml) and the dev server (served live at /feed.xml by the vite plugin).

### Requirement: Newsletter
The newsletter SHALL stay manual with no CI step: scripts/newsletter.js (`npm run newsletter -- <slug>`) prints the subject (the post title) and a paste-ready markdown body (frontmatter stripped, root-relative links absolutized, canonical link appended) for a new Buttondown email.

### Requirement: Head and structured data
The pages SHALL carry the title, meta description, canonical https://blog.pimalaya.org/, Open Graph tags with the social card (og:type `article` on posts), the article:published_time meta on posts, and JSON-LD injected at prerender time (a Blog object on the index, a BlogPosting per article), all unchanged from the standalone repository.

### Requirement: Site-local pieces
IndexPage, PostPage, Subscribe, the posts and feed libraries and the newsletter script SHALL stay in the site; the theme, chrome, Button, Icon, Logo, Container and prerender machinery SHALL come from `@pimalaya/shared`.
