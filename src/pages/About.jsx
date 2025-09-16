import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Ryan',
      role: 'CEO & Founder',
      image: '/images/nfthead/nft1.png',
      description: 'Visionary leader with 15+ years in tech entrepreneurship.',
    },
    {
      name: 'Jh',
      role: 'CTO',
      image: '/images/nfthead/nft2.png',
      description: 'Full-stack expert specializing in modern web technologies.',
    },
    {
      name: 'ZF',
      role: 'Lead Designer',
      image: '/images/nfthead/nft3.png',
      description: 'Creative designer passionate about user experience.',
    },
    {
      name: 'Dustin',
      role: 'Senior Developer',
      image: '/images/nfthead/nft4.png',
      description: 'Backend specialist with expertise in scalable solutions.',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both within our team and with our clients, to achieve extraordinary results.',
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality work that exceeds expectations and drives success.',
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Passion',
      description: 'We love what we do, and this passion drives us to create exceptional digital experiences for every client.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About DevStudio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a passionate team of developers, designers, and digital strategists 
            dedicated to creating exceptional web experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Founded in 2024, BlinkCodeDevStudio began as a small team of passionate developers 
                who believed that exceptional digital experiences could transform businesses. 
                What started as a two-person team startup has grown into a leading web 
                development agency serving clients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Over the years, we've had the privilege of working with startups, 
                established businesses, and enterprise clients across various industries. 
                Our commitment to innovation, quality, and client satisfaction has been 
                the driving force behind our growth and success.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">90+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <img
                src="/images/services/meetingteam.webp"
                alt="Team working together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-lg mb-6">
                <Target className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses through innovative digital solutions that 
                  enhance user experiences, drive growth, and create lasting value 
                  in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-lg mb-6">
                <Award className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our 
              clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-gray-800 p-3 rounded-lg">{value.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;