import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Particle.js Config
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <>
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: theme === 'light' ? '#f0f0f0' : '#111' },
                    particles: {
                        color: { value: theme === 'light' ? '#000' : '#fff' },
                        links: { enable: true, color: '#888' },
                        move: { enable: true, speed: 2 },
                        number: { value: 50 },
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
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
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
            <section id="about">
                <h2>About Me</h2>
                <p>
                    Hello! My name is Noah, and I am a freshly graduated five-year software engineering student passionate
                    about software engineering and game development.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <h2>Projects</h2>
                <div className="project-card-container">
                    <motion.div
                        className="project-card"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Who Would Win</h3>
                        <p>An anime battle website leveraging the Anilist API.</p>
                        <a href="https://github.com/NoVaGamesAndStuff/WhoWouldWin" target="_blank">
                            View Project
                        </a>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Jeopardy</h3>
                        <p>A Jeopardy game developed using React and Redux.</p>
                        <a href="https://github.com/NoVaGamesAndStuff/Jeopardy" target="_blank">
                            View Project
                        </a>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Alchemight</h3>
                        <p>Unity roguelike project focusing on battle mechanics.</p>
                        <a href="https://github.com/mlitman530/Alchemight" target="_blank">
                            View Project
                        </a>
                    </motion.div>
                </div>
