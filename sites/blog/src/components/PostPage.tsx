import type { Post } from '../lib/posts'
import { formatDate, posts, readingMinutes } from '../lib/posts'
import { Icon } from '@pimalaya/shared'
import { Subscribe } from './Subscribe'
import './PostPage.css'

/*
 * One article: header (date and reading time, title, description), the
 * rendered markdown body, links to the neighbouring posts, the subscribe
 * section. Posts are sorted newest first, so the previous index entry is the
 * newer post and the next one the older.
 */
export function PostPage({ post }: { post: Post }) {
  const index = posts.indexOf(post)
  const newer = index > 0 ? posts[index - 1] : undefined
  const older = index < posts.length - 1 ? posts[index + 1] : undefined

  return (
    <>
      <article className="post">
        <div className="container post__container">
          <header className="post__header">
            <a className="post__back" href="/">
              <Icon name="arrowRight" size={16} /> All posts
            </a>
            <p className="post__meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post)} min read</span>
            </p>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__description">{post.description}</p>
          </header>

          {/* Trusted content: our own markdown, rendered at build time. */}
          <div
            className="post__body prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {(newer || older) && (
            <nav className="post__more" aria-label="More posts">
              {older && (
                <a className="post__more-item" href={`/${older.slug}/`}>
                  <span className="post__more-label">Older</span>
                  <span className="post__more-title">{older.title}</span>
                </a>
              )}
              {newer && (
                <a className="post__more-item post__more-item--newer" href={`/${newer.slug}/`}>
                  <span className="post__more-label">Newer</span>
                  <span className="post__more-title">{newer.title}</span>
                </a>
              )}
            </nav>
          )}
        </div>
      </article>

      <Subscribe />
    </>
  )
}
