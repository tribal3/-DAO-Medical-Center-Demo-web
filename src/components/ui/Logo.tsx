import { cx } from '../../lib/cx'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
  /** Wraps the lockup in an anchor when a href is supplied. */
  href?: string
}

export function Logo({ tone = 'dark', className, href }: LogoProps) {
  const dark = tone === 'dark'

  const content = (
    <img
      src="/public/cropped_circle_image.png"
      alt="DAO Medical Center logo"
      width={65}
      height={20}
      className={cx('block', dark ? 'filter invert(27%) sepia(74%) saturate(1316%) hue-rotate(172deg) brightness(88%) contrast(95%)' : '')}
      loading="lazy"
      decoding="async"
    />
  )

  if (!href) return <span className={cx('inline-flex', className)}>{content}</span>

  return (
    <a
      href={href}
      aria-label="DAO Medical Center — home"
      className={cx(
        'rounded-lg transition-opacity duration-300 hover:opacity-80',
        className,
      )}
    >
      {content}
    </a>
  )
}