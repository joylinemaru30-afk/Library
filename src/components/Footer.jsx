import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Stylings/footer.css";
const Footer = () => {
  return (
    <footer className="site-footer bg-success text-white py-4">
      <div className="container">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-4">
          <h2>Library Features</h2>
          <div className="features-grid">
            <div className="feature-card">📚 Book Lending (Physical & Digital)</div>
            <div className="feature-card">🖥️ Technology Services (Wi-Fi, PCs, Printing)</div>
            <div className="feature-card">🏫 Study Zones & Community Spaces</div>
            <div className="feature-card">🎨 Events & Workshops</div>
            <div className="feature-card">📖 E-books, Audiobooks & PDFs</div>
            <div className="feature-card">📝 Membership & Personal Dashboard</div>
          </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/location" className="text-white text-decoration-none">Location</Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  Online Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
          {/* Social Links */}
          <div className="social-list">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
          </div>

        </div>

     
      </div>
    </footer>
  );
};

export default Footer;
