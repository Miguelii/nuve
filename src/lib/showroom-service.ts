import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { tryCatch } from '../utils/try-catch'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { ShowroomData } from '@/data/showroom-data'

/**
 * Service responsible for providing showroom car data.
 * Includes methods to retrieve all cars or a specific car by ID.
 */
export default class ShowroomService {
   /**
    * Static list of showroom cars.
    * @private
    */
   private static cars: ShowroomItemType[] = ShowroomData

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
