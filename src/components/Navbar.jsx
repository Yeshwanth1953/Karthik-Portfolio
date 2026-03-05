import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">Karthik.Anaylst</h2>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/certificates">Certificates</NavLink></li>
          <li><NavLink to="/achievements">Achievements</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
}