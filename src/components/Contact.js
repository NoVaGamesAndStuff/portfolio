// Contact.js
import React from "react";

const Contact = () => (
    <section id="contact" style={{ padding: "2rem 0", textAlign: "center" }}>
        <h2>Contact</h2>
        <p style={{ marginBottom: "1rem" }}>
            Feel free to reach out for collaborations or just to say hi!
        </p>
        <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:noahvaknin@example.com" style={{ color: "var(--accent-color)" }}>
                noahvaknin@example.com
            </a>
        </p>
        <p>
            <strong>LinkedIn:</strong>{" "}
            <a
                href="https://linkedin.com/in/noahvaknin"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-color)" }}
            >
                linkedin.com/in/noahvaknin
            </a>
        </p>
        <p>
            <strong>GitHub:</strong>{" "}
            <a
                href="https://github.com/NoVaGamesAndStuff"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-color)" }}
            >
                github.com/NoVaGamesAndStuff
            </a>
        </p>
    </section>
);

export default Contact;
