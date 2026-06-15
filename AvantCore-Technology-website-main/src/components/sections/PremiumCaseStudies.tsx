import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { containerAnimation, childAnimation, scrollRevealLeft, scrollRevealRight } from '@/constants/animations';

interface CaseStudy {
  src: string;
  alt: string;
  industry?: string;
  outcome?: string;
}

interface PremiumCaseStudiesProps {
  stories: CaseStudy[];
}

// Industry mapping and outcomes for each client
const caseStudyDetails: Record<string, { industry: string; outcome: string }> = {
  'Rising Distribution': {
    industry: 'Distribution & Logistics',
    outcome: 'Increased order fulfillment efficiency by 45%',
  },
  'Dixy Chicken': {
    industry: 'Food & Beverage',
    outcome: 'Streamlined supply chain operations',
  },
  'AGC Pakistan': {
    industry: 'Manufacturing',
    outcome: 'Improved production efficiency by 40%',
  },
  'Riyal Commission': {
    industry: 'Financial Services',
    outcome: 'Enhanced transaction processing speed',
  },
  'Punjab Health Foundation': {
    industry: 'Healthcare',
    outcome: 'Digitized patient management system',
  },
  'Prime Food Distribution': {
    industry: 'Food & Logistics',
    outcome: 'Real-time inventory optimization',
  },
  'Inventooly': {
    industry: 'E-Commerce',
    outcome: 'Automated inventory management platform',
  },
  'Hyundai': {
    industry: 'Automotive',
    outcome: 'Enhanced dealer management system',
  },
  'Aryana Food': {
    industry: 'Food & Beverage',
    outcome: 'Integrated supply chain solution',
  },
  'Star Food': {
    industry: 'Food Distribution',
    outcome: 'Optimized distribution network',
  },
  'Housr': {
    industry: 'Real Estate',
    outcome: 'Property management platform',
  },
  'Urtasker': {
    industry: 'On-Demand Services',
    outcome: 'Service provider management system',
  },
  'GirlzWhoSell': {
    industry: 'E-Commerce',
    outcome: 'Women entrepreneur platform',
  },
  'Ayan Energy': {
    industry: 'Energy',
    outcome: 'Energy management system implementation',
  },
};

const PremiumCaseStudies = ({ stories }: PremiumCaseStudiesProps) => {
  const [selectedCaseId, setSelectedCaseId] = useState(0);

  // First story as featured case study
  const featuredStory = stories[0];
  const featuredDetails = caseStudyDetails[featuredStory.alt] || { industry: 'Enterprise', outcome: 'Successful implementation' };

  // Remaining stories as supporting case studies
  const supportingStories = stories.slice(1);

  return (
    <>
      {/* Featured Case Study */}
      <Section background="white" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real enterprise achievements. Real business impact. Real partnerships.
          </p>
        </motion.div>

        {/* Featured Case Study Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerAnimation}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-20"
        >
          {/* Featured Image */}
          <motion.div
            variants={scrollRevealLeft}
            className="relative group overflow-hidden rounded-xl"
          >
            <motion.div
              className="relative h-96 md:h-[500px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden"
              whileHover={{
                boxShadow: '0 30px 60px rgba(26, 35, 126, 0.15), 0 15px 30px rgba(26, 35, 126, 0.1)',
                y: -12,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Image container with zoom effect */}
              <motion.img
                src={featuredStory.src}
                alt={featuredStory.alt}
                className="w-full h-full object-contain p-12 bg-white"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              ></motion.div>
            </motion.div>

            {/* Shadow effect */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5/6 h-6 bg-black rounded-full opacity-0 blur-lg transition-opacity duration-300"
              whileHover={{ opacity: 0.1 }}
            ></motion.div>
          </motion.div>

          {/* Featured Content */}
          <motion.div
            variants={scrollRevealRight}
            className="space-y-8"
          >
            {/* Industry Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-primary text-sm font-semibold tracking-wide uppercase">
                {featuredDetails.industry}
              </span>
            </div>

            {/* Company Name */}
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {featuredStory.alt}
            </h3>

            {/* Outcome Section */}
            <div className="space-y-4">
              <p className="text-lg font-semibold text-slate-900">Business Outcome</p>
              <p className="text-xl text-slate-600 leading-relaxed">
                {featuredDetails.outcome}
              </p>
            </div>

            {/* Key Achievements */}
            <motion.div
              className="space-y-4 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerAnimation}
            >
              {[
                'Custom enterprise solution delivered',
                'Seamless implementation and integration',
                'Long-term partnership and support',
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  variants={childAnimation}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <p className="text-slate-700 font-medium">{achievement}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pt-4"
              whileHover={{ x: 4 }}
            >
              <p className="text-primary font-semibold cursor-pointer hover:text-blue-800 transition-colors">
                View Full Case Study →
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </Section>

      {/* Supporting Case Studies Grid */}
      <Section background="slate-50" spacing="generous">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
            Additional Success Stories
          </h3>
        </motion.div>

        {/* Case Study Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerAnimation}
        >
          {supportingStories.map((story, index) => {
            const details = caseStudyDetails[story.alt] || { industry: 'Enterprise', outcome: 'Successful implementation' };

            return (
              <motion.div
                key={index}
                variants={childAnimation}
                className="group cursor-pointer"
                onMouseEnter={() => setSelectedCaseId(index + 1)}
              >
                {/* Case Study Card */}
                <motion.div
                  className="relative h-80 rounded-xl overflow-hidden bg-white border border-slate-200"
                  whileHover={{
                    borderColor: '#1A237E',
                    boxShadow: '0 24px 48px rgba(26, 35, 126, 0.12), 0 12px 24px rgba(26, 35, 126, 0.08)',
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-2/3 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <motion.img
                      src={story.src}
                      alt={story.alt}
                      className="w-full h-full object-contain p-8"
                      whileHover={{
                        scale: 1.12,
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Overlay gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    ></motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white p-6 border-t border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 truncate">
                      {story.alt}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {details.industry}
                    </p>
                  </div>

                  {/* Industry Badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white bg-opacity-90 border border-blue-200"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Case Study
                    </p>
                  </motion.div>
                </motion.div>

                {/* Outcome reveal on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-3"
                >
                  <p className="text-sm font-medium text-slate-900">
                    Business Outcome
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {details.outcome}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 text-lg">
            {stories.length} successful enterprise partnerships across industries
          </p>
        </motion.div>
      </Section>
    </>
  );
};

export default PremiumCaseStudies;
