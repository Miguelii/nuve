import Image from 'next/image'
import { motion, type MotionValue } from 'framer-motion'
import { cn } from '@/utils/cn'
import { getBuildId } from '@/utils/get-build-id'

type GallerySplitVignetterItemProps = {
   background: string
   vignette: string
   mousePosition: { x: MotionValue<number>; y: MotionValue<number> }
}

export default function GallerySplitVignetterItem({
   mousePosition,
   background,
   vignette,
}: GallerySplitVignetterItemProps) {
   const { x, y } = mousePosition

   const buildId = getBuildId()

   return (
      <div
         className={cn('h-screen rounded-lg')}
         style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
         }}
      >
         <div className="relative w-full h-full">
            <Image
               src={`${background}?v=${buildId}`}
               alt="image"
               fill
               className="w-full object-cover"
            />
         </div>

         <motion.div
            className="fixed top-0 w-[25vw] h-[30vw] rounded-[1.5vw] overflow-hidden"
            style={{ x, y }}
         >
            <Image
               src={`${vignette}?v=${buildId}`}
               alt="image"
               fill
               className="w-full object-cover"
            />
         </motion.div>
      </div>
   )
}
