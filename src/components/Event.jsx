import React from "react";
import { useParams } from "react-router-dom";

const eventsData = [
  { id: "storytelling", title: "Storytelling for Kids", date: "Nov 25, 2025", time: "10 AM" },
  { id: "author-meet", title: "Author Meet & Greet", date: "Dec 3, 2025", time: "3 PM" },
  { id: "digital-workshop", title: "Digital Skills Workshop", date: "Dec 10, 2025", time: "1 PM" },
];

const EventsPage = () => {
  const { eventId } = useParams();

  if (eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return <p>Event not found</p>;

    return (
      <div style={{ padding: "2rem" }}>
        <h1>{event.title}</h1>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Register for this event by contacting the library.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Upcoming Events</h1>
      {eventsData.map(event => (
        <div key={event.id} style={{ marginBottom: "1rem" }}>
          <h3>{event.title}</h3>
          <p>{event.date} | {event.time}</p>
          <a href={`/events/${event.id}`} className="btn btn-small">Register / Details</a>
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
