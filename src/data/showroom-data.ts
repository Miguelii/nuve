import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { type ShowroomItemType } from '@/types/ShowroomItemType'

export const ShowroomData: ShowroomItemType[] = [
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
