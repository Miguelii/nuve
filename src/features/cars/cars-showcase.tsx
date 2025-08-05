import React from 'react'
import { CarsShowcaseItem } from './cars-showcase-item'
import ShowroomService from '@/services/showroom-service'

export async function CarsShowcase() {
   const showroomData = await ShowroomService.getAll()

   return (
      <section className="flex flex-col gap-11 md:gap-14 xl:gap-20 section-padding bg-background">
         {showroomData?.map((car, index) => {
            return <CarsShowcaseItem key={`car-showcase-${car.id}-${index}`} car={car} />
         })}
      </section>
   )
}
