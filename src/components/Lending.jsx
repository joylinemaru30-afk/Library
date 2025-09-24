import React, { useState } from "react";
import Footer from "./Footer";

const Lending = () => {
  const [name, setname] = useState("");
  const [textbook, settextbook] = useState("");
  const [date, setdate] = useState("");
  const [residence, setresidence] = useState("");
  const [loading, setloading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setloading(true);

    // simulate async operation (like API call)
    setTimeout(() => {
      setloading(false); // just stop loader, no alert
    }, 2000);
  };

  const Loader = () => (
    <div className="hourglassBackground d-flex justify-content-center align-items-center">
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div className="hourglassGlass"></div>
      </div>
    </div>
  );

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 card shadow">
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={submit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name here"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />{" "}
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your textbook name here"
              value={textbook}
              onChange={(e) => settextbook(e.target.value)}
            />{" "}
            <br />
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />{" "}
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your residence here"
              value={residence}
              onChange={(e) => setresidence(e.target.value)}
            />{" "}
            <br />
            <button type="submit" className="btn btn-warning w-100">
              Submit
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Lending;
