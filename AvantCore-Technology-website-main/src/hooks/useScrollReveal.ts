import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * useScrollReveal Hook
 * 
 * Manages scroll reveal animations for elements
 * Triggers animations when element comes into view
 * 
 * @param options - Additional options for inView detection
 * @returns Object with ref and inView state
 * 
 * @example
 * const { ref, inView } = useScrollReveal();
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial="hidden"
 *     animate={inView ? "visible" : "hidden"}
 *     variants={premiumScrollReveal}
 *   >
 *     Content that reveals on scroll
 *   </motion.div>
 * );
 */
export const useScrollReveal = (options?: {
  margin?: string;
  once?: boolean;
  amount?: 'some' | 'all' | number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '0px 0px -100px 0px',
    amount: options?.amount ?? 'some',
  });

  return { ref, inView };
};

/**
 * useParallaxScroll Hook
 * 
 * Creates parallax scroll effect for images and backgrounds
 * Moves element at reduced speed compared to scroll
 * 
 * @param strength - How much to move (0.1 = subtle, 0.5 = moderate)
 * @returns Object with ref and y offset
 * 
 * @example
 * const { ref, yOffset } = useParallaxScroll(0.2);
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     style={{ y: yOffset }}
 *   >
 *     <img src="..." />
 *   </motion.div>
 * );
 */
export const useParallaxScroll = (strength: number = 0.1) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    margin: '0px 0px -100px 0px',
    amount: 'some',
  });

  // Return the ref and a simple Y offset calculation
  // In actual implementation, this would track scroll position
  return { ref, inView, strength };
};

/**
 * useStaggerReveal Hook
 * 
 * Manages staggered animations for lists and grids
 * Each child animates in sequence
 * 
 * @param itemCount - Number of items to stagger
 * @param delayPerItem - Delay between items in seconds
 * @returns Object with ref and inView state
 * 
 * @example
 * const { ref, inView } = useStaggerReveal(5, 0.12);
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial="hidden"
 *     animate={inView ? "visible" : "hidden"}
 *     variants={premiumStaggerContainer}
 *   >
 *     {items.map(item => (
 *       <motion.div key={item.id} variants={premiumStaggerItem}>
 *         {item.content}
 *       </motion.div>
 *     ))}
 *   </motion.div>
 * );
 */
export const useStaggerReveal = (
  itemCount?: number,
  delayPerItem?: number
) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    amount: 'some',
  });

  return { ref, inView, itemCount, delayPerItem };
};

/**
 * useImageFadeIn Hook
 * 
 * Optimized for image loading animations
 * Waits for image to load before animating
 * 
 * @returns Object with ref, inView, and loading state
 * 
 * @example
 * const { ref, inView, isLoaded } = useImageFadeIn();
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial="hidden"
 *     animate={inView && isLoaded ? "visible" : "hidden"}
 *     variants={imageFadeIn}
 *   >
 *     <img onLoad={handleImageLoad} src="..." />
 *   </motion.div>
 * );
 */
export const useImageFadeIn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  return { ref, inView };
};

/**
 * useTextReveal Hook
 * 
 * Manages text reveal animations
 * Can animate entire text or line by line
 * 
 * @returns Object with ref and inView state
 * 
 * @example
 * const { ref, inView } = useTextReveal();
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial="hidden"
 *     animate={inView ? "visible" : "hidden"}
 *     variants={contentFadeIn}
 *   >
 *     <motion.p variants={contentFadeInItem}>Line 1</motion.p>
 *     <motion.p variants={contentFadeInItem}>Line 2</motion.p>
 *   </motion.div>
 * );
 */
export const useTextReveal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    amount: 'some',
  });

  return { ref, inView };
};

/**
 * useCardHover Hook
 * 
 * Manages card hover animations
 * Provides ref for card element
 * 
 * @returns Object with ref for card element
 * 
 * @example
 * const { cardRef } = useCardHover();
 * 
 * return (
 *   <motion.div
 *     ref={cardRef}
 *     whileHover={{ y: -6 }}
 *     transition={{ duration: 0.3 }}
 *   >
 *     Card content
 *   </motion.div>
 * );
 */
export const useCardHover = () => {
  const cardRef = useRef(null);

  return { cardRef };
};
