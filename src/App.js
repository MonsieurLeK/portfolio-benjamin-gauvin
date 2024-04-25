import './App.css';
import { Canvas } from '@react-three/fiber'
import {  Stars } from '@react-three/drei/core/Stars.js';
import { Suspense, useRef, useState } from 'react';
import MainScene from './components/MainScene.jsx'
import { OrbitControls, PresentationControls, Text } from '@react-three/drei';
import { useSpring, animated, easings } from '@react-spring/three';


function App() {

  const [cameraPosition, setCameraPosition] = useState([0, 25, 10])
  const cardRef = useRef(null)
  const sceneRef = useRef(null)
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const { cardScale1 } = useSpring(active1 ? 
    { from: {cardScale1: 1}, to: {cardScale1: 1.5}, config: {duration: 300, easing: easings.easeOutBack}} :
  {from: {cardScale1: 1.5}, to: {cardScale1: 1}})
  const { cardScale2 } = useSpring(active2 ? 
    {from: {cardScale2: 1}, to: {cardScale2: 1.5}, config: {duration: 300, easing: easings.easeOutBack}} :
  {from: {cardScale2: 1.5}, to: {cardScale2: 1}})

  return (
    <div id='main-scene' ref={sceneRef} >
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
          <animated.mesh ref={cardRef}
          scale={cardScale1}
          onPointerEnter={() => setActive1(true)}
          onPointerLeave={() => setActive1(false)}
          position={[-5, 5, -5]}
          rotation={[-0.3, 0.5, 0]} >
            <boxGeometry args={[3.5, 5, 0.1]} />
            <meshPhongMaterial color="white" transparent opacity={active1 ? 1 : 0.9} />
            <Text color="black"
            scale={0.7}
            textAlign='center'
            position={[0, 0.8, 0.2]} >{`À\n propos\n de moi .`}</Text>
          </animated.mesh>
          <animated.mesh ref={cardRef}
          scale={cardScale2}
          onPointerEnter={() => setActive2(true)}
          onPointerLeave={() => setActive2(false)}
          position={[5, 5, -5]}
          rotation={[-0.3, -0.5, 0]} >
            <boxGeometry args={[3.5, 5, 0.1]} />
            <meshPhongMaterial color="white" transparent opacity={active2 ? 1 : 0.9} />
            <Text color="black"
            scale={0.7}
            textAlign='center'
            position={[0, 0.8, 0.2]} >{`Mes\n projets .`}</Text>
          </animated.mesh>
        </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
