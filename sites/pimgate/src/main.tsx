import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import '@pimalaya/shared/styles/theme.css'
import '@pimalaya/shared/styles/global.css'

/*
 * Dev-only entry: the production page is prerendered with the module script
 * stripped (see prerender.js), so this code never runs in a shipped page.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
