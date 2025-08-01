import { Showroom404 } from '@/features/showroom/showroom-404'
import { Header } from '@/components/misc/header'
import { ShowroomInfoCard } from '@/features/showroom/showroom-info-card'
import { ShowroomModel } from '@/features/showroom/showroom-model'
import { SplashScreen } from '@/features/showroom/splash-screen'
import ShowroomService from '@/lib/showroom-service'
import { type ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { parseSearchParam } from '@/utils/parse-search-param'
import { type ShowroomItemType } from '@/types/ShowroomItemType'

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

type ShowcaseRoomIdPageProps = Readonly<{
   params: Promise<{
      showroomId: string
   }>
   searchParams: Promise<{
      anchor: string
   }>
}>

/**
 * Generates static paths for all individual showroom car pages.
 * This function is used by Next.js to pre-render dynamic routes at build time
 * based on the list of available showroom items.
 *
 * @returns An object containing the list of paths to pre-render
 */
export async function generateStaticParams() {
   const showroomData = await ShowroomService.getAll()

   const paths = showroomData?.map((item) => {
      return { showroomId: item.id }
   })

   return paths
}

export default async function ShowcaseRoomIdPage(props: ShowcaseRoomIdPageProps) {
   const params = await props.params
   const searchParams = await props.searchParams

   const anchor = parseSearchParam(searchParams.anchor)

   const showroomData = await ShowroomService.getById(
      (params?.showroomId as ShowroomIdEnum) ?? null
   )

   const headerReturnUrl = parseReturnURL({ anchor, showroomData })

   return (
      <div>
         <SplashScreen />

         <Header title="Nuvē showroom" customReturnUrl={headerReturnUrl} />

         <main className="flex min-h-page flex-col items-center justify-center h-full">
            {!showroomData && <Showroom404 />}
            {showroomData && (
               <>
                  <div className="absolute top-[10%] sm:top-[10%] md:top-[13%] left-[5%] sm:left-auto right-[5%]">
                     <ShowroomInfoCard showroomData={showroomData} />
                  </div>
                  <ShowroomModel showroomData={showroomData} />
               </>
            )}
         </main>
      </div>
   )
}

type parseReturnURLProps = {
   anchor: string | null
   showroomData: ShowroomItemType | null
}
const parseReturnURL = (props: parseReturnURLProps) => {
   if (!props.showroomData?.id) return '/'

   if (props.anchor) {
      return `/#${props.showroomData?.id}`
   }

   return '/'
}
