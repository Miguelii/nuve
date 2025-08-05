import { BannerImagesData } from '@/data/banner-images-data'
import { useState, useEffect } from 'react'

export const useLandingBannerBackground = () => {
   const [currentIndex, setCurrentIndex] = useState(0)

   const images = BannerImagesData

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 4000)
      return () => clearInterval(interval)
   }, [images.length])

   const currImage = images?.at(currentIndex)

   return {
      currImage,
      currentIndex,
      images,
   } as const
}
