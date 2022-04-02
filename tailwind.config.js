module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-color':'#2f2e41',
        'secondary-color':'#FF9064',
        'third-color':'#679ca5',
      },
    },
    minHeight: {
      "9/10": "90vh",
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
};
