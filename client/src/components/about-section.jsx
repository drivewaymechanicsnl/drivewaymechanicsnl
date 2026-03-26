import { SectionHeading } from './section-heading'

export function AboutSection({ siteData }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="About us"
        title="Who we are & why people call us"
        description="One team, one promise: fix your car where you are, with clear communication."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] md:mt-10 md:gap-6">
        <div className="overflow-hidden rounded-[2rem] border border-mechanicSteel bg-mechanicPanel shadow-card">
          <img
            src="/mobile-about.png"
            alt="Mobile mechanic with a customer beside a vehicle"
            className="h-full min-h-[220px] w-full object-cover sm:min-h-[300px]"
            loading="lazy"
          />
        </div>

        <div className="rounded-[2rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-7">
          <p className="text-base leading-relaxed text-zinc-700">{siteData.aboutLead}</p>
          <ul className="mt-5 space-y-2.5 text-sm font-semibold leading-relaxed text-zinc-800 sm:text-base sm:leading-relaxed">
            {siteData.aboutBullets.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mechanicOrange" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
