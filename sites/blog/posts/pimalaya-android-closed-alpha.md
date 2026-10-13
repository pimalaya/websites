---
title: Pimalaya for Android enters closed alpha
description: The first Pimalaya app to gather every domain the project covers, and everything built over the years to get there. It is not ready for everyone yet, so a handful of chosen testers go first. Here is how to apply.
date: 2026-10-13
draft: false
---

Pimalaya has an Android app, and it is **ready to leave my phone**. Not for everyone yet: for a handful of testers, chosen one by one, in a *closed alpha*.

![The setup, the mail list, the contacts and the calendars of Pimalaya for Android](https://blog.pimalaya.org/android/closed-alpha.webp)

## Everything, in one app

[The story behind Pimalaya](https://blog.pimalaya.org/the-story-behind-pimalaya/) ended on a promise: mobile apps on the way, contacts next, then calendars. This app is where all of those threads meet.

It is **the first Pimalaya app to gather every domain the project covers**. Until now, each tool did one thing: Himalaya the mail, Cardamum the contacts, Calendula the calendars, Neverest the sync. Each of them pulled its own share of libraries out of the ground. This app needs *all of them at once*, and that is what makes it special to me:

- **mail**, over IMAP, SMTP, JMAP, the Gmail API and Microsoft Graph, the layers Himalaya has been growing since the Vim plugin days,
- **contacts**, over CardDAV, JMAP, the Google People API and Microsoft Graph, on top of vcard-rs, the layers behind Cardamum,
- **calendars**, over CalDAV, JMAP, the Google Calendar API and Microsoft Graph, on top of ical-rs, the layers behind Calendula,
- **sync**, through the [pimdir](https://github.com/pimalaya/pimdir) store and its sync engine, [io-pimdir](https://github.com/pimalaya/io-pimdir), announced in [Another year with NLnet](https://blog.pimalaya.org/another-year-with-nlnet/),
- **notifications**, from a background sync that checks your accounts and tells you about new mail,
- and the plumbing under all of it: server discovery, OAuth 2.0, HTTP, TLS.

pimdir deserves a word of its own. It is the standard this year of NLnet funding is about, and **this app is the first to implement it fully**, the read side and the write side: mail, contacts, calendars and files in one store, written by the sync, by every action you take, by Android's own contacts and calendar apps, and read back by every list. Until now, the specification had only met tools exercising a part of it. Here it carries a whole PIM client, day to day, and that is *the stress test it needed* before it can stop moving.

None of the rest was written for this app either. It is the same I/O-free Rust code that runs the CLIs, compiled for Android, with a native shell around it. Years of splitting the logic from the interface, and here is the payoff: *one more frontend*, and suddenly every domain fits in a single pocket.

## What it is

**One app for your mail, contacts and calendars**, on the providers you already use:

| Provider | Mail | Contacts | Calendars |
|----------|------|----------|-----------|
| Gmail and Google Workspace | Gmail API | People API | Calendar API |
| Outlook.com and Microsoft 365 | Microsoft Graph | Microsoft Graph | Microsoft Graph |
| Fastmail, and any JMAP server | JMAP | JMAP | JMAP |
| Any standard provider | IMAP and SMTP | CardDAV | CalDAV |

You type your email address, and the app *finds the rest*: the servers, the protocols, the sign-in. Then one tick per domain, and you are in.

Every account lands in **one merged view per domain**: one mail list, one contact list, one agenda, one place for every attachment you ever received. Contacts and calendars can also mirror into Android's own apps, both ways.

Everything lives **on the phone**. Lists render from the local store instantly, and every action is a local write: reading, flagging, deleting, sending, editing a contact, creating an event. All of it works *with no network at all*, and goes out on the next sync, which reconciles with a **three-way merge** so an edit made offline survives instead of being silently overwritten.

And it is **private**: no account with us, no analytics, no ads. The app talks to your providers, and to nobody else.

## Why closed, and why alpha

Because it is *not ready for everyone*. It works day to day, on my phone and a few others, but:

- **the store may change** between versions, which can mean starting over from a fresh sync,
- composing is **plain text only**, without attachments or drafts,
- a JMAP account cannot send yet, and its calendars are read-only,
- mail syncs on **Wi-Fi only** for now,
- and some provider, some server, some phone out there will break it in ways I have not seen yet.

That last point is the whole reason for this alpha. What I need now is not volume, it is **coverage**: the providers, the servers and the phones I do not have. A wide open beta would bury the useful reports under the noise of missing features I already know about. A few testers who use it for real and tell me what goes wrong are worth far more.

## How to apply

Write to [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net) with:

- the **providers or servers** you would use (Gmail, Microsoft 365, Fastmail, Posteo, a self-hosted Dovecot, Nextcloud, Radicale, Stalwart…),
- your **phone and Android version** (Android 8.0 or newer),
- the **Google account** you use on that phone, to get the app through Google Play's closed testing, which brings updates automatically,
- and a word on how you would report what you find.

I will pick testers **for coverage**, not first come first served, so do not read silence as a no: it may simply mean your setup is already well covered. If the alpha goes well, a wider beta follows, and I will announce it here.

## In short

**Mail, contacts, calendars, sync and notifications, in one app, on your own providers, offline first and private.** Years of libraries finally meeting in one place, and the first full pimdir implementation. It is early, it is rough, and it needs a few good testers before it needs many.

Thanks to NLnet and the NGI programs for funding the stack it stands on, year after year. Follow along here, or on [Matrix](https://matrix.to/#/#pimalaya:matrix.org) and [Mastodon](https://fosstodon.org/@pimalaya).
