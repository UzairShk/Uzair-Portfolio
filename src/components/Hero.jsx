import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const roles = [
    "Android Developer",
    "Data Science Student",
    "Full Stack Learner",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(20);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = text === currentRole;

    const handleTyping = () => {
        if (!isDeleting && !isComplete) {
    setText(currentRole.slice(0, text.length + 1));
    setSpeed(50); // typing speed
    } else if (isDeleting && text.length > 0) {
    setText(currentRole.slice(0, text.length - 1));
    setSpeed(30); // 🔥 faster delete
    } else if (isComplete && !isDeleting) {
    setSpeed(1000); // pause before delete (reduced)
    setIsDeleting(true);
    } else if (isDeleting && text.length === 0) {
    setIsDeleting(false);
    setRoleIndex((prev) => (prev + 1) % roles.length);
    setSpeed(100); // next word delay
    }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, roleIndex, isDeleting, speed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Create a link to download resume - works for GitHub Pages
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}UzairCV.pdf`; // Correct path for GitHub Pages with repo name
    link.download = "Mohammed_Uzair_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      <div className="cursor-glow" id="cursor-glow"></div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          👋 Welcome to my portfolio
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Mohammed Uzair Shaikh
        </motion.h1>

        <motion.div className="hero-title" variants={itemVariants}>
          <span className="typing-text">{text}</span>
          <span style={{ animation: "blink 0.7s infinite" }}>|</span>
        </motion.div>

        <motion.p className="hero-tagline" variants={itemVariants}>
          Building real-world apps and data-driven solutions. Turning ideas into
          scalable, efficient applications with a passion for clean code and
          problem-solving.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn btn-primary" onClick={handleScroll}>
            <FiArrowRight style={{ marginRight: "8px" }} />
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={handleDownloadResume}>
            <FiDownload style={{ marginRight: "8px" }} />
            Download Resume
          </button>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
