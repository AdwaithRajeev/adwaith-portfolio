import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg shadow-neon-green/10"
        whileHover={{ borderColor: 'rgba(0, 255, 156, 0.5)', scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-neon-green font-mono">
          {'> about'}
        </h2>
        <div className="space-y-4 text-gray-300 font-mono text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            I'm on a journey to master scalable web application development,
            focusing on becoming a production-ready full stack developer.
          </p>
          <p>
            My passion lies in building real-world applications that make a
            difference, using the MERN stack to create efficient, maintainable,
            and scalable solutions.
          </p>
          <p>
            Every project is an opportunity to learn, grow, and push the
            boundaries of what's possible with modern web technologies.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;


