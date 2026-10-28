import { Compass, Info, MapPin, MessageCircle } from 'lucide-react'
import { useLanguage } from '../language/useLanguage'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

const stepIcons = [Compass, MessageCircle, MapPin]

export function Approach() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="relative overflow-hidden bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute start-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-line to-transparent rtl:translate-x-1/2"
      />
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-teal">
              <span aria-hidden="true" className="h-px w-8 bg-sand" />
              {t.approach.eyebrow}
            </p>
            <h2 className="mt-5 max-w-[16ch] text-[clamp(1.95rem,4.2vw,3.15rem)] leading-[1.06] text-midnight">
              {t.approach.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[40ch] text-[14px] leading-[1.8] text-ink-soft lg:justify-self-end lg:text-end">
              {t.approach.intro}
            </p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {t.approach.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? Compass
            return (
              <li key={step.title}>
                <Reveal delay={index * 90}>
                  <div className="group border-t border-midnight/15 pt-7">
                    <div className="relative -mt-[29px] flex items-center justify-between">
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-teal transition-all duration-500 group-hover:w-16"
                      />
                      <span className="font-display text-[12px] tracking-[0.18em] text-teal">
                        {step.number}
                      </span>
                    </div>

                    <div className="mt-6 flex items-start justify-between gap-4">
                      <h3 className="max-w-[12ch] font-display text-[23px] leading-[1.2] text-midnight sm:text-[25px]">
                        {step.title}
                      </h3>
                      <Icon
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-teal/60 transition-colors duration-300 group-hover:text-teal"
                        strokeWidth={1.6}
                      />
                    </div>
                    <p className="mt-3 max-w-[32ch] text-[13px] leading-[1.75] text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>

        <Reveal delay={120}>
          <p className="mt-12 flex max-w-2xl items-start gap-3 border-s-2 border-sand/70 ps-4 text-[11px] leading-relaxed text-ink-soft">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal"
            />
            {t.approach.note}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
