import './Logo.css'

/*
 * Pimalaya wordmark: the official Pimalaya "P" (from pimalaya/.github
 * logo.svg, pink gradient kept as-is: it is the brand, in both light and dark
 * chrome) beside the name, plus an optional small tag naming the property
 * ("blog", "pimgate"...). The gradient id is derived from the variant so the
 * nav (light) and footer (dark) instances on one page never collide.
 */
export function Logo({ onDark = false, tag }: { onDark?: boolean; tag?: string }) {
  const gid = onDark ? 'pimalaya-logo-dark' : 'pimalaya-logo-light'
  return (
    <span className={`logo ${onDark ? 'logo--on-dark' : ''}`.trim()}>
      <svg
        className="logo__mark"
        width="24"
        height="24"
        viewBox="0 0 633.32 633.32"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gid}
            x1="254.18"
            y1="564.76"
            x2="254.18"
            y2="141.44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f193b6" />
            <stop offset=".59" stopColor="#e267a3" />
            <stop offset="1" stopColor="#bf1e83" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gid})`}
          d="M445.013 229.29c0-34.01-27.57-61.58-61.58-61.58h-163.14c-66.54 0-120.47 53.94-120.47 120.47v286.6c0 32.33 26.21 58.54 58.54 58.54h6.06c32.33 0 58.54-26.21 58.54-58.54V351.67c0-33.58 27.22-60.81 60.81-60.81h99.66c34.01 0 61.58-27.57 61.58-61.58z"
        />
        <path
          fill={`url(#${gid})`}
          d="M487.373 208.71h126.66c.61 0 1.1-.53 1.04-1.14C604.453 91.35 506.503 0 387.553 0H78.993c-33.55 0-60.75 27.2-60.75 60.75v6.17c0 33.55 27.2 60.75 60.75 60.75h308.56c48.51 0 89.11 34.43 98.71 80.13.11.53.57.91 1.12.91z"
        />
        <path
          fill={`url(#${gid})`}
          d="M486.453 249.54c-.15 0-.28.11-.31.25-9.79 45.45-50.26 79.63-98.59 79.63h-62.34c-33.73 0-61.08 27.35-61.08 61.08v5.51c0 33.73 27.35 61.08 61.08 61.08h62.34c118.82 0 216.7-91.15 227.51-207.19a.334.334 0 0 0-.33-.36h-128.27z"
        />
      </svg>
      <span className="logo__word">Pimalaya</span>
      {tag ? <span className="logo__tag">{tag}</span> : null}
    </span>
  )
}
