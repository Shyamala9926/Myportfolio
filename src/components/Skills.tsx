import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Code, Server, Smartphone, Github, Briefcase, FileCog, Users } from 'lucide-react';

// Define skill categories with their icons and skills
const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code size={24} className="text-neon-cyan" />,
    skills: ['Java', 'Python', 'JavaScript', 'C'],
  },
  {
    title: 'Frontend',
    icon: <Briefcase size={24} className="text-neon-purple" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'],
  },
  {
    title: 'Backend',
    icon: <Server size={24} className="text-neon-cyan" />,
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone size={24} className="text-neon-purple" />,
    skills: ['Android Studio', 'Java (Android)', 'XML'],
  },
  {
    title: 'Databases',
    icon: <Database size={24} className="text-neon-cyan" />,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FileCog size={24} className="text-neon-purple" />,
    skills: ['Git', 'GitHub', 'PyCharm', 'Jupyter', 'Anaconda'],
  },
  {
    title: 'Soft Skills',
    icon: <Users size={24} className="text-neon-cyan" />,
    skills: ['Problem-Solving', 'Agile Methodologies', 'Team Collaboration', 'Time Management'],
  },
];

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary-800/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20"
    >
      <div className="mb-4">{category.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
      
      <div className="space-y-3">
        {category.skills.map((skill: string, idx: number) => (
          <div key={idx} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">{skill}</span>
            </div>
            <div className="w-full bg-secondary-700 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${80 + Math.random() * 20}%` } : {}}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical <span className="text-neon-cyan">Skills</span>
            </motion.h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              My technical toolkit includes a diverse range of programming languages, frameworks, and technologies
              that I've mastered throughout my education and professional experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
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

export default Skills;