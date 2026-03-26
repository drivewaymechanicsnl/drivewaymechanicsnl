function formatPhoneDisplay(phone) {
  const digits = `${phone || ''}`.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return phone
}

export function ContactSection({
  phoneHref,
  emailHref,
  siteData,
  inquiryStatus,
  formValues,
  setFormValues,
  handleInquirySubmit,
  serviceGroups,
}) {
  const phoneDisplay = formatPhoneDisplay(siteData.contact.phone)

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 pb-28 md:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_52%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicBronze">Contact</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Call or send a message</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            For urgent problems, use <strong className="text-white">Call now</strong> at the top. Otherwise, phone or email us here, or use the form.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-semibold text-white/75">Phone</p>
              <a
                href={`tel:${phoneHref}`}
                className="mt-2 block min-h-12 text-2xl font-black tracking-tight text-white underline decoration-2 underline-offset-[0.2em] transition hover:text-mechanicBronze"
              >
                {phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/75">Email</p>
              <a
                href={`mailto:${emailHref}`}
                className="mt-2 block min-h-12 break-all text-lg font-bold text-white underline decoration-2 underline-offset-[0.2em] transition hover:text-mechanicBronze"
              >
                {emailHref}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold text-white/75">Hours</p>
              <p className="mt-1 text-lg font-black">{siteData.contact.hours}</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold text-white/75">Service area</p>
              <p className="mt-1 text-base font-bold leading-relaxed">{siteData.serviceArea}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleInquirySubmit} className="rounded-[2rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">Book a visit</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-mechanicBlack sm:text-3xl">Tell us about your vehicle</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Short answers are fine. Include a phone number and where you’re located.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-700">Full name</span>
              <input
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
                placeholder="Your name"
                value={formValues.name}
                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-700">Phone number</span>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                className="w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
                placeholder="Best number to reach you"
                value={formValues.phone}
                onChange={(event) => setFormValues((current) => ({ ...current, phone: event.target.value }))}
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-700">Area / location</span>
              <input
                type="text"
                autoComplete="address-level2"
                required
                className="w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
                placeholder="St. John's, Mount Pearl, roadside, etc."
                value={formValues.location}
                onChange={(event) => setFormValues((current) => ({ ...current, location: event.target.value }))}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-zinc-700">Service needed</span>
              <select
                className="w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
                value={formValues.service}
                onChange={(event) => setFormValues((current) => ({ ...current, service: event.target.value }))}
              >
                <option value="">Select a service</option>
                {serviceGroups.map((group) => (
                  <option key={group.id} value={group.label}>
                    {group.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-bold text-zinc-700">What’s going on?</span>
            <textarea
              required
              className="min-h-36 w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
              placeholder="Noises, warning lights, won’t start, or other details."
              value={formValues.issue}
              onChange={(event) => setFormValues((current) => ({ ...current, issue: event.target.value }))}
            />
          </label>

          <div className="mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm font-semibold text-amber-950">
            Roadside or urgent? Use <strong>Call now</strong> at the top of the page first.
          </div>

          <div className="mt-6">
            <button
              disabled={inquiryStatus.loading}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-mechanicOrange px-6 py-4 text-base font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper disabled:cursor-not-allowed disabled:opacity-70"
            >
              {inquiryStatus.loading ? 'Sending…' : 'Send request'}
            </button>
          </div>

          {inquiryStatus.message && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-sm font-semibold ${inquiryStatus.isError ? 'text-red-600' : 'text-green-700'}`}
            >
              {inquiryStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
