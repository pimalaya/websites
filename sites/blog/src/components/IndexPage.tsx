import { formatDate, posts } from '../lib/posts'
import { Button, Icon } from '@pimalaya/shared'
import { Subscribe } from './Subscribe'
import './IndexPage.css'

/*
 * The blog front page. The very first post (the oldest; posts are sorted
 * newest first) opens the page as a hero and serves as the blog's
 * description; the remaining posts follow as the index, then the subscribe
 * box.
 */
export function IndexPage() {
  const first = posts.at(-1)
  const rest = posts.filter((post) => post !== first)

  return (
    <>
      {first && (
        <section className="masthead">
          <div className="container">
            <span className="eyebrow">Start here</span>
            <h1 className="masthead__title">{first.title}</h1>
            <p className="masthead__lead">{first.description}</p>
            <div className="masthead__cta">
              <Button href={`/${first.slug}/`} size="lg">
                Read the article <Icon name="arrowRight" size={18} />
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="post-index">
        <div className="container">
          <ul className="post-index__list">
            {rest.map((post) => (
              <li key={post.slug}>
                <a className="post-index__item" href={`/${post.slug}/`}>
                  <time className="post-index__date" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <div className="post-index__body">
                    <h2 className="post-index__title">{post.title}</h2>
                    <p className="post-index__description">{post.description}</p>
                    <span className="post-index__more">
                      Read the article <Icon name="arrowRight" size={16} />
                    </span>
                  </div>
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
