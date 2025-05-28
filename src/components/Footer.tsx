//import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative overflow-hidden border-t border-secondary-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a
              href="#"
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Code
                size={24}
                className="text-neon-cyan filter drop-shadow-md"
              />
              <span className="text-xl font-bold font-mono text-white">
                <span className="text-neon-cyan">J</span>S
                <span className="text-neon-cyan">.</span>
              </span>
            </motion.a>
            <p className="text-gray-400 mt-2 text-sm">
              Full-stack developer creating beautiful digital experiences.
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/Shyamala9926" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-neon-purple transition-colors"
            >
              <Github size={18} className="text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shyamala-janamoni/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-neon-purple transition-colors"
            >
              <Linkedin size={18} className="text-white" />
            </a>
            <a 
              href="mailto:shyamalajanamoni2002@gmail.com" 
              className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-neon-purple transition-colors"
            >
              <Mail size={18} className="text-white" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center hover:bg-neon-purple/80 transition-colors shadow-neon-purple"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-700 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Janamoni Shyamala. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-neon-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-neon-cyan opacity-5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;