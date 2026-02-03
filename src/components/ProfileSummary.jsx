import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProfileSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-mono"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Passionate Full Stack Developer specializing in the MERN stack,
          dedicated to building scalable, production-ready web applications
          that solve real-world problems.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ProfileSummary;


