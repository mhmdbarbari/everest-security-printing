import { useEffect, useState } from 'react'
import { contact, nav } from '../data/content'
import { brand } from '../data/media'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open ? '' : scrolled ? 'bg-[#F5F1E9]/90 shadow-sm shadow-black/5 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/#top" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={open || !scrolled ? brand.logo : brand.logoOnLight}
            alt="Everest Security Printing"
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`eyebrow text-[13px] font-medium transition ${
                scrolled ? 'text-[#101D2B]/70 hover:text-[#C4A46A]' : 'text-[#F5F1E9]/85 hover:text-[#C4A46A]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`relative z-10 md:hidden ${open || !scrolled ? 'text-[#F5F1E9]' : 'text-[#101D2B]'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <nav
        className={`fixed inset-y-0 right-0 flex w-[78%] max-w-xs flex-col justify-between overflow-hidden rounded-l-[2rem] bg-[#101D2B] px-8 py-24 shadow-[-20px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-14 select-none font-bold text-[#F5F1E9]/[0.05]"
          style={{ fontSize: '13rem' }}
        >
          e
        </span>

        <ul className="relative flex flex-col gap-1">
          {nav.map((item, i) => (
            <li key={item.href} className="group overflow-hidden">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative inline-block py-3 text-xl font-medium text-[#F5F1E9] transition-all duration-500 ease-out ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${150 + i * 70}ms` : '0ms' }}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C4A46A] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`relative border-t border-[#C4A46A]/25 pt-6 text-sm text-[#F5F1E9]/60 transition-all duration-500 ease-out ${
            open ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
          style={{ transitionDelay: open ? `${150 + nav.length * 70}ms` : '0ms' }}
        >
          <p>{contact.tel}</p>
          <p className="mt-1">{contact.email}</p>
        </div>
      </nav>
    </header>
  )
}
