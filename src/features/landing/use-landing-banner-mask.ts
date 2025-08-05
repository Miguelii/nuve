import { useCallback, useEffect, useRef } from 'react'

export const useLandingBannerMask = () => {
   const container = useRef<HTMLDivElement>(null)
   const stickyMask = useRef<HTMLDivElement>(null)

   const initialMaskSize = 0.8
   const targetMaskSize = 40
   const easing = 0.15
   const easedScrollProgress = useRef(0)

   const getScrollProgress = useCallback(() => {
      if (!stickyMask.current || !container.current) return 0
      const scrollProgress =
         stickyMask.current.offsetTop /
         (container.current.getBoundingClientRect().height - window.innerHeight)
      const delta = scrollProgress - easedScrollProgress.current
      easedScrollProgress.current += delta * easing
      return easedScrollProgress.current
   }, [easing])

   const animate = useCallback(() => {
      if (!stickyMask.current) return

      const maskSizeProgress = targetMaskSize * getScrollProgress()
      stickyMask.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + '%'

      requestAnimationFrame(animate)
   }, [targetMaskSize, initialMaskSize, getScrollProgress])

   useEffect(() => {
      requestAnimationFrame(animate)
   }, [animate])

   return {
      container,
      stickyMask,
   } as const
}
