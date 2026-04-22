import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import ForWho from './sections/ForWho'
import WhatYoullBuild from './sections/WhatYoullBuild'
import TheStack from './sections/TheStack'
import SobreMi from './sections/SobreMi'
import Curriculum from './sections/Curriculum'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className="bg-cream">
      <Hero />
      <Marquee />
      <ForWho />
      <WhatYoullBuild />
      <TheStack />
      <SobreMi />
      <Curriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
