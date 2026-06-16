import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Clock, Briefcase, Star } from 'lucide-react';
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
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const childAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  { icon: <Users className="w-8 h-8" />, title: 'Workforce Management', description: 'Manage your entire workforce effectively' },
  { icon: <Award className="w-8 h-8" />, title: 'Performance Management', description: 'Track and improve employee performance' },
  { icon: <Clock className="w-8 h-8" />, title: 'Time & Attendance', description: 'Automated time tracking and leave management' },
  { icon: <Briefcase className="w-8 h-8" />, title: 'Talent Management', description: 'Recruit, develop, and retain top talent' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Career Development', description: 'Support employee growth and development' },
  { icon: <Star className="w-8 h-8" />, title: 'Engagement & Culture', description: 'Foster a positive workplace culture' }
];

const benefits = [
  'Improved employee engagement and satisfaction',
  'Better talent retention and reduced turnover',
  'Enhanced workforce productivity',
  'Streamlined HR processes and compliance',
  'Data-driven workforce decisions',
  'Improved recruitment and onboarding',
  'Better succession planning',
  'Reduced HR administrative burden'
];

const HCM = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <motion.section className="relative w-full h-96 md:h-[500px] flex items-center justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <img src="/Human%20Capital%20Management%20%28HCM%29.jpg" alt="HCM" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" variants={fadeInUp}>Human Capital Management (HCM)</motion.h1>
          <motion.p className="text-xl md:text-2xl text-blue-100 max-w-3xl" variants={fadeInUp}>Optimize workforce management and enhance employee performance</motion.p>
        </div>
      </motion.section>

      <motion.section className="py-16 md:py-24 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" variants={childAnimation}>Innovative HCM Solutions</motion.h2>
            <motion.p className="text-lg text-gray-700 leading-relaxed mb-8" variants={childAnimation}>
              Innovative HCM solutions designed to optimize workforce management and enhance employee performance. Our platform empowers organizations to attract, develop, and retain top talent while driving business success.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={childAnimation}>
              <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerAnimation}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={childAnimation}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive HCM capabilities</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerAnimation}>
            {features.map((feature, idx) => (
              <motion.div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100" variants={childAnimation} whileHover={{ y: -8, scale: 1.02 }}>
                <div className="mb-4 text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerAnimation}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={childAnimation}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerAnimation}>
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} className="flex gap-4 items-start" variants={childAnimation}>
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center text-white" variants={containerAnimation}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={childAnimation}>Build Your Winning Team</motion.h2>
            <motion.p className="text-lg text-blue-100 mb-8" variants={childAnimation}>Transform your human capital management today</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={childAnimation}>
              <button onClick={() => navigate('/contact')} className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200">Schedule Demo</button>
              <button onClick={() => navigate('/contact')} className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200">Contact Sales</button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HCM;

