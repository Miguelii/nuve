import { CarsShowcase } from '@/features/cars/cars-showcase'
import { Footer } from '@/components/base/footer'
import ParallaxScroll from '@/features/parallax/parallax-scroll'
import LandingBanner from '@/features/landing/landing-banner'
import SmoothScrollHero from '@/components/base/smooth-scroll-hero'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24h

export default function Home() {
   return (
      <>
         <main>
            <LandingBanner />
            <div className="main-container flex flex-col w-full h-full">
               <ParallaxScroll />
               <CarsShowcase />
            </div>
            <section id="join" className="relative">
               <SmoothScrollHero
                  scrollHeight={2500}
                  desktopImage="/showcase/gt3_rs_3.webp"
                  mobileImage="/showcase/gt3_rs_3.webp"
                  initialClipPercentage={30}
                  finalClipPercentage={70}
               />
            </section>
         </main>
         <Footer />
      </>
   )
}
