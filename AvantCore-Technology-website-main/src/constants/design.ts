// Design System Constants
export const COLORS = {
  primary: {
    blue: '#1e3a8a',      // Deep Blue - Main brand
    darkBlue: '#0f172a',   // Dark Navy - Headers
    lightBlue: '#3b82f6',  // Medium Blue - Interactive
  },
  accent: {
    orange: '#f97316',     // Orange - Highlights & CTAs
  },
  neutral: {
    white: '#ffffff',
    lightGray: '#f8fafc',
    mediumGray: '#e2e8f0',
    darkGray: '#475569',
    textGray: '#64748b',
  },
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  }
};

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
};

// Section spacing for premium layouts
export const SECTION_SPACING = {
  compact: {
    vertical: '48px',
    mobileVertical: '32px',
  },
  standard: {
    vertical: '64px',
    mobileVertical: '40px',
  },
  generous: {
    vertical: '80px',
    mobileVertical: '48px',
  },
  hero: {
    vertical: '96px',
    mobileVertical: '56px',
  },
};

export const BREAKPOINTS = {
  mobile: '320px',
  smallMobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1536px',
};

export const TYPOGRAPHY = {
  // Display tier - Hero/Landing
  h1: {
    fontSize: '52px',
    fontWeight: 700,
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    mobileFontSize: '32px',
    mobileLineHeight: '1.2',
  },
  // Section headers - Premium feel
  h2: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
    mobileFontSize: '28px',
    mobileLineHeight: '1.3',
  },
  // Subsection headers
  h3: {
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '1.35',
    mobileFontSize: '22px',
    mobileLineHeight: '1.4',
  },
  // Card/feature titles
  h4: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '1.4',
    mobileFontSize: '18px',
    mobileLineHeight: '1.45',
  },
  // Subheadings
  h5: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1.5',
  },
  // Body text - Optimized for readability
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.65',
    letterSpacing: '0.3px',
  },
  // Secondary body - Slightly smaller
  bodySmall: {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.2px',
  },
  // Caption/metadata
  caption: {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '1.5',
    letterSpacing: '0.5px',
  },
  // Overline/labels
  label: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '1.4',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
  },
};

export const SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px rgba(0, 0, 0, 0.08)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
  xl: '0 12px 24px rgba(0, 0, 0, 0.12)',
  '2xl': '0 16px 32px rgba(0, 0, 0, 0.15)',
};

export const BORDER_RADIUS = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  full: '9999px',
};

export const TRANSITIONS = {
  fast: '200ms ease-out',
  base: '300ms ease-out',
  slow: '500ms ease-out',
  slowest: '800ms ease-out',
};
