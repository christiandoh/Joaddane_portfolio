import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.resolve(__dirname, 'index.html'),
    path.resolve(__dirname, 'main.jsx'),
    path.resolve(__dirname, 'Layout.jsx'),
    path.resolve(__dirname, 'portfolio.jsx'),
    path.resolve(__dirname, 'pages/**/*.jsx'),
    path.resolve(__dirname, 'context/**/*.jsx'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
