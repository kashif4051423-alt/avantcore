import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Service data with local images - comprehensive list of all services
const services = [
  {
    id: 'digital-consulting',
    title: 'Digital Consulting & Strategy',
    desc: `Transform your business with strategic digital initiatives. Our consulting team develops comprehensive strategies to modernize operations, improve customer experiences, and drive measurable digital transformation outcomes aligned with your business objectives.`,
    image: '/Digital Consulting.jpg',
  },
  {
    id: 'digital-commerce',
    title: 'Digital Commerce',
    desc: `Build scalable e-commerce platforms that drive engagement and revenue. From omnichannel experiences to personalized recommendations, we deliver solutions that optimize conversion and create seamless shopping experiences across all touchpoints.`,
    image: '/pexels-n-voitkevich-6214477.jpg',
  },
  {
    id: 'business-apps',
    title: 'Business Applications',
    desc: `Custom enterprise applications tailored to your operational needs. We deliver integrated solutions with intuitive interfaces, real-time reporting, and automation capabilities that enhance productivity and reduce manual overhead.`,
    image: '/Business Applications.jpg',
  },
  {
    id: 'data-modernization',
    title: 'Data Modernization',
    desc: `Unlock the power of your data by transforming legacy systems into modern, cloud-native architectures. Our approach reduces complexity, improves performance, and enables real-time insights for data-driven decision making.`,
    image: '/Data Modernization.jpg',
  },
  {
    id: 'advanced-analytics',
    title: 'Advanced Analytics',
    desc: `Extract actionable insights from your data using advanced analytics and machine learning. Our solutions transform raw data into predictive models and visual dashboards that empower smarter, faster strategic decisions.`,
    image: '/Advanced Analytics.jpg',
  },
  {
    id: 'connected-intelligence',
    title: 'Connected Intelligence',
    desc: `Break down data silos with unified intelligence platforms. By connecting disparate data sources, we enable cross-functional visibility, faster insights, and consistent decision-making across your entire organization.`,
    image: '/Connected Intelligence.jpg',
  },
  {
    id: 'data-management',
    title: 'Data Management',
    desc: `Govern, secure, and optimize your data assets with comprehensive management strategies. We establish frameworks ensuring data quality, security compliance, and appropriate access across your organization.`,
    image: '/Data Management.jpg',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    desc: `Leverage cutting-edge AI technologies to automate complex processes and enhance decision-making. Our solutions create new revenue opportunities while improving operational efficiency and customer experiences.`,
    image: '/Generative AI Solutions.jpg',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Operations & Migration',
    desc: `Move seamlessly to the cloud with minimal disruption. Our proven migration methodology ensures business continuity while capturing cost savings and unlocking long-term scalability and agility benefits.`,
    image: '/Cloud Operations & Migration.jpg',
  },
  {
    id: 'cloud-development',
    title: 'Cloud Development & Integration',
    desc: `Build cloud-native applications leveraging microservices and containerization. Our development practices ensure scalability, resilience, and optimal performance for cloud-deployed solutions.`,
    image: '/Cloud Development & Integration.jpg',
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    desc: `Optimize performance with 24/7 cloud infrastructure management. Our operations team proactively manages your systems, ensuring reliability, security, and cost efficiency while you focus on core business.`,
    image: '/Managed Services.jpg',
  },
  {
    id: 'infrastructure',
    title: 'Digital Infrastructure Services',
    desc: `Architect and deploy modern infrastructure supporting digital transformation. Our comprehensive solutions ensure scalability, security, and performance while optimizing total cost of ownership.`,
    image: '/Digital Infrastructure Services.jpg',
  },
  {
    id: 'security',
    title: 'Security',
    desc: `Protect your digital assets with comprehensive, evolving security solutions. Our defense-in-depth approach combines threat detection, vulnerability management, and compliance frameworks to address emerging threats.`,
    image: '/Security.jpg',
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies',
    desc: `Stay ahead with emerging technologies like blockchain, IoT, and quantum computing. We identify high-impact use cases and guide implementations from pilot to proven production deployments.`,
    image: '/Emerging Technologies.jpg',
  },
  {
    id: 'bps',
    title: 'Business Process Services',
    desc: `Streamline operations with optimized business processes. We analyze workflows, identify efficiency opportunities, and implement lean practices that enhance quality, reduce turnaround, and improve satisfaction.`,
    image: '/Business Process Services .jpg',
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white py-32 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'url(/Our%20Services.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/55" aria-hidden="true"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <div className="text-sm font-semibold tracking-widest text-blue-300 uppercase mb-2">Professional Services</div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-2 max-w-3xl mx-auto text-blue-100 font-medium drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate Your Experience With Enterprise-Grade Solutions
          </motion.p>
          
          <motion.div 
            className="mt-8 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Services <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section with divider */}
      <section className="py-16 bg-white text-center border-b-2 border-gradient">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp} 
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <div className="text-sm font-semibold tracking-widest text-orange-600 mb-3 uppercase">Our Services</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Offer</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-8"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Comprehensive technology solutions designed to streamline your operations, enhance efficiency, and drive sustainable business growth across all industries.
          </p>
        </motion.div>
      </section>

      {/* Services Grid with Box Design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <a href={`/services/${service.id}`} className="block h-full group no-underline">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
                    {/* Image Section */}
                    {service.image && (
                      <motion.div
                        className="w-full h-48 bg-gray-100 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </motion.div>
                    )}

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-between flex-grow bg-gray-900">
                      {/* Section Number */}
                      <div className="mb-4">
                        <span className="inline-block text-4xl font-bold text-orange-500/30 mb-2">{String(idx + 1).padStart(2, '0')}</span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-orange-300 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {service.desc}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-orange-400 font-semibold text-base group w-fit pt-4 border-t border-gray-700"
                      >
                        Learn More
                        <motion.span 
                          className="inline-block transition-transform duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <ChevronRight size={20} />
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white mb-32 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8">Let our expert team help you implement the perfect solution for your organization.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
          >
            Schedule Consultation <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
