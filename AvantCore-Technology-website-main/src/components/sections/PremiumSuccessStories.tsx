import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { ViewportReveal } from '@/components/motion/ViewportAnimatedSection';
import { containerAnimation, childAnimation } from '@/constants/animations';

interface SuccessStory {
  src: string;
  alt: string;
}

interface PremiumSuccessStoriesProps {
  stories: SuccessStory[];
}

const PremiumSuccessStories = ({ stories }: PremiumSuccessStoriesProps) => {
  return (
    <Section background="light-gray" spacing="generous">
      <ViewportReveal delay={0}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trusted partnerships with leading organizations driving digital transformation
          </p>
        </motion.div>
      </ViewportReveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={containerAnimation}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {stories.map((story, index) => (
          <ViewportReveal key={index} delay={index * 0.05}>
            <motion.div
              variants={childAnimation}
              whileHover={{ y: -16 }}
              className="group h-full"
            >
              {/* 3D Card Container */}
              <motion.div
                className="relative w-full h-56 md:h-64 bg-white rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 perspective group"
                whileHover={{
                  borderColor: '#1A237E',
                  rotateY: 8,
                  rotateX: -5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Gradient Background - 3D depth */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"
                  style={{ transformZ: -30 }}
                ></motion.div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformZ: 40 }}
                ></motion.div>

                {/* Content wrapper with proper spacing */}
                <div className="relative z-20 w-full h-full flex items-center justify-center p-4 md:p-6 overflow-hidden">
                  {/* Image with enhanced 3D zoom effect */}
                  <motion.img
                    src={story.src}
                    alt={story.alt}
                    className="h-28 md:h-32 object-contain max-w-[90%] transition-all duration-500 filter drop-shadow-md"
                    whileHover={{
                      scale: 1.2,
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
                      y: -4,
                      opacity: 1,
                    }}
                    initial={{ opacity: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>

                {/* Bottom glow effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                  style={{ transformZ: 20 }}
                ></motion.div>

                {/* Premium shadow beneath card */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-black rounded-full opacity-0 blur-md transition-opacity duration-300"
                  whileHover={{ opacity: 0.1 }}
                ></motion.div>

                {/* Top shine effect on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ transformZ: 50 }}
                ></motion.div>

                {/* Floating light effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                {/* Bottom accent bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformZ: 60 }}
                ></motion.div>
              </motion.div>

              {/* Client name label below card - Enhanced */}
              <motion.div
                className="mt-5 text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
              >
                <p className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {story.alt}
                </p>
                <p className="text-xs text-gray-500 mt-1">Partner Success</p>
              </motion.div>
            </motion.div>
          </ViewportReveal>
        ))}
      </motion.div>

      {/* Decorative bottom element */}
      <ViewportReveal delay={0.2}>
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">
              Trusted Partners
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      </ViewportReveal>
    </Section>
  );
};

export default PremiumSuccessStories;
