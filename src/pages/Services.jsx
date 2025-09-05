import React from 'react';
import { Globe, Smartphone, ShoppingCart, Search, Code, Palette, Server, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: 'Custom Website Development',
      description: 'Tailored websites built with modern technologies, responsive design, and optimized performance.',
      features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Performance Optimization'],
      price: 'Starting at $2,500',
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payment processing, inventory management, and analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics Dashboard'],
      price: 'Starting at $5,000',
    },
    {
      icon: <Smartphone className="h-12 w-12 text-white" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Deployment', 'Push Notifications'],
      price: 'Starting at $8,000',
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: 'Web Applications',
      description: 'Complex web applications with advanced functionality and database integration.',
      features: ['Custom Functionality', 'Database Design', 'API Development', 'User Management'],
      price: 'Starting at $10,000',
    },
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: 'SEO & Digital Marketing',
      description: 'Improve your online visibility and drive more traffic to your website.',
      features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Analytics Reporting'],
      price: 'Starting at $800/month',
    },
    {
      icon: <Palette className="h-12 w-12 text-white" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that enhance user experience and conversion rates.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500',
    },
    {
      icon: <Server className="h-12 w-12 text-white" />,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting solutions with ongoing maintenance and support services.',
      features: ['99.9% Uptime', 'Regular Backups', 'Security Updates', '24/7 Support'],
      price: 'Starting at $100/month',
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to protect your digital assets.',
      features: ['Vulnerability Assessment', 'Security Recommendations', 'Penetration Testing', 'Compliance Review'],
      price: 'Starting at $2,000',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the user experience.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our developers build your solution using best practices and thorough testing.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support and maintenance.',
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
            We offer comprehensive digital solutions to help your business succeed 
            in today's competitive online landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-black p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <div className="text-gray-300 font-medium">{service.price}</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered 
              on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to build 
              scalable, secure, and high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP',
              'MySQL', 'MongoDB', 'AWS', 'Docker', 'TypeScript', 'Next.js'
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="text-white font-medium">{tech}</div>
                </div>
              </div>
            ))}
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
            Let's discuss your project and how we can help bring your vision to life.
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