import tailwindcssAnimate from 'tailwindcss-animate';

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontSize: {
				// Display sizes for hero sections
				'display-lg': ['52px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
				'display-md': ['40px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
				// Heading sizes
				'heading-lg': ['28px', { lineHeight: '1.35', fontWeight: '600' }],
				'heading-md': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
				'heading-sm': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
				// Body sizes with improved readability
				'body-lg': ['16px', { lineHeight: '1.65', letterSpacing: '0.3px', fontWeight: '400' }],
				'body-md': ['15px', { lineHeight: '1.6', letterSpacing: '0.2px', fontWeight: '400' }],
				'body-sm': ['13px', { lineHeight: '1.5', letterSpacing: '0.5px', fontWeight: '500' }],
				'label-xs': ['12px', { lineHeight: '1.4', letterSpacing: '0.8px', fontWeight: '600' }],
			},
			lineHeight: {
				'tight': '1.15',
				'snug': '1.25',
				'normal': '1.35',
				'relaxed': '1.5',
				'loose': '1.65',
			},
			letterSpacing: {
				'tight': '-0.02em',
				'compact': '-0.01em',
				'normal': '0px',
				'subtle': '0.2px',
				'expanded': '0.3px',
				'wide': '0.5px',
				'wider': '0.8px',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#F5F7FA',
				foreground: '#374151',
				primary: {
					DEFAULT: '#1A237E',
					foreground: '#FFFFFF',
					50: '#e8eaf6',
					500: '#1976D2',
					700: '#1A237E',
					800: '#1A237E',
					900: '#0D1333',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#FF9800',
					foreground: '#FFFFFF',
					400: '#FFB74D',
					500: '#FF9800',
					600: '#F57C00',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blue: {
					50: '#e3f2fd',
					100: '#bbdefb',
					200: '#90caf9',
					300: '#64b5f6',
					400: '#42a5f5',
					500: '#1976D2',
					600: '#1565c0',
					700: '#1A237E',
					800: '#1A237E',
					900: '#0D1333',
				},
				orange: {
					50: '#fff3e0',
					100: '#ffe0b2',
					200: '#ffcc80',
					300: '#ffb74d',
					400: '#ffa726',
					500: '#FF9800',
					600: '#F57C00',
					700: '#e65100',
					800: '#bf360c',
					900: '#8d6e63',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-in-out',
				'slide-up': 'slide-up 0.8s ease-in-out',
				'slide-in-left': 'slide-in-left 0.8s ease-in-out',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
