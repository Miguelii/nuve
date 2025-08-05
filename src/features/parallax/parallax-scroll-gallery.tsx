'use client'

import { motion, type MotionValue } from 'motion/react'
import Image from 'next/image'
import { useParallaxScrollGallery } from './use-parallax-scroll-gallery'
import { cn } from '@/utils/cn'

export function ParallaxScrollGallery() {
   const images = [
      '/gallery/1.webp',
      '/gallery/2.webp',
      '/gallery/3.webp',
      '/gallery/4.webp',
      '/gallery/5.webp',
      '/gallery/7.webp',
      '/gallery/8.webp',
      '/gallery/9.webp',
      '/gallery/10.webp',
      '/gallery/11.webp',
      '/gallery/12.webp',
      '/gallery/7.webp',
   ]

   const { galleryRef, y, y2, y3, y4 } = useParallaxScrollGallery()

   return (
      <section>
         <div
            ref={galleryRef}
            className={cn(
               'relative flex gap-[2vw] p-[2vw] h-[175vh] box-border overflow-hidden',
               '[&>*:nth-child(1)]:top-[-45%] [&>*:nth-child(2)]:top-[-95%] [&>*:nth-child(3)]:top-[-45%] [&>*:nth-child(4)]:top-[-75%]'
            )}
         >
            <GalleryColumn images={[images[0], images[1], images[2]]} y={y} />
            <GalleryColumn images={[images[3], images[4], images[5]]} y={y2} />
            <GalleryColumn images={[images[6], images[7], images[8]]} y={y3} />
            <GalleryColumn images={[images[9], images[10], images[11]]} y={y4} />
         </div>
      </section>
   )
}

type GalleryColumnProps = {
   images: string[]
   y: MotionValue<number>
}

const GalleryColumn = ({ images, y }: GalleryColumnProps) => {
   return (
      <motion.div
         className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]"
         style={{ y }}
      >
         {images?.map((src, i) => {
            return (
               <div key={i} className="relative w-full h-full rounded-[1vw] overflow-hidden">
                  <Image src={src} alt="image" fill className="object-cover" />
               </div>
            )
         })}
      </motion.div>
   )
}
