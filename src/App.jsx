import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <img
            src="/images/blinkcode.jpg"
            alt="Blinkcode"
            className="w-48 h-48 mx-auto mb-4 animate-pulse rounded-3xl shadow-lg"
          />
          <p className="text-xl text-gray-600 font-mono flex justify-center space-x-1">
            {"Loading...".split("").map((char, i) => (
              <span
                key={i}
                className="jump"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <a
          href="https://wa.me/601133094116?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20websites%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        >
          <FaWhatsapp className="w-6 h-6" />
          {/* Or use: <MessageCircle className="w-6 h-6" /> */}
        </a>
      </div>
    </Router>
  );
}

export default App;
