import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { type ShowroomItemType } from '@/types/ShowroomItemType'

export const ShowroomData: ShowroomItemType[] = [
   {
      id: ShowroomIdEnum.SF90,
      title: 'Ferrari SF90',
      showcaseImage: '/showcase/sf90_2.webp',
      showcaseDescription:
         'SF90 blends V8 hybrid tech with track-bred speed and Ferrari innovation. ',
      model: '/models/ferrari_sf90_stradale.glb',
      logo: '/logos/ferrari.webp',
      gallery: [
         {
            background: '/showcase/sf90_1.webp',
            vignette: '/showcase/sf90_2.webp',
         },
         {
            background: '/showcase/sf90_3.webp',
            vignette: '/showcase/sf90_4.webp',
         },
      ],
   },
   {
      id: ShowroomIdEnum.PORSCHE_GT3RS,
      title: 'Porsche GT3RS',
      showcaseImage: '/showcase/gt3_rs_1.webp',
      showcaseDescription: 'Road-legal GT3 RS with race power, downforce, and precision handling.',
      model: '/models/porsche_gt3_rs.glb',
      logo: '/logos/porsche.webp',
      gallery: [
         {
            background: '/showcase/gt3_rs_1.webp',
            vignette: '/showcase/gt3_rs_2.webp',
         },
         {
            background: '/showcase/gt3_rs_3.webp',
            vignette: '/showcase/gt3_rs_4.webp',
         },
      ],
   },
   {
      id: ShowroomIdEnum.LAMBORGHINI_SVJ,
      title: 'Lamborghini SVJ',
      showcaseImage: '/showcase/svj_3.webp',
      showcaseDescription:
         'SVJ delivers raw V12 power, active aero, and extreme track-ready force.',
      model: '/models/lamborghini_aventador.glb',
      logo: '/logos/svj.webp',
      gallery: [
         {
            background: '/showcase/svj_3.webp',
            vignette: '/showcase/svj_4.webp',
         },
         {
            background: '/showcase/svj_2.webp',
            vignette: '/showcase/svj_1.webp',
         },
      ],
   },
   {
      id: ShowroomIdEnum.M4,
      title: 'BMW M4',
      showcaseImage: '/showcase/bmw_m4_4.webp',
      showcaseDescription: 'Turbo inline-6. Aggressive feel. Daily drive, track ready. ',
      model: '/models/bmw_m4.glb',
      logo: '/logos/bmw.webp',
      gallery: [
         {
            background: '/showcase/bmw_m4_2.webp',
            vignette: '/showcase/bmw_m4_1.webp',
         },
         {
            background: '/showcase/bmw_m4_3.webp',
            vignette: '/showcase/bmw_m4_4.webp',
         },
      ],
   },
]
