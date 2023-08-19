/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      'Mobile': '375px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      
      colors:{
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
         'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
         'Dark-Blue': 'hsl(218, 23%, 16%)',
          },
          fontFamily: {
            'Manrope': ['Manrope', 'sans-serif']
           },
           
  },
   
},


  plugins: [],
}

