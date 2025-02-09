/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'one': "#FEFFFE",
          'two': "#F7F0E6",
        }
      },
    },
    plugins: [],
  };
  