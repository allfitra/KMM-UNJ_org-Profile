/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
       animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        glowBorder: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 0, 0.7)',
            backgroundPosition: '0% 50%',
          },
          '50%': {
            boxShadow: '0 0 6px 6px rgba(255, 255, 0, 0.7)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 0, 0.7)',
            backgroundPosition: '200% 50%',
          },
        },
      },
      animation: {
        glowBorder: 'glowBorder 2s linear infinite',
      },
      colors: {
        greyDestimate: {
          50: '#E1E1E1',
          80: '#BEBEBE',
          100: '#717171',
        },
        redDestimate: {
          50: '#ED6E6E',
          100: '#E10E0E',
        },
        greenDestimate: {
          100: '#36B734',
        },
        dashboardDestimate: {
          100: '#EEEFF8',
        },
        primary: {
          10: '#C3CEF6',
          20: '#ADBCF2',
          40: '#8099EC',
          60: '#5475E5',
          80: '#2D68F8',
          100: '#1C3FB7',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        secondary: {
          50: '#FEF7EC',
          100: '#FCE6C3',
          200: '#fbd9a5',
          300: '#F9C87C',
          400: '#F8BD63',
          500: '#f6ad3c',
          600: '#E09D37',
          700: '#AF7B2B',
          800: '#875F21',
          900: '#674919',
        },
        tertiary: {
          50: '#FEF6EE',
          100: '#FDEAD7',
          200: '#F9DBAF',
          300: '#F7B27A',
          400: '#F38744',
          500: '#EF6820',
          600: '#E04F16',
          700: '#B93815',
          800: '#932F19',
          900: '#772917',
        },
        success: {
          50: '#E6F9F1',
          100: '#B2ECD3',
          200: '#8CE3BD',
          300: '#58D69F',
          400: '#38CE8D',
          500: '#06C270',
          600: '#05B166',
          700: '#048A50',
          800: '#036B3E',
          900: '#03512F',
        },
        error: {
          50: '#FFF5F5',
          100: '#FFC2C2',
          200: '#FFF5F5',
          300: '#FF7C7C',
          400: '#FF6262',
          500: '#FF3B3B',
          600: '#E83636',
          700: '#B52A2A',
          800: '#8C2020',
          900: '#6B1919',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
