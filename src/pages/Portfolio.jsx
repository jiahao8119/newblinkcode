import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const projects = [
  {
    id: 1,
    title: 'Beauty Website',
    category: 'Landing Page',
    image: '/images/beautylogo.png',
    description: 'Elegant beauty brand site with modern design and smooth user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Lan Zhou mee',
    category: 'Landing Page',
    image: '/images/lanzhou.png',
    description: 'Landing page for a noodle restaurant showcasing menu and story.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Car detailing Website',
    category: 'E-commerce',
    image: '/images/dzimo.png',
    description: 'Automotive detailing website with services, booking, and promos.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Education Website',
    category: 'Landing Page',
    image: '/images/eduproject.png',
    description: 'Informative education site for courses, programs, and enrollment.',
    technologies: ['Vue.js', 'Express', 'MySQL', 'Chart.js'],
    liveUrl: '#',
  },
  {
    id: 5,
    title: 'Unix Moulding Engineering',
    category: 'Website',
    image: '/images/unix.png',
    description: 'Industrial company site highlighting moulding and CNC engineering services.',
    technologies: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">More projects coming soon!</h3>
              <p className="text-gray-500">We’re working on exciting new projects. Stay tuned!</p>
            </div>
          ) : (
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
                        className="bg-blue-400 text-white text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
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
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your 
            project requirements and get a free consultation.
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
            onClick={() => navigate("/contact")}>
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;