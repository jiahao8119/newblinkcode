import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black pl-24 pr-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1 text-xl">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-12 w-12 text-black" />
              <span className="text-4xl font-bold">BlinkCode</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md text-left text-xl">
              We create exceptional digital experiences through innovative web
              development, helping businesses thrive in the digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-16 text-lg">
            <h3 className="text-2xl font-semibold mb-4 underline">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xl">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-black hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 underline">
              Contact Info
            </h3>
            <div className="space-y-3 text-xl">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600 text-xl">hej@blinkcode.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600 text-xl">60124277286</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600 text-xl">Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Map in its own column */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=PJ%20SUBANG%20KL&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 BlinkCodeDev. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
