import React from 'react'
import { Timeline, TimelineData } from '@/components/timeline'
import Image from 'next/image'
import ShowroomService from '@/lib/showroom-service'

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
      <section className="pb-28 flex flex-col gap-32">
         <div>
            <h3 className="section-title font-bold text-primary">Where Performance Meets Art</h3>
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

function ShowCaseItem({ images, alt, htmlKey }: ShowCaseItemProps) {
   return (
      <div className="grid grid-cols-1 gap-4">
         {images?.map((item, index) => {
            return (
               <Image
                  src={item}
                  key={`${htmlKey}_${index}`}
                  alt={`${alt}`}
                  width={900}
                  height={550}
                  className="h-[235px] md:h-[300px] lg:h-[380px] xl:h-[500px] aspect-square w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  sizes="(max-width: 768px) calc(100vw - 136px), (max-width: 1024px) 550px, (max-width: 1280px) 800px, 878px"
               />
            )
         })}
      </div>
   )
}
