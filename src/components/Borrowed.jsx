import React, { useState } from "react";
import Footer from "./Footer";
import "./Booklending.css";

const BookLending = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", type: "Physical", borrowed: false, reserved: false },
    { id: 2, title: "1984", type: "E-Book (PDF)", borrowed: false, reserved: false },
    { id: 3, title: "Becoming", type: "Audiobook", borrowed: false, reserved: false },
  ]);

  const handleBorrow = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, borrowed: !book.borrowed } : book
      )
    );
  };

  const handleRenew = (id) => {
    alert(`Book ID ${id} renewed successfully!`);
  };

  const handleReserve = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, reserved: !book.reserved } : book
      )
    );
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <h2>📚 Book Lending Services</h2>
        <table className="lending-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.type}</td>
                <td>
                  {book.borrowed
                    ? "Borrowed"
                    : book.reserved
                    ? "Reserved"
                    : "Available"}
                </td>
                <td>
                  <button
                    onClick={() => handleBorrow(book.id)}
                    className={book.borrowed ? "btn-return" : "btn-borrow"}
                  >
                    {book.borrowed ? "Return" : "Borrow"}
                  </button>

                  {book.borrowed && (
                    <button onClick={() => handleRenew(book.id)} className="btn-renew">
                      Renew
                    </button>
                  )}

                  {!book.borrowed && (
                    <button onClick={() => handleReserve(book.id)} className="btn-reserve">
                      {book.reserved ? "Cancel Reservation" : "Reserve"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default BookLending;
