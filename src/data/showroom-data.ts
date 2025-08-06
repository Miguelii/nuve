import { ShowroomIdEnum } from '@/types/ShowroomIdEnum'
import { type ShowroomItemType } from '@/types/ShowroomItemType'

export const ShowroomData: ShowroomItemType[] = [
   {
      id: ShowroomIdEnum.SF90,
      title: 'Ferrari SF90',
      showcaseImage: '/showcase/sf90_2.webp',
      showcaseDescription:
         'The road-legal Ferrari SF90 supercar unleashes cutting-edge hybrid performance on the track. Featuring a powerful twin-turbo V8 and race-inspired aerodynamics, it redefines innovation and speed.',
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
      showcaseDescription:
         'The road-approved high-performance 911 GT3 RS sports car shows off its full potential on the track. With a high-speed naturally aspirated engine, radical downforce and comprehensive lightweight construction.',
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
         'The street-legal Lamborghini Aventador SVJ delivers uncompromising performance on the track. With a roaring V12 engine, active aerodynamics, and extreme downforce, it embodies raw power and precision engineering.',
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
      showcaseDescription:
         'The road-ready BMW M4 combines everyday usability with motorsport DNA. Featuring a turbocharged inline-6 engine, dynamic handling, and aggressive styling, it delivers thrilling performance on both road and track.',
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
