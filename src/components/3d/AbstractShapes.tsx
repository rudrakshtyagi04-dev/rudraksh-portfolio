import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Shape({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

export const AbstractShapes = ({ theme }: { theme?: 'dark' | 'light' }) => {
  const isLight = theme === 'light';
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={isLight ? 1.5 : 0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#b026ff" />
        
        <Shape position={[-4, 2, -2]} color="#00f3ff" speed={2} distort={0.3} />
        <Shape position={[4, -2, -3]} color="#b026ff" speed={1.5} distort={0.5} />
        
        <fog attach="fog" args={[isLight ? '#f9f9f9' : '#000', 5, 10]} />
      </Canvas>
    </div>
  );
};
