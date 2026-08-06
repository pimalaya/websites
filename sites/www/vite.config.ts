import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
