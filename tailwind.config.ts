import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0900', // Changed from #3B82F6 to #8B0900
          dark: '#6B0700',    // Darker shade of primary
          light: '#AB1A11',   // Lighter shade of primary
        },
        secondary: {
          DEFAULT: '#10B981', // Green color for secondary elements
          dark: '#059669',
          light: '#34D399',
        },
        background: {
          DEFAULT: '#FBFBFB', // Changed from #FFFFFF to #FBFBFB
          alt: '#F5F5F5',    // Adjusted to match new background color
        },
        text: {
          DEFAULT: '#1F2937',
          light: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config