'use client'

import { useScroll, useTransform, motion } from 'motion/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './button'

export type TimelineData = {
   title: string
   key: string
   content: React.JSX.Element
}

export const Timeline = ({ data }: { data: TimelineData[] }) => {
   const ref = useRef<HTMLDivElement>(null)
   const containerRef = useRef<HTMLDivElement>(null)
   const [height, setHeight] = useState(0)

   useEffect(() => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect()
         setHeight(rect.height)
      }
   }, [ref])

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start 10%', 'end 50%'],
   })

   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

   return (
      <div className="w-full" ref={containerRef}>
         <div ref={ref} className="relative mx-auto flex flex-col gap-10 md:gap-40">
            {data.map((item, index) => (
               <div key={index} id={item.key} className="flex justify-start md:gap-16 lg:gap-16">
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                     <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-white border border-neutral p-2" />
                     </div>
                     <div className="md:pl-20 flex flex-col gap-4">
                        <h3 className="hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold text-neutral leading-snug">
                           {item.title}
                        </h3>
                        <Link href={`${item.key}`} prefetch={false} className="w-fit">
                           <Button className="w-fit">Show in showroom</Button>
                        </Link>
                     </div>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                     <h3 className="md:hidden block text-2xl mb-8 md:mb-6 text-left font-bold text-neutral leading-snug">
                        {item.title}
                     </h3>
                     {item.content}{' '}
                  </div>
               </div>
            ))}
            <div
               style={{
                  height: height + 'px',
               }}
               className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
               <motion.div
                  style={{
                     height: heightTransform,
                     opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-neutral to-transparent from-[0%] via-[10%] rounded-full"
               />
            </div>
         </div>
      </div>
   )
}
