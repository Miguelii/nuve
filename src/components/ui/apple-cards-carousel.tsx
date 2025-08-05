'use client'

import React, { useEffect, useState, createContext, JSX } from 'react'
import { motion } from 'motion/react'
import { ImageProps } from 'next/image'
import { cn } from '@/utils/cn'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react'
import Image from 'next/image'
import { getBuildId } from '@/utils/get-build-id'

interface CarouselProps {
   items: JSX.Element[]
   initialScroll?: number
}

export const CarouselContext = createContext<{
   onCardClose: (index: number) => void
   currentIndex: number
}>({
   onCardClose: () => {},
   currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
   const carouselRef = React.useRef<HTMLDivElement>(null)
   const [canScrollLeft, setCanScrollLeft] = React.useState(false)
   const [canScrollRight, setCanScrollRight] = React.useState(true)
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      if (carouselRef.current) {
         carouselRef.current.scrollLeft = initialScroll
         checkScrollability()
      }
   }, [initialScroll])

   const checkScrollability = () => {
      if (carouselRef.current) {
         const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
         setCanScrollLeft(scrollLeft > 0)
         setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
      }
   }

   const scrollLeft = () => {
      if (carouselRef.current) {
         carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      }
   }

   const scrollRight = () => {
      if (carouselRef.current) {
         carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      }
   }

   const handleCardClose = (index: number) => {
      if (carouselRef.current) {
         const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
         const gap = isMobile() ? 4 : 8
         const scrollPosition = (cardWidth + gap) * (index + 1)
         carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
         })
         setCurrentIndex(index)
      }
   }

   const isMobile = () => {
      return window && window.innerWidth < 768
   }

   return (
      <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
         <div className="relative w-full flex flex-col gap-6">
            <div
               className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
               ref={carouselRef}
               onScroll={checkScrollability}
            >
               <div
                  className={cn(
                     'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l'
                  )}
               ></div>

               <div
                  className={cn(
                     'flex flex-row justify-start gap-4'
                     //"mx-auto max-w-7xl",
                  )}
               >
                  {items.map((item, index) => (
                     <motion.div
                        initial={{
                           opacity: 0,
                           y: 20,
                        }}
                        animate={{
                           opacity: 1,
                           y: 0,
                           transition: {
                              duration: 0.5,
                              delay: 0.2 * index,
                              ease: 'easeOut',
                           },
                        }}
                        key={'card' + index}
                        className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                     >
                        {item}
                     </motion.div>
                  ))}
               </div>
            </div>
            <CarouselButtons
               scrollLeft={scrollLeft}
               scrollRight={scrollRight}
               canScrollLeft={canScrollLeft}
               canScrollRight={canScrollRight}
            />
         </div>
      </CarouselContext.Provider>
   )
}

type CarouselButtonsProps = {
   scrollLeft: () => void
   canScrollLeft: boolean
   scrollRight: () => void
   canScrollRight: boolean
}

function CarouselButtons({
   scrollLeft,
   canScrollLeft,
   scrollRight,
   canScrollRight,
}: CarouselButtonsProps) {
   return (
      <motion.div
         initial={{ y: -20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: 'easeOut' }}
         viewport={{ once: true, amount: 0.4 }}
         className="md:mr-0 flex justify-end gap-2"
      >
         <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-neutral disabled:opacity-30 cursor-pointer disabled:cursor-auto text-neutral-dark"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous item"
            title="Previous item"
         >
            <ArrowLeftCircleIcon className="h-6 w-6" />
         </button>
         <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-neutral disabled:opacity-30 cursor-pointer disabled:cursor-auto text-neutral-dark"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Next item"
            title="Next item"
         >
            <ArrowRightCircleIcon className="h-6 w-6" />
         </button>
      </motion.div>
   )
}

type CarouselCardItem = {
   src: string
   title: string
   category: string
   content: React.ReactNode
}

type CarouselCardProps = {
   card: CarouselCardItem
   index: number
   layout?: boolean
}
export const CarouselCard = ({ card, layout = false }: CarouselCardProps) => {
   return (
      <motion.button
         layoutId={layout ? `card-${card.title}` : undefined}
         className="relative z-10 flex h-[25rem] w-[18.75rem] md:h-[28.125rem] md:w-[28.125rem] flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-dark lg:h-[30rem] lg:w-[26.625rem]"
      >
         <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
         <div className="relative z-40 p-8">
            <motion.p
               layoutId={layout ? `category-${card.category}` : undefined}
               className="text-left text-sm font-medium text-primary md:text-base"
            >
               {card.category}
            </motion.p>
            <motion.p
               layoutId={layout ? `title-${card.title}` : undefined}
               className="mt-2 max-w-xs text-left text-xl font-semibold [text-wrap:balance] text-primary md:text-3xl"
            >
               {card.title}
            </motion.p>
         </div>
         <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="absolute inset-0 z-10 object-cover"
         />
      </motion.button>
   )
}

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
   const buildId = getBuildId()

   return (
      <Image
         className={cn('h-full w-full transition duration-300', className)}
         src={`${src as string}?v=${buildId}`}
         width={width}
         height={height}
         loading="lazy"
         decoding="async"
         blurDataURL={typeof src === 'string' ? src : undefined}
         alt={alt ? alt : 'Background of a beautiful view'}
         sizes="(min-width: 1024px) 426px, (min-width: 768px) 450px, 350px"
         style={{ objectFit: 'cover' }}
         {...rest}
      />
   )
}
