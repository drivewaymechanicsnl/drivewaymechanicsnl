import { SectionHeading } from './section-heading'

export function TestimonialsSection({ testimonials }) {
  const [featuredTestimonial, ...otherTestimonials] = testimonials

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        eyebrow="Customer Trust"
        title="Trusted by drivers across St. John&apos;s and nearby communities"
        description="The strongest proof is simple: people remember the fast response, the convenience, and the clear communication."
        align="center"
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr] md:mt-10 md:gap-5">
        <article className="rounded-[1.75rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_54%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:p-7">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mechanicBronze">★★★★★ Trusted local service</p>
          <p className="mt-4 text-xl font-black leading-tight sm:text-3xl">&ldquo;{featuredTestimonial.quote}&rdquo;</p>
          <div className="mt-8 border-t border-white/10 pt-4">
            <p className="font-black">{featuredTestimonial.author}</p>
            <p className="text-sm font-medium text-white/65">{featuredTestimonial.context}</p>
          </div>
        </article>

        {otherTestimonials.map((testimonial) => (
          <article key={testimonial.author} className="rounded-[1.75rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-mechanicCopper">★★★★★ Local feedback</p>
            <p className="mt-3 text-lg leading-8 text-zinc-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-6 border-t border-zinc-100 pt-4">
              <p className="font-black">{testimonial.author}</p>
              <p className="text-sm font-medium text-zinc-500">{testimonial.context}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
