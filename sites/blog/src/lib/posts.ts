/*
 * The markdown pipeline: posts/<slug>.md files are the source of truth, pulled
 * in as raw strings at build time, split into frontmatter + body, and rendered
 * to HTML with marked (GFM) and highlight.js (build-time syntax colours; the
 * shipped pages stay JavaScript-free).
 */

import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import c from 'highlight.js/lib/languages/c'
import diff from 'highlight.js/lib/languages/diff'
import ini from 'highlight.js/lib/languages/ini'
import json from 'highlight.js/lib/languages/json'
import kotlin from 'highlight.js/lib/languages/kotlin'
import nix from 'highlight.js/lib/languages/nix'
import plaintext from 'highlight.js/lib/languages/plaintext'
import rust from 'highlight.js/lib/languages/rust'
import shell from 'highlight.js/lib/languages/shell'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('c', c)
hljs.registerLanguage('diff', diff)
hljs.registerLanguage('ini', ini) // also covers TOML
hljs.registerLanguage('json', json)
hljs.registerLanguage('kotlin', kotlin)
hljs.registerLanguage('nix', nix)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('yaml', yaml)
hljs.registerAliases(['toml'], { languageName: 'ini' })
hljs.registerAliases(['ts', 'tsx', 'js', 'jsx'], { languageName: 'typescript' })
hljs.registerAliases(['sh', 'console'], { languageName: 'bash' })
hljs.registerAliases(['html', 'svg'], { languageName: 'xml' })

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
)

export interface Post {
  /* Filename without extension; the page lands at /<slug>/. */
  slug: string
  title: string
  description: string
  /* YYYY-MM-DD, from the frontmatter. */
  date: string
  /* Rendered article body. */
  html: string
}

interface Frontmatter {
  [key: string]: string
}

/*
 * Minimal frontmatter: a leading `---` block of flat `key: value` string
 * pairs. No YAML lists or nesting: posts only need title, description, date
 * and the optional draft flag, so a real YAML parser would be dead weight.
 */
function parseFrontmatter(raw: string, slug: string): { fm: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!match) throw new Error(`posts/${slug}.md: missing frontmatter block`)

  const fm: Frontmatter = {}
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue
    const sep = line.indexOf(':')
    if (sep === -1) throw new Error(`posts/${slug}.md: bad frontmatter line: ${line}`)
    fm[line.slice(0, sep).trim()] = line
      .slice(sep + 1)
      .trim()
      .replace(/^["'](.*)["']$/, '$1')
  }

  return { fm, body: raw.slice(match[0].length) }
}

function requireKey(fm: Frontmatter, key: string, slug: string): string {
  const value = fm[key]
  if (!value) throw new Error(`posts/${slug}.md: missing frontmatter key "${key}"`)
  return value
}

const sources = import.meta.glob('../../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/* Every published post, newest first. Fails the build on a malformed post. */
export const posts: Post[] = Object.entries(sources)
  .map(([path, raw]) => {
    const slug = path.replace(/^.*\//, '').replace(/\.md$/, '')
    const { fm, body } = parseFrontmatter(raw, slug)
    const date = requireKey(fm, 'date', slug)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
      throw new Error(`posts/${slug}.md: date must be YYYY-MM-DD, got "${date}"`)
    return {
      slug,
      title: requireKey(fm, 'title', slug),
      description: requireKey(fm, 'description', slug),
      date,
      draft: fm.draft === 'true',
      html: marked.parse(body, { async: false }),
    }
  })
  .filter((post) => !post.draft)
  .map(({ draft: _draft, ...post }) => post)
  .sort((a, b) => b.date.localeCompare(a.date))

/* "2026-08-02" -> "August 2, 2026", without involving the build clock. */
export function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${months[month - 1]} ${day}, ${year}`
}
