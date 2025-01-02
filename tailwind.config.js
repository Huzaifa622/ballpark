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
  			'shiny-text': 'shiny-text 8s infinite',
			  first: "moveVertical 30s ease infinite",
			  second: "moveInCircle 20s reverse infinite",
			  third: "moveInCircle 40s linear infinite",
			  fourth: "moveHorizontal 40s ease infinite",
			  fifth: "moveInCircle 20s ease infinite",
  		},
  		keyframes: {
			   gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
			moveHorizontal: {
				"0%": {
				  transform: "translateX(-50%) translateY(-10%)",
				},
				"50%": {
				  transform: "translateX(50%) translateY(10%)",
				},
				"100%": {
				  transform: "translateX(-50%) translateY(-10%)",
				},
			  },
			  moveInCircle: {
				"0%": {
				  transform: "rotate(0deg)",
				},
				"50%": {
				  transform: "rotate(180deg)",
				},
				"100%": {
				  transform: "rotate(360deg)",
				},
			  },
			  moveVertical: {
				"0%": {
				  transform: "translateY(-50%)",
				},
				"50%": {
				  transform: "translateY(50%)",
				},
				"100%": {
				  transform: "translateY(-50%)",
				},
			  },
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