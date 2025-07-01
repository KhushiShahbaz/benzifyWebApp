// tailwind.config.js
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
              lightBeam: {
                '0%': { transform: 'translateX(-50%)' },
                '100%': { transform: 'translateX(50%)' },
              },
            },
            animation: {
              lightBeam: 'lightBeam 5s linear infinite',
            },
            
          },
    },
    plugins: [],
  };
  