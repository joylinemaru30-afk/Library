import React from "react";
import { FaBook, FaLaptop, FaUsers, FaWifi, FaCalendarAlt } from "react-icons/fa";
import Footer from "./Footer";
import "./Stylings/secondcomponent.css";


const About = () => {
  return (
    <div>
      <div className="about-page container mt-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="fw-bold display-4 text-primary">📖 About City Library</h1>
        <p className="lead text-muted">
          A place where knowledge meets community — serving our city for over 50 years.
        </p>
      </section>

      {/* History / Intro */}
      <section className="mb-5">
        <h2 className="fw-bold">Welcome to City Library</h2>
        <p>
          For more than five decades, City Library has been the heart of knowledge,
          creativity, and community life. Founded in 1972, our mission has always been
          to provide free and open access to information, support lifelong learning, 
          and connect people of all ages with the resources they need.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="row mb-5">
        <div className="col-md-6">
          <div className="p-4 shadow rounded bg-light h-100">
            <h3 className="text-success fw-bold">Our Mission</h3>
            <p>
              To foster curiosity, inspire learning, and promote literacy by providing
              resources, programs, and spaces that support lifelong growth for everyone.
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <div className="p-4 shadow rounded bg-light h-100">
            <h3 className="text-info fw-bold">Our Vision</h3>
            <p>
              To be a dynamic center of culture, education, and innovation where every
              member of the community feels welcome and empowered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-5">
        <h2 className="fw-bold text-center mb-4">📌 What We Offer</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 shadow rounded h-100">
              <FaBook size={40} className="text-primary mb-3" />
              <h5>Book Lending</h5>
              <p>Borrow, reserve, and return thousands of titles across all genres.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 shadow rounded h-100">
              <FaLaptop size={40} className="text-success mb-3" />
              <h5>Digital Resources</h5>
              <p>Access eBooks, audiobooks, journals, and online courses 24/7.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 shadow rounded h-100">
              <FaCalendarAlt size={40} className="text-warning mb-3" />
              <h5>Events & Workshops</h5>
              <p>Engaging programs, workshops, and cultural events for all ages.</p>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="p-4 shadow rounded h-100">
              <FaUsers size={40} className="text-danger mb-3" />
              <h5>Community Spaces</h5>
              <p>Study rooms, meeting halls, and collaborative spaces for the public.</p>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="p-4 shadow rounded h-100">
              <FaWifi size={40} className="text-info mb-3" />
              <h5>Free Internet Access</h5>
              <p>Enjoy free Wi-Fi, computers, and printing services in the library.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info mb-5 text-center">
        <h2 className="fw-bold">📞 Contact Us</h2>
        <p>Email: <strong>citylibrary@gmail.com</strong></p>
        <p>Phone: <strong>0748522183</strong></p>
        <p>Follow us: <strong>@citylibraryofflineservice</strong></p>
      </section>

     
    </div>
     {/* Footer */}
     <Footer />
    </div>
  );
};

export default About;
