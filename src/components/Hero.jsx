import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={14} />
            <span>Available for projects</span>
          </motion.div>

          {/* Title */}
          <h1 className="hero__title">
            Building Modern2
            <br />
            <span className="hero__title-gradient">React Interfaces</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            React developer focused on premium UI, reusable components,
            dashboards, and responsive web experiences.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
  <motion.a
    href="#contact"
    className="hero__btn hero__btn--primary"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
  >
    Hire Me
  </motion.a>

  <motion.a
    href="#projects"
    className="hero__btn hero__btn--outline"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
  >
    Projects
  </motion.a>

  <motion.a
    href="/RESUMEsample.pdf"
    download
    className="hero__btn hero__btn--resume"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
  >
    Resume
  </motion.a>
</div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">1+</span>
              <span className="hero__stat-label">Experience</span>
            </div>

            <div className="hero__stat-divider" />

            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />

          <div className="hero__code-card">
            <div className="hero__code-dots">
              <span />
              <span />
              <span />
            </div>

            <pre className="hero__code">
{`const developer = {
  name: "Mogana Priya",
  role: "React Developer",
  stack: ["React", "Laravel", "CSS"]
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;