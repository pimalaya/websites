---
title: Another year with NLnet
description: Pimalaya is funded for one more year through the NGI Zero Commons Fund. Here is the direction: consolidate the libraries, standardise pimdir, generalise sync, cover more domains, and ship better interfaces.
date: 2026-08-11
---

Pimalaya gets **another year of support, from 2026 to 2027**, through the [NGI Zero Commons Fund](https://nlnet.nl/thema/NGI0CommonsFund.html) of the [NLnet foundation](https://nlnet.nl/), part of the European Commission's Next Generation Internet initiative. The entry is [Pimalaya pimdir](https://nlnet.nl/project/Pimalaya-pimdir/).

This is not the first time. Pimalaya has been sustained by NGI programs for years, and every one of those years turned into libraries, CLIs and apps that anyone can read, fork and reuse under a free licence. This one comes with a theme: **a filesystem standard for PIM resources**, and the work around the rest of the stack that makes such a standard worth having.

What follows is a *direction*, not a roadmap. The detailed plan is yet to be written.

## Consolidating what already exists

The least glamorous part of the year, and probably *the most valuable*.

Pimalaya is by now a fairly wide set of low-level Rust libraries: protocol clients (io-imap, io-smtp, io-jmap, io-webdav), local formats (io-maildir, io-m2dir, io-vdir), provider APIs (io-gmail, io-msgraph, io-gcal, io-people), the plumbing they all sit on (io-http, io-oauth, io-proxy, io-pim-discovery), and the content models (vcard-rs, ical-rs).

They share one architecture: **I/O-free coroutines**, state machines that hold the whole protocol logic and perform no I/O themselves, plus a thin reference client that services their requests. It is what lets the same IMAP code run in a blocking CLI, in an async daemon, and behind a JNI transport on Android *without a rewrite per runtime*.

That set is already solid. What it needs now is not more surface but **more depth**: stable published APIs, real documentation on docs.rs, test coverage that means something, fewer half-migrated dependents, and releases that consumers can actually pin. Consolidation is what turns a pile of promising crates into a stack somebody else can build on, and that is the point of building it in the open in the first place.

## pimdir, a standard for PIM on disk

The named deliverable. [pimdir](https://github.com/pimalaya/pimdir) is a specification for how personal information lives on a local disk: mail, contacts, events, notes, tasks, **one store, one format**.

The existing conventions each solve one domain: Maildir for mail, vdir for contacts and calendars. They are file-per-item layouts, and that shape has known limits. Listing a mailbox means opening thousands of files. Filenames carry state, so a flag change is a rename. Case sensitivity, forbidden characters and path length limits differ per filesystem, so a store that works on Linux is not automatically a store that works on Windows or on Android. And a multi-item move is a sequence of independent renames that a concurrent reader can catch halfway through.

Pimdir keeps the part those layouts got right, the large immutable content beside the index, and takes the part every serious PIM application already reaches for, an indexed binary store. A store is a directory with two things:

- pimdir.db, a SQLite database holding collections, items, per-source bindings and sync checkpoints,
- objects/, a content-addressed blob directory holding the item bodies, one immutable file per content hash, sharded two levels deep.

SQLite is a deliberate choice: its file format is byte-identical across every OS and architecture, with a stability commitment through 2050. *You copy a store, you do not run a server.*

A few ideas do most of the work. A collection declares a **media type** and the store never parses the bodies, so mail, contacts and calendars are the same tables. Bodies are **content-addressed**, so an item filed in two collections is stored once and a copy or a move is a pointer edit rather than a byte copy. Identity is split into four distinct things (the backend handle, the cross-collection link id, the content hash, and a short public id that clients display) instead of one identifier asked to be all of them. The database is a *derived* cache, rebuildable from the blobs and a fresh sync. **One process owns it**, readers open it read-only, and anything else appends to an action queue the owner applies in order. And a removal is **retention, not deletion**: when the last source drops an item the row is kept until an explicit purge, so a remote expunge never destroys the local copy.

The specification is still a *draft*, it lives in the repository next to its canonical SQL schema and queries, and io-pimdir is the reference Rust implementation. Draft means it can still move, and this is the year it should stop moving.

## Sync, built on pimdir

A store format is only half the story. The other half is keeping it in agreement with a remote.

That layer is [io-replica](https://github.com/pimalaya/io-replica), an offline-first replica engine written in the same I/O-free style. It reconciles local and remote changes with a **three-way merge against a stored base**, so an edit made offline survives the next sync instead of being silently overwritten. It deduplicates, so an item in several collections is fetched once. It caches partially, so a collection can be known by identifiers, by summaries or in full, and still tell "deleted" apart from "not fetched yet". Flags merge without ever conflicting; diverging bodies are kept on both sides for a human to resolve.

The interesting consequence of putting this above a generic store is that *it stops being a mail feature*. The engine reconciles collections of items; what an item is, it does not care. Sync, backup, mirroring and one-off migration between two backends become **the same machinery under different policies**, and [Neverest](https://github.com/pimalaya/neverest) is the CLI that exposes them.

## More domains

The stack was built for mail first, and **mail is in good shape**: IMAP, SMTP, JMAP, Maildir and the provider APIs, driven by [Himalaya](https://github.com/pimalaya/himalaya) and its TUI.

Contacts followed and are close behind: [Cardamum](https://github.com/pimalaya/cardamum) speaks CardDAV, vdir, Google and Microsoft, on top of vcard-rs, which carries a version-agnostic vCard model, a byte-faithful syntax tree, and the jCard and JSContact conversions.

**Calendars are the current front.** [Calendula](https://github.com/pimalaya/calendula) is taking shape over CalDAV and local vdir, on top of ical-rs, the iCalendar twin of the vCard library, JSCalendar and three-way merge included.

Tasks are the plausible next one, and cheaply so: a to-do is a VTODO, which the iCalendar model already parses, and a task list is a collection of a media type the store already accepts. That is the whole argument for doing the generic work first: adding a domain should be **a connector and a media type, not another silo**.

## Higher interfaces

None of the above is something a user sees. Interfaces are, and they are where the layering finally pays off.

The terminal is well covered: a CLI, a TUI, editor plugins. What is missing is everything else. There is a native GTK4 and libAdwaita desktop application for Linux, and Android apps for mail, contacts and calendars converging into one client. Both are being replanned onto io-replica and io-pimdir, which is exactly the intended shape: an interface should be **a view over the local store**, fast and useful with no network at all, with sync happening *behind* it rather than in front of it.

An offline-first store is the feature that makes a mobile client tolerable and a desktop client pleasant. That is why the plumbing year comes first.

## In short

**One store format, one sync engine, more domains behind them, and interfaces that are finally just views.** That is where the coming year points.

It is a direction and *not a plan*: the specification is a draft, the priorities will move as the work meets reality, and the detailed roadmap is still to be defined. What is certain is that all of it lands in the open, under free licences, as it always has.

Thanks to NLnet and to the NGI programs for making the slow, unglamorous, load-bearing part of this possible. Follow along here, or on [Matrix](https://matrix.to/#/#pimalaya:matrix.org) and [Mastodon](https://fosstodon.org/@pimalaya).
