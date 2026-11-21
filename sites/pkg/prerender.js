// Build-time pre-render for pkg.pimalaya.org. The shared machinery (template
// retargeting, module-script stripping, sitemap, robots) lives in
// @pimalaya/shared/prerender; this file only loads the server bundle. The
// page keeps its @NAME@ placeholders: the hub of pimalaya/packages fills them
// on each run (see src/App.tsx).
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { prerender } from '@pimalaya/shared/prerender'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')

const { renderPages } = await import(
  pathToFileURL(resolve(dist, 'server/entry-server.js')).href
)

prerender({
  dist,
  siteUrl: 'https://pkg.pimalaya.org',
  pages: renderPages(),
})
