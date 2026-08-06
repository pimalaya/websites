import { Button, Icon } from '@pimalaya/shared'
import './Subscribe.css'

/*
 * The blog is the source; RSS and the newsletter are two read-only views on
 * it. The form is a plain HTML POST to the Buttondown embed-subscribe
 * endpoint (https://buttondown.com/pimalaya), so it works on these
 * JavaScript-free pages.
 */
export function Subscribe() {
  return (
    <section className="subscribe on-dark" id="subscribe">
      <div className="container subscribe__inner">
        <span className="eyebrow subscribe__eyebrow">Follow along</span>
        <h2 className="subscribe__title">New posts, wherever you read</h2>
        <p className="subscribe__lead">
          Every article lands in the RSS feed and in your inbox (no tracking,
          unsubscribe anytime).
        </p>

        <div className="subscribe__actions">
          <Button href="/feed.xml" variant="secondary" size="lg">
            <Icon name="rss" size={18} /> RSS feed
          </Button>

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
        </div>

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
    </section>
  )
}
