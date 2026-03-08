import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { to: "/",             label: "Home" },
    { to: "/projects",     label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/achievements", label: "Achievements" },
    { to: "/contact",      label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <NavLink to="/" className="nav-logo">
            Karthik<span>.Anaylst</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* HAMBURGER — mobile only */}
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => isActive ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}