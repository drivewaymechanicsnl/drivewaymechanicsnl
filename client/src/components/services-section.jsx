import { SectionHeading } from './section-heading'

export function ServicesSection({ serviceGroups }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Services & sample prices"
        description="Labor-only starting prices. Tap a row to open. Call for an exact quote and same-day availability."
      />

      <div className="mt-8 md:mt-10">
        <article className="overflow-hidden rounded-[2rem] border border-mechanicSteel bg-mechanicPanel shadow-card">
          <div className="border-b border-white/10 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_52%,_#7c3f1d_100%)] px-5 py-5 text-white sm:px-8 sm:py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicBronze">Price list</p>
            <div className="mt-3">
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">What we do</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                Labor-only starting points. Parts are extra when needed. Final price depends on your vehicle and the repair.
              </p>
            </div>
          </div>

          <div className="divide-y divide-mechanicSteel/80 p-3 sm:p-5">
            {serviceGroups.map((group) => (
              <details
                key={group.id}
                className="rounded-[1.25rem] border border-transparent bg-[#f8f1e8] open:border-mechanicSteel open:shadow-sm open:[&_.chevron-icon]:rotate-180 sm:rounded-2xl"
              >
                <summary className="flex min-h-[3.25rem] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-left sm:min-h-14 sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-black tracking-tight text-mechanicBlack sm:text-xl">{group.label}</span>
                    {group.accent ? (
                      <span className="mt-1 inline-block rounded-full bg-mechanicOrange/12 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-mechanicCopper sm:text-xs">
                        {group.accent}
                      </span>
                    ) : null}
                  </span>
                  <span
                    className="chevron-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-mechanicSteel/80 bg-white text-mechanicCopper transition-transform duration-200"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>

                <div className="border-t border-dashed border-zinc-200/90 px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
                  <p className="text-sm leading-relaxed text-zinc-600">{group.description}</p>
                  <div className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-dashed border-zinc-200/80 pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-mechanicOrange" />
                          <p className="text-sm font-semibold text-zinc-800 sm:text-base">{item.name}</p>
                        </div>
                        <p className="shrink-0 text-sm font-black text-mechanicCopper sm:text-base">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="border-t border-mechanicSteel bg-[#f8f1e8] px-4 py-5 sm:px-8">
            <p className="text-sm font-semibold leading-relaxed text-zinc-600">
              Not sure which service fits? Call, and we&apos;ll point you in the right direction.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
