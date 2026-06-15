import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ViewportAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  imageDelay?: number;
  contentDelay?: number;
}

export const ViewportAnimatedSection = ({
  children,
  className = '',
  imageDelay = 0,
  contentDelay = 0.1,
}: ViewportAnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animation variants based on scroll direction
  const imageVariants = {
    hidden:
      scrollDirection === 'down'
        ? { opacity: 0, y: 40 }
        : { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    exit:
      scrollDirection === 'down'
        ? { opacity: 0, y: -40 }
        : { opacity: 0, y: 40 },
  };

  const contentVariants = {
    hidden:
      scrollDirection === 'down'
        ? { opacity: 0, y: 30 }
        : { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit="exit"
      className={className}
    >
      {/* Render children and wrap images/content with appropriate variants */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Check if it's an image or image container
          if (
            child.type === 'img' ||
            (child.props?.className && child.props.className.includes('rounded'))
          ) {
            return (
              <motion.div
                key={index}
                variants={imageVariants}
                transition={{ delay: imageDelay }}
              >
                {child}
              </motion.div>
            );
          }
          return (
            <motion.div
              key={index}
              variants={contentVariants}
              transition={{ delay: contentDelay + index * 0.1 }}
            >
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

// Simpler wrapper for direct control
export const ViewportReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
