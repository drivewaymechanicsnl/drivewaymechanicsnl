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
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 pb-28 md:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#241812_52%,_#7c3f1d_100%)] p-5 text-white shadow-card sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicBronze">Contact</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Need help now? Call us.</h2>
          <p className="mt-4 text-base leading-8 text-white/75">
            For no-start issues, roadside calls, late-night problems, or urgent questions, the fastest move is to call first. You can also send a request below.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${phoneHref}`}
              className="block rounded-2xl bg-mechanicOrange px-5 py-4 text-center text-lg font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
            >
              Call {siteData.contact.phone}
            </a>
            <a
              href={`mailto:${emailHref}`}
              className="block rounded-2xl border border-white/15 bg-white/8 px-5 py-4 text-center text-base font-extrabold text-white"
            >
              Email {siteData.contact.email}
            </a>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold text-white/75">Hours</p>
              <p className="mt-1 text-lg font-black">{siteData.contact.hours}</p>
              <p className="mt-4 text-sm font-semibold text-white/75">Fastest response</p>
              <p className="mt-1 text-base font-bold">Phone calls are prioritized for urgent service requests.</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-semibold text-white/75">Service area</p>
              <p className="mt-1 text-base font-bold">{siteData.serviceArea}</p>
              <p className="mt-4 text-sm leading-6 text-white/75">
                We answer calls 24/7. Arrival time depends on travel distance, weather, and current bookings.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleInquirySubmit} className="rounded-[2rem] border border-mechanicSteel bg-mechanicPanel p-5 shadow-card sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">Request service</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-mechanicBlack sm:text-3xl">Tell us what is going on with your vehicle</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Keep it short. Share your contact info, your area, and the issue. We will follow up with the next step.
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
            <span className="mb-2 block text-sm font-bold text-zinc-700">Issue description</span>
            <textarea
              required
              className="min-h-36 w-full rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-base outline-none transition focus:border-mechanicCopper"
              placeholder="Tell us what the vehicle is doing, warning lights, no-start issue, brake problem, or anything else that helps."
              value={formValues.issue}
              onChange={(event) => setFormValues((current) => ({ ...current, issue: event.target.value }))}
            />
          </label>

          <div className="mt-4 rounded-2xl border border-mechanicSteel bg-white p-4">
            <p className="text-sm font-semibold leading-6 text-zinc-600">
              Urgent roadside issue? Do not wait for the form. Call directly for the fastest response.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              disabled={inquiryStatus.loading}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-mechanicOrange px-6 py-4 text-base font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper disabled:cursor-not-allowed disabled:opacity-70"
            >
              {inquiryStatus.loading ? 'Submitting...' : 'Send Request'}
            </button>
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-mechanicCopper/30 bg-white px-6 py-4 text-base font-extrabold text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper"
            >
              Call Instead
            </a>
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
