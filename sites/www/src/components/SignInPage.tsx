import { Button, Icon } from '@pimalaya/shared'

import { mailto, signIn } from '../lib/offers'
import './Page.css'

/*
 * The planned one-step Gmail and Microsoft sign-in, for individual users.
 * Announced with its price and a call to commit, never as available: the
 * service is built only if enough people commit to cover the yearly Gmail
 * audit and the server. The price and the call sit beside the problem, so
 * the page reads as a question to the visitor rather than a product page.
 */
export function SignInPage() {
  return (
    <>
      <section className="page-head">
        <div className="container page-head__split">
          <div>
            <span className="eyebrow">
              Sign-in <span className="chip">planned</span>
            </span>
            <h1 className="page-head__title">
              Gmail and Microsoft 365, signed in with one click
            </h1>
            <p className="page-head__lead">{signIn.problem}</p>
          </div>

          <div className="panel panel--accent">
            <p className="price">
              <span className="price__value">{signIn.price}</span>
              <span className="price__unit">per year</span>
            </p>
            <p className="panel__lead">
              Not built yet: we build it once enough people commit to cover
              the audit and the server.
            </p>
            <div className="panel__foot">
              <Button href={mailto(signIn.subject)} size="lg">
                Tell us you would pay <Icon name="arrowRight" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What we plan</span>
          <h2 className="section__title">How it would work</h2>
          <ul className="section__body points">
            {signIn.benefits.map((benefit) => (
              <li key={benefit.title}>
                <span className="points__title">{benefit.title}</span>
                {benefit.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <h2 className="panel__title">Building a product on it?</h2>
            <p className="panel__lead">
              This is for people using the Pimalaya tools themselves. If your
              company ships them, or the libraries, inside its own product, see
              the <a href="/business/#integrators">integrator partnership</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
