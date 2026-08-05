import { asset } from '@/lib/base-path'

const trust = [
  {
    title: 'Built to Last',
    copy: 'Engineered for demanding Great Lakes conditions.',
  },
  {
    title: 'Waterfront Experts',
    copy: 'Property-specific planning and integrated solutions.',
  },
  {
    title: 'Complete Service',
    copy: 'Breakwalls, docks, decks, lifts, repairs and maintenance.',
  },
]

const stats = [
  { value: 'Custom', label: 'Designed for your property' },
  { value: 'Complete', label: 'Waterfront solutions' },
  { value: 'Local', label: 'Serving Windsor-Essex' },
  { value: 'Durable', label: 'Built for generations' },
]

export function Hero() {
  return (
    <section
      aria-label="Breakwall Specialists hero section"
      className="relative min-h-[100svh] overflow-hidden bg-navy text-white md:min-h-[900px]"
    >
      {/* Background image */}
      <div
        role="img"
        aria-label="Metal breakwall protecting a shoreline from crashing waves"
        className="absolute inset-0 bg-navy-deep"
      >
        {/* Mobile background */}
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat md:hidden"
          style={{ backgroundImage: `url('${asset('/assets/breakwall-mobile-hero.jpg')}')` }}
        />
        {/* Desktop background */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center md:block"
          style={{ backgroundImage: `url('${asset('/assets/breakwall-desktop-hero.png')}')` }}
        />
      </div>
      {/* Shade overlays */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,17,29,.08) 0%, rgba(3,17,29,.10) 31%, rgba(3,17,29,.82) 66%, #03111d 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(3,17,29,.88) 0%, rgba(3,17,29,.54) 38%, rgba(3,17,29,.05) 70%), linear-gradient(0deg, rgba(2,14,24,.92) 0%, transparent 34%, rgba(2,14,24,.22) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-14 px-[22px] pb-[205px] pt-[41vh] md:grid-cols-[minmax(0,690px)_310px] md:justify-between md:px-[4vw] md:pb-[150px] md:pt-[185px]">
        <div className="max-w-[520px] md:max-w-none">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#70c7ff] md:text-xs">
            Windsor • Essex County • Lake St. Clair
          </p>
          <h1 className="mt-3 font-display text-[62px] font-extrabold uppercase leading-[0.82] tracking-tight [text-shadow:0_4px_20px_rgba(0,0,0,0.45)] md:text-[clamp(64px,7vw,112px)] md:leading-[0.79]">
            Protect Your
            <br />
            <span className="text-[#e8f5ff]">Waterfront.</span>
          </h1>
          <p className="my-2 -rotate-2 font-script text-[38px] text-accent md:my-3 md:text-[clamp(38px,4vw,65px)]">
            Preserve your lifestyle.
          </p>
          <p className="max-w-[470px] text-sm leading-relaxed text-white/90 md:max-w-[610px] md:text-lg md:leading-[1.7]">
            Premium metal breakwalls, docks, wave deflectors and complete
            shoreline solutions built for strength, longevity and lasting
            waterfront value.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 md:flex md:gap-3.5">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-[5px] bg-primary px-4 text-[10px] font-extrabold uppercase tracking-[0.045em] text-primary-foreground shadow-[0_14px_32px_rgba(0,122,204,0.25)] transition-colors hover:bg-accent md:min-h-[52px] md:px-6 md:text-xs"
            >
              Get a Free Estimate
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-[5px] border border-white/60 bg-[rgba(4,21,35,0.26)] px-4 text-[10px] font-extrabold uppercase tracking-[0.045em] text-white backdrop-blur transition-colors hover:bg-[rgba(4,21,35,0.5)] md:min-h-[52px] md:px-6 md:text-xs"
            >
              View Our Projects
            </a>
          </div>
        </div>

        <aside
          aria-label="Company advantages"
          className="hidden rounded-[7px] border border-white/10 bg-[rgba(4,22,37,0.84)] px-7 py-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.28)] backdrop-blur-lg md:block"
        >
          {trust.map((item) => (
            <article
              key={item.title}
              className="border-b border-white/15 py-6 last:border-0"
            >
              <strong className="block font-display text-[22px] uppercase">
                {item.title}
              </strong>
              <span className="mt-1.5 block text-[13px] leading-relaxed text-white/75">
                {item.copy}
              </span>
            </article>
          ))}
        </aside>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 z-20 grid w-full grid-cols-2 bg-[rgba(3,17,29,0.92)] px-4 py-4 backdrop-blur md:grid-cols-4 md:px-[5vw] md:py-6">
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`px-3 py-2 md:px-6 md:py-1 ${
              i % 2 === 0 ? 'border-r border-white/20' : ''
            } md:border-r md:last:border-0 ${i === 1 ? 'md:border-r' : ''}`}
          >
            <strong className="block font-display text-[19px] uppercase md:text-[25px]">
              {stat.value}
            </strong>
            <span className="mt-1 block text-[9px] text-white/60 md:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
