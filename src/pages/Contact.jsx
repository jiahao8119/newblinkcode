import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      service: "",
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Email",
      details: "hello@devstudio.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Phone",
      details: "+60124277286",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Address",
      details: "Petaling Jaya, Selangor, Malaysia",
      description: "Our main office location",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Business Hours",
      details: "Mon - Fri: 8am - 6pm",
      description: "Weekend support available",
    },
  ];

  const services = [
    "Custom Website Development",
    "E-commerce Solutions",
    "Mobile App Development",
    "Web Applications",
    "SEO & Digital Marketing",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* 🌈 Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/40">
              <h2 className="text-3xl font-bold text-[#4E56C0] mb-6">
                Drop Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5DE0] focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5DE0] focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5DE0] focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5DE0] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5DE0] focus:border-transparent transition-colors"
                    placeholder="Tell us more about your idea and we’ll take it from there..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4E56C0] to-[#9B5DE0] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center group shadow-md"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#4E56C0] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-gradient-to-r from-[#4E56C0] to-[#9B5DE0] p-6 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#4E56C0] mb-4">
                  Find Us
                </h3>
                <div className="rounded-lg overflow-hidden h-64 shadow-lg border border-white/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.212324747962!2d101.6932078!3d3.1390036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362f8c23c3b7%3A0x6b8f1a3c6cf9f5ef!2sKuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1694444444444!5m2!1sen!2smy"
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-7xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Most websites take 4–8 weeks, while larger apps may take 3–6
                months depending on scope and complexity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer maintenance packages and continuous support to
                keep your product running smoothly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                What's included in your pricing?
              </h3>
              <p className="text-gray-600">
                Design, development, testing, and deployment. We tailor each
                quote to fit your goals and budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Do you work with existing websites?
              </h3>
              <p className="text-gray-600">
                Absolutely! We can redesign or upgrade your existing site to
                modern standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Get in touch for a free consultation.
          </p>
          <button className="px-8 py-3 bg-white text-[#4E56C0] text-2xl font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Schedule Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
