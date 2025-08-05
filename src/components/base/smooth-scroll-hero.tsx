'use client'

import type * as React from 'react'
import { useRef } from 'react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { LucideIcon, CarIcon, AwardIcon, ThumbsUpIcon, CalendarIcon } from 'lucide-react'

interface SmoothScrollHeroProps {
   scrollHeight?: number
   desktopImage: string
   mobileImage: string
   initialClipPercentage?: number
   finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
   scrollHeight = 1875,
   desktopImage,
   mobileImage,
   initialClipPercentage = 25,
   finalClipPercentage = 75,
}) => {
   const containerRef = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start'],
   })

   // Clip path animation - image fully reveals by 70% scroll progress
   const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
   const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
   const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

   // Background size animation - completes when image is fully revealed
   const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ['170%', '100%'])

   // Scale animation - completes when image is fully revealed
   const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

   // CTA overlay animations - appears earlier and completes by 50%
   const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
   const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

   return (
      <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
         <motion.div
            className="sticky top-0 h-screen w-full bg-black overflow-hidden"
            style={{
               clipPath,
               willChange: 'transform',
            }}
         >
            {/* Desktop background */}
            <motion.div
               className="absolute inset-0 hidden md:block"
               style={{
                  backgroundImage: `url(${desktopImage})`,
                  filter: 'blur(var(--blur-xs))',
                  backgroundSize,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  scale,
               }}
            />
            {/* Mobile background */}
            <motion.div
               className="absolute inset-0 md:hidden"
               style={{
                  backgroundImage: `url(${mobileImage})`,
                  backgroundSize,
                  filter: 'blur(var(--blur-xs))',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  scale,
               }}
            />

            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-background/40" />

            {/* CTA Overlay */}
            <motion.div
               className="absolute inset-0 flex items-center justify-center z-20"
               style={{
                  opacity: ctaOpacity,
                  y: ctaY,
               }}
            >
               <div className="text-center text-primary max-w-4xl mx-auto px-6">
                  {/* Main CTA Heading */}
                  <h2 className="text-primary text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 leading-none">
                     READY TO
                     <br />
                     <span className="bg-clip-text">JOIN THE ELITE?</span>
                  </h2>

                  {/* Supporting Text */}
                  <p className="text-lg md:text-xl lg:text-2xl text-primary mb-8 leading-relaxed font-medium">
                     Join the elite circle of drivers who demand excellence,
                     <br className="hidden md:block" />
                     style, and unforgettable experiences on every journey.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                     <StatsItem
                        number="20"
                        suffix="+"
                        description="Premium Vehicles"
                        Icon={CarIcon}
                     />

                     <StatsItem
                        number="10"
                        suffix="+"
                        description="Luxury Brands"
                        Icon={AwardIcon}
                     />

                     <StatsItem
                        number="98"
                        suffix="%"
                        description="Client Satisfaction"
                        Icon={ThumbsUpIcon}
                     />

                     <StatsItem number="15" description="Years Experience" Icon={CalendarIcon} />
                  </div>
               </div>
            </motion.div>
         </motion.div>
      </div>
   )
}

type StatsItemProps = {
   number: string
   description: string
   suffix?: string
   Icon: LucideIcon
}

function StatsItem({ number, description, suffix, Icon }: StatsItemProps) {
   return (
      <div className="text-center">
         <div className="flex justify-center mb-2">
            <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
               <Icon className="w-5 h-5 text-primary" />
            </div>
         </div>
         <p className="text-2xl md:text-3xl font-black text-primary mb-1">
            {number}
            {suffix}
         </p>
         <p className="text-xs md:text-sm text-gray-300 font-medium">{description}</p>
      </div>
   )
}

export default SmoothScrollHero
