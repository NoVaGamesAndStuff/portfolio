// src/App.js
import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadAbsorbersPlugin } from "@tsparticles/plugin-absorbers";
import "./App.css";

const App = () => {
  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine);
    await loadEmittersPlugin(engine);
    await loadAbsorbersPlugin(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  return (
    <div>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "#f9f9f9" } },
          particles: {
            number: { value: 80 },
            color: { value: "#3498db" },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#3498db", distance: 150 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", zIndex: -1 }}
      />

      {/* Navbar */}
      <nav className="navbar">
        <h1>Noah Vaknin</h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Hello! My name is Noah, and I am a freshly graduated five-year
            software engineering student passionate about software engineering
            and game development.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <h3>Who Would Win</h3>
              <p>An anime battle website leveraging the AniList API.</p>
              <a href="#!">View Project</a>
            </div>
            <div className="project-card">
              <h3>Jeopardy</h3>
              <p>A Jeopardy game developed using Express and Socket.IO.</p>
              <a href="#!">View Project</a>
            </div>
            <div className="project-card">
              <h3>Alchemight</h3>
              <p>Unity roguelike project focusing on potion battle mechanics.</p>
              <a href="#!">View Project</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Feel free to reach out for collaborations or just to say hi!
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:noahvaknin@example.com">noahvaknin@example.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/noahvaknin"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/noahvaknin
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/NoVaGamesAndStuff"
              target="_blank"
              rel="noreferrer"
            >
              github.com/NoVaGamesAndStuff
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
