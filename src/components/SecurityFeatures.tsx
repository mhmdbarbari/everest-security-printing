import { Link } from 'react-router-dom'
import { securityPrinting } from '../data/content'
import { images } from '../data/media'

export default function SecurityFeatures() {
  return (
    <section id="secure-printing" className="relative overflow-hidden bg-[#101D2B] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div className="reveal relative flex items-center justify-center py-6">
            <div
              className="pointer-events-none absolute h-[420px] w-[420px] rounded-full md:h-[560px] md:w-[560px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(196,164,106,0.16) 0%, rgba(196,164,106,0.05) 45%, transparent 72%)',
              }}
            />

            <img
              src={images.securePrinting}
              alt="Security document protection"
              className="float-sway relative w-72 drop-shadow-[0_35px_65px_rgba(0,0,0,0.65)] md:w-[26rem]"
            />
          </div>

          <div>
            <h2 className="text-3xl font-normal leading-tight text-[#F5F1E9] md:text-[2.75rem]">
              {securityPrinting.heading}
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#F5F1E9]/70">
              {securityPrinting.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              to="/secure-printing"
              className="eyebrow mt-6 inline-block border-b border-[#C4A46A] pb-1 text-xs font-medium text-[#F5F1E9]/85 transition hover:text-[#F5F1E9]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
