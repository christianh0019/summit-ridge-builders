/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e3a8a', // Dark Blue? (Placeholder)
                secondary: '#1f2937', // Dark Gray
                accent: '#fbbf24', // Amber/Gold
                light: '#f3f4f6', // Light Gray
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
