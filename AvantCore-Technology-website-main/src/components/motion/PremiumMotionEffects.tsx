import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

// Parallax scroll effect
export const ParallaxSection = ({ children, offset = 50 }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

// Image zoom reveal effect
export const ImageZoomReveal = ({ src, alt, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut', delay }}
      className="overflow-hidden rounded-2xl"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

// Text reveal animation
export const TextReveal = ({ children, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

// Staggered container
export const StaggerContainer = ({ children, staggerDelay = 0.1 }: any) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered item
export const StaggerItem = ({ children }: any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
};

// Hover lift effect
export const HoverLift = ({ children, intensity = 10 }: any) => {
  return (
    <motion.div
      whileHover={{ y: -intensity }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Animated counter
export const AnimatedCounter = ({ from = 0, to, suffix = '', delay = 0 }: any) => {
  const count = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onViewportEnter={() => {
        if (count.current) {
          let current = from;
          const increment = to / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= to) {
              current = to;
              clearInterval(timer);
            }
            (count.current as any).textContent = Math.floor(current) + suffix;
          }, 30);
        }
      }}
    >
      <span ref={count}>{from}{suffix}</span>
    </motion.div>
  );
};

// Marquee/Infinite scroll effect
export const InfiniteMarquee = ({ children, speed = 50 }: any) => {
  return (
    <motion.div
      className="flex overflow-hidden"
      initial={{ x: 0 }}
      animate={{ x: -1000 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
      {children}
    </motion.div>
  );
};
