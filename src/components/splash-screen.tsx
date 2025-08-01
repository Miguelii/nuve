'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

export function SplashScreen() {
   const [progress, setProgress] = useState(0)
   const [matrixText, setMatrixText] = useState('')
   const [isComplete, setIsComplete] = useState(false)

   useEffect(() => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%'
      let interval: NodeJS.Timeout

      // Matrix text effect
      const matrixInterval = setInterval(() => {
         const randomText = Array(8)
            .fill(0)
            .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
            .join('')
         setMatrixText(randomText)
      }, 50)

      // Progress bar animation
      // eslint-disable-next-line prefer-const
      interval = setInterval(() => {
         setProgress((prev) => {
            if (prev >= 100) {
               clearInterval(interval)
               clearInterval(matrixInterval)
               setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
               return 100
            }
            return prev + 1
         })
      }, 30)

      return () => {
         clearInterval(interval)
         clearInterval(matrixInterval)
      }
   }, [])

   return (
      <div
         className={cn(
            'fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
            isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
         )}
      >
         <h1 className="font-mono text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary text-center mb-8 uppercase">
            Nuvē
         </h1>

         {/* Matrix-style loading text */}
         <div className="font-mono text-primary mb-4 h-6">{`LOADING_SHOWROOM: ${matrixText}`}</div>

         {/* Progress bar container */}
         <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
            <div
               className="h-full bg-white transition-all duration-100 ease-out"
               style={{ width: `${progress}%` }}
            />
         </div>

         {/* Progress percentage */}
         <div className="mt-2 font-mono text-sm text-primary">{`${progress}%`}</div>
      </div>
   )
}
