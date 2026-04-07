import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Junior Designer",
    company: "Sri Hema Infotech",
    location: "Perambur",
    period: "07 Feb 2025 — Present",
    points: [
      "Designing and developing responsive UI pages using React and Bootstrap.",
      "Converting static HTML and Bootstrap layouts into reusable React components.",
      "Creating Laravel admin pages and dashboard screens with frontend customization.",
      "Integrating APIs shared by backend developers into forms, tables, filters, and status modules.",
      "Managing code updates and version control using Git (clone, push, pull, branch workflows).",
    ],
    tags: ["React", "Bootstrap", "Laravel", "REST APIs", "Git"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Where I've worked and what I've built along the way.
          </p>
        </motion.div>

        <div className="exp__timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp__card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="exp__card-header">
                <div className="exp__card-icon">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="exp__role">{exp.role}</h3>
                  <p className="exp__company">{exp.company} • {exp.location}</p>
                </div>
                <span className="exp__period">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>

              <ul className="exp__points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              <div className="exp__tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp__tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;