/*
 * The legal pages' texts, rendered with marked at build time: the privacy
 * policy and terms of use of every Pimalaya app (content/privacy.md and
 * content/terms.md, written here), and the Android app's own privacy policy
 * (content/android/privacy.md, a verbatim copy of the android repository's
 * PRIVACY.md refreshed by the root sync:privacy script, never fetched at build
 * time). Each is split into its "# " title and its body.
 */

import { Marked } from 'marked'

import androidPrivacySource from '../../content/android/privacy.md?raw'
import privacySource from '../../content/privacy.md?raw'
import termsSource from '../../content/terms.md?raw'

export interface Policy {
  title: string
  html: string
}

const marked = new Marked()

function render(path: string, source: string): Policy {
  const title = /^# (.+)\r?\n/.exec(source)
  if (!title) throw new Error(`${path}: missing "# " title`)

  return {
    title: title[1].trim(),
    html: marked.parse(source.slice(title[0].length), { async: false }),
  }
}

export const privacy = render('content/privacy.md', privacySource)
export const terms = render('content/terms.md', termsSource)
export const androidPrivacy = render(
  'content/android/privacy.md',
  androidPrivacySource,
)
