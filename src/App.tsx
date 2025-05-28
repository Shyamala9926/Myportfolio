import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800 text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;