import { defineConfig } from 'vite'
import type { PluginOption, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'

/*
 * Serve the RSS feed in dev too. The built site emits dist/feed.xml at
 * prerender time, so without this the dev server would 404 on /feed.xml.
 */
function devFeed(): PluginOption {
  return {
    name: 'dev-feed',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/feed.xml', (_req, res, next) => {
        server
          .ssrLoadModule('/src/lib/feed.ts')
          .then(({ buildFeed }) => {
            res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
            res.end(buildFeed())
          })
          .catch(next)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devFeed()],
  // The shared package is TypeScript source consumed straight from the
  // workspace: bundle it (client and SSR alike) instead of externalizing or
  // prebundling it.
  ssr: {
    noExternal: ['@pimalaya/shared'],
  },
  optimizeDeps: {
    exclude: ['@pimalaya/shared'],
  },
})
