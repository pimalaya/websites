import type { ReactNode } from 'react'

/* Centers content and applies the shared max-width + horizontal padding. */
export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>
}
