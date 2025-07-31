'use client'

import { GLTFResult } from '@/types/GLTFResult'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

type ShowroomModelProps = {
   showroomData: ShowroomItemType
}

export function ShowroomModel({ showroomData }: ShowroomModelProps) {
   useGLTF.preload(showroomData.model)

   const [isInteracting, setIsInteracting] = useState(false)

   useEffect(() => {
      if (isInteracting) {
         // Bloquear scroll do body
         document.body.style.overflow = 'hidden'
      } else {
         // Permitir scroll
         document.body.style.overflow = ''
      }
   }, [isInteracting])

   console.log({ isInteracting })

   return (
      <Canvas
         dpr={[1, 2]}
         shadows
         camera={{ fov: 45 }}
         className="mt-[50%] sm:mt-[40%] md:mt-[25%] lg:mt-[5%] xl:mt-0"
         style={{ position: 'absolute', height: 'calc(100vh - 200px)' }}
         onPointerDown={() => setIsInteracting(true)}
         onPointerUp={() => setIsInteracting(false)}
         onPointerCancel={() => setIsInteracting(false)}
      >
         <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={'sunset'} intensity={3} shadows={{ type: 'contact', opacity: 0 }}>
               <Model model={showroomData.model} />
            </Stage>
         </PresentationControls>
      </Canvas>
   )
}

type ModelProps = {
   model: ShowroomItemType['model']
}

function Model({ model }: ModelProps) {
   const { scene } = useGLTF(model) as unknown as GLTFResult
   return <primitive object={scene} scale={2} />
}
