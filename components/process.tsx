const steps = [
  {
    number: '01',
    title: 'Consultation',
    copy: 'We learn about your property, concerns and vision.',
  },
  {
    number: '02',
    title: 'Design',
    copy: 'Your solution is planned around site-specific conditions.',
  },
  {
    number: '03',
    title: 'Construction',
    copy: 'Our team completes the work with precision and care.',
  },
  {
    number: '04',
    title: 'Enjoy',
    copy: 'Relax with a stronger, more functional waterfront.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-[linear-gradient(rgba(3,20,34,.92),rgba(3,20,34,.96)),url('/assets/breakwall-mobile-hero.jpg')] bg-cover bg-center px-5 py-[75px] text-white md:px-[5vw] md:py-[110px]"
    >
      <div className="mx-auto mb-9 max-w-[850px] text-center md:mb-14">
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-primary">
          Our Proven Process
        </span>
        <h2 className="mt-4 font-display text-[48px] uppercase leading-[0.9] text-white md:text-[clamp(48px,5vw,72px)]">
          From shoreline problem to finished waterfront.
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1300px] gap-9 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <article key={step.number} className="border-t border-white/25 pt-7">
            <b className="font-display text-[45px] font-normal text-accent">
              {step.number}
            </b>
            <h3 className="mb-2 mt-3 font-display text-[26px] uppercase">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#9fb4c2]">{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
