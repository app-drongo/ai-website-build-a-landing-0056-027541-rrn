import Hero from '@/components/sections/home/Hero'
import Services from '@/components/sections/home/Services'
import Features from '@/components/sections/home/Features'
import Cta from '@/components/sections/home/Cta'
import About from '@/components/sections/home/About'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  )
}