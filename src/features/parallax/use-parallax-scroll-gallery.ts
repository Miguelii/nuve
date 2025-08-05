import Lenis from 'lenis'
import { useScroll, useTransform } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

export const useParallaxScrollGallery = () => {
   const galleryRef = useRef<HTMLDivElement>(null)

   const [dimension, setDimension] = useState({ width: 0, height: 0 })

   const { scrollYProgress } = useScroll({
      target: galleryRef,
      offset: ['start end', 'end start'],
   })
   const { height } = dimension
   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

   useEffect(() => {
      const lenis = new Lenis()

      const raf = (time: number) => {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      const resize = () => {
         setDimension({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener('resize', resize)
      requestAnimationFrame(raf)
      resize()

      return () => {
         window.removeEventListener('resize', resize)
      }
   }, [])

   return {
      galleryRef,
      y,
      y2,
      y3,
      y4,
   } as const
}
