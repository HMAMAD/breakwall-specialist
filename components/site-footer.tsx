import { asset } from '@/lib/base-path'

export function SiteFooter() {
  return (
    <footer className="flex flex-col justify-between gap-7 bg-navy-deep px-6 py-8 text-white md:flex-row md:items-center md:px-[6vw]">
      <div className="flex items-center gap-4">
        <div className="shrink-0 rounded-lg bg-white p-2 shadow-[0_6px_18px_rgba(0,0,0,0.28)]">
          <img
            src={asset('/assets/logo.png')}
            alt="Breakwall Specialists"
            className="h-16 w-auto"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <strong className="font-display text-lg uppercase tracking-[0.06em]">
            Breakwall Specialists
          </strong>
          <span className="text-xs text-[#728b9a]">
            Your waterfront lifestyle professionals.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 md:text-right">
        <a href="tel:+15199199057" className="font-display text-lg text-accent">
          (519) 919-9057
        </a>
        <span className="text-xs text-[#728b9a]">
          Windsor-Essex • Lake St. Clair
        </span>
      </div>
    </footer>
  )
}
