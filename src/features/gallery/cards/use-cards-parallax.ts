import Lenis from 'lenis'
import { useScroll } from 'motion/react'
import { useRef, useEffect } from 'react'

export const useCardsParallax = () => {
   const container = useRef(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
   })

   useEffect(() => {
      const lenis = new Lenis()

      function raf(time: number) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   })

   return {
      container,
      scrollYProgress,
   } as const
}
