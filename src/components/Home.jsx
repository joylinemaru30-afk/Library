import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Stylings/homepage.css";

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const messagesRef = useRef(null);

  const mkId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const getBotResponse = (text) => {
    text = text.toLowerCase();
    if (/hello|hi|hey/.test(text)) return "Hello! How can I help you today?";
    if (/hours|open|opening/.test(text)) return "We are open Mon–Sat, 8:00 AM — 6:00 PM.";
    if (/location|where|address/.test(text)) return "We're at City Center, Building 3, Main Street.";
    if (/contact|phone|email/.test(text)) return "Call us at 0748522183 or email citylibrary@example.com.";
    if (/borrow|loan/.test(text)) return "To borrow a book, visit the Borrow Book page or ask me about a specific title.";
    if (/event|workshop|program/.test(text)) return "Check upcoming events on the Events page.";
    if (/membership|card|register/.test(text)) return "You can register for a library card at the Help Center or online.";
    return "Thanks for your message! A librarian will assist you shortly.";
  };

  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight + 200;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!SpeechRecognition) return;

    const recog = new SpeechRecognition();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recog.onerror = () => setIsListening(false);
    recog.onend = () => setIsListening(false);

    recognitionRef.current = recog;
  }, []);

  const toggleChat = () => {
    setIsChatOpen((prev) => {
      const next = !prev;
      if (next && messages.length === 0) {
        setTimeout(() => {
          const welcome = {
            id: mkId(),
            sender: "bot",
            text: "Hello! I'm the City Library assistant — ask about hours, borrowing, events, or membership."
          };
          setMessages([welcome]);
          speak(welcome.text);
        }, 300);
      }
      return next;
    });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: mkId(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { id: mkId(), sender: "bot", text: getBotResponse(userMsg.text) };
      setMessages((prev) => [...prev, botMsg]);
      speak(botMsg.text);
      setIsTyping(false);
    }, 1200);
  };

  const toggleListening = () => {
    const recog = recognitionRef.current;
    if (!recog) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    if (isListening) {
      recog.stop();
      setIsListening(false);
    } else {
      try {
        recog.start();
        setIsListening(true);
      } catch (e) {
        console.warn("Could not start recognition", e);
      }
    }
  };

  return (
    <div className="app-container">

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero card">
          <h1>Welcome to City Library</h1>
          <p>Your hub for books, events, and digital resources!</p>
          <div className="hero-buttons">
            <Link to="/browse" className="btn primary-btn">Browse Books</Link>
            <Link to="/events" className="btn secondary-btn">Upcoming Events</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features card">
          <h2>Library Features</h2>
          <div className="features-grid">
            <div className="feature-card">📚 Book Lending (Physical & Digital)</div>
            <div className="feature-card">🖥️ Technology Services (Wi-Fi, PCs, Printing)</div>
            <div className="feature-card">🏫 Study Zones & Community Spaces</div>
            <div className="feature-card">🎨 Events & Workshops</div>
            <div className="feature-card">📖 E-books, Audiobooks & PDFs</div>
            <div className="feature-card">📝 Membership & Personal Dashboard</div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter card">
          <h2>Stay Updated</h2>
          <p>Subscribe for events, new books, and announcements.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="btn primary-btn">Subscribe</button>
          </div>
        </section>

        {/* Support Section */}
        <section className="support card">
          <h2>Need Help?</h2>
          <div className="support-cards">
            <Link to="/help" className="card help-card">
              <h3>Help Center</h3>
              <p>Find answers to frequently asked questions.</p>
            </Link>
            <Link to="/contact" className="card contact-card">
              <h3>Contact Us</h3>
              <p>Reach out to our team for assistance.</p>
              <p>Phone: 0748522183</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Chatbot on Right */}
      <div className={`chatbot-container ${isChatOpen ? "open" : ""}`}>
        <button className="chat-toggle-btn" onClick={toggleChat}>💬</button>
        {isChatOpen && (
          <div className="chat-window blue-theme">
            <div className="chat-header">
              <h4>Library Chatbot</h4>
              <button className="close-btn" onClick={toggleChat}>×</button>
            </div>
            <div className="chat-body" ref={messagesRef}>
              {messages.map((m) => (
                <div key={m.id} className={`chat-msg ${m.sender}`}>
                  {m.text}
                </div>
              ))}
              {isTyping && <div className="chat-msg bot typing">Librarian is typing...</div>}
            </div>
            <div className="chat-input-section">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              />
              <button className="send-btn" onClick={handleSend}>Send</button>
              <button className="mic-btn" onClick={toggleListening}>{isListening ? "🎙️" : "🕵️‍♀️"}</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
