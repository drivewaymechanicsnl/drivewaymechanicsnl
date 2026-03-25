import { SectionHeading } from './section-heading'

export function ServicesSection({ serviceGroups, whyChooseUs }) {
  const featuredServices = [
    { label: 'Diagnostics', detail: 'Warning lights, testing, and clear next steps' },
    { label: 'Roadside No-Start', detail: 'Fast help for batteries, starters, and urgent no-start calls' },
    { label: 'Brake Service', detail: 'Inspections and brake pad replacement done on-site when possible' },
  ]

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Service menu and starter pricing"
        description="See the most requested jobs first, then scan the full menu. Call for exact quotes, availability, and urgent roadside support."
      />

      <div className="mt-8 space-y-6 md:mt-10">
        <article className="overflow-hidden rounded-[2rem] border border-mechanicSteel bg-mechanicPanel shadow-card">
          <div className="border-b border-white/10 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_52%,_#7c3f1d_100%)] px-5 py-5 text-white sm:px-8 sm:py-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicBronze">Menu card</p>
            <div className="mt-3">
              <div>
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl">Service Menu & Pricing</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">
                  Review the most common on-site services in one place. These are labor-only starter prices designed for quick scanning on mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-mechanicSteel bg-[#efe5d8] px-4 py-5 sm:px-6 lg:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">Most requested</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {featuredServices.map((service) => (
                <div key={service.label} className="rounded-[1.5rem] border border-mechanicSteel bg-mechanicPanel p-5">
                  <p className="text-base font-black text-mechanicBlack">{service.label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{service.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:gap-6 lg:p-8">
            {serviceGroups.map((group) => (
              <section key={group.id} className="rounded-[1.5rem] border border-mechanicSteel bg-[#f8f1e8] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-black tracking-tight text-mechanicBlack">{group.label}</h4>
                  {group.accent ? (
                    <span className="rounded-full bg-mechanicOrange/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-mechanicCopper">
                      {group.accent}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{group.description}</p>

                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-dashed border-zinc-200 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-mechanicOrange" />
                        <p className="text-sm font-semibold text-zinc-700 sm:text-base">{item.name}</p>
                      </div>
                      <p className="shrink-0 text-sm font-black text-mechanicCopper sm:text-base">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="border-t border-mechanicSteel bg-[#f8f1e8] px-4 py-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm font-semibold leading-6 text-zinc-600">
                Prices are labor-only starting points. Parts are extra when needed. Final quote depends on vehicle make, model, and the exact repair required.
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-mechanicSteel bg-mechanicPanel shadow-card">
            <img
              src="/mobile-service.png"
              alt="Mobile mechanic performing roadside diagnostics beside a customer vehicle"
              className="h-80 w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="rounded-[2rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">Why customers choose us</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-mechanicBlack sm:text-3xl">
              Less hassle. Faster help. Clearer service.
            </h3>
            <div className="mt-5 space-y-4">
              {whyChooseUs.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-mechanicSteel bg-[#f8f1e8] p-4">
                  <h3 className="text-base font-black">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
