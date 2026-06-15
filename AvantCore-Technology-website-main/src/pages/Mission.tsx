import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Users, Globe, TrendingUp, Award } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import { 
  containerAnimation, 
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
} from '@/constants/animations';

const MissionPage = () => {
  const missionPoints = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-Centric',
      desc: 'Every solution we create is designed with our clients\'s success at the heart of everything we do.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      desc: 'We continuously push boundaries, exploring new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People Focused',
      desc: 'We invest in our team, fostering a culture of learning, growth, and collaborative excellence.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      desc: 'We serve clients across continents, creating positive impact through transformative technology solutions.'
    }
  ];

  const commitments = [
    {
      title: 'Deliver Excellence',
      items: [
        'Quality solutions that exceed expectations',
        'Rigorous testing and quality assurance processes',
        'Continuous improvement and optimization',
        'Transparent communication with clients'
      ]
    },
    {
      title: 'Drive Innovation',
      items: [
        'Invest in emerging technologies',
        'Support R&D initiatives',
        'Foster creative problem-solving',
        'Share knowledge and expertise'
      ]
    },
    {
      title: 'Enable Growth',
      items: [
        'Support client business transformation',
        'Create scalable and flexible solutions',
        'Build long-term partnerships',
        'Empower our team\'s development'
      ]
    }
  ];

  const impacts = [
    { metric: '500+', label: 'Projects Transformed' },
    { metric: '300+', label: 'Clients Served' },
    { metric: '4', label: 'Continents' },
    { metric: '1000+', label: 'Lives Impacted' }
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
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering enterprises through innovative technology solutions and exceptional service
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <Section background="light" padding="large">
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
                src="/newsandevents/latest1.jpg"
                alt="Our Mission"
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
                What We're Here To Do
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to transform enterprises through innovative technology solutions and exceptional service. We are dedicated to helping organizations navigate their digital journey and achieve their business objectives.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that great technology is only powerful when it's backed by great people and great partnership. That's why we focus on understanding our clients' unique challenges and delivering solutions that create real, measurable impact.
            </p>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <p className="text-lg font-semibold">
                "To be the trusted partner that empowers enterprises to innovate, grow, and succeed in the digital economy."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Mission Pillars - Alternating Layout */}
      <Section background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How We Execute
          </h2>
          <p className="text-lg text-gray-600">
            Four core pillars that guide our mission
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {missionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                    {point.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Our Commitments - 2-Column Layout */}
      <Section background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Commitments
          </h2>
          <p className="text-lg text-gray-600">
            Promises we make to every stakeholder
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {commitments.map((commitment, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-6">{commitment.title}</h3>
              <ul className="space-y-3">
                {commitment.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                        <Award className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Impact Metrics */}
      <Section background="white" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600">
            Measurable outcomes of our mission in action
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {impact.metric}
              </div>
              <p className="text-gray-700 font-semibold text-sm">
                {impact.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Living Our Mission */}
      <Section background="light" padding="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Bringing Our Mission to Life
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every day, our team works to embody our mission through:
          </p>
        </motion.div>
          
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Delivering solutions that create tangible business value',
            'Building strong partnerships based on trust and transparency',
            'Continuously innovating and adapting to market changes',
            'Supporting our team\'s professional growth and development',
            'Maintaining the highest standards of quality and service',
            'Giving back to communities where we operate'
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-gray-700 text-sm font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex justify-center mt-12"
        >
          <Button variant="primary" size="lg">
            Partner With Us
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default MissionPage;
