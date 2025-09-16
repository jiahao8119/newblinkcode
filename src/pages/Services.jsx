import {
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  Code,
  Palette,
  Server,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

const techs = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: "Custom Website Development",
      description:
        "Tailored websites built with modern technologies, responsive design, and optimized performance.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management",
        "Performance Optimization",
      ],
      price: "Starting at RM 1,199",
      image: "/images/services/webdev.png",
      hot: true, // 🔥 mark as hot selling
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment processing, inventory management, and analytics.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
        "Analytics Dashboard",
      ],
      price: "Starting at RM 5,999",
      image: "/images/services/webdev2.png",
      comingSoon: false, // 🚧 mark as coming soon
      hot: true,
    },
    {
      icon: <Smartphone className="h-12 w-12 text-white" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "App Store Deployment",
        "Push Notifications",
      ],
      price: "Starting at RM 7,999",
      image: "/images/services/webdev3.png",
      comingSoon: true,
      
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: "Web Applications",
      description:
        "Complex web applications with advanced functionality and database integration.",
      features: [
        "Custom Functionality",
        "Database Design",
        "API Development",
        "User Management",
      ],
      price: "Starting at RM 10,000",
      image: "/images/services/design.png",
      hot: true, // also hot
      comingSoon: true,
    },
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: "SEO & Digital Marketing",
      description:
        "Improve your online visibility and drive more traffic to your website.",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Content Strategy",
        "Analytics Reporting",
      ],
      price: "Starting at RM 500 / month",
      image: "/images/services/webdev.png",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and prototypes to visualize the user experience.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Our developers build your solution using best practices and thorough testing.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We launch your project and provide ongoing support and maintenance.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business
            succeed in today's competitive online landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions
              tailored to your specific needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                {service.image && (
                  <div className="mb-4 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-60 object-cover rounded-lg"
                    />
                    {/* 🔥 Hot Selling badge */}
                    {service.hot && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        🔥 Hot Selling
                      </span>
                    )}
                  </div>
                )}

                {/* Icon + Title */}
                <div className="mb-4 text-black">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h3>

                {/* Price */}
                <div className="text-gray-700 font-medium mb-4">
                  {service.price}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {service.comingSoon ? (
                  <button className="mt-auto w-full border border-gray-400 text-gray-400 px-6 py-3 rounded-lg cursor-not-allowed">
                    Coming Soon
                  </button>
                ) : (
                  <button className="mt-auto w-full border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Process Section with Dynamic Progress Bar */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is
              delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full mb-16 overflow-hidden">
            {/* Filled progress */}
            <motion.div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/* Shine overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="shine absolute top-0 left-[-50%] h-full w-1/3 bg-white/40 skew-x-12"></div>
              </div>
            </motion.div>

            {/* 🚀 Rocket wrapper full width */}
            <div className="absolute -top-10 left-0 w-full h-10 pointer-events-none">
              <motion.div
                className="absolute"
                animate={{ x: ["0%", "100%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Rocket className="h-8 w-8 text-pink-500 drop-shadow-lg" />
              </motion.div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {process.map((item, index) => {
              const currentStep = 3; // <-- dynamically set this from props/state
              const isCompleted = index < currentStep;

              return (
                <div key={index} className="text-center relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-4 text-xl font-bold transition-all duration-500
                      ${
                        isCompleted
                          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white border-transparent"
                          : "border-black text-black"
                      }`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Compare Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See which package best fits your business needs.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse shadow-lg rounded-3xl overflow-hidden bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-5 text-left text-gray-900 font-semibold text-lg">
                    Features
                  </th>
                  <th className="p-5">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-gray-900">Starter</span>
                      <span className="text-sm text-gray-500">RM 1,199+</span>
                    </div>
                  </th>
                  <th className="p-5 bg-gray-900 text-white rounded-t-lg">
                    <div className="flex flex-col items-center">
                      <span className="font-bold">Business</span>
                      <span className="text-sm opacity-80">RM 3,999+</span>
                    </div>
                    <span className="mt-2 inline-block text-xs font-semibold px-2 py-1 bg-yellow-400 text-gray-900 rounded">
                      Most Popular
                    </span>
                  </th>
                  <th className="p-5">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-gray-900">
                        Enterprise
                      </span>
                      <span className="text-sm text-gray-500">RM 7,999+</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">Pages</td>
                  <td className="p-4 text-center font-bold">5</td>
                  <td className="p-4 text-center font-bold">15</td>
                  <td className="p-4 text-center font-bold">30+</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">Revisions</td>
                  <td className="p-4 text-center font-bold">3</td>
                  <td className="p-4 text-center font-bold">10</td>
                  <td className="p-4 text-center font-bold">unlimited</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">
                    SEO Optimization
                  </td>
                  <td className="p-4 text-center font-bold">Basic</td>
                  <td className="p-4 text-center font-bold">Advanced</td>
                  <td className="p-4 text-center font-bold">Enterprise</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">E-commerce</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">Mobile App</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">Custom API</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">
                    Free 1 year Hosting
                  </td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">
                    Free 1 year Domain
                  </td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">SSL protection</td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 text-left font-medium">
                    Support & Maintenance
                  </td>
                  <td className="p-4 text-center font-bold">3 months</td>
                  <td className="p-4 text-center font-bold">6 months</td>
                  <td className="p-4 text-center font-bold">12 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to build
              scalable, secure, and high-performance solutions.
            </p>
          </div>

          {/* Infinite Slideshow */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: 30, // adjust slower/faster
                repeat: Infinity,
              }}
            >
              {[...techs, ...techs].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center min-w-[120px]"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Get a Quote
            </button>
            <button className="px-8 py-3 border border-black text-black font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
