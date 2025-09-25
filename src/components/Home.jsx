import React from "react";
import { Link } from "react-router-dom"; // for navigation
import "./Stylings/homepage.css";


const HomePage = () => {
  return (
    <div className="homepage-container">
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

      {/* Footer */}
      <footer>
        
        </footer>
    </div>
  );
};

export default HomePage;
