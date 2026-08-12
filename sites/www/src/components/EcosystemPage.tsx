import {
  apps,
  byStatusThenPopularity,
  community,
  libraries,
  retired,
  repoUrl,
} from '../lib/products'
import type { CommunityProject, Product } from '../lib/products'
import { Icon } from '@pimalaya/shared'
import { StatusBadge } from './ui/StatusBadge'
import './EcosystemPage.css'

/*
 * The truthful map of the organisation: every repository that matters, one
 * row each, statuses maintained by hand. This page exists so the home page
 * can stay a showcase of what is installable today while nothing gets
 * hidden, including the frozen and deprecated crates.
 *
 * The libraries come first because they are what the apps are made of, then
 * the apps, then what the community built on both.
 */

function ProductTable({ products }: { products: Product[] }) {
  const rows = [...products].sort(byStatusThenPopularity)
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
              <td>{product.domain}</td>
              <td>{product.kind}</td>
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
              </td>
              <td>{project.author}</td>
              <td>{project.kind}</td>
              <td className="eco__description">{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function EcosystemPage() {
  return (
    <>
      <section className="eco-head">
        <div className="container">
          <span className="eyebrow">The ecosystem</span>
          <h1 className="eco-head__title">Every repository that matters</h1>
          <p className="eco-head__lead">
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
        </div>
      </section>

      <section className="eco">
        <div className="container">
          <h2 className="eco__section">Roadmap</h2>
          <div className="eco__prose">
            <p>
              Mail is now the most complete domain of the ecosystem,
              especially with Himalaya v2. The focus therefore moves to what
              surrounds it: <strong>sync</strong>, <strong>watch</strong>,
              then <strong>contacts</strong>, then <strong>calendar</strong>.
            </p>
            <p>
              Sync comes first, as a consolidation: everything sync-related
              converges into one stack, the Neverest CLI on top of the
              io-replica engine and the pimdir store. Watch joins the same
              movement, with mirador rebranded to Carillon.
            </p>
            <p>
              Once sync and watch settle, the contacts domain gets the same
              treatment around Cardamum, then the calendar domain follows
              around Calendula.
            </p>
          </div>

          <h2 className="eco__section">Libraries</h2>
          <p className="eco__section-lead">
            The foundation: every app is a thin frontend over these Rust
            crates. A curated selection, as the organisation holds more
            (per-store coroutines, toolkit crates, experiments).
            The io- prefix marks I/O-free, sans-I/O coroutine libraries: you
            bring the sockets, they bring the protocol.
          </p>
          <ProductTable products={libraries} />

          <h2 className="eco__section">Apps</h2>
          <p className="eco__section-lead">
            End-user tools. Anything marked in development has no release yet
            and is not advertised on the home page.
          </p>
          <ProductTable products={apps} />

          <h2 className="eco__section">From the community</h2>
          <p className="eco__section-lead">
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

          <h2 className="eco__section">Frozen and retired</h2>
          <p className="eco__section-lead">
            Kept public for history and existing users, but receiving no new
            features. Frozen aggregators are superseded by protocol-direct
            clients; deprecated crates should not be depended on.
          </p>
          <ProductTable products={retired} />

          <h2 className="eco__section">Experiments</h2>
          <p className="eco__section-lead">
            Running on the side, each experiment validates one idea before it
            is allowed to shape the roadmap.
          </p>
          <div className="eco__prose">
            <p>
              <strong>Carillon</strong> explores watching as a service: a
              server holds the IMAP connections, waits for changes, and turns
              them into notifications, so no client has to keep a connection
              (and a battery) alive. It validated the watch flow end to end
              against real providers; that flow is what the roadmap folds
              into the watch tooling. Its paid, hosted side is paused for
              now.
            </p>
            <p>
              <strong>pimalaya-android</strong> validates that the I/O-free
              Rust libraries can power a real mobile app: the protocol logic
              runs in Rust, compiled for Android, while the platform side
              (TLS, storage, the system contacts) stays native. It started as
              a contacts app and became the whole thing, mail, contacts and
              calendars behind one store and one account list, which is the
              second point it validates: the three domains belong in one app,
              not three. Contacts is where it is mature; mail and calendar
              read today and will write later. A blog post about the approach
              is coming soon.
            </p>
            <p>
              <strong>pimalaya-linux</strong> carries the same idea to a third
              ecosystem: a native GTK4 and libAdwaita desktop app for mail and
              contacts, built on the very same Rust cores, to prove the
              libraries fit any UI (terminal, mobile or desktop) without
              rewriting the protocols. It reads the same configuration file as
              the command-line tools, so one account definition serves all of
              them. Only the application shell exists so far.
            </p>
          </div>

          <p className="eco__all">
            <a
              href="https://github.com/orgs/pimalaya/repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all repositories on GitHub <Icon name="arrowRight" size={14} />
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
