import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import "./Education.css";

const education = [
  {
    degree: "B.E Computer Science and Engineering",
    school: "IFET College of Engineering, Villupuram",
    period: "2020 — 2024",
    desc: "Graduated with 9.2 CGPA and specialized in frontend development, React UI design, and responsive web applications."
  },
  {
    degree: "Higher Secondary Education (Biology Stream)",
    school: "St. Joseph of Cluny Higher Secondary School",
    period: "2018 — 2020",
    desc: "Completed higher secondary in Biology stream with 71.1%, strengthening logical thinking and discipline."
  }
];

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            The foundation that shaped my technical thinking.
          </p>
        </motion.div>

        <div className="edu__list">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu__card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="edu__icon">
                <GraduationCap size={20} />
              </div>
              <div className="edu__content">
                <div className="edu__header">
                  <h3 className="edu__degree">{edu.degree}</h3>
                  <span className="edu__period">{edu.period}</span>
                </div>
                <p className="edu__school">{edu.school}</p>
                <p className="edu__desc">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;