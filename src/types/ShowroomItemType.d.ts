import { type ShowroomIdEnum } from './ShowroomIdEnum'

export type ShowroomItemType = {
   title: string;
   id: ShowroomIdEnum;
   showcaseImage: string;
   showcaseDescription: string;
   model: string;
   logo: string | null;
   images?: string[];
   gallery: {
      background: string
      vignette: string
   }[];
}
