---
title: Pimalaya for Android enters closed alpha
description: The first Pimalaya app that gathers every domain the project covers, and everything built over the years to get there. It is not ready for everyone yet, so few chosen testers go first. Here how to apply.
date: 2026-10-13
draft: false
---

Pimalaya has an Android app, and it is **ready to leave my phone**. Not for everyone yet: for a small group of testers, picked one by one, in a *closed alpha*.

![The setup, the mail list, the contacts and the calendars of Pimalaya for Android](https://blog.pimalaya.org/android/closed-alpha.webp)

## Everything, in one app

[The story behind Pimalaya](https://blog.pimalaya.org/the-story-behind-pimalaya/) ended on a promise: mobile apps on their way, contacts next, then calendars. This app is where all of it meets.

It is **the first Pimalaya app that gathers every domain the project covers**. Till now, each tool did one thing: Himalaya the mails, Cardamum the contacts, Calendula the calendars, Neverest the sync. Each of them brought its own share of libs to life. This app needs *all of them at once*, and that is what makes it special to me:

- **Mails**, over IMAP, SMTP, JMAP, the Gmail API and Microsoft Graph: the layers Himalaya has been growing since the Vim plugin days.
- **Contacts**, over CardDAV, JMAP, the Google People API and Microsoft Graph, at the top of vcard-rs: the layers behind Cardamum.
- **Calendars**, over CalDAV, JMAP, the Google Calendar API and Microsoft Graph, at the top of ical-rs: the layers behind Calendula.
- **Sync**, through the [pimdir](https://github.com/pimalaya/pimdir) store and its sync engine [io-pimdir](https://github.com/pimalaya/io-pimdir), announced in [Another year with NLnet](https://blog.pimalaya.org/another-year-with-nlnet/).
- **Notifications**, from a background sync that checks your accounts and tells you when new mails arrive.
- And the plumbing below all of this: server discovery, OAuth 2.0, HTTP, TLS.

pimdir deserves a few more words. It is the standard this year of NLnet support is about, and **this app is the first one to implement it fully**, both the read side and the write side: mails, contacts, calendars and files in one store, written by the sync, by every action you do, by the contacts and calendar apps of Android, and read back by every list. Till now, the specification only met tools using a part of it. Here it carries a whole PIM client, every day, and this is *the stress test it needed* before it can stop moving.

None of the rest was written for this app either. It is the same I/O-free Rust code that runs the CLIs, compiled for Android, with a native shell around it. Years of splitting the logic from the interface, and here the result: *one more frontend*, and suddenly every domain fits in a pocket.

## What it is

**One app for your mails, contacts and calendars**, on the providers you already use:

| Provider | Mail | Contacts | Calendars |
|----------|------|----------|-----------|
| Gmail and Google Workspace | Gmail API | People API | Calendar API |
| Outlook.com and Microsoft 365 | Microsoft Graph | Microsoft Graph | Microsoft Graph |
| Fastmail, and any JMAP server | JMAP | JMAP | JMAP |
| Any standard provider | IMAP and SMTP | CardDAV | CalDAV |

You type your email address, and the app *finds the rest*: servers, protocols, sign-in. Then one tick per domain, and you are in.

Every account lands in **one merged view per domain**: one mail list, one contact list, one agenda, one place for all the attachments you ever received. Contacts and calendars can also be mirrored to the Android apps, both ways.

Everything lives **on the phone**. Lists show up instantly from the local store, and every action is a local write: reading, flagging, deleting, sending, editing a contact, creating an event. It all works *without any network*, and goes out with the next sync. The sync reconciles with a **three-way merge**, so an edit made offline survives instead of being silently overwritten.

And it is **private**: no account on our side, no analytics, no ads. The app talks to your providers, and to nobody else.

## Why closed, and why alpha

Because it is *not ready for everyone*. It works every day, on my phone and on few others, but:

- **The store may change** between versions, which can mean starting over with a fresh sync.
- Composing is **plain text only**, without attachments nor drafts.
- A JMAP account cannot send yet, and its calendars are read-only.
- Mails sync on **Wi-Fi only** for now.
- And some provider, some server or some phone out there will break it in ways I did not see yet.

This last point is the whole reason of this alpha. What I need now is not volume, it is **coverage**: the providers, the servers and the phones I do not have. A wide open beta would bury the useful reports under the noise of missing features I already know about. Few testers who really use it and tell me what goes wrong are worth way more.

## How to apply

Write to [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net) with:

- The **providers or servers** you would use (Gmail, Microsoft 365, Fastmail, Posteo, a self-hosted Dovecot, Nextcloud, Radicale, Stalwart etc).
- Your **phone and Android version** (Android 8.0 or newer).
- The **Google account** you use on that phone, to get the app through the closed testing of Google Play, which brings updates automatically.
- A word on how you would report what you find.

I will pick testers **for coverage**, not first come first served. So do not take silence as a no: it may just mean that your setup is already well covered. If the alpha goes well, a wider beta will follow, and I will announce it here.

You prefer to skip Google Play, or you do not want to wait? You can also **install the APK yourself**, straight from the CI: open the [latest release build](https://github.com/pimalaya/android/actions/workflows/releases.yml?query=branch%3Amaster+is%3Asuccess), download it under *Artifacts* (you need a GitHub account), and open it on your phone. pimalaya-arm64-v8a fits most phones, pimalaya fits all of them. Updates are then on you, and reports are welcomed on the [issue tracker](https://github.com/pimalaya/android/issues) as well.

## To summarize

**Mails, contacts, calendars, sync and notifications, in one app, on your own providers, offline first and private.** Years of libs finally meeting in one place, and the first full implementation of pimdir. It is early, it is rough, and it needs few good testers before it needs many.

Special thanks to NLnet and to the NGI programs for the financial support behind the whole stack, year after year. Feel free to follow along here, or on [Matrix](https://matrix.to/#/#pimalaya:matrix.org) and [Mastodon](https://fosstodon.org/@pimalaya)!

## Update (2026-11-26)

Since this post, pimdir reached its `v1`: storage, sync and search were frozen together on the 26th of November, with io-pimdir `v1.0.0` as the Rust implementation. All the details are in [Pimalaya goes stable](https://blog.pimalaya.org/pimalaya-goes-stable/).

The app followed the same day: it now creates and checks its store at storage `v1`, and syncs following sync `v1`. What it means for testers:

- The "store may change between versions" warning above is over for the format itself: the schema version 1 never changes, any future change will be a migration.
- But a store written by a draft version of pimdir is refused, never migrated. Before updating, sync and make sure the outbox is empty. The app will then ask you to reinstall, and it creates a new store that syncs from scratch.

Few limitations listed above are gone as well:

- A JMAP account can now send, and its calendars take writes.
- The composer is not plain text only anymore: a message using formatting is sent as plain text plus HTML.

Mails still sync their bodies on Wi-Fi only.
