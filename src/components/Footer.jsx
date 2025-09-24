import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer bg-success">
      <div className="">
        {/* Brand Section */}
        <div className="brand">
          <h3>City library</h3>
          <p>We provide all revision books</p>
        </div>

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

        {/* Copyright */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} City library.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
