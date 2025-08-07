'use client'

import { getBuildId } from '@/utils/get-build-id'
import { AnimatePresence, motion } from 'motion/react'
import { useLandingBannerBackground } from './use-landing-banner-background'
import { useLandingBannerTextScroll } from './use-landing-banner-text-scroll'

export default function LandingBanner() {
   const buildId = getBuildId()

   const { currImage, currentIndex } = useLandingBannerBackground()

   const { secondText, slider, firstText } = useLandingBannerTextScroll()

   return (
      <motion.section
         initial="initial"
         animate="enter"
         className="relative flex h-screen overflow-hidden"
      >
         <header className="absolute bg-transparent mx-auto w-full flex items-center justify-between p-[35px] z-[999]">
            <div className="w-full flex items-center justify-between">
               <span className="text-2xl font-bold text-primary uppercase py-4">© NUVĒ</span>
            </div>
         </header>

         <AnimatePresence mode="wait">
            <motion.div
               key={currImage}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 1 }}
               transition={{ duration: 1, ease: 'easeOut' }}
               className="h-full w-full"
            >
               <BannerBackground
                  buildId={buildId}
                  currentIndex={currentIndex}
                  currImage={currImage!}
               />
            </motion.div>
         </AnimatePresence>

         <div className="absolute top-[calc(100vh-350px)]">
            <div ref={slider} className="relative whitespace-nowrap">
               <p
                  className="relative m-0 text-[230px] font-medium pr-[50px] text-primary"
                  ref={firstText}
               >
                  NUVĒ PREMIUM CARS -
               </p>
               <p
                  className="absolute left-full top-0 m-0 text-[230px] font-medium pr-[50px] text-primary"
                  ref={secondText}
               >
                  NUVĒ PREMIUM CARS -
               </p>
            </div>
         </div>
      </motion.section>
   )
}

type BannerBackgroundProps = {
   buildId: string
   currImage: string
   currentIndex: number
}
function BannerBackground({ buildId, currImage }: BannerBackgroundProps) {
   return (
      <video autoPlay muted loop playsInline className="w-full h-full object-cover bg-primary">
         <source src={`${currImage}?v=${buildId}`} type="video/mp4" />
      </video>
   )
   /*
   return (
      <Image
         src={`${currImage}?v=${buildId}`}
         alt={`Banner ${currentIndex + 1}`}
         fill
         style={{ objectFit: 'cover' }}
         priority={currentIndex === 0}
         className="filter "
         sizes="100vw"
      />
   )
   */
}
