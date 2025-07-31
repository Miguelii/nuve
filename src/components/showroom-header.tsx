import { ShowroomItemType } from '@/types/ShowroomItemType'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

type ShowroomHeaderProps = {
   showroomData: ShowroomItemType | null
}
export function ShowroomHeader({ showroomData }: ShowroomHeaderProps) {
   const RETURN_URL = showroomData?.id ? `/#${showroomData.id}` : '/'

   return (
      <div className="bg-neutral-dark w-full">
         <header className="mx-auto main-container w-full flex items-center justify-between py-4 z-[999]">
            <Link
               href={RETURN_URL}
               passHref
               className="flex flex-row text-primary items-center text-base md:text-base"
               prefetch
            >
               <ArrowLeftIcon className="w-5 h-5 mr-2" />
               return
            </Link>
            <h1 className="text-xl md:text-3xl font-bold text-primary uppercase">Nuvē showroom</h1>
            {/* Placeholder for balance */}
            <div className="hidden md:flex w-24"></div>
         </header>
      </div>
   )
}
