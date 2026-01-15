import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Offer from '@/components/sections/Offer'
import Method from '@/components/sections/Method'
import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Hero />
      <Problem />
      <Offer />
      <Method />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
