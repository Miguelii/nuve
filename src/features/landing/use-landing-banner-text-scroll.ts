import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const useLandingBannerTextScroll = () => {
   const firstText = useRef(null)
   const secondText = useRef(null)
   const slider = useRef(null)

   const xPercent = useRef(0)
   const direction = useRef(-1)

   useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to(slider.current, {
         scrollTrigger: {
            trigger: document.documentElement,
            scrub: 0.25,
            start: 0,
            end: window.innerHeight,
            onUpdate: (e) => {
               direction.current = e.direction * -1
            },
         },
         x: '-500px',
      })

      const animate = () => {
         if (xPercent.current < -100) {
            xPercent.current = 0
         } else if (xPercent.current > 0) {
            xPercent.current = -100
         }

         gsap.set(firstText.current, { xPercent: xPercent.current })
         gsap.set(secondText.current, { xPercent: xPercent.current })

         xPercent.current += 0.1 * direction.current

         requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
   }, [])

   return {
      slider,
      firstText,
      secondText,
   } as const
}
