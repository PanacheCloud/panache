import { HeroSection } from '~/components/about/hero-section'
import { WhySection } from '~/components/about/why-section'
import { HowSection } from '~/components/about/how-section'
import { WhatSection } from '~/components/about/what-section'
import { PublicLayout } from '~/components/public-layout'

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <WhySection />
      <HowSection />
      <WhatSection />
    </PublicLayout>
  )
}
