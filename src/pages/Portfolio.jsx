import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Beauty site",
      category: "Landing Page",
      image: "/images/beautylogo.png",
      description:
        "Elegant beauty brand site with modern design and smooth user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://www.anggunskin.com/",
    },
    {
      id: 2,
      title: "Lan Zhou Cuisine",
      category: "Landing Page",
      image: "/images/lanzhou.png",
      description:
        "Landing page for a noodle restaurant showcasing menu and story.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
      liveUrl: "https://lanzhou-iota.vercel.app/",
    },
    {
      id: 3,
      title: "Car Detailing Products",
      category: "E-commerce",
      image: "/images/dzimo.png",
      description:
        "Automotive detailing website with services, booking, and promos.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "https://www.dzimo.store/",
    },
    {
      id: 4,
      title: "SpeakUp ",
      category: "Landing Page",
      image: "/images/eduproject.png",
      description:
        "Informative education site for courses, programs, and enrollment.",
      technologies: ["Vue.js", "Express", "MySQL", "Chart.js"],
      liveUrl: "https://eduproject-mu.vercel.app/",
    },
    {
      id: 5,
      title: "Unix Moulding Engineering",
      category: "Website",
      image: "/images/unix.png",
      description:
        "Industrial company site highlighting moulding and CNC engineering services.",
      technologies: ["React", "Node.js", "Stripe", "Tailwind CSS"],
      liveUrl: "https://www.unixmouldengineering.com/",
    },
  ];

  const categories = ["All", "Website", "E-commerce", "Mobile App", "Web App"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <> 
      <SEO 
        title="Portfolio | BlinkCode - Our Web Development Projects"
        description="Explore BlinkCode's portfolio of successful web development projects including e-commerce sites, mobile apps, and custom websites. See our work and client success stories."
        keywords="portfolio, web development projects, e-commerce websites, mobile apps, client work, BlinkCode portfolio"
        url="/portfolio"
      />
      <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-[#4E56C0] to-[#9B5DE0] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                More projects coming soon!
              </h3>
              <p className="text-gray-500">
                We’re working on exciting new projects. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white p-2 rounded-full transition"
                        >
                          <ExternalLink className="h-8 w-8" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black">
                        {project.title}
                      </h3>
                      <span className="bg-[#9B5DE0]/20 text-[#4E56C0] text-sm px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                      href={project.liveUrl}
                      className="block w-full text-center bg-gradient-to-r from-[#4E56C0] to-[#9B5DE0] text-white py-2 rounded-lg hover:opacity-90 transition"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 📄 PDF Viewer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Company Profile & Case Study
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Check out our company profile and explore how we approach each
            project with innovation, strategy, and results-driven execution.
          </p>

          <div className="w-full mx-auto rounded-xl overflow-hidden shadow-2xl bg-white/90">
            <iframe
              src="/portfolio/blinkcodeport.pdf"
              width="100%"
              height="700"
              className="border-none"
              title="Company Profile"
            />
          </div>

          <a
            href="/portfolio/blinkcodeport.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-[#9B5DE0] font-semibold hover:underline"
          >
            Open Full PDF in New Tab →
          </a>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Contact us to discuss your
            project requirements and get a free consultation.
          </p>
          <button
            className="px-8 py-3 bg-white text-[#4E56C0] md:text-2xl font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
            onClick={() => navigate("/contact")}
          >
            Start Your Project
          </button>
        </div>
      </section>
      </div>
    </>
  );
};

export default Portfolio;
