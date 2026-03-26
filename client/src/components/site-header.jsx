export function SiteHeader({
  navLinks,
  phoneHref,
  businessName,
  brandTagline,
  bookHref,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-mechanicSteel/80 bg-mechanicPanel/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto max-w-6xl px-4">
        <div className="flex h-[4.25rem] items-center justify-between gap-3 sm:h-20 lg:h-[5.5rem]">
          <a
            href="#home"
            className="flex min-w-0 flex-1 items-center gap-2.5 self-stretch sm:gap-3 lg:flex-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/kerry-logo.svg"
              alt={`${businessName} logo`}
              className="h-[72px] w-auto shrink-0 object-contain sm:h-[5.25rem]"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-black tracking-tight text-mechanicBlack sm:text-base">{businessName}</p>
              <p className="hidden max-w-[14rem] truncate text-[11px] font-medium text-zinc-600 sm:block">{brandTagline}</p>
            </div>
          </a>

          <div className="hidden items-center gap-4 text-sm font-semibold text-zinc-700 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-mechanicCopper">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex min-h-12 min-w-[7.5rem] items-center justify-center rounded-full bg-mechanicOrange px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
            >
              Call now
            </a>
            <a
              href={bookHref}
              className="inline-flex min-h-12 min-w-[7.5rem] items-center justify-center rounded-full border-2 border-mechanicCopper/40 bg-white px-5 py-3 text-sm font-extrabold text-mechanicBlack transition hover:border-mechanicCopper"
            >
              Book now
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mechanicSteel bg-white text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7H20" />
                  <path d="M4 12H20" />
                  <path d="M4 17H20" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pb-3 pt-0 lg:hidden">
          <a
            href={`tel:${phoneHref}`}
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl bg-mechanicOrange px-3 py-3 text-center text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
          >
            Call now
          </a>
          <a
            href={bookHref}
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-2xl border-2 border-mechanicCopper/35 bg-white px-3 py-3 text-center text-sm font-extrabold text-mechanicBlack transition hover:border-mechanicCopper"
            onClick={() => setIsMenuOpen(false)}
          >
            Book now
          </a>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-mechanicSteel bg-mechanicPanel py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-2 pb-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-mechanicSteel bg-white px-4 py-3.5 text-sm font-bold text-zinc-700 transition hover:border-mechanicCopper hover:text-mechanicCopper"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
