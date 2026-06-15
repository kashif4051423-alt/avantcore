import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/constants/animations';

interface ModernHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const ModernHero = ({
  title,
  subtitle,
  description,
  primaryButtonText = 'Get Started',
  secondaryButtonText = 'Learn More',
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: ModernHeroProps) => {
  return (
    <Section background="blue-gradient" padding="none" className="!py-0">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ y: [-20, 20, -20], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20], x: [-10, 0, -10] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="text-white space-y-6 md:space-y-8"
            >
              {/* Subtitle */}
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-orange-300">
                  {subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg"
              >
                {description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  onClick={onPrimaryClick}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  className="w-full sm:w-auto"
                >
                  {primaryButtonText}
                </Button>
                <Button
                  onClick={onSecondaryClick}
                  variant="secondary"
                  size="lg"
                  icon={<Play size={20} />}
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900"
                >
                  {secondaryButtonText}
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/20"
              >
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">
                    15+
                  </div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">
                    500+
                  </div>
                  <div className="text-blue-100 text-sm">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">
                    8500+
                  </div>
                  <div className="text-blue-100 text-sm">Team Members</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Content - Right Side */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                },
              }}
              className="hidden lg:block relative h-96"
            >
              {/* Floating Cards */}
              <motion.div
                variants={slideInRight}
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-2xl font-bold mb-2">
                  AI Solutions
                </div>
                <div className="text-white text-sm">
                  Next-gen digital transformation
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-2xl font-bold mb-2">
                  300+ Clients
                </div>
                <div className="text-white text-sm">
                  Global enterprise customers
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 right-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-2xl font-bold mb-2">
                  16 Countries
                </div>
                <div className="text-white text-sm">
                  Global presence and reach
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ModernHero;
