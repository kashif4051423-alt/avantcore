import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart3, FileText, FileJson, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const insightsData = [
  {
    title: 'Case Studies',
    desc: 'Real-world examples of successful digital transformations and business solutions.',
    id: 'case-studies',
    icon: BarChart3
  },
  {
    title: 'Blog',
    desc: 'Latest articles and insights on technology trends and best practices.',
    id: 'blog',
    icon: FileText
  },
  {
    title: 'Whitepapers',
    desc: 'In-depth research and technical guides for enterprise solutions.',
    id: 'whitepapers',
    icon: FileJson
  },
  {
    title: 'Newsroom',
    desc: 'Company news, press releases, and announcements.',
    id: 'newsroom',
    icon: Megaphone
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[55vh] flex items-center justify-center text-center text-white py-32 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true"></div>
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Latest <span className="text-gradient bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Insights</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-2 max-w-3xl mx-auto text-blue-100 font-medium drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay Updated with Industry Trends and Expert Knowledge
          </motion.p>
        </div>
      </motion.section>

      {/* Insights Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {insightsData.map((insight) => (
              <motion.div
                key={insight.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/insights/${insight.id}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                    <div className="mb-4">
                      <insight.icon size={40} className="text-orange-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {insight.desc}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-orange-600 font-semibold"
                    >
                      Learn More
                      <ChevronRight size={20} />
                    </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Expert Consultation?</h2>
          <p className="text-lg text-blue-100 mb-8">Connect with our team to discuss your specific needs.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            >
              Contact Us <ChevronRight size={20} />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Insights;

