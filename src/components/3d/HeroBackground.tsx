import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';

function Particles({ count = 2000, isLight }: { count?: number, isLight?: boolean }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <PointMaterial
        transparent
        color={isLight ? "#0088cc" : "#00f3ff"}
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={isLight ? THREE.NormalBlending : THREE.AdditiveBlending}
        opacity={isLight ? 0.6 : 1}
      />
    </Points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[4, 2, -5]}>
          <MeshDistortMaterial
            color="#b026ff"
            speed={3}
            distort={0.4}
            radius={1}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-5, -2, -8]}>
          <tetrahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#00f3ff" wireframe />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, -4, -10]}>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </Float>
    </>
  );
}

export const HeroBackground = ({ theme }: { theme?: 'dark' | 'light' }) => {
  const isLight = theme === 'light';
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={isLight ? 1.5 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b026ff" />
        
        <Particles isLight={isLight} />
        <FloatingShapes />
        
        <fog attach="fog" args={[isLight ? '#f3f4f6' : '#000', 5, 15]} />
      </Canvas>
      <div className={cn(
        "absolute inset-0 pointer-events-none transition-colors duration-500",
        isLight 
          ? "bg-gradient-to-b from-transparent via-white/20 to-white" 
          : "bg-gradient-to-b from-transparent via-black/20 to-black"
      )} />
    </div>
  );
};
