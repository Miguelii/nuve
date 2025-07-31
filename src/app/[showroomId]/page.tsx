import { Showroom404 } from '@/components/showroom-404'
import { ShowroomHeader } from '@/components/showroom-header'
import { ShowroomInfoCard } from '@/components/showroom-info-card'
import { ShowroomModel } from '@/components/showroom-model'
import { SplashScreen } from '@/components/splash-screen'
import ShowroomService from '@/lib/showroom-service'
import { type ShowroomIdEnum } from '@/types/ShowroomIdEnum'

export const revalidate = 3600 // 1h

type PageProps = Readonly<{
   params: Promise<{
      showroomId: string
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

   const showroomData = await ShowroomService.getAll();

   const paths = showroomData?.map((item) => {
      return { showroomId: item.id }
   })

   return paths;
}

export default async function ShowcaseRoomIdPage(props: PageProps) {
   const params = await props.params

   const showroomData = await ShowroomService.getById(
      (params?.showroomId as ShowroomIdEnum) ?? null
   )

   return (
      <div>
         <SplashScreen />
         <ShowroomHeader showroomData={showroomData} />
         <main className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center h-full">
            {!showroomData && <Showroom404 />}
            {showroomData && (
               <>
                  <div className="absolute top-[13%] right-[5%]">
                     <ShowroomInfoCard showroomData={showroomData} />
                  </div>
                  <ShowroomModel showroomData={showroomData} />
               </>
            )}
         </main>
      </div>
   )
}
