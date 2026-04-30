import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using Formspree API
      const response = await fetch("https://formspree.io/f/mqenkzeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200 || response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(""), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactLinks = [
    {
      icon: <FiMail size={24} />,
      label: "Email",
      value: "shaikhuzair1080@gmail.com",
      href: "mailto:shaikhuzair1080@gmail.com",
    },
    {
      icon: <FiGithub size={24} />,
      label: "GitHub",
      value: "@UzairShk",
      href: "https://github.com/UzairShk",
    },
    {
      icon: <FiLinkedin size={24} />,
      label: "LinkedIn",
      value: "Uzair Shaikh",
      href: "https://www.linkedin.com/in/uzairshk/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p className="contact-description" variants={itemVariants}>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or want to collaborate, feel free to reach
            out. I'll do my best to respond quickly!
          </motion.p>

          <motion.div className="contact-links" variants={containerVariants}>
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-label">{link.label}</div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && (
                <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && (
                <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: "#10b981", marginTop: "1rem", textAlign: "center" }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: "#ef4444", marginTop: "1rem", textAlign: "center" }}
              >
                ✗ Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
