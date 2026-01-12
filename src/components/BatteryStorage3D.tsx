'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BatteryScene() {
  const batteryRef = useRef<THREE.Group>(null);
  const energyRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (batteryRef.current) {
      batteryRef.current.rotation.y += 0.008;
      batteryRef.current.rotation.x += 0.003;
    }

    if (energyRef.current) {
      energyRef.current.scale.x = 0.8 + Math.sin(Date.now() * 0.005) * 0.2;
      energyRef.current.scale.y = 0.8 + Math.sin(Date.now() * 0.005) * 0.2;
      energyRef.current.scale.z = 0.8 + Math.sin(Date.now() * 0.005) * 0.2;
    }
  });

  return (
    <>
      {/* Battery */}
      <group ref={batteryRef}>
        {/* Outer casing */}
        <mesh castShadow>
          <cylinderGeometry args={[1, 1, 2.5, 32]} />
          <meshPhongMaterial color="#1a1a1a" shininess={20} />
        </mesh>

        {/* Top terminal positive */}
        <mesh position={[0, 1.4, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.3, 16]} />
          <meshPhongMaterial color="#ff6b6b" shininess={100} />
        </mesh>

        {/* Top terminal negative */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshPhongMaterial color="#4ecdc4" shininess={100} />
        </mesh>

        {/* Inner energy core - pulsing */}
        <mesh ref={energyRef} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 2.3, 32]} />
          <meshPhongMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Energy rings */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={`ring-${i}`} position={[0, -0.5 + i * 0.6, 0]}>
            <torusGeometry args={[0.85, 0.1, 16, 100]} />
            <meshPhongMaterial
              color="#00ff00"
              emissive="#00ff00"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
      </group>

      {/* Energy flow particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={new Float32Array(
              Array.from({ length: 200 }, () => [
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
              ]).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00ff00"
          transparent
          opacity={0.6}
        />
      </points>
    </>
  );
}

export default function BatteryStorage3D() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-green-900">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />

        {/* Ambient Light */}
        <ambientLight intensity={0.4} />

        {/* Directional Light */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
        />

        {/* Green accent light */}
        <pointLight position={[-5, 0, 5]} intensity={0.8} color="#00ff00" />

        {/* Scene */}
        <BatteryScene />

        {/* Background */}
        <mesh position={[0, 0, -10]}>
          <sphereGeometry args={[30, 32, 32]} />
          <meshBasicMaterial color="#0a0f1f" side={THREE.BackSide} />
        </mesh>
      </Canvas>
    </div>
  );
}
