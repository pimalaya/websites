import { Icon } from '@pimalaya/shared'

import { mailto, signIn } from '../lib/offers'
import './Page.css'

/*
 * The planned one-step Gmail and Microsoft sign-in, for individual users.
 * Announced with its price and a call to commit, never as available: the
 * service is built only if enough people commit to cover the yearly Gmail
 * audit and the server.
 */
export function SignInPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">
            Sign-in <span className="chip">planned</span>
          </span>
          <h1 className="page-head__title">
            Gmail and Microsoft 365,
            <br />
            signed in with one click
          </h1>
          <p className="page-head__lead">{signIn.problem}</p>
        </div>
      </section>

      <div className="page">
        <div className="container">
          <h2 className="page__section">What we plan</h2>
          <ul className="page__list">
            {signIn.benefits.map((benefit) => (
              <li key={benefit.title}>
                <strong>{benefit.title}</strong> {benefit.text}
              </li>
            ))}
          </ul>
          <p className="page__price">
            <strong>{signIn.price}</strong> per year. Not built yet: we build
            it once enough people commit to cover the audit and the server.
          </p>
          <a className="page__cta" href={mailto(signIn.subject)}>
            Tell us you would pay <Icon name="arrowRight" size={16} />
          </a>

          <h2 className="page__section">Building a product on it?</h2>
          <p className="page__lead">
            This is for people using the Pimalaya tools themselves. If your
            company ships them, or the libraries, inside its own product, see
            the <a href="/business/#integrators">integrator partnership</a>.
          </p>
        </div>
      </div>
    </>
  )
}
