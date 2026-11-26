---
title: Welcome to the Pimalaya blog
description: If you are new here, start with this post: why this blog exists, and what you will find in it.
date: 2026-08-02
---

## What is Pimalaya

Pimalaya is a project that tries to **improve open-source tools around personal information management** (PIM): emails, contacts, calendars (events, tasks, journals, alarms), timers, files, and whatever else turns out to belong there.

It comes in 2 parts:

- The **libraries**: low-level Rust crates for protocols and storage, that anyone can reuse.
- The **applications**: what we build at the top of them, like CLIs, TUIs, editor plugins, mobile apps and native desktop GUIs.

One rule binds them together: the libraries are *I/O-free*. They hold the whole protocol logic as state machines, but they never read, write or connect by themselves. This way the application stays in charge of everything I/O related: blocking or async, which runtime, which TLS. In fact this single constraint is the reason why the same IMAP code can run in a terminal, in a daemon, and inside an Android app over a socket owned by Kotlin.

For now, mail is the mature domain (a CLI, a TUI, Vim and Emacs plugins). Contacts and calendars are catching up, mobile and Linux desktop apps are on their way, and the offline-first sync is what I am working on right now.

## Why a blog

So far, Pimalaya used:

- The **[website](https://pimalaya.org)**: the front door, what Pimalaya is and where to find the rest.
- **[GitHub](https://github.com/pimalaya)**: the code, the bug reports, and the design discussions that lead to decisions.
- **[Matrix](https://matrix.to/#/#pimalaya:matrix.org)**: real-time chat and support. Nothing said there is meant to last.
- **[Mastodon](https://fosstodon.org/@pimalaya)**: the megaphone, short announcements pointing to something that lasts.

What was missing is *a place that lasts*, where the direction of the project is written down in full sentences: why a release took this shape, what comes next, what got retired and why. This blog is that place. The [RSS feed](/feed.xml) and the [newsletter](https://buttondown.com/pimalaya) are just 2 read-only views on it, feel free to subscribe to the one that fits your habits.

## What to expect

3 kinds of posts, all half technical:

- **Journal and news**: the life of the project, on the PIM side and on the technical side (what is being built, reworked or retired, and why). It is the logbook behind the short Mastodon toots.
- **Architecture and design**: how Pimalaya is built and why. These ones are more technical: the choices, the trade-offs, the alternatives I *rejected*, and the patterns shared across libraries and apps.
- **Releases, in depth**: when something ships, the release post goes further than the changelog. What changed for users, what changed under the hood, and the decisions behind both.

Expect also some posts about **dead ends I walked into and walked back out of**. They are usually the most instructive ones, and they never fit in a changelog.

See you in the feed!

## Update (2026-11-26)

A lot moved since this post:

- Contacts and calendars caught up: [Cardamum](https://github.com/pimalaya/cardamum) and [Calendula](https://github.com/pimalaya/calendula) reached their `v1`.
- The offline-first sync is not the frontier anymore: [pimdir](https://github.com/pimalaya/pimdir) reached its `v1`, and [Neverest](https://github.com/pimalaya/neverest) `v1` syncs every account into one shared store.
- The Android app is in closed alpha, see [Pimalaya for Android enters closed alpha](https://blog.pimalaya.org/pimalaya-android-closed-alpha/).

All the details are in [Pimalaya goes stable](https://blog.pimalaya.org/pimalaya-goes-stable/).
