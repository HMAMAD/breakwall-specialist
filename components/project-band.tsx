'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { asset } from '@/lib/base-path'

type Project = {
  id: string
  tab: string
  client: string
  blurb: string
  scope: string[]
  photos: string[]
}

const projects: Project[] = [
  {
    id: 'rick',
    tab: 'The Rick Project',
    client: 'Rick',
    blurb:
      "Rick's shoreline was originally held back by a mix of armour stone and recycled concrete. We removed the aging protection and replaced it with a durable steel sheet pile wall built for decades of Great Lakes conditions, then transformed how the family uses the water.",
    scope: [
      'Steel sheet pile wall, replacing the old armour stone and recycled concrete',
      '60 foot dock for full access to the lake',
      '10,000 lb boat lift on the east side for fast, easy launches',
      'Bump poles and cleats on the west side for visiting friends and family',
      'Aluminum stairs for safe, simple water entry',
      'Maintenance free paver deck with proper drainage that will never rot',
    ],
    photos: [
      '/assets/projects/rick/rick-01.jpg',
      '/assets/projects/rick/rick-02.jpg',
      '/assets/projects/rick/rick-03.jpg',
    ],
  },
  {
    id: 'mike-renae',
    tab: 'The Mike & Renae Project',
    client: 'Mike & Renae',
    blurb:
      "Mike and Renae's waterfront was constrained by an aging retaining wall of recycled concrete and rock. We replaced it entirely with a new steel sheet pile wall, complete with proper drainage and an integrated wave deflector to tame wave run up, then built out a dock designed around how they actually enjoy the lake.",
    scope: [
      'Steel sheet pile wall with proper drainage',
      'Wave deflector to mitigate wave run up',
      '60 foot dock plus a 12 foot finger dock',
      'Two matching jet ski lifts, kept off the main dock to preserve space',
      'Bump poles and cleats on the west side for visiting boats and jet skis',
      '6 by 12 platform for unobstructed sunset views',
      'Maintenance free paver deck with proper drainage',
      'Streamlined finish trim along the back of the wall',
    ],
    photos: [
      '/assets/projects/mike-renae/mike-renae-01.jpg',
      '/assets/projects/mike-renae/mike-renae-02.jpg',
      '/assets/projects/mike-renae/mike-renae-03.jpg',
      '/assets/projects/mike-renae/mike-renae-04.jpg',
      '/assets/projects/mike-renae/mike-renae-05.jpg',
      '/assets/projects/mike-renae/mike-renae-06.jpg',
      '/assets/projects/mike-renae/mike-renae-07.jpg',
      '/assets/projects/mike-renae/mike-renae-08.jpg',
      '/assets/projects/mike-renae/mike-renae-09.jpg',
    ],
  },
]

export function ProjectBand() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [index, setIndex] = useState(0)

  const active = projects.find((p) => p.id === activeId) ?? projects[0]
  const count = active.photos.length

  function selectProject(id: string) {
    setActiveId(id)
    setIndex(0)
  }

  function step(delta: number) {
    setIndex((i) => (i + delta + count) % count)
  }

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1500px] px-5 py-[75px] md:px-[5vw] md:py-[100px]"
    >
      <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
        Featured Work
      </span>

      {/* Project tabs */}
      <div className="mt-5 flex flex-wrap gap-3">
        {projects.map((p) => {
          const isActive = p.id === activeId
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => selectProject(p.id)}
              aria-pressed={isActive}
              className={`min-h-11 rounded-full border px-5 text-[11px] font-extrabold uppercase tracking-[0.08em] transition-colors md:text-xs ${
                isActive
                  ? 'border-primary bg-primary text-primary-foreground shadow-[0_10px_28px_rgba(0,122,204,0.25)]'
                  : 'border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {p.tab}
            </button>
          )
        })}
      </div>

      {/* Content: text left, carousel right */}
      <div className="mt-8 grid items-center gap-10 md:mt-10 md:grid-cols-[0.85fr_1.15fr] md:gap-[70px]">
        <div>
          <h2 className="font-display text-[40px] uppercase leading-[0.92] md:text-[64px]">
            Built for the Water.
            <br />
            Designed for {active.client}.
          </h2>
          <p className="my-6 leading-relaxed text-muted-foreground md:my-7">
            {active.blurb}
          </p>
          <ul className="mb-8 space-y-2.5">
            {active.scope.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-[5px] bg-primary px-6 text-xs font-extrabold uppercase tracking-[0.045em] text-primary-foreground shadow-[0_14px_32px_rgba(0,122,204,0.25)] transition-colors hover:bg-accent"
          >
            Discuss Your Project
          </a>
        </div>

        {/* Carousel */}
        <div className="relative h-[420px] overflow-hidden rounded-[14px] shadow-[0_35px_80px_rgba(8,33,51,0.22)] md:h-[560px]">
          <div className="absolute left-6 top-6 z-10 rounded bg-[rgba(5,22,36,0.82)] px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white">
            {active.tab}
          </div>

          {active.photos.map((src, i) => (
            <img
              key={src}
              src={asset(src)}
              alt={`${active.tab} photo ${i + 1}`}
              className={`absolute size-full object-cover transition-opacity duration-500 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(5,22,36,0.6)] text-white backdrop-blur transition-colors hover:bg-primary"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(5,22,36,0.6)] text-white backdrop-blur transition-colors hover:bg-primary"
              >
                <ChevronRight className="size-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {active.photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
