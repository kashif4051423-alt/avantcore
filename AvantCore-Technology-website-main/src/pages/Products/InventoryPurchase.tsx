import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, Truck, BarChart3, AlertCircle, Zap, TrendingUp } from 'lucide-react';
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
    icon: <Package className="w-8 h-8" />,
    title: 'Inventory Tracking',
    description: 'Real-time inventory tracking with barcode support and multi-location management.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Purchase Orders',
    description: 'Create and manage purchase orders from suppliers with automated workflow management.'
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: 'Stock Alerts',
    description: 'Automatic notifications for low stock levels and reorder points.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Demand Forecasting',
    description: 'Data-driven forecasting to optimize inventory levels and reduce costs.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Order Automation',
    description: 'Automate routine purchase orders based on inventory levels and demand.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Analytics & Reports',
    description: 'Comprehensive reports on inventory turnover, supplier performance, and costs.'
  }
];

const benefits = [
  'Optimized inventory levels reducing carrying costs',
  'Decreased stockouts and improved order fulfillment',
  'Better supplier management and vendor relationships',
  'Real-time visibility across all warehouses and locations',
  'Reduced manual errors in order processing',
  'Improved cash flow through better inventory management',
  'Enhanced forecasting accuracy and demand planning',
  'Complete audit trails for compliance and reporting'
];

const capabilities = [
  {
    title: 'Multi-Location Inventory',
    description: 'Manage inventory across multiple warehouses, stores, and distribution centers.'
  },
  {
    title: 'Barcode & SKU Management',
    description: 'Efficient product identification and tracking with barcode scanning.'
  },
  {
    title: 'Supplier Management',
    description: 'Maintain supplier records, track performance, and manage agreements.'
  },
  {
    title: 'Order History',
    description: 'Complete order history with tracking and receiving documentation.'
  },
  {
    title: 'Stock Transfers',
    description: 'Manage inter-location transfers and adjustments seamlessly.'
  },
  {
    title: 'Expiry Management',
    description: 'Track product expiry dates and manage stock rotation (FIFO/LIFO).'
  }
];

const InventoryPurchase = () => {
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
          src="/inventory.jpg" 
          alt="Inventory and Purchase" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Inventory And Purchase Order Management
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl"
            variants={fadeInUp}
          >
            Smart inventory tracking and intelligent purchasing for optimal supply chain management
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
              Complete Inventory and Purchase Solution
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-8"
              variants={childAnimation}
            >
              The solution allows you to manage orders from customers/suppliers, including tracking order status 
              and inventory levels with real-time precision. Our comprehensive inventory and purchase management 
              system streamlines your supply chain from procurement to fulfillment. With intelligent features for 
              demand forecasting, automated reordering, and supplier management, optimize your inventory control 
              and reduce operational costs.
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
              Powerful features for complete inventory control and purchase management
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

      {/* Core Capabilities */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for managing your entire inventory lifecycle
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200"
                variants={childAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-green-900 mb-3">{capability.title}</h3>
                <p className="text-green-800">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inventory Workflow</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined processes for efficient inventory and purchase management
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerAnimation}
          >
            {[
              { step: '1', title: 'Inventory Planning', desc: 'Analyze demand patterns and set optimal inventory levels' },
              { step: '2', title: 'Purchase Ordering', desc: 'Create purchase orders with automated suggestions' },
              { step: '3', title: 'Supplier Management', desc: 'Track supplier performance and manage agreements' },
              { step: '4', title: 'Receiving & QC', desc: 'Receive goods, conduct quality checks, and update inventory' },
              { step: '5', title: 'Stock Management', desc: 'Track inventory, manage transfers, and handle adjustments' },
              { step: '6', title: 'Analytics & Reporting', desc: 'Gain insights and optimize supply chain' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable improvements in supply chain efficiency and cost control
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

      {/* Integration Section */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerAnimation}
          >
            <motion.div
              className="text-center mb-12"
              variants={childAnimation}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
              <p className="text-lg text-gray-600">
                Integrates with your existing business systems
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerAnimation}
            >
              {[
                { title: 'Sales Integration', desc: 'Sync with sales orders and customer data' },
                { title: 'Accounting Integration', desc: 'Link to GL, AP, and cost tracking' },
                { title: 'Warehouse Systems', desc: 'Connect to warehouse management systems' },
                { title: 'E-Commerce Platforms', desc: 'Integrate with online sales channels' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                  variants={childAnimation}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
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
              Optimize Your Supply Chain Today
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 mb-8"
              variants={childAnimation}
            >
              Discover how our inventory management system can transform your operations
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

export default InventoryPurchase;

