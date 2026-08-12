---
cairn: change
id: www-community-apps
status: landed
created: 2026-08-12
---

# Lead the ecosystem page with the libraries, and credit the community

## Why

The ecosystem page currently opens on the apps and puts the libraries second, which reads the organisation backwards: the apps are thin frontends over the I/O-free crates, and the crates are what makes Pimalaya reusable outside the organisation. Leading with the libraries states the actual architecture instead of the shopping list.

The page is also incomplete in a way that costs the project goodwill. Several people have built real front-ends on top of Himalaya and on top of the crates (an Emacs plugin on MELPA, a Neovim plugin, a Raycast extension, a desktop client, a window-manager integration, an agent skill), and none of them appear on the website. The Himalaya README already links most of them, so the site is behind its own repository.

Finally, the home page's "Installable today" section ends on the last app card with no way out: the only pointer to the ecosystem page is a sentence in the section lead and a button further down, in the developer section.

## What

Reorder the ecosystem page so the libraries come first, then the apps, then a new "From the community" section, then the frozen and retired crates, then the experiments. Add a second, separate catalogue of community projects in src/lib/products.ts, with its own shape: these are third-party repositories, so they carry a full URL and an author instead of a repository slug under the organisation, and no hand-curated status (the site does not get to grade other people's work). Render them in their own table, with an Author column in place of Domain and Status.

Add a call to action at the end of the home page's "Installable today" section, a primary button to /ecosystem/.

The prerender JSON-LD ItemList stays restricted to the organisation's own repositories: it describes what Pimalaya publishes, and the community table is credit, not catalogue.
