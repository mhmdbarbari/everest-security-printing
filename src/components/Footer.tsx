import { contact, nav } from '../data/content'
import { brand } from '../data/media'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101D2B] pt-20 pb-8 text-[#F5F1E9]/65">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <img src={brand.logo} alt="Everest Security Printing" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              {contact.tagline}
            </p>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#F5F1E9] hover:text-[#C4A46A]"
            >
              Facebook →
            </a>
          </div>

          <div>
            <h4 className="eyebrow text-xs font-medium text-[#C4A46A]">Navigate</h4>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#C4A46A]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-xs font-medium text-[#C4A46A]">Contact</h4>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              <li>Tel: {contact.tel}</li>
              <li>Fax: {contact.fax}</li>
              <li>Cell: {contact.cell}</li>
              <li>{contact.address}</li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-[#C4A46A]">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[#C4A46A]/20 pt-6 text-center text-xs text-[#F5F1E9]/40">
          © {new Date().getFullYear()} Everest Security Printing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
