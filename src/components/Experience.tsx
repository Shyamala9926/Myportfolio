import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Android Developer Intern',
    company: '24HR7 Commerce Private Limited',
    duration: 'Sept 2024 – Dec 2024',
    location: 'Hyderabad',
    description: [
      'Developed and optimized Android applications using Java, XML, and Android Studio, improving user engagement by 20%.',
      'Designed responsive web interfaces with HTML, CSS, JavaScript, and React for cross-platform compatibility.',
      'Conducted UI/UX testing, debugging, and performance optimization, reducing app crashes by 15%.',
      'Collaborated in Agile teams, participated in code reviews, and contributed to project planning.'
    ]
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'EXCELR',
    duration: 'Dec 2023 – May 2024',
    location: 'Hyderabad',
    description: [
      'Built full-stack web applications using MERN stack (MongoDB, Express.js, React, Node.js).',
      'Integrated RESTful APIs and databases to enhance dynamic user experiences.',
      'Implemented responsive design principles, ensuring seamless functionality across devices.'
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row gap-6 relative ${
        index !== experiences.length - 1 ? 'pb-12' : ''
      }`}
    >
      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-5 top-12 h-full w-0.5 bg-gradient-to-b from-neon-purple to-neon-cyan hidden md:block"></div>
      )}

      {/* Timeline dot */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-10 h-10 rounded-full bg-secondary-800 border-2 border-neon-cyan flex items-center justify-center shadow-neon-cyan">
          <Briefcase size={16} className="text-neon-cyan" />
        </div>
      </div>

      <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl border border-secondary-700 p-6 w-full shadow-lg hover:shadow-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{experience.title}</h3>
          <div className="flex items-center text-neon-cyan space-x-2 mt-2 md:mt-0">
            <Calendar size={16} />
            <span className="text-sm">{experience.duration}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neon-purple">{experience.company}</h4>
          <p className="text-gray-400">{experience.location}</p>
        </div>

        <ul className="space-y-2">
          {experience.description.map((item: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="text-gray-300 flex items-start"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-neon-cyan mr-3 mt-1.5"></span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Work <span className="text-neon-cyan">Experience</span>
            </motion.h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-neon-cyan opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Experience;