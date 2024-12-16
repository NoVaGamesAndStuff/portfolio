import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            {/* Theme Toggle */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>

            {/* Header */}
            <header>
                <h1>Noah Vaknin</h1>
                <p>Software Engineer & (Occasionally) Game Dev</p>
            </header>

            {/* Navigation */}
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

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

                <div className="project">
                    <h3>Who Would Win</h3>
                    <p>
                        An anime battle website leveraging the Anilist API and React in conjunction with Axios to match
                        up characters.
                    </p>
                    <a href="https://github.com/NoVaGamesAndStuff/WhoWouldWin" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>

                <div className="project">
                    <h3>Jeopardy</h3>
                    <p>
                        A Jeopardy game developed using React and Redux for state management. Users can play custom
                        Jeopardy games with various categories.
                    </p>
                    <a href="https://github.com/NoVaGamesAndStuff/Jeopardy" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>

                <div className="project">
                    <h3>Alchemight</h3>
                    <p>Unity roguelike project focusing on battle mechanics, potion effects, and level design.</p>
                    <img src="AlchemightHomeScreen.png" alt="Alchemight Home" />
                    <img src="AlchemightBattle.png" alt="Alchemight Battle" />
                    <a href="https://github.com/mlitman530/Alchemight" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <h2>Contact</h2>
                <p>
                    Reach me via <a href="mailto:noah.vaknin27@gmail.com">Email</a> or{' '}
                    <a href="http://www.linkedin.com/in/noah-vaknin" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>.
                </p>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Noah Vaknin. All Rights Reserved.</p>
            </footer>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
