import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const projectsData = [
    {
      id: 1,
      title: "LeaveFlow – Employee Leave Management System",
      description:
        "A comprehensive Android application for managing employee leave requests. Features role-based login, leave request submission, manager approval system, and real-time tracking. Built with a user-friendly interface and secure backend integration.",
      tech: ["Kotlin", "Firebase Firestore", "Android Studio", "Material Design"],
      github: "https://github.com/UzairShk/LeaveFlow-Android",
      features: [
        "Role-based authentication (Employee/Manager/Admin)",
        "Leave request creation and tracking",
        "Real-time notifications",
        "Approval workflow",
        "Dark mode support",
        "Modern premium UI design",
        "Responsive layouts for all Android devices",
      ],
    },
    {
      id: 2,
      title: "SecureTouch Alarm – Anti Theft Security App",
      description:
        "A premium Android anti-theft security application that protects smartphones using motion detection, loud alarm alerts, secure PIN verification, foreground services, and notification-based controls. Designed with a modern Material 3 UI, dark mode support, and responsive layouts for all screen sizes.",
      tech: ["Kotlin", "Jetpack Compose", "Material 3", "Android Studio", "AdMob", "Foreground Services", "Motion Sensors", "DataStore"],
      github: "https://github.com/UzairShk/SecureTouch-Alarm",
      demo: "",
      features: [
        "Motion detection alarm system",
        "Secure PIN-based disarm protection",
        "Foreground background monitoring",
        "Notification controls for quick access",
        "Multiple alarm sounds with preview",
        "Dark mode support",
        "Modern premium UI design",
        "Responsive layouts for all Android devices",
      ],
    },
    {
      id: 3,
      title: "Internship Portal Website",
      description:
        "A full-stack web application connecting students with internship opportunities. Features role-based dashboards for students, companies, and administrators. Enables job posting, applications, and tracking in a single platform.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/UzairShk/Internship-Portal",
      features: [
        "Role-based secure login for Admin, Company, and Student",
        "Student registration, resume upload, and profile management",
        "Company dashboard for internship postings and application review",
        "Admin control panel for managing users and listings",
        "Dynamic and responsive UI design",
        "Application tracking and automated status updates"
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#38bdf8" }}>Key Features:</strong>
                </p>
                <ul style={{ color: "#cbd5e1", paddingLeft: "1.5rem", fontSize: "0.9rem" }}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: "0.3rem" }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.id === 2 ? (
                  <Link to="/securetouch-privacy-policy" title="Privacy Policy" style={{ flex: 1 }}>
                    <FiExternalLink style={{ marginRight: "5px" }} /> Privacy Policy
                  </Link>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    style={{ flex: 1 }}
                  >
                    <FiGithub style={{ marginRight: "5px" }} /> GitHub
                  </a>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Demo"
                    style={{ flex: 1 }}
                  >
                    <FiExternalLink style={{ marginRight: "5px" }} /> Demo
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
