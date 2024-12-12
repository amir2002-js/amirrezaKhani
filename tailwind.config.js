/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				md: "3rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},

		extend: {
			keyframes:{
				expanded:{
					"0%" : {width : "0"},
					"100%" : {width : "100%"},
				}
			},
			animation:{
				expanded : "expanded 300ms ease-in",
			},
			maxWidth: {
				310: "1240px",
			},
			colors: {
				"primary-gray": "#F0F0F0",
			},

			screens: {
				msm: "390px",
				xmd: "975px",
			},
		},
	},
	plugins: [],
};
