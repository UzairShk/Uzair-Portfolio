import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const roles = [
    "Android Developer",
    "Data Science Student",
    "Full Stack Learner"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

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

  return (
    <>
      <div id="cursor-glow"></div>

      {/* NAV */}
      <nav className="nav">
        <h2>Uzair</h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Mohammed Uzair Shaikh
        </motion.h1>

        <h2 className="typing">{text}|</h2>

        <div>
          <FaGithub size={30} />
          <FaLinkedin size={30} />
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          M.Sc Computer Science student passionate about Android apps,
          backend systems, and data-driven solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>

        {[
          { name: "Java", level: 80 },
          { name: "Kotlin", level: 70 },
          { name: "Python", level: 75 },
          { name: "SQL", level: 85 }
        ].map((skill, i) => (
          <div key={i} className="skill">
            <p>{skill.name}</p>
            <div className="bar">
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level + "%" }}
              ></motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Accounting App</h3>
            <p>Firebase-based Android app for tracking expenses.</p>
          </div>

          <div className="card">
            <h3>Internship Portal</h3>
            <p>PHP & MySQL role-based system.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: shaikhuzair1080@gmail.com</p>
      </section>
    </>
  );
}