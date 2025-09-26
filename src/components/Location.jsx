import React from "react";
import { FaMapMarkerAlt, FaBus, FaWalking, FaPhoneAlt, FaClock } from "react-icons/fa";
import Footer from "./Footer";
import "./Stylings/Location.css";

const Location = () => {
  return (
    <div className="app-container">
      <div className="main-content container mt-5">
        <h1 className="text-center mb-4 text-primary">📍 Find City Library</h1>

        {/* Directions Section */}
        <section className="directions mb-5 p-4 shadow rounded bg-light">
          <h2 className="fw-bold mb-3">How to Reach Us</h2>
          <ul className="list-unstyled">
            <li className="mb-2 d-flex align-items-center">
              <FaWalking className="me-2 text-success" /> Walk straight along the highway from Easycoach offices.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2 text-danger" /> Pass Canaan Market and continue straight.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaBus className="me-2 text-warning" /> Turn right at the roundabout.
            </li>
            <li className="mb-2 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2 text-primary" /> The library will be on your right, next to Tiryo Phone Shop.
            </li>
          </ul>

          {/* Quick Action Buttons */}
          <div className="d-flex gap-3 mt-3 flex-wrap">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=City+Library"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <FaMapMarkerAlt /> Open in Google Maps
            </a>
            <a href="tel:+0119852145" className="btn btn-success d-flex align-items-center gap-2">
              <FaPhoneAlt /> Call Library
            </a>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="opening-hours mb-5 p-4 shadow rounded bg-light">
          <h2 className="fw-bold mb-3">
            <FaClock className="me-2 text-warning" /> Opening Hours
          </h2>
          <ul className="list-unstyled mb-0">
            <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
            <li>Saturday: 9:00 AM - 5:00 PM</li>
            <li>Sunday: 10:00 AM - 4:00 PM</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="contact-info mb-5 p-4 shadow rounded bg-light">
          <h2 className="fw-bold mb-3">Contact Us</h2>
          <p>Email: citylibrary@gmail.com</p>
          <p>Phone: 0748522183</p>
          <p>Google account: @citylibraryofflineservice</p>
        </section>

        {/* Library Image */}
        <section className="library-image text-center mb-5">
          <img
            src="images/citylibrary.jpeg"
            alt="City Library"
            className="img-fluid shadow rounded"
            width="300"
          />
        </section>

        {/* Map */}
        <section className="map-section mb-5">
          <iframe
            title="City Library Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.123456789!2d32.567890123!3d0.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db123456789ab%3A0x123456789abcdef!2sCity%20Library!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
