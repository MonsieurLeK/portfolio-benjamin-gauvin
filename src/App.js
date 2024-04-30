import './App.css';
import About from './pages/About/About.js';
import { Canvas } from '@react-three/fiber'
import {  Stars } from '@react-three/drei/core/Stars.js';
import { Suspense, useRef, useState } from 'react';
import MainScene from './components/MainScene.jsx'
import { OrbitControls, PresentationControls, Text } from '@react-three/drei';
import { useSpring, animated, easings } from '@react-spring/three';
import font3d from '../src/assets/Jersey10-Regular.ttf'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen.js';


function App() {

  const cameraRef = useRef(null)
  const cardRef = useRef(null)
  const sceneRef = useRef(null)
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [about, setAbout] = useState(false)
  const { cardScale1, cardRotation1 } = useSpring(active1 ? 
    { from: {cardScale1: 1, cardRotation1: [-0.3, 0.5, 0]}, 
    to: {cardScale1: 1.5, cardRotation1: [-0.3, 0.3, 0]}, 
    config: {duration: 300, easing: easings.easeOutBack}} :
  {from: {cardScale1: 1.5, cardRotation1: [-0.3, 0.3, 0]}, 
  to: {cardScale1: 1, cardRotation1: [-0.3, 0.5, 0]}})
  const { cardScale2, cardRotation2 } = useSpring(active2 ? 
    {from: {cardScale2: 1, cardRotation2: [-0.3, -0.5, 0]}, 
    to: {cardScale2: 1.5, cardRotation2: [-0.3, -0.3, 0]}, 
    config: {duration: 300, easing: easings.easeOutBack}} :
  {from: {cardScale2: 1.5, cardRotation2: [-0.3, -0.3, 0]}, 
  to: {cardScale2: 1, cardRotation2: [-0.3, -0.5, 0]}})

  return (<>
    <WelcomeScreen />
    <h1 id='title-main'>GAUVIN Benjamin</h1>
    <span id='credits' >Credits: Auteur 3d:	Amy (https://sketchfab.com/uouoamy) Titre: Restaurant</span>
    <About active={about} event={() => setAbout(false)} />
    <div id='main-scene' ref={sceneRef} >
      <Canvas  camera={{position: [0, 25, 20], fov: 50}} ref={cameraRef} >
        <OrbitControls minDistance={10} maxDistance={50} enablePan={false} enableRotate={false} />
        <Stars fade />
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
          onPointerDown={() => setAbout(true)}
          position={[-5, 5, -5]}
          rotation={cardRotation1} >
            <boxGeometry args={[3.5, 5, 0.1]} />
            <meshPhongMaterial color="white" transparent opacity={active1 ? 1 : 0.9} />
            <Text color="black"
            font={font3d}
            scale={1}
            textAlign='center'
            position={[0, 0.5, 0.2]} >{`À\n propos\n de moi .`}</Text>
          </animated.mesh>
          <animated.mesh ref={cardRef}
          scale={cardScale2}
          onPointerEnter={() => setActive2(true)}
          onPointerLeave={() => setActive2(false)}
          position={[5, 5, -5]}
          rotation={cardRotation2} >
            <boxGeometry args={[3.5, 5, 0.1]} />
            <meshPhongMaterial color="white" transparent opacity={active2 ? 1 : 0.9} />
            <Text color="black"
            font={font3d}
            scale={1}
            textAlign='center'
            position={[0, 0.5, 0.2]} >{`Mes\n projets .`}</Text>
          </animated.mesh>
        </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
    </>
  );
}

export default App;
