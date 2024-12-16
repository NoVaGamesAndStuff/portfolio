import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import './index.css';

const App = () => {
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <>
            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
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
                    Hello! My name is Noah, and I am a freshly graduated five-year software engineering student passionate about software engineering and game development. I love putting programming to use in satisfying my creative urges and creating solutions to problems I face in my day-to-day life.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <h2>Projects</h2>

                {/* Project 1: Who Would Win */}
                <div className="project">
                    <h3>Who Would Win</h3>
                    <p>
                        An anime battle website leveraging the Anilist API and React in conjunction with Axios to help answer the question of "Who Would Win" -- matching up characters from a variety of shows and allowing you to pick the winner. (Still in development)
                    </p>
                    <a href="https://github.com/NoVaGamesAndStuff/WhoWouldWin" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>

                {/* Project 2: Alchemight */}
                <div className="project">
                    <h3>Alchemight</h3>
                    <p>
                        A proof of concept for a later project, Alchemight was comprised of a three-person Unity team inspired by roguelike mechanics set to create a game together. I was responsible for the brunt of the actual coding, and using C# crafted battle mechanics centered around various potion effects, from fire and ice potions to damage and slow enemies, to speed and jump potions to allow access to different parts of the map- leading the way to loot boxes which could provide exclusive potions with crazy effects. I was also responsible for level design, spawn mechanics, and balancing.
                    </p>
                    <img src="AlchemightHomeScreen.png" alt="Alchemight Home Screen" />
                    <img src="AlchemightBattle.png" alt="Alchemight Battle Screen" />
                    <a href="https://github.com/mlitman530/Alchemight" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>

                {/* Project 3: Jeopardy Website */}
                <div className="project">
                    <h3>Jeopardy Website</h3>
                    <p>
                        Homebrewed solution to a friend group with a thirst for locally hosted Jeopardy games - Two-person project utilizing Express.js and Socket.io for player connectivity and keeping track of buzzer order.
                    </p>
                    <a href="https://github.com/NoVaGamesAndStuff/Jeopardy" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact">
                <h2>Contact</h2>
                <p>
                    Feel free to reach out to me at <a href="mailto:noah.vaknin27@gmail.com">noah.vaknin27@gmail.com</a> or via{' '}
                    <a href="http://www.linkedin.com/in/noah-vaknin" target="_blank" rel="noopener noreferrer">
                        LinkedIn!
                    </a>
                </p>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Noah Vaknin. All rights reserved.</p>
            </footer>
        </>
    );
};

// Use ReactDOM.createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
