import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import * as motion from 'motion/react-client'

export function ParallaxScrollShowcase() {
   const words = `A glimpse into automotive excellence.`

   return (
      <section className="h-screen overflow-hidden bg-neutral-dark full-margin flex">
         <div className="main-container my-40 w-full h-fit flex flex-col text-primary min-h-[calc(100vh-320px)]">
            <motion.h2
               className="text-5xl md:text-6xl lg:text-6xl xl:text-[4.3vw] uppercase font-normal"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
               viewport={{ once: true, amount: 0.6 }}
            >
               Where Performance Meets Art
            </motion.h2>

            <TextGenerateEffect
               words={words}
               className="!text-end font-normal text-primary text-4xl md:text-4xl lg:text-5xl xl:text-4xl uppercase leading-none mt-auto flex w-full justify-end"
            />
         </div>
      </section>
   )
}
