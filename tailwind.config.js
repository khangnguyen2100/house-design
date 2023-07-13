/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
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
        medium: '977px',
        large: '1364px',
      },
      maxWidth: {
        small: '640px',
        medium: '976px',
        large: '1364px',
      },
      colors: {
        typo: {
          primary: '#222222',
          secondary: '#7e8183',
        },
        sections: {
          default: '#dae0e6',
          paper: '#ffffff',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
