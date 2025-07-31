'use client'

import { GLTFResult } from '@/types/GLTFResult'
import { type ShowroomItemType } from '@/types/ShowroomItemType'
import { PresentationControls, Stage, useAnimations, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { type AnimationAction } from 'three/src/Three.js'

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
         className="mt-[50%] sm:mt-[40%] md:mt-[25%] lg:mt-[5%] xl:mt-0"
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
   const { scene, animations } = useGLTF(model) as unknown as GLTFResult

   const { actions, names } = useAnimations(animations, scene)

   useEffect(() => {
      const name = names[0]
      let action: AnimationAction | undefined

      if (name && actions[name]) {
         action = actions[name]!
         action.reset().fadeIn(0.5).play()
      }

      return () => {
         action?.fadeOut(0.5)
      }
   }, [actions, names])

   return <primitive object={scene} scale={2} />
}
