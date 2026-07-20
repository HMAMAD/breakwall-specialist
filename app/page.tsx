import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ProjectBand } from '@/components/project-band'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <ProjectBand />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
