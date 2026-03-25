export function SiteHeader({
  navLinks,
  phoneHref,
  phoneNumber,
  businessName,
  brandTagline,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav className="sticky top-0 z-40 border-b border-mechanicSteel/80 bg-mechanicPanel/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-28 items-center justify-between gap-3">
          <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src="/kerry-logo.svg"
              alt={`${businessName} logo`}
              className="h-28 w-auto shrink-0 object-contain sm:h-32"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-black tracking-tight text-mechanicBlack sm:text-base">{businessName}</p>
              <p className="hidden truncate text-[11px] font-medium text-zinc-600 sm:block">{brandTagline}</p>
            </div>
          </a>

          <div className="hidden items-center gap-5 text-sm font-semibold text-zinc-700 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-mechanicCopper">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneHref}`}
              className="hidden rounded-full border border-mechanicSteel bg-white px-4 py-2 text-right shadow-card xl:block"
            >
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-mechanicCopper">Call now</span>
              <span className="block text-sm font-black text-mechanicBlack">{phoneNumber}</span>
            </a>
            <a
              href={`tel:${phoneHref}`}
              className="hidden min-h-12 items-center justify-center rounded-full border border-mechanicCopper/30 bg-white px-5 py-3 text-sm font-extrabold text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper sm:inline-flex"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="hidden min-h-12 items-center justify-center rounded-full bg-mechanicOrange px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper md:inline-flex"
            >
              Get Help Now
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mechanicSteel bg-white text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className="text-xl font-bold">{isMenuOpen ? 'x' : '+'}</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-mechanicSteel bg-mechanicPanel px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-3">
              <div className="rounded-[1.5rem] border border-mechanicSteel bg-white p-4 shadow-card">
                <p className="text-sm font-black text-mechanicBlack">Need help now?</p>
                <p className="mt-1 text-sm text-zinc-600">Fastest response is by phone at {phoneNumber}.</p>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-mechanicSteel bg-white px-4 py-3 text-sm font-bold text-zinc-700 transition hover:border-mechanicCopper hover:text-mechanicCopper"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${phoneHref}`}
                className="rounded-2xl bg-mechanicOrange px-4 py-4 text-center text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
                onClick={() => setIsMenuOpen(false)}
              >
                Call {phoneNumber}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
