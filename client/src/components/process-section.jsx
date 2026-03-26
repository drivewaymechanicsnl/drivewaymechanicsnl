import { SectionHeading } from './section-heading'

export function ProcessSection({ processSteps }) {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="How it works"
        title="Three easy steps"
        description="Call or book, agree on a plan, and we come to you."
        align="center"
      />

      <div className="mt-8 rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#271b15_50%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:mt-10 sm:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur sm:p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-mechanicOrange text-lg font-black text-white shadow-glow">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-sm font-semibold leading-relaxed text-white/75">
            Stuck on the road? Call first—we’ll tell you the fastest option.
          </p>
        </div>
      </div>
    </section>
  )
}
