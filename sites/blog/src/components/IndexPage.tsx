import { formatDate, posts, readingMinutes } from '../lib/posts'
import { Button, Icon } from '@pimalaya/shared'
import { Subscribe } from './Subscribe'
import './IndexPage.css'

/*
 * The blog front page. The masthead names the blog beside the very first
 * post (the oldest; posts are sorted newest first), which serves as the
 * blog's description and is featured as "Start here". Every other post
 * follows as a dated list, newest first, then the subscribe section.
 */
export function IndexPage() {
  const first = posts.at(-1)
  const rest = posts.filter((post) => post !== first)

  return (
    <>
      <section className="masthead">
        <div className="container masthead__inner">
          <div>
            <span className="eyebrow">Pimalaya blog</span>
            <h1 className="masthead__title">The logbook of the Pimalaya project</h1>
            <div className="masthead__cta">
              <Button href="#subscribe" size="lg">
                <Icon name="mail" size={18} /> Get new posts by email
              </Button>
              <Button href="/feed.xml" variant="secondary" size="lg">
                <Icon name="rss" size={18} /> RSS feed
              </Button>
            </div>
          </div>

          {first && (
            <a className="masthead__start" href={`/${first.slug}/`}>
              <span className="eyebrow">Start here</span>
              <span className="masthead__start-title">{first.title}</span>
              <span className="masthead__start-lead">{first.description}</span>
              <span className="masthead__start-more">
                Read the article · {readingMinutes(first)} min{' '}
                <Icon name="arrowRight" size={16} />
              </span>
            </a>
          )}
        </div>
      </section>

      <section className="post-index">
        <div className="container">
          <h2 className="post-index__heading">All posts</h2>
          <ul className="post-index__list">
            {rest.map((post) => (
              <li key={post.slug}>
                <a className="post-index__item" href={`/${post.slug}/`}>
                  <span className="post-index__meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{readingMinutes(post)} min read</span>
                  </span>
                  <span className="post-index__body">
                    <span className="post-index__title">{post.title}</span>
                    <span className="post-index__description">{post.description}</span>
                  </span>
                  <span className="post-index__arrow" aria-hidden="true">
                    <Icon name="arrowRight" size={20} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Subscribe />
    </>
  )
}
