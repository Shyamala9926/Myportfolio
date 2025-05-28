import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationList = [
  {
    degree: 'M-Tech in Computer Science',
    institution: 'JNTUH University College of Engineering',
    duration: 'Sept 2024 – Pursuing',
    icon: <GraduationCap size={24} className="text-neon-cyan" />
  },
  {
    degree: 'B-Tech in Computer Science & Engineering',
    institution: 'Free Dattha Institute of Engineering',
    duration: '2021 – 2024',
    icon: <GraduationCap size={24} className="text-neon-purple" />
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Sri Indu Institute of Engineering',
    duration: '2018 – 2021',
    icon: <GraduationCap size={24} className="text-neon-cyan" />
  }
];

const EducationCard = ({ education, index }: { education: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row gap-6 relative ${
        index !== educationList.length - 1 ? 'pb-12' : ''
      }`}
    >
      {/* Timeline connector */}
      {index !== educationList.length - 1 && (
        <div className="absolute left-5 top-12 h-full w-0.5 bg-gradient-to-b from-neon-cyan to-neon-purple hidden md:block"></div>
      )}

      {/* Timeline dot */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-10 h-10 rounded-full bg-secondary-800 border-2 border-neon-cyan flex items-center justify-center shadow-neon-cyan">
          {React.cloneElement(education.icon, { size: 16 })}
        </div>
      </div>

      <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl border border-secondary-700 p-6 w-full shadow-lg hover:shadow-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{education.degree}</h3>
          <div className="flex items-center text-neon-cyan space-x-2 mt-2 md:mt-0">
            <Calendar size={16} />
            <span className="text-sm">{education.duration}</span>
          </div>
        </div>

        <p className="text-gray-300">{education.institution}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
              <span className="text-neon-cyan">Education</span> Journey
            </motion.h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
          </div>

          <div className="space-y-8">
            {educationList.map((education, index) => (
              <EducationCard key={index} education={education} index={index} />
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

export default Education;