import React from "react";
import { motion } from "framer-motion";
import { User, Palette, Code2, Layers } from "lucide-react";
import "./About.css";

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: "Frontend Dev",
    desc: "React, JavaScript, responsive UIs"
  },
  {
    icon: <Palette size={20} />,
    title: "UI Design",
    desc: "Modern and pixel-perfect interfaces"
  },
  {
    icon: <Layers size={20} />,
    title: "Full-Stack",
    desc: "Laravel, APIs, admin dashboards"
  },
  {
    icon: <User size={20} />,
    title: "UX Focus",
    desc: "Clean code with better user flow"
  }
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Building elegant digital experiences.
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm <strong>Mogana Priya J</strong>, a React developer focused on
              creating responsive websites, reusable UI components, and modern
              Laravel admin dashboards.
            </p>

            <p>
              I enjoy turning ideas into clean, user-friendly digital
              experiences that work beautifully across every device.
            </p>
          </motion.div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="about__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="about__card-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;