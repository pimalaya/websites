---
cairn: change
id: www-catalogue-rescope
status: landed
created: 2026-08-12
---

# Rescope three catalogue rows: io-pim-discovery, the Android app, the Linux app

## Why

Three rows of the www catalogue no longer match what the repositories are.

io-pim-discovery sits under Apps as a "CLI + library". It is the reverse: a library first, whose command-line interface is an off-by-default cargo feature, exactly like mml. Listing it as an app hides the crate from the people who would depend on it.

cardamum-android was named and scoped as the Android side of Cardamum, a contacts app. The mobile strategy reversed: there is one unified Android app at pimalaya/android covering mail, contacts and calendars over a single store and a single account list, not one app per domain. The row still advertises the abandoned shape.

pimalaya-linux is missing from the catalogue entirely. The ecosystem page mentions it in the experiments prose as "GTK4 + libadwaita", an unnamed thing with no repository link, so a reader cannot find it.

## What

Move io-pim-discovery from the apps catalogue to the libraries catalogue, with kind "Library + CLI" and a description that says the CLI is an off-by-default cargo feature. It keeps its `home` flag, because it remains a command anyone can install today, so the home page grid now draws from both catalogues instead of the apps alone.

Replace the cardamum-android row with pimalaya-android (repository pimalaya/android), domain "Email + Contacts + Calendar", with a description that states the honest split: contacts are the mature domain, mail and calendar are read-only for now.

Add pimalaya-linux (repository pimalaya/linux), domain "Email + Contacts", kind "Desktop app", in development.

Rewrite the two experiment paragraphs to match: the Android paragraph gains the one-app-for-three-domains point it now validates, and the GTK4 paragraph becomes a named pimalaya-linux paragraph stating that only the application shell exists so far.
