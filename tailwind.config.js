/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark-moss-green": '#606C38',
        "pakistan-green": '#283618',
        "cornsilk": '#FEFAE0',
        "earth-yellow": '#DDA15E',
        "tigers-eye": '#BC6C25',
      },
    },
  },
  plugins: [],
};
