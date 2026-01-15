/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],

        roboto: ["Roboto_400Regular"],
        "roboto-medium": ["Roboto_500Medium"],
        "roboto-bold": ["Roboto_700Bold"],
      },
      colors: {
        primary: "#0D1F42",
        secondary: "#BC002E",
      },
    },
  },
  plugins: [],
};
