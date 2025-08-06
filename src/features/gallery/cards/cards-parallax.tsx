'use client'

import { ShowroomItemType } from '@/types/ShowroomItemType'
import { CardsParallaxItem } from './cards-parallax-item'
import { useCardsParallax } from './use-cards-parallax'

type CardsParallaxProps = {
   data: ShowroomItemType[]
}

export function CardsParallax({ data }: CardsParallaxProps) {
   const { container, scrollYProgress } = useCardsParallax()

   return (
      <section ref={container} id="gallery">
         {data?.map((item, i) => {
            const targetScale = 1 - (data.length - i) * 0.05
            return (
               <CardsParallaxItem
                  data={item}
                  key={`p_${i}`}
                  i={i}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
               />
            )
         })}
      </section>
   )
}
