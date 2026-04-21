import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import ForWho from './sections/ForWho'
import WhatYoullBuild from './sections/WhatYoullBuild'
import TheStack from './sections/TheStack'
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
      <Curriculum />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
