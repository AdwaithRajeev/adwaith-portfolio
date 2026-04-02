import resume from "../assets/resume.pdf";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> Building Scalable Web Applications With MERN';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  // MERN stack icons for background animation
  const mernIcons = [
    {
      name: 'MongoDB',
      icon: 'https://cdn.simpleicons.org/mongodb/00ED64',
      color: '#00ED64',
      position: { top: '10%', left: '10%' },
      delay: 0,
      size: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
    },
    {
      name: 'Express',
      icon: 'https://cdn.simpleicons.org/express/000000',
      color: '#000000',
      position: { top: '20%', right: '15%' },
      delay: 0.5,
      size: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
    },
    {
      name: 'React',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
      color: '#61DAFB',
      position: { bottom: '25%', left: '15%' },
      delay: 1,
      size: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
      color: '#339933',
      position: { bottom: '15%', right: '10%' },
      delay: 1.5,
      size: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
    },
  ];

  const iconVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    pulse: {
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated MERN Stack Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        {mernIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${tech.size} group cursor-pointer`}
            style={{
              ...tech.position,
            }}
            variants={iconVariants}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.15, 1],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + index,
              delay: tech.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.3,
              opacity: 0.8,
            }}
          >
            {/* Icon with color filter on hover */}
            <motion.img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain transition-all duration-300"
              style={{
                filter: `drop-shadow(0 0 8px ${tech.color}40)`,
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                filter: `drop-shadow(0 0 20px ${tech.color}) brightness(1.3) saturate(1.3)`,
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Enhanced glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-neon-green/20 rounded-full blur-xl transition-all duration-300"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                delay: tech.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                opacity: 0.9,
                scale: 1.8,
                backgroundColor: 'rgba(0, 255, 156, 0.4)',
              }}
            />
            
            {/* Additional color highlight ring on hover */}
            <motion.div
              className="absolute inset-0 border-2 border-neon-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{
                opacity: 1,
                scale: 1.2,
                boxShadow: '0 0 30px rgba(0, 255, 156, 0.6)',
              }}
            />
            
            {/* Pulsing highlight effect on hover */}
            <motion.div
              className="absolute inset-0 bg-neon-green/30 rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 1 }}
              whileHover={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1.2, 1.6, 1.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto relative">
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.img
              src="/adwaith.jpeg"
              alt="Adwaith S Rajeev"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-neon-green shadow-lg shadow-neon-green/50 object-cover bg-dark-surface"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
              onError={(e) => {
                // Hide image if not found, border will still show
                e.target.style.display = 'none';
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-neon-green opacity-50"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 156, 0.5)',
                  '0 0 40px rgba(0, 255, 156, 0.8)',
                  '0 0 20px rgba(0, 255, 156, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono"
          variants={itemVariants}
        >
          <span className="text-white">Adwaith</span>{' '}
          <span className="text-neon-green">S Rajeev</span>
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-mono"
          variants={itemVariants}
        >
          Full Stack MERN Developer
        </motion.div>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-neon-green font-mono text-left sm:text-center mb-8"
          variants={itemVariants}
        >
          <span>{displayText}</span>
          <span
            className={`inline-block w-2 h-6 bg-neon-green ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          >
            |
          </span>
        </motion.div>

        {/* Resume Download and Social Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          {/* Download Resume Button */}
          <motion.a
            href={resume}
            download
            className="px-6 py-3 bg-transparent border-2 border-neon-green text-neon-green font-mono font-semibold rounded-lg hover:bg-neon-green hover:text-dark-bg transition-all duration-300 shadow-lg shadow-neon-green/20 hover:shadow-neon-green/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'Download Resume'}
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com/in/adwaith"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-neon-green/50 rounded-lg hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-neon-green"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/adwaith"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-neon-green/50 rounded-lg hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <svg
                className="w-6 h-6 text-neon-green"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            <motion.a
              href="mailto:adwaith@example.com"
              className="w-12 h-12 flex items-center justify-center border-2 border-neon-green/50 rounded-lg hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title="Email"
            >
              <svg
                className="w-6 h-6 text-neon-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

