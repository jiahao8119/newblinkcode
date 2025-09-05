import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'TechCorp Website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern corporate website with advanced features and CMS integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-Shop Platform',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-featured e-commerce platform with payment integration and admin panel.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'FitTracker Mobile App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cross-platform fitness tracking app with social features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'CRM Dashboard',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive CRM system with advanced analytics and reporting.',
      technologies: ['Vue.js', 'Express', 'MySQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Website',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful restaurant website with online ordering and reservation system.',
      technologies: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Learning Platform',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Online learning platform with video streaming and progress tracking.',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 7,
      title: 'Marketplace App',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile marketplace app connecting buyers and sellers.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'PayPal API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 8,
      title: 'Fashion Store',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury fashion e-commerce site with advanced filtering and AR try-on.',
      technologies: ['Next.js', 'Shopify', 'TypeScript', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Website', 'E-commerce', 'Mobile App', 'Web App'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-black text-white text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-black text-black text-center py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our projects consistently deliver measurable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
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
            Let's create something amazing together. Contact us to discuss your 
            project requirements and get a free consultation.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;