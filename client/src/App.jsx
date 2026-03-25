import { useMemo, useState } from 'react'
import {
  faqItems,
  processSteps,
  serviceGroups,
  siteData,
  testimonials,
  trustStats,
  whyChooseUs,
} from './site-data'
import { AboutSection } from './components/about-section'
import { ContactSection } from './components/contact-section'
import { FaqSection } from './components/faq-section'
import { HeroSection } from './components/hero-section'
import { ProcessSection } from './components/process-section'
import { ServicesSection } from './components/services-section'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'
import { TestimonialsSection } from './components/testimonials-section'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [inquiryStatus, setInquiryStatus] = useState({ loading: false, message: '', isError: false })
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    issue: '',
  })

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || '/api/inquiry'
  const phoneHref = siteData.contact.phone || '7096319056'
  const emailHref = siteData.contact.email || 'drivewaymechanicsnl@gmail.com'
  const navLinks = useMemo(
    () => [
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'How It Works' },
      { href: '#testimonials', label: 'Reviews' },
      { href: '#about', label: 'Why Us' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  )

  const handleInquirySubmit = async (event) => {
    event.preventDefault()
    setInquiryStatus({ loading: true, message: '', isError: false })

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        throw new Error('Unable to send your request right now. Please call instead.')
      }

      setInquiryStatus({
        loading: false,
        message: 'Request sent successfully. We will contact you shortly.',
        isError: false,
      })

      setFormValues({ name: '', phone: '', location: '', service: '', issue: '' })
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : 'Unable to send your request right now. Please call instead.'

      setInquiryStatus({ loading: false, message, isError: true })
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-full bg-mechanicOrange px-4 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <main id="main-content" className="bg-mechanicCanvas pb-28 text-mechanicBlack sm:pb-0">
        <SiteHeader
          navLinks={navLinks}
          phoneHref={phoneHref}
          phoneNumber={siteData.contact.phone}
          serviceArea={siteData.serviceArea}
          emergencyBadge={siteData.emergencyBadge}
          businessName={siteData.businessName}
          brandTagline={siteData.brandTagline}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <HeroSection siteData={siteData} phoneHref={phoneHref} />

        <section className="mx-auto max-w-6xl px-4 py-6 md:py-10">
          <div className="mb-6 overflow-hidden rounded-[2rem] border border-mechanicBronze/30 bg-[linear-gradient(135deg,_#f26a21_0%,_#b66a32_100%)] shadow-glow">
            <div className="flex flex-col gap-4 px-4 py-5 text-white sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">Need help now?</p>
                <p className="mt-2 text-xl font-black tracking-tight sm:text-2xl">Call us for the fastest response.</p>
                <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/85">
                  Same-day service may be available depending on schedule.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-base font-extrabold text-mechanicBlack shadow-card"
                >
                  Call {siteData.contact.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 py-3 text-base font-extrabold text-white"
                >
                  Get Help Now
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-mechanicCopper/20 bg-[linear-gradient(135deg,_#12100f_0%,_#2a1d16_58%,_#7c3f1d_100%)] shadow-card">
            <div className="grid gap-3 px-4 py-5 text-white sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:px-8 lg:py-8">
              {trustStats.map((stat) => (
                <article key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur sm:p-5">
                  <p className="text-xl font-black text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/75">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="border-t border-white/10 bg-black/10 px-4 py-5 sm:px-5 lg:px-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-mechanicBronze">Local mobile service</p>
                  <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/85 sm:text-base">
                    Serving St. John&apos;s and nearby communities within 150KM.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${phoneHref}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-mechanicOrange px-6 py-3 text-base font-extrabold text-white shadow-glow transition hover:bg-mechanicCopper"
                  >
                    Call {siteData.contact.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/95 px-6 py-3 text-base font-extrabold text-mechanicBlack"
                  >
                    Get Help Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection serviceGroups={serviceGroups} whyChooseUs={whyChooseUs} phoneHref={phoneHref} />
        <ProcessSection processSteps={processSteps} />
        <TestimonialsSection testimonials={testimonials} />
        <AboutSection siteData={siteData} />
        <FaqSection faqItems={faqItems} />
        <ContactSection
          phoneHref={phoneHref}
          emailHref={emailHref}
          siteData={siteData}
          inquiryStatus={inquiryStatus}
          formValues={formValues}
          setFormValues={setFormValues}
          handleInquirySubmit={handleInquirySubmit}
          serviceGroups={serviceGroups}
        />
        <SiteFooter siteData={siteData} />

        <div className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-2 gap-3 sm:hidden">
          <a
            href={`tel:${phoneHref}`}
            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-mechanicOrange px-4 py-4 text-center text-base font-extrabold text-white shadow-glow"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-mechanicSteel bg-mechanicPanel px-4 py-4 text-center text-base font-extrabold text-mechanicBlack shadow-card"
          >
            Get Help
          </a>
        </div>
      </main>
    </>
  )
}

export default App
