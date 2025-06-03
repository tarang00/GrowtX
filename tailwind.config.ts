
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#0A0A0A',
				foreground: '#F8F8F2',
				primary: {
					DEFAULT: '#D4AF37',
					foreground: '#1A1A1A'
				},
				secondary: {
					DEFAULT: '#2D1B69',
					foreground: '#F8F8F2'
				},
				destructive: {
					DEFAULT: '#E74C3C',
					foreground: '#F8F8F2'
				},
				muted: {
					DEFAULT: '#1E1E1E',
					foreground: '#A0A0A0'
				},
				accent: {
					DEFAULT: '#9B59B6',
					foreground: '#F8F8F2'
				},
				popover: {
					DEFAULT: '#1A1A1A',
					foreground: '#F8F8F2'
				},
				card: {
					DEFAULT: '#1A1A1A',
					foreground: '#F8F8F2'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'system': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
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
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-gold': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
					}
				},
				'glow-gold': {
					'0%, 100%': { 
						boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 50px rgba(212, 175, 55, 0.6)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
				'glow-gold': 'glow-gold 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
