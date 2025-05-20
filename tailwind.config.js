/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
            fontFamily: {
                seasons: ['TheSeasons', 'serif'],
                raleway: ['Raleway', 'sans-serif'],
            },
            colors: {
                'custom-brown': '#4E3D32',
            },
        },
    },
    plugins: [],
} 