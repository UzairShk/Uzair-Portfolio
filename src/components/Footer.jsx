const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Designed & Built by{" "}
        <span style={{ color: "#38bdf8", fontWeight: "600" }}>
          Mohammed Uzair Shaikh
        </span>
      </p>
      <p>© {currentYear} All Rights Reserved</p>
      <p>
        Made with <span style={{ color: "#06b6d4" }}>❤️</span> using React + Vite +
        Framer Motion
      </p>
    </footer>
  );
};

export default Footer;
