import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Arram</span>
          <span className="logo-subtitle">Old Age Home</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/facilities"
            className={`navbar-link ${
              location.pathname === "/facilities" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Facilities
          </Link>
          <Link
            to="/gallery"
            className={`navbar-link ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/join-us"
            className={`navbar-link ${
              location.pathname === "/join-us" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Join Us
          </Link>
          <Link
            to="/donate"
            className={`navbar-link ${
              location.pathname === "/donate" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Donate
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
