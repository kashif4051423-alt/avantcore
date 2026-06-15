import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  backgroundColor?: string;
  link?: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

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

  if (!slides || slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Gradient Overlay - Refined for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Left Aligned Enterprise Layout */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6 md:space-y-8"
          >
            {/* Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 origin-left"
            />

            {/* Main Title - Enterprise Typography */}
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
                {slide.title}
              </h1>
            </motion.div>

            {/* Subtitle - Professional weight */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-lg"
            >
              {slide.subtitle}
            </motion.p>

            {/* Description */}
            {slide.description && (
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
                className="text-base text-gray-300 max-w-lg leading-relaxed"
              >
                {slide.description}
              </motion.p>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
              className="pt-3"
            >
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => slide.link && navigate(slide.link)}
                className="group inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                {slide.buttonText}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} className="group-hover:text-blue-600 transition" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>



      {/* Slide Indicators - Modern Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setAutoPlay(false);
            }}
            animate={{
              width: index === currentSlide ? 28 : 8,
              backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
            transition={{ duration: 0.3 }}
            className={`h-2 rounded-full transition-all cursor-pointer backdrop-blur-sm`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


    </section>
  );
};

export default HeroSlider;
