import React, { useState } from "react";

// Sample events data
const eventsData = [
  { id: 1, title: "Author Meet & Greet", date: "2025-12-05", description: "Meet local authors and discuss their works." },
  { id: 2, title: "Children Story Time", date: "2025-11-25", description: "Fun storytelling session for kids." },
  { id: 3, title: "Science Workshop", date: "2025-11-30", description: "Interactive science activities for all ages." },
];

const UpcomingEvents = () => {
  const [searchEvent, setSearchEvent] = useState("");

  // Filter upcoming events
  const today = new Date().toISOString().split("T")[0];
  const filteredEvents = eventsData.filter(
    (event) =>
      event.date >= today &&
      event.title.toLowerCase().includes(searchEvent.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search events..."
        value={searchEvent}
        onChange={(e) => setSearchEvent(e.target.value)}
        className="border rounded p-2 mb-6 w-full"
      />

      {/* Events list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 col-span-full">No upcoming events.</p>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="border rounded p-4 shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-700">Date: {event.date}</p>
              <p className="text-gray-500">{event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
