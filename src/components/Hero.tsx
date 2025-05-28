import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { ChevronDown } from 'lucide-react';

// 3D Text component
const AnimatedText = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Float 
        speed={1.5} 
        rotationIntensity={0.5} 
        floatIntensity={0.5}
      >
        <Text3D
          font="/fonts/Roboto_Regular.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2, 0, 0]}
        >
          JANAMONI
          <meshStandardMaterial color="#5E17EB" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>
    </>
  );
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-800 opacity-70"></div>
        <div className="h-full w-full">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <AnimatedText />
          </Canvas>
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 z-10 text-center"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Janamoni Shyamala</span>
            <span className="text-neon-cyan font-mono text-2xl md:text-3xl lg:text-4xl block mt-2">
              Software Developer
            </span>
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-neon-purple text-white rounded-full font-medium hover:bg-neon-purple/80 transition-colors shadow-neon-purple"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-transparent border border-neon-cyan text-neon-cyan rounded-full font-medium hover:bg-neon-cyan/10 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="text-white hover:text-neon-cyan transition-colors">
          <ChevronDown size={36} />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;