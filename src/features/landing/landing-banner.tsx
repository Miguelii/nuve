'use client'

import { useLandingBannerMask } from './use-landing-banner-mask'
import { getBuildId } from '@/utils/get-build-id'
import { AnimatePresence, motion } from 'motion/react'
import { useLandingBannerBackground } from './use-landing-banner-background'

export default function LandingBanner() {
   const { container, stickyMask } = useLandingBannerMask()

   const { currImage, currentIndex } = useLandingBannerBackground()

   const buildId = getBuildId()

   return (
      <div ref={container} className="relative h-[300vh]">
         <div
            ref={stickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center landing-banner-mask"
         >
            <AnimatePresence mode="wait">
               <motion.div
                  key={currImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full w-full"
               >
                  <BannerBackground
                     buildId={buildId}
                     currentIndex={currentIndex}
                     currImage={currImage!}
                  />
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
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
