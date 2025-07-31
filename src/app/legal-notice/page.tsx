import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Link from 'next/link'

export default async function LegalNoticePage() {
   return (
      <>
         <Header title="Nuvē" />

         <main className="flex flex-col items-start justify-start main-container min-h-page">
            <section className="mt-10 flex flex-col gap-8">
               <h1 className="text-primary text-2xl font-medium">Legal Notice</h1>

               <div className="flex flex-col gap-6 text-primary text-base">
                  <span>
                     This website is intended for educational and non-commercial purposes only.
                  </span>

                  <span>The project does not represent a real company or commercial offering.</span>

                  <span>Special thanks and credits to the following contributors:</span>

                  <ul className="list-disc pl-4.5 flex flex-col gap-2">
                     <li>
                        <strong>woyshnis.media</strong> - for the amazing images and videos. Check
                        out their work on{' '}
                        <Link
                           className="underline hover:text-neutral"
                           target="_blank"
                           prefetch={false}
                           href={'https://www.instagram.com/woyshnis.media/'}
                        >
                           Instagram
                        </Link>
                        .
                     </li>
                     <li>
                        <strong>Black Snow</strong> - for the free glb model of the{' '}
                        <Link
                           className="underline hover:text-neutral"
                           target="_blank"
                           prefetch={false}
                           href={
                              'https://sketchfab.com/3d-models/porsche-gt3-rs-e738eae819c34d19a31dd066c45e0f3d'
                           }
                        >
                           Porsche GT3RS
                        </Link>
                        .
                     </li>
                     <li>
                        <strong>Outlaw Games</strong> - for the free glb model of the{' '}
                        <Link
                           className="underline hover:text-neutral"
                           target="_blank"
                           prefetch={false}
                           href={
                              'https://sketchfab.com/3d-models/lamborghini-aventador-e328d9f5dcfd48bdbe8c73324b52ece3'
                           }
                        >
                           Lamborghini
                        </Link>
                        .
                     </li>
                     <li>
                        <strong>Black Snow</strong> - for the free glb model of the{' '}
                        <Link
                           className="underline hover:text-neutral"
                           target="_blank"
                           prefetch={false}
                           href={
                              'https://sketchfab.com/3d-models/ferrari-sf90-stradale-833c5e9fb6f945cc82450fffbb96e77b'
                           }
                        >
                           Ferrari SF90
                        </Link>
                        .
                     </li>
                     <li>
                        <strong>Ricy</strong> - for the free glb model of the{' '}
                        <Link
                           className="underline hover:text-neutral"
                           target="_blank"
                           prefetch={false}
                           href={
                              'https://sketchfab.com/3d-models/2021-bmw-m4-competition-d3f07b471d9f4a2c9a2acf79d88a3645'
                           }
                        >
                           BMW M4
                        </Link>
                        .
                     </li>
                  </ul>
               </div>
            </section>
         </main>

         <Footer />
      </>
   )
}
