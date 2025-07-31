'use client'

import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { PixelImage } from './ui/pixel-image'

type Props = {
   src: string
   index: number
}

export function DelayedPixelImage({ src, index }: Props) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true })
   const [show, setShow] = useState(false)

   useEffect(() => {
      if (isInView) {
         const timeout = setTimeout(() => {
            setShow(true)
         }, index * 150)

         return () => clearTimeout(timeout)
      }
   }, [isInView, index])

   return (
      <div
         ref={ref}
         className="h-[235px] md:h-[300px] lg:h-[380px] xl:h-[500px] aspect-square w-full md:w-full"
      >
         {show && (
            <PixelImage src={src} grid="8x8" className="h-full w-full" grayscaleAnimation={false} />
         )}
      </div>
   )
}
