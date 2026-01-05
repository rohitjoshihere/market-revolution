/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CB8AB',
          foreground: '#ffffff',
          50: '#e9f4f3',
          100: '#d3e9e7',
          200: '#a7d3cf',
          300: '#7bbdb7',
          400: '#4CB8AB',
          500: '#4CB8AB',
          600: '#3d9388',
          700: '#2e6e66',
          800: '#1f4944',
          900: '#102422',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: '#e9f4f3',
          foreground: '#1f2937',
          50: '#f5faf9',
          100: '#e9f4f3',
          200: '#d3e9e7',
          300: '#bddddb',
          400: '#a7d1cf',
          500: '#e9f4f3',
          600: '#bac3c2',
          700: '#8b9291',
          800: '#5c6161',
          900: '#2d3030',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

