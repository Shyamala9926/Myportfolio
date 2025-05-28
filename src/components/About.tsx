//import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactItems = [
    { 
      icon: <MapPin size={20} className="text-neon-cyan" />, 
      text: 'Hyderabad', 
      href: null
    },
    { 
      icon: <Mail size={20} className="text-neon-cyan" />, 
      text: 'shyamalajanamoni2002@gmail.com', 
      href: 'mailto:shyamalajanamoni2002@gmail.com'
    },
    { 
      icon: <Phone size={20} className="text-neon-cyan" />, 
      text: '9666748346', 
      href: 'tel:9666748346'
    },
    { 
      icon: <Linkedin size={20} className="text-neon-cyan" />, 
      text: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/shyamala-janamoni/'
    },
    { 
      icon: <Github size={20} className="text-neon-cyan" />, 
      text: 'GitHub', 
      href: 'https://github.com/Shyamala9926'
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-neon-cyan">Me</span>
            </h2>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              variants={itemVariants}
              className="col-span-1 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan p-1 shadow-neon-cyan animate-pulse">
                  <div className="w-full h-full rounded-full bg-secondary-800 flex items-center justify-center overflow-hidden">
                    <img
                      //src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                     src="/fonts/image.png"
                      alt="Janamoni Shyamala"
                       
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-cyan rounded-full animate-float"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Detail-oriented Computer Science Graduate (M-Tech) with expertise in full-stack development, 
                mobile app development, and data science. Proficient in HTML, CSS, JavaScript, React, Node.js, 
                Python, Java, and Android Studio. Passionate about building scalable, user-friendly applications 
                and solving real-world problems through technology. Strong problem-solving skills, adaptability, 
                and a collaborative mindset.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-300 hover:text-neon-cyan transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-neon-cyan opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;