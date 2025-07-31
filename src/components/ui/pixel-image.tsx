'use client'

import { cn } from '@/utils/cn'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type Grid = {
   rows: number
   cols: number
}

const DEFAULT_GRIDS: Record<string, Grid> = {
   '6x4': { rows: 4, cols: 6 },
   '8x8': { rows: 8, cols: 8 },
   '8x3': { rows: 3, cols: 8 },
   '4x6': { rows: 6, cols: 4 },
   '3x8': { rows: 8, cols: 3 },
}

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS

interface PixelImageProps {
   src: string
   grid?: PredefinedGridKey
   customGrid?: Grid
   grayscaleAnimation?: boolean
   pixelFadeInDuration?: number // in ms
   maxAnimationDelay?: number // in ms
   colorRevealDelay?: number // in ms
   className?: string
}

export const PixelImage = ({
   src,
   grid = '6x4',
   grayscaleAnimation = true,
   pixelFadeInDuration = 1000,
   maxAnimationDelay = 1200,
   colorRevealDelay = 1300,
   customGrid,
   className,
}: PixelImageProps) => {
   const [isVisible, setIsVisible] = useState(false)
   const [showColor, setShowColor] = useState(false)

   const MIN_GRID = 1
   const MAX_GRID = 16

   const { rows, cols } = useMemo(() => {
      const isValidGrid = (grid?: Grid) => {
         if (!grid) return false
         const { rows, cols } = grid
         return (
            Number.isInteger(rows) &&
            Number.isInteger(cols) &&
            rows >= MIN_GRID &&
            cols >= MIN_GRID &&
            rows <= MAX_GRID &&
            cols <= MAX_GRID
         )
      }

      return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid]
   }, [customGrid, grid])

   useEffect(() => {
      setIsVisible(true)
      const colorTimeout = setTimeout(() => {
         setShowColor(true)
      }, colorRevealDelay)
      return () => clearTimeout(colorTimeout)
   }, [colorRevealDelay])

   const pieces = useMemo(() => {
      const total = rows * cols
      return Array.from({ length: total }, (_, index) => {
         const row = Math.floor(index / cols)
         const col = index % cols

         const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`

         const delay = Math.random() * maxAnimationDelay
         return {
            clipPath,
            delay,
         }
      })
   }, [rows, cols, maxAnimationDelay])

   return (
      <div className={cn('relative h-full w-full select-none', className)}>
         {pieces?.map((piece, index) => (
            <div
               key={index}
               className={cn(
                  'absolute inset-0 transition-all ease-out',
                  isVisible ? 'opacity-100' : 'opacity-0'
               )}
               style={{
                  clipPath: isVisible && showColor ? undefined : piece.clipPath,
                  transitionDelay: `${piece.delay}ms`,
                  transitionDuration: `${pixelFadeInDuration}ms`,
               }}
            >
               <Image
                  src={src}
                  key={`Pixel_image_piece_${index}`}
                  alt={`Pixel image piece ${index + 1}`}
                  width={900}
                  height={550}
                  sizes="(max-width: 768px) calc(100vw - 136px), (max-width: 1024px) 550px, (max-width: 1280px) 800px, 878px"
                  className={cn(
                     'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset',
                     'z-1 object-cover rounded-[2.5rem]',
                     'h-[235px] md:h-[300px] lg:h-[380px] xl:h-[500px] aspect-square w-full rounded-lg object-cover',
                     grayscaleAnimation && (showColor ? 'grayscale-0' : 'grayscale')
                  )}
                  style={{
                     transition: grayscaleAnimation
                        ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                        : 'none',
                  }}
                  draggable={true}
               />
            </div>
         ))}
      </div>
   )
}
