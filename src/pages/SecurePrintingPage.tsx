import { Link } from 'react-router-dom'
import { securePrintingPage } from '../data/content'
import { images } from '../data/media'
import { useReveal } from '../hooks/useReveal'

export default function SecurePrintingPage() {
  useReveal()

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[440px] items-end overflow-hidden bg-[#0d0d0d]">
        <img
          src={images.aboutSample}
          alt="Security print sample"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/92 via-[#0d0d0d]/50 to-[#0d0d0d]/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <Link
            to="/"
            className="eyebrow mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/70 transition hover:text-white"
          >
            ← Back Home
          </Link>
          <h1
            className="max-w-2xl text-4xl leading-[1.05] text-white md:text-6xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {securePrintingPage.intro.heading}
          </h1>
        </div>
      </section>

      <section className="bg-[#ffffff] py-24">
        <div className="reveal mx-auto max-w-3xl space-y-5 px-6 text-center text-lg leading-relaxed text-[#555555]">
          {securePrintingPage.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="reveal relative flex items-center justify-center py-6">
              <div
                className="pointer-events-none absolute h-[380px] w-[380px] rounded-full md:h-[480px] md:w-[480px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 45%, transparent 72%)',
                }}
              />
              <img
                src={images.securePrinting}
                alt="Security document protection"
                className="float-sway relative w-64 drop-shadow-[0_35px_65px_rgba(0,0,0,0.65)] md:w-[22rem]"
              />
            </div>

            <div className="reveal">
              <h2 className="text-2xl font-normal leading-tight text-white md:text-4xl">
                Layers of protection, built into every sheet
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {securePrintingPage.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-24">
        <div className="reveal mx-auto max-w-6xl px-6">
          <h3
            className="text-2xl font-normal text-[#111111] md:text-3xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {securePrintingPage.clientsHeading}
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {securePrintingPage.sectors.map((sector) => (
              <span key={sector} className="rounded-full bg-white px-4 py-2 text-sm text-[#444444] shadow-sm">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20 text-center">
        <h2
          className="text-3xl text-white md:text-4xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Ready to work with us?
        </h2>
        <Link
          to="/#quotations"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-[#111111] transition hover:bg-white/90"
        >
          Request a Quotation
        </Link>
      </section>
    </>
  )
}
