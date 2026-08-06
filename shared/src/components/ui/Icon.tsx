/*
 * Inline-SVG icon set: icons inherit currentColor, so they take the text colour
 * of wherever they sit. Add one by dropping an entry into paths.
 */

import type { ReactNode } from 'react'

type IconName = 'arrowRight' | 'github' | 'mastodon' | 'rss' | 'mail'

const paths: Record<IconName, ReactNode> = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.59.69.48A10 10 0 0 0 12 2z" />
  ),
  mastodon: (
    <path d="M21 13.6c-.3 1.5-2.6 3.1-5.2 3.4-1.4.2-2.7.3-4.1.2-2.2-.1-4-.6-4-.6v.7c.3 2.1 2.1 2.3 3.9 2.3 1.8.1 3.4 0 3.4 0v1.7s-1.3.1-2.8.1c-2.6 0-5.5-.1-6.9-2.4-.2-.4-.5-.9-.6-1.9-.2-1.4-.2-3.5-.2-4.8 0-3.4.2-4.4 1.9-6.2C7.8 3.6 12 3.7 12 3.7s4.2-.1 5.9 1.5c1.7 1.8 1.9 2.8 1.9 6.2 0 .8 0 1.6-.1 2.2z" />
  ),
  rss: (
    <>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
}

interface IconProps {
  name: IconName
  size?: number
  /* Toggle fill vs stroke; filled and line icons each look right only one way,
     so it defaults per filledByDefault. */
  filled?: boolean
}

const filledByDefault: IconName[] = ['github', 'mastodon']

export function Icon({ name, size = 22, filled }: IconProps) {
  const isFilled = filled ?? filledByDefault.includes(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export type { IconName }
