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
  CreditCard,
  Layers,
  MessageCircle,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

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
    <>
      <SEO
        title="BlinkCode | Modern Web Development & Digital Solutions"
        description="Transform your business with BlinkCode's expert web development, mobile apps, and digital solutions. Specialized in custom systems for Malaysian businesses."
        keywords="web development Malaysia, mobile apps, digital agency, custom websites, e-commerce, React development, BlinkCode"
        url="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does BlinkCode offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BlinkCode specializes in custom web development, mobile app creation, e-commerce solutions, and digital transformation for businesses in Malaysia and beyond."
              }
            },
            {
              "@type": "Question",
              "name": "Why should I choose a custom system over WordPress?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custom systems are built specifically for your business workflow, offering better performance, security, and scalability compared to template-based solutions like WordPress."
              }
            },
            {
              "@type": "Question",
              "name": "Do you support Malaysian payment gateways?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we integrate with popular Malaysian payment methods including bank transfers, Touch 'n Go, GrabPay, and more."
              }
            }
          ]
        }}
      />
      <div className="min-h-screen">
        <section className="mt-[-90px] relative overflow-hidden lg:py-52 text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/banner.png"
              alt="Earth Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-500/40 to-purple-500/30 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-pink-500/40 to-orange-400/30 rounded-full blur-3xl opacity-40 animate-pulse" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center min-h-[24rem] sm:min-h-[32rem] text-center">
            <h1 className="text-[38px] sm:text-[60px] md:text-[96px] font-extrabold text-black mb-6 sm:mb-10 leading-tight drop-shadow-lg px-4">
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="text-base sm:text-2xl md:text-3xl text-black mb-10 sm:mb-12 max-w-2xl sm:max-w-4xl mx-auto px-4">
              We design, build, and launch digital experiences that empower
              brands and captivate audiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-base sm:text-lg font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 border-2 border-white text-black text-base sm:text-lg font-semibold rounded-xl hover:bg-white/10 transition-all shadow-lg w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Running Your Business Like This?
            </h2>

            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Most online sellers in Malaysia start on WhatsApp, Instagram &
              Facebook — but chaos comes fast when orders grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {/* Pain */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-red-500">
                  The Daily Struggle
                </h3>

                <ul className="space-y-4 text-gray-700">
                  <li>❌ Customers DM non-stop</li>
                  <li>❌ Orders tracked in WhatsApp or notebook</li>
                  <li>❌ Manual bank transfer checking</li>
                  <li>❌ Grab / Lalamove booked one by one</li>
                  <li>❌ Missed orders, wrong deliveries, stress</li>
                </ul>
              </div>

              {/* Solution intro */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  This Works… Until You Have 50–100 Orders a Day
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  WhatsApp is not a system. Excel is not a system. Hiring more
                  staff is expensive.
                </p>

                <p className="mt-4 font-semibold text-black">
                  That’s why growing businesses switch to a custom system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Understand Your Workflow",
                  desc: "We study how you take orders, receive payment, and deliver today.",
                },
                {
                  step: "02",
                  title: "Build Your Custom System",
                  desc: "We design & develop a dashboard tailored exactly to your business.",
                },
                {
                  step: "03",
                  title: "Launch & Scale",
                  desc: "You manage 10, 100 or 1000 orders without chaos.",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-left"
                >
                  <span className="text-4xl font-bold text-indigo-500">
                    {s.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with creative design to
                deliver solutions that drive results for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Layers,
                  color: "from-indigo-500 to-purple-500",
                  title: "Custom-Built Systems",
                  description:
                    "Built from scratch to match how your business actually works — not forced into templates.",
                },
                {
                  icon: MessageCircle,
                  color: "from-emerald-500 to-teal-500",
                  title: "Made for WhatsApp Sellers",
                  description:
                    "Designed for Instagram, Facebook & WhatsApp businesses that sell daily via chat.",
                },
                {
                  icon: TrendingUp,
                  color: "from-orange-500 to-pink-500",
                  title: "Scales as You Grow",
                  description:
                    "From 10 orders to 1000+ orders without chaos, stress, or hiring more staff.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all cursor-default"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-3 text-center">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: MessageCircle,
                  color: "from-indigo-500 to-purple-500",
                  title: "From WhatsApp Chaos to One Dashboard",
                  description:
                    "Orders from Instagram, Facebook & WhatsApp auto-organised in one dashboard. No screenshots, no missed orders.",
                },
                {
                  icon: CreditCard,
                  color: "from-emerald-500 to-teal-500",
                  title: "Built for Malaysian Businesses",
                  description:
                    "Supports bank transfer, Touch ’n Go, GrabPay, Lalamove & Grab — exactly how Malaysians sell.",
                },
                {
                  icon: TrendingUp,
                  color: "from-orange-500 to-pink-500",
                  title: "Scales from 10 to 1000 Orders",
                  description:
                    "Whether 10 customers or 1000, the system stays fast, stable, and stress-free without extra staff.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all cursor-default"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-3 text-center">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
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
                From concept to launch, we provide comprehensive digital
                solutions tailored to your specific needs.
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
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
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

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Built for Real Business Problems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don’t just build websites — we build systems that run your
                business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Selling on Instagram, Facebook & WhatsApp?
                </h3>

                <ul className="space-y-4">
                  {[
                    { icon: <Smartphone />, text: "Customers DM one by one" },
                    { icon: <User />, text: "Manual bank transfer checking" },
                    {
                      icon: <Code />,
                      text: "Orders tracked in WhatsApp / notebook",
                    },
                    { icon: <Globe />, text: "Delivery booked manually" },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-gray-700"
                    >
                      <div className="p-3 bg-red-50 text-red-500 rounded-lg">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-black mb-6">
                  BlinkCode System Solves This
                </h3>

                <ul className="space-y-4 text-gray-700">
                  <li>✅ Orders auto-recorded into dashboard</li>
                  <li>✅ Payment status tracked automatically</li>
                  <li>✅ One-click delivery booking</li>
                  <li>✅ Real-time sales & order overview</li>
                  <li>✅ Manage 100–1000 orders without stress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                Why Not Just Use WordPress?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Templates are okay — until your business actually grows.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {/* WordPress Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-10 shadow-md border border-red-100 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-red-100 text-red-500 rounded-xl">
                    <XCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">
                    WordPress Templates
                  </h3>
                </div>

                {/* List */}
                <ul className="space-y-5 text-gray-600 text-lg">
                  <li className="flex items-start gap-3">
                    <span>❌</span>
                    <span>One-size-fits-all layout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>❌</span>
                    <span>Too many plugins = slow & risky</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>❌</span>
                    <span>Hard to customise real workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>❌</span>
                    <span>Breaks when business scales</span>
                  </li>
                </ul>
              </motion.div>

              {/* BlinkCode Card – POWER MOVE */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-10 shadow-2xl border-2 border-emerald-300 flex flex-col"
              >
                {/* Glow */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-300/30 rounded-full blur-2xl" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-emerald-100 text-emerald-600 rounded-xl">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black">
                    BlinkCode Custom System
                  </h3>
                </div>

                {/* List */}
                <ul className="space-y-5 text-gray-700 text-lg relative z-10">
                  <li className="flex items-start gap-3">
                    <span>✅</span>
                    <span>Built exactly for your workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✅</span>
                    <span>Faster, cleaner & more secure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✅</span>
                    <span>No plugin dependency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>✅</span>
                    <span>Scales smoothly as you grow</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

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
                    <p className="text-gray-600">
                      {testimonials[index].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What services does BlinkCode offer?",
                  a: "BlinkCode specializes in custom web development, mobile app creation, e-commerce solutions, and digital transformation for businesses in Malaysia and beyond."
                },
                {
                  q: "Why should I choose a custom system over WordPress?",
                  a: "Custom systems are built specifically for your business workflow, offering better performance, security, and scalability compared to template-based solutions like WordPress."
                },
                {
                  q: "Do you support Malaysian payment gateways?",
                  a: "Yes, we integrate with popular Malaysian payment methods including bank transfers, Touch 'n Go, GrabPay, and more."
                },
                {
                  q: "How long does a typical project take?",
                  a: "A standard website typically takes 2-4 weeks, while complex web applications or mobile apps may take 2-3 months depending on requirements."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-black mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
              Let's discuss how we can help bring your digital vision to life
              and drive your business forward.
            </p>

            <a
              href="https://wa.me/60175730388?text=Hi,%20I%27m%20interested%20in%20your%20services!"
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
    </>
  );
};

export default Home;
