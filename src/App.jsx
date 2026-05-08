import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SecureTouchPrivacy from "./pages/SecureTouchPrivacy";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isPrivacyRoute = location.pathname === "/securetouch-privacy-policy";

  // Cursor glow effect
  useEffect(() => {
    if (isPrivacyRoute) return;

    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isPrivacyRoute]);

  // Scroll animations
  useEffect(() => {
    if (isPrivacyRoute) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".project-card, .skill-category, .skill-badge");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isPrivacyRoute]);

  return (
    <>
      {!isPrivacyRoute ? <div id="cursor-glow"></div> : null}
      {!isPrivacyRoute ? <Navbar activeSection={activeSection} setActiveSection={setActiveSection} /> : null}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <GitHub />
              <Contact />
            </>
          }
        />

        <Route path="/securetouch-privacy-policy" element={<SecureTouchPrivacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isPrivacyRoute ? <Footer /> : null}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}