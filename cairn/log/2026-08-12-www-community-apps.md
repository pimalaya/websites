---
cairn: log
change: www-community-apps
landed: 2026-08-12
---

# Lead the ecosystem page with the libraries, and credit the community

The ecosystem page now runs roadmap, libraries, apps, from the community, frozen and retired, experiments. Putting the libraries above the apps states the architecture the right way round, and the libraries lead was reworded to say it out loud ("the foundation: every app is a thin frontend over these Rust crates") instead of describing the crates as something the apps happen to be built on.

The new "From the community" section credits eight third-party projects: himalaya-emacs (dantecatalfamo), mailbrus (antono, the one built on io-email and io-maildir rather than on the CLI), two independent himalaya.nvim plugins (knownasnaffy and JostBrand), himalaya-wrap (robertmeta, the Emacspeak front-end), the Raycast extension (jns), dfzf (parisni) and the OpenClaw skill. Most were already linked from the Himalaya README, so the site had been behind its own repository; mountaineer.nvim was left out because it is archived. They live in a separate `community` catalogue with a `CommunityProject` shape, carrying a full URL and an author instead of a repository slug under the organisation, and deliberately no status: grading other people's projects is not ours to do. The table swaps the Domain and Status columns for a single Author column, and the section lead says plainly that none of them are maintained by the organisation and points at the websites repository for additions. The prerender ItemList was left alone: it describes what Pimalaya publishes, and the community table is credit, not catalogue.

The home page's "Installable today" section ended on the last app card with no way out; it now closes on a large primary button to /ecosystem/. The secondary "Browse the ecosystem" button in the developer section below was kept, so that link now appears twice on the page, once per audience.

Capabilities moved: **www-site** (Products catalogue, new Community catalogue).
