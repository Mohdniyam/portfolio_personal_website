/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {cd
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // ✅ Default font everywhere
      },
      colors: {
        brandWhite: "#FFFFFF",
        brandGrey: {
          light: "#F5F5F5",
          DEFAULT: "#9CA3AF", // Tailwind’s gray-400-ish
          dark: "#4B5563", // Tailwind’s gray-600-ish
        },
      },
    },
  },
  plugins: [],
};
