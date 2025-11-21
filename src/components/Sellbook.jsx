import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const SellBookAndPay = () => {
  const [productname, setproductname] = useState("");
  const [productdescription, setproductdescription] = useState("");
  const [productcost, setproductcost] = useState("");
  const [productphoto, setproductphoto] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");

  const [addedProduct, setAddedProduct] = useState(null);

  const [phone, setphone] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const Loader = () => (
    <div className="text-center mt-3">
      <div className="spinner-border text-success"></div>
      <p>Processing...</p>
    </div>
  );

  // STEP 1: SUBMIT BOOK
  const submitBook = async (e) => {
    e.preventDefault();
    setloading(true);
    seterror("");
    setsuccess("");

    try {
      const data = new FormData();
      data.append("product_name", productname);
      data.append("product_description", productdescription);
      data.append("product_cost", productcost);
      data.append("product_photo", productphoto);

      await axios.post(
        "https://joykosgei.pythonanywhere.com/api/addproduct",
        data
      );

      setloading(false);
      setsuccess("📘 Book added successfully!");

      setAddedProduct({
        name: productname,
        description: productdescription,
        cost: productcost,
        photo: URL.createObjectURL(productphoto),
      });

      setproductname("");
      setproductdescription("");
      setproductcost("");
      setproductphoto("");

    } catch (err) {
      setloading(false);
      seterror("❌ Failed to add book.");
    }
  };

  // STEP 2: MPESA PAYMENT
  const payNow = async (e) => {
    e.preventDefault();
    setloading(true);
    setPaymentSuccess("");
    seterror("");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", addedProduct.cost);

      await axios.post(
        "https://joykosgei.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setloading(false);
      setPaymentSuccess("📲 Mpesa prompt sent! Check your phone.");
    } catch {
      setloading(false);
      seterror("❌ Payment failed.");
    }
  };

  return (
    <>
      <div className="container mt-4 col-md-6">
        <div className="card p-4 shadow">

          <h2 className="text-center mb-3">📚 Sell a Book</h2>

          {loading && <Loader />}
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          {!addedProduct && (
            <form onSubmit={submitBook}>
              <input
                type="text"
                className="form-control"
                placeholder="Book Name"
                value={productname}
                onChange={(e) => setproductname(e.target.value)}
                required
              />
              <br />

              <input
                type="text"
                className="form-control"
                placeholder="Book Description"
                value={productdescription}
                onChange={(e) => setproductdescription(e.target.value)}
                required
              />
              <br />

              <input
                type="number"
                className="form-control"
                placeholder="Book Price"
                value={productcost}
                onChange={(e) => setproductcost(e.target.value)}
                required
              />
              <br />

              <label>Book Cover Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setproductphoto(e.target.files[0])}
                required
              />
              <br />

              <button className="btn btn-success w-100">Add Book</button>
            </form>
          )}

          {addedProduct && (
            <div className="mt-4">
              <hr />
              <h3 className="text-center">💳 Complete Mpesa Payment</h3>

              <img
                src={addedProduct.photo}
                alt="Book Cover"
                className="img-fluid mt-3 mb-3 rounded"
              />

              <h4>Book: {addedProduct.name}</h4>
              <h5>Price: KES {addedProduct.cost}</h5>

              {paymentSuccess && (
                <p className="text-success mt-3">{paymentSuccess}</p>
              )}

              <form onSubmit={payNow}>
                <input
                  type="number"
                  className="form-control mt-3"
                  placeholder="Enter phone number (2547...)"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  required
                />
                <br />

                <button className="btn btn-primary w-100">
                  Pay with Mpesa
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SellBookAndPay;
