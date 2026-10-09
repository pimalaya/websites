import { Button, Icon } from '@pimalaya/shared'

import {
  APP_COUNT,
  DOMAIN_COUNT,
  funders,
  LIB_COUNT,
  platforms,
  REPO_COUNT,
} from '../lib/sponsors'
import type { Platform } from '../lib/sponsors'
import './Page.css'
import './SponsorPage.css'

/*
 * The funding page, and the only funding surface the organisation controls.
 * GitHub renders FUNDING.yml as an unordered row of payment buttons with no
 * room for a sentence, so everything that needs saying about the money is
 * said here and the buttons point at it.
 *
 * The tiers are deliberately absent. They live on GitHub Sponsors, which owns
 * the amounts and the billing; repeating them here would only be a second
 * copy to keep in step. This page carries what GitHub cannot: how the project
 * is funded, what the money buys, and every route it can take.
 *
 * The routes sit in the header rather than in a section of their own, so the
 * page opens on the ask instead of making a visitor who already decided to
 * give read three sections to find out where. The first route (the only one
 * with tiers) is featured beside the headline; the others follow as rows.
 */

function Mark({ platform, size }: { platform: Platform; size: number }) {
  return platform.icon ? (
    <Icon name={platform.icon} size={size} />
  ) : (
    /* thanks.dev publishes no usable glyph, so it gets a lettermark. */
    <span className="give__monogram" aria-hidden="true">
      td
    </span>
  )
}

export function SponsorPage() {
  const [lead, ...others] = platforms

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="page-head__split">
            <div>
              <span className="eyebrow">Sponsor</span>
              <h1 className="page-head__title">
                Pimalaya is free software, funded by the people who rely on it
              </h1>
              <p className="page-head__lead">
                Grants pay for named pieces of work, for a fixed period.
                Partnerships pay for what a company needs from us: its servers
                tested, its bugs first. Donations pay for everything else, and
                everything after. This is where you fund it.
              </p>
            </div>

            {lead && (
              <div className="panel panel--accent give__lead">
                <h2 className="panel__title give__lead-title">
                  <Mark platform={lead} size={22} /> {lead.name}
                </h2>
                <p className="panel__lead">{lead.note}</p>
                <div className="panel__foot">
                  <Button href={lead.url} size="lg" external>
                    Go to {lead.name} <Icon name="externalLink" size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <h2 className="give__heading">Or choose another route</h2>
          <ul className="give">
            {others.map((platform) => (
              <li key={platform.name}>
                <a
                  className="row row--icon give__row"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mark platform={platform} size={20} />
                  <span>
                    <span className="row__name">
                      {platform.name} <Icon name="externalLink" size={13} />
                    </span>
                    <span className="row__note">{platform.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="note">
            Recurring support is worth more than the same amount given once:
            it is the only kind that can be planned around. Building on
            Pimalaya, or running a mail service? See the{' '}
            <a href="/business/">partnerships</a> instead.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">The work</span>
          <h2 className="section__title">What you are funding</h2>
          <ul className="facts">
            <li>
              <span className="facts__value">{REPO_COUNT}</span>
              <span className="facts__note">repositories</span>
            </li>
            <li>
              <span className="facts__value">{APP_COUNT}</span>
              <span className="facts__note">apps</span>
            </li>
            <li>
              <span className="facts__value">{LIB_COUNT}</span>
              <span className="facts__note">libraries</span>
            </li>
            <li>
              <span className="facts__value">{DOMAIN_COUNT}</span>
              <span className="facts__note">domains: email, contacts, calendars, time</span>
            </li>
          </ul>
          <div className="section__body prose-block">
            <p>
              Most of that count is the layer nobody sees, I/O-free Rust
              libraries written <em>from the RFCs up</em>, and it is{' '}
              <strong>most of the work</strong>.
            </p>
            <p>
              All of it is free software, MIT or Apache-2.0.{' '}
              <strong>No paid tier, no telemetry, no gate.</strong> That is not
              going to change, and no amount of sponsorship unlocks anything,
              because there is nothing locked.
            </p>
            <p>
              What it costs is <strong>time</strong>, and time is exactly what
              grants and donations buy. Every hour on a protocol edge case, a
              provider's quirk, a bug you reported, exists because somebody{' '}
              <em>funded it</em>. Sponsorship is what turns your use of these
              tools into <strong>more of those hours</strong>.
            </p>
            <p>
              Sponsorship also pays for{' '}
              <strong>dedicated accounts at Microsoft and Google</strong>, so
              every release is tested against the real services, end to end,{' '}
              <em>without ever touching anyone's data</em>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split give__grants">
          <div>
            <span className="eyebrow">Grants</span>
            <h2 className="section__title">What grants already cover</h2>
            <p className="section__lead">
              Pimalaya has been funded for years by these two, and that support
              is real. What a grant cannot cover is everything that is{' '}
              <em>not a deliverable</em>: the issues answered, the regressions
              chased, the crates kept released, the next protocol nobody wrote
              a call for. That is the part sponsorship pays for.
            </p>
          </div>
          <ul className="logos">
            {funders.map((funder) => (
              <li key={funder.name}>
                <a href={funder.url} target="_blank" rel="noopener noreferrer">
                  <img src={funder.logo} alt={funder.name} height={48} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Beyond money</span>
            <h2 className="section__title">Other ways to contribute</h2>
            <p className="panel__lead give__beyond">
              Money is not the only thing that keeps this going, and time given
              directly is worth as much as time bought. A bug report with the
              steps to reproduce it, a documentation fix, a packaging update
              for your distribution, an answer to someone else's question in{' '}
              <a
                href="https://matrix.to/#/#pimalaya:matrix.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Matrix room
              </a>
              . Telling someone the tools exist counts too.{' '}
              <strong>None of that is a consolation prize.</strong>
            </p>
            <div className="panel__foot">
              <Button href="/community/" variant="secondary" size="md">
                Where to start <Icon name="arrowRight" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
