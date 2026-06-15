
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Years of Experience',
      description: 'Delivering excellence since inception'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful implementations worldwide'
    },
    {
      icon: Globe,
      number: '4',
      label: 'Countries Served',
      description: 'Global presence across continents'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer service'
    }
  ];

  const pillars = [
    {
      title: 'Business Application Solutions',
      description: 'Comprehensive software solutions designed to streamline business operations, enhance productivity, and drive growth across all organizational levels.',
      features: [
        'Custom ERP implementations',
        'Business process optimization',
        'Integration with existing systems',
        'Scalable solution architecture'
      ]
    },
    {
      title: 'Technology & Integration Services',
      description: 'Advanced technology integration services that bridge the gap between different systems, ensuring seamless data flow and operational efficiency.',
      features: [
        'System integration and migration',
        'Cloud technology adoption',
        'API development and management',
        'Technology consulting services'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">Avantcore</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AVANTCORE Technologies has been at the forefront of delivering innovative software solutions 
            and services since its establishment, empowering businesses worldwide with cutting-edge technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-orange-500">Company Pillars</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-4">{pillar.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                
                <ul className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-blue-100">
            To drive innovation and deliver excellence by providing cutting-edge technology solutions 
            that transform businesses, enhance operational efficiency, and create sustainable value 
            for our clients across the globe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
