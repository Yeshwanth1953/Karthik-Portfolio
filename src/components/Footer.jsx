import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3 className="footer-logo">Allu Karthik.Anaylst</h3>
          <p className="footer-desc">
            I design and build web experiences with clarity,
            structure, and long-term thinking.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/Karthikallu1811" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/karthiknaiduallu" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:allukarthik1811@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Karthik. All rights reserved.</p>          
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>

          <p>
            <FaEnvelope />
            allukarthik1811@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Visakhapatnam, India
          </p>

          <p>
            <FaPhone />
            <a href="tel:+919848861475">+91 98488 61475</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
