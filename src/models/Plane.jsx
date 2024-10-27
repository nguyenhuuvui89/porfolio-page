import {useEffect, useRef} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScence from '../assets/3d/plane.glb';


const Plane = ({isRotating,planePosition,planeScale, ...props}) => {
  const {scene, animations} = useGLTF(planeScence);
  const ref = useRef();
  const {actions} = useAnimations(animations, ref);

  // add a useEffect hook to play the animation when isRotating is true
  // useEffect(()=>{

  //   if(isRotating){
  //     actions['Take 001'].play()
  //   } else {
  //     actions['Take 001'].stop()
  //   }
  // },[isRotating, actions])

  // Auto play the animation when the component mounts
  useEffect(() => {
    const animation = actions['Take 001'];
    animation.play();
    return () => {
      animation.stop();
    };
  }, [actions]);

  // Update the position of the plane based on the planePosition prop
  useEffect(() => {
    ref.current.position.set(...planePosition);
  }, [planePosition]);
  return (
    <mesh {...props} ref={ref} scale={planeScale}>
      <primitive object = {scene}/>
    </mesh>
  )
}

export default Plane
