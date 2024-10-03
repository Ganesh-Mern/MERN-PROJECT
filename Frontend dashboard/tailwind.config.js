module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', 'Arial', 'Helvetica', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], 
      },
      fontSize: {
        'xl-custom': '24px', // Custom font size
      },
      fontWeight: {
        'semi-bold': '600', // Custom font weight
      },
      lineHeight: {
        'short': '20px', // Custom line height
      },
      textAlign: {
        'left': 'left', // Custom text alignment
      },
      boxShadow: {
        'custom-shadow': '0px 2px 18.7px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        'custom-bg': 'rgba(252, 252, 254, )',
        'custom-bg-white': 'rgba(255, 255, 255,1)',
        'custom-bg-gray': 'rgba(252, 252, 253, 1)',
        'custom-bg-gray1': 'rgba(247, 248, 249, 1)',
        customGray: 'rgba(157, 158, 163, 1)',
        "bg-1": 'rgba(229, 245, 234, 1)',
        "bg-search": 'rgba(245, 246, 250, 1)',

      },
      
    },
  },
  plugins: [],
}
