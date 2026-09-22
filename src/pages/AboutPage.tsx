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
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
          <span className="text-[16px] leading-relaxed text-[#444444]">{item}</span>
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
            <h2 className="text-2xl font-normal leading-tight text-[#111111] md:text-4xl">
              {heading}
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#555555]">
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
      <section className="relative flex h-[60vh] min-h-[440px] items-end overflow-hidden bg-[#0d0d0d]">
        <img
          src={images.factoryWide}
          alt="Everest production facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/92 via-[#0d0d0d]/45 to-[#0d0d0d]/35" />

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
            {aboutPage.intro.heading}
          </h1>
        </div>
      </section>

      <section className="bg-[#ffffff] py-24">
        <div className="reveal mx-auto max-w-3xl space-y-5 px-6 text-center text-lg leading-relaxed text-[#555555]">
          {aboutPage.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Chapter
        heading={aboutPage.qhse.heading}
        image={images.securePrinting}
        imageAlt="Quality, health, safety and environment at Everest"
        bg="#f0f0f0"
      >
        <p>{aboutPage.qhse.mission}</p>
        <blockquote
          className="border-l-2 border-[#111111]/20 pl-5 text-xl italic leading-snug text-[#111111]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {aboutPage.qhse.vision}
        </blockquote>
        <p className="font-medium text-[#111111]">{aboutPage.qhse.actionsIntro}</p>
        <Checklist items={aboutPage.qhse.actions} />
      </Chapter>

      <Chapter
        heading={aboutPage.quality.heading}
        image={images.artworkPattern}
        imageAlt="Everest print quality and craftsmanship"
        bg="#ffffff"
        reverse
      >
        {aboutPage.quality.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="font-medium text-[#111111]">{aboutPage.quality.commitmentsIntro}</p>
        <Checklist items={aboutPage.quality.commitments} />
      </Chapter>

      <Chapter
        heading={aboutPage.security.heading}
        image={images.aboutFacility}
        imageAlt="Everest secure production plant"
        bg="#f0f0f0"
      >
        {aboutPage.security.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Chapter>

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
