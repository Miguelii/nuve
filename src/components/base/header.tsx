'use client'

import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type ShowroomHeaderProps = {
   title: string
   customReturnUrl?: string
}

export function Header({ title, customReturnUrl }: ShowroomHeaderProps) {
   const RETURN_URL = customReturnUrl ? customReturnUrl : '/'

   const currPath = usePathname()

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
            <Link className="contens" prefetch={false} href={currPath}>
               <h1 className="text-xl md:text-3xl font-bold text-primary uppercase">{title}</h1>
            </Link>
            {/* Placeholder for balance */}
            <div className="hidden md:flex w-24"></div>
         </header>
      </div>
   )
}
