import defaultTheme from "tailwindcss/defaultTheme"
import flowbite from 'flowbite/plugin'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,svelte}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
  },
  plugins: [flowbite, typography],
}
