import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

const Projects = () => (
  <section id="projects" style={{ padding: "2rem 0" }}>
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Project Cards */}
      <motion.div
        className="project-card"
        variants={cardVariants}
        whileHover="hover"
        style={styles.card}
      >
        <h3>Who Would Win</h3>
        <p>An anime battle website leveraging the Anilist API.</p>
        <a
          href="https://github.com/NoVaGamesAndStuff/WhoWouldWin"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View Project
        </a>
      </motion.div>

      <motion.div
        className="project-card"
        variants={cardVariants}
        whileHover="hover"
        style={styles.card}
      >
        <h3>Jeopardy</h3>
        <p>A Jeopardy game developed using Express and Socket.IO.</p>
        <a
          href="https://github.com/NoVaGamesAndStuff/Jeopardy"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View Project
        </a>
      </motion.div>

      <motion.div
        className="project-card"
        variants={cardVariants}
        whileHover="hover"
        style={styles.card}
      >
        <h3>Alchemight</h3>
        <p>Unity roguelike project focusing on potion battle mechanics.</p>
        <a
          href="https://github.com/mlitman530/Alchemight"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View Project
        </a>
      </motion.div>
    </div>
  </section>
);

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "280px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

export default Projects;
