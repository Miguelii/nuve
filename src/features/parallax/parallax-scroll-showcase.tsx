import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import * as motion from 'motion/react-client'

export function ParallaxScrollShowcase() {
   const words = `A glimpse into automotive excellence — limited, refined, and created for the few who truly understand luxury in motion.`

   return (
      <section className="h-screen overflow-hidden bg-neutral-dark full-margin flex">
         <div className="main-container my-40 w-full h-fit flex flex-col text-primary min-h-[calc(100vh-320px)]">
            <motion.h2
               className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.3vw] uppercase font-normal"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
               viewport={{ once: true, amount: 0.6 }}
            >
               Where Performance Meets Art
            </motion.h2>

            <TextGenerateEffect
               delay={0}
               words={words}
               className="w-full md:w-[60vw] lg:w-[50vw] text-xl md:text-2xl lg:text-3xl xl:text-[2.3vw] self-end uppercase mt-auto flex"
            />
         </div>
      </section>
   )
}
