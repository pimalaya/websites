---
cairn: tasks
change: www-sponsor-page
---

# Tasks

- [x] Add the Platform and Funder types, the routes and the grant marks to src/lib/sponsors.ts
- [x] Add SponsorPage and SponsorPage.css: the position, the grant credit, the routes, the non-money ask
- [x] Add the funding brand marks to the shared Icon set and the sponsor heart button to Nav
- [x] Route `/sponsor/` in App.tsx, pass sponsorHref, add the footer link
- [x] Register the page in renderPages() in entry-server.tsx
- [x] Branch the prerender JSON-LD per slug and give the sponsor page a WebPage plus breadcrumb
- [x] Verify: every site still builds (www, blog, pimgate) after the shared Nav and Icon changes
- [ ] Find a usable thanks.dev mark, or drop the row and leave it to FUNDING.yml
- [ ] Point FUNDING.yml's `custom` entry at https://pimalaya.org/sponsor/
- [ ] Fold the delta into spec/www-site.md and write the log entry
