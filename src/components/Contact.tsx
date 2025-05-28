import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';

// 3D Contact Me Text
const ContactText = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Float 
        speed={1.5} 
        rotationIntensity={0.2} 
        floatIntensity={0.2}
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
          CONTACT
          <meshStandardMaterial color="#5E17EB" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>
    </>
  );
};

const contactInfo = [
  { 
    icon: <Mail size={24} className="text-neon-cyan" />, 
    title: 'Email',
    value: 'shyamalajanamoni2002@gmail.com',
    link: 'mailto:shyamalajanamoni2002@gmail.com'
  },
  { 
    icon: <Phone size={24} className="text-neon-purple" />, 
    title: 'Phone',
    value: '9666748346',
    link: 'tel:9666748346'
  },
  { 
    icon: <MapPin size={24} className="text-neon-cyan" />, 
    title: 'Location',
    value: 'Hyderabad, India',
    link: null
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-secondary-800/50 text-white border border-secondary-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors";

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="h-32 mb-4">
              <Canvas>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                <ContactText />
              </Canvas>
            </div>
            <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out—I'd love to hear from you!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-secondary-800/50 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20"
                >
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-neon-cyan transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-secondary-800/30 backdrop-blur-sm p-8 rounded-xl border border-secondary-700 hover:border-neon-cyan/30 transition-all duration-500 hover:shadow-lg hover:shadow-neon-cyan/10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <Send size={24} className="text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-neon-cyan">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                        placeholder="How can I help you?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className={inputClasses}
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 ${
                        isSubmitting ? 'bg-secondary-700' : 'bg-neon-purple hover:bg-neon-purple/80'
                      } text-white rounded-lg font-medium flex items-center justify-center transition-colors`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
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

export default Contact;