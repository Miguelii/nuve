import React from 'react'
import ShowroomService from '@/lib/showroom-service'
import { CarsShowcaseItem } from './cars-showcase-item'

export async function CarsShowcase() {
   const showroomData = await ShowroomService.getAll()

   return (
      <section className="flex flex-col gap-11 md:gap-14 xl:gap-20 section-padding">
         <div className="flex flex-col gap-2">
            <h2 className="section-title font-bold text-primary">Where Performance Meets Art</h2>
            <span className="text-neutral font-normal text-base max-w-full md:max-w-[75%] lg:max-w-[80%] xl:max-w-[60%]">
               A glimpse into automotive excellence — limited, refined, and created for the few who
               truly understand luxury in motion.
            </span>
         </div>

         {showroomData?.map((car, index) => {
            return <CarsShowcaseItem key={`car-showcase-${car.id}-${index}`} car={car} />
         })}
      </section>
   )
}
