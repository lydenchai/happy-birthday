module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        romantic1: '#ff4b91',
        romantic2: '#ff8fab',
        romantic3: '#ffc2d1',
      },
      boxShadow: {
        romantic: '0 4px 24px 0 rgba(255, 75, 145, 0.15)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};