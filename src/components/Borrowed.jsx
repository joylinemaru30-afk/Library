import React, { useState, useEffect } from "react";
import "./Stylings/borrowed.css";

const Dashboard = () => {
  // Dummy data – in a real app, this would come from an API
  const [borrowedBooks, setBorrowedBooks] = useState([
    { title: "The Great Gatsby", dueDate: "2025-10-05" },
    { title: "1984", dueDate: "2025-10-12" },
    { title: "A Brief History of Time", dueDate: "2025-10-20" },
  ]);

  const [events, setEvents] = useState([
    { name: "Author Meet & Greet", date: "2025-10-15" },
    { name: "Children's Storytelling Hour", date: "2025-10-18" },
    { name: "Digital Literacy Workshop", date: "2025-10-25" },
  ]);

  const [resources, setResources] = useState([
    { title: "E-Book: Clean Code", link: "#" },
    { title: "Journal: Nature Science", link: "#" },
    { title: "E-Book: The Pragmatic Programmer", link: "#" },
  ]);

  // Highlight overdue books
  const today = new Date();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📖 City Library Dashboard</h2>

      {/* Borrowed Books Section */}
      <div className="dashboard-card">
        <h3>Borrowed Books</h3>
        {borrowedBooks.length > 0 ? (
          <ul>
            {borrowedBooks.map((book, idx) => {
              const isOverdue = new Date(book.dueDate) < today;
              return (
                <li key={idx} className={isOverdue ? "overdue" : ""}>
                  <span>{book.title}</span>
                  <span>Due: {book.dueDate}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No borrowed books yet.</p>
        )}
      </div>

      {/* Events Section */}
      <div className="dashboard-card">
        <h3>Upcoming Events</h3>
        <ul>
          {events.map((event, idx) => (
            <li key={idx}>
              <span>{event.name}</span>
              <span>{event.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Digital Resources */}
      <div className="dashboard-card">
        <h3>Digital Resources</h3>
        <ul>
          {resources.map((res, idx) => (
            <li key={idx}>
              <a href={res.link} target="_blank" rel="noopener noreferrer">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
