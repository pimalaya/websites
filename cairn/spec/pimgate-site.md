---
cairn: spec
capability: pimgate-site
status: current
---

# Pimgate site

The Pimgate one-pager at sites/pimgate, served at pimgate.pimalaya.org: a single prerendered page selling operation around the open-source Pimalaya PIM gateway. The voice is plain, signal-dense and honest: no marketing fluff, no exclamation marks, English only.

### Requirement: One page
The site SHALL ship exactly one page at `/`, prerendered JavaScript-free, plus sitemap.xml and robots.txt. It SHALL reuse the shared chrome: nav (Pimalaya wordmark with the `pimgate` tag, links to pimalaya.org, the blog, Matrix and Mastodon, a GitHub glyph to the pimgate repository, a "Get it operated" call to action anchoring to the offers) and the dark footer (Pimalaya links, source links including this websites repository, Matrix, Mastodon, contact).

### Requirement: Section order
The page SHALL present, in order: the hero (Pimgate is the PIM gateway: mail, contacts and calendars served from offline-first local replicas in one open format, over the standard protocols clients and devices already speak; an honest status line directly under the lead stating that mail over IMAP and SMTP is available today and that contacts and calendars over CardDAV and CalDAV are on the roadmap; calls to action to the GitHub repository and to the offers anchor); the deadline section framed as the first wave (EWS retirement starting 2026-10-01 phased through April 2027, SMTP AUTH basic default-off end of December 2026, basic auth already dead for hosted IMAP and SMTP, the devices that cannot be modified to do OAuth, and the line that these mail deadlines are why the mail frontends shipped first); how it works as three cards worded in item-and-collection terms with concrete mail examples (local replica via neverest into a pimdir store, mailboxes today and address books and calendars next; standard credential-less frontends, IMAP and SMTP today and CardDAV and CalDAV next; durable queue for outgoing items) closed by the exit-path line (one open format for all your PIM data, leave anytime); the open-source section (dual MIT or Apache-2.0, every component linked, reproducible Nix builds, the OCI image from the flake, build it yourself and compare); the offers; and the trust section (the security posture in five bullets: credential-less frontends, your tenant and your scopes, offline-first degradation, open code and format end to end, shipped security artifacts).

### Requirement: Honest scope
The page SHALL market Pimgate as a PIM gateway while stating plainly that only the mail frontends (IMAP and SMTP) ship today and that CardDAV and CalDAV are roadmap items. No section SHALL present contact or calendar serving as available, and no invented feature or fake screenshot SHALL appear.

### Requirement: Offers without a hosted tier
The offers SHALL be exactly two cards and no hosted tier: Self-operated (free forever, full protocol features, community support, plus an optional yearly support and updates subscription for companies: invoice, security advisories, blessed update channel) and Operated on your infra (installation, maintenance and support on the customer's VPS or hardware, monthly, standard configuration, business-hours SLA, GDPR data-processing agreement, EU-based operator). Both calls to action SHALL be Contact mailto links to pimalaya.org@posteo.net with an offer-specific subject.

### Requirement: Placeholder pricing
Prices SHALL NOT be invented. Both price values SHALL come from the single constants file src/lib/pricing.ts, whose values stay clearly-placeholder (`XXX`) with `TODO` comments until the maintainer fills real numbers before deploy.

### Requirement: Head and structured data
The page SHALL carry its own title, meta description, keywords, canonical https://pimgate.pimalaya.org/, Open Graph tags with the social card, and JSON-LD injected at prerender time (the Pimalaya Organization, the WebSite, and Pimgate as a SoftwareApplication), all worded around the PIM gateway positioning (title, description and social alt text SHALL NOT present Pimgate as a mail gateway). The favicon and social card SHALL reuse the official Pimalaya logo assets until a Pimgate-specific asset exists.
