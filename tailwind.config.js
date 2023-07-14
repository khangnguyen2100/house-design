/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: ['var(--font-montserrat)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        mobile: { max: '480px' },
        mdu: { min: '750px' },
        mdd: { max: '750px' },
        lgu: { min: '1024px' }, // large up
        lgd: { max: '1020px' }, // large down
        stu: { min: '1366px' },
        std: { max: '1366px' },
        xlu: { min: '1536px' }, // extra large up
        xld: { max: '1536px' }, // extra large down
        slgu: { min: '1700px' }, // super large up
      },
      spacing: {
        small: '640px',
        medium: '976px',
        large: '1364px',
      },
      maxWidth: {
        small: '640px',
        medium: '976px',
        large: '1320px',
      },
      colors: {
        primary: '#454545',
        typo: {
          1: '#0d0d0d',
          2: '#4d4d4d',
          3: '#555555',
          4: '#6b6b6b',
          5: '#939597',
        },
        sections: {
          1: '#eeeeee',
          2: '#f5f5f5',
          3: '454545',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
