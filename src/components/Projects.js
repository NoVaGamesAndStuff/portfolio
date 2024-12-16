// Projects.js
import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
    <section id="projects" style={{ padding: "2rem 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Projects</h2>
        <div className="project-card-container">
            <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h3>Who Would Win</h3>
                <p>An anime battle website leveraging the Anilist API.</p>
                <a href="https://github.com/NoVaGamesAndStuff/WhoWouldWin" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </motion.div>

            <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
            >
                <h3>Jeopardy</h3>
                <p>A Jeopardy game developed using Express and Socket.IO .</p>
                <a href="https://github.com/NoVaGamesAndStuff/Jeopardy" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </motion.div>

            <motion.div
                className="project-card"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h3>Alchemight</h3>
                <p>Unity roguelike project focusing on potion battle mechanics.</p>
                <a href="https://github.com/mlitman530/Alchemight" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </motion.div>
        </div>
    </section>
);

export default Projects;
