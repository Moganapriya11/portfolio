import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import "./Contact.css";

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email", value: "moganajanaki@gmail.com", href: "mailto:moganajanaki@gmail.com" },
  { icon: <MapPin size={18} />, label: "Location", value: "Chennai, Tamil Nadu" },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 8072478481" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__info-item">
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact__info-value contact__info-link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact__info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="contact__cta-card">
              <p>Ready to start your next project?</p>
              <span>Let's create something amazing together.</span>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact__field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;