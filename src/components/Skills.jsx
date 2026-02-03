import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import {
  Braces,
  Database,
  FileCode2,
  Flame,
  Layers3,
  Server,
  SquareTerminal,
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillGroups = useMemo(
    () => [
      {
        key: 'frontend',
        title: '> frontend_skills',
        subtitle: 'UI + client-side development',
        railIcon: Layers3,
        items: [
          {
            name: 'HTML',
            icon: 'https://cdn.simpleicons.org/html5/E34F26',
            color: '#E34F26',
            description: 'Semantic markup',
          },
          {
            name: 'CSS',
            icon: 'https://cdn.simpleicons.org/css3/1572B6',
            color: '#1572B6',
            description: 'Responsive UI styling',
          },
          {
            name: 'JavaScript',
            icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
            color: '#F7DF1E',
            description: 'Web programming',
          },
          {
            name: 'React',
            icon: 'https://cdn.simpleicons.org/react/61DAFB',
            color: '#61DAFB',
            description: 'Component-driven UI',
          },
        ],
      },
      {
        key: 'backend',
        title: '> backend_skills',
        subtitle: 'APIs + databases + server-side',
        railIcon: Server,
        items: [
          {
            name: 'Node.js',
            icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
            color: '#339933',
            description: 'JS runtime',
          },
          {
            name: 'Express',
            icon: 'https://cdn.simpleicons.org/express/ffffff',
            color: '#ffffff',
            description: 'REST APIs',
          },
          {
            name: 'Python',
            icon: 'https://cdn.simpleicons.org/python/3776AB',
            color: '#3776AB',
            description: 'Backend scripting',
          },
          {
            name: 'Flask',
            icon: 'https://cdn.simpleicons.org/flask/ffffff',
            color: '#ffffff',
            description: 'Python microframework',
          },
          {
            name: 'MongoDB',
            icon: 'https://cdn.simpleicons.org/mongodb/00ED64',
            color: '#00ED64',
            description: 'NoSQL database',
          },
          {
            name: 'SQL',
            icon: 'https://cdn.simpleicons.org/mysql/4479A1',
            color: '#4479A1',
            description: 'Relational queries',
          },
        ],
      },
    ],
    [],
  );

  const allSkills = useMemo(
    () => skillGroups.flatMap((g) => g.items),
    [skillGroups],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const gridCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  function Rail({
    title,
    subtitle,
    items,
    railIcon: RailIcon,
    direction = 'left',
  }) {
    const duplicated = [...items, ...items];
    const cardW = 200;
    const gapW = 32;
    const travel = (cardW + gapW) * items.length;
    const from = 0;
    const to = direction === 'left' ? -travel : travel;

    return (
      <div className="relative">


        {/* Top rail */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />

        <div className="relative py-8 overflow-hidden">
          {/* moving cars */}
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{ x: [from, to] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 36,
                ease: 'linear',
              },
            }}
            style={{ width: 'max-content' }}
          >
            {duplicated.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 w-[180px] sm:w-[200px] flex items-center justify-center group"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.45, delay: Math.min(index, 10) * 0.06 }}
              >
                <motion.div
                  className="relative flex items-center justify-center"
                  whileHover={{
                    scale: 1.3,
                    zIndex: 10,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    style={{ filter: `drop-shadow(0 0 10px ${skill.color}70)` }}
                    whileHover={{
                      rotate: 360,
                      filter: `drop-shadow(0 0 20px ${skill.color}) brightness(1.3)`,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom rail */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />

        {/* terminal endpoints */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <motion.section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono text-center sm:text-left"
        variants={titleVariants}
      >
        {'> skills'}
      </motion.h2>

      {/* Grouped static list (recruiter-friendly) */}
      <motion.div className="mb-14" variants={containerVariants}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => {
            const Icon = group.railIcon;
            return (
              <motion.div
                key={group.key}
                className="bg-dark-surface border border-neon-green/25 rounded-lg p-5 sm:p-6 shadow-lg shadow-neon-green/10"
                variants={gridCardVariants}
                whileHover={{ borderColor: 'rgba(0, 255, 156, 0.5)' }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-neon-green font-mono font-semibold text-base sm:text-lg">
                      {group.title}
                    </div>
                    <div className="text-gray-400 font-mono text-xs sm:text-sm mt-1">
                      {group.subtitle}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-neon-green/80">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-md border border-neon-green/20 bg-dark-bg/40"
                      whileHover={{
                        borderColor: 'rgba(0, 255, 156, 0.75)',
                        boxShadow: `0 0 20px ${skill.color}22`,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        style={{ filter: `drop-shadow(0 0 6px ${skill.color}70)` }}
                      />
                      <span className="text-gray-200 font-mono text-xs sm:text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Rails (animated showcase) */}
      <div className="space-y-12">
        <Rail
          title="> frontend_rail"
          subtitle="Smooth, subtle motion — recruiter-friendly"
          items={skillGroups[0].items}
          railIcon={SquareTerminal}
          direction="left"
        />
        <Rail
          title="> backend_rail"
          subtitle="APIs, DBs, server-side stack"
          items={skillGroups[1].items}
          railIcon={Database}
          direction="right"
        />
      </div>
    </motion.section>
  );
};

export default Skills;
