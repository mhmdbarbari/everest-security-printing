import { Link } from 'react-router-dom'
import { about } from '../data/content'
import { images } from '../data/media'

export default function About() {
  return (
    <section id="about" className="bg-[#F5F1E9] py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="reveal overflow-hidden rounded-[2rem]">
          <img
            src={images.aboutFacility}
            alt="Everest production facility"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="reveal">
          <h2 className="text-2xl font-normal leading-tight text-[#101D2B] md:text-4xl">
            Who We Are
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#101D2B]/75">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            to="/about"
            className="eyebrow mt-6 inline-block border-b border-[#C4A46A] pb-1 text-xs font-medium text-[#101D2B]/80 transition hover:text-[#101D2B]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
