import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const roles = [
    "Android Developer",
    "Data Science Student",
    "Full Stack Learner"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("home");

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  // cursor glow
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }, []);

  // scroll tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        if (scrollY >= top - 100) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    });
  }, []);

  return (
    <>
      <div id="cursor-glow"></div>

      {/* NAVBAR */}
      <nav className="nav">
        <h2>Uzair</h2>
        <div>
          <a className={active === "home" ? "active" : ""} href="#home">Home</a>
          <a className={active === "projects" ? "active" : ""} href="#projects">Projects</a>
          <a className={active === "contact" ? "active" : ""} href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Mohammed Uzair Shaikh
        </motion.h1>

        <h2 className="typing">{text}|</h2>

        <p className="subtitle">
          Building Android apps, backend systems & data-driven solutions
        </p>
      </section>

      {/* ABOUT */}
      <section>
        <motion.h2 whileInView={{ opacity: 1 }}>About Me</motion.h2>
        <p>
          I am an M.Sc Computer Science student focused on Android development,
          backend systems, and databases. I enjoy building real-world applications
          with clean UI and scalable architecture.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>

        {[
          { name: "Java", level: 80 },
          { name: "Kotlin", level: 75 },
          { name: "Python", level: 75 },
          { name: "SQL", level: 85 },
          { name: "Firebase", level: 80 }
        ].map((skill, i) => (
          <div key={i} className="skill">
            <span>{skill.name}</span>
            <div className="bar">
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level + "%" }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>LeaveFlow App</h3>
            <p>
              Android leave management system with role-based login,
              approvals, and Firebase Firestore integration.
            </p>
          </div>

          <div className="card">
            <h3>Accounting App</h3>
            <p>
              Expense tracker using Firebase Realtime DB with real-time sync.
            </p>
          </div>

          <div className="card">
            <h3>Internship Portal</h3>
            <p>
              PHP & MySQL system with role-based dashboards for students
              and companies.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: shaikhuzair1080@gmail.com</p>
        <p>GitHub: github.com/UzairShk</p>
      </section>
    </>
  );
}