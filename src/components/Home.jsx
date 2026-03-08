import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/home.css";

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const skills = [
  {
    category: "Languages",
    icon: "⌨️",
    desc: "Core programming and query languages for data analysis and web development.",
    tags: ["Python", "SQL", "C", "Java", "SQLite"],
  },
  {
    category: "Designing",
    icon: "🎨",
    desc: "Creating intuitive user experiences and structured visual systems.",
    tags: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Data Visualization"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    desc: "Analytical and productivity tools for building insights and dashboards.",
    tags: ["Power BI", "Excel", "Tableau", "Git", "VS Code", "Canva", "Google Analytics", "Kittle"],
  },
];

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ===================== HERO ===================== */}
      <section className="home-hero">
        <motion.div
          className="hero-left"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p className="hero-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1 className="hero-title" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
            Hello, this is <br />
            <span>Allu Karthik Naidu</span>
          </motion.h1>

          <motion.p className="hero-desc" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            A designer and data analyst who focuses on turning complex data into
            clear insights and meaningful visual experiences.
          </motion.p>

          <motion.div className="hero-actions" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }}>
            <a href="/Certificates/karthik_resume.pdf" className="btn primary" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            <a href="/projects" className="btn secondary">
              See My Work →
            </a>
          </motion.div>
        </motion.div>

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

      {/* ===================== SKILLS ===================== */}
      <section className="skills-section">
        <RevealSection>
          <div className="skills-header">
            <p className="skills-eyebrow">WHAT I WORK WITH</p>
            <h2 className="skills-title">
              Skills & <span>Capabilities</span>
            </h2>
            <p className="skills-subtitle">
              Click on any card to explore the tools and technologies in that domain.
            </p>
          </div>
        </RevealSection>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <RevealSection key={i} delay={i * 0.15}>
              <motion.div
                className="skill-card"
                onClick={() => setActiveSkill(skill)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="skill-card__glow" />
                <span className="skill-card__hint">click to explore →</span>
                <div className="skill-card__icon">{skill.icon}</div>
                <h3 className="skill-card__title">{skill.category}</h3>
                <p className="skill-card__desc">{skill.desc}</p>
                <div className="skill-card__badge">{skill.tags.length} skills</div>
                <div className="skill-card__bar" />
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ===================== SKILL POPUP ===================== */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            className="skill-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSkill(null)}
          >
            <motion.div
              className="skill-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="skill-modal__close" onClick={() => setActiveSkill(null)}>✕</button>
              <div className="skill-modal__glow" />
              <div className="skill-modal__header">
                <span className="skill-modal__icon">{activeSkill.icon}</span>
                <h3 className="skill-modal__title">{activeSkill.category}</h3>
              </div>
              <p className="skill-modal__desc">{activeSkill.desc}</p>
              <div className="skill-modal__divider" />
              <div className="skill-modal__tags">
                {activeSkill.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-modal__tag"
                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: idx * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}