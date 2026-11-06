import { Icon } from '@pimalaya/shared'

import { privacyHtml, privacyTitle } from '../lib/privacy'
import './Page.css'
import './AndroidPage.css'

/*
 * The Android app's privacy policy, the URL Google's consent screen and the
 * stores link to. The text is the android repository's PRIVACY.md, rendered
 * at build time (see lib/privacy.ts).
 */
export function AndroidPrivacyPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <a className="android__back" href="/android/">
            <Icon name="arrowRight" size={16} /> Pimalaya for Android
          </a>
          <h1 className="page-head__title">{privacyTitle}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Trusted content: our own markdown, rendered at build time. */}
          <div
            className="policy"
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </div>
      </section>
    </>
  )
}
