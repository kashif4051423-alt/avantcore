import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, Eye, Compass, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import { 
  containerAnimation, 
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
} from '@/constants/animations';

const VisionPage = () => {
  const visionPillars = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Clear Vision',
      desc: 'We see the future of technology and guide our clients toward it with clarity and purpose.',
      image: '/newsandevents/latest1.jpg'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation Driver',
      desc: 'We drive technological innovation that creates competitive advantages for our partners.',
      image: '/newsandevents/latest2.jpg'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Focus',
      desc: 'Every initiative is aligned with long-term strategic objectives and measurable outcomes.',
      image: '/newsandevents/IMG_1540.jpg'
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Market Leadership',
      desc: 'We aim to be the most trusted and innovative technology partner in our sectors.',
      image: '/newsandevents/IMG_1488.jpg'
    }
  ];

  const strategyPoints = [
    {
      title: 'Digital Transformation',
      desc: 'Helping enterprises modernize their systems and processes through cutting-edge technology.'
    },
    {
      title: 'Cloud-First Approach',
      desc: 'Leveraging cloud infrastructure for scalability, reliability, and cost-effectiveness.'
    },
    {
      title: 'AI & Automation',
      desc: 'Integrating artificial intelligence and automation to drive efficiency and innovation.'
    },
    {
      title: 'Cybersecurity Excellence',
      desc: 'Building secure, resilient systems that protect against evolving cyber threats.'
    },
    {
      title: 'Global Expansion',
      desc: 'Extending our reach to serve enterprises across new markets and industries.'
    },
    {
      title: 'Talent Excellence',
      desc: 'Attracting and developing world-class talent to deliver exceptional solutions.'
    }
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
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Shaping the future of enterprise technology through innovation, excellence, and partnership
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Statement */}
      <Section background="light" spacing="generous">
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
                alt="Our Vision"
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
                Our Strategic Vision
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision AvantCore as a global leader in enterprise digital transformation, recognized for delivering innovative solutions that drive real business impact.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              By 2030, we aim to be the most trusted technology partner for enterprises seeking to modernize their operations, enhance their competitive position, and achieve sustainable growth in the digital economy.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-gray-800 font-semibold">
                Our north star is simple: Transform enterprises through technology, create lasting partnerships, and enable our people to achieve their full potential.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Vision Pillars - Alternating Layouts */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Core Vision Pillars
          </h2>
          <p className="text-lg text-gray-600">
            Four fundamental pillars that support our strategic direction
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-20">
          {visionPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${idx % 2 === 1 ? 'md:grid-cols-2 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1' : ''}`}
            >
              {/* Image */}
              <motion.div
                variants={idx % 2 === 0 ? scrollRevealLeft : scrollRevealRight}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <motion.img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={idx % 2 === 0 ? scrollRevealRight : scrollRevealLeft}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-100">
                      <span className="text-blue-600">{pillar.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Strategic Initiatives - Professional Layout */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Strategic Initiatives
          </h2>
          <p className="text-lg text-gray-600">
            Key areas of focus to realize our vision
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {strategyPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
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

      {/* 5-Year Goals */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Five-Year Goals
          </h2>
          <p className="text-lg text-gray-600">
            Measurable milestones for our strategic journey
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerAnimation}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { number: '01', goal: 'Expand to 5 New Markets', desc: 'Establish presence in Europe, Middle East, and Southeast Asia' },
            { number: '02', goal: 'Triple Client Base', desc: 'Scale to 1000+ active enterprise clients' },
            { number: '03', goal: 'Launch 10 Products', desc: 'Next-generation AI, cloud, and automation solutions' },
            { number: '04', goal: 'Build World-Class Team', desc: 'Grow to 200+ global specialists' },
            { number: '05', goal: 'Industry Recognition', desc: '2 major awards for innovation' }
          ].map((goal, idx) => (
            <motion.div
              key={idx}
              variants={childAnimation}
              className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-200 hover:border-blue-400 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-sm">
                  {goal.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">
                  {goal.goal}
                </h3>
                <p className="text-gray-700 text-sm">
                  {goal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="light" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be Part of Our Vision
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Partner with AvantCore to transform your business and be part of the future of enterprise technology.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex gap-4"
          >
            <Button variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default VisionPage;

