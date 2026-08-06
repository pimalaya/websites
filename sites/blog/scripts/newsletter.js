#!/usr/bin/env node
// Prepare a Buttondown email from a post's markdown source.
//
//   npm run newsletter -- <slug>
//
// Buttondown's composer is markdown-native, and its RSS-to-email automation is
// a paid feature, so sending is manual: this prints the subject (the post
// title) and a paste-ready markdown body — frontmatter stripped, root-relative
// links absolutized, a canonical link to the article appended. Paste the body
// into a new Buttondown email, set the subject, send.
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteUrl = 'https://blog.pimalaya.org'

const slug = process.argv[2]?.replace(/\.md$/, '')
if (!slug) {
  console.error('usage: npm run newsletter -- <slug>')
  process.exit(1)
}

const root = dirname(fileURLToPath(import.meta.url))
const raw = readFileSync(resolve(root, '..', 'posts', `${slug}.md`), 'utf-8')

const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
if (!match) {
  console.error(`posts/${slug}.md: missing frontmatter block`)
  process.exit(1)
}

const fm = {}
for (const line of match[1].split(/\r?\n/)) {
  const sep = line.indexOf(':')
  if (sep !== -1) fm[line.slice(0, sep).trim()] = line.slice(sep + 1).trim()
}
if (!fm.title) {
  console.error(`posts/${slug}.md: missing frontmatter key "title"`)
  process.exit(1)
}

const body = raw
  .slice(match[0].length)
  .trim()
  // Root-relative links only resolve on the site; make them absolute for mail.
  .replace(/\]\(\//g, `](${siteUrl}/`)

console.log(`Subject: ${fm.title}`)
console.log()
console.log(body)
console.log()
console.log(`[Read this post on the blog](${siteUrl}/${slug}/)`)
