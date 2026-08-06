'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, Menu, X } from 'lucide-react'
import { asset } from '@/lib/base-path'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 220)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-30 text-white"
      style={{
        background:
          'linear-gradient(180deg, rgba(4,17,29,.94), rgba(4,17,29,.55), transparent)',
      }}
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center gap-9 px-4 md:h-[84px] md:px-[4vw]">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`grid size-11 place-items-center rounded-full border border-white/30 bg-[rgba(3,17,29,0.45)] text-white transition-all duration-300 hover:bg-primary hover:border-primary ${
              scrolled
                ? 'scale-100 opacity-100'
                : 'pointer-events-none -translate-x-1 scale-90 opacity-0'
            }`}
          >
            <ArrowUp className="size-5" />
          </button>

          {/* Mobile: logo home button (hamburger sits on the right) */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Breakwall Specialists home"
            className="flex items-center rounded-md bg-white p-1 shadow-[0_4px_14px_rgba(0,0,0,0.25)] lg:hidden"
          >
            <img
              src={asset('/assets/logo.png')}
              alt="Breakwall Specialists"
              className="h-9 w-auto"
            />
          </button>
        </div>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden gap-7 text-[13px] font-semibold uppercase tracking-[0.06em] lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[5px] bg-primary px-5 py-3 text-xs font-extrabold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-accent lg:inline-flex"
        >
          Free Estimate
        </a>

        {/* Desktop: logo home button in the top-right corner */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Breakwall Specialists home"
          className="hidden items-center rounded-lg bg-white p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-105 lg:flex"
        >
          <img
            src={asset('/assets/logo.png')}
            alt="Breakwall Specialists"
            className="h-12 w-auto"
          />
        </button>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex size-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(3,17,29,0.38)] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-3.5 top-[70px] flex flex-col rounded-[9px] border border-white/10 bg-navy-panel p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 p-3.5 text-[13px] font-bold uppercase text-white last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
