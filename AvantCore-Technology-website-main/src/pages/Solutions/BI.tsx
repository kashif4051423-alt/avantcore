import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart3, TrendingUp, Database, Zap, PieChart, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: easeOut } }
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Interactive Dashboards',
    description: 'Create compelling visualizations that tell your data story.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Predictive Analytics',
    description: 'Forecast trends and anticipate market changes.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Big Data Processing',
    description: 'Handle massive datasets with ease and efficiency.'
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: 'Advanced Reporting',
    description: 'Generate detailed reports automatically.'
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Trend Analysis',
    description: 'Identify patterns and trends in your data.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Real-Time Insights',
    description: 'Get instant insights as data updates.'
  }
];

const benefits = [
  'Data-driven decision making across the organization',
  'Faster time to insights and business intelligence',
  'Improved operational efficiency and cost reduction',
  'Enhanced customer understanding and segmentation',
  'Competitive advantage through data insights',
  'Better risk management and fraud detection',
  'Increased ROI and revenue optimization',
  'Empowered teams with self-service analytics'
];

const BI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Hero Banner */}
      <motion.section
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <img 
          src="/Business%20Intelligence%20%28BI%29%20and%20Analytics_.jfif"
          alt="Business Intelligence and Analytics" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Business Intelligence & Analytics
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
            variants={fadeInUp}
          >
            Convert your data into strategic insights and actionable intelligence
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={childAnimation}
            >
              State-of-the-Art BI & Analytics
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-8"
              variants={childAnimation}
            >
              State-of-the-art BI and Analytics solutions designed to convert your data into strategic insights. 
              Our platform enables organizations to discover patterns, make informed decisions, and drive business growth 
              through advanced analytics and intelligent data visualization.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={childAnimation}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={childAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics capabilities for every business need
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
                variants={childAnimation}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Analytics Types */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={childAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Analytics Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple types of analytics to suit your business needs
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerAnimation}
          >
            {[
              { title: 'Descriptive Analytics', desc: 'Understand what has happened in your business' },
              { title: 'Diagnostic Analytics', desc: 'Understand why things happened' },
              { title: 'Predictive Analytics', desc: 'Forecast future trends and outcomes' },
              { title: 'Prescriptive Analytics', desc: 'Get recommendations on what to do next' }
            ].map((type, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200"
                variants={childAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{type.title}</h3>
                <p className="text-blue-800">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerAnimation}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={childAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drive business growth with intelligent insights
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerAnimation}
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 items-start"
                variants={childAnimation}
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={childAnimation}
            >
              Transform Data Into Insights
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 mb-8"
              variants={childAnimation}
            >
              Start your BI and analytics journey with our comprehensive platform
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={childAnimation}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Contact Sales
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BI;
