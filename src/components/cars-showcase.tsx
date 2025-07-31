import React from 'react'
import ShowroomService from '@/lib/showroom-service'
import { Timeline, TimelineData } from './ui/timeline'
import { PixelImage } from './ui/pixel-image'

export async function CarsShowcase() {
   const showroomData = await ShowroomService.getAll()

   const data: TimelineData[] = showroomData?.map((item) => {
      return {
         title: item.title,
         key: item.id,
         content: (
            <ShowCaseItem
               images={item.images ?? []}
               alt={`${item.title} Showcase`}
               htmlKey={item.id}
            />
         ),
      }
   })

   return (
      <section className="flex flex-col gap-11 md:gap-14 xl:gap-20">
         <div className="flex flex-col gap-2">
            <h3 className="section-title font-bold text-primary">Where Performance Meets Art</h3>
            <span className="text-neutral font-normal text-base max-w-full md:max-w-[75%] lg:max-w-[80%] xl:max-w-[60%]">
               A glimpse into automotive excellence — limited, refined, and created for the few who
               truly understand luxury in motion.
            </span>
         </div>
         <div className="relative w-full overflow-clip">
            <Timeline data={data} />
         </div>
      </section>
   )
}

type ShowCaseItemProps = {
   images: string[]
   alt: string
   htmlKey: string
}

function ShowCaseItem({ images }: ShowCaseItemProps) {
   return (
      <div className="grid grid-cols-1 gap-4">
         {images?.map((item, index) => {
            return (
               <PixelImage
                  src={item}
                  grid="8x8"
                  className="h-[235px] md:h-[300px] lg:h-[380px] xl:h-[500px] aspect-square w-full md:w-full"
                  grayscaleAnimation={false}
                  key={`pixel-image-${item}-${index}`}
               />
            )
         })}
      </div>
   )
}
