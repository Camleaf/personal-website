/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            "cl-accent":"var(--cl-accent)",
            "cl-accent-dark":"var(--cl-accent-dark)",
            "cl-accent-light":"var(--cl-accent-light)",
            "cl-black":"var(--cl-black)",
            "cl-gray-6":"var(--cl-gray-6)",
            "cl-gray-5":"var(--cl-gray-5)",
            "cl-gray-4":"var(--cl-gray-4)",
            "cl-gray-3":"var(--cl-gray-3)",
            "cl-gray-2":"var(--cl-gray-2)",
            "cl-gray-1":"var(--cl-gray-1)",
            "cl-white":"var(--cl-white)"
        }
    },
    screens: {
      'sm': '0px',
      'md': '590px',
      'lg': '1200px',
    }
  },
  plugins: [],
}
