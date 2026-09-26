import { useEffect, useRef, useState } from 'react'
import { portfolioIntro } from '../data/content'
import { clients } from '../data/media'

type Phase = 'visible' | 'exiting' | 'entering'

const INTERVAL_MS = 3200

const GHOSTS = [
  { top: '6%', left: '8%', size: 82, delay: '0s', clientIndex: 1 },
  { top: '16%', left: '80%', size: 98, delay: '1.2s', clientIndex: 4 },
  { top: '72%', left: '4%', size: 90, delay: '2.1s', clientIndex: 7 },
  { top: '80%', left: '86%', size: 78, delay: '0.6s', clientIndex: 10 },
  { top: '4%', left: '44%', size: 68, delay: '3s', clientIndex: 13 },
  { top: '46%', left: '1%', size: 64, delay: '2.6s', clientIndex: 8 },
  { top: '42%', left: '91%', size: 66, delay: '0.9s', clientIndex: 11 },
]

const ghostLogos = GHOSTS.map((g) => ({ ...g, logo: clients[g.clientIndex % clients.length].logo }))

export default function Portfolio() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('visible')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const id = setInterval(() => {
      setPhase('exiting')
      const t1 = setTimeout(() => {
        setIndex((i) => (i + 1) % clients.length)
        setPhase('entering')
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase('visible'))
        })
      }, 480)
      timers.current.push(t1)
    }, INTERVAL_MS)
    return () => {
      clearInterval(id)
      timers.current.forEach(clearTimeout)
    }
  }, [])

  const client = clients[index]

  const poses: Record<Phase, React.CSSProperties> = {
    visible: {
      opacity: 1,
      transform: 'scale(1) rotateY(0deg)',
      filter: 'blur(0px) brightness(1)',
      transitionDuration: '520ms',
    },
    exiting: {
      opacity: 0,
      transform: 'scale(1.18) rotateY(16deg)',
      filter: 'blur(10px) brightness(1.7)',
      transitionDuration: '460ms',
    },
    entering: {
      opacity: 0,
      transform: 'scale(0.7) rotateY(-16deg)',
      filter: 'blur(8px) brightness(1.3)',
      transitionDuration: '0ms',
    },
  }

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#101D2B] py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="eyebrow text-xl font-medium text-[#F5F1E9]/75 md:text-3xl">Portfolio</span>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#F5F1E9]/65">
          {portfolioIntro}
        </p>
      </div>

      <div className="relative mx-auto mt-6 h-[520px] max-w-4xl md:h-[640px]">
        {ghostLogos.map((g, i) => (
          <div
            key={i}
            className="ghost-logo absolute rounded-2xl bg-[#F5F1E9]/95 p-3 opacity-90 shadow-lg shadow-black/20"
            style={{ top: g.top, left: g.left, width: g.size, animationDelay: g.delay }}
          >
            <img src={g.logo} alt="" className="w-full object-contain" />
          </div>
        ))}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[640px] md:w-[640px]"
          style={{
            background:
              'radial-gradient(circle, rgba(196,164,106,0.20) 0%, rgba(196,164,106,0.07) 42%, transparent 72%)',
          }}
        />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#F5F1E9] shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:h-[22rem] md:w-[22rem]">
            <img
              src={client.logo}
              alt={client.name}
              className="relative max-h-32 w-3/4 object-contain transition-all ease-out md:max-h-44"
              style={poses[phase]}
            />
          </div>

          <div className="mt-8 flex flex-col items-center text-center">
            <div className="flex items-baseline gap-2">
              <span className="font-normal text-xl text-[#C4A46A] md:text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-[#F5F1E9]/40">/ {String(clients.length).padStart(2, '0')}</span>
            </div>
            <p
              className="mt-2 text-xl text-[#F5F1E9] transition-opacity duration-300 md:text-2xl"
              style={{ opacity: phase === 'visible' ? 1 : 0 }}
            >
              {client.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
