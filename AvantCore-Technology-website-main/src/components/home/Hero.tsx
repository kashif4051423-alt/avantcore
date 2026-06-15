
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  backgroundImage: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: HeroSlide[] = [
    {
      title: 'Driving Innovation',
      subtitle: 'Delivering Excellence',
      description: 'AVANTCORE Technologies at the forefront of delivering innovative software solutions and services worldwide.',
      cta: 'Get Started Today',
      backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)'
    },
    {
      title: 'Enterprise Solutions',
      subtitle: 'Transform Your Business',
      description: 'Comprehensive ERP, GIS, BI, and custom technology solutions tailored to your needs.',
      cta: 'View Services',
      backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)'
    },
    {
      title: 'Digital Transformation',
      subtitle: 'Empower Your Operations',
      description: 'Cutting-edge technology solutions to streamline operations, boost productivity, and drive growth.',
      cta: 'Learn More',
      backgroundImage: 'linear-gradient(135deg, #0c4a6e 0%, #1e40af 50%, #2563eb 100%)'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
          style={{ background: slide.backgroundImage }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white space-y-6 md:space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-white/90">Leading Technology Partner</span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-2"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
                  {slide.title}
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-blue-100"
              >
                {slide.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
              >
                {slide.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-8 md:px-10 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  <span>View Services</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-white/70 text-sm mt-1">Years Experience</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-white/70 text-sm mt-1">Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-400">4</div>
                  <div className="text-white/70 text-sm mt-1">Countries</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-white/70 text-sm mt-1">Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual Elements */}
            <motion.div
              key={`visual-${currentSlide}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hidden lg:block relative h-full"
            >
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-xl font-bold">Enterprise Solutions</div>
                <div className="text-white/80 text-sm mt-2">Streamline operations with integrated ERP</div>
              </motion.div>

              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -left-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-xl font-bold">Data Analytics</div>
                <div className="text-white/80 text-sm mt-2">Transform data into actionable insights</div>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64 shadow-2xl"
              >
                <div className="text-orange-400 text-xl font-bold">Cloud Infrastructure</div>
                <div className="text-white/80 text-sm mt-2">Secure, scalable cloud solutions</div>
              </motion.div>

              {/* Central Accent */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-80 h-80 bg-gradient-to-br from-orange-500/10 to-blue-600/10 rounded-full blur-3xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-2 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-white/60 text-xs font-medium">Scroll</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [2, 6, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2 bg-white/60 rounded-full mt-1"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
