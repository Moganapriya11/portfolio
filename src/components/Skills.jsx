import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
      "Forms & Tables"
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      "PHP",
      "Laravel",
      "REST API",
      "Git",
      "GitHub",
      "Postman",
      "VS Code"
    ]
  },
  {
    title: "AI Tools",
    skills: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Canva AI"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skills__category"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
            >
              <h3 className="skills__cat-title">{cat.title}</h3>

              <div className="skills__chips">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skills__chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;