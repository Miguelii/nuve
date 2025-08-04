'use client'

import { Counter } from '@/utils/animated-number-count'
import { useInView } from 'motion/react'
import * as motion from 'motion/react-client'
import { useRef } from 'react'

export function NumbersCard() {
   return (
      <div className="full-margin bg-neutral-dark flex">
         <section className="main-container section-padding md:flex md:flex-row gap-8 justify-between grid grid-cols-2">
            <NumberItem number="20" suffix="+" description="Premium Vehicles" />

            <NumberItem number="10" suffix="+" description="Luxury Brands" />

            <NumberItem number="98" suffix="%" description="Client Satisfaction" />

            <NumberItem number="15" description="Years Experience" />
         </section>
      </div>
   )
}

type NumberItemProps = {
   number: string
   description: string
   suffix?: string
}
function NumberItem({ number, description, suffix }: NumberItemProps) {
   const ref = useRef<HTMLDivElement>(null)

   const isInView = useInView(ref, {
      once: true,
      amount: 0.6,
   })

   return (
      <div className="text-center" ref={ref}>
         <motion.h2
            className="section-title mb-2 text-primary font-medium flex flex-row gap-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
         >
            <Counter from={0} to={parseFloat(number.replace(',', '.'))} isInView={isInView} />
            {suffix}
         </motion.h2>
         <motion.div
            className="text-neutral font-medium text-lg"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
         >
            {description}
         </motion.div>
      </div>
   )
}
