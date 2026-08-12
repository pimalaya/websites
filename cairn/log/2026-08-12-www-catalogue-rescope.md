---
cairn: log
change: www-catalogue-rescope
landed: 2026-08-12
---

# Rescope three catalogue rows: io-pim-discovery, the Android app, the Linux app

io-pim-discovery moved from the apps catalogue to the libraries catalogue, kind "CLI + library" becoming "Library + CLI" to say which way round it is, with the description now stating that the command-line interface ships as an off-by-default cargo feature. It kept its `home` flag, so the home page grid stopped filtering the apps alone and now filters both catalogues: a library with a CLI feature is still something a reader can install today, and dropping it from the grid to gain a correct table row would have been a bad trade. It renders under Plumbing on the home page and in the libraries table on the ecosystem page.

cardamum-android became pimalaya-android, pointing at pimalaya/android rather than the abandoned per-domain repository, with domain "Email + Contacts + Calendar" and a description carrying the honest split straight from the repository README: contacts are the mature domain, mail and calendar are read-only for now. pimalaya-linux joined the apps as a new row (pimalaya/linux, mail and contacts, desktop app, in development), having existed on the page only as an unnamed "GTK4 + libadwaita" mention in the experiments prose with no link to follow.

Both experiment paragraphs were rewritten around the new names. The Android one gained the second thing that experiment validates, that the three domains belong in one app rather than three, which is the reversal that renamed it. The Linux one is now named, says it shares its configuration file with the command-line tools, and admits that only the application shell exists so far.

The prerender ItemList needed no change: it keys its schema.org type on `kind === 'Library'`, and both the old and the new io-pim-discovery kinds fall on the SoftwareApplication side.

Capabilities moved: **www-site** (Products catalogue).
