---
cairn: log
change: www-android-pages
date: 2026-11-06
---

# Android app pages

pimalaya.org gains the Android app's home page at `/android/` and its privacy policy at `/android/privacy/`, the URLs Google's OAuth verification of the app needs on a domain the project owns (android cairn/changes/oauth-verification).

- `/android/`: what the app does, its data stance, the Google user data statement with the Limited Use sentence, the closed alpha and how to join, links to the source, the issue tracker and the policy.
- `/android/privacy/`: content/android/privacy.md rendered with marked at build time; the file is a verbatim copy of the android repository's PRIVACY.md, refreshed by the root `sync:privacy` script, never fetched at build time.
- The footer's Open source column links the app page; both pages carry their own head and JSON-LD.

Capabilities moved: www-site (Five pages renamed Seven pages, Android app pages added, Head and structured data).
