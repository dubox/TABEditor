/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /-translate-y-[0-4]/,
      variants: [],
    },
    'translate-x-[0px]',
    'translate-x-[9px]',
    'translate-x-[18px]',
    'translate-x-[27px]',
    'translate-x-[36px]',
    'translate-x-[45px]',
  ],
}

