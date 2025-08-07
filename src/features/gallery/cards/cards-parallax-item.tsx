import { Button } from '@/components/ui/button'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { cn } from '@/utils/cn'
import { MotionValue } from 'motion'
import { useScroll, useTransform, motion } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import { getBuildId } from '@/utils/get-build-id'

type CardsParallaxItemProps = {
   data: ShowroomItemType
   progress: MotionValue<number>
   range: number[]
   targetScale: number
   i: number
}

export const CardsParallaxItem = ({
   i,
   data,
   progress,
   range,
   targetScale,
}: CardsParallaxItemProps) => {
   const buildId = getBuildId()

   const container = useRef(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start'],
   })

   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

   const scale = useTransform(progress, range, [1, targetScale])

   return (
      <div
         id={`gallery-${data.id}`}
         ref={container}
         className="h-screen flex items-center justify-center sticky top-0"
      >
         <motion.div
            style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
            className={cn(
               'bg-neutral-dark relative flex flex-col h-[550px] md:h-[600px] lg:h-[500px] w-full rounded-[25px] p-6 md:p-[50px] transform origin-top gap-10 md:gap-10 lg:gap-14'
            )}
         >
            <h2 className="text-primary font-bold text-3xl text-center">{data.title}</h2>

            <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-6 md:gap-10 lg:gap-14">
               <div className="w-full lg:w-[45%] h-full flex flex-col justify-between">
                  <p className="text-base leading-relaxed lg:text-xl xl:text-xl text-primary text-pretty line-clamp-6 md:line-clamp-4 lg:line-clamp-[8] xl:line-clamp-6">
                     {data.showcaseDescription}
                  </p>

                  <div className="flex flex-col gap-6 justify-between items-center mt-auto">
                     <Link href={`/gallery/${data.id}`} prefetch={false} className="w-full h-full">
                        <Button className="w-full xl:w-full">Show Gallery</Button>
                     </Link>
                     <Link href={`/${data.id}`} prefetch={true} className="w-full h-full shrink-0">
                        <Button className="w-full xl:w-full !bg-neutral">Show in showroom</Button>
                     </Link>
                  </div>
               </div>

               <div className="relative w-full lg:w-[55%] h-full rounded-[25px] overflow-hidden">
                  <motion.div style={{ scale: imageScale }} className="w-full h-full">
                     <Image
                        fill
                        src={`${data.showcaseImage}?v=${buildId}`}
                        alt="image"
                        className="object-cover"
                     />
                  </motion.div>
               </div>
            </div>
         </motion.div>
      </div>
   )
}
