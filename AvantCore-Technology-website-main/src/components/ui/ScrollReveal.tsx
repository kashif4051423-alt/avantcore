import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  type?: 'image' | 'text' | 'full';
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  type = 'full',
  delay = 0,
  className = '',
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  // When scrolling down: comes from top (opacity 0 to 1, y: 60 to 0)
  // When scrolling up: goes to bottom (animated in reverse)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
