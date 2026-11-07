---
cairn: delta
change: www-privacy-terms
---

# Delta

## ADDED Requirements

### Requirement: Privacy policy and terms of use
The site SHALL carry the privacy policy at `/privacy/` and the terms of use at `/terms/` of every Pimalaya app that connects to people's accounts, the consent screen's links with the home page; content/privacy.md and content/terms.md, written here, rendered at build time; linked from every page's footer.

## MODIFIED Requirements

### Requirement: Seven pages
Renamed Nine pages: `/privacy/` and `/terms/` join the seven, and the footer's bottom line links them.

### Requirement: Android app pages
The app page links the terms of use at `/terms/`. The Limited Use rationale ("which Google wants outside the privacy policy too") goes: Google accepts the statement in a privacy policy linked from the home page.

### Requirement: Site-local pieces
The page components listed gain AndroidPage and PolicyPage, the latter serving the three legal pages.

### Requirement: Head and structured data
The privacy and terms pages carry a WebPage plus a breadcrumb.

## REMOVED Requirements
