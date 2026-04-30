import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub } from "react-icons/fi";

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
          <motion.div className="github-stats" variants={containerVariants}>
            {/* GitHub Readme Stats - Shows automatic stats from GitHub */}
            <motion.div variants={itemVariants}>
              <img
                src="https://github-readme-stats.vercel.app/api?username=UzairShk&show_icons=true&theme=dark&hide_border=true&bg_color=0f172a&text_color=cbd5e1&icon_color=38bdf8"
                alt="GitHub Stats"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </motion.div>

            {/* Contribution Streak */}
            <motion.div variants={itemVariants}>
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=UzairShk&theme=dark&hide_border=true&background=0f172a&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideLabels=cbd5e1&dates=cbd5e1"
                alt="GitHub Streak"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </motion.div>
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
