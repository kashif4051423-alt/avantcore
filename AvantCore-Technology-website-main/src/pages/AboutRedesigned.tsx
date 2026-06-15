import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import {
  containerAnimation,
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
  ctaButtonHover,
} from '@/constants/animations';

const AboutRedesigned = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Background Image - Text on Side */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen md:h-[600px] flex items-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop)',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 via-60% to-transparent opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="max-w-lg"
            >
              <div className="mb-6 inline-block">
                <span className="px-3 py-1 rounded-full bg-accent bg-opacity-20 border border-accent border-opacity-50 text-accent text-xs font-semibold tracking-wider uppercase">
                  Digital Transformation Leader
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Enterprise Technology for Digital-First Organizations
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Build scalable, secure, and intelligent solutions that power modern business operations.
              </p>
              <motion.div
                whileHover="hover"
                variants={ctaButtonHover}
                className="inline-block"
              >
                <Button className="bg-accent hover:bg-orange-600 text-white px-6 py-2 text-base font-semibold">
                  Start Your Transformation
                </Button>
              </motion.div>
            </motion.div>

            {/* Image side - decorative or empty for text focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="hidden md:block"
            >
              {/* Spacer for layout */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Overview - Tech Solutions Focus */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
              alt="Advanced Technology Solutions"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase">About AVANTCORE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Technology That Powers Enterprise Growth
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              AVANTCORE is a technology solutions company specializing in enterprise software, cloud infrastructure, and digital transformation. We engineer solutions that scale with your business and integrate seamlessly with your existing ecosystem.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With expertise spanning ERP systems, cloud platforms, data analytics, and custom development, we help enterprises modernize operations, reduce costs, and accelerate time-to-market for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover="hover" variants={ctaButtonHover}>
                <Button className="bg-primary hover:bg-blue-800 text-white px-6 py-2">
                  Learn Our Story
                </Button>
              </motion.div>
              <motion.div whileHover="hover" variants={ctaButtonHover}>
                <Button className="bg-slate-100 hover:bg-slate-200 text-primary px-6 py-2">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Mission - Technical Excellence */}
      <Section background="light" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Mission-Driven Development"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-accent text-xs font-bold tracking-wider uppercase">Our Mission</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Architect Digital Excellence
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We architect and implement technology solutions that enable enterprises to innovate faster, operate smarter, and compete globally. Our mission is to democratize access to enterprise-grade technology.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe in building solutions that are not just technically sound but also strategically aligned with business objectives—creating lasting value for our clients and their stakeholders.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Our Vision - Innovation Leadership */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Future Technology Vision"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase">Our Vision</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Leading the Enterprise Tech Revolution
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We envision a world where intelligent, scalable technology is accessible to enterprises of all sizes. Where AI, cloud, and data converge to create unprecedented business opportunities.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our commitment is to pioneer next-generation solutions while maintaining the highest standards of security, performance, and reliability that enterprises demand.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why AVANTCORE - Tech Capabilities */}
      <Section background="light" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Technical Excellence"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-accent text-xs font-bold tracking-wider uppercase">Why AVANTCORE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Engineering Excellence Meets Business Impact
            </h2>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                {
                  icon: <Code2 className="w-5 h-5 text-accent" />,
                  title: 'Deep Technical Expertise',
                  description: 'Cloud-native architecture, microservices, API-first design, and enterprise DevOps practices.'
                },
                {
                  icon: <Shield className="w-5 h-5 text-accent" />,
                  title: 'Security & Compliance',
                  description: 'Enterprise-grade security, data governance, and industry compliance built into every solution.'
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-accent" />,
                  title: 'Proven ROI',
                  description: '500+ implementations delivering measurable cost reduction and performance improvements.'
                },
                {
                  icon: <Users2 className="w-5 h-5 text-accent" />,
                  title: '24/7 Global Support',
                  description: 'Dedicated engineering teams and round-the-clock support across all time zones.'
                }
              ].map((item, index) => (
                <motion.div key={index} variants={childAnimation} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Technology Stack & Capabilities */}
      <Section background="white" spacing="generous">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Our Technology Stack
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Built on cutting-edge platforms and frameworks to deliver scalable, high-performance solutions
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerAnimation}
        >
          {[
            {
              icon: <Database className="w-8 h-8" />,
              title: 'Enterprise Platforms',
              items: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Custom ERP']
            },
            {
              icon: <Cloud className="w-8 h-8" />,
              title: 'Cloud Infrastructure',
              items: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Solutions']
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Modern Development',
              items: ['React', 'Node.js', 'Python', 'Microservices']
            },
            {
              icon: <Layers className="w-8 h-8" />,
              title: 'Data & Analytics',
              items: ['Big Data', 'Machine Learning', 'BI Tools', 'Real-time Analytics']
            },
            {
              icon: <GitBranch className="w-8 h-8" />,
              title: 'DevOps & Automation',
              items: ['CI/CD', 'Kubernetes', 'IaC', 'Monitoring']
            },
            {
              icon: <Cpu className="w-8 h-8" />,
              title: 'AI & Automation',
              items: ['NLP', 'Computer Vision', 'RPA', 'Predictive Analytics']
            }
          ].map((stack, index) => (
            <motion.div
              key={index}
              variants={childAnimation}
              className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-accent mb-4">{stack.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{stack.title}</h3>
              <div className="space-y-2">
                {stack.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      {/* Global Presence - Updated for IT Company */}
      <Section background="light" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Global Presence"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase">Global Presence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Distributed Delivery, Global Impact
            </h2>

            <motion.div
              className="grid grid-cols-2 gap-8 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                { value: '100+', label: 'Enterprise Clients' },
                { value: '500+', label: 'Successful Projects' },
                { value: '4', label: 'Continents' },
                { value: '24/7', label: 'Support Coverage' }
              ].map((stat, index) => (
                <motion.div key={index} variants={childAnimation} className="p-4 rounded-lg bg-white border border-slate-200 hover:border-accent hover:shadow-md transition-all">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Strategic delivery centers across Asia Pacific, Europe, and North America enable us to provide 24/7 support, accelerated delivery, and local expertise backed by global resources.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Industries We Serve - IT Company Vertical Focus */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Industries Served"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-accent text-xs font-bold tracking-wider uppercase">Vertical Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Purpose-Built Solutions for Key Industries
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                'Financial Services & Banking',
                'Manufacturing & Logistics',
                'Retail & E-Commerce',
                'Technology & SaaS',
                'Healthcare & Life Sciences',
                'Media & Telecommunications',
                'Education & Research',
                'Energy & Utilities'
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={childAnimation}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-accent hover:bg-accent hover:bg-opacity-5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                    <p className="text-slate-900 font-medium">{industry}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Engineering Culture & Values */}
      <Section background="light" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="Engineering Excellence"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wider uppercase">Our Culture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Engineering Excellence, Customer Success
            </h2>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                {
                  title: 'Technical Rigor',
                  description: 'Code quality, security-first development, and continuous optimization define our engineering culture.'
                },
                {
                  title: 'Innovation',
                  description: 'We invest in emerging technologies—AI, cloud-native architecture, and modern development practices.'
                },
                {
                  title: 'Collaboration',
                  description: 'Cross-functional teams working seamlessly with clients as true technology partners.'
                },
                {
                  title: 'Accountability',
                  description: 'Ownership mentality drives us to deliver solutions that exceed expectations and create lasting impact.'
                }
              ].map((value, index) => (
                <motion.div key={index} variants={childAnimation}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Final Call To Action - Tech Focused */}
      <Section background="gradient" spacing="generous">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Your Digital Future
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Let our team architect solutions that accelerate growth, reduce complexity, and drive competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover="hover"
                variants={ctaButtonHover}
              >
                <Button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
                  Talk to Our Architects
                </Button>
              </motion.div>
              <motion.div
                whileHover="hover"
                variants={ctaButtonHover}
              >
                <Button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                  View Our Portfolio
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AboutRedesigned;
