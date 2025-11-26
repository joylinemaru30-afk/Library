import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Stylings/homepage.css";
import "./Stylings/Chatbot.css";
import axios from "axios";

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const messagesRef = useRef(null);

  const [products, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const img_url = "https://joykosgei.pythonanywhere.com/static/images/";

  const fetchproducts = async () => {
    setloading(true);
    try {
      const response = await axios.get(
        "https://joykosgei.pythonanywhere.com/api/getproducts"
      );
      setproduct(response.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror("There was an error encountered... Please try again later.");
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const mkId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const getBotResponse = (text) => {
    text = text.toLowerCase();
    if (/hello|hi|hey/.test(text)) return "Hello! How can I help you today?";
    if (/hours|open|opening/.test(text))
      return "We are open Mon–Sat, 8:00 AM — 6:00 PM.";
    if (/location|where|address/.test(text))
      return "We're at City Center, Building 3, Main Street.";
    if (/contact|phone|email/.test(text))
      return "Call us at 0748522183 or email citylibrary@example.com.";
    if (/borrow|loan/.test(text))
      return "You can borrow books from the Borrow Book page or ask me about a title!";
    if (/event|workshop|program/.test(text))
      return "Check the latest events on the Events page.";
    if (/membership|card|register/.test(text))
      return "You can register for a library card at the Help Center.";
    return "Thanks for your message! A librarian will respond soon.";
  };

  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight + 200;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const SpeechRec =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRec) return;

    const recog = new SpeechRec();
    recog.lang = "en-US";
    recog.interimResults = false;

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
            text: "Hello! I'm your library assistant. Ask me anything about hours, books, or events!",
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
      const botText = getBotResponse(userMsg.text);
      const botMsg = { id: mkId(), sender: "bot", text: botText };
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

      {/* Loading / Error */}
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {loading && <p>Loading products...</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <div className="col-md-4"></div>
      </div>

      {/* Hero Section */}
      <div className="content-wrapper">
        <section className="hero card">
          <h1>Welcome to City Library</h1>
          <p>Your hub for books, events, and digital resources!</p>
        </section>
      </div>

      {/* Product Section */}
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={product.id || index}>
            <div className="card shadow h-100">

              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top product_img mt-3"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{product.product_name}</h5>
                <p className="text-dark">
                  {product.product_description.slice(0, 50)}...
                </p>
                <b className="text-warning">{product.product_cost}</b>
                <br />

                <button
                  className="btn btn-success mt-2"
                  onClick={() =>
                    navigate("/mpesapayment", { state: { product } })
                  }
                >
                  Buy now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Chatbot Button */}
      <button className="chat-toggle-btn" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">

          <div className="chat-header">
            <span>Library Assistant</span>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-messages" ref={messagesRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble ${
                  msg.sender === "user" ? "user-msg" : "bot-msg"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">Assistant is typing...</div>
            )}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button className="mic-btn" onClick={toggleListening}>
              {isListening ? "🎤..." : "🎤"}
            </button>

            <button className="send-btn" onClick={handleSend}>➤</button>
          </div>

        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
