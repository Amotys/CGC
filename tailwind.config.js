/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.drag-none': {
          'user-drag': 'none',
          '-webkit-user-drag': 'none',
        },
        '.cursor-grab': {
          'cursor': 'grab',
        },
        '.beautiful-scroll': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(240,240,240,0.25)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(240,240,240,0.25)',
            borderRadius: '4px',
          },
        },
      }, []);
    },
  ],
}