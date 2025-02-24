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
		primary: "var(--font-roboto)",
		title: "['Source Sans Pro', sans-serif]",
	  },
	  extend: {
  
		colors: {
		  primary: 'white',
		  accent: {
			DEFAULT: '#c13516',
			hover: '#c13516',
		  },
		  accent2: {
			DEFAULT: '#864715',
			hover: '#0864715',
		  }
		},
  
		
	  },
	},
	plugins: [],
  }