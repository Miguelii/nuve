import ShowroomService from '@/lib/showroom-service'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const showroomData = await ShowroomService.getAll()

   const APP_URL = process.env.NEXT_PUBLIC_APP_HOST ?? ''

   const dynamicSlugs: MetadataRoute.Sitemap = showroomData?.map((item) => {
      return {
         url: `${APP_URL}/${item.id}`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      }
   })

   return [
      {
         url: APP_URL,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
      },
      ...dynamicSlugs,
   ]
}
