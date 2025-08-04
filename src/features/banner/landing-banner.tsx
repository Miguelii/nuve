'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getBuildId } from '@/utils/get-build-id'
import { BannerImagesData } from '@/data/banner-images-data'
import { AnimatePresence, motion } from 'motion/react'

export function LandingBanner() {
   const [currentIndex, setCurrentIndex] = useState(0)

   const images = BannerImagesData

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
   }, [images.length])

   const currImage = images?.at(currentIndex)

   const buildId = getBuildId()

   return (
      <div className="relative w-full h-screen overflow-hidden">
         <AnimatePresence>
            <motion.div
               key={currImage}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1 }}
               className="absolute top-0 left-0 w-full h-full"
               style={{ position: 'absolute' }}
            >
               <Image
                  src={`${currImage!}?v=${buildId}`}
                  alt={`Banner ${currentIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={currentIndex === 0}
                  className="filter grayscale"
                  sizes="100vw"
               />
            </motion.div>
         </AnimatePresence>

         <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
               className="font-mono text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary text-center mb-4"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1.2, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.3 }}
            >
               Nuvē
            </motion.h1>
            <motion.p
               className="font-mono text-xl text-primary mb-8"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: 'easeOut', delay: 0.35 }}
               viewport={{ once: true, amount: 0.3 }}
            >
               Premium Cars
            </motion.p>
         </div>
      </div>
   )
}
