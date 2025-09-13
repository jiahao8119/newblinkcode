import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="fixed w-full top-0 z-50 rounded-3xl"
      style={{ fontFamily: "Gotham, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center h-16
          rounded-3xl px-6 mt-4
          bg-white/50 backdrop-blur-xl shadow-lg border border-white/20"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            style={{ fontFamily: "Gotham, sans-serif" }}
          >
            <Code className="h-8 w-8 text-black group-hover:text-gray-700 transition-colors" />
            <span className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
              BlinkCode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-2"
            style={{ fontFamily: "Gotham, sans-serif" }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition
                  ${
                    isActive(item.path)
                      ? "bg-black/70 text-white"
                      : "text-gray-800 hover:text-black hover:bg-white/40"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-black hover:bg-white/40 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div
              className="px-2 pt-2 pb-3 space-y-1 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-xl transition
                    ${
                      isActive(item.path)
                        ? "bg-black/60 text-white"
                        : "text-gray-800 hover:text-black hover:bg-white/40"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
