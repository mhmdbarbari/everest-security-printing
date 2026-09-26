import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { aboutPage } from '../data/content'
import { images } from '../data/media'
import { useReveal } from '../hooks/useReveal'

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4A46A]" />
          <span className="text-[16px] leading-relaxed text-[#101D2B]/80">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Chapter({
  heading,
  image,
  imageAlt,
  bg,
  reverse,
  children,
}: {
  heading: string
  image: string
  imageAlt: string
  bg: string
  reverse?: boolean
  children: ReactNode
}) {
  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: bg }}>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className={`grid gap-12 md:grid-cols-2 md:items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div className="reveal aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>

          <div className="reveal">
            <h2 className="text-2xl font-normal leading-tight text-[#101D2B] md:text-4xl">
              {heading}
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#101D2B]/75">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  useReveal()

  return (
    <>
      <section className="relative flex h-[60vh] min-h-[440px] items-end overflow-hidden bg-[#101D2B]">
        <img
          src={images.factoryWide}
          alt="Everest production facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/92 via-[#101D2B]/50 to-[#101D2B]/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <Link
            to="/"
            className="eyebrow mb-6 inline-flex items-center gap-2 text-xs font-medium text-[#F5F1E9]/70 transition hover:text-[#C4A46A]"
          >
            ← Back Home
          </Link>
          <h1
            className="max-w-2xl text-4xl leading-[1.05] text-[#F5F1E9] md:text-6xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            {aboutPage.intro.heading}
          </h1>
        </div>
      </section>

      <section className="bg-[#F5F1E9] py-24">
        <div className="reveal mx-auto max-w-3xl space-y-5 px-6 text-center text-lg leading-relaxed text-[#101D2B]/75">
          {aboutPage.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Chapter
        heading={aboutPage.qhse.heading}
        image={images.securePrinting}
        imageAlt="Quality, health, safety and environment at Everest"
        bg="#EFE7D6"
      >
        <p>{aboutPage.qhse.mission}</p>
        <blockquote
          className="border-l-2 border-[#C4A46A] pl-5 text-xl italic leading-snug text-[#101D2B]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {aboutPage.qhse.vision}
        </blockquote>
        <p className="font-medium text-[#101D2B]">{aboutPage.qhse.actionsIntro}</p>
        <Checklist items={aboutPage.qhse.actions} />
      </Chapter>

      <Chapter
        heading={aboutPage.quality.heading}
        image={images.artworkPattern}
        imageAlt="Everest print quality and craftsmanship"
        bg="#F5F1E9"
        reverse
      >
        {aboutPage.quality.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="font-medium text-[#101D2B]">{aboutPage.quality.commitmentsIntro}</p>
        <Checklist items={aboutPage.quality.commitments} />
      </Chapter>

      <Chapter
        heading={aboutPage.security.heading}
        image={images.aboutFacility}
        imageAlt="Everest secure production plant"
        bg="#EFE7D6"
      >
        {aboutPage.security.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Chapter>

      <section className="bg-[#101D2B] py-20 text-center">
        <h2
          className="text-3xl text-[#F5F1E9] md:text-4xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Ready to work with us?
        </h2>
        <Link
          to="/#quotations"
          className="mt-8 inline-block rounded-full bg-[#C4A46A] px-7 py-3 text-sm font-medium text-[#101D2B] transition hover:bg-[#d3b884]"
        >
          Request a Quotation
        </Link>
      </section>
    </>
  )
}
