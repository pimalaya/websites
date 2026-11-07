import { Icon } from '@pimalaya/shared'

import { androidPrivacy, privacy, terms } from '../lib/policy'
import type { Policy } from '../lib/policy'
import './Page.css'
import './PolicyPage.css'

/*
 * The legal pages: the privacy policy and terms of use of every Pimalaya app,
 * the URLs the OAuth consent screens link to, and the Android app's own
 * privacy policy below its page. The texts are markdown rendered at build
 * time (see lib/policy.ts).
 */
function PolicyPage({
  policy,
  back,
}: {
  policy: Policy
  back?: { label: string; href: string }
}) {
  return (
    <>
      <section className="page-head">
        <div className="container">
          {back && (
            <a className="policy__back" href={back.href}>
              <Icon name="arrowRight" size={16} /> {back.label}
            </a>
          )}
          <h1 className="page-head__title">{policy.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Trusted content: our own markdown, rendered at build time. */}
          <div
            className="policy"
            dangerouslySetInnerHTML={{ __html: policy.html }}
          />
        </div>
      </section>
    </>
  )
}

export function PrivacyPage() {
  return <PolicyPage policy={privacy} />
}

export function TermsPage() {
  return <PolicyPage policy={terms} />
}

export function AndroidPrivacyPage() {
  return (
    <PolicyPage
      policy={androidPrivacy}
      back={{ label: 'Pimalaya for Android', href: '/android/' }}
    />
  )
}
