import { Footer } from '@/components/base/footer'
import { Header } from '@/components/base/header'
import { GallerySplitVignette } from '@/features/gallery/gallery-split-vignette/gallery-split-vignette'
import { GalleryTitle } from '@/features/gallery/gallery-title'
import { Showroom404 } from '@/features/showroom/showroom-404'
import ShowroomService from '@/services/showroom-service'
import { ShowroomItemType } from '@/types/ShowroomItemType'
import { cn } from '@/utils/cn'

export const revalidate = 86400 // 24h

type ShowcaseRoomIdPageProps = Readonly<{
   params: Promise<{
      cardId: ShowroomItemType['id']
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
      return { cardId: item.id }
   })

   return paths
}

export default async function GalleryCardId(props: ShowcaseRoomIdPageProps) {
   const params = await props.params

   const carData = await ShowroomService.getById(params?.cardId ?? null)

   return (
      <>
         <Header title="Nuvē" customReturnUrl={'/#gallery'} />
         <main
            className={cn(
               'flex min-h-[calc(100vh-338px)] flex-col h-full mt-12 lg:mt-14 gap-12 lg:gap-14 main-container mb-14 lg:mb-24',
               !carData ? 'justify-center' : ''
            )}
         >
            {!carData && <Showroom404 />}
            {carData && (
               <>
                  <GalleryTitle carData={carData!} />
                  <GallerySplitVignette carData={carData!} />
               </>
            )}
         </main>
         <Footer />
      </>
   )
}
