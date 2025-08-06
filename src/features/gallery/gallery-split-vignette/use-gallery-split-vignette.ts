import Lenis from 'lenis'
import { useSpring } from 'motion/react'
import { useEffect } from 'react'

export const useGallerySplitVignetter = () => {
   const spring = {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
   }

   const mousePosition = {
      x: useSpring(0, spring),
      y: useSpring(0, spring),
   }

   useEffect(() => {
      const lenis = new Lenis()

      function raf(time: number) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   }, [])

   const mouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const { clientX, clientY } = e
      const targetX = clientX - (window.innerWidth / 2) * 0.5
      const targetY = clientY - (window.innerWidth / 2) * 0.3
      mousePosition.x.set(targetX)
      mousePosition.y.set(targetY)
   }

   return {
      mouseMove,
      mousePosition,
   } as const
}
