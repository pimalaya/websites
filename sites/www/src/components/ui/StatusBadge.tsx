import type { Status } from '../../lib/products'
import './StatusBadge.css'

/*
 * Honest status chip next to a product name. Green means installable and
 * settled, accent means installable but young, neutral means not yet or no
 * longer advertised.
 */
const tone: Record<Status, 'good' | 'young' | 'muted'> = {
  stable: 'good',
  beta: 'young',
  early: 'young',
  'in development': 'muted',
  retiring: 'muted',
  frozen: 'muted',
  deprecated: 'muted',
}

export function StatusBadge({ status }: { status: Status }) {
  return <span className={`status status--${tone[status]}`}>{status}</span>
}
