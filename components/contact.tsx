'use client'

import { useState, type FormEvent } from 'react'

const services = [
  'Breakwall',
  'Wave Deflector',
  'Dock',
  'Paver Deck',
  'Boat or PWC Lift',
  'Repair or Maintenance',
]

const fieldClasses =
  'w-full rounded border border-white/15 bg-navy-panel p-3.5 text-white outline-none focus:border-accent'

const labelClasses =
  'flex flex-col gap-2 text-xs font-extrabold uppercase tracking-[0.07em] text-[#c6d5df]'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      '',
      `${data.get('details')}`,
    ].join('\n')

    const mailto = `mailto:info@breakwallspecialists.ca?subject=${encodeURIComponent(
      'Free Estimate Request',
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="grid gap-10 bg-navy px-6 py-[75px] text-white md:grid-cols-[0.8fr_1.2fr] md:gap-[70px] md:px-[6vw] md:py-[100px]"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#70c7ff]">
          Start Your Waterfront Project
        </span>
        <h2 className="mt-4 font-display text-[48px] uppercase leading-[0.9] md:text-[75px]">
          Ready to protect your shoreline?
        </h2>
        <p className="mt-4 max-w-[520px] leading-relaxed text-[#a7bdcb]">
          Tell us about your property and the work you are considering. We&apos;ll
          help you understand the next step.
        </p>
        <a
          href="tel:+15199199057"
          className="mt-6 inline-block font-display text-[32px] text-[#49b7f4]"
        >
          (519) 919-9057
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-[10px] border border-white/10 bg-navy-card p-6 md:grid-cols-2 md:p-8"
      >
        <label className={labelClasses}>
          Name
          <input name="name" autoComplete="name" required className={fieldClasses} />
        </label>
        <label className={labelClasses}>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className={fieldClasses}
          />
        </label>
        <label className={labelClasses}>
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={fieldClasses}
          />
        </label>
        <label className={labelClasses}>
          Service
          <select name="service" className={fieldClasses}>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className={`${labelClasses} md:col-span-2`}>
          Project details
          <textarea
            name="details"
            rows={5}
            placeholder="Tell us about your shoreline or project."
            className={`${fieldClasses} resize-y`}
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-[52px] items-center justify-center rounded-[5px] bg-primary px-6 text-xs font-extrabold uppercase tracking-[0.045em] text-primary-foreground transition-colors hover:bg-accent md:col-span-2"
        >
          Request a Free Estimate
        </button>
        {submitted && (
          <p
            role="status"
            className="text-sm text-accent md:col-span-2"
          >
            Thanks! Your email app should open to send us your request.
          </p>
        )}
      </form>
    </section>
  )
}
