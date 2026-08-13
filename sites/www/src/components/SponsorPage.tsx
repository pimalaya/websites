import { Icon } from '@pimalaya/shared'

import {
  APP_COUNT,
  DOMAIN_COUNT,
  funders,
  LIB_COUNT,
  platforms,
  REPO_COUNT,
} from '../lib/sponsors'
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
 * give read three sections to find out where.
 */

export function SponsorPage() {
  return (
    <>
      <section className="sponsor-head">
        <div className="container">
          <span className="eyebrow">Sponsor</span>
          <h1 className="sponsor-head__title">
            Pimalaya is free software,
            <br />
            funded entirely by grants and donations
          </h1>
          <p className="sponsor-head__lead">
            Grants pay for named pieces of work, for a fixed period. Donations
            pay for everything else, and everything after. This is where you
            fund it.
          </p>
          <ul className="give">
            {platforms.map((platform, index) => (
              <li key={platform.name}>
                <a
                  className={`give__item${index === 0 ? ' give__item--lead' : ''}`}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="give__head">
                    <span className="give__mark" aria-hidden="true">
                      {platform.icon ? (
                        <Icon name={platform.icon} size={22} />
                      ) : (
                        <span className="give__monogram">td</span>
                      )}
                    </span>
                    <span className="give__name">
                      {platform.name} <Icon name="externalLink" size={14} />
                    </span>
                  </span>
                  <span className="give__note">{platform.note}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="give__foot">
            Recurring support is worth more than the same amount given once:
            it is the only kind that can be planned around.
          </p>
        </div>
      </section>

      <section className="sponsor">
        <div className="container">
          <h2 className="sponsor__section">What you are funding</h2>
          <div className="sponsor__prose">
            <p>
              <strong>{REPO_COUNT} repositories</strong> including {' '}
              <strong>{APP_COUNT} apps</strong> and{' '}
              <strong>{LIB_COUNT} libraries</strong>, across{' '}
              <strong>{DOMAIN_COUNT} domains</strong> (email, contacts,
              calendars, time). Most of that count is the layer nobody sees,
              I/O-free Rust libraries written <em>from the RFCs up</em>, and it
              is <strong>most of the work</strong>.
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
          </div>

          <h2 className="sponsor__section">What grants already cover</h2>
          <p className="sponsor__section-lead">
            Pimalaya has been funded for years by these two, and that support
            is real. What a grant cannot cover is everything that is{' '}
            <em>not a deliverable</em>: the issues answered, the regressions
            chased, the crates kept released, the next protocol nobody wrote a
            call for. That is the part sponsorship pays for.
          </p>
          <ul className="funders">
            {funders.map((funder) => (
              <li key={funder.name}>
                <a
                  className="funders__item"
                  href={funder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={funder.logo} alt={funder.name} height={44} />
                </a>
              </li>
            ))}
          </ul>

          <h2 className="sponsor__section">Other ways to contribute</h2>
          <div className="sponsor__prose">
            <p>
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
          </div>
        </div>
      </section>
    </>
  )
}
