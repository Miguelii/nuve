import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { tryCatch } from '../utils/try-catch'
import { type ShowroomItemType } from '@/types/ShowroomItemType'

/**
 * Service responsible for providing showroom car data.
 * Includes methods to retrieve all cars or a specific car by ID.
 */
export default class ShowroomService {
   /**
    * Static list of showroom cars.
    * @private
    */
   private static cars: ShowroomItemType[] = [
      {
         id: ShowroomIdEnum.SF90,
         title: 'Ferrari SF90',
         images: [
            '/showcase/sf90_1.webp',
            '/showcase/sf90_2.webp',
            '/showcase/sf90_3.webp',
            '/showcase/sf90_4.webp',
         ],
         model: '/models/ferrari_sf90_stradale.glb',
         logo: '/logos/ferrari.webp',
      },
      {
         id: ShowroomIdEnum.PORSCHE_GT3RS,
         title: 'Porsche GT3RS',
         images: [
            '/showcase/gt3_rs_1.webp',
            '/showcase/gt3_rs_3.webp',
            '/showcase/gt3_rs_2.webp',
            '/showcase/gt3_rs_4.webp',
         ],
         model: '/models/porsche_gt3_rs.glb',
         logo: '/logos/porsche.webp',
      },
      {
         id: ShowroomIdEnum.LAMBORGHINI_SVJ,
         title: 'Lamborghini SVJ',
         images: [
            '/showcase/svj_3.webp',
            '/showcase/svj_1.webp',
            '/showcase/svj_2.webp',
            '/showcase/svj_4.webp',
         ],
         model: '/models/lamborghini_aventador.glb',
         logo: '/logos/svj.webp',
      },
      {
         id: ShowroomIdEnum.M4,
         title: 'BMW M4',
         images: [
            '/showcase/bmw_m4_2.webp',
            '/showcase/bmw_m4_1.webp',
            '/showcase/bmw_m4_3.webp',
            '/showcase/bmw_m4_4.webp',
         ],
         model: '/models/bmw_m4.glb',
         logo: '/logos/bmw.webp',
      },
   ]

   /**
    * Returns all cars in the showroom.
    *
    * @returns {Promise<ShowroomItemType[]>} A promise that resolves to an array of showroom cars.
    */
   static async getAll(): Promise<ShowroomItemType[]> {
      const { data } = await tryCatch(async () => {
         return (await this?.cars) ?? []
      })
      return data ?? []
   }

   /**
    * Returns a car by its unique ID.
    *
    * @param {ShowroomIdEnum | null} id - The unique identifier of the car.
    * @returns {Promise<ShowroomItemType | null>} A promise that resolves to the car if found, or null.
    */
   static async getById(id: ShowroomIdEnum | null): Promise<ShowroomItemType | null> {
      if (!id) return null

      const { data } = await tryCatch(async () => {
         return (await this?.cars?.find((item) => item.id === id)) ?? null
      })
      return data ?? null
   }
}
