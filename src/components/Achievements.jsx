import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/achievements.css";
import Certificates from "./Certificates";

function RevealItem({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const achievements = [
  {
    icon: "🎨",
    tag: "Leadership",
    title: "Core Designer — GAAC Club",
    desc: "Serving as a designer in the core team of GITAM Aero Astro Club, contributing to event branding, digital assets, and visual communication across all club activities.",
    year: "2025",
  },
  {
    icon: "📊",
    tag: "Experience",
    title: "Data Analytics & Visualization Intern",
    desc: "Worked on four real-world analytics projects during internship. Delivered dashboards and data reports, and received both a certification and a recommendation letter.",
    year: "2024",
  },
  {
    icon: "🎭",
    tag: "Leadership",
    title: "Designer — SHORE 2026 Fest Committee",
    desc: "Handled all event creatives and digital promotions for the SHORE 2026 cultural fest at GITAM, managing visual identity across posters, banners, and social media.",
    year: "2026",
  },
  {
    icon: "📈",
    tag: "Projects",
    title: "10+ Data Analytics & Visualization Projects",
    desc: "Built over ten dashboards and analytical solutions using Power BI, Python, and SQL. Each project focused on real datasets and delivering actionable business insights.",
    year: "2024–25",
  },
  {
    icon: "🌌",
    tag: "Competition",
    title: "Top 10 — Space Tech Summit 2026",
    desc: "Secured a Top 10 position in the poster presentation competition at Space Tech Summit 2026, competing against participants from across the country.",
    year: "2026",
  },
  {
    icon: "🏆",
    tag: "Hackathon",
    title: "Certified — IIT Kharagpur Hackathon",
    desc: "Participated and received certification in a national-level analytics competition hosted by IIT Kharagpur, competing with teams from top institutions.",
    year: "2024",
  },
  {
    icon: "🚀",
    tag: "Hackathon",
    title: "Certified — BITS Pilani Hackathon",
    desc: "Competed in a data-driven problem-solving hackathon at BITS Pilani, building analytical solutions under timed competitive conditions.",
    year: "2024",
  },
  {
    icon: "💼",
    tag: "Simulation",
    title: "Certified — TATA Data Analytics Simulation",
    desc: "Completed TATA Group's real-world data analysis and reporting simulation, applying analytics skills to corporate business scenarios and decision-making.",
    year: "2024",
  },
  {
    icon: "💡",
    tag: "Simulation",
    title: "Certified — Accenture Analytics Simulation",
    desc: "Completed Accenture's structured data visualization and client-focused analytics simulation, presenting findings in a professional consulting format.",
    year: "2024",
  },
  {
    icon: "🎖️",
    tag: "Internship",
    title: "Completion of Internship Certification",
    desc: "Successfully completed internship programs and received certifications for my contributions and learning.",
    year: "2025–2026",
  }
];

const tagColors = {
  Leadership: "#22c55e",
  Experience: "#34d399",
  Projects: "#4ade80",
  Competition: "#f59e0b",
  Hackathon: "#60a5fa",
  Simulation: "#a78bfa",
};

export default function Achievements() {
  return (
    <section className="ach-page">

      {/* Background texture */}
      <div className="ach-bg-grid" />

      {/* Floating accent orbs */}
      <div className="ach-orb ach-orb--1" />
      <div className="ach-orb ach-orb--2" />

      {/* ── HERO ── */}
      <div className="ach-hero">
        <motion.p
          className="ach-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          MILESTONES & RECOGNITION
        </motion.p>

        <motion.h1
          className="ach-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          Professional <span>Achievements</span>
        </motion.h1>

        <motion.p
          className="ach-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Key milestones that reflect my growth across design, analytics, and competitive problem-solving.
        </motion.p>

        {/* Count row */}
        <motion.div
          className="ach-counts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <div className="ach-count">
            <span className="ach-count__val">{achievements.length}</span>
            <span className="ach-count__lbl">Achievements</span>
          </div>
          <div className="ach-count__sep" />
          <div className="ach-count">
            <span className="ach-count__val">3</span>
            <span className="ach-count__lbl">Hackathons</span>
          </div>
          <div className="ach-count__sep" />
          <div className="ach-count">
            <span className="ach-count__val">2</span>
            <span className="ach-count__lbl">Leadership Roles</span>
          </div>
        </motion.div>
      </div>

      {/* ── DIVIDER ── */}
      <motion.div
        className="ach-section-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── ACHIEVEMENTS LIST ── */}
      <div className="ach-list">
        {achievements.map((item, i) => (
          <RevealItem key={i} delay={i * 0.06}>
            <motion.div
              className="ach-item"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Left — Number */}
              <div className="ach-item__number">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Center — Content */}
              <div className="ach-item__body">
                <div className="ach-item__meta">
                  <span
                    className="ach-item__tag"
                    style={{ "--tag-color": tagColors[item.tag] }}
                  >
                    {item.icon} {item.tag}
                  </span>
                  <span className="ach-item__year">{item.year}</span>
                </div>
                <h3 className="ach-item__title">{item.title}</h3>
                <p className="ach-item__desc">{item.desc}</p>
              </div>

              {/* Right — Arrow */}
              <div className="ach-item__arrow">→</div>

              {/* Hover line */}
              <div className="ach-item__line" />
            </motion.div>
          </RevealItem>
        ))}
      </div>

    </section>
  );
}