/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './frontend/src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
                extend: {
                    fontFamily: {
                        'quicksand': ['Quicksand', 'sans-serif'],
                        'berkshire': ['"Berkshire Swash"', 'cursive']
                    },
                    backgroundImage: {
                        'hero': "url('./assets/image_skulliver.jpeg')",
                        'rainbow-grad': 'linear-gradient(45deg,#fb0094,#0000ff,#00ff00,#ffff00,#ff0000,#fb0094,#0000ff,#00ff00,#ffff00,#ff0000)',
                        'chill-grad': 'linear-gradient( 111.6deg,  rgba(73,235,221,1) -0%, rgba(83,222,219,1) 7.1%, rgba(105,191,217,1) 13.4%, rgba(127,157,214,1) 18%, rgba(155,113,208,1) 23.9%, rgba(178,73,201,1) 28.8%, rgba(200,45,192,1) 33.3%, rgba(213,42,180,1) 38%, rgba(232,44,145,1) 44.2%, rgba(239,45,128,1) 52.4%, rgba(249,66,107,1) 59.7%, rgba(252,105,98,1) 67.3%, rgba(252,105,98,1) 74.4%, rgba(254,145,92,1) 82.2%, rgba(255,189,86,1) 88.2%, rgba(254,227,80,1) 92.8%, rgba(254,248,75,1) 96.4%, rgba(73,235,221,1) 100% )'
                    },
                    backgroundSize: {
                        '400': '400%'
                    },
                    'animation': {
                        'glow': 'glow 6s ease infinite',
                        'shine': 'shine 30s linear infinite'
                    },
                    'keyframes': {
                        'glow': {
                            '0%, 100%': {
                                'content': '""',
                                'background-size': '200% 200%',
                                'background-position': 'left center'
                            },
                            '50%': {
                                'content': '""',
                                'background-size': '200% 200%',
                                'background-position': 'right center'
                            }
                        },
                        'shine': {
                            '0%': {
                                'background-position': '0 0'
                            },
                            '50%': {
                                'background-position': '-400% 0'
                            },
                            '100%': {
                                'background-position': '0 0'
                            }
                        },
                    }
                },
            },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('not-last-of-type', '&:not(:last-of-type)')
    })
  ]
}
