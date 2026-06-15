import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, CheckCircle, Truck, BarChart3, Globe, Clock, Users, TrendingUp } from 'lucide-react';
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
    title: 'Real-Time Analytics',
    description: 'Track sales performance and distribution metrics with live dashboards and comprehensive reporting.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Delivery Management',
    description: 'Manage delivery operations with tracking, scheduling, and fulfillment optimization.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaboration',
    description: 'Enable seamless communication between sales, distribution, and fulfillment teams.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Order Processing',
    description: 'Automate order creation, management, and tracking from customer to delivery.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Sales Growth',
    description: 'Optimize sales processes and identify opportunities to increase revenue.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Multi-Channel Support',
    description: 'Manage sales across multiple channels and distribution networks.'
  }
];

const benefits = [
  'Streamlined sales process with automated workflows',
  'Real-time inventory visibility across distribution centers',
  'Reduced delivery times and improved fulfillment accuracy',
  'Enhanced customer satisfaction with order tracking',
  'Data-driven insights for business optimization',
  'Scalable solution for growing distribution networks',
  'Reduced operational costs and manual errors',
  'Comprehensive audit trails and compliance reporting'
];

const useCases = [
  {
    title: 'E-Commerce Distribution',
    description: 'Manage online sales orders, warehouse operations, and last-mile delivery for e-commerce businesses.'
  },
  {
    title: 'Wholesale Distribution',
    description: 'Handle bulk orders, distributor management, and inventory allocation across multiple retailers.'
  },
  {
    title: 'Direct Sales',
    description: 'Track direct sales, customer relationships, and distribution to end-users.'
  },
  {
    title: 'Multi-Channel Retail',
    description: 'Synchronize sales across physical stores, online platforms, and third-party marketplaces.'
  }
];

const SalesDistribution = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Banner */}
      <motion.section
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <img 
          src="/saleanddistribution.jpg" 
          alt="Sales and Distribution" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Sales And Distribution Management
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
            variants={fadeInUp}
          >
            Streamline your sales operations and distribution network with intelligent automation
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
              Complete Sales and Distribution Solution
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-8"
              variants={childAnimation}
            >
              Our Sales and Distribution Management system is a comprehensive platform designed to help you manage 
              every aspect of your sales operations and distribution network. From order creation to final delivery, 
              manage distribution operations effectively with delivery, receiving, and fulfillment capabilities that 
              ensure your customers get what they need, when they need it.
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
        className="py-16 md:py-24 bg-gray-50"
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
              Powerful features designed to optimize your sales and distribution operations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={childAnimation}
                whileHover={{ y: -4 }}
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

      {/* How It Works */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, efficient workflow for managing your entire sales and distribution process
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerAnimation}
          >
            {[
              { step: '1', title: 'Order Creation', desc: 'Customers place orders through multiple channels - online, phone, or direct sales' },
              { step: '2', title: 'Order Processing', desc: 'System automatically validates, allocates inventory, and prepares fulfillment instructions' },
              { step: '3', title: 'Warehouse Management', desc: 'Warehouse staff efficiently pick, pack, and prepare orders for dispatch' },
              { step: '4', title: 'Delivery & Tracking', desc: 'Orders are shipped with real-time tracking visible to customers and your team' },
              { step: '5', title: 'Fulfillment Confirmation', desc: 'Delivery confirmation, receipts, and analytics are automatically recorded' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 mb-8"
                variants={childAnimation}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
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
              Transform your sales and distribution operations with measurable results
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

      {/* Use Cases */}
      <motion.section
        className="py-16 md:py-24 bg-white"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Applicable across various industries and business models
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerAnimation}
          >
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200"
                variants={childAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">{useCase.title}</h3>
                <p className="text-blue-800">{useCase.description}</p>
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
              Ready to Optimize Your Sales and Distribution?
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 mb-8"
              variants={childAnimation}
            >
              Schedule a demo today and see how our system can transform your operations
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

export default SalesDistribution;
