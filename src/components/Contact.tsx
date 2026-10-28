import {
  CalendarCheck,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import { clinic, whatsappLink } from '../content/site'
import { useLanguage } from '../language/useLanguage'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function Contact() {
  const { t, lang } = useLanguage()
  const whatsappHref = whatsappLink(t.whatsappMessage)
  const primaryName = lang === 'ar' ? clinic.nameAr : clinic.nameEn
  const secondaryName = lang === 'ar' ? clinic.nameEn : clinic.nameAr
  const primaryLang = lang === 'ar' ? 'ar' : 'en'
  const secondaryLang = lang === 'ar' ? 'en' : 'ar'

  const rows: {
    icon: typeof MapPin
    label: string
    value: string
    href?: string
    external?: boolean
    ltr?: boolean
  }[] = [
    {
      icon: MapPin,
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
      href: clinic.mapsUrl,
      external: true,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: clinic.phoneDisplay,
      href: clinic.phoneHref,
      ltr: true,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: clinic.phoneDisplay,
      href: whatsappHref,
      external: true,
      ltr: true,
    },
    {
      icon: CalendarCheck,
      label: t.contact.enquireLabel,
      value: t.contact.enquireValue,
    },
  ]

  return (
    <section id="contact" className="relative bg-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-sand" />
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[14ch] text-[clamp(1.95rem,4.2vw,3.15rem)] leading-[1.06] text-midnight">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[40ch] text-[14px] leading-[1.8] text-ink-soft lg:justify-self-end lg:text-end">
              {t.contact.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] border border-line bg-ivory p-6 sm:p-8 lg:p-9">
              <div className="flex items-start justify-between gap-4 border-b border-line pb-6">
                <div>
                  <h3
                    lang={primaryLang}
                    className="font-display text-[24px] leading-tight text-midnight sm:text-[27px]"
                  >
                    {primaryName}
                  </h3>
                  <p
                    lang={secondaryLang}
                    dir={secondaryLang === 'ar' ? 'rtl' : 'ltr'}
                    className="mt-1.5 font-sans text-[12.5px] text-ink-soft"
                  >
                    {secondaryName}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint text-teal"
                >
                  <MapPin className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </span>
              </div>

              <dl className="mt-6 divide-y divide-line/80">
                {rows.map((row) => {
                  const Icon = row.icon
                  const value = (
                    <span
                      dir={row.ltr ? 'ltr' : undefined}
                      className="text-[13.5px] font-medium text-midnight"
                    >
                      {row.value}
                    </span>
                  )

                  return (
                    <div
                      key={row.label}
                      className="flex items-start gap-3.5 py-3.5"
                    >
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-teal shadow-sm">
                        <Icon
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                          strokeWidth={1.8}
                        />
                      </span>
                      <div className="min-w-0">
                        <dt className="micro-label text-ink-soft">
                          {row.label}
                        </dt>
                        <dd className="mt-1">
                          {row.href ? (
                            <a
                              href={row.href}
                              {...(row.external
                                ? {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                  }
                                : {})}
                              className="transition-colors hover:text-teal"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  )
                })}
              </dl>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                <ButtonLink href={clinic.phoneHref} fullWidth>
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {t.actions.call}
                </ButtonLink>
                <ButtonLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  fullWidth
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  {t.contact.whatsappLabel}
                </ButtonLink>
                <ButtonLink
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="soft"
                  fullWidth
                  className="sm:col-span-2"
                >
                  <Navigation aria-hidden="true" className="h-4 w-4" />
                  {t.actions.directions}
                </ButtonLink>
              </div>

              <p className="mt-auto pt-5 text-[10.5px] leading-relaxed text-ink-soft">
                {t.contact.panelNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-line bg-mint-soft sm:h-[420px] lg:h-full lg:min-h-[520px]">
              <iframe
                src={clinic.mapEmbed}
                title={t.contact.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[18%]"
              />
              <div className="pointer-events-none absolute inset-x-3 top-3 flex flex-wrap items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
                <p className="rounded-full bg-white/90 px-3 py-1.5 text-[9.5px] font-medium text-ink-soft shadow-sm backdrop-blur">
                  {t.contact.mapNote}
                </p>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-midnight px-3.5 py-2 text-[10.5px] font-semibold text-ivory shadow-card transition-colors duration-300 hover:bg-teal-dark"
                >
                  {t.contact.mapCta}
                  <ExternalLink aria-hidden="true" className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
