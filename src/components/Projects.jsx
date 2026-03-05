import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";

export default function Projects() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCodeImage, setSelectedCodeImage] = useState(null);

  /* ---------------- DASHBOARDS ---------------- */
  const dashboards = [
    {
      title: "🎬 Netflix Content Analysis Dashboard",
      summary:
        "This dashboard explores Netflix's content library by type, rating, release year, country, and seasons. Helps understand content trends, audience preferences, and growth patterns across regions and years.",
      tools: ["Power BI", "Excel", "SQL"],
      previewImage: "/dashboards/dashboard_images/netflix.jpg",
      dashboardImage: "/dashboards/image2.jpeg",
    },
    {
      title: "💼 LinkedIn Job Market Insights Dashboard",
      summary:
        "A data-driven dashboard visualizing job trends, demand by location, and in-demand roles on LinkedIn. Offers insights into hiring patterns, application volume, and trending job profiles.",
      tools: ["Power BI", "Excel", "SQL"],
      previewImage: "/dashboards/dashboard_images/linkedin.jpg",
      dashboardImage: "/dashboards/image3.jpeg",
    },
    {
      title: "🎵 Spotify Music Analytics Dashboard",
      summary:
        "An interactive Power BI dashboard analyzing music trends across genres, artists, and release patterns. Provides insights into popularity distribution, artist performance, and listening behavior over time.",
      tools: ["Power BI", "Excel", "SQL"],
      previewImage: "/dashboards/dashboard_images/spotify.png",
      dashboardImage: "/dashboards/image1.jpeg",
    },
    {
      title: "▶️ YouTube Channel & Sentiment Analysis Dashboard",
      summary:
        "Analyzes YouTube data to uncover trends in content categories, viewer sentiment, and creator growth. Highlights top creators, most viewed categories, and audience engagement metrics.",
      tools: ["Power BI", "Excel", "SQL"],
      previewImage: "/dashboards/dashboard_images/youtube.jpg",
      dashboardImage: "/dashboards/image4.jpeg",
    },
  ];

  /* ---------------- ANALYSIS ---------------- */
  const analysisProjects = [
    {
      title: "Coffee Sales Analysis",
      description:
        "Analyzed coffee sales data to identify trends and seasonal patterns. Used Python for data cleaning and visualization, and SQL for querying the database. The project provided insights into customer preferences and sales performance.",
      tech: ["Python", "SQL", "Pandas", "Matplotlib"],
      github: "#https://github.com/Karthikallu1811/Coffee_sales.git",
      live: "dashboards/dashboard_images/coffee_code.png",
    },
  ];

  /* ---------------- DESIGNS ---------------- */
  const designs = [
    {
      title: "Starnival Festival Branding",
      images: [
        "/images/designs/GAAC-event1/imgpos1.jpeg",
        "/images/designs/GAAC-event1/imgpos2.jpeg",
        "/images/designs/GAAC-event1/imgpos3.jpeg",
      ],
    },
    {
      title: "Shore Fest Varnam Event",
      images: ["/images/designs/imageshore1.jpeg"],
    },
    {
      title: "GAAC-CXR Event",
      images: ["/images/designs/imagevent3.jpeg"],
    },
    {
      title: "GAAC Spaceflight Event",
      images: ["/images/designs/imgevent2.jpeg"],
    },
    {
      title: "Nebula",
      images: [
        "/images/designs/GAAC-1/imgpos1.jpeg",
        "/images/designs/GAAC-1/imgpos2.jpeg",
        "/images/designs/GAAC-1/imgpos3.jpeg",
        "/images/designs/GAAC-1/imgpos4.jpeg",
        "/images/designs/GAAC-1/imgpos5.jpeg",
        "/images/designs/GAAC-1/imgpos6.jpeg",
        "/images/designs/GAAC-1/imgpos7.jpeg",
        "/images/designs/GAAC-1/imgpos8.jpeg",
      ],
    },
    {
      title: "AI in Space",
      images: [
        "/images/designs/GAAC-2/imgpos1.jpeg",
        "/images/designs/GAAC-2/imgpos2.jpeg",
        "/images/designs/GAAC-2/imgpos3.jpeg",
        "/images/designs/GAAC-2/imgpos4.jpeg",
        "/images/designs/GAAC-2/imgpos5.jpeg",
        "/images/designs/GAAC-2/imgpos6.jpeg",
      ],
    },
    {
      title: "Auroras",
      images: [
        "/images/designs/GAAC-3/imgpos1.jpeg",
        "/images/designs/GAAC-3/imgpos2.jpeg",
        "/images/designs/GAAC-3/imgpos3.jpeg",
        "/images/designs/GAAC-3/imgpos4.jpeg",
        "/images/designs/GAAC-3/imgpos5.jpeg",
        "/images/designs/GAAC-3/imgpos6.jpeg",
      ],
    },
    {
      title: "Planetary Rovers",
      images: [
        "/images/designs/GAAC-4/imgpos1.jpeg",
        "/images/designs/GAAC-4/imgpos2.jpeg",
        "/images/designs/GAAC-4/imgpos3.jpeg",
        "/images/designs/GAAC-4/imgpos4.jpeg",
        "/images/designs/GAAC-4/imgpos5.jpeg",
      ],
    },
    {
      title: "Underwater Robotics",
      images: [
        "/images/designs/GAAC-5/imgpos1.jpeg",
        "/images/designs/GAAC-5/imgpos2.jpeg",
        "/images/designs/GAAC-5/imgpos3.jpeg",
        "/images/designs/GAAC-5/imgpos4.jpeg",
        "/images/designs/GAAC-5/imgpos5.jpeg",
        "/images/designs/GAAC-5/imgpos6.jpeg",
        "/images/designs/GAAC-5/imgpos7.jpeg",
      ],
    },
  ];

  /* ----------- SLIDER CONTROLS (NO LOOP) ----------- */

  const goNext = () => {
    if (!selectedDesign) return;
    if (currentIndex < selectedDesign.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (!selectedDesign) return;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="projects-page">
      <div className="projects-container">

        {/* HERO */}
        <p className="projects-tag">APPLIED SYSTEMS</p>

        <h1 className="projects-title">
          Where <span>Data</span> Meets Design.
        </h1>

        <p className="projects-desc">
          Exploring the intersection of analytical systems and visual
          communication.
        </p>

        {/* DASHBOARDS */}
        <div className="section-block">
          <h2 className="section-title">
            Interactive <span>Dashboards</span>
          </h2>

          {dashboards.map((item, i) => (
            <div key={i} className="dashboard-row">
              <div className="dashboard-text">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>

                <div className="dashboard-tools">
                  {item.tools.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>

                <button
                  className="btn primary dashboard-btn"
                  onClick={() =>
                    setSelectedDashboard({ image: item.dashboardImage })
                  }
                >
                  View Dashboard
                </button>
              </div>

              <div className="dashboard-image">
                <img src={item.previewImage} alt={item.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <a
            href="https://github.com/Karthikallu1811/Dashboards.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            View More Dashboards →
          </a>
        </div>

        <div className="section-divider" />

        {/* CODING */}
        <div className="section-block">
          <h2 className="section-title">
            Analytical & <span>Coding</span> Projects
          </h2>

          <div className="analysis-list">
            {analysisProjects.map((p, i) => (
              <div key={i} className="analysis-item">
                <h4>{p.title}</h4>
                <p>{p.description}</p>

                <div className="analysis-tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div className="analysis-actions">
                  {/* LIVE BUTTON - MODAL */}
                  <button
                    className="btn primary"
                    onClick={() => setSelectedCodeImage(p.live)}
                  >
                    Live
                  </button>

                  {/* GITHUB BUTTON - ACCENT STYLE */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-footer">
          <a
            href="https://github.com/Karthikallu1811"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            Explore More Code →
          </a>
        </div>

        <div className="section-divider" />

        {/* DESIGNS */}
        <div className="section-block">
          <h2 className="section-title">
            Visual <span>Designs</span>
          </h2>

          <div className="design-grid">
            {designs.map((d, i) => (
              <div
                key={i}
                className="design-card"
                onClick={() => {
                  setSelectedDesign(d);
                  setCurrentIndex(0);
                }}
              >
                <img src={d.images[0]} alt={d.title} />
                <div className="design-overlay">
                  <h4>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ FIXED: section-footer is now INSIDE projects-container */}
        <div className="section-footer">
          <a
            href="https://github.com/Karthikallu1811/Designs.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            See Full Design Archive →
          </a>
        </div>

      </div>
      {/* END projects-container */}

      {/* DESIGN MODAL */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            className="design-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              className="modal-wrapper"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedDesign.images.length === 1 ? (
                <div className="single-image-wrapper">
                  <img src={selectedDesign.images[0]} alt="design" />
                </div>
              ) : (
                <div className="slider-container">
                  <button
                    className="slider-btn left"
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                  >
                    ‹
                  </button>

                  <motion.div
                    className="slider-track"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ duration: 0.5 }}
                  >
                    {selectedDesign.images.map((img, i) => (
                      <div key={i} className="slide">
                        <img src={img} alt="design" />
                      </div>
                    ))}
                  </motion.div>

                  <button
                    className="slider-btn right"
                    onClick={goNext}
                    disabled={currentIndex === selectedDesign.images.length - 1}
                  >
                    ›
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DASHBOARD MODAL */}
      <AnimatePresence>
        {selectedDashboard && (
          <motion.div
            className="design-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDashboard(null)}
          >
            <motion.div
              className="modal-wrapper"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedDashboard.image}
                alt="dashboard"
                className="dashboard-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CODE MODAL */}
      <AnimatePresence>
        {selectedCodeImage && (
          <motion.div
            className="design-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCodeImage(null)}
          >
            <motion.div
              className="modal-wrapper"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCodeImage}
                alt="code preview"
                className="dashboard-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}