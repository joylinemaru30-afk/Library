import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Stylings/homepage.css";

const HomePage = () => {
  return (
    <div className="app-container">
      {/* Main content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>📖 City Library</h1>
          <p>Welcome to your hub for books, events, and digital resources!</p>
        </section>

        {/* Quick Access Cards */}
        <section className="quick-access">
          <Link to="/book-lending" className="card">
            <h3>📚 Book Lending</h3>
            <p>Borrow, return, and reserve books.</p>
          </Link>

          <Link to="/dashboard" className="card">
            <h3>👤 Personal Dashboard</h3>
            <p>See borrowed books, due dates, and events.</p>
          </Link>

          <Link to="/events" className="card">
            <h3>🗓️ Events</h3>
            <p>Check upcoming library programs and workshops.</p>
          </Link>

          <Link to="/digital-resources" className="card">
            <h3>💻 Digital Resources</h3>
            <p>Access eBooks, journals, and online courses.</p>
          </Link>

          <Link to="/borrow-book" className="card borrow-card">
            <h3>📖 Borrow a Book</h3>
            <p>Search and borrow books directly from the library.</p>
          </Link>

          <Link to="/sell-book" className="card sell-card">
            <h3>💰 Sell a Book</h3>
            <p>List your books for sale or donation to the library.</p>
          </Link>
        </section>

        {/* Library Features */}
        <section className="features">
          <h2>Library Features</h2>
          <ul>
            <li>✅ Book Lending Services (physical & digital)</li>
            <li>✅ Personal Dashboard to track your books and dues</li>
            <li>✅ Event Programs and Workshops</li>
            <li>✅ Digital Resources: eBooks, audiobooks, PDFs</li>
            <li>✅ Community Spaces & Study Zones</li>
            <li>✅ Technology Services: Wi-Fi, PCs, printing</li>
          </ul>
        </section>

        {/* Support Section */}
        <section className="support">
          <h2>Need Help?</h2>
          <div className="support-cards">
            <Link to="/help" className="card help-card">
              <h3>🆘 Help Center</h3>
              <p>Find answers to frequently asked questions.</p>
            </Link>

            <Link to="/contact" className="card contact-card">
              <h3>📩 Contact Us</h3>
              <p>Reach out to our team for assistance.</p>
              <p>Phone: 0748522183</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
