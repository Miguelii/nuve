'use client'

import { useLandingBannerMask } from './use-landing-banner-mask'
import { getBuildId } from '@/utils/get-build-id'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
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
            <AnimatePresence>
               <motion.div
                  key={currImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="h-full w-full relative"
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
function BannerBackground({ buildId, currImage, currentIndex }: BannerBackgroundProps) {
   return (
      <Image
         src={`${currImage}?v=${buildId}`}
         alt={`Banner ${currentIndex + 1}`}
         fill
         style={{ objectFit: 'cover' }}
         priority={currentIndex === 0}
         className="filter grayscale"
         sizes="100vw"
         unoptimized
      />
   )
}
