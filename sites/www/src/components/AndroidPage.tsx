import { Button, Icon } from '@pimalaya/shared'

import './Page.css'
import './AndroidPage.css'

/*
 * The Android app's home page, the one Google's OAuth verification and the
 * stores point to: what the app does, how it treats data, the Google user data
 * statement (Limited Use wants it outside the privacy policy too), the status
 * and how to get it.
 */

const repo = 'https://github.com/pimalaya/android'

const features = [
  {
    title: 'Mail',
    note: 'Read, write, flag, file and delete over IMAP and SMTP, JMAP, the Gmail API or Microsoft Graph.',
  },
  {
    title: 'Contacts',
    note: 'Over CardDAV, JMAP, the Google People API or Microsoft Graph, mirrored into Android’s Contacts app when you want them there.',
  },
  {
    title: 'Calendars and tasks',
    note: 'Over CalDAV, JMAP, Google Calendar and Tasks or Microsoft Graph, mirrored into Android’s Calendar app when you want them there.',
  },
  {
    title: 'Offline first',
    note: 'Every action is written on the phone first and goes out on the next sync, which merges instead of overwriting.',
  },
]

const links = [
  { label: 'How to join the closed alpha', href: 'https://blog.pimalaya.org/pimalaya-android-closed-alpha/' },
  { label: 'Source code', href: repo },
  { label: 'Report a bug', href: `${repo}/issues` },
  { label: 'Privacy policy', href: '/android/privacy/' },
]

export function AndroidPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Android app</span>
          <h1 className="page-head__title">Pimalaya for Android</h1>
          <p className="page-head__lead">
            Mail, contacts, calendars and tasks in one offline-first app, on
            the providers you already use: Google, Microsoft, Fastmail and any
            standard IMAP, SMTP, CardDAV or CalDAV server. Free and open
            source.
          </p>
          <div className="page-head__cta">
            <Button href={repo} size="lg" external>
              Source code <Icon name="externalLink" size={16} />
            </Button>
            <Button href="/android/privacy/" size="lg" variant="secondary">
              Privacy policy <Icon name="arrowRight" size={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What it does</span>
          <h2 className="section__title">One app, every domain</h2>
          <p className="section__lead">
            Type your address and the app finds the servers, the protocols
            and the sign-in. Every account lands in one merged view per
            domain.
          </p>
          <ul className="section__body points">
            {features.map((feature) => (
              <li key={feature.title}>
                <span className="points__title">{feature.title}</span>
                {feature.note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Your data</span>
            <h2 className="section__title">It stays on your phone</h2>
            <div className="section__body prose-block">
              <p>
                There is <strong>no account to create</strong> and no
                Pimalaya server in between: the app talks to your providers
                and to nobody else. It collects no analytics, shows no ads and
                carries no trackers.
              </p>
              <p>
                What it stores, it stores in its private storage on the
                device, credentials encrypted with a key held by the Android
                Keystore. The <a href="/android/privacy/">privacy policy</a>{' '}
                says what it handles and why, in full.
              </p>
            </div>
          </div>

          <div className="panel" id="google-user-data">
            <h2 className="panel__title">Google user data</h2>
            <p className="panel__lead">
              When you connect a Google account, Pimalaya reads and changes
              your Gmail messages, contacts, calendars and tasks only to show
              them to you and keep them in sync, on your device. The data
              travels between Google and your phone alone: it is never sent to
              us or to anyone else, never used for advertising, never sold and
              never read by a person.
            </p>
            <p className="panel__lead">
              Pimalaya&rsquo;s use and transfer to any other app of
              information received from Google APIs will adhere to the{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy">
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Get it</span>
            <h2 className="section__title">In closed alpha</h2>
            <p className="section__lead">
              The app works day to day but is not ready for everyone yet. A
              few testers, picked for the providers and phones they cover, get
              it through Google Play&rsquo;s closed testing or as an APK built
              by the CI. It needs Android 8.0 or newer.
            </p>
          </div>
          <ul className="rows">
            {links.map((link) => {
              const external = link.href.startsWith('http')
              return (
                <li key={link.label}>
                  <a
                    className="row"
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    <span className="row__name">
                      {link.label}
                      <Icon
                        name={external ? 'externalLink' : 'arrowRight'}
                        size={14}
                      />
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
