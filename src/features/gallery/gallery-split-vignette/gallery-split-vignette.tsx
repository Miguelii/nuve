'use client'

import { motion } from 'motion/react'
import GallerySplitVignetterItem from './gallery-split-vignette-item'
import { ShowroomItemType } from '@/types/ShowroomItemType'
import { useGallerySplitVignetter } from './use-gallery-split-vignette'

type GallerySplitVignetteProps = {
   carData: ShowroomItemType
}

export function GallerySplitVignette({ carData }: GallerySplitVignetteProps) {
   const { mouseMove, mousePosition } = useGallerySplitVignetter()

   return (
      <motion.section
         onMouseMove={mouseMove}
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
         {carData?.gallery?.map((data, i) => {
            return (
               <GallerySplitVignetterItem
                  mousePosition={mousePosition}
                  background={data.background}
                  vignette={data.vignette}
                  key={i}
               />
            )
         })}
      </motion.section>
   )
}
