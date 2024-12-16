// Navigation.js
import React from "react";
import { motion } from "framer-motion";

const Navigation = () => (
    <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </motion.nav>
);

export default Navigation;
