import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import PremiumServices from '@/components/PremiumServices'
import WhyUs from '@/components/WhyUs'
import Resources from '@/components/Resources'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: 'https://www.promotedsoccerconsultants.com/',
  },
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <PremiumServices />
      <WhyUs />
      <Resources />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
