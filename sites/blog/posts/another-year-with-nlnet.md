---
title: Another year with NLnet
description: Pimalaya receives financial support for one more year, through the NGI Zero Commons Fund. Here the direction: consolidate the libs, standardise pimdir, generalise the sync, cover more domains, and ship better interfaces.
date: 2026-08-11
---

I'm happy to announce that Pimalaya receives **another year of financial support, from 2026 to 2027**, through the [NGI Zero Commons Fund](https://nlnet.nl/thema/NGI0CommonsFund.html) of the [NLnet foundation](https://nlnet.nl/), part of the Next Generation Internet initiative of the European Commission. The project page is [Pimalaya pimdir](https://nlnet.nl/project/Pimalaya-pimdir/).

It is not the first time. NGI programs have supported Pimalaya for years now, and each of those years turned into libs, CLIs and apps that anyone can read, fork and reuse under a free licence. This one comes with a theme: **a filesystem standard for PIM resources**, plus the work around it that makes such a standard worth having.

What follows is a *direction*, not a roadmap. The detailed plan still needs to be written.

## Consolidating what already exists

The least exciting part of the year, but probably *the most valuable* one.

Pimalaya is now a quite wide set of low-level Rust libs:

- Protocol clients: io-imap, io-smtp, io-jmap, io-webdav.
- Local formats: io-maildir, io-m2dir, io-vdir.
- Provider APIs: io-gmail, io-msgraph, io-gcal, io-people.
- The plumbing they all rely on: io-http, io-oauth, io-proxy, io-pim-discovery.
- The content models: vcard-rs, ical-rs.

They all share the same architecture: **I/O-free coroutines**. These are state machines that hold the whole protocol logic but never do any I/O by themselves, plus a thin reference client that serves their requests. This way the same IMAP code runs in a blocking CLI, in an async daemon, and behind a JNI transport on Android, *without rewriting anything per runtime*.

This set is already solid. What it needs now is not more surface but **more depth**: stable published APIs, real documentation on docs.rs, tests that actually mean something, fewer dependents stuck in the middle of a migration, and releases that people can pin. Consolidation is what turns a bunch of promising crates into a stack someone else can build on. And that is the whole point of building it in the open.

## pimdir, a standard for PIM on disk

