/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-white' : '#FFF',
        
       },
       fontFamily: {
         inter: 'Inter'
         
       },
       backgroundImage: {
        'card-bg': "url('/src/assets/Rectangle 9.png')",
      }
    },
  },
  plugins: [
    
    require('flowbite/plugin'),
  ],
}