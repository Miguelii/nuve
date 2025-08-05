'use client'

import { useEffect } from 'react'
import { motion, stagger, useAnimate, useInView } from 'motion/react'
import { cn } from '@/utils/cn'

type TextGenerateEffectProps = {
   words: string
   className?: string
   filter?: boolean
   duration?: number
   delay?: number
}

export const TextGenerateEffect = ({
   words,
   className,
   filter = true,
   duration = 0.5,
   delay,
}: TextGenerateEffectProps) => {
   const [scope, animate] = useAnimate()

   const isInView = useInView(scope, { amount: 0.6, once: true })

   const wordsArray = words.split(' ')

   useEffect(() => {
      if (!isInView) return

      const runAnimation = () => {
         animate(
            'span',
            {
               opacity: 1,
               filter: filter ? 'blur(0px)' : 'none',
            },
            {
               duration,
               delay: stagger(0.2),
            }
         )
      }

      if (delay) {
         const timeout = setTimeout(runAnimation, delay)
         return () => clearTimeout(timeout)
      } else {
         runAnimation()
      }
   }, [isInView, animate, filter, duration, delay])

   const renderWords = () => {
      return (
         <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
               return (
                  <motion.span
                     key={word + idx}
                     className="text-primary opacity-0"
                     style={{
                        filter: filter ? 'blur(10px)' : 'none',
                     }}
                  >
                     {word}{' '}
                  </motion.span>
               )
            })}
         </motion.div>
      )
   }

   return (
      <div
         className={cn('text-primary font-normal text-2xl leading-snug tracking-wide', className)}
      >
         {renderWords()}
      </div>
   )
}
