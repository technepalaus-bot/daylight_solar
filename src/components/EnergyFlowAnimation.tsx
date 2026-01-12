'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function EnergyFlowScene() {
  const sunRef = useRef<THREE.Mesh>(null);
  const panelRef = useRef<THREE.Group>(null);
  const batteryRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.01;
    }

    if (panelRef.current) {
      panelRef.current.rotation.z += 0.008;
    }

    if (batteryRef.current) {
      batteryRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }

    // Animate particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.02;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Generate particle positions for energy flow
  const particleCount = 100;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 8;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  return (
    <>
      {/* Sun - Energy Source */}
      <mesh ref={sunRef} position={[-4, 2, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      <mesh position={[-4, 2, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#FDB813" transparent opacity={0.3} />
      </mesh>

      {/* Solar Panel */}
      <group ref={panelRef} position={[0, 1, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.5, 1.5, 0.15]} />
          <meshPhongMaterial color="#0066ff" shininess={100} />
        </mesh>

        {/* Solar cells */}
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <mesh key={`${row}-${col}`} position={[(col - 2) * 0.4, (row - 1) * 0.4, 0.1]}>
              <boxGeometry args={[0.35, 0.35, 0.05]} />
              <meshPhongMaterial color="#004ab3" />
            </mesh>
          ))
        )}
      </group>

      {/* Battery - Energy Storage */}
      <group ref={batteryRef} position={[4, 1, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
          <meshPhongMaterial color="#4CAF50" shininess={50} />
        </mesh>

        {/* Battery top */}
        <mesh position={[0, 0.85, 0]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshPhongMaterial color="#66BB6A" />
        </mesh>

        {/* Energy indicator inside battery */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1.3, 32]} />
          <meshPhongMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Energy Flow - Light Rays */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`ray-${i}`} position={[-4 + (i * 0.3), 2, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                0, 0, 0,
                3.5, -0.8, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#ffff00"
            transparent
            opacity={0.6}
            linewidth={3}
          />
        </mesh>
      ))}

      {/* Energy conversion rays - panel to battery */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`convert-${i}`} position={[0 + (i * 0.3), 1, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                0, 0, 0,
                3.5, 0, 0,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00ff00"
            transparent
            opacity={0.7}
            linewidth={2}
          />
        </mesh>
      ))}

      {/* Energy particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#ffff00"
          transparent
          opacity={0.8}
        />
      </points>

      {/* Connection Wires */}
      <mesh position={[-4, 2, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, 0, 4, -1, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" linewidth={2} />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0, 0, 4, 0, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" linewidth={2} />
      </mesh>
    </>
  );
}

export default function EnergyFlowAnimation() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-cyan-900 via-blue-900 to-gray-900">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
        />
        <pointLight position={[0, 3, 5]} intensity={0.8} color="#ffff00" />

        {/* Scene */}
        <EnergyFlowScene />

        {/* Background */}
        <mesh position={[0, 0, -20]}>
          <sphereGeometry args={[50, 32, 32]} />
          <meshBasicMaterial color="#0a1628" side={THREE.BackSide} />
        </mesh>
      </Canvas>
    </div>
  );
}
