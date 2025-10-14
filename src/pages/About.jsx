import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import SEO from "../components/SEO";


const About = () => {
  const team = [
    { name: 'Ryan', role: 'CEO & Founder', image: '/images/nfthead/nft1.png', description: 'Visionary leader with 15+ years in tech entrepreneurship.' },
    { name: 'Jh', role: 'CTO', image: '/images/nfthead/nft2.png', description: 'Full-stack expert specializing in modern web technologies.' },
    { name: 'ZF', role: 'Lead Designer', image: '/images/nfthead/nft3.png', description: 'Creative designer passionate about user experience.' },
    { name: 'Dustin', role: 'Senior Developer', image: '/images/nfthead/nft4.png', description: 'Backend specialist with expertise in scalable solutions.' },
  ];

  const values = [
    { icon: <Target className="h-8 w-8 text-white" />, title: 'Innovation', description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.' },
    { icon: <Users className="h-8 w-8 text-white" />, title: 'Collaboration', description: 'We believe in the power of teamwork, both within our team and with our clients, to achieve extraordinary results.' },
    { icon: <Award className="h-8 w-8 text-white" />, title: 'Excellence', description: 'We are committed to delivering the highest quality work that exceeds expectations and drives success.' },
    { icon: <Heart className="h-8 w-8 text-white" />, title: 'Passion', description: 'We love what we do, and this passion drives us to create exceptional digital experiences for every client.' },
  ];

  return (
    <>
    <SEO 
      title="About Us | BlinkCode"
      description="Learn about BlinkCode's team and mission..."
      url="/about"
    />
    <div className="min-h-screen pt-16">

      {/* 🌈 Hero Section - Recolored */}
      <section className="relative py-20 bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        {/* Soft glowing blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            About DevStudio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and digital strategists 
            dedicated to creating exceptional web experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 text-justify sm:text-center lg:text-justify">
                Founded in 2024, BlinkCodeDevStudio began as a small team of passionate developers
                who believed that exceptional digital experiences could transform businesses.
                What started as a two-person team startup has grown into a leading web
                development agency serving clients worldwide.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 text-justify sm:text-center lg:text-justify">
                Over the years, we've had the privilege of working with startups,
                established businesses, and enterprise clients across various industries.
                Our commitment to innovation, quality, and client satisfaction has been
                the driving force behind our growth and success.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#4E56C0]">100+</div>
                  <div className="text-gray-600 text-base sm:text-lg">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#9B5DE0]">90+</div>
                  <div className="text-gray-600 text-base sm:text-lg">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#D78FEE]">5+</div>
                  <div className="text-gray-600 text-base sm:text-lg">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/services/meetingteam.webp"
                alt="Team working together"
                className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full object-cover"
              />
            </div>
          </div>
        </div>
        </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-bold mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] p-8 rounded-lg mb-6 shadow-lg">
                <Target className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 text-xl">
                  To empower businesses through innovative digital solutions that 
                  enhance user experiences, drive growth, and create lasting value 
                  in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] p-8 rounded-lg mb-6 shadow-lg">
                <Award className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 text-xl">
                  To be the leading web development agency known for delivering 
                  exceptional digital experiences that transform how businesses 
                  connect with their audiences and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together expertise 
              in development, design, and digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌸 Core Values - Recolored */}
      <section className="relative py-20 bg-gradient-to-br from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] text-white overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FDCFFA]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D78FEE]/40 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our 
              clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">{value.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};


export default About;
