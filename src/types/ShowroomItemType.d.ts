import { type ShowroomIdEnum } from './ShowroomIdEnum'

export type ShowroomItemType = {
   title: string;
   id: ShowroomIdEnum;
   images: string[];
   model: string;
   logo: string | null;
}
