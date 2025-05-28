import React, { useRef, useEffect } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Component for the particle field
const ParticleField = () => {
  const points = useRef<THREE.Points>(null!);
  const particlesCount = 1000;
  
  // Create particles
  const positions = new Float32Array(particlesCount * 3);
  const speeds = new Float32Array(particlesCount);
  
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 15;
    positions[i3 + 1] = (Math.random() - 0.5) * 15;
    positions[i3 + 2] = (Math.random() - 0.5) * 5;
    speeds[i] = Math.random() * 0.02 + 0.002;
  }
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Move particles slightly and create a wave effect
        positions[i3 + 1] -= speeds[i];
        
        // Reset position when particle goes out of view
        if (positions[i3 + 1] < -10) {
          positions[i3] = (Math.random() - 0.5) * 15;
          positions[i3 + 1] = 10;
          positions[i3 + 2] = (Math.random() - 0.5) * 5;
        }
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
      points.current.rotation.y = time * 0.05;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#00F5FF"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

const ParticleBackground = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </motion.div>
  );
};

export default ParticleBackground;