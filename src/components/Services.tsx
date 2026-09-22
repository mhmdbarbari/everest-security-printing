import { services } from '../data/content'
import { images } from '../data/media'

const panels = [
  { image: images.artworkPattern, position: '50% 50%' },
  { image: images.securePrinting, position: '50% 20%' },
  { image: images.factoryWide, position: '50% 40%' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#ffffff] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 max-w-xl">
          <h2 className="text-3xl font-normal leading-tight text-[#111111] md:text-[2.75rem]">
            Our Services
          </h2>
        </div>

        <div className="space-y-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#f0f0f0]">
                <img
                  src={panels[i].image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: panels[i].position }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-normal text-[#111111] md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-[#555555]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
