import { Carousel, CarouselCard } from '@/components/ui/apple-cards-carousel'
import { Button } from '@/components/ui/button'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import Link from 'next/link'
import * as motion from 'motion/react-client'

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
            <motion.h3
               className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral leading-snug"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.6 }}
            >
               {car.title}
            </motion.h3>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
               viewport={{ once: true, amount: 0.6 }}
            >
               <Link href={`/${car.id}?anchor=${car.id}`} prefetch={true} className="w-fit">
                  <Button className="w-fit">Show in showroom</Button>
               </Link>
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
         >
            <Carousel items={ProjectCard ?? []} />
         </motion.div>
      </section>
   )
}
