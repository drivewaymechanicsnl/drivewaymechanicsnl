import { SectionHeading } from './section-heading'

export function AboutSection({ siteData }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="Why Us"
        title="Local mobile repair without the shop delay"
        description="We fix your car at home, at work, or roadside so you can get a clear answer and the next step faster."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] md:mt-10 md:gap-6">
        <div className="overflow-hidden rounded-[2rem] border border-mechanicSteel bg-mechanicPanel shadow-card">
          <img
            src="/mobile-about.png"
            alt="Mobile mechanic speaking with a customer beside a vehicle in a driveway"
            className="h-full min-h-[260px] w-full object-cover sm:min-h-[320px]"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">About us</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-mechanicBlack sm:text-3xl">Straightforward help at your location.</h3>
            <p className="mt-4 text-base leading-8 text-zinc-700">{siteData.about}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-mechanicSteel bg-white px-4 py-2 text-sm font-bold text-zinc-700">Locally owned</span>
              <span className="rounded-full border border-mechanicSteel bg-white px-4 py-2 text-sm font-bold text-zinc-700">Mobile service</span>
              <span className="rounded-full border border-mechanicSteel bg-white px-4 py-2 text-sm font-bold text-zinc-700">Clear pricing before work begins</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_50%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicBronze">Service area</p>
            <h3 className="mt-3 text-2xl font-black">{siteData.serviceArea}</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">
              If you are just outside the main service area, contact us first. We can confirm travel availability and next steps quickly.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {siteData.serviceAreaLocations.map((location) => (
                <span key={location} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/85">
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
