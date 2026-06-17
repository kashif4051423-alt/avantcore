import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industriesData = [
  {
    title: 'Banking & Financial Services',
    desc: 'Digital transformation solutions for modern banking operations and financial services.',
    id: 'banking',
    image: '/f,,s,,.jpg'
  },
  {
    title: 'Retail & CPG',
    desc: 'Omnichannel retail solutions and consumer goods management platforms.',
    id: 'retail',
    image: '/Retail & CPG.jpg'
  },
 
];

const Industries = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white py-32 px-4 overflow-hidden bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url('/Industries We Serve.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/60 z-10"></div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true"></div>
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Industries We <span className="text-orange-400">Serve</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-2 max-w-3xl mx-auto text-white font-medium drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Industry-Specific Solutions for Digital Excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((industry) => (
              <motion.div
                key={industry.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/industries/${industry.id}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <motion.img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {industry.desc}
                      </p>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-orange-600 font-semibold"
                      >
                        Learn More
                        <ChevronRight size={20} />
                      </motion.div>
                    </div>
                  </div>
                </Link>
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
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-lg text-blue-100 mb-8">Let our industry experts help you achieve your goals.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            >
              Get In Touch <ChevronRight size={20} />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Industries;

