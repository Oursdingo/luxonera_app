import HeroSection from '@/components/sections/HeroSection'
import FeaturedCollection from '@/components/sections/FeaturedCollection'
import HeritageStory from '@/components/sections/HeritageStory'
import CraftsmanshipSection from '@/components/sections/CraftsmanshipSection'
import { getFeaturedWatches } from '@/data/products'

export default function HomePage() {
  const featuredWatches = getFeaturedWatches()

  return (
    <>
      <HeroSection />
      <FeaturedCollection watches={featuredWatches} />
      <HeritageStory />
      <CraftsmanshipSection />
    </>
  )
}
