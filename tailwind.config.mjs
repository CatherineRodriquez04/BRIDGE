/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	'./pages/**/*.{js,jsx}',
	'./components/**/*.{js,jsx}',
	'./app/**/*.{js,jsx}',
	'./src/**/*.{js,jsx}',
	],
	prefix: "",
	theme: {
	container: {
		center: true,	
		padding: '0'
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily:{
		primary: ['var(--font-jersey)', 'sans-serif'], 
	},
	extend: {

		colors: {
			primary: 'white',
			accent: {
				DEFAULT: '#0B0C2A',
				hover: '#0B0C2A',
			},
			accent2: {
				DEFAULT: '#382966',
				hover: '#382966',
			},
			accent3: {
				DEFAULT: '#72E8C9',
				hover: '#72E8C9',
			},
			accent4: {
				DEFAULT: '#C4F7BC',
				hover: '#C4F7BC',
			}
		},

		
		},
	},
	plugins: [],
  }