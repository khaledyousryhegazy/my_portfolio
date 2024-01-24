/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sugarColor: "var(--sugar)",
        lightColor: "var(--light)",
        textLightColor: "var(--text-light)",
        blackColor: "var(--black)",
        grayColor: "var(--gray)",
        blackOpacity: "var(--black-opacity)",
      },
    },
  },
  plugins: [],
};
