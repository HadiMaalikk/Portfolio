/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
		keyframes: {
			float: {
				'0%, 100%': { transform: 'translateY(0px)'},
				'50%': {transform: 'translateY(-10px)'},
			},
		},
		animation: {
			float: 'float 3s ease-in-out infinite',
		},
  		fontFamily: {
  			century: [
  				'Century Gothic',
  				'sans-serif'
  			],
  		roboto: [
  				'Roboto',
  				'sans-serif'
  			],
		inter: [
			'Inter',
			'sans-serif'
		],
		labelle: [
			'"La Belle Aurore"',
			'cursive'
		]
  		}
  	}
  },
  plugins: [],
};
