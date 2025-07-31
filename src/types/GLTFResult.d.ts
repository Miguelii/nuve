import { GLTF } from 'three-stdlib'

// type for GLTF loader
export type GLTFResult = GLTF & {
   nodes: {
      card: THREE.Mesh
      clamp: THREE.Mesh
      clip: THREE.Mesh
   }
   materials: {
      texture: THREE.MeshStandardMaterial
      metal: THREE.MeshStandardMaterial
   }
}
