import ShowroomService from '@/services/showroom-service'
import { normalizeBaseUrl } from '@/utils/normalize-base-url'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const showroomData = await ShowroomService.getAll()

   const WEBSITE_URL = normalizeBaseUrl()

   const dynamicSlugs: MetadataRoute.Sitemap = showroomData?.map((item) => {
      return {
         url: `${WEBSITE_URL}/${item.id}`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      }
   })

   return [
      {
         url: WEBSITE_URL ?? '',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
      },
      ...dynamicSlugs,
   ]
}
