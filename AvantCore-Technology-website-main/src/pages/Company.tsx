import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import { 
  containerAnimation, 
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
  scrollReveal,
} from '@/constants/animations';

const CompanyPage = () => {
  const milestones = [
    { year: '2015', title: 'Founded', desc: 'AvantCore Technologies established with a vision to transform digital landscape' },
    { year: '2017', title: 'First Major Project', desc: 'Launched Cricket-infotainment platform serving millions of users' },
    { year: '2019', title: 'Global Expansion', desc: 'Extended services to US, UK, and KSA markets' },
    { year: '2021', title: 'Enterprise Solutions', desc: 'Introduced comprehensive ERP and HCM solutions' },
    { year: '2023', title: 'Industry Recognition', desc: 'Awarded for innovation in digital transformation' },
    { year: '2024', title: 'Leadership Position', desc: 'Established as industry leader in enterprise software' }
  ];

  const capabilities = [
    { icon: <Zap className="w-8 h-8" />, title: 'Fast Execution', desc: 'Rapid development cycles without compromising quality' },
    { icon: <Target className="w-8 h-8" />, title: 'Precision Focus', desc: 'Laser-focused approach to meeting client objectives' },
    { icon: <Globe className="w-8 h-8" />, title: 'Global Scale', desc: 'Infrastructure supporting worldwide operations' },
    { icon: <Users className="w-8 h-8" />, title: 'Expert Team', desc: 'Top-tier talent across all technology domains' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building enterprise solutions that drive real business transformation
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <Section background="white" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={scrollRevealLeft}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="/newsandevents/latest2.jpg"
                alt="AvantCore Company"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={scrollRevealRight}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Company DNA
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              AvantCore Technologies represents a unique blend of technical excellence and business acumen. Founded with the mission to deliver transformative digital solutions, we've consistently exceeded client expectations across diverse industries and markets.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our approach combines deep industry knowledge with cutting-edge technology to create solutions that don't just meet today's needs, but anticipate tomorrow's challenges. We believe in sustainable growth, continuous innovation, and building lasting partnerships with our clients.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                'Proven track record of 500+ successful projects',
                'Team of 50+ seasoned technology professionals',
                'Serving clients across 4 continents',
                'ISO certified processes and quality standards'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      {/* Timeline Section - Company Evolution */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Company Evolution
          </h2>
          <p className="text-lg text-gray-600">
            From startup vision to enterprise leader
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="space-y-8"
          >
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={childAnimation}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-1 h-16 bg-blue-200 my-2"></div>
                  )}
                </div>
                <div className="flex-1 pt-2 pb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Capabilities - What Makes Us Different */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Competitive Advantages
          </h2>
          <p className="text-lg text-gray-600">
            How we deliver measurable business outcomes
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 hover:shadow-lg transition-all h-full flex flex-col text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-600 text-white">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {cap.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Statistics Section */}
      <Section background="light" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-7xl mx-auto"
        >
          {[
            { number: 10, label: 'Years in Business', suffix: '+' },
            { number: 500, label: 'Projects Delivered', suffix: '+' },
            { number: 300, label: 'Happy Clients', suffix: '+' },
            { number: 50, label: 'Team Members', suffix: '+' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="white" spacing="generous">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={scrollRevealLeft}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Let's Work Together
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to transform your business with our proven solutions and expertise? Let's discuss how we can help you achieve your digital goals.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scrollRevealRight}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="/newsandevents/latest1.jpg"
                alt="Partnership"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default CompanyPage;

