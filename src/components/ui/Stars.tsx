import { Star } from 'lucide-react'
import { cx } from '../../lib/cx'

export function Stars({
  count = 5,
  className,
}: {
  count?: number
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cx('inline-flex items-center gap-0.5', className)}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className="h-3.5 w-3.5 fill-sand text-sand"
          strokeWidth={1}
        />
      ))}
    </span>
  )
}
