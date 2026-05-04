import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "../styles/certificates.css";

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const certificates = [
  {
    title: "Data Analytics & Visualization",
    issuer: "Internship Certification",
    date: "2024",
    category: "Analytics",
    icon: "📊",
    desc: "Completed internship working on four real-world analytics projects. Received certification and recommendation letter.",
    file: "/Certificates/Accenture.pdf",
  },
  {
    title: "TATA Data Analytics Simulation",
    issuer: "TATA Group",
    date: "2024",
    category: "Analytics",
    icon: "🏢",
    desc: "Completed real-world data analysis and reporting simulation by TATA Group.",
    file: "/Certificates/TATA.pdf",
  },
  {
    title: "IIT Kharagpur Hackathon",
    issuer: "IIT Kharagpur",
    date: "2024",
    category: "Hackathons",
    icon: "🏆",
    desc: "National-level analytics competition certification from IIT Kharagpur.",
    file: "/Certificates/Khargpur_Data_Science_Hackathon.pdf",
  },
  {
    title: "BITS Pilani Hackathon",
    issuer: "BITS Pilani",
    date: "2024",
    category: "Hackathons",
    icon: "🚀",
    desc: "Participated in competitive data-driven solution building at BITS Pilani.",
    file: "/Certificates/Bits_TechXclerate.pdf",
  },
  {
    title: "Top 10 — Space Tech Summit 2026",
    issuer: "Space Tech Summit",
    date: "2026",
    category: "Design",
    icon: "🌌",
    desc: "Secured Top 10 position in poster presentation competition at Space Tech Summit.",
    file: "/Certificates/Guntur_Tech_Summit.pdf",
  },
  {
    title: "Letter Of Appreciation — GAAC Club",
    issuer: "GAAC Club, GITAM",
    date: "2025",
    category: "Design",
    icon: "🎨",
    desc: "Serving as core designer contributing to branding and digital assets for GAAC.",
    file: "/Certificates/GAAC_Letter_of_Apprecition.pdf",
  },
  {
    title: "SHORE 2025 Fest Committee",
    issuer: "SHORE Fest, GITAM",
    date: "2025",
    category: "Volunteer",
    icon: "🎭",
    desc: "Handled event creatives and digital promotions for the SHORE 2025 festival.",
    file: "/Certificates/Shore_fest_2025.pdf",
  },
  {
    title: "Data Analytics using Power BI Workshop",
    issuer: "TECH TIP 24",
    date: "2024",
    category: "Analytics",
    icon: "📈",
    desc: "Completed workshop on data analytics and visualization using Power BI.",
    file: "/Certificates/Power_Bi_Workshop.pdf",
  },
  {
    title: "Github Hackathon 2024",
    issuer: "Gitam University Github Club",
    date: "2024",
    category: "Hackathons",
    icon: "💻",
    desc: "Participated in Github Hackathon 2024 organized by Gitam University.",
    file: "/Certificates/Github_Hackathon.pdf",
  },
  {
    title: "Generative AI and Chatgpt",
    issuer: "Geeks for Geeks",
    date: "2024",
    category: "Course",
    icon: "🤖",
    desc: "Completed course on generative AI and ChatGPT applications.",
    file: "/Certificates/Geeks_For_Geeks_Course.pdf",
  },
  {
    title: "Internship Certificate - Data Analytics",
    issuer: "Unified Mentor Pvt Ltd",
    date: "2025",
    category: "Analytics",
    icon: "📊",
    desc: "Completed internship focused on data analytics projects and received certification.",
    file: "/Certificates/Unified_Mentor_Internship.pdf",
  },
  {
    title: "Internship Certificate - Big Data 301",
    issuer: "Infosys Springboard",
    date: "2026",
    category: "Analytics",
    icon: "📊",
    desc: "Completed internship focused on big data projects and received certification.",
    file: "/Certificates/Infosys_Springboard_Internship.pdf",
  }
];

const categories = ["All", "Analytics", "Hackathons", "Design"];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section className="cert-page">

      {/* ── HERO ── */}
      <div className="cert-hero">
        <motion.p
          className="cert-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          CREDENTIALS & RECOGNITION
        </motion.p>
        <motion.h1
          className="cert-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          My <span>Certificates</span>
        </motion.h1>
        <motion.p
          className="cert-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          A collection of certifications, achievements, and recognitions earned
          across analytics, design, and competitive events.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="cert-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "8+", label: "Certificates" },
            { value: "3", label: "Hackathons" },
            { value: "2026", label: "Latest Year" },
          ].map((s, i) => (
            <div key={i} className="cert-stat">
              <span className="cert-stat__value">{s.value}</span>
              <span className="cert-stat__label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── FILTER TABS ── */}
      <motion.div
        className="cert-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cert-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div className="cert-filter-pill" layoutId="filterPill" />
            )}
          </button>
        ))}
      </motion.div>

      {/* ── GRID ── */}
      <div className="cert-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="cert-card"
              onClick={() => setSelected(cert)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="cert-card__glow" />

              {/* Category badge */}
              <span className="cert-card__category">{cert.category}</span>

              <div className="cert-card__icon">{cert.icon}</div>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer">{cert.issuer} · {cert.date}</p>
              <p className="cert-card__desc">{cert.desc}</p>

              <div className="cert-card__footer">
                <span className="cert-card__view">View Certificate →</span>
              </div>

              <div className="cert-card__bar" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal__glow" />

              <button className="cert-modal__close" onClick={() => setSelected(null)}>✕</button>

              <div className="cert-modal__header">
                <span className="cert-modal__icon">{selected.icon}</span>
                <div>
                  <span className="cert-modal__category">{selected.category}</span>
                  <h3 className="cert-modal__title">{selected.title}</h3>
                  <p className="cert-modal__issuer">{selected.issuer} · {selected.date}</p>
                </div>
              </div>

              <div className="cert-modal__divider" />

              <p className="cert-modal__desc">{selected.desc}</p>

              <a
                href={selected.file}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-modal__btn"
              >
                Open Certificate ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}