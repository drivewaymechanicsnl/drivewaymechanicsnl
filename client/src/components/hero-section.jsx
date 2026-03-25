export function HeroSection({ siteData }) {
  return (
    <section id="home" className="relative overflow-hidden bg-mechanicBlack text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(242,106,33,0.3),_transparent_28%),linear-gradient(135deg,_#1a1512_0%,_#332017_42%,_#8f4b22_100%)]" />
      <div className="pointer-events-none absolute right-[-3.5rem] top-1/2 z-0 hidden -translate-y-1/2 select-none md:block lg:right-[-2rem] xl:right-[2%]">
        <img src="/kerry-logo.svg" alt="" aria-hidden="true" className="h-auto w-[320px] object-contain opacity-[0.04] blur-sm lg:w-[420px] xl:w-[500px]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="inline-flex w-fit max-w-full rounded-full border border-mechanicBronze/25 bg-white/10 px-3 py-2 text-[11px] font-extrabold uppercase leading-5 tracking-[0.14em] text-mechanicBronze sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            {siteData.heroEyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteData.heroTitle}
          </h1>
          <p className="mt-4 max-w-xl text-lg font-semibold leading-7 text-white/85 sm:text-xl sm:leading-8">{siteData.subtitle}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">{siteData.heroDescription}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {siteData.trustHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur">
                <p className="text-sm font-semibold leading-5 text-white/80 sm:leading-6">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white/70">
            <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2">Most jobs completed on-site</span>
            <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2">Serving St. John&apos;s and nearby areas</span>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-4 top-8 hidden h-32 w-32 rounded-full bg-mechanicOrange/30 blur-3xl sm:block" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-3 shadow-card backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src="/mobile-hero.png"
                alt="Mobile mechanic repairing a customer's car in a residential driveway"
                className="h-[320px] w-full object-cover object-center sm:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mechanicBlack via-mechanicBlack/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70 sm:text-sm sm:tracking-[0.18em]">On-site support</p>
                <p className="mt-2 max-w-md text-xl font-black leading-tight sm:text-[2rem]">
                  Fast, practical repairs at your home, work, or roadside location.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-3 -mt-10 rounded-3xl border border-mechanicSteel bg-mechanicPanel p-5 text-mechanicBlack shadow-card sm:mx-10 sm:-mt-12 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mechanicCopper sm:text-sm sm:tracking-[0.18em]">Need help now?</p>
            <p className="mt-2 text-xl font-black sm:text-2xl">{siteData.heroCardTitle}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{siteData.heroCardText}</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-mechanicSteel bg-white p-4">
                <p className="text-sm font-black text-mechanicBlack">Phone: {siteData.contact.phone}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Use the contact section below for requests and urgent service questions.
                </p>
              </div>
              <div className="rounded-2xl border border-mechanicSteel bg-white p-4">
                <p className="text-sm font-black text-mechanicBlack">Roadside and no-start calls are prioritized when possible</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Same-day appointments may be available depending on schedule and travel distance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
