import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Secondcomponent = () => {
  return (
    <div className=" mt-4">
      <h3 className="text-center mb-3">Welcome to the Second Page</h3>
      <h5 className="text-center text-muted">
        Samples of books found at city library 
      </h5>

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
                It helps students learn to read well and fluently and also improves there speaking skills.
               
              </p>
               it contains 95 pages
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
                This book talks about African leaders who are corrupt and
                not ready to serve the people.
              </p>
            </div>
          </div>
        </div>
     
      <h2>The library also gifts people who visit their regularly: </h2>
      <div className="col-md-4 p-4">
        <div className="card shadow h-100">
        <img src="images/download 0.jpeg" 
        alt="gift for youths" />
        <div className="card-body">
          <h4 className="card-tittle">Gift for youths</h4>
          <p className="card-text">
            its a sample of reward to any youth visiting the library continuosly
          </p>
          
          </div>

        </div>

        </div>
        <div className="col-md-4 p-4">
          <div className="card shadow h-100">
            <img src="images/download.jpeg" 
            alt="Gift for the aged" />
            <div className="card-body">
              <h4 className="card-tittle">Gift for the aged</h4>
              <p className="card-text">
                its a sample of gifts to the aged
              </p>

            </div>

          </div>

        </div>
        <div className="col-md-4 p-4">
        <div className="card shadow h-100">
          <img src="images/3wing.jpeg"
           alt="Gifts for the young ones" />
           <div className="card-body">
            <h4 className="card-tittle">Gifts for the young one</h4>
            <p className="card-text">
              its a sample of gifts for the young ones
            </p>

           </div>

        </div>

      </div>
      <h4>There is also free internet access</h4>
      <div className="col-md-4 p-3">
        <div className="card shadow h-100">
        <img src="images/download 67.jpeg" 
      alt="free internet access" />
      <div className="card-body">
        <h4 className="card-tittle"> free internet access</h4>
        <p>for all people</p>

      </div>

        </div>

      </div>



      </div>
      <Footer/>
      
      </div>
      );
};

export default Secondcomponent;
