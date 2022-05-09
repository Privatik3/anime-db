module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '3p': '3px',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#FA6166',
        'second': '#FCE77E',
      },
      spacing: {
        '30p': '30px',
      },
      fontSize: {
        '8p': ['8px', {
          letterSpacing: '0.05em'
        }]
      }
    },
  },
  plugins: [],
}
