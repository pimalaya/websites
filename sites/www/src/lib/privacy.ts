/*
 * The Android app's privacy policy: content/android/privacy.md, a verbatim
 * copy of the android repository's PRIVACY.md (refreshed by the root
 * sync:privacy script, never fetched at build time), split into its title and
 * body and rendered with marked at build time.
 */

import { Marked } from 'marked'

import source from '../../content/android/privacy.md?raw'

const marked = new Marked()

const title = /^# (.+)\r?\n/.exec(source)
if (!title) throw new Error('content/android/privacy.md: missing "# " title')

export const privacyTitle = title[1].trim()

export const privacyHtml = marked.parse(source.slice(title[0].length), {
  async: false,
})
