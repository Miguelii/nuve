import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { tryCatch } from './try-catch'
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
         id: ShowroomIdEnum.LAMBORGHINI_SVJ,
         title: 'Lamborghini Aventador SVJ',
         images: [
            '/showcase/svj_1.jpg',
            '/showcase/svj_2.jpg',
            '/showcase/svj_4.jpg',
            '/showcase/svj_3.jpg',
         ],
         model: '/models/lamborghini_aventador.glb',
         logo: '/logos/svj.webp'
      },
      {
         id: ShowroomIdEnum.PORSCHE_GT3RS,
         title: 'Porsche GT3RS',
         images: [
            '/showcase/gt3_rs_1.jpg',
            '/showcase/gt3_rs_3.jpg',
            '/showcase/gt3_rs_2.jpg',
            '/showcase/gt3_rs_4.jpg',
         ],
         model: '/models/porsche_gt3_rs.glb',
         logo: '/logos/porsche.webp'
      },
      {
         id: ShowroomIdEnum.SF90,
         title: 'Ferrari SF90',
         images: [
            '/showcase/sf90_1.jpg',
            '/showcase/sf90_2.jpg',
            '/showcase/sf90_3.jpg',
            '/showcase/sf90_4.jpg',
         ],
         model: '/models/ferrari_sf90_stradale.glb',
         logo: '/logos/ferrari.webp'
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
