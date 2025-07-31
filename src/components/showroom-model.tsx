'use client'

import { GLTFResult } from '@/types/GLTFResult'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

type ShowroomModelProps = {
   showroomData: ShowroomItemType
}

export function ShowroomModel({ showroomData }: ShowroomModelProps) {
   useGLTF.preload(showroomData.model)

   return (
      <Canvas
         dpr={[1, 2]}
         shadows
         camera={{ fov: 45 }}
         style={{ position: 'absolute', height: 'calc(100vh - 200px)' }}
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
