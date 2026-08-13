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
- [x] Reframe the copy from the maintainer's situation to the funding model: headline, lead, the time paragraph, the grant credit, the head metadata
- [x] State what is funded as figures (repositories, apps, libraries, domains) instead of naming apps, and rename the non-money section to "Other ways to contribute"
- [x] Drop the grant funding note from the website footer, making the shared Footer's bottomNote optional
- [x] Replace the home page's four donation links with a single "Sponsor Pimalaya" call to action to `/sponsor/`
- [ ] Find a usable thanks.dev mark, or drop the row and leave it to FUNDING.yml
- [ ] Point FUNDING.yml's `custom` entry at https://pimalaya.org/sponsor/
- [ ] Fold the delta into spec/www-site.md and write the log entry
