import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'

export function CarsShowcase() {
   const SvjImage = [
      '/showcase/svj_1.jpg',
      '/showcase/svj_2.jpg',
      '/showcase/svj_4.jpg',
      '/showcase/svj_3.jpg',
   ]

   const PorscheGt3Rs = [
      '/showcase/gt3_rs_1.jpg',
      '/showcase/gt3_rs_3.jpg',
      '/showcase/gt3_rs_2.jpg',
      '/showcase/gt3_rs_4.jpg',
   ]

   const FerrariSf90 = [
      '/showcase/sf90_1.jpg',
      '/showcase/sf90_2.jpg',
      '/showcase/sf90_3.jpg',
      '/showcase/sf90_4.jpg',
   ]

   const data = [
      {
         title: 'Lamborghini Aventador SVJ',
         content: (
            <ShowCaseItem 
                images={SvjImage}
                alt='Lamborghini Aventador SVJ Showcase'
                htmlKey='Lamborghini_Aventador_SVJ'
            />
         ),
      },
      {
         title: 'Porsche GT3RS',
         content: (
            <ShowCaseItem 
                images={PorscheGt3Rs}
                alt='Porsche GT3RS Showcase'
                htmlKey='Porsche_GT3RS'
            />
         ),
      },
      {
         title: 'Ferrari SF90',
         content: (
            <ShowCaseItem 
                images={FerrariSf90}
                alt='Ferrari SF90 Showcase'
                htmlKey='Ferrari SF90'
            />
         ),
      },
   ]

   return (
      <section className="pb-28 flex flex-col gap-32">
         <div>
            <h3 className="section-title font-bold text-primary">
               Where Performance Meets Art
            </h3>
         </div>
         <div className="relative w-full overflow-clip">
            <Timeline data={data} />
         </div>
      </section>
   )
}



type ShowCaseItemProps ={
   images: string[];
   alt: string;
   htmlKey: string;
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