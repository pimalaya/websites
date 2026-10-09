import { Button, Icon } from '@pimalaya/shared'
import './Subscribe.css'

/*
 * The blog is the source; RSS and the newsletter are two read-only views on
 * it. The form is a plain HTML POST to the Buttondown embed-subscribe
 * endpoint (https://buttondown.com/pimalaya), so it works on these
 * JavaScript-free pages. Copy and the feed on the left, the form in a dark
 * card on the right, as on pimalaya.org.
 */
export function Subscribe() {
  return (
    <section className="subscribe" id="subscribe">
      <div className="container subscribe__inner">
        <div>
          <span className="eyebrow">Follow along</span>
          <h2 className="subscribe__title">New posts, wherever you read</h2>
          <p className="subscribe__lead">
            Every article lands in the RSS feed and in your inbox.
          </p>
          <div className="subscribe__actions">
            <Button href="/feed.xml" variant="secondary" size="md">
              <Icon name="rss" size={16} /> RSS feed
            </Button>
          </div>
        </div>

        <div className="subscribe__card on-dark">
          <h3 className="subscribe__card-title">New posts by email</h3>
          <p className="subscribe__card-lead">No tracking, unsubscribe anytime.</p>
          <form
            className="subscribe__form embeddable-buttondown-form"
            method="post"
            action="https://buttondown.com/api/emails/embed-subscribe/pimalaya"
          >
            <label className="subscribe__label" htmlFor="bd-email">
              Enter your email
            </label>
            <input
              className="subscribe__input"
              id="bd-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
            <button className="btn btn--primary btn--lg" type="submit">
              <Icon name="mail" size={18} /> Subscribe
            </button>
          </form>
          <p className="subscribe__powered-by">
            <a
              href="https://buttondown.com/refer/pimalaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Buttondown
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
