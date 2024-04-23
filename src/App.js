import './App.css';
import { Canvas } from '@react-three/fiber'
import {  Stars } from '@react-three/drei/core/Stars.js';
import { Suspense, useState } from 'react';
import MainScene from './components/MainScene.jsx'
import { OrbitControls, PresentationControls, Text } from '@react-three/drei';
import gsap from 'gsap';



function App() {

  const [cameraPosition, setCameraPosition] = useState([0, 25, 10])

  return (
    <div id='main-scene' >
      <Canvas key={cameraPosition.toString()} camera={{position: cameraPosition, fov: 50}} >
        <OrbitControls minDistance={10} maxDistance={50} enablePan={false} enableRotate={false} />
        <Stars />
        <directionalLight />
        <ambientLight />
        <PresentationControls cursor={false} 
        snap={true} 
        rotation={[-0.3, -0.2, 0]} >
        <Suspense fallback={null} >
          <MainScene />
          <mesh position={[-5, 5, -5]}
          rotation={[-0.3, 0.5, 0]} >
            <boxGeometry args={[3.5, 5, 0.1]} />
            <meshStandardMaterial color="white" />
            <Text color="black"
            scale={0.5}
            position={[0, 1.1, 0.2]} >{`Apprenez à\n mieux me\n connaître .`}</Text>
          </mesh>
        </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
