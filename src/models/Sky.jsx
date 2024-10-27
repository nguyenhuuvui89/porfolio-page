import { useGLTF } from '@react-three/drei'
import skyScence from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sky = ({isRotating}) => {
  // useGLTF hook to load the 3D model stored in the skyScence variable (which points to the sky.glb file)
  const sky = useGLTF(skyScence)
  const skyRef = useRef()
  useFrame(() => {
    if(isRotating){
      skyRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref = {skyRef}>
      <primitive object={sky.scene} />

    </mesh>
  )
}

export default Sky
