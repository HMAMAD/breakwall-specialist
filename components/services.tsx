'use client'

import { useCallback, useEffect, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { asset } from '@/lib/base-path'

// NOTE: `photos` below are PLACEHOLDERS drawn from the two project galleries.
// Swap these for real per-service photos when they are provided.
const services = [
  {
    number: '01',
    title: 'Breakwalls',
    copy: 'Custom steel and shoreline protection systems designed around your property and water conditions.',
    photos: [
      '/assets/projects/mike-renae/mike-renae-02.jpg',
      '/assets/projects/mike-renae/mike-renae-05.jpg',
      '/assets/projects/rick/rick-02.jpg',
    ],
  },
  {
    number: '02',
    title: 'Wave Deflectors',
    copy: 'Reduce wave energy, spray and shoreline erosion with professionally designed deflection systems.',
    photos: [
      '/assets/projects/mike-renae/mike-renae-06.jpg',
      '/assets/projects/mike-renae/mike-renae-01.jpg',
      '/assets/projects/mike-renae/mike-renae-04.jpg',
    ],
  },
  {
    number: '03',
    title: 'Docks',
    copy: 'Functional, durable docks created for safe access, entertaining and everyday waterfront enjoyment.',
    photos: [
      '/assets/projects/rick/rick-01.jpg',
      '/assets/projects/mike-renae/mike-renae-03.jpg',
      '/assets/projects/mike-renae/mike-renae-09.jpg',
    ],
  },
  {
    number: '04',
    title: 'Paver Decks',
    copy: 'Polished outdoor living spaces that connect your home to the water with style and practicality.',
    photos: [
      '/assets/projects/mike-renae/mike-renae-07.jpg',
      '/assets/projects/mike-renae/mike-renae-08.jpg',
      '/assets/projects/rick/rick-03.jpg',
    ],
  },
  {
    number: '05',
    title: 'Boat & PWC Lifts',
    copy: 'Premium Golden lifts that protect your watercraft while keeping launching simple and convenient.',
    photos: [
      '/assets/projects/rick/rick-01.jpg',
      '/assets/projects/mike-renae/mike-renae-04.jpg',
      '/assets/projects/mike-renae/mike-renae-09.jpg',
    ],
  },
  {
    number: '06',
    title: 'Repairs & Maintenance',
    copy: 'Professional inspections, restoration and maintenance to keep shoreline structures performing properly.',
    photos: [
      '/assets/projects/rick/rick-03.jpg',
      '/assets/projects/mike-renae/mike-renae-06.jpg',
      '/assets/projects/mike-renae/mike-renae-02.jpg',
    ],
  },
]

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [photoIdx, setPhotoIdx] = useState(0)

  const active = openIdx === null ? null : services[openIdx]
  const count = active?.photos.length ?? 0

  const close = useCallback(() => setOpenIdx(null), [])
  const step = useCallback(
    (delta: number) => setPhotoIdx((i) => (i + delta + count) % count),
    [count],
  )

  function open(i: number) {
    setOpenIdx(i)
    setPhotoIdx(0)
  }

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [active, close, step])

  return (
    <section
      id="services"
      className="bg-navy-panel px-5 py-[75px] text-white md:px-[5vw] md:py-[110px]"
    >
      <div className="mx-auto mb-9 max-w-[850px] text-center md:mb-14">
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
          Complete Waterfront Solutions
        </span>
        <h2 className="mt-4 font-display text-[48px] uppercase leading-[0.9] md:text-[clamp(48px,5vw,72px)]">
          Everything your shoreline needs.
        </h2>
        <p className="mt-4 leading-relaxed text-white/70">
          One experienced team for protection, access, recreation and long-term
          maintenance.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1420px] gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <button
            key={service.number}
            type="button"
            onClick={() => open(i)}
            className="group relative min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#0d2c44,#081827)] p-8 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(64,182,255,0.55)] hover:bg-[linear-gradient(145deg,#123a58,#0a2033)] hover:shadow-[0_24px_55px_rgba(0,0,0,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:min-h-[255px]"
          >
            <div className="absolute -bottom-[90px] -right-[75px] size-[180px] rounded-full border border-[rgba(64,182,255,0.1)] transition-transform duration-500 group-hover:scale-125" />
            <div className="font-display text-lg font-extrabold text-accent">
              {service.number}
            </div>
            <h3 className="mb-2.5 mt-11 font-display text-[30px] uppercase">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#aac0cf]">
              {service.copy}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Camera className="size-3.5" />
              View gallery
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} gallery`}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X className="size-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-[1100px] flex-col items-center"
          >
            <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
              {active.title}
            </div>

            <div className="relative flex w-full items-center justify-center">
              {count > 1 && (
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary md:left-4"
                >
                  <ChevronLeft className="size-6" />
                </button>
              )}

              <img
                src={asset(active.photos[photoIdx])}
                alt={`${active.title} photo ${photoIdx + 1}`}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />

              {count > 1 && (
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary md:right-4"
                >
                  <ChevronRight className="size-6" />
                </button>
              )}
            </div>

            {count > 1 && (
              <div className="mt-4 flex gap-2">
                {active.photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setPhotoIdx(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === photoIdx ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
