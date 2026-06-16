import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, DollarSign, Clock, Shield, BarChart3, Zap } from 'lucide-react';
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
    icon: <Users className="w-8 h-8" />,
    title: 'Employee Management',
    description: 'Complete employee records, onboarding, and profile management with document storage.'
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Payroll Processing',
    description: 'Automated payroll calculations, tax management, and direct deposit processing.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Leave & Attendance',
    description: 'Track leave requests, attendance records, and manage time-off policies.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Performance Management',
    description: 'Conduct appraisals, set goals, and track employee performance metrics.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Compliance & Reporting',
    description: 'Ensure regulatory compliance with automated reporting and audit trails.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Self-Service Portal',
    description: 'Enable employees to access their records, submit requests, and check payslips.'
  }
];

const benefits = [
  'Automated payroll processing with accurate calculations',
  'Reduced HR administrative overhead and manual errors',
  'Improved employee engagement through self-service tools',
  'Enhanced compliance with labor laws and regulations',
  'Real-time visibility into HR metrics and analytics',
  'Streamlined recruitment and onboarding process',
  'Better performance tracking and development planning',
  'Secure data management with role-based access control'
];

const modules = [
  {
    title: 'Core HR Module',
    description: 'Manage employee master data, organizational structure, and HR policies.'
  },
  {
    title: 'Payroll Module',
    description: 'Process payroll with flexible salary structures, tax calculations, and deductions.'
  },
  {
    title: 'Recruitment Module',
    description: 'Manage job postings, applications, interviews, and onboarding workflows.'
  },
  {
    title: 'Performance Module',
    description: 'Conduct appraisals, set objectives, and track employee development.'
  },
  {
    title: 'Attendance Module',
    description: 'Track attendance with biometric integration and leave management.'
  },
  {
    title: 'Reports & Analytics',
    description: 'Generate HR analytics, compliance reports, and business intelligence.'
  }
];

const HRMSPayroll = () => {
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
          src="/hrms.jpg" 
          alt="HRMS and Payroll" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            HRMS Payroll And Compliance
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 max-w-3xl"
            variants={fadeInUp}
          >
            Complete human resource management and payroll solution for modern organizations
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
              Complete HR Management Solution
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-8"
              variants={childAnimation}
            >
              Manage organisation employees HR and payroll, performance management, task assignments and recruitment 
              with our comprehensive HRMS solution. From employee onboarding to payroll processing, from performance 
              appraisals to compliance management, our system handles it all with precision and ease. Streamline your 
              HR operations and create a more engaged, productive workforce.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={childAnimation}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold px-8 py-3 rounded-lg transition-all duration-200"
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
              Comprehensive HR features to manage your entire employee lifecycle
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
                <div className="mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Core Modules */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Modules</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated modules to handle all aspects of HR and payroll
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
          >
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200"
                variants={childAnimation}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-purple-900 mb-3">{module.title}</h3>
                <p className="text-purple-800">{module.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Payroll Capabilities */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Payroll Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sophisticated payroll processing with compliance and accuracy
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerAnimation}
          >
            {[
              'Flexible salary structures with multiple component types',
              'Automated tax calculations and statutory deductions',
              'Support for multiple currencies and payment methods',
              'Salary advance and loan management',
              'Leave encashment and bonus processing',
              'Compliance with labor laws and regulations',
              'Bulk payroll processing and batch operations',
              'Integration with banks for direct deposits'
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 items-start mb-6"
                variants={childAnimation}
              >
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{capability}</p>
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
              Drive efficiency and compliance across your HR operations
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
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800"
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
              Simplify Your HR and Payroll Management
            </motion.h2>
            <motion.p 
              className="text-lg text-purple-100 mb-8"
              variants={childAnimation}
            >
              Contact us today for a personalized demo of our HRMS solution
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={childAnimation}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-8 py-3 rounded-lg transition-all duration-200"
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

export default HRMSPayroll;

