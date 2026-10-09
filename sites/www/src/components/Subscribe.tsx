import { Button, Icon } from '@pimalaya/shared'
import './Subscribe.css'

/*
 * The newsletter form alone: a plain HTML POST to the Buttondown
 * embed-subscribe endpoint (https://buttondown.com/pimalaya), so it works on
 * these JavaScript-free pages. The id keeps label and input paired when a
 * page carries more than one form.
 */
export function SubscribeForm({ id = 'bd-email' }: { id?: string }) {
  return (
    <form
      className="subscribe__form embeddable-buttondown-form"
      method="post"
      action="https://buttondown.com/api/emails/embed-subscribe/pimalaya"
    >
      <label className="subscribe__label" htmlFor={id}>
        Enter your email
      </label>
      <input
        className="subscribe__input"
        id={id}
        type="email"
        name="email"
        required
        placeholder="you@example.com"
      />
      <button className="btn btn--primary btn--lg" type="submit">
        <Icon name="mail" size={18} /> Subscribe
      </button>
    </form>
  )
}

/*
 * The blog is the canonical news source; RSS and the newsletter are two
 * read-only views on it. Copy and the two reading routes on the left, the
 * newsletter form in a dark card on the right, like the home page.
 */
export function Subscribe() {
  return (
    <section className="subscribe" id="subscribe">
      <div className="container subscribe__inner">
        <div>
          <span className="eyebrow">Follow along</span>
          <h2 className="subscribe__title">Where the project talks</h2>
          <p className="subscribe__lead">
            News lives on the blog; everything else points to it. Read it in
            your feed reader or get new posts by email.
          </p>
          <div className="subscribe__actions">
            <Button
              href="https://blog.pimalaya.org"
              variant="secondary"
              size="md"
              external
            >
              <Icon name="article" size={16} /> Read the blog
            </Button>
            <Button
              href="https://blog.pimalaya.org/feed.xml"
              variant="secondary"
              size="md"
              external
            >
              <Icon name="rss" size={16} /> RSS feed
            </Button>
          </div>
        </div>

        <div className="subscribe__card on-dark">
          <h3 className="subscribe__card-title">New posts by email</h3>
          <p className="subscribe__card-lead">No tracking, unsubscribe anytime.</p>
          <SubscribeForm />
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
