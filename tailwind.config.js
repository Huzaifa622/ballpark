import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
  	extend: {
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			blink: 'blink 1s infinite',
  			'shiny-text': 'shiny-text 8s infinite'
  		},
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				blink: {
  					'0%, 100%': {
  						opacity: 1
  					},
  					'50%': {
  						opacity: 0
  					}
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			},
			  "beam": {
				'0%': {
				  left: '-100%', // Start position off-screen
				},
				'100%': {
				  left: '100%', // End position off-screen
				},
			  },
			
  		},
  		fontFamily: {
  			signika: [
  				'Signika'
  			],
			poppins:["Poppins"],
			Roboto:["Roboto"],
			dance:["Dancing Script"],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },

  plugins: [require("tailwindcss-animate") , addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}