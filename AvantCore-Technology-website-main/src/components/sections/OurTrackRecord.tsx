import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';
import { scrollRevealLeft, scrollRevealRight, containerAnimation, childAnimation } from '@/constants/animations';

const StatCounter = ({ 
  number, 
  label, 
  suffix = '' 
}: { 
  number: number; 
  label: string; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <motion.div ref={ref} variants={childAnimation} className="text-center">
      <div className="mb-4">
        <p className="text-5xl md:text-6xl font-light text-primary">
          {count.toLocaleString()}{suffix}
        </p>
      </div>
      <p className="text-slate-600 text-base md:text-lg font-medium tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
};

const OurTrackRecord = () => {
  return (
    <>
      {/* Main Track Record Section */}
      <Section background="slate-50" spacing="generous">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Proven delivery excellence. Trusted by enterprise leaders. Delivering measurable business impact across industries and geographies.
            </p>
          </motion.div>

          {/* Main Statistics Grid - 2x3 Premium Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerAnimation}
          >
            <StatCounter number={500} label="Projects Delivered" suffix="+" />
            <StatCounter number={100} label="Enterprise Clients" suffix="+" />
            <StatCounter number={20} label="Years of Excellence" suffix="+" />
            <StatCounter number={8} label="Industries Served" />
            <StatCounter number={4} label="Continents" />
            <StatCounter number={1200} label="Technology Professionals" suffix="+" />
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          {/* Impact Section - 2 Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Growth & Scale */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollRevealLeft}
              className="space-y-8"
            >
              <h3 className="text-4xl font-light text-slate-900 leading-tight">
                Scaling Enterprise Operations
              </h3>

              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerAnimation}
              >
                {[
                  {
                    metric: 'Avg 40%',
                    description: 'Operational efficiency improvement across client implementations'
                  },
                  {
                    metric: 'Avg 35%',
                    description: 'Cost reduction in enterprise IT infrastructure and operations'
                  },
                  {
                    metric: 'Avg 60%',
                    description: 'Time-to-market acceleration for new digital initiatives'
                  },
                  {
                    metric: '99.9%',
                    description: 'System uptime and availability across production deployments'
                  }
                ].map((item, index) => (
                  <motion.div key={index} variants={childAnimation} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent"></div>
                    </div>
                    <div>
                      <p className="text-3xl font-light text-primary mb-2">{item.metric}</p>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Professional Image + Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollRevealRight}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Enterprise Success Stories"
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
              />

              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerAnimation}
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  Trusted by Leading Enterprises
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: 'On-Time Delivery', stat: '95%' },
                    { title: 'Client Retention', stat: '92%' },
                    { title: 'Quality Score', stat: '4.9/5' },
                    { title: 'Support SLA', stat: '99.8%' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={childAnimation}
                      className="p-4 bg-white rounded-lg border border-slate-200"
                    >
                      <p className="text-3xl font-light text-primary mb-2">{item.stat}</p>
                      <p className="text-slate-600 text-sm font-medium">{item.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Expertise Sections - Alternating Pattern */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="Enterprise Platform Expertise"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
            className="space-y-8"
          >
            <h3 className="text-4xl font-light text-slate-900 leading-tight">
              Enterprise Platform Expertise
            </h3>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerAnimation}
            >
              {[
                'ERP System Implementation & Optimization',
                'Cloud Infrastructure & Migration',
                'Business Intelligence & Analytics',
                'Custom Enterprise Software Development',
                'Enterprise API Architecture',
                'Database Design & Optimization'
              ].map((expertise, index) => (
                <motion.div key={index} variants={childAnimation} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">{expertise}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Industry Vertical Expertise */}
      <Section background="slate-50" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
            className="space-y-8"
          >
            <h3 className="text-4xl font-light text-slate-900 leading-tight">
              Vertical Industry Expertise
            </h3>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerAnimation}
            >
              {[
                'Financial Services',
                'Manufacturing',
                'Retail & Commerce',
                'Healthcare',
                'Technology',
                'Telecommunications',
                'Energy & Utilities',
                'Public Sector'
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={childAnimation}
                  className="p-4 bg-white rounded-lg border border-slate-200"
                >
                  <p className="text-slate-900 font-medium">{industry}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Industry Expertise"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>

      {/* Client Success Stories - Brief Section */}
      <Section background="white" spacing="generous">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-light text-slate-900 leading-tight text-center mb-12">
            Client Success & Impact
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerAnimation}
          >
            {[
              {
                title: 'Fortune 500 Retailer',
                challenge: 'Legacy ERP modernization',
                result: '45% operational cost reduction, 60% faster order fulfillment'
              },
              {
                title: 'Global Financial Institution',
                challenge: 'Digital banking transformation',
                result: '2M+ daily transactions, 99.95% uptime, 50% faster feature deployment'
              },
              {
                title: 'Leading Healthcare Provider',
                challenge: 'Patient data analytics platform',
                result: 'Real-time insights for 500K+ patients, 35% improved care delivery'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={childAnimation}
                className="p-8 border border-slate-200 rounded-lg bg-gradient-to-br from-slate-50 to-white"
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{story.title}</h4>
                <p className="text-slate-600 text-sm mb-4">
                  <span className="font-medium">Challenge:</span> {story.challenge}
                </p>
                <p className="text-slate-700 text-sm font-medium">
                  <span className="text-primary">Result:</span> {story.result}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
};

export default OurTrackRecord;
