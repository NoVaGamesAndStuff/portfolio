import React from "react";

const Contact = () => (
  <section id="contact" style={{ padding: "2rem 0", textAlign: "center" }}>
    <h2>Contact</h2>
    <p>Feel free to reach out for collaborations or just to say hi!</p>
    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:noahvaknin@example.com" style={{ color: "blue" }}>
        noahvaknin@example.com
      </a>
    </p>
    <p>
      <strong>LinkedIn:</strong>{" "}
      <a
        href="https://linkedin.com/in/noahvaknin"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue" }}
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
        style={{ color: "blue" }}
      >
        github.com/NoVaGamesAndStuff
      </a>
    </p>
  </section>
);

export default Contact;
