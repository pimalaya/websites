---
title: Welcome to the Pimalaya blog
description: Newcomers, take a moment to read this post: you will understand why this blog exists and what it covers.
date: 2026-08-02
---

## What is Pimalaya

Pimalaya is an ambitious project that aims to **improve the open-source tooling around personal information management** (also known as PIM): emails, contacts, calendars (events, tasks, journals, alarms), timers, files, and whatever else turns out to belong there.

It comes in two halves. The **libraries** are low-level Rust crates for protocols and storage, reusable by anyone. The **applications** are what we build on top of them: CLIs, TUIs, editor plugins, mobile apps and native desktop GUIs.

One rule binds them together: the libraries are *I/O-free*. They carry the whole protocol logic as state machines and perform no read, no write and no network call of their own, so the application stays in charge of blocking or async, of which runtime and of which TLS. That single constraint is why the same IMAP code can run in a terminal, in a daemon, and inside an Android app over a Kotlin-owned socket.

Today mail is the mature domain (a CLI, a TUI, Vim and Emacs plugins), contacts and calendars are catching up, mobile and Linux desktop applications are underway, and the offline-first sync stack is the current frontier.

## Why a blog

What Pimalaya has used for a while:

- **[Website](https://pimalaya.org)**: the front door. What Pimalaya is, and where everything else lives.
- **[GitHub](https://github.com/pimalaya)**: the code, the bug reports, and the design discussions that lead to decisions.
- **[Matrix](https://matrix.to/#/#pimalaya:matrix.org)**: real-time chat and support. Nothing said there is meant to last.
- **[Mastodon](https://fosstodon.org/@pimalaya)**: the megaphone. Short announcements pointing at something durable.

What it never had is *a durable place*, where the project's direction gets written down in full sentences: why a release took the shape it did, what is coming next, and what got retired along the way. This blog is that place. The [RSS feed](/feed.xml) and the [newsletter](https://buttondown.com/pimalaya) are just two read-only views on it: subscribe to whichever fits your reading habits.

## What to expect

Three kinds of posts, all in the same half-technical register.

- **Journal and news**: the running account of the project, on both the PIM domain side and the technical side (what is being built, reworked, or retired, and why). This is the logbook behind the short Mastodon announcements.
- **Architecture and design**: the reasoning behind how Pimalaya is built. These posts lean more technical than domain: the choices, the trade-offs, the alternatives that were *rejected*, and the patterns shared across the libraries and the applications.
- **Releases, in depth**: when something ships, the release post goes further than a changelog. What changed for users, what changed under the hood, and the decisions behind both.

Expect the occasional detour into a **dead end we walked into and walked back out of**. Those are usually the most instructive ones, and they never fit in a changelog.

See you in the feed.
