---
cairn: log
change: newsletter-intro
date: 2026-11-26
---

# The newsletter opens on the post description

scripts/newsletter.js now prints the post's frontmatter `description` in italic and a `---` rule between the subject and the post body, the shape the Buttondown emails use, and ends on Buttondown's `{{ subscribe_form }}` tag after the canonical link; a missing `description` fails the script like a missing `title`. The email keeps the full post rather than a teaser: readers often read mail in a terminal client, and no click is measured. Trivial fix, no proposal.

- Checked: `npm run newsletter -- pimalaya-goes-stable` exits 0 with the italic description and the rule above the body, the subscribe form tag last.

Capabilities moved: blog-site (Newsletter, modified).
