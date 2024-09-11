
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './mdx-components.tsx',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: "",


  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {






      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },


      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide_left": {
          from: {
            'transform': "translateX(-100%)"
          },
          to: {
            'transform': "translateX(0%)"
          }
        },
        "slide_right": {
          from: {
            'transform': "translateX(0%)"
          },
          to: {
            'transform': "translateX(-100%)"
          }
        },
        "spin": {
          "0%": {
            "transform": "rotate(0deg)"
          },
          "100%": {
            "transform": "rotate(360deg)"
          }
        }
        ,
        "pulse": {

          "0%": {
            "opacity": "1"
          },
          "50%": {
            "opacity": "0.5"
          },
          "100%": {
            "opacity": "1"
          },
        }
      },
    },

    fontFamily: {
      "lucky": ["var(--font-lucky)", "sans-serif"]
    },

    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "slide_left": "slide_left 40s infinite linear ",
      "slide_right": "slide_right 40s infinite linear ",
      "spin": "spin 1s linear infinite",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
    },
  },

  plugins: [],
};