'use client'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { useScroll, useTransform, motion } from 'motion/react'
import { useRef } from 'react'

export function ParallaxScrollAbout() {
   const container = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start'],
   })

   const y = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh'])

   const words = `Drive What Others Dream.`

   return (
      <section className="h-screen overflow-hidden bg-neutral-dark full-margin" ref={container}>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ y }}
            className="main-container h-full w-full my-40 flex flex-col gap-10 text-primary text-4xl md:text-5xl lg:text-6xl xl:text-[7vw] uppercase leading-none"
         >
            <motion.h2
               className="h-fit w-full text-center font-normal"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.6 }}
            >
               NUVĒ
            </motion.h2>

            <TextGenerateEffect
               delay={600}
               words={words}
               className="font-normal text-center text-primary text-4xl md:text-5xl lg:text-6xl xl:text-[7vw] uppercase leading-none"
            />
         </motion.div>
      </section>
   )
}
