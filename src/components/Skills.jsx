import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skillsData = {
    Languages: [
      "C",
      "C++",
      "Java",
      "Kotlin",
      "Python",
      "JavaScript",
      "PHP",
      "SQL",
    ],
    Tools: ["Android Studio", "Firebase", "Git", "Postman", "VS Code"],
    Databases: ["MySQL", "Firebase Realtime Database", "Firestore"],
    Frontend: ["React", "HTML5", "CSS3", "Responsive Design"],
    Backend: ["Node.js", "PHP", "REST APIs"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(skillsData).map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={cardVariants}
            >
              <h3>{category[0]}</h3>
              <div>
                {category[1].map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    className="skill-badge"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
