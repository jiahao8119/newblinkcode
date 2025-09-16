import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Star,
  User,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Custom Websites",
    description:
      "Beautiful, responsive websites tailored to your brand and business needs.",
    image: "/images/services/webdev.png", // example image path
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that engage your users.",
    image: "/images/services/webdev2.png",
  },
  {
    title: "Web Applications",
    description:
      "Powerful web applications built with modern technologies and frameworks.",
    image: "/images/services/webdev3.png",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    text: "DevStudio transformed our vision into a stunning website that perfectly represents our brand.",
    rating: 5,
    image: "/src/public/images/bg.png", // add your image path
  },
  {
    name: "Michael Chen",
    company: "StartupXYZ",
    text: "The team delivered an exceptional mobile app that exceeded all our expectations.",
    rating: 5,
    image: "/src/public/images/bg.png",
  },
  {
    name: "Emily Rodriguez",
    company: "Digital Solutions",
    text: "Professional, efficient, and innovative. DevStudio is our go-to development partner.",
    rating: 5,
    image: "/src/public/images/bg.png",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-32 sm:py-40 lg:py-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[32rem]">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-tight drop-shadow-lg">
              Building Digital
              <span className="block bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
              We create exceptional websites, mobile apps, and digital solutions
              that help businesses thrive in the modern digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-white text-black text-lg font-semibold rounded-xl hover:bg-gray-200 transition-colors group shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-10 py-4 border-2 border-gray-600 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative design to deliver
              solutions that drive results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-black" />,
                title: "Expert Team",
                description:
                  "10+ years of experience in web development and design.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-black" />,
                title: "Fast Delivery",
                description:
                  "Quick turnaround times without compromising on quality.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-black" />,
                title: "24/7 Support",
                description:
                  "Ongoing support and maintenance for all our projects.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  {/* 🔹 Service Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>

          <div className="relative h-80">
            {" "}
            {/* increased height for image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md"
              >
                {/* Image */}
                {/* Person Icon instead of Image */}
<User className="w-24 h-24 text-gray-400 mb-4 border-2 border-gray-300 rounded-full p-4 bg-gray-100" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 text-lg max-w-2xl">
                  "{testimonials[index].text}"
                </p>

                {/* Name + Company */}
                <div>
                  <p className="font-semibold text-black">
                    {testimonials[index].name}
                  </p>
                  <p className="text-gray-600">{testimonials[index].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gotham">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Chat with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life and
            drive your business forward.
          </p>

          <a
            href="https://wa.me/60113094116?text=Hello%2C%20I%27m%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors group"
          >
            Chat with Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
