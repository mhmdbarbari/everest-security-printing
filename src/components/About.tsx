import { Link } from 'react-router-dom'
import { about } from '../data/content'
import { images } from '../data/media'

export default function About() {
  return (
    <section id="about" className="bg-[#ffffff] py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="reveal overflow-hidden rounded-[2rem]">
          <img
            src={images.aboutFacility}
            alt="Everest production facility"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="reveal">
          <h2 className="text-3xl font-normal leading-tight text-[#111111] md:text-[2.75rem]">
            Who We Are
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#555555]">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            to="/about"
            className="eyebrow mt-6 inline-block border-b border-[#111111]/30 pb-1 text-xs font-medium text-[#111111]/80 transition hover:border-[#111111] hover:text-[#111111]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
