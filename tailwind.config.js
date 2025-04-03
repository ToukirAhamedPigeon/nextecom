/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: {
        "50": "#191c1f",   // Lightest in your original
        "100": "#111417",  
        "200": "#0e1114",  
        "300": "#0a0d10",  
        "400": "#070a0d",  
        "500": "#04070a",  
        "600": "#010407",  
        "700": "#000104",  
        "800": "#000000",  // Pure black
        "900": "#000000"   // Pure black (duplicate)
      },
    // coral
    primary: {
      "50": "#fef5f2",
      "100": "#ffe7e1",
      "200": "#ffd4c8",
      "300": "#ffb6a2",
      "400": "#fc7753",
      "500": "#f5653e",
      "600": "#e24920",
      "700": "#be3b17",
      "800": "#9d3417",
      "900": "#82301a",
      "950": "#471508",
    },
    secondary: {
      "50": "#f5f6f9",
      "100": "#e8e9f1",
      "200": "#d6d8e7",
      "300": "#b9bcd7",
      "400": "#979bc3",
      "500": "#7e7eb3",
      "600": "#6f6ca4",
      "700": "#666095",
      "800": "#57527b",
      "900": "#403d58",
      "950": "#2f2d3e",
    },
    success: {
      "50": "#e6f9f2",
      "100": "#c3f2e2",
      "200": "#83e6c5",
      "300": "#33d19e",
      "400": "#08b88b",
      "500": "#009e74",
      "600": "#007a5b",
      "700": "#00563d",
      "800": "#00331f",
      "900": "#00110f",
    },
    warning: {
      "50": "#fdf8e5",
      "100": "#fbf1d1",
      "200": "#f8e2a3",
      "300": "#f4d375",
      "400": "#f0c447",
      "500": "#eba600",
      "600": "#b38200",
      "700": "#805d00",
      "800": "#4d3900",
      "900": "#1a1400",
    },
    danger: {
      "50": "#fde8e9",
      "100": "#fbd1d5",
      "200": "#f8b3b9",
      "300": "#f49097",
      "400": "#f06d77",
      "500": "#eb4a57",
      "600": "#e22635",
      "700": "#b91e2a",
      "800": "#911720",
      "900": "#490c10",
    },
    
    //additional colors
    white: "#ffffff",
    black: "#000000",

    //default colors
    slate: colors.slate,
    red: colors.red,
    pink: colors.pink,
    indigo: colors.indigo,
    neutral: colors.neutral,
    green: colors.green,
    blue: colors.blue,
    transparent: "transparent",
    heading: "#979798",
    body: colors.slate[700],
    background: colors.gray[100],
    },
        //typography
      //2.a Font Weight
      //2.b Font Size
      //2.c Line Height
      //2.d Letter Spacing
      //2.e Font Family

      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      fontSize: {
        //default
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      
        display1:[
          "64px",
          {
            lineHeight: "72px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        display2:[
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        display3:[
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        display4:[
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        display5:[
          "36px",
          {   
            lineHeight: "44px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        //Heading
        heading1:[
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        heading2:[
          "28px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        heading3:[
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "600", //semi bol
          },
        ],
        heading4:[
          "16px",
          {
            lineHeight: "56px",
            letterSpacing: "0.012rem",
            fontWeight: "600", //semi bol
          },
        ],
        heading5:[
          "14px",
          {
            lineHeight: "48px",
            letterSpacing: "0.012rem",
            fontWeight: "600", //semi bol
          },
        ],

        // Labels
        label1:[
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "500", //semi bold
          },
        ],
        label2:[
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "500", //semi bold     
          },
        ],
        label3:[
          "14px",
          {
            lineHeight: "20px",   
            letterSpacing: "0",
            fontWeight: "500", //semi bold     
          },
        ],
        label4:[
          "12px",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0",
            fontWeight: "500", //semi bold         
          },
        ],
        label5:[
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: "500", //semi bold         
          },
        ],

        // Body
        //XXL
      "body-xxl-400":[   
        "24px",
        {
        lineHeight: "32px",
        letterSpacing: "0",
        fontWeight: "400", //normal
        },
    ],
    "body-xxl-500":[   
        "24px",
        {
        lineHeight: "32px",
        letterSpacing: "0",
        fontWeight: "500", //normal
        },
    ],
    "body-xxl-600":[   
        "24px",
        {
        lineHeight: "32px",
        letterSpacing: "0",
        fontWeight: "600", //normal
        },
    ],
        //XL
      "body-xl-400":[   
          "20px",
          {
          lineHeight: "28px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-xl-500":[   
          "20px",
          {
          lineHeight: "28px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-xl-600":[   
          "20px",
          {
          lineHeight: "28px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],
        //Large
      "body-l-400":[   
          "18px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-l-500":[   
          "18px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-l-600":[   
          "18px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],

        //Medium
        "body-md-400":[   
          "16px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-md-500":[   
          "16px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-md-600":[   
          "16px",
          {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],
      //small
      "body-sm-400":[   
          "14px",
          {
          lineHeight: "20px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-sm-500":[   
          "14px",
          {
          lineHeight: "20px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-sm-600":[   
          "14px",
          {
          lineHeight: "20px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],
      //Tiny
      "body-tiny-400":[   
          "12px",
          {
          lineHeight: "16px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-tiny-500":[   
          "12px",
          {
          lineHeight: "16px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-tiny-600":[   
          "12px",
          {
          lineHeight: "16px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],
      //Extra Small
      "body-xs-400":[   
          "11px",
          {
          lineHeight: "12px",
          letterSpacing: "0",
          fontWeight: "400", //normal
          },
      ],
      "body-xs-500":[   
          "11px",
          {
          lineHeight: "12px",
          letterSpacing: "0",
          fontWeight: "500", //normal
          },
      ],
      "body-xs-600":[   
          "11px",
          {
          lineHeight: "12px",
          letterSpacing: "0",
          fontWeight: "600", //normal
          },
      ],

        //additional
        h1: [
          "5rem",
          {
            lineHeight: "5rem",
            letterSpacing: "0.0375",
            fontWeight: "700",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.035",
            fontWeight: "700",
          },
        ],

        h3: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "0.05",
            fontWeight: "700",
          },
        ],

        h4: [
          "2rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],

        h5: [
          "1.5rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0",
            fontWeight: "600",
          },
        ],

        p: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],

        body: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],

        span: [
          "0.75rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
      },

      screens: {
        'xs': '320px',
        'tiny': '360px',
        'sm': '575px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px'
      },
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1320px',
          '2xl': '1320px',
          '3xl': '1320px',
          '4xl': '1320px'
        },
        padding: {
          DEFAULT: '0rem',
          sm: '0rem',
          md: '0rem',
          lg: '0rem',
          xl: '0rem',
          '2xl': '0rem',
          '3xl': '0rem',
          '4xl': '0rem',
        }
      },
      
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

