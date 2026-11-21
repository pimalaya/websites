---
cairn: spec
capability: pkg-site
status: current
---

# Packages site

The install page of pkg.pimalaya.org at sites/pkg: how to add the signed APT and DNF repositories and the Homebrew tap of the Pimalaya CLIs. The rest of pkg.pimalaya.org (the repositories, the public key, the manifest) belongs to the hub of pimalaya/packages, which builds this page on every run and deploys the whole site.

### Requirement: One page with placeholders
The site SHALL ship one prerendered JavaScript-free page at `/`, plus sitemap.xml and robots.txt. The parts only known when the hub runs SHALL stay as placeholders, each a whole text node: `@CLIS@` inside `ul.pkg-tools` (the hub writes one `li` per CLI holding `a.pkg-tool__name`, `span.pkg-tool__version` and `span.pkg-tool__description`, which the site styles), `@APT@`, `@DNF@` and `@BREW@` inside the code blocks of the APT, DNF and Homebrew sections, and `@FINGERPRINT@` in the signing key section. Adding, renaming or removing a placeholder SHALL go with the matching change to the hub's linux-build, which stops on an unknown one. The dev server shows the placeholders as is.

### Requirement: Chrome and content
The page SHALL reuse the shared chrome: nav (Pimalaya wordmark with the `packages` tag, external links to pimalaya.org and blog.pimalaya.org, a GitHub glyph to pimalaya/packages, the Sponsor button) and the dark footer (Install, Pimalaya and Community columns, the "Signed packages of the Pimalaya command-line tools" tagline, a "Built from the releases by pimalaya/packages" note). The content SHALL be a masthead, the tools list, one section per channel (anchors `#apt`, `#dnf`, `#homebrew`) with its commands on the dark code surface of the blog, and the signing key section (`#key`) linking `/pimalaya.asc`, in a column of 820px at most.

### Requirement: Head
The page SHALL carry the title "Pimalaya packages | APT, DNF and Homebrew", the meta description, the canonical https://pkg.pimalaya.org/ and Open Graph tags without a social card; no JSON-LD.

### Requirement: Deployment
The site SHALL be deployed only by the Hub workflow of pimalaya/packages, which checks out this repository's master and runs `npm run build:pkg` on every run; a change to the built page SHALL reach pkg.pimalaya.org on the hub's next run.
