import React from 'react';
import { motion } from 'framer-motion';
import { ViewportAnimatedSection, ViewportReveal } from '@/components/motion/ViewportAnimatedSection';

const WhyChooseAvantcore = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <ViewportAnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" imageDelay={0} contentDelay={0.1}>
          {/* Left: Large Premium Image - with scroll direction-aware animations */}
          <motion.div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src="/why%20chose%20.jpg"
                alt="Why Choose AVANTCORE - Enterprise Technology Partnership"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Right: Content - Compact and Premium */}
          <motion.div className="space-y-8">
            {/* Title */}
            <motion.div>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                Why Leading Businesses Choose AVANTCORE
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                AVANTCORE helps organizations accelerate digital transformation through innovative technology solutions, enterprise expertise, and a commitment to long-term business success. We combine strategy, technology, and execution to deliver measurable outcomes across industries and global markets.
              </p>
            </motion.div>

            {/* Value Points - Compact */}
            <div className="space-y-6 pt-4">
              {/* Point 1 */}
              <ViewportReveal delay={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="pb-6 border-b border-slate-200"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Enterprise Expertise
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our multidisciplinary teams bring extensive experience in software engineering, cloud technologies, data solutions, and digital transformation initiatives.
                  </p>
                </motion.div>
              </ViewportReveal>

              {/* Point 2 */}
              <ViewportReveal delay={0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="pb-6 border-b border-slate-200"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Tailored Solutions
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We design and develop customized technology solutions aligned with specific business goals, operational requirements, and growth strategies.
                  </p>
                </motion.div>
              </ViewportReveal>

              {/* Point 3 */}
              <ViewportReveal delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Trusted Long-Term Partnership
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We work as an extension of our clients' teams, providing continuous support, innovation, and scalable solutions that evolve with their business.
                  </p>
                </motion.div>
              </ViewportReveal>
            </div>
          </motion.div>
        </ViewportAnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseAvantcore;
