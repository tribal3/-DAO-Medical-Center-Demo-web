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
    <span className="flex flex-col">
      <span
        className={cx(
          'font-display text-[25px] leading-none font-semibold sm:text-[28px]',
          dark ? 'text-midnight' : 'text-ivory',
        )}
        style={{ letterSpacing: '0.16em' }}
      >
        DAO
      </span>
      <span
        className={cx(
          'mt-1.5 flex items-center gap-2 text-[7.5px] leading-none font-semibold uppercase sm:text-[8.5px]',
          dark ? 'text-ink-soft' : 'text-ivory/60',
        )}
        style={{ letterSpacing: '0.28em' }}
      >
        Medical Center
        <span
          aria-hidden="true"
          className={cx('h-px w-2.5', dark ? 'bg-sand/80' : 'bg-sand/60')}
        />
        <span
          lang="ar"
          dir="rtl"
          className={cx(
            'font-arabic text-[11px] font-medium tracking-normal normal-case sm:text-[12px]',
            dark ? 'text-teal' : 'text-mint',
          )}
        >
          مركز داو
        </span>
      </span>
    </span>
  )

  if (!href) return <span className={cx('inline-flex', className)}>{content}</span>

  return (
    <a
      href={href}
      aria-label="DAO Medical Center — home"
      className={cx(
        'inline-flex rounded-lg transition-opacity duration-300 hover:opacity-80',
        className,
      )}
    >
      {content}
    </a>
  )
}
