import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '0.5em': '0.5em',
        '1em': '1em',
        '2em': '2em',
        '12px':'12px',
        '24px':'24px'
      },
      padding: {
        '0.2em': '0.2em',
        '0.5em': '0.5em',
        '1em': '1em',
        '1.5em': '1.5em',
        '2em': '2em',
        // Add more as needed
      },
      width: {
        '1em': '1em',
        '1.5em': '1.5em',
        '10em': '10em',
        '12em': '12em',
        '15em': '15em',
        '20em': '20em',
      },
      height: {
        '1em': '1em',
        '1.5em': '1.5em',
        '8em': '8em',
        '10em': '10em',
        '15em': '15em',
        '20em': '20em',
      },
      spacing: {
        '100': '200px', // Example value, adjust as needed
      },
      colors:{
        grey:{
          10:'rgba(20, 20, 20, 1)',
          20:'rgba(54, 54, 54, 1)',
          50:'rgba(128, 128, 128, 1)',
          70:'rgba(179, 179, 179, 1)',
          95:'rgba(242, 242, 242, 1)'

        },
        mint:{
          300:'rgba(171, 255, 195, 1)',
          900:'rgba(64, 160, 91, 1)',
        },
        error:{
          600:'rgba(233, 56, 13, 1)'
        },
        success:{
          600:'rgba(0, 163, 68, 1)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
