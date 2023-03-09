/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				comic: ["Comic Neue", "cursive"],
			},
		},
		screens: {
			xl: { max: "1536px" },
			lg: { max: "1200px" },
			md: { max: "992px" },
			sm: { max: "750px" },
		},
		keyframes: {
			wave: {
				"0%": { transform: "rotate(0.0deg)" },
				"10%": { transform: "rotate(14deg)" },
				"20%": { transform: "rotate(-8deg)" },
				"30%": { transform: "rotate(14deg)" },
				"40%": { transform: "rotate(-4deg)" },
				"50%": { transform: "rotate(10.0deg)" },
				"60%": { transform: "rotate(0.0deg)" },
				"100%": { transform: "rotate(0.0deg)" },
			},
		},
		animation: {
			wiggle: "wiggle 5s ease-in-out infinite",
		},
	},
	plugins: [],
};
