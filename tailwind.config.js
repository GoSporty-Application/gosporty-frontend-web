/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        nunito: "'Nunito', sans-serif",
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
    colors: {
      'white':'#ffffff',
      'gosporty-blue':'#0D2C54',
      'gosporty-orange':'#FF5A1E',
      'gosporty-gray':'#F2F2F2',
      'gosporty-green':'#007849',
      'gosporty-yellow':'#F7B500'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
