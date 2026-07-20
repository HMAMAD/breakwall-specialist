const services = [
  {
    number: '01',
    title: 'Breakwalls',
    copy: 'Custom steel and shoreline protection systems designed around your property and water conditions.',
  },
  {
    number: '02',
    title: 'Wave Deflectors',
    copy: 'Reduce wave energy, spray and shoreline erosion with professionally designed deflection systems.',
  },
  {
    number: '03',
    title: 'Docks',
    copy: 'Functional, durable docks created for safe access, entertaining and everyday waterfront enjoyment.',
  },
  {
    number: '04',
    title: 'Paver Decks',
    copy: 'Polished outdoor living spaces that connect your home to the water with style and practicality.',
  },
  {
    number: '05',
    title: 'Boat & PWC Lifts',
    copy: 'Premium Golden lifts that protect your watercraft while keeping launching simple and convenient.',
  },
  {
    number: '06',
    title: 'Repairs & Maintenance',
    copy: 'Professional inspections, restoration and maintenance to keep shoreline structures performing properly.',
  },
]

export function Services() {
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
        {services.map((service) => (
          <article
            key={service.number}
            className="relative min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,#0d2c44,#081827)] p-8 md:min-h-[255px]"
          >
            <div className="absolute -bottom-[90px] -right-[75px] size-[180px] rounded-full border border-[rgba(64,182,255,0.1)]" />
            <div className="font-display text-lg font-extrabold text-accent">
              {service.number}
            </div>
            <h3 className="mb-2.5 mt-11 font-display text-[30px] uppercase">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#aac0cf]">
              {service.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
