---
cairn: log
change: www-privacy-terms
date: 2026-11-07
---

# Privacy policy and terms of use for every Pimalaya app

pimalaya.org gains `/privacy/` and `/terms/`, covering every Pimalaya app that connects to people's accounts, since one OAuth consent screen and one app registration serve them all: with `/`, they are the three links Google's and Microsoft's branding pages take (android cairn/changes/oauth-verification).

- `/privacy/`: what the apps handle and where, their connections, what the project does not do, Google user data with the Limited Use sentence, retention, a link to the Android app's details at `/android/privacy/`, and the website's own data (GitHub Pages logs, the Buttondown newsletter).
- `/terms/`: licensed as each repository states, no account and no server of the project, the providers' terms still in force, store purchases under the store's terms, no warranty.
- Both written here (content/privacy.md, content/terms.md) and rendered at build time; the three legal pages share lib/policy.ts, PolicyPage.tsx and PolicyPage.css (the former AndroidPage.css and AndroidPrivacyPage.tsx).
- Every page's footer bottom line links both.

Capabilities moved: www-site (Privacy policy and terms of use added, Seven pages renamed Nine pages, Android app pages, Site-local pieces, Head and structured data).
