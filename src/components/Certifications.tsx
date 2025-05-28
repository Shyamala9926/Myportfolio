import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Udemy',
    year: '2023',
    link: '#'
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'EXCELR',
    year: '2023',
    link: '#'
  },
  {
    title: 'JavaScript (10 Projects)',
    issuer: 'Udemy',
    year: '2022',
    link: '#'
  },
  {
    title: 'Data Science',
    issuer: 'Internshala',
    year: '2022',
    link: '#'
  },
  {
    title: 'Python Programming',
    issuer: 'AI Business School',
    year: '2021',
    link: '#'
  }
];

const CertificationCard = ({ certification, index }: { certification: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary-800/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 flex items-center group"
    >
      <div className="mr-4 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-secondary-700 flex items-center justify-center group-hover:bg-neon-purple transition-colors">
          <Award size={20} className="text-neon-cyan" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-neon-cyan transition-colors">{certification.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">{certification.issuer} • {certification.year}</p>
          <a 
            href={certification.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-neon-purple transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="text-neon-cyan">Certifications</span>
            </motion.h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/3 -right-16 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-16 w-32 h-32 bg-neon-cyan opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Certifications;