import { Variants } from 'framer-motion';

// ==================== FADE ANIMATIONS ====================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== SLIDE ANIMATIONS ====================
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== SCALE ANIMATIONS ====================
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// ==================== CONTAINER ANIMATIONS ====================
export const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const containerAnimationSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// ==================== CHILD ANIMATIONS ====================
export const childAnimation: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const childAnimationStagger: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== STAGGER CONTAINERS ====================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

// ==================== SCROLL REVEAL ANIMATIONS ====================
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export const scrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -60, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export const scrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 60, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

// ==================== SUBTLE SCROLL REVEAL ====================
export const subtleScrollReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const subtleScrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const subtleScrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// ==================== HOVER ANIMATIONS ====================
export const hoverScale = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const hoverLift = {
  whileHover: { y: -8 },
  whileTap: { y: 0 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const cardHover: Variants = {
  whileHover: {
    y: -8,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  whileTap: {
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

// ==================== SUBTLE CARD HOVER ====================
export const subtleCardHover = {
  whileHover: {
    y: -4,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// ==================== IMAGE MOTION EFFECTS ====================
export const imageZoom = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const subtleImageZoom = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

export const imageMotionParallax = (offset: number) => ({
  initial: { y: 0 },
  whileInView: { y: offset },
  transition: { duration: 0.6, ease: 'easeOut' },
});

// ==================== CTA ANIMATIONS ====================
export const ctaHover = {
  whileHover: {
    scale: 1.03,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const ctaButtonHover = {
  whileHover: {
    scale: 1.02,
    y: -2,
  },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

// ==================== SUBTLE CTA HOVER ====================
export const subtleCtaHover = {
  whileHover: {
    scale: 1.01,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  whileTap: { scale: 0.99 },
  transition: { duration: 0.25, ease: 'easeOut' },
};

// ==================== NUMBER COUNTER ANIMATION ====================
export const numberCounterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const numberCounterItem: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== SECTION TRANSITIONS ====================
export const sectionEntry: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const sectionEntryWithChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ==================== ICON ANIMATIONS ====================
export const iconHover = {
  whileHover: { scale: 1.15, rotate: 5 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

export const subtleIconHover = {
  whileHover: { scale: 1.08 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const iconPulse = {
  animate: { scale: [1, 1.08, 1] },
  transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
};

// ==================== TEXT REVEAL ====================
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== BLUR IN ANIMATION ====================
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ==================== ENTERPRISE LINK HOVER ====================
export const enterpriseLinkHover = {
  whileHover: { x: 4 },
  transition: { duration: 0.25, ease: 'easeOut' },
};

// ==================== SUBTLE UNDERLINE ANIMATION ====================
export const underlineHover = {
  whileHover: { backgroundSize: '100% 2px' },
  transition: { duration: 0.3, ease: 'easeOut' },
};

// ==================== BADGE ANIMATIONS ====================
export const badgePulse = {
  animate: { opacity: [1, 0.7, 1] },
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
};

// ==================== SUBTLE SLIDE UP ====================
export const subtleSlideUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ==================== STAGGER FAST ====================
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ==================== SHADOW HOVER ====================
export const shadowHover = {
  whileHover: {
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
  transition: { duration: 0.3, ease: 'easeOut' },
};

// ==================== SUBTLE BORDER EXPANSION ====================
export const borderExpansion = {
  whileHover: {
    borderColor: 'rgb(37, 99, 235)',
  },
  transition: { duration: 0.3, ease: 'easeOut' },
};

// ==================== PREMIUM SCROLL REVEAL ANIMATIONS ====================
// Enterprise-grade scroll animations - subtle and sophisticated
export const premiumScrollReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier for premium feel
    },
  },
};

export const premiumScrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -50, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.85, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

export const premiumScrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 50, y: 30 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.85, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== IMAGE FADE IN ANIMATIONS ====================
// Smooth image fade-in with subtle scale for premium look
export const imageFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.0, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

export const imageFadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

export const imageFadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== CONTENT FADE-IN ANIMATIONS ====================
// Text content fades in with staggered children for enterprise feel
export const contentFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const contentFadeInItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== PREMIUM CARD HOVER ====================
// Subtle card elevation with refined shadow transitions
export const premiumCardHover = {
  whileHover: { 
    y: -6,
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
  },
  whileTap: { 
    y: -2,
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  },
  transition: { 
    duration: 0.35, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

export const premiumCardHoverSubtle = {
  whileHover: { 
    y: -3,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  whileTap: { 
    y: 0,
  },
  transition: { 
    duration: 0.3, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

// ==================== PREMIUM BUTTON HOVER ====================
// Enterprise button interactions with restrained motion
export const premiumButtonHover = {
  whileHover: { 
    scale: 1.01,
    y: -1,
  },
  whileTap: { 
    scale: 0.99,
    y: 0,
  },
  transition: { 
    duration: 0.25, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

export const premiumButtonHoverWithShadow = {
  whileHover: { 
    scale: 1.02,
    y: -2,
    boxShadow: '0 12px 24px rgba(26, 35, 126, 0.15)',
  },
  whileTap: { 
    scale: 0.98,
    y: 0,
    boxShadow: '0 4px 12px rgba(26, 35, 126, 0.1)',
  },
  transition: { 
    duration: 0.3, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

// ==================== IMAGE HOVER EFFECTS ====================
// Smooth image zoom without excessive motion
export const premiumImageHover = {
  whileHover: { 
    scale: 1.03,
  },
  transition: { 
    duration: 0.4, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

export const premiumImageHoverSubtle = {
  whileHover: { 
    scale: 1.01,
  },
  transition: { 
    duration: 0.35, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

// ==================== PARALLAX SCROLL EFFECT ====================
// Subtle parallax movement for depth without dizziness
export const parallaxScroll = (offset: number) => ({
  initial: { y: 0 },
  whileInView: { y: offset * 0.3 }, // Reduced multiplier for subtle effect
  transition: { 
    duration: 0.8, 
    ease: 'easeOut' 
  },
  viewport: { once: false, margin: '0px 0px -100px 0px' }
});

// ==================== STAGGERED ICON ANIMATIONS ====================
// Icons reveal in sequence for elegant introduction
export const staggerIconContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerIconItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== PREMIUM ICON HOVER ====================
// Refined icon interactions without excessive bounce
export const premiumIconHover = {
  whileHover: { 
    scale: 1.1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  whileTap: { 
    scale: 0.95,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

// ==================== TEXT SLIDE & FADE ====================
// Text enters with refined motion for readability
export const textSlideFade: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

export const textSlideFadeLeft: Variants = {
  hidden: { opacity: 0, x: -30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

export const textSlideFadeRight: Variants = {
  hidden: { opacity: 0, x: 30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== PREMIUM STAGGER CONTAINER ====================
// Refined stagger timing for enterprise presentations
export const premiumStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const premiumStaggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== SMOOTH SECTION TRANSITION ====================
// Smooth section entries without jarring motion
export const smoothSectionEntry: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ==================== LINK UNDERLINE ANIMATION ====================
// Subtle underline expansion on hover for premium feel
export const premiumLinkUnderline = {
  whileHover: { 
    backgroundSize: '100% 2px',
  },
  transition: { 
    duration: 0.3, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

// ==================== BADGE FADE IN ====================
// Badges appear smoothly without attention-grabbing motion
export const badgeFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94]
    },
  },
};

// ==================== PREMIUM LINK HOVER ====================
// Link hover with subtle movement and color shift
export const premiumLinkHover = {
  whileHover: { 
    x: 3,
    color: 'rgb(37, 99, 235)',
  },
  transition: { 
    duration: 0.25, 
    ease: [0.25, 0.46, 0.45, 0.94]
  },
};

// ==================== GRADIENT ANIMATION ====================
// Subtle gradient color shift for visual interest
export const gradientAnimation: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// ==================== LIGHT BOUNCE (Minimal) ====================
// Very subtle bounce for special emphasis (used sparingly)
export const lightBounce = {
  animate: { y: [0, -3, 0] },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
