import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
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
      <Services />
      <WhyUs />
      <Resources />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
