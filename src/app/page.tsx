import { CarsShowcase } from '@/components/cars-showcase'
import { Footer } from '@/components/footer'
import { LandingBanner } from '@/components/landing-banner'
import { NumbersCard } from '@/components/numbers-card'

export const revalidate = 3600 // 1h

export default function Home() {
   return (
      <>
         <main className="flex min-h-screen flex-col items-center justify-between">
            <LandingBanner />
            <div className="main-container flex flex-col gap-12 md:gap-16 lg:gap-24">
               <NumbersCard />
               <CarsShowcase />
            </div>
         </main>
         <Footer />
      </>
   )
}
