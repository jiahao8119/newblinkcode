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
    text: "BlinkCodeDevStudio transformed our vision into a stunning website that perfectly represents our brand.",
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
    text: "Professional, efficient, and innovative. BlinkCodeDevStudio is our go-to development partner.",
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
      <section className="relative overflow-hidden py-32 sm:py-40 lg:py-52 bg-[#0f172a] text-white">
        {/* 🌍 Rotating Earth Layer */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <img
            src="/images/earth.jpg"
            alt="Rotating Earth"
            className="w-[2000px] h-[3000px] object-cover animate-spin-slow"
          />
        </div>

        {/* 🌌 Aurora Layer */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora absolute w-[200%] h-[200%] top-[-50%] left-[-50%]" />
        </div>

        {/* 🫧 Gradient Blobs */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/40 to-purple-500/30 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/40 to-orange-400/30 rounded-full blur-3xl opacity-40 animate-pulse" />
        </div>

        {/* 🌟 Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[32rem]">
          <div className="text-center">
            <div className="text-[72px] md:text-[96px] font-extrabold text-white mb-10 leading-tight drop-shadow-lg">
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </div>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto">
              We design, build, and launch digital experiences that empower
              brands and captivate audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-10 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all shadow-lg"
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
      <section className="py-20 bg-gradient-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] relative overflow-hidden">
        {/* Soft overlay for text readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Ready to Chat with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life and
            drive your business forward.
          </p>

          <a
            href="https://wa.me/60113094116?text=Hello%2C%20I%27m%20interested%20in%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-[#4E56C0] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Chat with Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Animated background glow */}
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 -right-20 w-96 h-96 bg-[#9B5DE0]/40 rounded-full blur-3xl animate-pulse"></div>
      </section>
    </div>
  );
};

export default Home;
