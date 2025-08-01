import { CarsShowcase } from '@/features/cars/cars-showcase'
import { Footer } from '@/components/misc/footer'
import { LandingBanner } from '@/features/banner/landing-banner'
import { NumbersCard } from '@/components/misc/numbers-card'

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

export default function Home() {
   return (
      <>
         <main className="flex min-h-screen flex-col items-center justify-between">
            <LandingBanner />
            <div className="main-container flex flex-col">
               <NumbersCard />
               <CarsShowcase />
            </div>
         </main>
         <Footer />
      </>
   )
}
