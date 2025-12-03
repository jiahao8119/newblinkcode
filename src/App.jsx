// No loading logic required anymore
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
  // No loading-related effects

  return (
    <HelmetProvider>
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

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/60175730388?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20websites%20services."
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
