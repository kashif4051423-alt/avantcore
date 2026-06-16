import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  containerAnimation,
  childAnimation,
  scrollRevealLeft,
  scrollRevealRight,
  ctaButtonHover,
} from '@/constants/animations';

const AboutEnterprise = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Image with Left Text Overlay */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 from-0% via-slate-900 via-50% to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Architecting Enterprise Solutions for Global Organizations
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              AVANTCORE delivers technology infrastructure that enables enterprises to operate at scale and innovate with confidence.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 1: Company - Content Left, Image Right */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal type="text" delay={0}>
            <h2 className="text-5xl font-light text-slate-900 mb-6 leading-tight">
              Two Decades of Enterprise Expertise
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              AVANTCORE is a trusted technology partner to Fortune 500 enterprises and mid-market leaders. Our foundation is built on deep domain expertise and unwavering commitment to client success.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From complex enterprise systems to cloud-native solutions, we deliver measurable business transformation through strategic thinking and technical excellence.
            </p>
          </ScrollReveal>

          <ScrollReveal type="image" delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Enterprise Solutions"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 2: Mission - Image Left, Content Right */}
      <Section background="slate-50" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal type="image" delay={0}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="Our Mission"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </ScrollReveal>

          <ScrollReveal type="text" delay={0.1}>
            <h2 className="text-5xl font-light text-slate-900 mb-6 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We empower enterprises to navigate digital transformation by architecting technology solutions that are secure, scalable, and strategically aligned with business objectives.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Simplifying complexity, accelerating value creation, and enabling organizations to operate as truly digital-first enterprises in a competitive global market.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 3: Vision - Content Left, Image Right */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal type="text" delay={0}>
            <h2 className="text-5xl font-light text-slate-900 mb-6 leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We envision a world where enterprise technology is intuitive, adaptive, and built to unlock human potential at scale. Where organizations harness data, cloud, and artificial intelligence as foundational operating principles.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Technology becomes invisible—seamlessly enabling organizations to create value, serve customers, and build sustainable competitive advantage.
            </p>
          </ScrollReveal>

          <ScrollReveal type="image" delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Our Vision"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 4: Why AVANTCORE */}
      <Section background="slate-50" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="Why AVANTCORE"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-10 leading-tight">
              Why AVANTCORE
            </h2>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                { title: 'Domain Expertise', desc: 'Hands-on experience across financial services, manufacturing, technology, and healthcare.' },
                { title: 'End-to-End Delivery', desc: 'Strategy, architecture, implementation, deployment, and managed services.' },
                { title: 'Security First', desc: 'Enterprise-grade security and compliance integrated into every solution.' },
                { title: 'Proven Results', desc: '500+ implementations with demonstrated ROI and long-term partnerships.' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={childAnimation}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Section 5: Global Presence */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-10 leading-tight">
              Global Reach, Local Presence
            </h2>

            <motion.div
              className="grid grid-cols-2 gap-12 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                { num: '100+', label: 'Enterprise Clients' },
                { num: '500+', label: 'Implementations' },
                { num: '4', label: 'Continents' },
                { num: '24/7', label: 'Global Support' }
              ].map((s, i) => (
                <motion.div key={i} variants={childAnimation}>
                  <p className="text-5xl font-light text-primary mb-2">{s.num}</p>
                  <p className="text-slate-600 text-xs tracking-wide uppercase font-medium">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Delivery centers across Asia, Europe, and North America provide 24/7 support with local expertise backed by global resources.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Global Operations"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Section 6: Industries */}
      <Section background="slate-50" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="Industries"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-10 leading-tight">
              Industries We Serve
            </h2>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                'Financial Services', 'Manufacturing', 'Technology', 'Healthcare',
                'Retail & Commerce', 'Energy & Utilities', 'Telecommunications', 'Public Sector'
              ].map((ind, i) => (
                <motion.div key={i} variants={childAnimation} className="py-4 border-b border-slate-200">
                  <p className="text-slate-900 font-medium">{ind}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Section 7: How We Deliver */}
      <Section background="white" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-8 leading-tight">
              How We Deliver
            </h2>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                { step: '01', title: 'Strategy & Assessment', desc: 'Discovery, current state analysis, and target vision.' },
                { step: '02', title: 'Architecture & Design', desc: 'Purpose-built architecture aligned with business objectives.' },
                { step: '03', title: 'Implementation & Delivery', desc: 'Agile execution with continuous quality assurance.' },
                { step: '04', title: 'Transformation & Support', desc: 'Knowledge transfer and long-term managed services.' }
              ].map((item, i) => (
                <motion.div key={i} variants={childAnimation} className="flex gap-4">
                  <p className="text-2xl font-light text-accent flex-shrink-0">{item.step}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Our Approach"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Section 8: Our People */}
      <Section background="slate-50" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="Our People"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-8 leading-tight">
              Built by Exceptional Talent
            </h2>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                { title: 'Technical Excellence', desc: 'World-class engineers with deep expertise across enterprise platforms and cloud.' },
                { title: 'Continuous Learning', desc: 'Investment in certifications and exposure to cutting-edge technologies.' },
                { title: 'Client-Centric Culture', desc: 'Driven by mission to deliver exceptional value. Success measured by business outcomes.' }
              ].map((item, i) => (
                <motion.div key={i} variants={childAnimation}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" spacing="generous">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
            Let's Architect Your Future
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Whether beginning your transformation or optimizing your stack, we partner with you to drive success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover="hover" variants={ctaButtonHover}>
              <Button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 text-base font-medium">
                Start a Conversation
              </Button>
            </motion.div>
            <motion.div whileHover="hover" variants={ctaButtonHover}>
              <Button className="bg-white bg-opacity-20 border border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-base font-medium">
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default AboutEnterprise;

