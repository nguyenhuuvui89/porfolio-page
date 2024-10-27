import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import Loader from "../components/Loader"
import { Suspense } from "react"
import Island from "../models/Island"
import Sky from "../models/Sky"
import {Bird} from "../models/Bird"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"



const Home = () => {
  const [isRotating, setIsRotating] = useState(false) // set rotation state
  const [currentStage, setCurrentStage] = useState(1) // set current stage




  // set screen scale for island based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    // for island
    // let screenPosition = [0, -0.6, -43]
    let screenPosition = [0, -5, -45]
    // [x, y, z] = screenPosition
    let rotation = [0.1, 5,0 ]
    if(window.innerWidth < 768){
      // screenScale = [0.9, 0.9, 0.9]  // for island
      screenScale = [0.4, 0.4, 0.4]
    } else {      
      // screenScale = [1, 1, 1]  // for island
      screenScale = [0.65, 0.65, 0.65]
    }
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  
  // set screen scale for airplane based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    // [x, y, z] = screenPosition

    if(window.innerWidth < 768){ // small screen
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
      // screenPosition = [-8, 5, -8]
    } else {      // larger screen
      screenScale = [3, 3, 3]
      screenPosition = [-10, -4, -7]
      // screenPosition = [-15, 3, -15]
    }
    return [screenScale, screenPosition]
  }

  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  



  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 right-7 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* Dynamic cursor style based on rotation state: cursor-grabbing when rotating, cursor-grab when not rotating */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[2, 1.5, 1]} intensity={-0.2} />
          <ambientLight intensity={0.9} />
          {/* <ambientLight intensity={4}/> */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20.5, 0]}
            planeScale={planeScale}
            planePosition={planePosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home
