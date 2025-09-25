import React from 'react';
import Footer from "./Footer";

const Location = () => {
  return (
    <div className="container my-4">
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
      <p>You are all welcome to our City Library. Our services are provided 24/7. In case of any problem, you can reach out to our office via:</p>
      <h5>Email: citylibrary@gmail.com</h5>
      <h5>Phone: 0119852145</h5>
      <p>You can also access our books online and offline through our Google account:</p>
      <h5>@citylibraryofflineservice</h5>

      <h3>Library Image</h3>
      <div className="col-md-6 p-3">
        <div className="card shadow h-100">
          <img 
            src="images/citylibrary.jpeg" 
            alt="City Library Interior" 
            className="card-img-top" 
          />
          <div className="card-body">
            <p className="card-text">Welcome to City Library! Explore our collection and services.</p>
          </div>
        </div>
      </div>

      <h3>Map</h3>
      <p>Find us easily using the map below. Click "Get Directions" to navigate to our library:</p>
      <div className="map-container" style={{ marginBottom: '20px' }}>
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

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=City+Library,+Your+City"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Get Directions
      </a>

      <Footer />
    </div>
  );
};

export default Location;
