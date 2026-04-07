import React from "react";
import { Heart } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Moganapriya11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mogana-priya-j-027401234/" },

];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-icon">MP</span>
            <span>Mogana Priya J</span>
          </a>
          <p className="footer__tagline">
            Designing & developing digital experiences with precision.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Mogana Priya J. Built with{" "}
            <Heart size={13} className="footer__heart" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
