import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiUsers, FiCode } from "react-icons/fi";

const GitHub = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    {
      icon: <FiCode size={32} />,
      value: "20+",
      label: "Repositories",
    },
    {
      icon: <FiUsers size={32} />,
      value: "100+",
      label: "Followers",
    },
    {
      icon: <FiGithub size={32} />,
      value: "500+",
      label: "Contributions (This Year)",
    },
  ];

  return (
    <section className="github-section" id="github">
      <div className="container">
        <h2 className="section-title">GitHub & Open Source</h2>

        <motion.div
          ref={ref}
          className="github-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="github-stats" variables={containerVariants}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="github-info" variants={itemVariants}>
            <p>
              I'm passionate about contributing to open-source projects and
              building tools that help developers. You'll find my work on GitHub
              ranging from Android apps to full-stack web applications.
            </p>
            <p>
              I believe in writing clean, well-documented code and actively
              participate in the developer community. I'm always interested in
              collaborating on interesting projects and learning from others.
            </p>

            <a
              href="https://github.com/UzairShk"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <FiGithub style={{ marginRight: "8px" }} />
              Visit My GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
