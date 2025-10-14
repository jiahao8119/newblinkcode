import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade+blur out animation
      setTimeout(() => setLoading(false), 700); // wait until fade-out completes
    }, 1500); // show loader for 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-700 text-white transition-all duration-700 ease-out ${
          fadeOut ? "opacity-0 blur-md" : "opacity-100 blur-0"
        }`}
      >
        <div className="text-center">
          <img
            src="/images/blinkcode.jpg"
            alt="Blinkcode"
            className="w-48 h-48 mx-auto mb-4 animate-pulse rounded-3xl shadow-2xl"
          />
          <p className="text-3xl font-mono text-gray-200">
            {"Just A moment...".split("").map((char, i) => (
              <span
                key={i}
                className="jump inline-block"
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
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col opacity-0 blur-md animate-fadeInBlur">
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

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/60124277286?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20websites%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="sticky w-12 h-12 bottom-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
