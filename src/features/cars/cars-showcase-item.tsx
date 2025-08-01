import { Carousel, CarouselCard } from '@/components/ui/apple-cards-carousel'
import { Button } from '@/components/ui/button'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import Link from 'next/link'

type carsShowcaseItemProps = {
   car: ShowroomItemType
}

export function CarsShowcaseItem({ car }: carsShowcaseItemProps) {
   const ProjectCard = car?.images?.map((img, index) => {
      return (
         <CarouselCard
            key={`car-showcase-${car.id}-image-${index}`}
            index={index}
            card={{
               src: img,
               title: '',
               category: '',
               content: null,
            }}
         />
      )
   })

   return (
      <section className="flex flex-col gap-6 md:gap-10">
         <div className="flex md:flex-row md:justify-between flex-col gap-3 items-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral leading-snug">
               {car.title}
            </h3>
            <Link href={`/${car.id}?anchor=${car.id}`} prefetch={true} className="w-fit">
               <Button className="w-fit">Show in showroom</Button>
            </Link>
         </div>

         <Carousel items={ProjectCard} />
      </section>
   )
}
