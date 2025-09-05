import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: 'Custom Websites',
      description: 'Beautiful, responsive websites tailored to your brand and business needs.',
    },
    {
      icon: <Smartphone className="h-12 w-12 text-white" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage your users.',
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: 'Web Applications',
      description: 'Powerful web applications built with modern technologies and frameworks.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Innovations Inc.',
      text: 'DevStudio transformed our vision into a stunning website that perfectly represents our brand.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      text: 'The team delivered an exceptional mobile app that exceeded all our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Solutions',
      text: 'Professional, efficient, and innovative. DevStudio is our go-to development partner.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create exceptional websites, mobile apps, and digital solutions that help 
              businesses thrive in the modern digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
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
              Why Choose DevStudio?
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
                title: 'Expert Team',
                description: '10+ years of experience in web development and design.',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-black" />,
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality.',
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-black" />,
                title: '24/7 Support',
                description: 'Ongoing support and maintenance for all our projects.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
                <div className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life 
            and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;