import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const COLORS = {
	accent: '#e2fb6c',
	'dark-accent': '#b9d148',
	primary: '',
	secondary: '',
	bg: '#0d0d0d',
	sidebar: '#121212',
	player: '#151515',
	white: '#fdfdfd',
	black: '#020202',
	error: '#ea0606',
	'white-20': '#ffffff20',
	'white-33': '#ffffff33',
	'white-66': '#ffffff66',
	'white-7a': '#ffffff7a',
	'white-99': '#ffffff99',
	transparent: 'transparent'
}

const config: Config = {
	darkMode: 'class',
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans]
			},
			colors: COLORS,
			keyframes: {
				hideSidebar: {
					from: {
						width: '18rem',
						transform: 'translateX(0)',
						opacity: '1'
					},
					to: {
						width: '0',
						transform: 'translateX(-100%)',
						opacity: '0'
					}
				},
				showSidebar: {
					from: {
						width: '0',
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					to: {
						width: '18rem',
						transform: 'translateX(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				rotate: 'rotate 0.7s',
				hideSidebar: 'hideSidebar .35s forwards',
				showSidebar: 'showSidebar .3s forwards'
			},
			fontSize: {
				xs: '0.9rem',
				sm: '1.07rem',
				base: '1.18rem',
				lg: '1.24rem',
				xl: '1.38rem',
				'1.5xl': '1.5rem',
				'2xl': '1.82rem',
				'3xl': '2.22rem',
				'4xl': '2.66rem',
				'5xl': '3.56rem',
				'6xl': '4.44rem',
				'7xl': '5.33rem',
				'8xl': '7.1rem',
				'9xl': '9.5rem'
			},
			transitionDuration: {
				DEFAULT: '266ms'
			}
		},
		screens: {
			xs: '320px',
			sm: '576px',
			'sm-max': { max: '576px' },
			md: '768px',
			'md-max': { max: '768px' },
			lg: '992px',
			'lg-max': { max: '992px' },
			xl: '1200px',
			'xl-max': { max: '1200px' },
			'2xl': '1320px',
			'2xl-max': { max: '1450px' },
			'2.5xl': '1320px',
			'2.5xl-max': { max: '1450px' },
			'3xl': '1600px',
			'3xl-max': { max: '1600px' },
			'4xl': '1850px',
			'4xl-max': { max: '1850px' }
		}
	},
	plugins: []
}
export default config
