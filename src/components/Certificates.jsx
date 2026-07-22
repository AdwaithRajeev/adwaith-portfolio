import { motion } from "framer-motion";

const certificates = [
  {
    title: "Java MEAN Full Stack Development",
    issuer: "L&T EduTech",
    link: "https://drive.google.com/file/d/1pkgy0COaN8KPSoeLtQ9K8QuQ662eYpem/view?usp=drive_link",
  },
  {
    title: "Software Development Internship",
    issuer: "Cognifyz Technologies",
     link: "https://drive.google.com/file/d/1R2mm1lXxszPXH5LsfDuudwnHHjM8GYpw/view?pli=1",
  },
  {
    title: "Python Internship",
    issuer: "Regional Technologies",
  },
];

const Certificates = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-neon-green font-mono">
        {"> certificates"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 shadow-lg shadow-neon-green/10"
            whileHover={{
              scale: 1.03,
              borderColor: "rgba(0,255,156,0.5)",
            }}
          >
            <h3 className="text-xl font-bold text-neon-green font-mono">
              {certificate.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {certificate.issuer}
            </p>

            {certificate.link && (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 px-4 py-2 border border-neon-green rounded text-neon-green hover:bg-neon-green hover:text-black transition"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;