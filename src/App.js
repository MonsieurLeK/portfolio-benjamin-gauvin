import { OrbitControls } from '@react-three/drei/core/OrbitControls.js';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei/core/PerspectiveCamera.js';
import {  Stars } from '@react-three/drei/core/Stars.js';
import { Suspense } from 'react';
import MainScene from './components/MainScene.jsx'


function App() {
  return (
    <div id='main-scene' >
      <Canvas >
        <PerspectiveCamera position={[0, 5, -10]} />
        <OrbitControls />
        <Stars />
        <directionalLight />
        <ambientLight />
        <Suspense fallback={null} >
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
