import { Subscribe } from './Subscribe'
import './Page.css'

/*
 * Where the open-source side talks, follows, contributes and integrates. It
 * replaces the separate Chat and News nav links, so every way in lives on one
 * page with a sentence saying what each is for.
 */

const org = 'https://github.com/pimalaya/.github/blob/master'

interface Block {
  title: string
  note: string
  links: { label: string; href: string }[]
}

const blocks: Block[] = [
  {
    title: 'Chat',
    note: 'Questions, help and development talk happen in the Matrix room.',
    links: [
      { label: '#pimalaya on Matrix', href: 'https://matrix.to/#/#pimalaya:matrix.org' },
    ],
  },
  {
    title: 'News',
    note: 'Releases and write-ups on the blog, short news on Mastodon, both in the newsletter below.',
    links: [
      { label: 'Blog', href: 'https://blog.pimalaya.org' },
      { label: 'RSS feed', href: 'https://blog.pimalaya.org/feed.xml' },
      { label: 'Mastodon', href: 'https://fosstodon.org/@pimalaya' },
    ],
  },
  {
    title: 'Contribute',
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
    note: 'Drive the CLIs from scripts and agents through their JSON output, or embed the I/O-free libraries.',
    links: [
      { label: 'Integrating Pimalaya', href: `${org}/INTEGRATING.md` },
      { label: 'How Pimalaya works', href: `${org}/ARCHITECTURE.md` },
      { label: 'Libraries and apps', href: '/ecosystem/' },
      { label: 'Built something? Get listed', href: '/ecosystem/' },
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
          <ul className="cards">
            {blocks.map((block) => (
              <li key={block.title}>
                <div className="cards__item">
                  <span className="cards__name">{block.title}</span>
                  <span className="cards__note">{block.note}</span>
                  <span className="cards__links">
                    {block.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          link.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Subscribe />
    </>
  )
}
