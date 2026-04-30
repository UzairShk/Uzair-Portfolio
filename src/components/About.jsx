import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      label: "Education",
      text: "M.Sc Computer Science",
    },
    {
      label: "Experience",
      text: "Android, Web & Database Development",
    },
    {
      label: "Focus",
      text: "Building scalable, real-world solutions",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a passionate M.Sc Computer Science student with a strong foundation
              in Android development, web technologies, and database systems. I thrive
              on solving complex problems and building applications that make a real
              impact.
            </p>
            <p>
              My journey in tech has equipped me with diverse skills spanning multiple
              platforms and technologies. I'm dedicated to writing clean, maintainable
              code and continuously learning new technologies to stay at the forefront
              of development.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div className="about-highlights" variants={containerVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                variants={itemVariants}
              >
                <strong>{highlight.label}:</strong>
                <span>{highlight.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
