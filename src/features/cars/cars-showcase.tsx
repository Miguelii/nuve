import React from 'react'
import ShowroomService from '@/lib/showroom-service'
import { CarsShowcaseItem } from './cars-showcase-item'
import * as motion from 'motion/react-client'

export async function CarsShowcase() {
   const showroomData = await ShowroomService.getAll()

   return (
      <section className="flex flex-col gap-11 md:gap-14 xl:gap-20 section-padding">
         <div className="flex flex-col gap-2">
            <motion.h2
               className="section-title font-bold text-primary"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.6 }}
            >
               Where Performance Meets Art
            </motion.h2>

            <motion.p
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-neutral font-normal text-base max-w-full md:max-w-[75%] lg:max-w-[80%] xl:max-w-[60%]"
            >
               A glimpse into automotive excellence — limited, refined, and created for the few who
               truly understand luxury in motion.
            </motion.p>
         </div>

         {showroomData?.map((car, index) => {
            return <CarsShowcaseItem key={`car-showcase-${car.id}-${index}`} car={car} />
         })}
      </section>
   )
}
