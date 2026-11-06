---
cairn: delta
change: www-android-pages
---

# Delta

## ADDED Requirements

### Requirement: Android app pages
The site SHALL carry the Android app's home page at `/android/` and its privacy policy at `/android/privacy/`, the two URLs Google's OAuth verification and the stores point to. The home page SHALL say what the app does, how it treats data (no account with the project, no server of the project, no analytics), the app's status and how to get it, link the source and the privacy policy, and carry the Google user data statement with the Limited Use sentence of the Google API Services User Data Policy, which Google wants outside the privacy policy too. The privacy page SHALL render content/android/privacy.md at build time, a verbatim copy of the android repository's PRIVACY.md, which stays the source; the root `sync:privacy` script refreshes the copy from a sibling clone, and the build SHALL NOT fetch it over the network.

## MODIFIED Requirements

### Requirement: Five pages
Renamed Seven pages: the Android app's home page at `/android/` and its privacy policy at `/android/privacy/` join the five, and the footer's Open source column gains an "Android app" link to `/android/`.

### Requirement: Head and structured data
The Android page carries a SoftwareApplication (Android, the source as its repository) plus a breadcrumb; the privacy page a WebPage plus a three-step breadcrumb (Pimalaya, Android app, Privacy policy).

## REMOVED Requirements
