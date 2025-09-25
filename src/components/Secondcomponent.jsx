import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Secondcomponent = () => {
  return (
    <div className="mt-4 container">
      {/* About Section */}
      <h2 className="text-center mb-3">About Our City Library</h2>
      <p>
        Welcome to the City Library, your hub for knowledge, learning, and community engagement. 
        Our library has been serving the residents of the city for over 50 years, providing 
        access to a vast collection of books, digital resources, and educational programs.
      </p>

      <h4>Our Mission</h4>
      <p>
        To foster lifelong learning, support literacy and research, and provide a safe and 
        welcoming space for all members of the community.
      </p>

      <h4>What We Offer</h4>
      <ul>
        <li>Extensive collection of books, magazines, and newspapers</li>
        <li>Online library services accessible 24/7</li>
        <li>Study rooms and community meeting spaces</li>
        <li>Workshops, reading programs, and educational events</li>
        <li>Access to digital resources including e-books and audiobooks</li>
      </ul>

      <h4>Our Vision</h4>
      <p>
        To be a cornerstone of knowledge, culture, and community life in the city, 
        empowering residents of all ages through accessible resources and programs.
      </p>

      <h4>Contact Information</h4>
      <p>Email: <strong>citylibrary@gmail.com</strong></p>
      <p>Phone: <strong>0119852145</strong></p>
      <p>Follow us on social media: <strong>@citylibraryofflineservice</strong></p>

      {/* Books Section */}
      <h3 className="text-center mb-3 mt-5">Samples of Books Found at City Library</h3>
      <div className="row justify-content-center mt-3">
        {/* Book 1 */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img
              src="images/download56.jpeg"
              className="card-img-top"
              alt="Bembea ya maisha"
            />
            <div className="card-body">
              <h4 className="card-title">Bembea ya Maisha</h4>
              <p className="card-text">
                The play revolves around family struggles, illness, poverty, and
                the changes between traditional and modern life.
              </p>
              <ul>
                <li>Swahili play (setbook) for secondary school</li>
                <li>Contains 76 pages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book 2 */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img
              src="images/images34.jpeg"
              className="card-img-top"
              alt="Bookset.jss"
            />
            <div className="card-body">
              <h4 className="card-title">Bookset.jss</h4>
              <p className="card-text">
                Helps students read fluently and improves their speaking skills.
              </p>
              <p>Contains 95 pages</p>
            </div>
          </div>
        </div>

        {/* Book 3 */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img
              src="images/download1.jpeg"
              className="card-img-top"
              alt="The Samaritan"
            />
            <div className="card-body">
              <h4 className="card-title">The Samaritan</h4>
              <p className="card-text">
                Discusses corrupt African leaders who are not ready to serve the people.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gifts Section */}
      <h3 className="mt-5">Library Gifts for Regular Visitors</h3>
      <div className="row justify-content-center mt-3">
        {/* Gift 1: Youths */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img src="images/youth.jpeg" alt="Gift for youths" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Gift for Youths</h4>
              <p className="card-text">
                A reward for any youth visiting the library continuously.
              </p>
            </div>
          </div>
        </div>

        {/* Gift 2: Aged */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img src="images/download.jpeg" alt="Gift for the aged" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Gift for the Aged</h4>
              <p className="card-text">
                A sample of gifts for the elderly.
              </p>
            </div>
          </div>
        </div>

        {/* Gift 3: Young Ones */}
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img src="images/3wing.jpeg" alt="Gifts for the young ones" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Gifts for the Young Ones</h4>
              <p className="card-text">
                A sample of gifts for young children visiting the library.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Internet Section */}
      <h4 className="mt-5">Free Internet Access</h4>
      <div className="col-md-4 p-3">
        <div className="card shadow h-100">
          <img src="images/internet.jpeg" alt="Free internet access" className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title">Free Internet Access</h4>
            <p>Available for all visitors.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Secondcomponent;
