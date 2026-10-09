import { Icon } from '@pimalaya/shared'
import type { IconName } from '@pimalaya/shared'

import { Subscribe } from './Subscribe'
import './Page.css'
import './CommunityPage.css'

/*
 * Where the open-source side talks, follows, contributes and integrates. It
 * replaces the separate Chat and News nav links, so every way in lives on one
 * page with a sentence saying what each is for, and each link as a row.
 */

const org = 'https://github.com/pimalaya/.github/blob/master'

interface Block {
  title: string
  icon: IconName
  note: string
  links: { label: string; href: string }[]
}

const blocks: Block[] = [
  {
    title: 'Chat',
    icon: 'chat',
    note: 'Questions, help and development talk happen in the Matrix room.',
    links: [
      { label: '#pimalaya on Matrix', href: 'https://matrix.to/#/#pimalaya:matrix.org' },
    ],
  },
  {
    title: 'News',
    icon: 'article',
    note: 'Releases and write-ups on the blog, short news on Mastodon, both in the newsletter below.',
    links: [
      { label: 'Blog', href: 'https://blog.pimalaya.org' },
      { label: 'RSS feed', href: 'https://blog.pimalaya.org/feed.xml' },
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya' },
    ],
  },
  {
    title: 'Contribute',
    icon: 'github',
    note: 'Bug reports with steps to reproduce, documentation fixes, packages for your distribution, code.',
    links: [
      { label: 'How to contribute', href: `${org}/CONTRIBUTING.md` },
      { label: 'Guidelines', href: `${org}/GUIDELINES.md` },
      { label: 'AI policy', href: `${org}/AI_POLICY.md` },
      { label: 'GitHub organisation', href: 'https://github.com/pimalaya' },
    ],
  },
  {
    title: 'Integrate',
    icon: 'code',
    note: 'Drive the CLIs from scripts and agents through their JSON output, or embed the I/O-free libraries.',
    links: [
      { label: 'Integrating Pimalaya', href: `${org}/INTEGRATING.md` },
      { label: 'How Pimalaya works', href: `${org}/ARCHITECTURE.md` },
      { label: 'Libraries and apps', href: '/ecosystem/' },
      { label: 'Built something? Get listed', href: '/ecosystem/#community' },
    ],
  },
]

export function CommunityPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Community</span>
          <h1 className="page-head__title">Talk, follow, contribute, build</h1>
          <p className="page-head__lead">
            Pimalaya is built in the open. Here is where the conversation
            happens and how to take part in it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="community__blocks">
            {blocks.map((block) => (
              <li key={block.title} className="panel">
                <h2 className="panel__title community__title">
                  <span className="community__icon">
                    <Icon name={block.icon} size={20} />
                  </span>
                  {block.title}
                </h2>
                <p className="panel__lead">{block.note}</p>
                <ul className="rows community__links">
                  {block.links.map((link) => {
                    const external = link.href.startsWith('http')
                    return (
                      <li key={link.label}>
                        <a
                          className="row"
                          href={link.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                        >
                          <span className="row__name">
                            {link.label}
                            <Icon
                              name={external ? 'externalLink' : 'arrowRight'}
                              size={14}
                            />
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Subscribe />
    </>
  )
}
