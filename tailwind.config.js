/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b8bb",

          secondary: "#c14700",

          accent: "#9b4100",

          neutral: "#081123",

          "base-100": "#f0fdff",

          info: "#00cdec",

          success: "#00a86d",

          warning: "#e1af00",

          error: "#cf344e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
