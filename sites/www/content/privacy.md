# Privacy Policy

Last updated: 10 November 2026

This privacy policy describes how the apps published by the Pimalaya project handle your data: the Android app and the command-line, terminal and desktop clients that connect to your mail, contacts and calendar accounts (the "apps"), and this website. The apps are free and open-source software; their source code is available at https://github.com/pimalaya.

## Summary

The apps do not collect, sell, or share your personal data with us or with any third party. They are clients that sync your mail, contacts, calendars and tasks between your device and the servers **you** choose to connect to. Using them needs no account with the Pimalaya project, and the project runs no server between the apps and your providers. Everything an app stores stays on your device, except the data it exchanges with those servers on your behalf.

## The data the apps handle

- **Mail, contacts, calendars and tasks.** An app reads, stores and changes the messages, contacts, calendar entries and tasks of the accounts you connect, so it can show them to you, let you act on them, and keep them in sync with your servers.
- **Account credentials.** To connect to a server, an app stores the credentials you provide: a password, an API token, or the OAuth 2.0 tokens obtained when you sign in through your provider. They are sent only to the server you configured, or to that provider's own identity endpoint when refreshing a token. The Android app encrypts them with a key held by the Android Keystore; the command-line and desktop apps keep them where you tell them to, such as your system's keyring or a command you configure.
- **Server configuration.** The addresses, usernames and protocol settings of the accounts you add are stored on your device so the app can reconnect.

All of this stays on your device, in the app's private storage or in the files and keyring entries you configure.

## Network connections and third parties

The apps make network connections only to:

- **The servers you configure** (IMAP and SMTP, JMAP, CardDAV, CalDAV, the Gmail, Google People, Google Calendar and Google Tasks APIs, or Microsoft Graph), to sync your data, to send the messages you write, and to authenticate. Data you send to those servers is governed by their own privacy policies.
- **Identity providers**, when you sign in with OAuth 2.0 (for example Google or Microsoft, or your server's own), to obtain and refresh access tokens.
- **Discovery services**, when you add an account, to locate your provider's servers from your address: DNS, your provider's own autoconfiguration endpoint, and public autoconfiguration databases. Each app's details below list the ones it uses.

## What we do not do

- We do not operate any server that receives your data; the apps talk only to the providers you configure and the services listed above.
- We do not collect analytics, usage statistics, or crash reports.
- The apps contain no advertising, no trackers, and no third-party analytics or advertising SDKs.
- We have no access to your mail, your contacts, your calendars, your credentials, or any other data the apps hold.

## Google user data

This section covers the data an app receives from Google's APIs (Gmail, Google Calendar, Google Tasks and Google People) when you connect a Google account, whichever app you connect it in.

### Data accessed

For the parts of the account you choose to connect, an app accesses:

- **Gmail**: your messages, labels and sending addresses;
- **Google Calendar**: your list of calendars and the events in them;
- **Google Tasks**: your task lists and their tasks;
- **Google Contacts**: your contacts and their labels;
- **your account's address**, to check that you signed in with the account you entered.

The apps derive no aggregated or anonymized data from it.

### How the data is used

Only to provide an app's features to you on your device: to read, search, send, label, move and delete your mail; to read, create, change and delete events, and to invite the guests you add; to read, create, complete, change and delete tasks; to read, create, change and delete contacts and their labels; and to keep the app's copy in sync with your account. It is never used for advertising, never used to develop, improve or train any artificial intelligence or machine learning model, and never read by anyone but you.

### Sharing and transfer

The apps share Google user data with no one. An app sends it nowhere but back to Google, to carry out your actions, and never to us, to advertisers, to data brokers, to artificial intelligence services or to any other third party. It is never sold. The only other place it can go is one you choose on your own device: the Android app copies your contacts and calendars into the phone's own Contacts and Calendar apps when you turn that option on, as its details below say.

### Protection

- The Pimalaya project runs no server: no copy of your Google data exists outside your devices and Google.
- Every connection to Google is encrypted with TLS.
- You sign in on Google's own page, so the apps never see your Google password.
- The Android app keeps the data in its private storage, which Android keeps from other apps, excludes it from Android's cloud backups and device-to-device transfers, and encrypts your OAuth tokens with a key held by the Android Keystore. The command-line, terminal and desktop apps keep the data in files of your own user account, and your tokens where you configure them, such as your system's keyring or a password manager.

### Retention and deletion

An app keeps Google user data only while the Google account is configured in it; "Data retention and deletion" below says what removing the account or uninstalling the app deletes. You can revoke an app's access to your Google account at any time at https://myaccount.google.com/permissions, after which it can no longer reach it.

### Limited Use

Pimalaya's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Data retention and deletion

An app keeps your data only for as long as the corresponding account is configured in it. Removing the account from the app, or uninstalling the app, deletes what it stored for that account on your device; the Android app moves the account's contacts into its on-device addressbook, where you can delete them, and on Android 10 and later its uninstall dialog offers to keep the app's data for a later reinstall, both as its details below say. Data already synced to a remote server is not removed by either; delete it on the server if you want it gone. You can also revoke an app's access to your Google account at any time from https://myaccount.google.com/permissions.

## Details per app

- **Android app**: what it stores, the permissions it asks for, its background sync and its mirrors into the phone's Contacts and Calendar apps are detailed in [its privacy policy](https://pimalaya.org/android/privacy/).

## This website

pimalaya.org sets no cookies, runs no analytics and loads nothing from third parties. It is hosted on GitHub Pages, which logs visitors' IP addresses for security purposes, as [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) describes. The newsletter form sends the address you enter to [Buttondown](https://buttondown.com/legal/privacy), which sends the newsletter; every issue carries a link to unsubscribe.

## Children

The apps are not directed at children and do not knowingly collect data from anyone. They have no data collection of their own.

## Changes to this policy

We may update this policy from time to time. Changes are published on this page, and the "Last updated" date above reflects the latest revision.

## Contact

For any question about this policy or the apps' handling of data, reach the Pimalaya project:

- Chat on [Matrix](https://matrix.to/#/#pimalaya:matrix.org)
- News on [Mastodon](https://fosstodon.org/@pimalaya) or [RSS](https://fosstodon.org/@pimalaya.rss)
- Mail at [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net)