This is the main deliverable. [pimdir](https://github.com/pimalaya/pimdir) is a specification of how personal information lives on a local disk: mails, contacts, events, notes, tasks, **one store, one format**.

Existing conventions solve one domain each: Maildir for mails, vdir for contacts and calendars. They are file-per-item layouts, and this shape has known limits:

- Listing a mailbox means opening thousands of files.
- Filenames carry state, so changing a flag means renaming a file.
- Case sensitivity, forbidden characters and path length differ from one filesystem to another, so a store that works on Linux does not necessarily work on Windows or Android.
- Moving several items is a series of independent renames, and a reader can catch it in the middle.

Pimdir keeps what those layouts got right (big immutable contents next to the index), and takes what every serious PIM app ends up using anyway: an indexed binary store. A store is a directory with 2 things inside:

- pimdir.db, a SQLite database holding collections, items, bindings per source and sync checkpoints.
- objects/, a content-addressed blob directory holding the item bodies, one immutable file per content hash, sharded on 2 levels.

SQLite is a deliberate choice: its file format is the same byte for byte on every OS and architecture, and it is supposed to stay stable till 2050. *You copy a store, you do not run a server.*

Few ideas do most of the work:

- A collection declares a **media type**, and the store never parses bodies. This way mails, contacts and calendars share the same tables.
- Bodies are **content-addressed**: an item filed in 2 collections is stored once, and a copy or a move is just a pointer change, not a byte copy.
- Identity is split into 4 things (the backend handle, the link id across collections, the content hash, and a short public id that clients display), instead of one identifier trying to be all of them.
- The database is a *derived* cache, it can be rebuilt from the blobs and a fresh sync.
- **One process owns it**. Readers open it read-only, and everything else appends to an action queue that the owner applies in order.
- A removal is **retention, not deletion**: when the last source drops an item, the row stays till an explicit purge. A remote expunge never destroys the local copy.

The specification is still a *draft*. It lives in the repository next to its canonical SQL schema and queries, and io-pimdir is the reference Rust implementation. Draft means it can still move, and this year is the one where it should stop moving.

## Sync, at the top of pimdir

A store format is only half of the story. The other half is keeping it in sync with a remote.

This is the job of [io-replica](https://github.com/pimalaya/io-replica), an offline-first replica engine written in the same I/O-free style:

- It reconciles local and remote changes with a **three-way merge against a stored base**, so an edit made offline survives the next sync instead of being silently overwritten.
- It deduplicates, so an item in several collections is fetched once.
- It caches partially: a collection can be known by its ids, by summaries or in full, and still tell apart "deleted" from "not fetched yet".
- Flags merge without ever conflicting. Diverging bodies are kept on both sides, for a human to decide.

The interesting consequence of putting this at the top of a generic store is that *it is not a mail feature anymore*. The engine reconciles collections of items, it does not care what an item is. Sync, backup, mirroring and one-shot migration between 2 backends become **the same machinery with different policies**, and [Neverest](https://github.com/pimalaya/neverest) is the CLI that exposes them.

## More domains

The stack was built for mails first, and **mails are in good shape**: IMAP, SMTP, JMAP, Maildir and the provider APIs, driven by [Himalaya](https://github.com/pimalaya/himalaya) and its TUI.

Contacts followed and are not far behind: [Cardamum](https://github.com/pimalaya/cardamum) speaks CardDAV, vdir, Google and Microsoft, at the top of vcard-rs. This lib holds a vCard model that does not depend on the version, a syntax tree faithful to the byte, and the jCard and JSContact conversions.

**Calendars are what I am working on right now.** [Calendula](https://github.com/pimalaya/calendula) is taking shape over CalDAV and local vdir, at the top of ical-rs, the iCalendar twin of the vCard lib, with JSCalendar and three-way merge included.

Tasks could be the next one, and for cheap: a to-do is a VTODO, which the iCalendar model already parses, and a task list is a collection of a media type the store already accepts. That is the whole point of doing the generic work first: adding a domain should be **a connector and a media type, not another silo**.

## Higher interfaces

Users see none of the above. They see interfaces, and this is where the layering finally pays off.

The terminal is well covered: a CLI, a TUI, editor plugins. What is missing is everything else. There is a native GTK4 and libAdwaita desktop app for Linux, and Android apps for mails, contacts and calendars merging into one client. Both are being replanned on io-replica and io-pimdir, which is exactly the shape I want: an interface should be **a view over the local store**, fast and useful without any network, with the sync running *behind* it, not in front of it.

An offline-first store is what makes a mobile client bearable and a desktop client pleasant. That is why the plumbing comes first this year.

## To summarize

**One store format, one sync engine, more domains behind them, and interfaces that are finally just views.** This is where the coming year points to.

It is a direction, *not a plan*: the specification is a draft, priorities will move when the work meets reality, and the detailed roadmap still needs to be defined. What is sure is that everything lands in the open, under free licences, as it always did.

Special thanks to NLnet and to the NGI programs for making this slow, invisible but essential part possible. Feel free to follow along here, or on [Matrix](https://matrix.to/#/#pimalaya:matrix.org) and [Mastodon](https://fosstodon.org/@pimalaya)!

## Update (2026-11-26)

Few things changed since this post:

- **pimdir is not a draft anymore.** Storage, sync and search reached their `v1` together on the 26th of November, with io-pimdir `v1.0.0` as the Rust implementation. See [Pimalaya goes stable](https://blog.pimalaya.org/pimalaya-goes-stable/).
- **io-replica was folded into io-pimdir** on the 3rd of September: the sync engine is now the core of io-pimdir, and the io-replica repository is archived.
- **io-m2dir was dropped**: pimdir supersedes m2dir, and the repository is archived. Himalaya `v3` removed its m2dir backend as well.
- **io-people is now [io-gpeople](https://github.com/pimalaya/io-gpeople)**, following the vendor naming of io-gmail and io-gcal.
- **Calendula reached its `v1`**, with JMAP, Google Calendar and Microsoft Graph backends on top of CalDAV, vdir and pimdir.
- **The Android apps merged into one client**, now in closed alpha, see [Pimalaya for Android enters closed alpha](https://blog.pimalaya.org/pimalaya-android-closed-alpha/).
