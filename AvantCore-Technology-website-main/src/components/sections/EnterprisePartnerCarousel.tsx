import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { ViewportReveal } from '@/components/motion/ViewportAnimatedSection';

interface TechLogo {
  src: string;
  alt: string;
}

interface EnterprisePartnerCarouselProps {
  logos: TechLogo[];
}

const EnterprisePartnerCarousel = ({ logos }: EnterprisePartnerCarouselProps) => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section background="white" spacing="generous">
      {/* Header */}
      <ViewportReveal delay={0}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Technology Partners
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built on industry-leading platforms trusted by enterprises worldwide
          </p>
        </motion.div>
      </ViewportReveal>

      {/* Grid Layout - All 16 Logos Visible */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerAnimation}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {logos.map((logo, idx) => (
          <ViewportReveal key={idx} delay={idx * 0.05}>
            <motion.div
              variants={itemAnimation}
              whileHover={{ y: -12 }}
              className="h-full"
            >
              {/* 3D Card Container */}
              <motion.div
                className="relative h-48 md:h-56 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 perspective group"
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"
                  style={{ transformZ: -20 }}
                ></motion.div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformZ: 20 }}
                ></motion.div>

                {/* Logo Container - Centered */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 md:h-24 object-contain max-w-full filter drop-shadow-sm"
                    whileHover={{
                      scale: 1.12,
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Bottom Accent Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transformZ: 30 }}
                ></motion.div>

                {/* Floating Light Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                {/* Company Name Label */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs md:text-sm font-semibold text-gray-900 text-center truncate">
                    {logo.alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </ViewportReveal>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <ViewportReveal delay={0.3}>
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </ViewportReveal>
    </Section>
  );
};

export default EnterprisePartnerCarousel;
