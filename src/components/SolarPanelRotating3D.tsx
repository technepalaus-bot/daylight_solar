'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SolarPanelGeometry() {
  const panelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (panelRef.current) {
      panelRef.current.rotation.y += 0.005;
      panelRef.current.rotation.x += 0.003;
    }
  });

  return (
    <group ref={panelRef}>
      {/* Solar Panel Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshPhongMaterial color="#0066ff" shininess={100} />
      </mesh>

      {/* Solar Cells Grid */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <mesh key={`${row}-${col}`} position={[(col - 2.5) * 0.5, (row - 1.5) * 0.5, 0.15]}>
            <boxGeometry args={[0.45, 0.45, 0.05]} />
            <meshPhongMaterial color="#004ab3" shininess={80} />
          </mesh>
        ))
      )}

      {/* Frame */}
      <mesh position={[0, 0, -0.15]}>
        <boxGeometry args={[3.1, 2.1, 0.1]} />
        <meshPhongMaterial color="#333333" />
      </mesh>

      {/* Light Reflection */}
      <mesh position={[0.5, 0.3, 0.15]}>
        <boxGeometry args={[0.8, 0.8, 0.02]} />
        <meshPhongMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function SolarPanelRotating3D() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-cyan-500 to-blue-600">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls enableZoom={false} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ff00" />

        {/* Solar Panel */}
        <SolarPanelGeometry />

        {/* Background Sphere */}
        <mesh position={[0, 0, -10]}>
          <sphereGeometry args={[20, 32, 32]} />
          <meshBasicMaterial color="#0a1e3f" />
        </mesh>
      </Canvas>
    </div>
  );
}
