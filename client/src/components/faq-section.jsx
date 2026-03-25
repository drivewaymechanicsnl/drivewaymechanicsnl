import { SectionHeading } from './section-heading'

export function FaqSection({ faqItems }) {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers to the questions local drivers ask most"
        description="Keep the decision simple: if your question is urgent, call. If you just need the next step, send a request and we will point you in the right direction."
      />

      <div className="mt-8 grid gap-4 md:mt-10">
        {faqItems.map((item) => (
          <details key={item.question} className="group rounded-[1.5rem] border border-mechanicSteel bg-mechanicPanel p-4 shadow-card sm:p-5">
            <summary className="cursor-pointer list-none text-lg font-black tracking-tight">
              <div className="flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <span className="text-2xl text-mechanicCopper transition group-open:rotate-45">+</span>
              </div>
            </summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-600">{item.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_50%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-mechanicBronze">Still not sure?</p>
            <p className="mt-2 max-w-2xl text-base font-semibold text-white/80">
              Tell us what the vehicle is doing and where it is located. We will help you figure out the next move.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-mechanicOrange px-6 py-3 text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  )
}
