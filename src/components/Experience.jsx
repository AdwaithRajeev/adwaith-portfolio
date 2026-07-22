import { motion } from "framer-motion";

const experiences = [
  {
    company: "Infotact Solutions",
    role: "Full Stack Development Intern",
    duration: "2026 - Present",
    description:
      "Working on the FleetDash MERN Stack project using React, Node.js, Express.js, MongoDB and Git for team collaboration.",
  },
  {
    company: "Cognifyz Technologies",
    role: "Software Development Intern",
    duration: "2026",
    description:
      "Completed software development tasks and built web application features using HTML, CSS, JavaScript, and modern development practices while collaborating through Git and GitHub.",
  },
  {
    company: "Regional Technologies",
    role: "Web Developer Intern",
    duration: "2024",
    description:
      "Developed the Talent Tap college project using Python, HTML, CSS, JavaScript, MySQL and Android.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono">
        {"> experience"}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 shadow-lg shadow-neon-green/10"
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(0,255,156,0.5)",
            }}
          >
            <h3 className="text-xl font-bold text-neon-green font-mono">
              {exp.role}
            </h3>

            <p className="text-neon-green/80 font-mono mt-2">
              {exp.company} • {exp.duration}
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;