import React, { useState } from "react";

// Sample book data
const booksData = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction" },
  { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science" },
  { id: 3, title: "1984", author: "George Orwell", category: "Fiction" },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", category: "History" },
  { id: 5, title: "The Selfish Gene", author: "Richard Dawkins", category: "Science" },
];

const BrowseBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
 

  const categories = ["All", ...new Set(booksData.map((book) => book.category))];

  const filteredBooks = booksData.filter((book) => {
    const matchesCategory = categoryFilter === "All" || book.category === categoryFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">Browse Books</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 flex-1 text-dark"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded p-2 text-dark"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBooks.length === 0 ? (
          <p className="text-gray-500 col-span-full">No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="border rounded p-4 shadow hover:shadow-md transition">
              <h2 className="text-dark">{book.title}</h2>
              <p className=" text-primary">Author: {book.author}</p>
              <p className="text-gray-500">Category: {book.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
