import type { Post } from '../lib/posts'
import { formatDate } from '../lib/posts'
import { Icon } from '@pimalaya/shared'
import { Subscribe } from './Subscribe'
import './PostPage.css'

/* One article: header, the rendered markdown body, the subscribe box. */
export function PostPage({ post }: { post: Post }) {
  return (
    <>
      <article className="post">
        <div className="container post__container">
          <header className="post__header">
            <a className="post__back" href="/">
              <Icon name="arrowRight" size={16} /> All posts
            </a>
            <time className="post__date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__description">{post.description}</p>
          </header>

          {/* Trusted content: our own markdown, rendered at build time. */}
          <div
            className="post__body prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      <Subscribe />
    </>
  )
}
