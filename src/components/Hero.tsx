import { useEffect, useState } from 'react'
import { hero } from '../data/content'
import { images } from '../data/media'

const SLIDES = [
  { src: images.heroBanknote, alt: 'Engraved security print detail' },
  { src: images.factoryWide, alt: 'Everest production floor' },
  { src: images.artworkPattern, alt: 'Security guilloche pattern' },
]

const SLIDE_MS = 6000

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let ticking = false
    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative flex h-screen min-h-[640px] items-end overflow-hidden bg-[#101D2B]">
      <div
        className="absolute inset-0 -top-16"
        style={{ transform: `translateY(${Math.min(scrollY, 700) * 0.22}px)` }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 overflow-hidden"
            style={{
              opacity: i === index ? 1 : 0,
              transition: 'opacity 2200ms cubic-bezier(0.45, 0, 0.15, 1)',
            }}
          >
            <img
              key={i === index ? `active-${index}` : `idle-${i}`}
              src={slide.src}
              alt={slide.alt}
              className={`h-full w-full object-cover ${i === index ? 'ken-burns' : ''}`}
            />
          </div>
        ))}

        <div className="scan-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#101D2B]/88 via-[#101D2B]/40 to-[#101D2B]/55" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
        <p className="eyebrow text-xs font-medium text-[#F5F1E9]/70">{hero.eyebrow}</p>
        <h1 className="mt-6 max-w-2xl font-normal text-5xl leading-[1.05] text-[#F5F1E9] md:text-7xl">
          Trust,
          <br />
          <span className="text-[#C4A46A]">engraved</span> in every detail.
        </h1>
        <p className="mt-7 max-w-lg text-xl leading-relaxed text-[#F5F1E9]/75">
          {hero.subtitle}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-7">
          <a
            href={hero.ctaPrimary.href}
            className="rounded-full bg-[#C4A46A] px-8 py-3.5 text-sm font-medium text-[#101D2B] transition hover:bg-[#d3b884]"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="eyebrow border-b border-[#F5F1E9]/40 pb-1 text-xs font-medium text-[#F5F1E9]/85 transition hover:border-[#C4A46A] hover:text-[#C4A46A]"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-[#C4A46A]' : 'w-1.5 bg-[#F5F1E9]/40 hover:bg-[#F5F1E9]/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
