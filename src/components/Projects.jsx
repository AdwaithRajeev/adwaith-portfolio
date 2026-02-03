import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Job Portal Application',
      techStack: 'React, Node.js, Express, MongoDB',
      description:
        'Role-based job listing platform with authentication, allowing employers to post jobs and candidates to apply seamlessly.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono text-center sm:text-left"
        variants={cardVariants}
      >
        {'> projects'}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 sm:p-8 shadow-lg shadow-neon-green/10"
            variants={cardVariants}
            whileHover={{
              borderColor: 'rgba(0, 255, 156, 0.5)',
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0, 255, 156, 0.2)',
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neon-green font-mono">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-neon-green/80 mb-4 font-mono">
              {project.techStack}
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-mono">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;


