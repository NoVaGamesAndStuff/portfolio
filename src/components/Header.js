// Header.js
import React from "react";
import { motion } from "framer-motion";

const Header = () => (
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
);

export default Header;
