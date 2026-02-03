import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contacts = [
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:adwaith@example.com',
      label: 'adwaith@example.com',
    },
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/AdwaithRajeev',
      label: 'github.com/adwaith',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/adwaith-s-rajeev-aa723434a/',
      label: 'linkedin.com/in/adwaith',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono text-center"
        variants={itemVariants}
      >
        {'> contact'}
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 sm:p-8 bg-dark-surface border border-neon-green/30 rounded-lg shadow-lg shadow-neon-green/10 min-w-[200px] sm:min-w-[220px] transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              borderColor: 'rgba(0, 255, 156, 0.8)',
              scale: 1.1,
              boxShadow: '0 10px 30px rgba(0, 255, 156, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl sm:text-5xl">{contact.icon}</span>
            <span className="text-neon-green font-mono text-sm sm:text-base font-semibold">
              {contact.name}
            </span>
            <span className="text-gray-400 font-mono text-xs sm:text-sm text-center break-all">
              {contact.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;

