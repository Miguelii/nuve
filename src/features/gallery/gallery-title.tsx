import { Button } from '@/components/ui/button'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import * as motion from 'motion/react-client'
import Link from 'next/link'

type GalleryTitleProps = {
   carData: ShowroomItemType
}
export function GalleryTitle({ carData }: GalleryTitleProps) {
   return (
      <div className="flex md:flex-row md:justify-between flex-col gap-3 items-center">
         <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
         >
            {carData.title}
         </motion.h3>

         <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
         >
            <Link href={`/${carData.id}?anchor=${carData.id}`} prefetch={true} className="w-fit">
               <Button className="w-fit !bg-neutral">Show in showroom</Button>
            </Link>
         </motion.div>
      </div>
   )
}
