import { Icon } from '@pimalaya/shared'

import { funders, platforms, REPO_COUNT } from '../lib/sponsors'
import './SponsorPage.css'

/*
 * The funding page, and the only funding surface the organisation controls.
 * GitHub renders FUNDING.yml as an unordered row of payment buttons with no
 * room for a sentence, so everything that needs saying about the money is
 * said here and the buttons point at it.
 *
 * The tiers are deliberately absent. They live on GitHub Sponsors, which owns
 * the amounts and the billing; repeating them here would only be a second
 * copy to keep in step. This page carries what GitHub cannot: who maintains
 * this, what the money buys, and every route it can take.
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
          <h1 className="sponsor-head__title">Pimalaya is one person</h1>
          <p className="sponsor-head__lead">
            One maintainer, and an ecosystem that keeps working for exactly as
            long as I can afford the time. This is where you fund it.
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
              <strong>{REPO_COUNT} repositories</strong>: Himalaya for email,
              Cardamum for contacts, Calendula for calendars, Neverest for
              sync, and underneath them the layer nobody sees, a set of
              I/O-free Rust libraries implementing IMAP, SMTP, JMAP, CalDAV,
              CardDAV, vCard, iCalendar, OAuth and SASL <em>from the RFCs
              up</em>. That substrate is why these tools work against servers
              that disagree with each other, and it is{' '}
              <strong>most of the work</strong>.
            </p>
            <p>
              All of it is free software, MIT or Apache-2.0.{' '}
              <strong>No paid tier, no telemetry, no gate.</strong> That is not
              going to change, and no amount of sponsorship unlocks anything,
              because there is nothing locked.
            </p>
            <p>
              What it costs is <strong>time</strong>. Every hour on a protocol
              edge case, a provider's quirk, a bug you reported, is an hour{' '}
              <em>not billed elsewhere</em>. Sponsorship converts your use of
              these tools into time I can spend on them: the difference between
              a project I <strong>maintain</strong> and a hobby I{' '}
              <em>get to on weekends</em>.
            </p>
          </div>

          <h2 className="sponsor__section">What grants already cover</h2>
          <p className="sponsor__section-lead">
            Pimalaya has been funded for years by these two, and that support
            is real. It is also specific: a grant pays for a{' '}
            <em>named piece of work</em>, for a fixed period. Sponsorship pays
            for everything around it, the issues answered and the regressions
            chased and the crates kept released, none of which is a deliverable
            anyone can apply for.
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

          <h2 className="sponsor__section">If you cannot give money</h2>
          <div className="sponsor__prose">
            <p>
              Then give something that also costs you time. A bug report with
              the steps to reproduce it, a documentation fix, a packaging
              update for your distribution, an answer to someone else's
              question in{' '}
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
