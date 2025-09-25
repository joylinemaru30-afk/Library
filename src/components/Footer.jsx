import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"; // for internal navigation

const Footer = () => {
  return (
    <footer className="site-footer bg-success text-white py-4">
      <div className="container">
        {/* Brand Section */}
        <div className="brand mb-3">
          <h3>City Library</h3>
          <p>We provide all revision books and resources.</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled d-flex flex-wrap gap-3">
            <li>
              <Link to="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li>
              <Link to="/location" className="text-white text-decoration-none">Location</Link>
            </li>
            <li>
              <Link to="/catalog" className="text-white text-decoration-none">Catalog</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            </li>
            <li>
              {/* Online Services Link */}
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
        <div className="social-list mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white me-3">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white me-3">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white me-3">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white me-3">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} City Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
