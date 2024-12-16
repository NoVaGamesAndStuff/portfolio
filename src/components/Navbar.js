import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <h1>Noah Vaknin</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
