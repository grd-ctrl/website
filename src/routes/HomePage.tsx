import { HeroSection } from '../components/sections/HeroSection'
import { PillarsSection } from '../components/sections/PillarsSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { UseCasesSection } from '../components/sections/UseCasesSection'
import { DemoSection } from '../components/sections/DemoSection'
import { PricingSection } from '../components/sections/PricingSection'
import { Footer } from '../components/sections/Footer'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ProblemSection />
      <FeaturesSection />
      <UseCasesSection />
      <DemoSection />
      <PricingSection />
      <Footer />
    </>
  )
}
