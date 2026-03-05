import { motion } from "framer-motion";
import "../styles/home.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <section className="home-hero">

        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Hello, this is <br />
            <span>Allu Karthik Naidu</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            A designer and data analyst who focuses on turning complex data into
            clear insights and meaningful visual experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href="/Certificates/karthik_resume.pdf"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

            <a href="/projects" className="btn secondary">
              See My work →
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-right"
          initial={{ x: "120%", opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="image-box">
            <img src="/images/me.jpeg" alt="Karthik" className="hero-img" />
          </div>
        </motion.div>

      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="skills-header">
          <h2 className="section-title">
            Skills & <span>Capabilities</span>
          </h2>
          <p className="skills-subtitle">
            A structured overview of the tools and technologies I use to transform ideas into impactful digital solutions.
          </p>
        </div>

        <div className="skills-block">

          <div className="skill-row">
            <div className="skill-info">
              <h3>Languages</h3>
              <p>
                Core programming and query languages I use for data analysis and web development.
              </p>
            </div>
            <div className="skill-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>C</span>
              <span>Java</span>
              <span>SQLite</span>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-info">
              <h3>Designing</h3>
              <p>
                Creating intuitive user experiences and structured visual systems.
              </p>
            </div>
            <div className="skill-tags">
              <span>Figma</span>
              <span>UI/UX</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>Data Visualization</span>
            </div>
          </div>

          <div className="skill-row">
            <div className="skill-info">
              <h3>Tools</h3>
              <p>
                Analytical and productivity tools used for building insights and dashboards.
              </p>
            </div>
            <div className="skill-tags">
              <span>Power BI</span>
              <span>Excel</span>
              <span>Tableau</span>
              <span>Git</span>
              <span>VS Code</span>
              <span>Canva</span>
              <span>Google Analytics</span>
              <span>Kittle</span>
            </div>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="achievements-section">

        <div className="achievements-header">
          <h2 className="section-title">
            Professional <span>Highlights</span>
          </h2>
          <p className="achievements-subtitle">
            Key milestones that reflect my growth in design, analytics, and competitive problem-solving.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <h3>Core Designer — GAAC Club</h3>
            <p>Serving as a designer in the core team, contributing to branding and digital assets.</p>
          </div>

          <div className="timeline-item">
            <h3>Data Analytics & Visualization Intern</h3>
            <p>Worked on four real-world analytics projects and received certification and recommendation letter.</p>
          </div>

          <div className="timeline-item">
            <h3>Designer — SHORE 2026 Fest Committee</h3>
            <p>Handled event creatives and digital promotions.</p>
          </div>

          <div className="timeline-item">
            <h3>10+ Data Analytics & Visualization Projects</h3>
            <p>Built dashboards and analytical solutions focused on actionable insights.</p>
          </div>

          <div className="timeline-item">
            <h3>Top 10 — Space Tech Summit 2026</h3>
            <p>Secured Top 10 position in poster presentation competition.</p>
          </div>

          <div className="timeline-item">
            <h3>Certified — IIT Kharagpur Hackathon</h3>
            <p>National-level analytics competition certification.</p>
          </div>

          <div className="timeline-item">
            <h3>Certified — BITS Pilani Hackathon</h3>
            <p>Participated in competitive data-driven solution building.</p>
          </div>

          <div className="timeline-item">
            <h3>Certified — TATA Data Analytics Simulation</h3>
            <p>Completed real-world data analysis and reporting simulation.</p>
          </div>

          <div className="timeline-item">
            <h3>Certified — Accenture Analytics Simulation</h3>
            <p>Completed structured visualization and client-focused analytics simulation.</p>
          </div>

        </div>

      </section>
    </motion.div>
  );
}
