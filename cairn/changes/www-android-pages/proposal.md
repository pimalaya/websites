---
cairn: change
id: www-android-pages
status: landed
created: 2026-11-06
---

# Android app pages on pimalaya.org

## Why

Google's OAuth verification of the Android app needs a home page for the app on a domain the project owns and has verified, describing what the app does and linking its privacy policy, and the privacy policy on that same domain. A link to PRIVACY.md on GitHub does not count: github.com cannot be verified by the project. Google's Gmail API policy also wants the Limited Use statement in the app or on its website, not only inside the privacy policy. The plan lives in the android repo (cairn/changes/oauth-verification).

## What

Two pages under `/android/`:

- `/android/`: the app's home page: what it does, how it treats data, the Google user data statement with the Limited Use sentence, its status and how to get it, links to the source and the privacy policy.
- `/android/privacy/`: the privacy policy, rendered at build time from content/android/privacy.md, a verbatim copy of the android repo's PRIVACY.md.

The android repo's PRIVACY.md stays the source, reviewed beside the code it describes. The copy is refreshed with `npm run sync:privacy` from a sibling clone (../android): fetching it at build time would put the network into a build that must stay byte-reproducible and sandboxed (nix).

The footer's Open source column gains an "Android app" link.
