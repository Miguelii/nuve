import { getBuildId } from '@/utils/get-build-id'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { HandIcon, LucideIcon } from 'lucide-react'
import Image from 'next/image'

type ShowroomInfoCardProps = {
   showroomData: ShowroomItemType
}

export function ShowroomInfoCard({ showroomData }: ShowroomInfoCardProps) {
   return (
      <section className="bg-neutral-dark backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-neutral-dark/20 max-w-md">
         <CardTitleWithImage title={showroomData?.title} logo={showroomData?.logo ?? null} />

         <div className="h-px bg-gradient-to-r from-cyan-500/50 to-orange-500/50 mb-4"></div>

         <div className="space-y-5">
            {/* 
            <ControlInfo label="Scroll para ampliar/reduzir" Icon={MouseIcon} />
            */}
            <ControlInfo label="Drag to move" Icon={HandIcon} />
         </div>
      </section>
   )
}

type CardTitleWithImageProps = {
   title: ShowroomItemType['title']
   logo: ShowroomItemType['logo']
}

function CardTitleWithImage({ title, logo }: CardTitleWithImageProps) {
   const showLogo = logo != null && logo !== ''

   const buildId = getBuildId()

   return (
      <div className="flex items-center gap-3 mb-4">
         {showLogo && (
            <Image
               height={40}
               width={40}
               src={`${logo}?v=${buildId}`}
               alt={`${title} logo`}
               className="w-10 h-10 rounded-lg"
            />
         )}
         {!showLogo && (
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-orange-400 rounded-lg flex items-center justify-center">
               <span className="text-black font-bold text-lg uppercase">
                  {title?.charAt(0) ?? ''}
               </span>
            </div>
         )}
         <h1 className="text-xl font-bold text-primary bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text max-w-[80%]">
            {title}
         </h1>
      </div>
   )
}

type ControlInfoProps = {
   label: string
   Icon: LucideIcon
}

function ControlInfo({ label, Icon }: ControlInfoProps) {
   return (
      <div className="flex items-center gap-3 text-primary transition-colors">
         <div className="w-8 h-8 bg-neutral/60 rounded-lg flex items-center justify-center border border-neutral">
            <Icon className="w-4 h-4 text-primary" />
         </div>
         <span className="text-sm">{label}</span>
      </div>
   )
}
