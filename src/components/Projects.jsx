import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Chettinad Academy of Research and Education (CARE)",
    desc: "Developed React-based university modules: academic pages, milestone timeline, approvals. Integrated backend APIs and Git collaboration for live deployments.",
    tags: ["React", "API Integration", "Git", "Live Deployment"],
    color: "#8b5cf6",
    liveLink: "https://datalock.in/chettinad-react/"
  },
  {
    title: "Maharishi Vidya Mandir Senior Secondary School Website",
    desc: "Built complete frontend with React, HTML, CSS, Bootstrap. Home, infrastructure, curriculum, gallery, responsive layouts, API integration for dynamic content.",
    tags: ["React", "HTML", "CSS", "Bootstrap", "API"],
    color: "#06b6d4",
    liveLink: "https://maharishi.datalock.in/"
  },
  {
    title: "iCover Policy Dashboard Admin",
    desc: "Laravel Blade admin dashboard: claims & policy management, dynamic tables, slide modal panels, status workflows, CRUD forms, API integration for real-time updates.",
    tags: ["Laravel", "Blade", "CRUD", "REST API"],
    color: "#f59e0b",
    liveLink: "#"
  },
  {
    title: "GoRide Admin Dashboard & Public Website",
    desc: "Designed booking job card UI, assigned/unassigned tabs, trip details, driver info, pricing. Redesigned homepage hero & responsive booking sections.",
    tags: ["React", "Dashboard", "UI Design", "Responsive"],
    color: "#22c55e",
    liveLink: "#"
  },
  {
    title: "Luckhand MDF Email Template",
    desc: "Developed responsive HTML email templates for MDF communication with cross-client compatibility.",
    tags: ["HTML", "Email Templates", "Responsive", "Cross-Client"],
    color: "#ec4899",
    liveLink: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of work that showcases my skills and creative approach.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="projects__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="projects__card-glow"
                style={{ background: `${project.color}15` }}
              />
              <div
                className="projects__card-accent"
                style={{ background: project.color }}
              />
              <div className="projects__card-content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.desc}</p>

                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;