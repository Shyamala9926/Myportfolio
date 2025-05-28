import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Card3D = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<Mesh>(null);
  const targetScale = useRef(1);
  const targetRotationY = useRef(0);
  const currentScale = useRef(1);
  const currentRotationY = useRef(0);

  useEffect(() => {
    targetScale.current = isHovered ? 1.1 : 1;
    targetRotationY.current = isHovered ? Math.PI / 8 : 0;
  }, [isHovered]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const lerp = 1 - Math.pow(0.01, delta);
      currentScale.current += (targetScale.current - currentScale.current) * lerp;
      currentRotationY.current += (targetRotationY.current - currentRotationY.current) * lerp;
      meshRef.current.scale.setScalar(currentScale.current);
      meshRef.current.rotation.y = currentRotationY.current;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial 
          color="#5E17EB"
          metalness={0.8}
          roughness={0.2}
          emissive="#5E17EB"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const projects = [
  {
    title: 'JAICOB: Data Science Chatbot',
    description: 'AI chatbot for data science automation using Python.',
    tools: ['Python', 'Jupyter', 'PyCharm'],
    image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/your-username/jaicob-chatbot',
    demo: 'https://your-deployment-url.com/jaicob'
  },
  {
    title: 'YouTube Clone',
    description: 'YouTube-style video platform with React and YouTube API.',
    tools: ['React', 'Node.js', 'Express', 'YouTube API'],
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/shyamala9926/Youtube-Clone',
    demo: 'https://your-deployment-url.com/youtube-clone'
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative group h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden z-0">
          <div className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-300"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="relative h-80 rounded-xl overflow-hidden">
          <div className="absolute left-0 bottom-0 w-full p-6 bg-gradient-to-t from-secondary-900 to-transparent">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan">{project.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool: string, idx: number) => (
                <span 
                  key={idx} 
                  className="text-xs px-2 py-1 rounded-full bg-secondary-800 text-neon-cyan border border-neon-cyan/30"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex space-x-3">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-neon-purple text-white"
              >
                <Layers size={14} />
              </button>
              {project.github && (
               <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-800 text-white z-50 relative"
  onClick={(e) => e.stopPropagation()} // Stops click from being intercepted
>
  <Github size={14} />
</a>

              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-800 text-white">
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-full h-56">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Card3D isHovered={isHovered} />
              </Canvas>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary-800 rounded-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-auto"
          >
            <div className="relative h-60">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent"></div>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary-800/80 text-white">
                <X size={16} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-neon-cyan">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Code size={18} className="text-neon-purple" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool: string, idx: number) => (
                  <span key={idx} className="text-sm px-3 py-1 rounded-full bg-secondary-700 text-neon-cyan border border-neon-cyan/30">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-neon-purple text-white flex items-center gap-2">
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-neon-cyan text-neon-cyan flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-neon-cyan">Projects</span>
            </motion.h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Explore some of my recent work. Each project reflects my passion for building innovative solutions that solve real-world problems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background glow elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-neon-cyan opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Projects;
