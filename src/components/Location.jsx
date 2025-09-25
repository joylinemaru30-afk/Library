import React from "react";
import Footer from "./Footer";

const Location = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <h2>Our Location</h2>
        <p>
          From the Easycoach offices, walk straight along the highway, past Canaan Market, then turn right at the roundabout. The City Library will be on your right, next to Tiryo Phone Shop.
        </p>

        <h3>Opening Hours</h3>
        <ul>
          <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
          <li>Saturday: 9:00 AM - 5:00 PM</li>
          <li>Sunday: 10:00 AM - 4:00 PM</li>
        </ul>

        <h3>Contact Us</h3>
        <p>Email: citylibrary@gmail.com</p>
        <p>Phone: 0119852145</p>
        <p>Google account: @citylibraryofflineservice</p>

        <h3>Library Image</h3>
        <img 
          src="https://images.unsplash.com/photo-1515165562835-cb1cfde9b5f5?auto=format&fit=crop&w=800&q=80" 
          alt="City Library" 
          width="300"
        />

        <h3>Map</h3>
        <iframe
          title="City Library Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.123456789!2d32.567890123!3d0.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db123456789ab%3A0x123456789abcdef!2sCity%20Library!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
