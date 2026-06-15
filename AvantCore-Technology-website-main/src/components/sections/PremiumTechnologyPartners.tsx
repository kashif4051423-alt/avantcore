import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { containerAnimation, childAnimation, scrollReveal } from '@/constants/animations';

interface TechLogo {
  src: string;
  alt: string;
}

interface PremiumTechnologyPartnersProps {
  logos: TechLogo[];
}

const PremiumTechnologyPartners = ({ logos }: PremiumTechnologyPartnersProps) => {
  return (
    <Section background="white" spacing="generous">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mb-6">
          Technology Partners
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          Built on industry-leading platforms, trusted by enterprises worldwide
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerAnimation}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={childAnimation}
            className="group"
          >
            <div className="relative h-40 flex items-center justify-center">
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary from-0% to-blue-600 to-100% rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
              ></motion.div>

              {/* Card container with premium styling */}
              <motion.div
                className="relative w-full h-full bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
                whileHover={{
                  borderColor: '#1A237E',
                  boxShadow: '0 20px 40px rgba(26, 35, 126, 0.1)',
                  y: -8,
                }}
              >
                {/* Subtle 3D depth background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                ></motion.div>

                {/* Logo with grayscale-to-color transition */}
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 object-contain relative z-10 filter grayscale transition-all duration-500"
                  whileHover={{
                    filter: 'grayscale(0%)',
                    scale: 1.08,
                  }}
                />
              </motion.div>

              {/* Professional shadow effect */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-4 bg-black rounded-full opacity-0 blur-lg transition-opacity duration-300"
                style={{ filter: 'blur(12px)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
              ></motion.div>
            </div>

            {/* Hover label */}
            <motion.p
              className="text-center text-sm font-medium text-slate-600 mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {logo.alt}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
    </Section>
  );
};

export default PremiumTechnologyPartners;
