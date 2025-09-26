import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLifeRing, FaEnvelope, FaHome, FaSignInAlt } from "react-icons/fa";
import "./Stylings/Notfound.css";


const Notfound = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  // Countdown redirect
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => setCounter((prev) => prev - 1), 1000);

    if (counter === 0) {
      navigate("/signin");
    }

    return () => clearInterval(timer);
  }, [counter, navigate]);

  return (
    <div className="notfound-container d-flex flex-column justify-content-center align-items-center text-center p-4">
    <h1 className="notfound-404 display-1 fw-bold text-warning">404</h1>
    <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4 text-muted">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Search Bar */}
      <div className="w-50 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="form-control text-center shadow-sm"
        />
      </div>

      {/* Main Navigation Buttons */}
      <div className="d-flex gap-3 mb-4">
        <Link to="/" className="btn btn-primary d-flex align-items-center gap-2">
          <FaHome /> Go Home
        </Link>
        <Link
          to="/signin"
          className="btn btn-success d-flex align-items-center gap-2"
        >
          <FaSignInAlt /> Sign In
        </Link>
      </div>

      {/* Quick Access Section */}
      <div className="quick-links mt-3 w-75">
        <h5 className="mb-3">Need Help?</h5>
        <div className="row g-3 justify-content-center">
          {/* Help Center */}
          <div className="col-md-5">
            <Link
              to="/help"
              className="card shadow-sm border-0 h-100 text-decoration-none"
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <FaLifeRing size={40} className="text-primary mb-2" />
                <h6 className="fw-bold">Help Center</h6>
                <p className="text-muted small text-center mb-0">
                  Find answers to common questions.
                </p>
              </div>
            </Link>
          </div>

          {/* Contact Support */}
          <div className="col-md-5">
            <Link
              to="/contact"
              className="card shadow-sm border-0 h-100 text-decoration-none"
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <FaEnvelope size={40} className="text-success mb-2" />
                <h6 className="fw-bold">Contact Support</h6>
                <p className="text-muted small text-center mb-0">
                  Reach us directly for assistance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Redirect Timer */}
      <p className="mt-4 text-muted small">
        Redirecting to Sign In in <strong>{counter}</strong> seconds...
      </p>
    </div>
  );
};

export default Notfound;
