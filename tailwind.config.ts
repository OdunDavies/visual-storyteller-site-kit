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
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
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
				cinematic: {
					'black': 'hsl(var(--cinematic-black))',
					'dark': 'hsl(var(--cinematic-dark))',
					'gray-dark': 'hsl(var(--cinematic-gray-dark))',
					'gray': 'hsl(var(--cinematic-gray))',
					'gray-light': 'hsl(var(--cinematic-gray-light))',
					'light': 'hsl(var(--cinematic-light))',
					'white': 'hsl(var(--cinematic-white))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'cinematic-reveal': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(4px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'film-grain': {
					'0%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-1px, -1px)' },
					'20%': { transform: 'translate(1px, 1px)' },
					'30%': { transform: 'translate(-1px, 1px)' },
					'40%': { transform: 'translate(1px, -1px)' },
					'50%': { transform: 'translate(0, 0)' },
					'60%': { transform: 'translate(1px, 1px)' },
					'70%': { transform: 'translate(-1px, -1px)' },
					'80%': { transform: 'translate(1px, -1px)' },
					'90%': { transform: 'translate(-1px, 1px)' },
					'100%': { transform: 'translate(0, 0)' }
				},
				'shutter': {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0)' },
					'100%': { transform: 'scaleY(1)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)' 
					}
				},
				'film-roll': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'cinematic-reveal': 'cinematic-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
				'film-grain': 'film-grain 2s infinite',
				'shutter': 'shutter 0.3s ease-in-out',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'film-roll': 'film-roll 20s linear infinite'
			},
			fontFamily: {
				'cinematic': ['Playfair Display', 'serif'],
				'modern': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;