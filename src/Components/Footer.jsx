import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Arram Old Age Home</h3>
          <p>
            Providing compassionate care and a loving home for our elderly
            community since 1995.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/facilities">Facilities</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/join-us">Join Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📍 123 Elder Care Street, City, State 12345</p>
            <p>📞 (555) 123-4567</p>
            <p>📧 info@arramoldagehome.com</p>
            <p>🕒 24/7 Care Available</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul className="footer-links">
            <li>
              <Link to="/donate">Donate Now</Link>
            </li>
            <li>
              <Link to="/join-us">Volunteer</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <a href="#">Emergency: (555) 911-0000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2024 Arram Old Age Home. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
