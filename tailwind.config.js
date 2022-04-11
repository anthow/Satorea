module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-color':'#888888',
        'secondary-color':'#FF9064',
        'third-color':'#333333',
        'fourth-color': '#FFDEC7'
      },
    },
    minHeight: {
      "9/10": "90vh",
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
};
