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
        azulitoHover: '#007DC2',
        grisecito: '#313040',
        primary: '#012A41',
        secondary: '#00A4FF',
        borderShadow: '#1B4A64',
        circle1: '#71FBFF',
        circle2: '#114E51',
        circle3: '#31B3C1',
        circle4: '#226F6D'

      },
      boxShadow: {
        nav: '0px 1px 22px rgba(0, 0, 0, 0.05);'
      },
      fontFamily: {
        sans: ['Poppins', defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'translateY(9rem) translateX(-10rem)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(0rem) translateX(0rem)', opacity: '1' }
        }
      }

    }

  },
  plugins: []
}
