import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1 px-3">
      {/* Brand */}
      <Link to="/" className="navbar-brand fw-bold m-2">
        City<span className="text-danger">Library</span>
      </Link>

      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Content */}
      <div id="navbarcontents" className="collapse navbar-collapse">
        {/* Left-aligned items */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link fw-bold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link fw-bold">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link fw-bold">
              Location
            </Link>
          </li>
        </ul>

        {/* Right-aligned items */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/borrow" className="nav-link fw-bold">
              Borrow
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lend" className="nav-link fw-bold">
              Lending
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link fw-bold btn btn-outline-success px-3 ms-2">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
