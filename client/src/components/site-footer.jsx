export function SiteFooter({ siteData }) {
  return (
    <footer className="border-t border-mechanicSteel bg-mechanicPanel">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 sm:items-center">
          <img
            src="/kerry-logo.svg"
            alt={`${siteData.businessName} logo`}
            className="h-28 w-auto shrink-0 object-contain opacity-90 sm:h-32"
          />
          <div className="leading-tight">
            <p className="text-base font-black text-mechanicBlack sm:text-lg">{siteData.businessName}</p>
            <p className="mt-1">{siteData.footerTagline}</p>
            <p className="mt-2 font-semibold text-zinc-500">
              No shop. No waiting. Phone {siteData.contact.phone} or email {siteData.contact.email}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-semibold">
          <a href="#services" className="hover:text-mechanicCopper">
            Services
          </a>
          <a href="#about" className="hover:text-mechanicCopper">
            Why Us
          </a>
          <a href="#contact" className="hover:text-mechanicCopper">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
