export function SiteHeader({
  navLinks,
  phoneHref,
  phoneNumber,
  businessName,
  brandTagline,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const displayPhoneNumber = formatPhoneNumber(phoneNumber)

  return (
    <nav className="sticky top-0 z-40 border-b border-mechanicSteel/80 bg-mechanicPanel/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-24 items-center justify-between gap-4 sm:h-[6.5rem] lg:h-[7rem]">
          <a href="#home" className="flex min-w-0 flex-1 items-center gap-3 self-stretch lg:flex-none" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/kerry-logo.svg"
              alt={`${businessName} logo`}
              className="h-[90%] w-auto shrink-0 object-contain"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-black tracking-tight text-mechanicBlack sm:text-base">{businessName}</p>
              <p className="hidden max-w-xs truncate text-[11px] font-medium text-zinc-600 sm:block">{brandTagline}</p>
            </div>
          </a>

          <div className="hidden flex-1 items-center justify-center gap-5 px-6 text-sm font-semibold text-zinc-700 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-mechanicCopper">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={`tel:${phoneHref}`}
              className="hidden items-center gap-3 rounded-full border border-mechanicSteel bg-white px-4 py-2.5 text-left shadow-card md:flex"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mechanicOrange/10 text-xs font-black uppercase tracking-[0.14em] text-mechanicCopper">
                Call
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-mechanicCopper">Fast response</span>
                <span className="block text-sm font-black text-mechanicBlack">{displayPhoneNumber}</span>
              </span>
            </a>
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-mechanicCopper/30 bg-white px-4 py-2.5 text-sm font-extrabold text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper md:hidden"
            >
              Call Now
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mechanicSteel bg-white text-mechanicBlack transition hover:border-mechanicCopper hover:text-mechanicCopper lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-mechanicSteel bg-mechanicPanel py-4 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-3 pb-1">
              <div className="rounded-[1.5rem] border border-mechanicSteel bg-white p-4 shadow-card">
                <p className="text-sm font-black text-mechanicBlack">Need help now?</p>
                <p className="mt-1 text-sm text-zinc-600">Fastest response is by phone at {displayPhoneNumber}.</p>
                <div className="mt-4">
                  <a
                    href={`tel:${phoneHref}`}
                    className="rounded-2xl bg-mechanicOrange px-4 py-4 text-center text-sm font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call {displayPhoneNumber}
                  </a>
                </div>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function formatPhoneNumber(phoneNumber) {
  const digits = `${phoneNumber || ''}`.replace(/\D/g, '')

  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  return phoneNumber
}
