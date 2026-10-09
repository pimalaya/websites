import {
  apps,
  byName,
  community,
  libraries,
  retired,
  repoUrl,
} from '../lib/products'
import type { CommunityProject, Product } from '../lib/products'
import { Icon } from '@pimalaya/shared'
import { StatusBadge } from './ui/StatusBadge'
import './Page.css'
import './EcosystemPage.css'

/*
 * The truthful map of the organisation: every repository that matters, one
 * row each, statuses maintained by hand. This page exists so the home page
 * can stay a showcase of what is installable today while nothing gets
 * hidden, including the frozen and deprecated crates.
 *
 * The libraries come first because they are what the apps are made of, then
 * the apps, then what the community built on both. A row of anchors under
 * the header jumps to each section, since the page is long.
 */

function ProductTable({ products }: { products: Product[] }) {
  const rows = [...products].sort(byName)
  return (
    <div className="eco__scroll">
      <table className="eco__table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Domain</th>
            <th scope="col">Kind</th>
            <th scope="col">Status</th>
            <th scope="col">What it does</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((product) => (
            <tr key={product.name}>
              <td>
                <a
                  className="eco__repo"
                  href={repoUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                </a>
              </td>
              <td className="eco__muted">{product.domain}</td>
              <td className="eco__muted">{product.kind}</td>
              <td>
                <StatusBadge status={product.status} />
              </td>
              <td className="eco__description">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/*
 * Third-party work gets its own table: no status column, because grading
 * other people's projects is not ours to do, and an author column instead,
 * because the credit is the point.
 */
function CommunityTable({ projects }: { projects: CommunityProject[] }) {
  return (
    <div className="eco__scroll">
      <table className="eco__table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Kind</th>
            <th scope="col">What it does</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.url}>
              <td>
                <a
                  className="eco__repo"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                {project.partner && (
                  <>
                    {' '}
                    <a className="status status--young" href="/business/#integrators">
                      partner
                    </a>
                  </>
                )}
              </td>
              <td className="eco__muted">{project.author}</td>
              <td className="eco__muted">{project.kind}</td>
              <td className="eco__description">{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const sections = [
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'libraries', label: 'Libraries' },
  { id: 'apps', label: 'Apps' },
  { id: 'community', label: 'From the community' },
  { id: 'retired', label: 'Frozen and retired' },
  { id: 'experiments', label: 'Experiments' },
]

export function EcosystemPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">The ecosystem</span>
          <h1 className="page-head__title">Every repository that matters</h1>
          <p className="page-head__lead">
            The honest map of the{' '}
            <a
              href="https://github.com/pimalaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pimalaya organisation
            </a>
            : what you can install today, what is brewing, and what has been
            retired. Statuses are curated by hand; when in doubt, the
            repository's README is the truth.
          </p>
          <ul className="facts">
            <li>
              <span className="facts__value">{libraries.length}</span>
              <span className="facts__note">libraries listed</span>
            </li>
            <li>
              <span className="facts__value">{apps.length}</span>
              <span className="facts__note">apps</span>
            </li>
            <li>
              <span className="facts__value">{community.length}</span>
              <span className="facts__note">community projects</span>
            </li>
            <li>
              <span className="facts__value">{retired.length}</span>
              <span className="facts__note">frozen or retired</span>
            </li>
          </ul>
          <nav className="toc" aria-label="On this page">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="container">
          <span className="eyebrow">Roadmap</span>
          <h2 className="section__title">Where the work goes next</h2>
          <div className="section__body split">
            <div className="prose-block">
              <p>
                Mail is now the most complete domain of the ecosystem,
                especially with Himalaya v2. The focus therefore moves to what
                surrounds it: <strong>sync</strong>, <strong>watch</strong>,
                then <strong>contacts</strong>, then <strong>calendar</strong>.
              </p>
              <p>
                Sync comes first, as a consolidation: everything sync-related
                converges into one stack, the Neverest CLI on top of io-pimdir,
                which holds both the pimdir store and its sync engine. Watch
                joins the same movement with Carillon, formerly mirador.
              </p>
              <p>
                Once sync and watch settle, the contacts domain gets the same
                treatment around Cardamum, then the calendar domain follows
                around Calendula.
              </p>
            </div>
            <ol className="steps eco__steps">
              <li className="steps__now">
                <span className="steps__name">Sync</span>
                <span className="steps__note">Neverest on top of io-pimdir</span>
              </li>
              <li>
                <span className="steps__name">Watch</span>
                <span className="steps__note">Carillon, formerly mirador</span>
              </li>
              <li>
                <span className="steps__name">Contacts</span>
                <span className="steps__note">around Cardamum</span>
              </li>
              <li>
                <span className="steps__name">Calendar</span>
                <span className="steps__note">around Calendula</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section" id="libraries">
        <div className="container">
          <span className="eyebrow">Libraries</span>
          <h2 className="section__title">
            The foundation <span className="section__count">{libraries.length}</span>
          </h2>
          <p className="section__lead">
            Every app is a thin frontend over these Rust crates. A curated
            selection, as the organisation holds more (per-store coroutines,
            toolkit crates, experiments). The io- prefix marks I/O-free,
            sans-I/O coroutine libraries: you bring the sockets, they bring
            the protocol.
          </p>
          <ProductTable products={libraries} />
        </div>
      </section>

      <section className="section" id="apps">
        <div className="container">
          <span className="eyebrow">Apps</span>
          <h2 className="section__title">
            End-user tools <span className="section__count">{apps.length}</span>
          </h2>
          <p className="section__lead">
            Anything marked in development has no release yet and is not
            advertised on the home page.
          </p>
          <ProductTable products={apps} />
        </div>
      </section>

      <section className="section" id="community">
        <div className="container">
          <span className="eyebrow">From the community</span>
          <h2 className="section__title">
            Built by others <span className="section__count">{community.length}</span>
          </h2>
          <p className="section__lead">
            Front-ends and integrations built by other people on top of the
            tools and the crates, none of them maintained by the organisation.
            The list is curated by hand and certainly incomplete: if you built
            something, open a pull request on the{' '}
            <a
              href="https://github.com/pimalaya/websites"
              target="_blank"
              rel="noopener noreferrer"
            >
              websites repository
            </a>{' '}
            and it lands here.
          </p>
          <CommunityTable projects={community} />
        </div>
      </section>

      <section className="section" id="retired">
        <div className="container">
          <span className="eyebrow">Frozen and retired</span>
          <h2 className="section__title">
            Kept for history <span className="section__count">{retired.length}</span>
          </h2>
          <p className="section__lead">
            Public for existing users, but receiving no new features. Frozen
            aggregators are superseded by protocol-direct clients; deprecated
            crates should not be depended on.
          </p>
          <ProductTable products={retired} />
        </div>
      </section>

      <section className="section" id="experiments">
        <div className="container">
          <span className="eyebrow">Experiments</span>
          <h2 className="section__title">One idea each, before the roadmap</h2>
          <p className="section__lead">
            Running on the side, each experiment validates one idea before it
            is allowed to shape the roadmap.
          </p>
          <ul className="section__body eco__experiments">
            <li className="panel">
              <h3 className="panel__title">Carillon</h3>
              <p className="panel__lead">
                Watching as a service: a server holds the IMAP connections,
                waits for changes, and turns them into notifications, so no
                client has to keep a connection (and a battery) alive. It
                validated the watch flow end to end against real providers;
                that flow is what the roadmap folds into the watch tooling.
                Its paid, hosted side is paused for now.
              </p>
            </li>
            <li className="panel">
              <h3 className="panel__title">pimalaya-android</h3>
              <p className="panel__lead">
                Validates that the I/O-free Rust libraries can power a real
                mobile app: the protocol logic runs in Rust, compiled for
                Android, while the platform side (TLS, storage, the system
                contacts) stays native. It started as a contacts app and
                became the whole thing, mail, contacts and calendars behind
                one store and one account list, which is the second point it
                validates: the three domains belong in one app, not three.
                Contacts is where it is mature; mail and calendar read today
                and will write later. A blog post about the approach is coming
                soon.
              </p>
            </li>
            <li className="panel">
              <h3 className="panel__title">pimalaya-linux</h3>
              <p className="panel__lead">
                The same idea in a third ecosystem: a native GTK4 and
                libAdwaita desktop app for mail and contacts, built on the
                very same Rust cores, to prove the libraries fit any UI
                (terminal, mobile or desktop) without rewriting the protocols.
                It reads the same configuration file as the command-line
                tools, so one account definition serves all of them. Only the
                application shell exists so far.
              </p>
            </li>
          </ul>

          <p className="eco__all">
            <a
              href="https://github.com/orgs/pimalaya/repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all repositories on GitHub <Icon name="externalLink" size={15} />
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
