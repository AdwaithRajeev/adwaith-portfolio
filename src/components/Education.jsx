import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'BCA',
      institution: 'Government College, Thalassery',
      location: 'Kerala',
      duration: '2021 – 2024',
    },
    {
      degree: 'Higher Secondary',
      institution: 'RGMHSS, MOKERI',
      location: 'Kerala',
      duration: '2019 – 2021',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono text-center sm:text-left">
        {'> education'}
      </h2>

      <div className="relative">
        {/* Route line */}
        <motion.div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-neon-green/30 origin-top"
          variants={lineVariants}
        />

        {/* Checkpoints */}
        <div className="space-y-8 sm:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-16 sm:pl-20">
              <motion.div
                className="absolute left-4 sm:left-6 top-2 w-4 h-4 bg-neon-green rounded-full border-2 border-dark-bg shadow-lg shadow-neon-green/50"
                variants={itemVariants}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />

              <motion.div
                className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 sm:p-8 shadow-lg shadow-neon-green/10"
                variants={itemVariants}
                whileHover={{ borderColor: 'rgba(0, 255, 156, 0.5)', scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-green font-mono">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 font-mono">
                    {edu.institution}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 font-mono">
                    {edu.location}
                  </p>
                  <p className="text-sm sm:text-base text-neon-green/80 font-mono">
                    {edu.duration}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

