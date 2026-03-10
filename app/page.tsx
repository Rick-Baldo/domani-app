import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/marketing/Hero'
import Problem from '@/components/marketing/Problem'
import Solution from '@/components/marketing/Solution'
import Squad from '@/components/marketing/Squad'
import Brands from '@/components/marketing/Brands'
import WhatsappButton from '@/components/ui/WhatsappButton'
import CtaSection from '@/components/marketing/CtaSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Brands />
      <Squad />
      <CtaSection />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
