import React, { useState, useCallback, useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import "./App.css";
import projects from "./projects";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Particles Init
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`app ${theme}`}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: theme === "light" ? "#f0f0f0" : "#111" },
          particles: {
            color: { value: theme === "light" ? "#000" : "#fff" },
            links: { enable: true, color: theme === "light" ? "#888" : "#fff" },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            size: { value: 3 },
          },
        }}
      />

      {/* Theme Toggle */}
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </motion.button>

      {/* Header */}
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Noah Vaknin
        </motion.h1>
        <p>Software Engineer & (Occasionally) Game Dev</p>
      </header>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </motion.nav>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hello! My name is Noah, and I am a freshly graduated five-year software
          engineering student passionate about software engineering and game
          development.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out for work inquiries or just to say hi! <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:noah.vaknin27@gmail.com">noah.vaknin27@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default App;
