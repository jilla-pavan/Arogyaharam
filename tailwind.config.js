/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bottle green accents (primary brand color)
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4cb',
          300: '#8fcea8',
          400: '#5cb07d',
          500: '#388e5c', // Main bottle green
          600: '#2a7149',
          700: '#235a3c',
          800: '#1f4932',
          900: '#1a3d2a',
        },
        // Earthy beige/off-white backgrounds
        beige: {
          50: '#fefcfb',
          100: '#faf7f2',
          200: '#f5ede3',
          300: '#ede0d0',
          400: '#e3d1b8',
          500: '#d4c0a0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
