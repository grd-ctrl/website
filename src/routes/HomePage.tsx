import { HeroSection } from '../components/sections/HeroSection'
import { StatsSection } from '../components/sections/StatsSection'
import { PillarsSection } from '../components/sections/PillarsSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { IntegrationsSection } from '../components/sections/IntegrationsSection'
import { UseCasesSection } from '../components/sections/UseCasesSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { DemoSection } from '../components/sections/DemoSection'
import { PricingSection } from '../components/sections/PricingSection'
import { ImpactSection } from '../components/sections/ImpactSection'
import { SupportSection } from '../components/sections/SupportSection'
import { Footer } from '../components/sections/Footer'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PillarsSection />
      <ProblemSection />
      <FeaturesSection />
      <IntegrationsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <DemoSection />
      <PricingSection />
      <ImpactSection />
      <SupportSection />
      <Footer />
    </>
  )
}
