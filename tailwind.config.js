/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
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
        placeholder: '#114E51',
        circle1: '#71FBFF',
        circle2: '#114E51',
        circle3: '#31B3C1',
        circle4: '#226F6D'

      },
      boxShadow: {
        nav: '0px 1px 22px rgba(0, 0, 0, 0.05);',
        innerInputs: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset;',
        form: '5px 5px 4px 0px rgba(0, 0, 0, 0.25) inset, -5px -5px 4px 0px rgba(206, 231, 241, 0.60) inset, -5px -5px 15px 0px #CEE7F1, 5px 5px 15px 0px rgba(163, 177, 198, 0.60);',
        buttonNavMobile: '-9px -9px 16px 0px rgba(255, 255, 255, 0.25), 9px 9px 16px 0px rgba(0, 0, 0, 0.25);'
      },
      fontFamily: {
        sans: ['Poppins', defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'translateY(9rem) translateX(-10rem)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(0rem) translateX(0rem)', opacity: '1' }
        },
        'open-section': {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0rem)', opacity: '1' }
        },
        'open-section-form': {
          '0%': { top: '55%', opacity: '0' },
          '100%': { top: '50%', opacity: '1' }
        }
      },
      animation: {
        'open-section': 'open-section 500ms ease-in-out',
        'open-section-form': 'open-section-form 500ms ease-in-out'
      }
    }

  },
  plugins: []
}
