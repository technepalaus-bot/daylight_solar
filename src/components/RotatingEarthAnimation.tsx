'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingEarthScene() {
  const earthRef = useRef<THREE.Mesh>(null);
  const panelsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }

    if (panelsRef.current) {
      panelsRef.current.rotation.z += 0.008;
    }
  });

  return (
    <>
      {/* Earth */}
      <mesh ref={earthRef} castShadow>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial
          color="#2196F3"
          emissive="#1976D2"
          emissiveIntensity={0.1}
          shininess={5}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[2.6, 64, 64]} />
        <meshBasicMaterial
          color="#00BCD4"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Clouds overlay */}
      <mesh position={[0, 0, 0.01]}>
        <sphereGeometry args={[2.55, 64, 64]} />
        <meshPhongMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.1}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Solar Panels orbiting Earth */}
      <group ref={panelsRef}>
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = Math.cos(angle) * 5;
          const z = Math.sin(angle) * 5;

          return (
            <group key={`panel-${i}`} position={[x, 0, z]}>
              {/* Panel */}
              <mesh castShadow>
                <boxGeometry args={[1.2, 0.8, 0.1]} />
                <meshPhongMaterial color="#0066ff" shininess={100} />
              </mesh>

              {/* Connection to Earth */}
              <mesh position={[-x * 0.3, 0, -z * 0.3]}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([
                      0, 0, 0,
                      x * 0.4, 0, z * 0.4,
                    ])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#00ff00" transparent opacity={0.6} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Light from sun */}
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffff00" />
    </>
  );
}

export default function RotatingEarthAnimation() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-700">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 3, 8]} />
        <OrbitControls enableZoom={true} autoRotate={false} />

        {/* Ambient Light */}
        <ambientLight intensity={0.5} />

        {/* Sun Light */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Scene */}
        <RotatingEarthScene />

        {/* Stars Background */}
        <mesh position={[0, 0, -30]}>
          <sphereGeometry args={[60, 32, 32]} />
          <meshBasicMaterial
            color="#000814"
            side={THREE.BackSide}
          />
        </mesh>

        {/* Starfield - tiny points */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={500}
              array={new Float32Array(
                Array.from({ length: 500 }, () => [
                  (Math.random() - 0.5) * 120,
                  (Math.random() - 0.5) * 120,
                  (Math.random() - 0.5) * 120,
                ]).flat()
              )}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.3}
            color="#ffffff"
            transparent
            opacity={0.8}
          />
        </points>
      </Canvas>
    </div>
  );
}
