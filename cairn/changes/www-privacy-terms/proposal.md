---
cairn: change
id: www-privacy-terms
status: landed
created: 2026-11-07
---

# Privacy policy and terms of use for every Pimalaya app

## Why

One Google Cloud project, "Pimalaya", and one Microsoft app registration serve every Pimalaya interface that connects to people's accounts (the user's decision, 2026-11-07): the Android app first, the command-line, terminal and desktop clients as they join. Their consent screen names the brand, so its three links are the brand's: the home page https://pimalaya.org/, a privacy policy and terms of use covering every app, on the same verified domain. Google's Branding help says the home page, privacy and terms links "are required for all external production apps" and an app missing them cannot be submitted (https://support.google.com/cloud/answer/15549049); the home page must link the privacy policy at the URL the consent screen gives. The Limited Use statement may sit on "a link on a homepage to a dedicated page or privacy policy" (https://developers.google.com/workspace/workspace-api-user-data-developer-policy). The plan lives in the android repo (cairn/changes/oauth-verification).

## What

- `/privacy/`: the privacy policy of every app (what they handle, their connections, what the project does not do, Google user data with the Limited Use sentence, retention, a link per app to its details) and of this website (GitHub Pages logs, the Buttondown newsletter).
- `/terms/`: the terms of use of every app.
- Both written here (content/privacy.md, content/terms.md), since they span repositories, and rendered at build time like the Android policy, which stays at `/android/privacy/` as the Android app's details.
- The footer's bottom line links both on every page, the home page included.
- The three legal pages share one renderer (lib/policy.ts), one component (PolicyPage.tsx) and one stylesheet (PolicyPage.css, the former AndroidPage.css).
