---
cairn: log
change: www-privacy-google-sections
date: 2026-11-10
---

# The Google user data section follows Google's checklist

Google's Trust and Safety team answered the data access submission on 2026-11-10 with its review checklist (android cairn/changes/oauth-verification), which asks the privacy policy to state data access, use, transfer, protection, and retention and deletion, each for raw and aggregated or anonymized data, and no AI or ML training or transfer.

- content/privacy.md: the Google user data section split under Data accessed, How the data is used, Sharing and transfer, Protection, Retention and deletion and Limited Use. New statements: no aggregated or anonymized data derived; no AI or ML model development, improvement or training and no transfer to an AI service; the phone Contacts and Calendar mirrors as the one other destination; protection (no server, TLS to Google, sign-in on Google's page, Android private storage kept out of cloud backups and device transfers with Keystore-encrypted tokens, the command-line apps' files and configured token stores). The retention section now names the Android uninstall dialog's offer to keep the data. Last updated 10 November 2026.
- content/android/privacy.md: refreshed from the android repository's PRIVACY.md (`npm run sync:privacy`), which got the same split.
- PolicyPage.css: `.policy h3` styled for the new sub-headings.
- Checked: `npm run build:www` green, both pages rendering the six sub-headings. Not published: the Publish workflow of pimalaya/_www puts it live.

Capabilities moved: www-site (Privacy policy and terms of use, modified).
