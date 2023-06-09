/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src/assets/images/background.png')"
      },
      colors: {
        nav: 'rgba(206, 231, 241, 0.4)',
        azulito: '#01A1FA',
        grisecito: '#313040',
        primary: '#012A41',
        secondary: '#00A4FF',
        borderShadow: '#1B4A64'

      },
      boxShadow: {
        nav: '0px 1px 22px rgba(0, 0, 0, 0.05);'
      },
      fontFamily: {
        sans: ['Poppins', defaultTheme.fontFamily.sans]
      }
    }

  },
  plugins: []
}
