'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SolarSystemScene() {
  const sunRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Group>(null);
  const panelsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Rotate sun with glow effect
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
    }

    // Orbit earth around sun
    if (earthRef.current) {
      earthRef.current.rotation.z += 0.0005;
    }

    // Rotate solar panels
    if (panelsRef.current) {
      panelsRef.current.rotation.x += 0.01;
      panelsRef.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      {/* Sun */}
      <mesh ref={sunRef} position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Sun Glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbital Path */}
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={64}
            array={new Float32Array(
              Array.from({ length: 64 }, (_, i) => [
                Math.cos((i / 64) * Math.PI * 2) * 6,
                0,
                Math.sin((i / 64) * Math.PI * 2) * 6,
              ]).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      {/* Earth/Planet */}
      <group ref={earthRef} position={[6, 0, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshPhongMaterial color="#4a90e2" shininess={10} />
        </mesh>

        {/* Solar Panels around planet */}
        <group ref={panelsRef}>
          {Array.from({ length: 3 }).map((_, i) => (
            <group key={i} position={[0, Math.sin((i / 3) * Math.PI * 2) * 2, Math.cos((i / 3) * Math.PI * 2) * 2]}>
              <mesh>
                <boxGeometry args={[1.2, 0.8, 0.1]} />
                <meshPhongMaterial color="#0066ff" shininess={100} />
              </mesh>
            </group>
          ))}
        </group>
      </group>

      {/* Light Rays from Sun */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`ray-${i}`} position={[0, 0, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                0, 0, 0,
                Math.cos((i / 8) * Math.PI * 2) * 10,
                Math.sin((i / 8) * Math.PI * 2) * 10,
                0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#ffff00"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </>
  );
}

export default function SolarSystemAnimation() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-900">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }} shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 12]} />
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />

        {/* Ambient Light */}
        <ambientLight intensity={0.4} />

        {/* Sun Light */}
        <pointLight
          position={[0, 0, 0]}
          intensity={2}
          color="#ffff00"
        />

        {/* Fill Light */}
        <pointLight
          position={[10, 5, 5]}
          intensity={0.8}
          color="#00aaff"
        />

        {/* Scene */}
        <SolarSystemScene />

        {/* Background */}
        <mesh position={[0, 0, -20]}>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial color="#000814" side={THREE.BackSide} />
        </mesh>
      </Canvas>
    </div>
  );
}
