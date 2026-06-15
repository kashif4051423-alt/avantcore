
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Map, BarChart3, Users, UserCheck, Server, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      id: 'erp',
      title: 'Enterprise Resource Planning (ERP)',
      icon: Database,
      description: 'Streamline operations, boost productivity, and drive growth with our comprehensive ERP solutions. Integrate all aspects of your business operations with real-time data insights for informed decision-making.',
      features: [
        'Real-time insights and reporting',
        'Process automation and optimization',
        'Regulatory compliance management',
        'Scalable architecture for growth'
      ],
      path: '/services/erp'
    },
    {
      id: 'gis',
      title: 'Geographic Information System (GIS)',
      icon: Map,
      description: 'Harness the power of spatial data for informed decision-making across industries. Our GIS solutions provide comprehensive location intelligence and advanced mapping capabilities.',
      features: [
        'Spatial data collection and analysis',
        'Advanced visualization tools',
        'Location-based decision making',
        'Interactive mapping solutions'
      ],
      path: '/services/gis'
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Analytics',
      icon: BarChart3,
      description: 'Convert your data into strategic insights that drive business growth. Our BI solutions provide real-time analytics, comprehensive reporting, and predictive intelligence.',
      features: [
        'Real-time data analysis',
        'Interactive dashboards',
        'Predictive analytics',
        'Strategic decision support'
      ],
      path: '/services/bi-analytics'
    },
    {
      id: 'crm',
      title: 'Customer Relationship Management (CRM)',
      icon: Users,
      description: 'Enhance customer interactions and drive sales growth with our customized CRM solutions. Optimize your sales processes and build stronger customer relationships.',
      features: [
        'Sales process optimization',
        'Customer interaction management',
        'Lead tracking and conversion',
        'Seamless system integration'
      ],
      path: '/services/crm'
    },
    {
      id: 'hcm',
      title: 'Human Capital Management (HCM)',
      icon: UserCheck,
      description: 'Optimize your workforce management and enhance employee performance with comprehensive HCM solutions covering the entire employee lifecycle.',
      features: [
        'Recruitment and onboarding',
        'Performance management',
        'Talent development programs',
        'Payroll and benefits administration'
      ],
      path: '/services/hcm'
    },
    {
      id: 'data',
      title: 'Data Management & Analytics',
      icon: Server,
      description: 'Transform raw data into actionable insights that drive strategic growth. Our advanced analytics solutions help you leverage data for competitive advantage.',
      features: [
        'Advanced data analytics',
        'Operational efficiency improvement',
        'Innovation and transformation',
        'Strategic growth enablement'
      ],
      path: '/services/data-management'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business operations 
            and drive sustainable growth across all industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link
                  to={service.path}
                  className="group/btn inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
